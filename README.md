<<<<<<< HEAD
# Zion Tech Group - Advanced Technology Solutions
=======
<<<<<<< HEAD
# Zion Tech Group Website
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

A modern, high-performance web application built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Performance Optimized**: Code splitting, lazy loading, bundle optimization
- **Accessibility First**: WCAG 2.1 compliant, screen reader support
- **SEO Ready**: Meta tags, structured data, sitemap generation
- **Security Focused**: Input sanitization, CSRF protection, secure headers
- **Testing Suite**: Jest, React Testing Library, Cypress
- **Error Handling**: Global error boundary, user-friendly error messages
- **Analytics**: Google Analytics integration, performance monitoring

## 🛠️ Development

### Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

<<<<<<< HEAD
### Build

```bash
npm run build
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
```

### Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── test-utils.tsx      # Testing utilities
```

## 🔧 Configuration

- **Vite**: Build tool and dev server configuration
- **ESLint**: Code linting rules
- **TypeScript**: Type checking configuration
- **Tailwind**: CSS framework configuration

## 🚀 Deployment

The application is configured for deployment on Netlify with:

- Automatic builds on push to main
- Environment variable management
- Redirect rules for SPA routing
- Performance optimizations

## 📊 Performance

- Bundle size optimization
- Code splitting
- Lazy loading
- Image optimization
- Caching strategies

## 🔒 Security

- Input sanitization
- XSS protection
- CSRF tokens
- Content Security Policy
- Secure headers

<<<<<<< HEAD
## ♿ Accessibility

- WCAG 2.1 compliance
- Screen reader support
- Keyboard navigation
- Focus management
- ARIA attributes

## 📈 Analytics

- Google Analytics integration
- Performance monitoring
- Error tracking
- User behavior analytics
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

## 🤝 Contributing

1. Fork the repository
<<<<<<< HEAD
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
