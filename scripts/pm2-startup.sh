#!/bin/bash

# PM2 Startup Script
# This script configures PM2 to start automatically on system boot

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log "Setting up PM2 startup configuration..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "ERROR: PM2 is not installed. Please install PM2 first."
    exit 1
fi

# Check if PM2 daemon is running
if ! pm2 ping &> /dev/null; then
    log "Starting PM2 daemon..."
    pm2 start
fi

# Generate startup script
log "Generating PM2 startup script..."
pm2 startup

# Save current PM2 configuration
log "Saving current PM2 configuration..."
pm2 save

# Set up PM2 to start on boot
log "Configuring PM2 to start on system boot..."
pm2 startup systemd

success "PM2 startup configuration completed!"
echo ""
echo "Next steps:"
echo "1. Copy the generated startup command from above"
echo "2. Run it with sudo privileges"
echo "3. PM2 will now start automatically on system boot"
echo ""
echo "To test the setup:"
echo "  sudo reboot"
echo "  pm2 list  # Check if services are running after reboot"
echo ""
echo "To manage services:"
echo "  pm2 start ecosystem.config.js    # Start services"
echo "  pm2 stop all                     # Stop all services"
echo "  pm2 restart all                  # Restart all services"
echo "  pm2 monit                        # Monitor services"
echo "  pm2 logs                         # View logs"