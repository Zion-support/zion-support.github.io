# Zion Tech Group - Advanced AI and IT Solutions

A modern, high-performance website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing AI and IT services with cutting-edge design and optimization.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, image optimization
- **SEO Ready**: Comprehensive meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation
- **Responsive Design**: Mobile-first approach with cyber-themed UI
- **AI Services Showcase**: Comprehensive service listings and pricing
- **Micro SAAS Solutions**: 50+ ready-to-use business applications

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ziontechgroup/website.git
cd website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deployment

### Production Build
```bash
npm run build
npm run start
```

### Performance Optimization
```bash
npm run optimize:all
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # Search engine directives
├── scripts/               # Build and optimization scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#00ffff)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)
- **Background**: Dark slate gradient
- **Text**: White with gray variants

### Typography
- **Headings**: Bold, neon-text effect
- **Body**: Inter font family
- **Code**: Monospace

### Components
- **Cyber Cards**: Glassmorphism with neon borders
- **Hologram Cards**: Animated holographic effects
- **Quantum Cards**: Energy pulse animations
- **Cyber Buttons**: Gradient with glow effects

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Dynamic imports for heavy components
- **Lazy Loading**: Intersection Observer for images
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Aggressive caching strategies
- **CDN Ready**: Optimized for global distribution

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag management
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific meta tags

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **High Contrast**: High contrast mode support
- **Focus Management**: Visible focus indicators
- **Skip Links**: Skip to main content
- **Alt Text**: Descriptive image alt text

## 📱 Responsive Design

- **Mobile First**: Mobile-optimized design
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure redirects and headers

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Next.js Configuration
- **Image Optimization**: Enabled with custom domains
- **Bundle Analysis**: Available with `ANALYZE=true`
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with custom rules

## 📊 Analytics and Monitoring

- **Google Analytics**: Integrated for traffic analysis
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Error boundary with reporting
- **User Experience**: Heatmap and session recording ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 (302) 464-0950
- **Website**: https://ziontechgroup.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set
- Vercel for the deployment platform

---

**Zion Tech Group** - Transforming businesses with cutting-edge AI and IT solutions.