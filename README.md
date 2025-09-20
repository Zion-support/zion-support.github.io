# Zion Tech Group - Advanced AI & Technology Solutions

## 🚀 Overview

Zion Tech Group is a cutting-edge technology company specializing in AI, automation, and innovative digital solutions. Our platform showcases the latest in technology services, AI-powered tools, and futuristic design.

## ✨ Features

- **AI-Powered Services**: Comprehensive AI solutions for businesses
- **Futuristic Design**: Modern, responsive UI with animated backgrounds
- **Service Marketplace**: Wide range of IT and technology services
- **Interactive Tools**: AI ROI calculators and readiness assessments
- **Multi-language Support**: Internationalization ready
- **Performance Optimized**: Fast loading and efficient builds

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2.32
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Deployment**: Netlify (Static Export)

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app
```

2. Install dependencies:
```bash
npm ci --legacy-peer-deps
```

3. Set up environment:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run dev:clean` - Clean and start development server
- `npm run build` - Build for production
- `npm run build:check` - Type check, lint, and build
- `npm run build:analyze` - Build and analyze bundle

### Code Quality
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode

### Utilities
- `npm run clean` - Clean build artifacts
- `npm run security:audit` - Run security audit
- `npm run deps:update` - Update dependencies
- `npm run deps:outdated` - Check outdated dependencies

## 🏗️ Project Structure

```
zion.app/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── utils/                 # Helper utilities
├── scripts/               # Development scripts
└── docs/                  # Documentation
```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm ci --legacy-peer-deps && npm run build`
3. Set publish directory: `out`
4. Deploy!

### Manual Build

```bash
npm run build
# The built files will be in the 'out' directory
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com
# Add other environment variables as needed
```

### Build Configuration

The project uses Next.js static export for optimal performance on static hosting platforms.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 2s first contentful paint
- **SEO**: Fully optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@ziontechgroup.com or join our community.

## 🔗 Links

- [Live Demo](https://ziontechgroup.com)
- [Documentation](https://docs.ziontechgroup.com)
- [API Reference](https://api.ziontechgroup.com)

---

Built with ❤️ by the Zion Tech Group team
