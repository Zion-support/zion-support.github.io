# Netlify Build Fixes

This document outlines the fixes applied to resolve the Netlify build failure caused by Yarn dependency installation errors.

## Problem

The build was failing with the following error:
```
error Error: ENOENT: no such file or directory, copyfile '/opt/buildhome/.yarn_cache/v6/npm-arg-5.0.2-c81433cc427c92c4dcf4865142dbca6f15acd59c-integrity/node_modules/arg/LICENSE.md' -> '/opt/build/repo/node_modules/tailwindcss/node_modules/arg/LICENSE.md'
```

This is a common issue with Yarn when there are file system conflicts during the linking phase, particularly with the `arg` package used by `tailwindcss`.

## Solutions Implemented

### 1. Enhanced Build Scripts

- **`scripts/netlify-build.sh`** - Updated with better error handling and fallback options
- **`scripts/netlify-build-npm.sh`** - Alternative build using npm instead of yarn
- **`scripts/netlify-build-robust.sh`** - Multi-attempt build script that tries different configurations

### 2. Yarn Configuration

- **`.yarnrc`** - Added Yarn configuration file with optimized settings:
  - Disabled immutable installs
  - Set proper cache folder
  - Ignored engine requirements
  - Enabled offline preference
  - Disabled optional dependencies

### 3. Netlify Configuration Updates

- **`netlify.toml`** - Enhanced with:
  - Better Yarn flags
  - Additional environment variables
  - File system conflict prevention settings
  - Disabled problematic features

### 4. Package.json Scripts

Added new build scripts:
- `build:netlify:yarn` - Standard yarn build
- `build:netlify:npm` - NPM fallback build
- `build:netlify:robust` - Multi-attempt robust build

## How It Works

The robust build script (`scripts/netlify-build-robust.sh`) tries multiple approaches:

1. **Yarn with frozen lockfile** - Standard approach
2. **Yarn without frozen lockfile** - More flexible dependency resolution
3. **Yarn with optional dependencies** - Includes optional deps
4. **Yarn with online packages** - Downloads fresh packages
5. **NPM fallback** - Uses npm if all yarn attempts fail

## Usage

The build is now configured to use the robust script by default. If you need to test locally:

```bash
# Test the robust build
bash scripts/test-build.sh

# Or run individual scripts
npm run build:netlify:robust
npm run build:netlify:npm
npm run build:netlify:yarn
```

## Environment Variables

Key environment variables set for the build:

- `YARN_CACHE_FOLDER="/opt/buildhome/.yarn_cache"`
- `YARN_ENABLE_IMMUTABLE_INSTALLS="false"`
- `YARN_IGNORE_ENGINES="true"`
- `NPM_CONFIG_LEGACY_PEER_DEPS="true"`
- `NPM_CONFIG_INCLUDE="dev"`

## Monitoring

The build script includes detailed logging to help diagnose any remaining issues. Check the Netlify build logs for specific error messages if problems persist.

## Fallback Strategy

If the primary build method fails, the script automatically tries alternative approaches, ensuring the build succeeds even with dependency conflicts.