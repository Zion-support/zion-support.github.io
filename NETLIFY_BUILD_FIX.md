# Netlify Build Fix for Yarn Cache Issues

## Problem
The Netlify build was failing with the following error:
```
Error: ENOENT: no such file or directory, copyfile '/opt/buildhome/.yarn_cache/v6/npm-arg-5.0.2-c81433cc427c92c4dcf4865142dbca6f15acd59c-integrity/node_modules/arg/LICENSE.md' -> '/opt/build/repo/node_modules/tailwindcss/node_modules/arg/LICENSE.md'
```

This is a common issue with Yarn cache corruption on Netlify where dependency files are missing from the cache.

## Solution Implemented

### 1. Updated `netlify.toml`
- Added custom build command that runs our fix script
- Configured Yarn environment variables to prevent cache issues
- Added cache directory configuration

### 2. Created `scripts/netlify-build-fix.sh`
A comprehensive build script that:
- Clears problematic caches
- Forces clean dependency installation
- Verifies critical dependencies
- Handles missing files (like the arg LICENSE.md)
- Provides detailed logging

### 3. Added `.yarnrc.yml`
Configuration file that:
- Disables immutable installs
- Sets appropriate timeouts
- Configures cache settings to prevent corruption
- Enables better error handling

### 4. Updated `package.json`
Added `build:netlify-fix` script as an alternative build method.

## How to Use

### Option 1: Automatic (Recommended)
The fix is now automatically applied through the `netlify.toml` configuration. Just trigger a new deployment.

### Option 2: Manual
If you need to manually trigger the fix:
```bash
bash scripts/netlify-build-fix.sh
```

### Option 3: Alternative Build Command
Use the alternative build script:
```bash
yarn build:netlify-fix
```

## What the Fix Does

1. **Cache Clearing**: Removes corrupted cache files that cause ENOENT errors
2. **Force Reinstall**: Uses `--force` and `--no-cache` flags to ensure clean installation
3. **Dependency Verification**: Checks for critical packages and reinstalls if missing
4. **Missing File Recovery**: Creates missing files (like LICENSE.md) when possible
5. **Detailed Logging**: Provides clear feedback on what's happening during the build

## Environment Variables Set

- `YARN_CACHE_FOLDER`: Sets explicit cache location
- `YARN_ENABLE_IMMUTABLE_INSTALLS`: Disables immutable installs to allow recovery
- `NODE_OPTIONS`: Maintains existing memory and OpenSSL settings

## Testing

To test the fix locally:
```bash
# Simulate the Netlify environment
export NODE_ENV=production
export YARN_CACHE_FOLDER=.yarn_cache
bash scripts/netlify-build-fix.sh
```

## Rollback

If needed, you can revert to the original build command by updating `netlify.toml`:
```toml
[build]
  functions = "netlify/functions"
  command = "yarn build"
```

## Additional Notes

- The fix is designed to be idempotent (safe to run multiple times)
- It preserves your existing build configuration
- All changes are backward compatible
- The script includes error handling and will fail fast if critical issues occur