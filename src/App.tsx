import React from 'react';
import ./components/ from './components/;
import Footer from './components/Footer;
import LoadingSpinner from './components/LoadingSpinner;
import ErrorBoundary from './components/ErrorBoundary;
// Lazy load pages for better performance;'
const Page = lazy(() => import('./page'));'
const AboutPage = lazy(() => import('./about/page'));'
const ContactPage = lazy(() => import('./contact/page'));'
const CaseStudiesPage = lazy(() => import('./case-studies/page'));'
const BlogPage = lazy(() => import('./blog/page'));
// AI Services;'
const AiServicesPage = lazy(() => import('./ai-services/page'));'
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));'
const AiAutomationPage = lazy(() => import('./ai-automation/page'));'
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));'
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
// IT Services;'
const ItServicesPage = lazy(() => import('./it-services/page'));'
const ServicesPage = lazy(() => import('./cloud-services/page'));'
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));'
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));'
const DevOpsPage = lazy(() => import('./devops/page'));
// Specialized Solutions;'
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));'
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));'
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));'
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));'
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));'
const RoboticsPage = lazy(() => import('./robotics/page'));
// Company Pages;'
const TeamPage = lazy(() => import('./team/page'));'
const eersPage = lazy(() => import('./careers/page'));'
const NewsPage = lazy(() => import('./news/page'));
// Support Pages;'
const SupportPage = lazy(() => import('./support/page'));'
const DocumentationPage = lazy(() => import('./documentation/page'));'
const FAQPage = lazy(() => import('./faq/page'));
// Additional Pages;'
const PricingPage = lazy(() => import('./pricing/page'));'
const DemoPage = lazy(() => import('./demo/page'));'
const ConsultationPage = lazy(() => import('./consultation/page'));
// Legal Pages;'
const PrivacyPage = lazy(() => import('./privacy/page'));'
const TermsPage = lazy(() => import('./terms/page'));'
const CookiesPage = lazy(() => import('./cookies/page'));
const App: React.FC = () => {} catch (_error) {
        console._error(&apos;Failed to initialize app:&apos;, _error);
        setIsInitialized(true); // Still show the app even if initialization fails;
      }
    }
    initApp();
  }, []);

  if (!isInitialized) {}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          </>
          <Suspense fallback={}>
            <Routes>
              {}
              <Route path="/" element={} />
              {}
              <Route path="/about" element={} />
              <Route path="/team" element={} />
              <Route path="/careers" element={} />
              <Route path="/news" element={} />
              <Route path="/contact" element={} />
              {}
              <Route path="/services" element={} />
              <Route path="/pricing" element={} />
              <Route path="/demo" element={} />
              <Route path="/consultation" element={} />
              {}
              <Route path="/ai-services" element={} />
              <Route path="/ai-marketing" element={} />
              <Route path="/ai-automation" element={} />
              <Route path="/ai-healthcare" element={} />
              <Route path="/ai-fintech" element={} />
              {}
              <Route path="/it-services" element={} />
              <Route path="/cloud-services" element={} />
              <Route path="/cybersecurity" element={} />
              <Route path="/data-analytics" element={} />
              <Route path="/devops" element={} />
              {}
              <Route path="/quantum-computing" element={} />
              <Route path="/autonomous-systems" element={} />
              <Route path="/blockchain-web3" element={} />
              <Route path="/iot-edge-computing" element={} />
              <Route path="/business-intelligence" element={} />
              <Route path="/robotics" element={} />
              {}
              <Route path="/support" element={} />
              <Route path="/documentation" element={} />
              <Route path="/faq" element={} />
              {}
              <Route path="/case-studies" element={} />
              <Route path="/blog" element={} />
              {}
              <Route path="/privacy" element={} />
              <Route path="/terms" element={} />
              <Route path="/cookies" element={} />
              {}
              <Route path="*" element={} />
            </Routes>
          </Suspense>
          <Footer />
        </div>'