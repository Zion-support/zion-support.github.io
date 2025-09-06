# Zion Tech Group Website

A modern, responsive website built with React, TypeScript, and Vite, showcasing Zion Tech Group's AI and technology services.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **Accessibility**: WCAG compliant with proper focus management and screen reader support
- **Error Handling**: Comprehensive error boundaries and loading states
- **SEO Ready**: Optimized meta tags and structured data
- **TypeScript**: Full type safety throughout the application
- **Modern CSS**: Tailwind CSS with custom animations and utilities

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite with optimized configuration
- **Deployment**: Netlify with custom headers and redirects

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── LoadingSpinner.tsx
│   ├── PageLoader.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── ServicesPage.tsx
│   ├── Contact.tsx
│   └── Pricing.tsx
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── index.css           # Global styles and animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 10+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run verify` - Run all checks (lint, type-check, build, test)

## 🎨 Design Features

### Animations
- Fade-in animations for page elements
- Smooth hover effects and transitions
- Loading spinners and skeleton screens
- Custom CSS animations for enhanced UX

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Optimized typography for all screen sizes

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🔧 Configuration

### Vite Configuration
- Optimized build settings with Terser minification
- Code splitting for better performance
- Asset optimization and compression
- Development server with HMR

### Netlify Configuration
- Custom build commands
- Security headers
- Redirect rules
- Environment variables

## 📱 Pages

### Home Page
- Hero section with call-to-action
- Service overview cards
- Company features and benefits
- Statistics and social proof

### Services Page
- Comprehensive service listings
- Micro SaaS product showcase
- Detailed feature descriptions
- Pricing information

### Pricing Page
- Multiple pricing tiers
- Feature comparisons
- FAQ section
- Contact forms

### About Page
- Company information
- Team details
- Mission and values
- Company history

### Contact Page
- Contact information
- Contact forms
- Location details
- Social media links

## 🚀 Deployment

The application is configured for deployment on Netlify with:

- Automatic builds on git push
- Custom build commands
- Environment variables
- Security headers
- Redirect rules

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 🔒 Security

- Content Security Policy (CSP) headers
- XSS protection
- CSRF protection
- Secure cookie settings
- HTTPS enforcement

## 📊 Performance

- Lazy loading for route components
- Code splitting for optimal bundle sizes
- Image optimization
- CSS and JS minification
- Gzip compression
- CDN-ready asset structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@ziontechgroup.com
- Phone: +1 302 464 0950
- Website: https://ziontechgroup.com

## 🏢 About Zion Tech Group

Zion Tech Group is a leading provider of AI and technology solutions, specializing in:

- Artificial Intelligence & Machine Learning
- Cybersecurity Solutions
- Cloud Infrastructure
- Data Analytics
- Custom Software Development
- Micro SaaS Products

---

Built with ❤️ by the Zion Tech Group team