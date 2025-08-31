#!/bin/bash
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
