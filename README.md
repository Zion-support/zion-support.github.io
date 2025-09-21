# Zion App - Advanced AI Services Platform

A comprehensive Next.js application providing cutting-edge AI services, micro-SaaS solutions, and enterprise-grade IT infrastructure services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **AI-Powered Services**: Advanced AI automation and marketplace services
- **Micro-SaaS Solutions**: Innovative micro-SaaS services for 2025-2030
- **Enterprise Solutions**: Comprehensive IT infrastructure and cybersecurity services
- **Static Export**: Optimized for Netlify deployment
- **Performance Optimized**: Fast loading with modern web standards
- **Security First**: Built-in security headers and best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **React**: 19.1.1
- **TypeScript**: 4.9.5
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **State Management**: Redux Toolkit
- **Database**: Supabase
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Netlify Deployment

The application is configured for static export and Netlify deployment:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Deploy!

### Manual Deployment

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your hosting provider
```

## 📁 Project Structure

```
zion.app/
├── components/          # Reusable UI components
├── pages/              # Next.js pages
├── services/           # Service pages and components
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── data/               # Service data and configurations
├── public/             # Static assets
├── netlify/            # Netlify functions
├── supabase/           # Supabase functions
└── tests/              # Test files
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts
- `npm run preview` - Build and preview production build

## 🔧 Configuration

### Next.js Configuration

The application uses a custom Next.js configuration optimized for static export:

- Static export enabled
- Image optimization disabled (required for static export)
- Security headers configured
- Path aliases set up
- Webpack optimizations

### TypeScript Configuration

- Strict type checking enabled
- Path mapping configured
- Build errors ignored during development

## 🌟 Services

### AI Services (2025-2030)
- Advanced AI automation services
- AI marketplace solutions
- Machine learning infrastructure
- Natural language processing

### Micro-SaaS Solutions
- Innovative micro-SaaS platforms
- SaaS automation tools
- Business process optimization
- Custom SaaS development

### Enterprise IT Services
- IT infrastructure management
- Cybersecurity solutions
- Cloud migration services
- DevOps and automation

## 🔒 Security

- Security headers configured
- XSS protection enabled
- Content type validation
- Frame options protection
- Referrer policy configured

## 📈 Performance

- Static export for optimal loading
- Image optimization
- Code splitting
- Bundle optimization
- Compression enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v0.1.0** - Initial release with core functionality
- **v0.1.1** - Performance optimizations and security improvements
- **v0.1.2** - Repository cleanup and build fixes

---

Built with ❤️ by the Zion Holdings team