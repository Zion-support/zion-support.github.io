# Netlify Next.js Plugin Fix

## Problem
The Netlify build is failing with the following error:
```
Plugin "@netlify/plugin-nextjs" invalid input "skip"
Plugin "@netlify/plugin-nextjs" does not accept any inputs but you specified: "skip"
```

## Root Cause
The `@netlify/plugin-nextjs` plugin is being loaded from the Netlify UI with an invalid `skip: true` configuration. This plugin is specifically designed for Next.js projects and does not accept a `skip` input.

## Why This Happens
1. **This is a Vite project, NOT a Next.js project**
2. The `@netlify/plugin-nextjs` plugin is unnecessary and should not be installed
3. The plugin is configured in the Netlify UI (not in the local `netlify.toml`)
4. The `skip: true` configuration is invalid for this plugin

## Solution

### Step 1: Remove Plugin from Netlify UI
1. Go to your Netlify dashboard
2. Navigate to **Site settings** > **Build & deploy** > **Build plugins**
3. Find the `@netlify/plugin-nextjs` plugin
4. **Remove it completely** (do not just disable it)

### Step 2: Verify Local Configuration
Your local `netlify.toml` is already correct:
```toml
[build]
  command = "npm ci && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
  NODE_OPTIONS = "--max_old_space_size=4096"
  NPM_FLAGS = "--prefer-offline"

# IMPORTANT: This is a Vite project, NOT a Next.js project
# The @netlify/plugin-nextjs plugin is NOT needed and should NOT be installed
# This plugin is specifically for Next.js projects and will cause build failures
# if configured incorrectly (e.g., with invalid inputs like "skip: true")
```

### Step 3: Clean Up Dependencies (Optional)
Since this is a Vite project, you may want to remove the `next` dependency from `package.json`:
```bash
npm uninstall next next-themes
```

### Step 4: Deploy Again
After removing the plugin from the Netlify UI, trigger a new deployment.

## Verification
- ✅ `netlify.toml` has no Next.js plugin references
- ✅ Build plugin is removed from Netlify UI
- ✅ Build command is `npm ci && npm run build`
- ✅ Publish directory is `dist` (Vite's default output)

## Why This Configuration is Correct
- **Vite projects** build to the `dist` folder by default
- **Next.js plugin** is only needed for Next.js projects
- **Static export** is handled by Vite's build process
- **No runtime** is needed for static sites

## Common Mistakes to Avoid
1. ❌ Don't install `@netlify/plugin-nextjs` for Vite projects
2. ❌ Don't configure the plugin with invalid inputs like `skip: true`
3. ❌ Don't use Next.js-specific build commands
4. ❌ Don't set publish directory to `out` or `.next`

## Support
If you continue to experience issues:
1. Check that the plugin is completely removed from Netlify UI
2. Verify your local `netlify.toml` matches the one above
3. Ensure you're using the correct build command for Vite
4. Contact Netlify support if the plugin persists in the UI