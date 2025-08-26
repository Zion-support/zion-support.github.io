# Zion Tech Group - Complete Site Structure

## Overview
This document provides a comprehensive overview of all routes, pages, and navigation structure for the Zion Tech Group website (https://ziontechgroup.com).

## Main Navigation Structure

### Header Navigation
- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information and team
- **Services** - Dropdown with all service categories
- **Products** - Dropdown with all product offerings
- **Business** - Dropdown with business solutions
- **Pricing** - Dropdown with pricing options
- **Community** - Dropdown with community features
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact information and form

### Footer Navigation
Organized into 8 main sections with comprehensive links to all pages.

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
- `/hiring-tracker` - Hiring tracker
- `/talent-onboarding` - Talent onboarding

### User & Account Routes
- `/dashboard` - User dashboard
- `/profile` - User profile
- `/profile/:id` - Profile by ID

### Marketplace Routes
- `/cart` - Shopping cart
- `/orders` - Order history
- `/orders/:id` - Order details
- `/order-confirmation` - Order confirmation
- `/search` - Search results
- `/category/:category` - Category details
- `/listing/:id` - Listing details

### Legal & Documentation Routes
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/cookies` - Cookie policy
- `/docs` - Documentation
- `/developer` - Developer portal

### Pricing Routes
- `/pricing` - Main pricing
- `/pricing-guide` - Pricing guide
- `/services-pricing` - Services pricing
- `/services-comparison` - Services comparison

### Specialized Services Routes
- `/next-gen-services-2025` - Next Gen Services 2025
- `/cutting-edge-services-2025` - Cutting Edge Services 2025
- `/enhanced-innovative-services` - Enhanced Innovative Services
- `/enhanced-services` - Enhanced Services
- `/enhanced-services-showcase` - Enhanced Services Showcase
- `/comprehensive-services` - Comprehensive Services
- `/comprehensive-contact` - Comprehensive Contact
- `/advanced-services` - Advanced Services
- `/services-overview` - Services Overview
- `/new-services-overview` - New Services Overview
- `/micro-saas-services` - Micro SaaS Services
- `/micro-saas-showcase` - Micro SaaS Showcase
- `/content-generator` - Content Generator
- `/service-onboarding` - Service Onboarding
- `/token-integrations` - Token Integrations
- `/how-it-works` - How It Works
- `/get-started` - Get Started

### Admin & Management Routes
- `/admin/products` - Products admin
- `/more-products` - More products
- `/featured` - Featured products

### Other Routes
- `/video-call` - Video call functionality
- `/index` - Index page
- `/dev` - Developer page

## Navigation Features

### Dropdown Menus
- **Services**: 15 service categories
- **Products**: 10 product categories
- **Business**: 7 business solution categories
- **Pricing**: 4 pricing categories
- **Community**: 8 community features

### Mobile Navigation
- Responsive mobile menu
- Touch-friendly navigation
- Collapsible sections

### Search & Discovery
- Global search functionality
- Category-based browsing
- Tag-based filtering

## Content Organization

### Service Categories
1. **AI & Machine Learning**
2. **Cybersecurity**
3. **Cloud & Infrastructure**
4. **Digital Marketing**
5. **Financial Solutions**
6. **Manufacturing Solutions**
7. **IoT Services**
8. **Blockchain Services**
9. **Quantum Technology**
10. **5G Enterprise Solutions**
11. **Green IT**
12. **Enterprise IT**
13. **Micro SaaS Services**
14. **Onsite IT Services**
15. **Dispute Management**

### Product Categories
1. **AI Tools**
2. **Development Tools**
3. **Business Solutions**
4. **Infrastructure Tools**
5. **Specialized Services**

### Business Solutions
1. **Enterprise Management**
2. **Digital Transformation**
3. **Business Automation**
4. **Strategic Consulting**

## Technical Implementation

### Framework
- React 18 with TypeScript
- React Router for navigation
- Vite for build tooling
- Tailwind CSS for styling

### Performance Features
- Lazy loading for all pages
- Code splitting by route
- Optimized bundle sizes
- Responsive design

### SEO Features
- Meta tags for all pages
- Structured data markup
- Sitemap generation
- SEO-optimized URLs

## Maintenance Notes

### Adding New Routes
1. Add the page component to `src/pages/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/layout/AppHeader.jsx`
4. Update footer in `src/components/Footer.jsx`
5. Update sitemap in `src/components/Sitemap.jsx`

### Updating Navigation
1. Modify `navigationItems` in `AppHeader.jsx`
2. Update `footerSections` in `Footer.jsx`
3. Update `sitemapData` in `Sitemap.jsx`

### Broken Link Detection
- All internal links use React Router `Link` components
- External links open in new tabs
- 404 page for unmatched routes
- Comprehensive sitemap for search engines

## Domain Configuration
- **Production Domain**: https://ziontechgroup.com
- **Development**: http://localhost:3000
- **Build Output**: `dist/` directory
- **Deployment**: Vite build system

## Contact Information
For technical support or questions about the site structure:
- **Website**: https://ziontechgroup.com
- **Support**: Contact through the main contact form
- **Documentation**: Available at `/docs` route