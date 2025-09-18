#!/bin/bash

<<<<<<< HEAD
echo "=== Checking Git Status ==="
git status --porcelain

echo -e "\n=== Checking Current Branch ==="
git branch --show-current

echo -e "\n=== Checking Remote Branches ==="
git branch -r

echo -e "\n=== Attempting to Build Project ==="
npm run build

echo -e "\n=== Build Complete ==="
=======
echo "🔍 AI Service Factory Status Check"
echo "⏰ Time: $(date)"
echo ""

echo "📊 PM2 Process Status:"
pm2 status
echo ""

echo "🔄 Background Process Status:"
ps aux | grep start-ai-service-factory | grep -v grep
echo ""

echo "📈 Recent Log Activity:"
tail -20 ai-service-factory.log
echo ""

echo "🌐 Web Interface Status:"
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:3000/ || echo "Web interface not accessible"
echo ""

echo "📁 Generated Reports:"
ls -la public/automation/ | head -10
echo ""

echo "✅ Status check complete!"
>>>>>>> origin/auto/autonomy-17186719616
