#!/bin/bash
# ai_setup.sh — One-command AI development environment setup
# Usage: bash scripts/ai_setup.sh
# Sets up all free AI tools for Zion Tech Group development

set -e

echo "🚀 Zion Tech Group — AI Development Environment Setup"
echo "======================================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Ollama Setup
echo ""
echo "📦 Step 1: Ollama (Local AI Models)"
if command -v ollama &> /dev/null; then
    echo -e "${GREEN}✅ Ollama installed${NC}"
    
    # Start server if not running
    if ! ollama list &> /dev/null; then
        echo "  Starting Ollama server..."
        ollama serve > /tmp/ollama.log 2>&1 &
        sleep 3
    fi
    
    # Pull essential models
    echo "  Pulling llama3.2 (general purpose)..."
    ollama pull llama3.2 2>&1 | tail -1
    
    echo "  Pulling codellama:7b (code generation)..."
    ollama pull codellama:7b 2>&1 | tail -1
    
    echo -e "${GREEN}✅ Ollama ready at http://localhost:11434${NC}"
else
    echo -e "${YELLOW}⚠️ Ollama not found. Install: brew install ollama${NC}"
fi

# 2. VS Code Extensions
echo ""
echo "📝 Step 2: VS Code Extensions"
if command -v code &> /dev/null; then
    echo "  Installing Codeium (unlimited free completions)..."
    code --install-extension codeium.codeium --force 2>/dev/null || echo "  (already installed)"
    
    echo "  Installing Continue.dev (multi-model AI)..."
    code --install-extension continue.continue --force 2>/dev/null || echo "  (already installed)"
    
    echo -e "${GREEN}✅ VS Code extensions ready${NC}"
else
    echo -e "${YELLOW}⚠️ VS Code CLI not found.${NC}"
fi

# 3. Aider (Terminal AI Pair Programming)
echo ""
echo "🤖 Step 3: Aider"
if command -v pip3 &> /dev/null; then
    pip3 install aider-chat --quiet 2>/dev/null
    echo -e "${GREEN}✅ Aider installed${NC}"
else
    echo -e "${YELLOW}⚠️ pip3 not found.${NC}"
fi

# 4. Configure Continue.dev for Ollama
echo ""
echo "⚙️  Step 4: Continue.dev Configuration"
CONTINUE_DIR="$HOME/.config/continue"
mkdir -p "$CONTINUE_DIR"

cat > "$CONTINUE_DIR/config.json" << 'EOF'
{
  "models": [
    {
      "title": "Ollama Llama 3.2 (Local)",
      "provider": "ollama",
      "model": "llama3.2",
      "apiBase": "http://localhost:11434"
    },
    {
      "title": "Ollama CodeLlama (Local)",
      "provider": "ollama",
      "model": "codellama:7b",
      "apiBase": "http://localhost:11434"
    }
  ],
  "customCommands": [
    {
      "name": "/review-code",
      "prompt": "Review this code for security, performance, and best practices. List issues with severity (high/medium/low) and suggest fixes."
    },
    {
      "name": "/fix-a11y",
      "prompt": "Fix accessibility issues: add missing alt text, proper ARIA labels, keyboard navigation, and semantic HTML."
    },
    {
      "name": "/add-metadata",
      "prompt": "Add Next.js Metadata export (title + description) for SEO. Derive from page content."
    },
    {
      "name": "/optimize-perf",
      "prompt": "Optimize performance: identify unnecessary re-renders, missing memoization, large bundle size, and suggest Next.js optimizations."
    }
  ],
  "tabAutocomplete": {
    "disable": false,
    "useFileMap": true
  },
  "codeLens": {
    "enable": true
  },
  "inlineComments": true
}
EOF
echo -e "${GREEN}✅ Continue.dev configured${NC}"

# 5. Create project-level VS Code settings
echo ""
echo "📁 Step 5: VS Code Project Settings"
VSCODE_DIR=".vscode"
mkdir -p "$VSCODE_DIR"

cat > "$VSCODE_DIR/settings.json" << 'EOF'
{
  "editor.inlineSuggest.enabled": true,
  "github.copilot.enable": {
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "codeium.enableConfig": {
    "*": true,
    "javascript": true,
    "typescript": true,
    "typescriptreact": true,
    "python": true,
    "markdown": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "javascript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  }
}
EOF
echo -e "${GREEN}✅ VS Code project settings created${NC}"

# 6. Verify everything
echo ""
echo "🔍 Step 6: Verification"
echo "---"
ollama list 2>/dev/null && echo -e "${GREEN}✅ Ollama models:${NC}" || echo -e "${RED}❌ Ollama not running${NC}"
which aider 2>/dev/null && echo -e "${GREEN}✅ Aider: $(aider --version 2>/dev/null || echo 'installed')${NC}" || echo -e "${YELLOW}⚠️ Aider not found${NC}"
ls "$CONTINUE_DIR/config.json" 2>/dev/null && echo -e "${GREEN}✅ Continue.dev config: ${CONTINUE_DIR}/config.json${NC}" || echo -e "${YELLOW}⚠️ Continue.dev config missing${NC}"

echo ""
echo "======================================================"
echo -e "${GREEN}🎉 Setup complete! Next steps:${NC}"
echo "  1. Get free API keys (see AI_KEYS_REFERENCE.md):"
echo "     → Groq:     console.groq.com"
echo "     → Gemini:   aistudio.google.com/apikey"
echo "     → DeepSeek: platform.deepseek.com"
echo "  2. Add keys to .env file"
echo "  3. Run: ollama serve (if not already running)"
echo "  4. Open VS Code and start coding with AI!"
echo ""
echo "📖 Full documentation: AI_KEYS_REFERENCE.md"
echo "📖 AI Playbook: AI_SPEED_DEVELOPMENT_PLAYBOOK.md"
echo "======================================================"
