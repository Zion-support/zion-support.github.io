#!/usr/bin/env python3
"""
API Key Auditor for Zion Tech Group Next.js Application
Continuously audits for missing API keys and organizes them
"""

import os
import json
import re
import subprocess
from pathlib import Path
from datetime import datetime
import yaml

class APIKeyAuditor:
    def __init__(self, project_root="/Users/klebergarciaalcatrao"):
        self.project_root = Path(project_root)
        self.env_file = self.project_root / ".env"
        self.template_file = self.project_root / ".env.template"
        self.keys_db_file = self.project_root / "api-keys-db.yaml"
        self.audit_log = self.project_root / "logs" / "api-key-audit.log"
        
        # Ensure directories exist
        self.audit_log.parent.mkdir(exist_ok=True)
        
        # Known API key patterns and their sources
        self.api_services = {
            # AI/LLM Providers
            "OPENROUTER_API_KEY": {"service": "OpenRouter", "url": "https://openrouter.ai/keys", "required": True},
            "ANTHROPIC_API_KEY": {"service": "Anthropic", "url": "https://console.anthropic.com/", "required": False},
            "OPENAI_API_KEY": {"service": "OpenAI", "url": "https://platform.openai.com/api-keys", "required": False},
            
            # Analytics & Monitoring
            "GOOGLE_ANALYTICS_ID": {"service": "Google Analytics", "url": "https://analytics.google.com/", "required": True},
            "MIXPANEL_TOKEN": {"service": "Mixpanel", "url": "https://mixpanel.com/", "required": False},
            "SENTRY_DSN": {"service": "Sentry", "url": "https://sentry.io/", "required": False},
            
            # Payments
            "STRIPE_PUBLIC_KEY": {"service": "Stripe", "url": "https://dashboard.stripe.com/apikeys", "required": False},
            "STRIPE_SECRET_KEY": {"service": "Stripe", "url": "https://dashboard.stripe.com/apikeys", "required": False},
            
            # Communications
            "TELEGRAM_BOT_TOKEN": {"service": "Telegram Bot", "url": "https://t.me/BotFather", "required": True},
            "TELEGRAM_CHAT_ID": {"service": "Telegram", "url": "https://t.me/userinfobot", "required": False},
            
            # Security
            "JWT_SECRET": {"service": "Internal", "url": None, "required": True, "generate": True},
            "ENCRYPTION_KEY": {"service": "Internal", "url": None, "required": True, "generate": True},
            
            # Optional Services
            "GOOGLE_API_KEY": {"service": "Google Cloud", "url": "https://console.cloud.google.com/apis/credentials", "required": False},
            "GEMINI_API_KEY": {"service": "Google Gemini", "url": "https://makersuite.google.com/app/apikey", "required": False},
        }
        
        # Next.js specific patterns
        self.nextjs_patterns = [
            r'process\.env\.([A-Z_]+)',
            r'NEXT_PUBLIC_([A-Z_]+)',
            r'\$env\.([A-Z_]+)'
        ]
    
    def log(self, message):
        """Log audit activity"""
        timestamp = datetime.now().isoformat()
        log_entry = f"[{timestamp}] {message}\n"
        with open(self.audit_log, "a") as f:
            f.write(log_entry)
        print(log_entry.strip())
    
    def load_env_template(self):
        """Load the .env.template file to see expected keys"""
        if not self.template_file.exists():
            self.log("⚠️  .env.template not found")
            return {}
        
        template_vars = {}
        with open(self.template_file, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    template_vars[key.strip()] = value.strip()
        
        return template_vars
    
    def load_current_env(self):
        """Load current .env file"""
        if not self.env_file.exists():
            self.log("📝 No .env file found - will create from template")
            return {}
        
        env_vars = {}
        with open(self.env_file, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    env_vars[key.strip()] = value.strip()
        
        return env_vars
    
    def scan_code_for_api_usage(self):
        """Scan the codebase for API key usage patterns"""
        self.log("🔍 Scanning codebase for API key usage...")
        
        found_keys = set()
        
        # Search for common API key patterns in code
        try:
            # Use grep to find API key references
            result = subprocess.run([
                "grep", "-r", "-i", "--include=*.js", "--include=*.ts", 
                "--include=*.jsx", "--include=*.tsx", "--exclude-dir=node_modules",
                "--exclude-dir=.next", "--exclude-dir=logs",
                r"API[_-]?KEY\|api[_-]?key\|SECRET\|TOKEN\|process\.env\|NEXT_PUBLIC",
                str(self.project_root)
            ], capture_output=True, text=True, timeout=60)
            
            if result.stdout:
                # Extract potential key names
                lines = result.stdout.split('\n')
                for line in lines:
                    # Look for env var patterns
                    env_matches = re.findall(r'process\.env\.([A-Z_][A-Z0-9_]*)', line)
                    found_keys.update(env_matches)
                    
                    next_public_matches = re.findall(r'NEXT_PUBLIC_([A-Z_][A-Z0-9_]*)', line)
                    found_keys.update(next_public_matches)
                    
        except subprocess.TimeoutExpired:
            self.log("⚠️  Code scan timed out")
        except Exception as e:
            self.log(f"❌ Error scanning code: {e}")
        
        return found_keys
    
    def check_missing_keys(self):
        """Check for missing API keys"""
        self.log("🔍 Checking for missing API keys...")
        
        template_vars = self.load_env_template()
        current_env = self.load_current_env()
        code_usage = self.scan_code_for_api_usage()
        
        # Combine expected keys from template and code usage
        expected_keys = set(template_vars.keys()) | code_usage
        
        # Check what's missing
        missing_keys = []
        empty_keys = []
        
        for key in expected_keys:
            if key not in current_env:
                missing_keys.append(key)
            elif not current_env[key] or current_env[key] in ["", "your-key-here", "your-secret-key-here"]:
                empty_keys.append(key)
        
        self.log(f"📊 Found {len(expected_keys)} expected API keys")
        self.log(f"📝 Current .env has {len(current_env)} keys")
        self.log(f"❌ Missing keys: {len(missing_keys)}")
        self.log(f"⚠️  Empty/placeholder keys: {len(empty_keys)}")
        
        if missing_keys:
            self.log("🔍 Missing API keys:")
            for key in missing_keys:
                service_info = self.api_services.get(key, {"service": "Unknown", "url": None})
                self.log(f"   • {key} ({service_info['service']})")
        
        if empty_keys:
            self.log("⚠️  Empty/placeholder API keys:")
            for key in empty_keys:
                service_info = self.api_services.get(key, {"service": "Unknown", "url": None})
                self.log(f"   • {key} ({service_info['service']})")
        
        return missing_keys, empty_keys
    
    def generate_secure_key(self, key_type="JWT_SECRET"):
        """Generate a secure random key for internal use"""
        import secrets
        import string
        
        if key_type in ["JWT_SECRET", "ENCRYPTION_KEY"]:
            # Generate cryptographically secure random string
            alphabet = string.ascii_letters + string.digits + "!@#$%^&*"
            return ''.join(secrets.choice(alphabet) for _ in range(64))
        else:
            # For other types, generate a reasonable placeholder
            return secrets.token_urlsafe(32)
    
    def update_env_file(self, updates):
        """Update the .env file with new values"""
        self.log("💾 Updating .env file...")
        
        # Load current env
        current_env = self.load_current_env()
        
        # Apply updates
        current_env.update(updates)
        
        # Write back to file
        lines = []
        # Preserve comments and structure from template if it exists
        if self.template_file.exists():
            with open(self.template_file, "r") as f:
                template_lines = f.readlines()
            
            for line in template_lines:
                stripped = line.strip()
                if stripped and not stripped.startswith("#") and "=" in stripped:
                    key, _ = stripped.split("=", 1)
                    key = key.strip()
                    if key in current_env:
                        lines.append(f"{key}={current_env[key]}\n")
                    else:
                        lines.append(line)  # Keep original line
                else:
                    lines.append(line)  # Keep comments and empty lines
            
            # Add any new keys not in template
            for key, value in current_env.items():
                if key not in [line.split("=")[0].strip() for line in lines if "=" in line and not line.strip().startswith("#")]:
                    lines.append(f"{key}={value}\n")
        else:
            # Simple key=value format
            for key, value in current_env.items():
                lines.append(f"{key}={value}\n")
        
        # Write the file
        with open(self.env_file, "w") as f:
            f.writelines(lines)
        
        self.log(f"✅ Updated .env with {len(updates)} new/updated values")
    
    def save_keys_database(self, missing_keys, empty_keys):
        """Save API keys information to a secure database"""
        self.log("💾 Saving API keys database...")
        
        db_data = {
            "last_audit": datetime.now().isoformat(),
            "missing_keys": [],
            "empty_keys": [],
            "services": {}
        }
        
        # Add missing keys info
        for key in missing_keys:
            service_info = self.api_services.get(key, {
                "service": "Unknown", 
                "url": None, 
                "required": False,
                "generate": False
            })
            db_data["missing_keys"].append({
                "key": key,
                "service": service_info["service"],
                "url": service_info["url"],
                "required": service_info.get("required", False),
                "can_generate": service_info.get("generate", False)
            })
        
        # Add empty keys info
        for key in empty_keys:
            service_info = self.api_services.get(key, {
                "service": "Unknown", 
                "url": None, 
                "required": False,
                "generate": False
            })
            db_data["empty_keys"].append({
                "key": key,
                "service": service_info["service"],
                "url": service_info["url"],
                "required": service_info.get("required", False),
                "can_generate": service_info.get("generate", False)
            })
        
        # Add service information
        for key, info in self.api_services.items():
            db_data["services"][key] = info
        
        # Save to YAML file (more readable than JSON for this use case)
        with open(self.keys_db_file, "w") as f:
            yaml.dump(db_data, f, default_flow_style=False)
        
        self.log(f"💾 API keys database saved to {self.keys_db_file}")
    
    def run_audit(self):
        """Run a complete API key audit"""
        self.log("🚀 Starting API key audit...")
        self.log("=" * 50)
        
        # Check for missing and empty keys
        missing_keys, empty_keys = self.check_missing_keys()
        
        # Generate secure keys for internal services that can be auto-generated
        auto_generate_updates = {}
        for key in missing_keys + empty_keys:
            service_info = self.api_services.get(key, {})
            if service_info.get("generate", False):
                generated_key = self.generate_secure_key(key)
                auto_generate_updates[key] = generated_key
                self.log(f"🔑 Generated secure {key}")
        
        # Apply auto-generated keys
        if auto_generate_updates:
            self.update_env_file(auto_generate_updates)
        
        # Save database for tracking
        self.save_keys_database(missing_keys, empty_keys)
        
        self.log("=" * 50)
        self.log("✅ API key audit complete!")
        
        if missing_keys or empty_keys:
            self.log("📋 Next steps:")
            self.log("   1. Visit the service URLs to obtain real API keys")
            self.log("   2. Update the .env file with the actual keys")
            self.log("   3. Consider setting up automated renewal notifications")
        
        return {
            "missing_keys": missing_keys,
            "empty_keys": empty_keys,
            "auto_generated": list(auto_generate_updates.keys())
        }
    
    def setup_continuous_auditing(self):
        """Setup continuous auditing via cron job"""
        self.log("⏰ Setting up continuous auditing...")
        
        # Create a script for the cron job to run
        cron_script = f"""#!/usr/bin/env python3
import sys
sys.path.insert(0, '{self.project_root}/scripts/api-key-auditor')
from audit-api-keys import APIKeyAuditor

if __name__ == "__main__":
    auditor = APIKeyAuditor()
    auditor.run_audit()
"""
        
        cron_script_path = self.project_root / "scripts" / "api-key-auditor" / "run_audit.py"
        with open(cron_script_path, "w") as f:
            f.write(cron_script)
        
        # Make it executable
        os.chmod(cron_script_path, 0o755)
        
        self.log(f"📝 Created audit script: {cron_script_path}")
        self.log("💡 To enable continuous auditing, add this to your crontab:")
        self.log(f"   0 */6 * * * {cron_script_path}  # Run every 6 hours")
        
        return cron_script_path

def main():
    """Main function to run the API key auditor"""
    print("🔑 Zion Tech Group API Key Auditor & Organizer")
    print("=" * 50)
    
    auditor = APIKeyAuditor()
    
    # Run initial audit
    results = auditor.run_audit()
    
    # Setup continuous auditing
    auditor.setup_continuous_auditing()
    
    print("\n🎯 Summary:")
    print(f"   • Missing API keys: {len(results['missing_keys'])}")
    print(f"   • Empty API keys: {len(results['empty_keys'])}")
    print(f"   • Auto-generated: {len(results['auto_generated'])}")
    print(f"   • Audit log: {auditor.audit_log}")
    print(f"   • Keys database: {auditor.keys_db_file}")

if __name__ == "__main__":
    main()