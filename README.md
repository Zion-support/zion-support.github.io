# Zion Tech Group Website

A modern, responsive website for Zion Tech Group, showcasing technology services and solutions with a focus on AI, cloud computing, cybersecurity, and digital transformation.

## 🚀 Features

### Modern Design
- **Dark Theme**: Professional dark theme with gradient accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Modern UI Components**: Built with Tailwind CSS and modern design principles

### Core Pages
- **Homepage**: Hero section, services showcase, features, testimonials, and CTA
- **Services**: Comprehensive service offerings with detailed descriptions
- **About**: Company information, team, values, and company history
- **Contact**: Contact form with company information and service selection
- **Header & Footer**: Professional navigation with dropdown menus and comprehensive footer

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for client-side navigation

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd zion-tech-group

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests

## 🎨 Design System

### Color Palette
- **Primary**: Zion Cyan (#0d9488)
- **Secondary**: Zion Blue (#2e73ea)
- **Accent**: Zion Purple (#a855f7)
- **Background**: Dark slate gradients
- **Text**: White and light slate variants

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Readable text with proper contrast
- **Interactive**: Hover effects and smooth transitions

### Components
- **Cards**: Service cards with hover effects
- **Buttons**: Gradient buttons with hover animations
- **Forms**: Styled form inputs with focus states
- **Navigation**: Sticky header with dropdown menus

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🚀 Performance Features

- **Lazy Loading**: Components and pages load on demand
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Optimized Builds**: Vite for fast development and optimized production builds
- **Image Optimization**: Optimized images and icons
- **CSS Optimization**: Purged CSS with Tailwind

## 🔧 Customization

### Adding New Services
Edit `src/pages/ServicesPage.tsx` to add new service offerings:

```typescript
const services = [
  {
    icon: NewIcon,
    title: 'New Service',
    description: 'Service description',
    features: ['Feature 1', 'Feature 2'],
    color: 'from-color1 to-color2',
    price: 'Starting at $X'
  }
];
```

### Modifying Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  'zion-cyan': '#0d9488',
  'zion-blue': '#2e73ea',
  'zion-purple': '#a855f7',
  // Add more colors as needed
}
```

### Adding New Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/header/Header.tsx`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header/         # Header and navigation
│   ├── layout/         # Layout components
│   └── ui/            # Basic UI components
├── pages/              # Page components
│   ├── HomePage.tsx    # Homepage
│   ├── ServicesPage.tsx # Services page
│   ├── AboutPage.tsx   # About page
│   └── ContactPage.tsx # Contact page
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🧪 Testing

The project includes testing setup with Jest and React Testing Library:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Netlify
The project is configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables for production

### Other Platforms
The project can be deployed to any static hosting platform:
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📈 Analytics & SEO

- **Meta Tags**: Proper meta tags for SEO
- **Structured Data**: JSON-LD structured data
- **Performance Monitoring**: Lighthouse CI integration
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to Zion Tech Group.

## 📞 Support

For support or questions:
- Email: contact@ziontechgroup.com
- Phone: +1 (555) 123-4567
- Website: https://ziontechgroup.com

---

**Built with ❤️ by Zion Tech Group**
