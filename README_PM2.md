PM2 automation

Commands
- Install PM2: npm i -g pm2
- Start processes: npm run pm2:start
- Save current processes: npm run pm2:save
- Reload after edits: npm run pm2:reload

Processes
- bolt-zion-app: runs vite preview
- auto-fix: runs lint, type-check, build every 6 hours and reloads the app
- healthcheck: checks dist and preview port every 5 minutes

Enable startup
- pm2 startup
- pm2 save

Logs
- pm2 logs
