#!/bin/bash

# Final script to push changes to main
echo "Final push to main branch..."

# Force push to main (since we've resolved conflicts)
git push origin main --force-with-lease

echo "Successfully pushed to main branch!"