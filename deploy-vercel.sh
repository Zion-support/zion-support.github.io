#!/bin/bash
# Vercel deployment script for Zion Tech Group

echo "🚀 Starting Vercel deployment..."

# Install dependencies
npm install

# Deploy to Vercel
vercel --prod

echo "✅ Vercel deployment completed"
