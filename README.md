# Project Title (Example - To Be Updated)

This is the main README for the project. Below are details about specific components and utilities.

## URL Performance Monitoring

This project includes a URL/API performance monitoring service located in the `monitoring/` directory. It periodically checks configured endpoints, logs their performance, and can trigger alerts and custom remediation actions if performance degrades. For detailed information, see the [`monitoring/README.md`](./monitoring/README.md) file.

- **AI & Machine Learning Services** - Advanced AI solutions for businesses
- **Blockchain & Web3 Integration** - Decentralized applications and smart contracts
- **Enterprise IT Solutions** - Comprehensive business technology services
- **Micro-SaaS Platform** - Scalable software-as-a-service offerings
- **Modern Tech Stack** - React, TypeScript, Vite, and more
- **Responsive Design** - Mobile-first, accessible user interface
- **Performance Optimized** - Fast loading and efficient builds

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

Run the automated tests using npm:

```bash
# Production build
npm run build:ci

# Build with analysis
npm run build:analyze
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:ci` | CI-optimized build |
| `npm run build:analyze` | Build with bundle analysis |
| `npm run test` | Run test suite |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript checks |
| `npm run validate` | Run all validation checks |
| `npm run deploy` | Deploy to production |
| `npm run health` | Check application health |

## 🏗️ Project Structure

```
zion.app/
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── pages/                  # Application pages
├── public/                 # Static assets
├── styles/                 # Global styles
├── utils/                  # Utility functions
├── types/                  # TypeScript type definitions
├── netlify/                # Netlify functions
├── scripts/                # Build and utility scripts
├── tests/                  # Test files
├── vite.config.ts          # Vite configuration
├── netlify.toml            # Netlify configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### Netlify Configuration

The project uses `netlify.toml` for deployment configuration:

- **Build Command**: `npm ci --no-audit --no-fund --include=optional && npm run build:ci`
- **Publish Directory**: `dist`
- **Functions Directory**: `netlify/functions`
- **Node Version**: 20.19.0

### Environment Variables

Key environment variables (see `.env.example`):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_API_URL=https://api.ziontechgroup.com
# Add other required variables
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run cypress:run

# Run accessibility tests
npm run test:accessibility
```

## Generating Test Logs

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Ensure accessibility compliance
- Maintain performance standards
- Follow the established code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

- **Production**: [https://ziontechgroup.com](https://ziontechgroup.com)
- **Staging**: [https://staging.ziontechgroup.com](https://staging.ziontechgroup.com)

## 📞 Support

- **Email**: contact@ziontechgroup.com
- **Issues**: [GitHub Issues](https://github.com/Zion-Holdings/zion.app/issues)
- **Documentation**: [Wiki](https://github.com/Zion-Holdings/zion.app/wiki)

## 🏢 About Zion Tech Group

Zion Tech Group is a leading technology services company specializing in:

- Artificial Intelligence & Machine Learning
- Blockchain & Web3 Development
- Enterprise IT Solutions
- Cloud Infrastructure
- Digital Transformation

---

**Built with ❤️ by the Zion Tech Group Team**