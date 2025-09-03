
  '❌ PM2 is not installed. Please install it first: npm install -g pm2);
  process.exit(1)}
// Function to start automation processes;
async function startAutomation() {;
  try {;
    // Start the main application;
    console.log(,;
  📱 Starting main application...');

  'pm2 start ecosystem.config.cjs --only apps' { stdio: 'inherit });
    // Wait a moment for apps to start;
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Start automation processes;
    console.log(,;
  🤖 Starting automation processes...');

  'pm2 start ecosystem.config.cjs --only automation' { stdio: 'inherit });
    // Save PM2 configuration;
    console.log(,;
  💾 Saving PM2 configuration...');

  'pm2 save' { stdio: 'inherit });
    // Show status;
    console.log(,;
  📊 PM2 Status: ');

  '❌ Failed to start PM2 processes:', error.message);
    process.exit(1)}
}
// Handle graceful shutdown;

  '🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});
// Start automation;

  '❌ Failed to start automation:', error);
  process.exit(1)})



