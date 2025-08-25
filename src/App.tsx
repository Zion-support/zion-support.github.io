import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Lazy load all pages
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const TeamPage = React.lazy(() => import('./pages/Team'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const CybersecurityPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const QuantumTechnologyPage = React.lazy(() => import('./pages/QuantumTechnology'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const AIBusinessIntelligencePage = React.lazy(() => import('./pages/AIBusinessIntelligence'));
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const FinancialSolutionsPage = React.lazy(() => import('./pages/FinancialSolutions'));
const ManufacturingSolutionsPage = React.lazy(() => import('./pages/ManufacturingSolutions'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudies'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenter'));
const DocumentationPage = React.lazy(() => import('./pages/Documentation'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const AccessibilityPage = React.lazy(() => import('./pages/Accessibility'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const MissionPage = React.lazy(() => import('./pages/Mission'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

// Enhanced loading component with skeleton
const PageLoader = () => (
  <div className="loading-overlay">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-lg">Loading amazing content...</p>
    </div>
  </div>
);

const baseRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/team', element: <TeamPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/services/cybersecurity', element: <CybersecurityPage /> },
  { path: '/services/quantum-technology', element: <QuantumTechnologyPage /> },
  { path: '/services/ai-services', element: <AIServicesPage /> },
  { path: '/services/ai-business-intelligence', element: <AIBusinessIntelligencePage /> },
  { path: '/solutions/enterprise', element: <EnterpriseSolutionsPage /> },
  { path: '/solutions/financial', element: <FinancialSolutionsPage /> },
  { path: '/solutions/manufacturing', element: <ManufacturingSolutionsPage /> },
  { path: '/case-studies', element: <CaseStudiesPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/help', element: <HelpCenterPage /> },
  { path: '/docs', element: <DocumentationPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/cookies', element: <CookiesPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/mission', element: <MissionPage /> },
  { path: '*', element: <NotFoundPage /> }
];

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        <main className="main-content pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {baseRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        {/* Enhanced user experience components */}
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  );
}

export default App;