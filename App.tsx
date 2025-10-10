import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
  </div>
));

const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
));

// Main App component
const App = memo(() => {
  const routes = useMemo(() => [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/services', element: <ServicesPage /> },
    { path: '/pricing', element: <PricingPage /> },
    { path: '/blog', element: <BlogPage /> },
    { path: '/case-studies', element: <CaseStudiesPage /> },
    { path: '/team', element: <TeamPage /> },
    { path: '/careers', element: <CareersPage /> },
    { path: '/privacy', element: <PrivacyPage /> },
    { path: '/terms', element: <TermsPage /> },
    { path: '/cookies', element: <CookiesPage /> },
    { path: '/docs', element: <DocsPage /> },
    { path: '/api-docs', element: <ApiDocsPage /> },
    { path: '/support', element: <SupportPage /> },
    { path: '/status', element: <StatusPage /> },
    { path: '/demo', element: <DemoPage /> },
    { path: '/consultation', element: <ConsultationPage /> },
  ], []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Helmet>
            <title>Zion Tech Group - Advanced AI and IT Solutions</title>
            <meta name="description" content="Leading provider of AI and IT solutions for modern businesses" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          
          <UnifiedContentPromotion />
        </div>
      </Router>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;