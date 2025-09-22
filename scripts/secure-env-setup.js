#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');

console.log('🔐 Setting up secure environment variables...');

// Generate secure random keys
function generateSecureKey(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

// Create secure .env file
function createSecureEnv() {
  const envContent = `# Secure Environment Variables
# Generated on ${new Date().toISOString()}

# Next.js
NODE_ENV=development
NODE_VERSION=20.18.1
NODE_OPTIONS=--max-old-space-size=4096

# Supabase (Replace with your actual values)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# API Keys (Replace with your actual values)
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_ANALYTICS_ID=your_ga_id_here

# Database
DATABASE_URL=your_database_url_here

# Security (Auto-generated secure keys)
JWT_SECRET=${generateSecureKey(64)}
ENCRYPTION_KEY=${generateSecureKey(32)}

# External Services
NETLIFY_SITE_ID=your_netlify_site_id_here
NETLIFY_ACCESS_TOKEN=your_netlify_token_here

# Monitoring
SENTRY_DSN=your_sentry_dsn_here
LOG_LEVEL=info

# Development
ENABLE_ANALYTICS=false
ENABLE_LOGGING=true
DEBUG_MODE=false
`;

  // Write to .env.secure
  fs.writeFileSync('.env.secure', envContent);
  console.log('✅ Created .env.secure with secure keys');
  
  // Create .env.local for development
  const localEnvContent = `# Local Development Environment
# Copy from .env.secure and update with your actual values

NODE_ENV=development
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
`;

  fs.writeFileSync('.env.local', localEnvContent);
  console.log('✅ Created .env.local for development');
}

// Create .env.example with placeholder values
function createEnvExample() {
  const exampleContent = `# Environment Variables Example
# Copy this file to .env.local and fill in your values

# Next.js
NODE_ENV=development
NODE_VERSION=20.18.1
NODE_OPTIONS=--max-old-space-size=4096

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# API Keys
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_ANALYTICS_ID=your_ga_id_here

# Database
DATABASE_URL=your_database_url_here

# Security
JWT_SECRET=your_jwt_secret_here
ENCRYPTION_KEY=your_encryption_key_here

# External Services
NETLIFY_SITE_ID=your_netlify_site_id_here
NETLIFY_ACCESS_TOKEN=your_netlify_token_here

# Monitoring
SENTRY_DSN=your_sentry_dsn_here
LOG_LEVEL=info

# Development
ENABLE_ANALYTICS=false
ENABLE_LOGGING=true
DEBUG_MODE=false
`;

  fs.writeFileSync('.env.example', exampleContent);
  console.log('✅ Updated .env.example with secure placeholders');
}

// Create .gitignore entry for sensitive files
function updateGitignore() {
  const gitignorePath = '.gitignore';
  let gitignoreContent = '';
  
  if (fs.existsSync(gitignorePath)) {
    gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  }
  
  const sensitiveEntries = [
    '',
    '# Environment variables',
    '.env',
    '.env.local',
    '.env.production',
    '.env.secure',
    '*.env',
    '',
    '# Security',
    '*.key',
    '*.pem',
    '*.p12',
    '*.pfx',
    'secrets/',
    'keys/',
    ''
  ];
  
  const newEntries = sensitiveEntries.join('\n');
  
  if (!gitignoreContent.includes('.env')) {
    gitignoreContent += newEntries;
    fs.writeFileSync(gitignorePath, gitignoreContent);
    console.log('✅ Updated .gitignore with sensitive file patterns');
  }
}

// Main execution
try {
  createSecureEnv();
  createEnvExample();
  updateGitignore();
  
  console.log('\n🔐 Secure environment setup completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Copy .env.secure to .env.local');
  console.log('2. Update .env.local with your actual Supabase credentials');
  console.log('3. Never commit .env files to version control');
  console.log('4. Use .env.example as a template for team members');
  
} catch (error) {
  console.error('❌ Error setting up secure environment:', error.message);
  process.exit(1);
}