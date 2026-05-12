#!/usr/bin/env bash
# Launch and monitor the local LLM (llama.cpp). Restarts on any exit (OOM, crash).
MODEL_DIR=$HOME/llama.cpp
MODEL=$MODEL_DIR/models/7B.ggmlv3.q2_K.bin
LOG=$HOME/.hermes/memory/llm_monitor.log
while true; do
  echo "$(date) – Starting LLM" >> "$LOG"
  $MODEL_DIR/main -m "$MODEL" -p "health check" -ngl 1 >> "$LOG" 2>&1 || echo "$(date) – LLM exited (code $?) – restarting…" >> "$LOG"
  sleep 30
done
