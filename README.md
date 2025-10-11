# Zion Tech Group Website

A modern, responsive website for Zion Tech Group - Advanced AI and IT Solutions. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and performance monitoring
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Error Handling**: Comprehensive error boundaries and fallback UI
- **Progressive Web App**: Service worker and offline capabilities

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Performance**: Web Vitals monitoring
- **Accessibility**: ARIA attributes and keyboard navigation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ziontechgroup/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build:production
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
├── app/                    # Application pages and components
│   ├── components/         # Reusable React components
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   └── ...
├── hooks/                 # Custom React hooks
├── public/                # Static assets
├── src/                   # Source files
├── App.tsx               # Main application component
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations:

- **Colors**: Custom color palette with cyan, purple, and pink gradients
- **Typography**: Custom font families and sizing
- **Components**: Reusable component classes
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Built-in dark theme support

## ♿ Accessibility

The website is built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Skip Links**: Quick navigation to main content
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences

## 🚀 Performance

Performance optimizations include:

- **Code Splitting**: Lazy loading of routes and components
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Core Web Vitals**: Monitoring and optimization
- **Caching**: Service worker for offline functionality

## 📱 Responsive Design

The website is fully responsive across all devices:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Zion Tech Group
VITE_APP_DESCRIPTION=Advanced AI and IT Solutions
VITE_APP_URL=https://ziontechgroup.com
VITE_GA_ID=your-google-analytics-id
```

### Tailwind Configuration

The Tailwind configuration is located in `tailwind.config.js` and includes:

- Custom color palette
- Custom font families
- Custom spacing and sizing
- Custom animations and transitions

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Linting
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint:fix
```

## 📊 Analytics

The website includes Google Analytics integration for:

- Page views and user behavior
- Performance metrics (Core Web Vitals)
- Error tracking and reporting
- Custom event tracking

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the SPA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 (302) 464-0950
- **Website**: https://ziontechgroup.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS team for the utility-first CSS framework
- Lucide team for the beautiful icons
- All contributors and supporters

---

**Zion Tech Group** - Transforming businesses with cutting-edge AI and IT solutions.