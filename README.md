# Zion Tech Group - Advanced Technology Services Platform

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.18.1-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cutting-edge technology services platform offering AI, blockchain, web3, and enterprise solutions. Built with modern web technologies and deployed on Netlify.

## 🚀 Features

- **AI & Machine Learning Services** - Advanced AI solutions for businesses
- **Blockchain & Web3 Integration** - Decentralized applications and smart contracts
- **Enterprise IT Solutions** - Comprehensive business technology services
- **Micro-SaaS Platform** - Scalable software-as-a-service offerings
- **Modern Tech Stack** - React, TypeScript, Vite, and more
- **Responsive Design** - Mobile-first, accessible user interface
- **Performance Optimized** - Fast loading and efficient builds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: Chakra UI, Radix UI
- **Styling**: Tailwind CSS, Emotion
- **State Management**: Redux Toolkit, React Query
- **Authentication**: NextAuth.js, Supabase
- **Blockchain**: Ethers.js, Web3 integration
- **Deployment**: Netlify, Netlify Functions
- **Testing**: Vitest, Jest, Cypress
- **Linting**: ESLint, Prettier

## 📦 Installation

### Prerequisites

- Node.js >= 20.18.1
- npm >= 10.0.0

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm ci --no-audit --no-fund --include=optional
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Netlify (Recommended)

The project is configured for automatic deployment on Netlify:

```bash
# Deploy to preview
npm run deploy:preview

# Deploy to production
npm run deploy
```

### Manual Build

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

## 📊 Performance

The application is optimized for performance:

- **Bundle Analysis**: `npm run build:analyze`
- **Performance Monitoring**: Built-in performance tracking
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Dynamic imports for optimal loading

## 🔒 Security

- **Content Security Policy**: Configured in `netlify.toml`
- **Security Headers**: Comprehensive security headers
- **Dependency Scanning**: Regular security audits
- **Environment Protection**: Secure environment variable handling

## 🤝 Contributing

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