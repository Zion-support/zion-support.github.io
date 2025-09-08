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

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables.

4. **Start development server**
   ```bash
   npm run dev
   ```

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