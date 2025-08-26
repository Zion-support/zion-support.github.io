import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const PartnersPage = React.lazy(() => import('./pages/Partners.tsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));

// Services pages
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.tsx'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage.tsx'));
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS.tsx'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage.tsx'));
const MicroSAASServices = React.lazy(() => import('./pages/MicroSAASServices.tsx'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.tsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.tsx'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices.tsx'));
const IndustrySolutions = React.lazy(() => import('./pages/IndustrySolutions.tsx'));
const InnovationServicesMarketing = React.lazy(() => import('./pages/InnovationServicesMarketing.tsx'));
const InnovativeNewServices2025 = React.lazy(() => import('./pages/InnovativeNewServices2025.tsx'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025.tsx'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview.tsx'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase.tsx'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025.tsx'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage.tsx'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage.tsx'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage.js'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace.tsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.tsx'));

// Talent pages
const JobDetails = React.lazy(() => import('./pages/JobDetails.tsx'));
const Leadership = React.lazy(() => import('./pages/Leadership.tsx'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail.tsx'));
const HiringTracker = React.lazy(() => import('./pages/HiringTracker.tsx'));

// Resource pages
const HelpCenter = React.lazy(() => import('./pages/HelpCenterPage.tsx'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks.tsx'));
const Interviews = React.lazy(() => import('./pages/Interviews.tsx'));
const Featured = React.lazy(() => import('./pages/Featured.tsx'));

// Support pages
const Support = React.lazy(() => import('./pages/Support.tsx'));
const Security = React.lazy(() => import('./pages/Security.tsx'));
const SystemStatus = React.lazy(() => import('./pages/SystemStatus.tsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.tsx'));

// Documentation pages
const Documentation = React.lazy(() => import('./pages/Documentation.tsx'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers.tsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.tsx'));
const Training = React.lazy(() => import('./pages/Training.tsx'));
const Research = React.lazy(() => import('./pages/Research.tsx'));

// Search and categories
const Search = React.lazy(() => import('./pages/Search.tsx'));
const Categories = React.lazy(() => import('./pages/Categories.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />

              {/* Services routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/pricing" element={<ServicesPricingPage />} />
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/micro-saas/page" element={<MicroSAASPage />} />
              <Route path="/micro-saas/services" element={<MicroSAASServices />} />
              <Route path="/micro-saas/services/page" element={<MicroSAASServicesPage />} />
              <Route path="/micro-saas/showcase" element={<MicroSAASShowcase />} />
              <Route path="/micro-saas-services" element={<MicroSaasServices />} />
              <Route path="/industry-solutions" element={<IndustrySolutions />} />
              <Route path="/innovation-services-marketing" element={<InnovationServicesMarketing />} />
              <Route path="/innovative-new-services-2025" element={<InnovativeNewServices2025 />} />
              <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
              <Route path="/innovative-services-overview" element={<InnovativeServicesOverview />} />
              <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/iot-services" element={<IoTServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />

              {/* Marketplace routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />

              {/* Talent routes */}
              <Route path="/talent" element={<Careers />} />
              <Route path="/talent/job/:id" element={<JobDetails />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/hiring-tracker" element={<HiringTracker />} />

              {/* Resource routes */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/featured" element={<Featured />} />

              {/* Support routes */}
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<SystemStatus />} />
              <Route path="/accessibility" element={<Accessibility />} />

              {/* Documentation routes */}
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/research" element={<Research />} />

              {/* Search and categories */}
              <Route path="/search" element={<Search />} />
              <Route path="/categories" element={<Categories />} />

              {/* Equipment route */}
              <Route path="/equipment" element={<Marketplace />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                    <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
