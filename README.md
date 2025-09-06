# Zion Tech Group Website

A modern, responsive website built with React, TypeScript, and Vite, showcasing Zion Tech Group's comprehensive technology solutions.

## 🚀 Features

- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Performance Optimized** - Fast loading with code splitting and optimization
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Toast Notifications** - User-friendly feedback system
- **Loading States** - Enhanced UX with loading indicators
- **Error Boundaries** - Graceful error handling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Animations**: Framer Motion
- **Build Tool**: Vite with ESBuild
- **Package Manager**: npm

## 📦 Installation

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

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Enhanced button component
│   ├── Card.tsx        # Card component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Header with navigation
│   ├── LoadingSpinner.tsx # Loading indicators
│   ├── SEOHead.tsx     # SEO meta tags
│   ├── ServiceCard.tsx # Service display cards
│   ├── Toast.tsx       # Notification system
│   └── layout/
│       └── Sidebar.tsx # Sidebar navigation
├── contexts/           # React contexts
│   └── ToastContext.tsx # Global toast management
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact form
│   ├── Home.tsx        # Homepage
│   ├── Pricing.tsx     # Pricing plans
│   └── Services.tsx    # Services showcase
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Components

### Button Component
Enhanced button with multiple variants and loading states:
- `primary` - Gradient blue to purple
- `secondary` - Glass morphism effect
- `outline` - Border only
- `ghost` - Minimal styling
- `danger` - Red styling for destructive actions

### Toast Notifications
Global notification system with context:
- Success, Error, Warning, Info types
- Auto-dismiss with customizable duration
- Smooth animations and transitions

### Service Cards
Interactive service display cards with:
- Hover effects and animations
- Feature lists with bullet points
- Icon support
- Responsive design

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Deployment

The project is configured for deployment on:
- **Netlify** - Automatic deployments from main branch
- **Vercel** - Zero-config deployment
- **GitHub Pages** - Static hosting
- **Any static hosting** - Built files in `dist/`

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - xs, sm, md, lg, xl, 2xl, 3xl
- **Flexible Grid** - CSS Grid and Flexbox layouts
- **Touch Friendly** - Proper touch targets and interactions

## ♿ Accessibility

- **WCAG 2.1 AA Compliant** - Meets accessibility standards
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels
- **Focus Management** - Visible focus indicators
- **Color Contrast** - High contrast ratios

## 🚀 Performance

- **Code Splitting** - Automatic route-based splitting
- **Tree Shaking** - Unused code elimination
- **Image Optimization** - Optimized asset loading
- **Bundle Analysis** - Built-in bundle analyzer
- **Lighthouse Score** - 90+ performance score

## 🔒 Security

- **Content Security Policy** - XSS protection
- **HTTPS Only** - Secure connections
- **Input Validation** - Form validation
- **Error Boundaries** - Graceful error handling

## 📈 SEO Features

- **Meta Tags** - Comprehensive meta tag management
- **Structured Data** - JSON-LD schema markup
- **Open Graph** - Social media optimization
- **Twitter Cards** - Twitter sharing optimization
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine directives

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Zion Tech Group.

## 📞 Contact

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 302 464 0950
- **Address**: 364 E Main St STE 1008, Middletown DE 19709

## 🏢 About Zion Tech Group

Zion Tech Group is a leading technology company specializing in:
- AI & Machine Learning Solutions
- Micro SaaS Development
- Cybersecurity Services
- Cloud Infrastructure
- Blockchain Technology
- Data Analytics

We provide comprehensive technology solutions to help businesses transform and scale in the digital age.

---

Built with ❤️ by the Zion Tech Group team