#!/bin/bash
# Growth Engine Run
cd /Users/miami2/zion.app/automation
export DRY_RUN_OUTREACH=0
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
python3 autonomous_growth_loop.py 2>&1
echo "EXIT_CODE=$?"
