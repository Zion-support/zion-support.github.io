import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const ResourcesPage = React.lazy(() => import('./pages/Resources'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const TeamPage = React.lazy(() => import('./pages/Team'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const AdditionalServicesPage = React.lazy(() => import('./pages/AdditionalServicesPage'));

// Service-specific pages
const AIServicesPage = React.lazy(() => import('./pages/services/AIServicesPage'));
const MicroSAASPage = React.lazy(() => import('./pages/services/MicroSAASPage'));
const ITServicesPage = React.lazy(() => import('./pages/services/ITServicesPage'));
const RealTimeCognitiveAutomationPage = React.lazy(() => import('./pages/services/RealTimeCognitiveAutomationPage'));
const QuantumComputingConsultingPage = React.lazy(() => import('./pages/services/QuantumComputingConsultingPage'));
const CognitiveComputingTransformationPage = React.lazy(() => import('./pages/services/CognitiveComputingTransformationPage'));

// Solution-specific pages
const EnterpriseSolutionsPage = React.lazy(() => import('./pages/solutions/EnterpriseSolutionsPage'));
const SMBSolutionsPage = React.lazy(() => import('./pages/solutions/SMBSolutionsPage'));
const StartupSolutionsPage = React.lazy(() => import('./pages/solutions/StartupSolutionsPage'));

// Additional pages
const DocumentationPage = React.lazy(() => import('./pages/DocumentationPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// 404 Page
const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Return Home
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              
              {/* Service-specific Routes */}
              <Route path="/services/ai-services" element={<AIServicesPage />} />
              <Route path="/services/micro-saas" element={<MicroSAASPage />} />
              <Route path="/services/it-services" element={<ITServicesPage />} />
              <Route path="/services/real-time-cognitive-automation" element={<RealTimeCognitiveAutomationPage />} />
              <Route path="/services/quantum-computing-consulting" element={<QuantumComputingConsultingPage />} />
              <Route path="/services/cognitive-computing-transformation" element={<CognitiveComputingTransformationPage />} />
              
              {/* Solution-specific Routes */}
              <Route path="/solutions/enterprise" element={<EnterpriseSolutionsPage />} />
              <Route path="/solutions/smb" element={<SMBSolutionsPage />} />
              <Route path="/solutions/startup" element={<StartupSolutionsPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Additional Services */}
              <Route path="/additional-services" element={<AdditionalServicesPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;