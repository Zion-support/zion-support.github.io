# Zion Tech Group - AI-Powered Technology Solutions

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS, showcasing cutting-edge technology solutions and services.

## 🚀 Features

- **Modern Design**: Futuristic UI with glassmorphism effects and neon accents
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Next.js 14 and optimized images
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Accessibility**: WCAG compliant with proper focus states and contrast
- **Security**: Content Security Policy and security headers
- **Error Handling**: Comprehensive error boundaries and loading states

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Netlify (configured)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Zion-Technologies/Website.git
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Static Export
```bash
npm run export
```

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── ui/             # UI components
│   ├── Navigation.tsx  # Main navigation
│   ├── HeroSection.tsx # Hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── Footer.tsx      # Footer component
│   ├── ErrorBoundary.tsx # Error handling
│   └── Loading.tsx     # Loading component
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── services/      # Service pages
│   ├── solutions/     # Solution pages
│   └── index.tsx      # Home page
├── styles/            # Global styles
├── public/            # Static assets
├── scripts/           # Build and utility scripts
└── automation/        # Automation systems
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Neon blue, purple, and pink gradients
- **Typography**: Modern, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Tailwind Configuration
The project includes custom Tailwind configuration with:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Component utilities

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Images**: WebP/AVIF format support with responsive sizing

## 🔒 Security

- Content Security Policy (CSP) headers
- X-Frame-Options protection
- X-Content-Type-Options security
- Referrer Policy configuration
- Secure cookie settings

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@ziontechgroup.com
- Website: https://ziontechgroup.com
- LinkedIn: [Zion Tech Group](https://linkedin.com/company/ziontechgroup)

## 🚀 Deployment

The project is configured for deployment on Netlify with:
- Automatic builds on push to main
- Environment variable configuration
- Custom domain setup
- SSL certificate management

### Manual Deployment
```bash
npm run build
npm run export
# Upload the 'out' directory to your hosting provider
```

---

Built with ❤️ by the Zion Tech Group team