<<<<<<< HEAD
# Zion Tech Group Website

# Welcome to your Lovable project

## 🌟 Features

**URL**: https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32

## 🚀 Tech Stack

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

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
=======
# Zion Tech Group - AI-Powered IT Solutions Platform

A modern, full-stack web application built with React, TypeScript, and Vite, providing comprehensive IT solutions and AI-powered services.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **AI Integration**: Google Generative AI, OpenAI integration
- **Authentication**: Supabase Auth with multiple providers
- **UI Components**: Radix UI components with custom styling
- **State Management**: React Query for server state, Context API for client state
- **Performance**: Optimized builds, code splitting, lazy loading
- **Testing**: Vitest, Cypress, Playwright for comprehensive testing
- **Deployment**: Netlify-ready with serverless functions

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Router** for navigation
- **React Query** for data fetching and caching

### Backend & Services
- **Supabase** for authentication and database
- **Netlify Functions** for serverless API
- **Stripe** for payments
- **Google Analytics** for tracking

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Vitest** for unit testing
- **Cypress** for E2E testing
- **Playwright** for cross-browser testing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```
>>>>>>> origin/main

2. **Install dependencies**
   ```bash
   npm install
   ```

<<<<<<< HEAD
3. **Start development server**
=======
3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables.

4. **Start development server**
>>>>>>> origin/main
   ```bash
   npm run dev
   ```

<<<<<<< HEAD
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

Simply open [Lovable](https://lovable.dev/projects/3fad5ec6-2b6e-4163-b266-afac8f1ced32) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Integrations

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.

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
# Trigger new build with clean netlify.toml
=======
## 🚀 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run dev:check` - Start dev server with type checking
- `npm run build` - Build for production
- `npm run build:check` - Build with type checking
- `npm run build:clean` - Clean build (removes dist and rebuilds)
- `npm run build:analyze` - Build with bundle analysis
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Run tests with UI
- `npm run test:e2e` - Run E2E tests
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests

### Utilities
- `npm run clean` - Clean build artifacts
- `npm run analyze` - Analyze bundle size

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── auth/           # Authentication components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── services/           # API services
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🔧 Configuration

### TypeScript
The project uses strict TypeScript configuration for better type safety:
- Strict mode enabled
- Unused variables/parameters detection
- Strict null checks
- No implicit any

### Vite
Optimized Vite configuration with:
- ESBuild for fast minification
- Manual chunk splitting for better caching
- CSS code splitting
- Bundle analysis support

### Netlify
Configured for seamless deployment:
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js 20
- Serverless functions support

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables
5. Deploy!

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the SPA

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Vitest for component and utility testing
- **E2E Tests**: Playwright for end-to-end testing
- **Component Tests**: Cypress for component testing
- **Accessibility Tests**: Automated a11y testing

## 📈 Performance

- **Code Splitting**: Automatic and manual chunk splitting
- **Lazy Loading**: Components and routes loaded on demand
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Optimized caching strategies for assets and API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@ziontechgroup.com or join our Discord community.

## 🔗 Links

- [Live Demo](https://zion.app)
- [Documentation](https://docs.zion.app)
- [API Reference](https://api.zion.app/docs)
- [Community](https://discord.gg/zion)
>>>>>>> origin/main
