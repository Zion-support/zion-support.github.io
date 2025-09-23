# Deployment Guide

## Overview

This guide covers deploying the Zion Tech Group application to various environments.

## Prerequisites

- Node.js 18.0.0+
- npm 10.0.0+
- Docker (optional)
- PM2 (for production)

## Environment Setup

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Staging

```bash
# Build for staging
NODE_ENV=staging npm run build

# Start staging server
NODE_ENV=staging npm run start
```

### Production

```bash
# Build for production
NODE_ENV=production npm run build

# Deploy with PM2
npm run pm2:start

# Or use Docker
docker build -t zion-app .
docker run -p 3000:3000 zion-app
```

## Environment Variables

Configure the following environment variables:

```env
# Application
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_APP_URL=https://ziontechgroup.com

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/zion_db

# AI Services
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-...

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://ziontechgroup.com

# Analytics
GOOGLE_ANALYTICS_ID=GA-...
SENTRY_DSN=https://...

# External Services
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
```

## Monitoring

### Health Checks

```bash
# Check application health
curl https://ziontechgroup.com/api/health

# Check PM2 status
npm run pm2:status

# View logs
npm run pm2:logs
```

### Performance Monitoring

- **Uptime**: 99.9% target
- **Response Time**: <100ms target
- **Error Rate**: <0.1% target

## Scaling

### Horizontal Scaling

```bash
# Scale PM2 processes
pm2 scale ecosystem.config.cjs 4

# Use load balancer
nginx -s reload
```

### Vertical Scaling

Increase server resources based on:
- CPU usage >80%
- Memory usage >80%
- Response times >100ms
