#!/bin/bash

# Error Automation Restart Script
# This script restarts the comprehensive error fixing automation system

set -e

echo "🔄 Restarting Error Automation System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Stop the current system
print_status "Stopping current error automation system..."
./stop-error-automation.sh

# Wait a moment
print_status "Waiting for processes to stop..."
sleep 3

# Start the system again
print_status "Starting error automation system..."
./start-error-automation.sh

print_success "Error automation system restarted successfully!"