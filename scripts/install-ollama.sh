#!/usr/bin/env bash
# Install Ollama and pull Qwen3-4B (27B-class reasoning) + optional llama3.2:3b
# Run: ./scripts/install-ollama.sh  or  bash scripts/install-ollama.sh
# Note: Requires zstd (apt install zstd / dnf install zstd)

set -e

echo "Installing Ollama..."
if command -v ollama &>/dev/null; then
  echo "Ollama already installed: $(ollama --version 2>/dev/null || true)"
else
  curl -fsSL https://ollama.com/install.sh | sh
fi

echo "Starting Ollama service (if not running)..."
# Start ollama serve in background if not already up
if ! curl -s http://localhost:11434/api/tags &>/dev/null; then
  ollama serve &>/dev/null &
  sleep 2
else
  echo "Ollama already running"
fi

echo "Pulling Qwen3-4B (recommended — strong reasoning at 4B params (~2.5GB))..."
ollama pull qwen3:0.6b

# Optional: also pull smaller llama3.2:3b for ultra-lightweight tasks
# echo "Pulling llama3.2:3b (optional, ultra-lightweight)..."
# ollama pull llama3.2:3b

echo ""
echo "✅ Ollama + Qwen3-4B ready. Test with: npm run llm:test"
echo "Environment variables:"
echo "  OLLAMA_MODEL=qwen3:0.6b   (default model)"
echo "  OLLAMA_BASE_URL=http://localhost:11434"
