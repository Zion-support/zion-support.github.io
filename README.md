# Zion Tech Group Website

A modern, responsive website built with React, TypeScript, and Vite for Zion Tech Group - a leading technology company specializing in AI solutions, cloud services, and digital transformation.

## 🌟 Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useContext)
- **Package Manager**: npm

## 📁 Project Structure

```
ziontechgroup-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── header/        # Header and navigation components
│   │   └── ui/            # UI components (buttons, cards, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── layout/            # Layout components (header, footer, sidebar)
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ziontechgroup-website.git
   cd ziontechgroup-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

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

The website uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'zion-blue': '#0f172a',
  'zion-blue-dark': '#020617',
  'zion-cyan': '#06b6d4',
  'zion-purple': '#8b5cf6',
  // ... more colors
}
```

### Components

All components are built with TypeScript and follow a consistent design pattern. You can customize:

- **Layout**: Modify header, footer, and sidebar in `src/layout/`
- **Pages**: Update page content in `src/pages/`
- **Components**: Customize reusable components in `src/components/`

## 📱 Pages

1. **Home** (`/`) - Landing page with hero section and services overview
2. **About** (`/about`) - Company information and values
3. **Services** (`/services`) - Detailed service offerings
4. **Pricing** (`/pricing`) - Service pricing plans
5. **Team** (`/team`) - Team member profiles
6. **Careers** (`/careers`) - Job opportunities
7. **Blog** (`/blog`) - Articles and insights
8. **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

### Build Configuration

The build process is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📊 Performance Optimization

- **Code Splitting**: Routes are lazy-loaded for better performance
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **HTTPS Only**: All external links use HTTPS
- **Content Security Policy**: Configured in production builds
- **Input Validation**: Form inputs are properly validated
- **XSS Protection**: React's built-in XSS protection

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm run test:coverage
```

## 📈 Analytics

The website includes Google Analytics integration. Configure your tracking ID in the environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 302 464 0950
- **Website**: https://ziontechgroup.com

## 🙏 Acknowledgments

- **Design Inspiration**: Modern tech company websites
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS

## 📅 Changelog

### Version 1.0.0 (Current)
- Initial website launch
- Complete page structure
- Responsive design
- SEO optimization
- Performance optimization

---

**Built with ❤️ by the Zion Tech Group Team**

For more information about Zion Tech Group, visit [https://ziontechgroup.com](https://ziontechgroup.com)
