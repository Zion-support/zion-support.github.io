# Zion Tech Group - Complete Site Structure

## Overview
This document outlines the complete structure of the Zion Tech Group website, including all routes, components, data files, and organizational structure.

## Project Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript/JavaScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom Zion Tech Group theme
- **Routing**: React Router DOM v6
- **State Management**: React Context API
- **UI Components**: Custom component library with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Project Structure
```
zion-tech-group/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components and routes
│   ├── layout/             # Layout components (header, footer, navigation)
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── data/               # Data files and mock data
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── data/                   # Root-level data files
├── public/                 # Static assets
└── dist/                   # Build output
```

## Complete Route Structure

### Main Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/sitemap` - Complete site map

### Authentication Routes
- `/login` - User login
- `/signup` - User registration
- `/forgot-password` - Password recovery
- `/update-password` - Password update

### Services Routes
- `/services` - Main services page
- `/services/ai-business-solutions` - AI & Business Solutions
- `/services/cybersecurity-suite` - Cybersecurity Suite
- `/services/cloud-infrastructure` - Cloud Infrastructure
- `/services/digital-marketing` - Digital Marketing
- `/services/financial-solutions` - Financial Solutions
- `/services/manufacturing-solutions` - Manufacturing Solutions
- `/services/iot-services` - IoT Services
- `/services/blockchain-services` - Blockchain Services
- `/services/quantum-technology` - Quantum Technology
- `/services/5g-enterprise-solutions` - 5G Enterprise Solutions
- `/services/green-it` - Green IT
- `/services/enterprise-it` - Enterprise IT
- `/services/micro-saas` - Micro SaaS Services
- `/services/onsite-it` - Onsite IT Services
- `/services/dispute-management` - Dispute Management

### Products Routes
- `/products` - All products
- `/products/new` - New products
- `/equipment` - Equipment page
- `/portfolio-builder` - Portfolio Builder
- `/zion-hire-ai` - Zion Hire AI
- `/ai-research-assistant` - AI Research Assistant
- `/ai-content-generator` - AI Content Generator
- `/ai-code-review` - AI Code Review
- `/cloud-cost-optimizer` - Cloud Cost Optimizer
- `/service-description-generator` - Service Description Generator

### Business Solutions Routes
- `/business-solutions` - Business Solutions
- `/enterprise` - Enterprise Admin
- `/enterprise/billing` - Enterprise Billing
- `/enterprise/demo` - Enterprise Demo
- `/enterprise/plans` - Enterprise Plans
- `/digital-transformation` - Digital Transformation
- `/autonomous-business-platform` - Autonomous Business Platform

### Community Routes
- `/partners` - Partners page
- `/events` - Events page
- `/news` - News page
- `/blog` - Blog page
- `/forum/create` - Create forum post
- `/forum/post/:id` - View forum post
- `/forum/category/:category` - Forum category
- `/forum/edit/:id` - Edit forum post
- `/jobs/post` - Post a job
- `/jobs/:id` - Job details

### User & Account Routes
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/settings` - Account settings
- `/notifications` - User notifications
- `/messages` - User messages
- `/favorites` - User favorites
- `/orders` - Order history
- `/invoices` - Invoice history

### Marketplace Routes
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/marketplace` - Main marketplace
- `/listings` - All listings
- `/listings/:id` - Individual listing
- `/create-listing` - Create new listing
- `/edit-listing/:id` - Edit listing
- `/my-listings` - User's listings

### Jobs & Talent Routes
- `/jobs` - All jobs
- `/jobs/post` - Post a job
- `/jobs/:id` - Job details
- `/talent` - Talent directory
- `/hiring-tracker` - Hiring tracker
- `/talent-onboarding` - Talent onboarding

### Legal & Documentation Routes
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/cookies` - Cookie Policy
- `/legal` - Legal information
- `/docs` - Documentation
- `/api-docs` - API documentation
- `/developer` - Developer portal

### Pricing & Plans Routes
- `/pricing` - Main pricing page
- `/pricing-guide` - Pricing guide
- `/enterprise-pricing` - Enterprise pricing
- `/custom-quote` - Request custom quote
- `/request-quote` - Quote request form

### Specialized Services Routes
- `/next-gen-services-2025` - Next Gen Services 2025
- `/cutting-edge-innovative-services-2025` - Cutting Edge Innovative Services 2025
- `/enhanced-services-showcase` - Enhanced Services Showcase
- `/specialized-industry-solutions-2025` - Specialized Industry Solutions 2025

### Admin & Management Routes
- `/admin` - Admin dashboard
- `/admin/users` - User management
- `/admin/products` - Product management
- `/admin/services` - Service management
- `/admin/orders` - Order management
- `/admin/analytics` - Analytics dashboard
- `/admin/settings` - Admin settings

### Other Routes
- `/video-call` - Video call functionality
- `/index` - Index page
- `/dev` - Developer page
- `/404` - 404 error page

## Component Architecture

### Core Layout Components
- `AppHeader` - Main navigation header with dropdown menus
- `Footer` - Site footer with organized link sections
- `Sitemap` - Comprehensive site map component
- `SEO` - SEO optimization component
- `LoadingFallback` - Loading state component

### UI Components
- `Button` - Custom button component with variants
- `Card` - Card component for content display
- `Input` - Form input component
- `Badge` - Badge/tag component
- `Tabs` - Tab navigation component
- `Accordion` - Collapsible content component
- `Dialog` - Modal dialog component
- `Dropdown` - Dropdown menu component

### Service-Specific Components
- `ServiceCard` - Service display card
- `ServiceDetails` - Service details component
- `ServiceLandingTemplate` - Service landing page template
- `ITServicePricingTable` - IT service pricing table
- `EnterprisePricingTable` - Enterprise pricing table
- `GlobalServiceSection` - Global service information
- `QuoteFormSection` - Quote request form

### Business Components
- `TrustedBySection` - Trust indicators section
- `BenefitsSection` - Benefits showcase
- `FeaturesGuideSection` - Features guide
- `TestimonialCarousel` - Customer testimonials
- `ContactCTA` - Contact call-to-action

## Data Structure

### Service Data Files
- `2025-cutting-edge-innovative-services.js` - Innovative services data
- `2025-specialized-industry-solutions.js` - Industry-specific solutions
- `2025-comprehensive-pricing-analysis.js` - Pricing analysis data
- `microSaasServices.js` - Micro SaaS services data
- `newProductsData.js` - New products data
- `expandedServices.ts` - Expanded services data

### Data Structure Examples
```javascript
// Service Object Structure
{
  id: 'service-id',
  name: 'Service Name',
  description: 'Service description',
  price: '$999',
  period: '/month',
  category: 'Category',
  features: ['Feature 1', 'Feature 2'],
  popular: true,
  rating: 4.8,
  reviews: 156
}

// Pricing Analysis Structure
{
  serviceId: 'service-id',
  serviceName: 'Service Name',
  basePrice: 2999,
  marketAverage: 2500,
  roi: 450,
  paybackPeriod: 8,
  marketSize: '15B',
  growthRate: 35
}
```

## Navigation Structure

### Header Navigation
1. **Home** - Landing page
2. **About** - Company information
3. **Services** - Dropdown with all service categories
4. **Products** - Dropdown with product categories
5. **Business** - Dropdown with business solutions
6. **Pricing** - Dropdown with pricing options
7. **Community** - Dropdown with community features
8. **FAQ** - Frequently asked questions
9. **Contact** - Contact information

### Footer Navigation
Organized into 7 main sections:
1. **Company** - About, team, careers, press, partners
2. **Services** - All service categories
3. **Products** - All product categories
4. **Business Solutions** - Business-focused solutions
5. **Community** - Events, news, blog, forum, jobs
6. **Support** - FAQ, contact, docs, developer portal
7. **Legal** - Terms, privacy, cookies

## Theme & Styling

### Color Palette
- **Primary**: Zion Blue (`#1e40af`)
- **Secondary**: Zion Cyan (`#06b6d4`)
- **Accent**: Zion Purple (`#7c3aed`)
- **Background**: Zion Slate Dark (`#0f172a`)
- **Text**: White, Zion Slate Light (`#cbd5e1`)

### Design System
- **Typography**: Custom font hierarchy with responsive sizing
- **Spacing**: Consistent spacing scale using Tailwind CSS
- **Components**: Reusable component patterns
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first responsive design

## SEO & Performance

### SEO Implementation
- Meta tags for all pages
- Canonical URLs
- Structured data markup
- Sitemap generation
- Meta descriptions and keywords

### Performance Features
- Lazy loading of components
- Code splitting by routes
- Optimized images
- Minified CSS and JavaScript
- CDN-ready static assets

## Security & Compliance

### Security Features
- HTTPS enforcement
- Input validation
- XSS protection
- CSRF protection
- Secure authentication

### Compliance
- GDPR compliance
- Privacy policy
- Cookie consent
- Terms of service
- Data protection

## Development & Deployment

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Build Configuration
- **Target**: ES2020+
- **Minification**: Terser
- **Source Maps**: Disabled for production
- **Chunk Splitting**: Vendor and application chunks
- **Asset Optimization**: Image and font optimization

### Deployment
- **Platform**: Vercel/Netlify ready
- **Environment**: Node.js 18+
- **Build Output**: Static files in `dist/` directory
- **CDN**: Optimized for global content delivery

## Maintenance & Updates

### Regular Tasks
- Update service data
- Review and update pricing
- Monitor performance metrics
- Update security dependencies
- Content updates and blog posts

### Content Management
- Service descriptions
- Pricing information
- Company updates
- Blog content
- Case studies

## Support & Documentation

### Technical Support
- Developer documentation
- API documentation
- Component library
- Code examples
- Troubleshooting guides

### User Support
- FAQ section
- Contact forms
- Live chat integration
- Knowledge base
- Video tutorials

---

*This document is maintained by the Zion Tech Group development team and should be updated as the site structure evolves.*