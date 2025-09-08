# Zion Tech Group - Technology Solutions Platform

## 🚀 Project Overview

Zion Tech Group is a comprehensive technology solutions provider specializing in digital transformation, AI, cloud architecture, and cybersecurity. This platform showcases our extensive portfolio of services, products, and industry-specific solutions.

## 🚀 New Features & Improvements

### 1. Enhanced Navigation & Layout
- **Improved Header Navigation**: Added dropdown menu for services with organized categories
- **New Navigation Items**: Added Products and Solutions pages to main navigation
- **Responsive Design**: Enhanced mobile navigation and responsive layouts
- **Better Footer Organization**: Restructured footer with organized links and new sections

### 2. New Products Page (`/products`)
Comprehensive showcase of our micro SAAS solutions and enterprise products:

#### Micro SAAS Solutions
- **ZionTask Pro** - Advanced project management platform ($29/month)
- **ZionCRM Hub** - AI-powered CRM with insights ($49/month)
- **ZionAnalytics** - Real-time business intelligence ($39/month)

#### AI-Powered Services
- **ZionAI Assistant** - Customer support chatbot ($199/month)
- **ZionPredict** - Predictive analytics platform ($299/month)
- **ZionVision** - Computer vision API ($149/month)

#### Cloud Infrastructure
- **ZionCloud Platform** - Multi-cloud management ($199/month)
- **ZionKubernetes** - Managed Kubernetes clusters ($299/month)
- **ZionServerless** - Serverless computing platform ($99/month)

#### Cybersecurity Solutions
- **ZionGuard** - Threat detection platform ($399/month)
- **ZionComply** - Compliance management ($299/month)
- **ZionSecure** - Zero-trust network access ($199/month)

#### Development Tools
- **ZionDevOps** - CI/CD automation platform ($249/month)
- **ZionAPI Gateway** - API management ($179/month)
- **ZionCode Quality** - Code analysis platform ($129/month)

#### Data Solutions
- **ZionData Lake** - Data lake platform ($399/month)
- **ZionBI Studio** - Business intelligence ($249/month)
- **ZionData Sync** - Data synchronization ($179/month)

### 3. New Solutions Page (`/solutions`)
Industry-specific solutions for various sectors:

#### Healthcare & Life Sciences
- Electronic Health Records with AI diagnostics
- Telemedicine platform with e-prescriptions
- Healthcare analytics and predictive modeling

#### Financial Services
- Digital banking platform with enhanced security
- AI-powered fraud detection systems
- RegTech compliance automation

#### Manufacturing & Industry 4.0
- Smart factory IoT platforms
- Supply chain optimization with AI
- Quality management systems

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd zion-tech-group-website

# Run development server
npm run dev

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

# Build for production
npm run build

# Start production server
npm start
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌐 Deployment

The website is configured for deployment on `https://ziontechgroup.com` with:
- Optimized build output
- Lazy-loaded components for performance
- SEO-friendly routing
- Responsive design for all devices

## 📊 Performance Features

- **Lazy Loading**: Components load on-demand for faster initial page load
- **Code Splitting**: Automatic code splitting by route
- **Optimized Assets**: Compressed and optimized static assets
- **Modern Build**: Vite-based build system for optimal performance

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic markup
- **Meta Tags**: Comprehensive meta information for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **Accessibility**: ARIA labels and keyboard navigation support

### Service Worker Capabilities
- **Offline Support**: Works without internet
- **Background Sync**: Offline action queuing
- **Push Notifications**: Real-time updates
- **App Installation**: Add to home screen

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary to Zion Tech Group. All rights reserved.

## 📞 Support

For technical support or questions about the website:
- Email: [contact@ziontechgroup.com]
- Website: [https://ziontechgroup.com]

---
This README is auto-generated. Do not edit manually.

# Cloud Automations

Autonomous, intelligent, and useful automations that run on a schedule in the cloud via GitHub Actions. Outputs are versioned in this repository and visualized on the front page.

## What it does

- Trending GitHub repositories (last 7 days)
- Tech news RSS aggregation
- Public website uptime checks

Data is written to JSON files under `data/`:

- `data/trending/latest.json`
- `data/feeds/latest.json`
- `data/uptime/latest.json`

The `index.html` page renders the latest data dynamically.

## How it runs

- A scheduled workflow (`.github/workflows/automations.yml`) executes every 6 hours and on demand.
- Python scripts in `scripts/` fetch and generate the data.
- If there are changes, the workflow commits them back to the repository using the `GITHUB_TOKEN`.
- A Pages workflow (`.github/workflows/pages.yml`) publishes the site so it is accessible as a public dashboard.

## Local development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python scripts/fetch_trending.py
python scripts/aggregate_feeds.py
python scripts/uptime_check.py
open index.html
```

## Customize

- Edit `scripts/aggregate_feeds.py` to add or remove feeds.
- Edit `scripts/uptime_check.py` to change the monitored URLs.
- Adjust the schedule in `.github/workflows/automations.yml` as needed.