# Project Title (Example - To Be Updated)

This is the main README for the project. Below are details about specific components and utilities.

## URL Performance Monitoring

This project includes a URL/API performance monitoring service located in the `monitoring/` directory. It periodically checks configured endpoints, logs their performance, and can trigger alerts and custom remediation actions if performance degrades. For detailed information, see the [`monitoring/README.md`](./monitoring/README.md) file.

### 🎯 Core Functionality

## Set environment variables (optional):
Copy `.env.example` to `.env` and adjust any values needed for your setup.
Important variables include:
* `DJANGO_API_BASE_URL`, `NEXTJS_API_BASE_URL`, `CUSTOM_SERVER_BASE_URL` –
  base URLs for services you want to monitor (used by the `monitoring/` service).
* `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
  `SUPABASE_SERVICE_ROLE_KEY` – credentials required for Supabase
  authentication (used for login).
* `ALERT_WEBHOOK_URL` – a webhook endpoint (Slack, Discord, etc.) for alert
  notifications (used by the `monitoring/` service).
* `LOG_LEVEL` – logging verbosity (`error`, `warn`, `info`, `debug`).


## Running Tests

⚠️ **IMPORTANT**: This project uses **Supabase for authentication** and **Netlify for environment variable management**. Proper configuration is essential for the application to function correctly.

### Authentication Setup

The application uses Supabase for all authentication functionality:
- User registration and login
- Email verification and password reset
- Social authentication (Google, Facebook, GitHub, Microsoft, Twitter)
- Session management and profile handling

### Required Environment Variables

A comprehensive list of environment variables can be found in the `.env.example` file. For local development, create a `.env.local` file and populate it with the necessary values based on `.env.example`. For production deployment (e.g., on Netlify), these variables must be configured in your hosting provider's UI.

**Key variables include:**

-   **Supabase Configuration:**
    -   `NEXT_PUBLIC_SUPABASE_URL`
    -   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    -   `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)
-   **NextAuth.js Configuration:**
    -   `NEXTAUTH_SECRET` (a randomly generated string for signing tokens)
    -   `NEXTAUTH_URL` (the canonical URL of your application)
-   **OAuth Provider Credentials:**
    -   `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
    -   `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET`
    -   `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`
    -   `MICROSOFT_CLIENT_ID` & `MICROSOFT_CLIENT_SECRET` (and potentially `MICROSOFT_TENANT_ID`)
    -   Other provider credentials as needed.
-   **Internal Authentication Service:**
    -   `INTERNAL_AUTH_SERVICE_URL` (if used for specific flows like registration)

Ensure all variables marked as required in `.env.example` or in specific documentation (like `docs/SUPABASE_AUTHENTICATION_SETUP.md`) are correctly set.

### 📚 Detailed Setup Guides

- **[Supabase Authentication Setup](docs/SUPABASE_AUTHENTICATION_SETUP.md)** - Complete guide for configuring Supabase authentication
- **[Netlify Deployment Guide](docs/NETLIFY_DEPLOYMENT_GUIDE.md)** - Step-by-step Netlify deployment with environment variables
- **[Optional Two-Factor Authentication](TWO_FACTOR_AUTHENTICATION_SUMMARY.md)** - Overview of enabling 2FA in the IPO portal
- **[Logging Guidelines](docs/LOGGING_GUIDELINES.md)** - Usage instructions for the project logger
- **Collect Logs** - `npm run logs:collect` bundles recent logs under `logs/archive/`
- **Analyze Logs** - `npm run logs:summary` scans collected logs and reports missing translation keys
- **CSV Log Summary** - `npm run logs:summary:csv` outputs a CSV report of error counts per log file
- **Health Check** - `npm run logs:health` prints a quick system status report
- You can skip external connectivity tests by setting `DISABLE_EXTERNAL_SERVICE_CHECKS=true` when running
  the health check (useful for offline environments)
- **Demo Bug Logger** - `npm run bug:demo` generates sample bug reports
- **Bug Log Summary** - `npm run bug:summary` shows a quick breakdown of logged bugs
- **Missing Key Log** - Any translation keys not found at runtime are appended to `logs/missing-keys.log`
- **Bug Logging** - Run `python3 main_app.py` to generate sample bug logs in `logs/bug/bug_log.json`. Use `python3 bug_logger.py --summary` to view a summary of logged issues.

### CDN for Static Assets

To improve performance, the application can serve static assets from a CDN.
Set `NEXT_PUBLIC_CDN_URL` to your CDN domain (e.g., `https://cdn.yourdomain.com`).
When this variable is provided in production builds, Next.js will prefix asset
URLs so they are loaded from the CDN.

### Quick Setup Verification

After setting up environment variables, verify your configuration:

```bash
npm run test:all
```

### Run specific test suites

```bash
npm run test:unit          # Unit tests
npm run test:integration   # Integration tests
npm run test:e2e          # End-to-end tests
```

### Test coverage

```bash
npm run test:coverage
```

## 🏗️ Building

### Development build

Deployment instructions to be updated.

## Integrations

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.

## Product Media

Product listings now support rich media. The `product_listings` table includes new
`video_url` and `model_url` fields for MP4 videos and GLB 3D models. Upload media
through the product submission form and view it in the gallery tabs (Images, Video, 3D).

## Product Media

Product listings now support rich media. The `product_listings` table includes new
`video_url` and `model_url` fields for MP4 videos and GLB 3D models. Upload media
through the product submission form and view it in the gallery tabs (Images, Video, 3D).

## Product Media

Product listings now support rich media. The `product_listings` table includes new
`video_url` and `model_url` fields for MP4 videos and GLB 3D models. Upload media
through the product submission form and view it in the gallery tabs (Images, Video, 3D).

## Troubleshooting

```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

If you don't have network connectivity, run `./offline-dev.sh` to start a
minimal offline server until you can reinstall the packages. This script
provides a basic interface so you can continue working in a limited mode
until dependencies can be installed.

For pnpm errors showing "This project is configured to use npm", use `./setup.sh npm` instead as the project may have npm-specific configurations.

If you see a warning about `rimraf@3.0.2` being deprecated, run:

```sh
npm install rimraf@latest --save-dev
```

This updates the dependency to a supported v5 release.

To prevent memory leaks from the deprecated `inflight` package, the project pins
`glob` to version `10.4.5` via the `resolutions` field in `package.json`. Run
`npm install` to ensure this version is installed.

If you see `npm WARN deprecated @humanwhocodes/object-schema@2.0.3`, the project
uses an override to replace this package with `@eslint/object-schema`. Pull the
latest code and run `npm install` to update your lock file and remove the
warning.

### Whitelabel Tenant Errors

If the app logs **"Error loading tenant"** during startup, the request to the
Supabase edge function that provides whitelabel settings failed. Confirm that
`VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` (or the Next.js style
`NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in your
environment and that you have network connectivity. The tenant hook will retry
a few times before giving up.

## Testing

Run unit tests with:

```sh
npm run test
```

## Generating Test Logs

For offline debugging you can run the test suite and capture the output by using the helper script `scripts/generate-tests-log.sh`.

```bash
bash scripts/generate-tests-log.sh
```

### End-to-End Tests

Open Cypress for interactive debugging:

```sh
npm run cypress:open
```

Run the Cypress suite headlessly:

```sh
npm run cypress:run
```

### Coverage Report

After running `npm run test`, open `coverage/lcov-report/index.html` in your
browser to view detailed coverage information.

## Observability

For instructions on structured logging, Prometheus metrics, and Sentry error reporting, see [docs/observability.md](docs/observability.md).

When tests run on GitHub Actions, the workflow uploads the `coverage` directory
using `actions/upload-artifact@v4`. Visit a workflow run and download the
`coverage-report` artifact to retrieve the generated HTML coverage report.
