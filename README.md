# Zion Tech Group Website

A modern, responsive website built with React, TypeScript, and Vite for Zion Tech Group - a leading technology company specializing in AI solutions, cloud services, and digital transformation.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useContext)
- **Package Manager**: npm

## 📁 Project Structure

## Environment Configuration

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
- **Automated Alerts** - `npm run logs:alerts` enables real-time log monitoring and sends alerts to the configured webhook
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
# Check environment setup
npx ts-node --transpile-only scripts/check-env.ts

# Test Supabase connection (in browser console)
console.log('Supabase configured:', !!window.location.origin.includes('localhost') || !!process.env.NEXT_PUBLIC_SUPABASE_URL)
```

## 🛠️ Installation

### Background tasks

The Django backend runs scheduled jobs using Celery. To process abandoned cart emails locally run:

```sh
celery -A backend.celery worker -B
```

**Edit a file directly in GitHub**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors and Theme

The website uses a custom color palette defined in `tailwind.config.js`:

## Integrations

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.
Payment environment variables are documented in [docs/Payments.md](docs/Payments.md).

## Product Media

Product listings now support rich media. The `product_listings` table includes new
`video_url` and `model_url` fields for MP4 videos and GLB 3D models. Upload media
through the product submission form and view it in the gallery tabs (Images, Video, 3D).

## Troubleshooting

### Network Issues

If you see errors related to missing modules like 'react', 'react-dom', or 'lucide-react', your environment may not have internet access to download these dependencies. Options to resolve this:

1. Ensure you have internet connectivity
2. Configure proxy settings if needed: `npm config set proxy http://your-proxy:port`
3. Use a pre-downloaded `node_modules` directory if available

### Package Manager Issues

If you encounter errors running `bun install` (for example, integrity check failures), delete any `bun.lockb` file and run `npm install` instead. This project relies on npm and is not guaranteed to work with Bun. Adding `bun.lockb` to `.gitignore` ensures Bun isn't accidentally used.

For pnpm errors showing "This project is configured to use npm", use `./setup.sh npm` instead as the project may have npm-specific configurations.

If you see a warning about `rimraf@3.0.2` being deprecated, run:

```sh
npm install rimraf@latest --save-dev
```

This updates the dependency to a supported v5 release.

To prevent memory leaks from the deprecated `inflight` package, the project pins
`glob` to version `10.4.5` via the `resolutions` field in `package.json`. Run
`npm install` to ensure this version is installed.

To suppress npm warnings about `@humanwhocodes/config-array`, the `resolutions`
block maps it to `@eslint/config-array`. Run `npm install` to apply this
override.

### Whitelabel Tenant Errors

If the app logs **"Error loading tenant"** during startup, the request to the
Supabase edge function that provides whitelabel settings failed. Confirm that
`VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` (or the Next.js style
`NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in your
environment and that you have network connectivity. The tenant hook will retry
a few times before giving up.

### Translation Service

Automatic translations rely on OpenAI. Set `VITE_OPENAI_API_KEY` (or
`NEXT_PUBLIC_OPENAI_API_KEY`) to allow the client to contact the API directly
when the Supabase function is unavailable.

## Testing

Run unit tests with:

```sh
npm run test
```

To watch tests during development:

```sh
npm run test:watch
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
