#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting deployment helper...');

// Function to prepare for deployment
function prepareDeployment() {
  console.log('📋 Preparing for deployment...');
  
  // Check if build is successful
  try {
    console.log('🔨 Running build check...');
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Build successful');
  } catch (error) {
    console.log('❌ Build failed - cannot deploy');
    process.exit(1);
  }
  
  // Clean up unnecessary files
  console.log('🧹 Cleaning up for deployment...');
  const filesToRemove = [
    'package-lock.json',
    'yarn.lock',
    '.env.local',
    '.env.development.local',
    '.env.test.local',
    'node_modules/.cache',
    '.next/cache'
  ];
  
  filesToRemove.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        if (fs.statSync(filePath).isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(filePath);
        }
        console.log(`✅ Removed: ${file}`);
      } catch (error) {
        console.log(`⚠️  Could not remove: ${file}`);
      }
    }
  });
}

// Function to create deployment package
function createDeploymentPackage() {
  console.log('📦 Creating deployment package...');
  
  const deploymentFiles = [
    'package.json',
    'next.config.js',
    'tsconfig.json',
    'tailwind.config.js',
    'postcss.config.js',
    'pages/',
    'components/',
    'public/',
    'styles/',
    'middleware.ts',
    'automation/',
    'src/',
    'utils/',
    'types/'
  ];
  
  const deploymentDir = 'deployment-package';
  
  // Create deployment directory
  if (!fs.existsSync(deploymentDir)) {
    fs.mkdirSync(deploymentDir);
  }
  
  // Copy files to deployment directory
  deploymentFiles.forEach(file => {
    const srcPath = path.join(process.cwd(), file);
    const destPath = path.join(process.cwd(), deploymentDir, file);
    
    if (fs.existsSync(srcPath)) {
      try {
        if (fs.statSync(srcPath).isDirectory()) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
        console.log(`✅ Copied: ${file}`);
      } catch (error) {
        console.log(`⚠️  Could not copy: ${file}`);
      }
    }
  });
  
  console.log(`✅ Deployment package created in: ${deploymentDir}`);
}

// Function to generate deployment instructions
function generateDeploymentInstructions() {
  const instructions = `
# Deployment Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git repository access

## Steps

1. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the Application**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Start the Application**
   \`\`\`bash
   npm start
   \`\`\`

## Environment Variables
Make sure to set the following environment variables:
- NODE_ENV=production
- NEXT_PUBLIC_SITE_URL=https://your-domain.com

## Deployment Platforms

### Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: \`npm run build\`
3. Set publish directory: \`.next\`
4. Set environment variables in Netlify dashboard

### AWS Amplify
1. Connect your GitHub repository to AWS Amplify
2. Set build command: \`npm run build\`
3. Set environment variables in Amplify console

## Health Check
After deployment, run the health check:
\`\`\`bash
node automation/health-monitor.cjs
\`\`\`

## Monitoring
- Check application logs regularly
- Monitor performance metrics
- Set up error tracking (Sentry, etc.)
- Monitor security vulnerabilities

## Backup
- Regular database backups
- Code repository backups
- Environment configuration backups
`;

  fs.writeFileSync('DEPLOYMENT.md', instructions);
  console.log('✅ Deployment instructions created: DEPLOYMENT.md');
}

// Function to create production configuration
function createProductionConfig() {
  console.log('⚙️  Creating production configuration...');
  
  const nextConfig = \`module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};\`;

  fs.writeFileSync('next.config.prod.js', nextConfig);
  console.log('✅ Production configuration created: next.config.prod.js');
}

// Main function
function main() {
  console.log('🚀 Starting deployment preparation...');
  
  prepareDeployment();
  createDeploymentPackage();
  generateDeploymentInstructions();
  createProductionConfig();
  
  console.log('\\n🎉 Deployment preparation completed!');
  console.log('📋 Next steps:');
  console.log('  1. Review DEPLOYMENT.md for instructions');
  console.log('  2. Test the deployment package locally');
  console.log('  3. Deploy to your chosen platform');
  console.log('  4. Run health checks after deployment');
}

// Run deployment helper
main();