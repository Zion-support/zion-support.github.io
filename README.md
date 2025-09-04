# Zion Tech Group Website

A modern, responsive website for Zion Tech Group, a leading technology solutions provider. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Comprehensive Pages**: Home, About, Services, Products, Blog, Careers, and Contact
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance**: Optimized for fast loading and excellent user experience
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Mobile First**: Fully responsive design that works on all devices

## 📋 Pages

### Main Pages
- **Home** (`/`) - Landing page with hero section, services overview, and call-to-action
- **About** (`/about`) - Company information, team, values, and mission
- **Services** (`/services`) - Comprehensive service offerings with detailed descriptions
- **Products** (`/products`) - Technology platforms and solutions
- **Blog** (`/blog`) - Technology insights and industry articles
- **Careers** (`/careers`) - Job openings and company culture
- **Contact** (`/contact`) - Contact form and office locations

### Service Pages
- **AI Development** (`/services/ai-development`) - Artificial intelligence solutions
- **Cloud Solutions** (`/services/cloud-solutions`) - Cloud infrastructure and migration
- **Web Development** (`/services/web-development`) - Modern web applications
- **Mobile Development** (`/services/mobile-development`) - iOS and Android apps
- **Blockchain Solutions** (`/services/blockchain`) - Decentralized applications
- **IoT Platforms** (`/services/iot-platforms`) - Internet of Things solutions
- **Data Analytics** (`/services/data-analytics`) - Business intelligence
- **Cybersecurity** (`/services/cybersecurity`) - Security solutions

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zion-tech-group
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run type-check
```

## 📁 Project Structure

```
zion-tech-group/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/            # UI components
├── pages/              # Next.js pages
│   ├── services/       # Service pages
│   ├── blog/          # Blog pages
│   └── api/           # API routes
├── public/             # Static assets
│   ├── sitemap.xml    # SEO sitemap
│   └── robots.txt     # Search engine directives
├── styles/             # Global styles
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 🎨 Customization

### Colors
The website uses a blue and purple color scheme. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Content
Update content by editing the respective page components in the `pages/` directory.

### Styling
Modify styles using Tailwind CSS classes or add custom CSS in `styles/globals.css`.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### SEO Configuration
Update SEO settings in `components/layout/MainLayout.tsx` and individual pages.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster page loads

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Proper canonical URL implementation

## 🛡️ Security

- **Content Security Policy**: Implemented security headers
- **HTTPS**: Secure connections enforced
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Cross-site scripting protection

## 📊 Analytics

The website is prepared for Google Analytics integration. Add your tracking ID to the environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@ziontechgroup.com
- Website: https://ziontechgroup.com

## 🎯 Roadmap

- [ ] Add blog post management system
- [ ] Implement contact form backend
- [ ] Add multi-language support
- [ ] Integrate CMS for content management
- [ ] Add e-commerce functionality for products
- [ ] Implement user authentication system
- [ ] Add real-time chat support
- [ ] Create admin dashboard

---

Built with ❤️ by Zion Tech Group