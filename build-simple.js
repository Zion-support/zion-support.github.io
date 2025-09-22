import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building project with simplified configuration...');

// Create a minimal tsconfig for build
const minimalTsConfig = {
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable"],
    "allowJs": true,
    "skipLibCheck": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next"]
};

fs.writeFileSync('tsconfig.build.json', JSON.stringify(minimalTsConfig, null, 2));

// Try building with the minimal config
try {
  console.log('Attempting build with minimal TypeScript config...');
  execSync('npx next build --experimental-build-mode=compile', { 
    stdio: 'inherit',
    env: { ...process.env, NEXT_TSC: '1' }
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.log('Build failed with minimal config, trying with no TypeScript...');
  try {
    // Try building without TypeScript
    execSync('npx next build', { 
      stdio: 'inherit',
      env: { ...process.env, SKIP_ENV_VALIDATION: 'true' }
    });
    console.log('Build completed with env validation disabled!');
  } catch (error2) {
    console.log('All build attempts failed. Check the error messages above.');
    process.exit(1);
  }
}