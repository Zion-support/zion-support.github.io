# Zion Tech Group Website

A modern, high-performance website built with React, TypeScript, and Vite, showcasing advanced AI and IT solutions.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Code splitting, lazy loading, image optimization
- **SEO Ready**: Meta tags, structured data, sitemap generation
- **Accessibility**: WCAG 2.1 compliant, keyboard navigation, screen reader support
- **Responsive Design**: Mobile-first approach with cyberpunk aesthetics
- **Error Handling**: Comprehensive error boundaries and monitoring
- **Analytics**: Google Analytics, GTM, and custom event tracking

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React, Heroicons
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Testing**: Jest, Testing Library
- **Linting**: ESLint, Prettier
- **Build**: Vite with Terser optimization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/zion-tech-group-website.git
   cd zion-tech-group-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_GTM_ID=GTM-XXXXXXX
   VITE_FB_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

## 🚀 Development

1. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Building for Production

1. **Build the project**
   ```bash
   npm run build
   # or
   pnpm build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   # or
   pnpm preview
   ```

## 📊 Performance Optimization

The project includes several performance optimizations:

- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Lazy Loading**: Components and images load on demand
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Built-in bundle size monitoring
- **Critical CSS**: Inline critical styles for faster rendering

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🔍 Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format
```

## 📈 Analytics & Monitoring

The website includes comprehensive analytics:

- **Google Analytics 4**: Page views, events, conversions
- **Google Tag Manager**: Advanced tracking and tag management
- **Custom Events**: Button clicks, form submissions, scroll depth
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Automatic error reporting and monitoring

## 🎨 Design System

The website uses a custom cyberpunk design system:

- **Color Palette**: Neon cyan, purple, pink with dark backgrounds
- **Typography**: Inter font with custom cyber effects
- **Components**: Reusable cyber-themed components
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** automatically on git push

### Vercel

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Deploy**: `vercel --prod`

### Manual Deployment

1. **Build the project**: `npm run build`
2. **Upload** the `dist` folder to your web server
3. **Configure** your server for SPA routing

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── globals.css        # Global styles
├── public/                # Static assets
├── scripts/               # Build and optimization scripts
├── __tests__/             # Test files
├── dist/                  # Build output
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Vite Configuration

The project uses Vite with custom optimizations:

- **Terser minification** for production builds
- **Manual chunk splitting** for optimal loading
- **Asset optimization** with size limits
- **Source map generation** for debugging

### TypeScript Configuration

- **Strict mode** enabled for better type safety
- **Path mapping** for clean imports
- **Incremental compilation** for faster builds

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 302 464 0950
- **Website**: https://ziontechgroup.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters

---

**Zion Tech Group** - Transforming businesses with cutting-edge AI and IT solutions.