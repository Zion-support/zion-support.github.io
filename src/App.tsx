import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load main pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Services = React.lazy(() => import('./pages/Services.jsx'));
const InnovativeServicesShowcase2026 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025.jsx'));
const ServicesOverview2026 = React.lazy(() => import('./pages/ServicesOverview.jsx'));

// Lazy load service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices.jsx'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices.jsx'));
const CloudDevOpsServices = React.lazy(() => import('./pages/services/CloudDevOpsServices.jsx'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices.jsx'));
const QuantumComputingServices = React.lazy(() => import('./pages/services/QuantumComputing.jsx'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices.jsx'));
const DigitalTwinServices = React.lazy(() => import('./pages/services/DigitalTransformation.jsx'));
const SustainabilityServices = React.lazy(() => import('./pages/services/GreenIT.jsx'));

// Lazy load marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.jsx'));

// Lazy load micro SAAS pages
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS.jsx'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage.jsx'));
const MicroSAASServices = React.lazy(() => import('./pages/MicroSAASServices.jsx'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.jsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.jsx'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions.jsx'));

// Lazy load company pages
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));

// Lazy load support pages
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));

// Lazy load additional pages
const News = React.lazy(() => import('./pages/News.jsx'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudy.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const Training = React.lazy(() => import('./pages/Training.jsx'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers.jsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.jsx'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment.jsx'));

// Lazy load legal pages
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Suspense fallback={
          <div className="min-h-screen bg-futuristic flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-zion-cyan text-lg">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/innovative-services-showcase-2026" element={<InnovativeServicesShowcase2026 />} />
            <Route path="/services-overview-2026" element={<ServicesOverview2026 />} />

            {/* Service Routes */}
            <Route path="/services/ai-analytics" element={<AIServices />} />
            <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
            <Route path="/services/cloud-devops" element={<CloudDevOpsServices />} />
            <Route path="/services/iot-edge" element={<IoTServices />} />
            <Route path="/services/quantum-computing" element={<QuantumComputingServices />} />
            <Route path="/services/blockchain" element={<BlockchainServices />} />
            <Route path="/services/digital-twin" element={<DigitalTwinServices />} />
            <Route path="/services/sustainability" element={<SustainabilityServices />} />

            {/* Marketplace Routes */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/green-it" element={<GreenIT />} />
            <Route path="/it-onsite-services" element={<ITOnsiteServices />} />

            {/* Micro SAAS Routes */}
            <Route path="/micro-saas" element={<MicroSAAS />} />
            <Route path="/micro-saas/page" element={<MicroSAASPage />} />
            <Route path="/micro-saas/services" element={<MicroSAASServices />} />
            <Route path="/micro-saas/services-page" element={<MicroSAASServicesPage />} />
            <Route path="/micro-saas/showcase" element={<MicroSAASShowcase />} />
            <Route path="/micro-saas/solutions" element={<MicroSAASSolutions />} />

            {/* Company Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* Support Routes */}
            <Route path="/help" element={<Help />} />
            <Route path="/status" element={<Status />} />
            <Route path="/security" element={<Security />} />

            {/* Additional Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/events" element={<Events />} />
            <Route path="/training" element={<Training />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />

            {/* Legal Routes */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <div className="min-h-screen bg-futuristic flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                  <p className="text-zion-cyan text-xl mb-8">Page not found</p>
                  <a 
                    href="/" 
                    className="px-6 py-3 bg-zion-cyan text-futuristic font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;