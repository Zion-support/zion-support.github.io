# Zion Tech Group - Advanced Technology Solutions Platform

# Welcome to the project

Zion Tech Group is a comprehensive technology solutions platform offering cutting-edge AI, cybersecurity, cloud services, and digital transformation solutions. Built with modern web technologies, the platform provides an intuitive user experience with advanced accessibility features, real-time analytics, and performance monitoring.

**Maintained by**: Jules, Codex, and Kleber Alcatrao

### 🎯 Core Functionality

- **AI-Powered Services**: Machine learning, automation, and intelligent solutions
- **Cybersecurity Suite**: Advanced threat detection and compliance tools
- **Cloud & DevOps**: Scalable infrastructure and deployment solutions
- **Digital Transformation**: Business process optimization and modernization

**Use your preferred IDE**

- **Enhanced Accessibility**: User-controlled settings for high contrast, large text, reduced motion
- **Advanced Analytics**: Comprehensive user behavior tracking and performance metrics
- **Mobile Experience**: Mobile-first navigation with intuitive swipe gestures
- **Performance Monitoring**: Real-time Core Web Vitals tracking and optimization

### 🎨 User Experience

- **Modern UI/UX**: Futuristic design with smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Progressive Web App**: Offline capabilities and app-like experience
- **Multi-language Support**: Internationalization with language detection

## 🛠️ Technology Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Redux Toolkit** for state management
- **React Query** for data fetching

### Backend & Services

- **Node.js** with Express
- **Supabase** for database and authentication
- **Stripe** for payment processing
- **Vercel/Netlify** for deployment

### Development Tools

- **ESLint** and **Prettier** for code quality
- **Husky** for git hooks
- **Jest** and **Vitest** for testing
- **Storybook** for component development

A modern, accessible, and performant AI marketplace platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
zion.app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   ├── layout/         # Layout components
│   │   └── [feature]/      # Feature-specific components
│   ├── pages/              # Page components
│   ├── services/           # API and external services
│   ├── store/              # Redux store and slices
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles and CSS
├── public/                 # Static assets
├── tests/                  # Test files
└── docs/                   # Documentation
```

## 🧪 Testing

### Run all tests

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

### Production build

See [docs/Integrations.md](docs/Integrations.md) for information on the Zion Assistant browser extension and Slack bot.

### Preview production build

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

## 🔧 Configuration

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
