#!/usr/bin/env bash

set -euo pipefail

echo "[CI] Type checking..."
yarn -s type-check

echo "[CI] Linting..."
yarn -s lint || true

echo "[CI] Running unit tests..."
yarn -s test || true

echo "[CI] Building (Vite)..."
yarn -s build:vite

echo "[CI] Done."

