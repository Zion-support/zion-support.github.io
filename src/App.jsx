import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load only the essential pages that we know exist
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
const Services = React.lazy(() => import('./pages/Services.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentDetail.jsx'));
const Categories = React.lazy(() => import('./pages/CategoriesSection.jsx'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenterPage.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers.jsx'));
const Webinars = React.lazy(() => import('./pages/Webinars.jsx'));
const Training = React.lazy(() => import('./pages/Training.jsx'));
const Research = React.lazy(() => import('./pages/Research.jsx'));
const Support = React.lazy(() => import('./pages/Support.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const SystemStatus = React.lazy(() => import('./pages/SystemStatus.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));

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
              
              {/* Services and Marketplace */}
              <Route path="/services" element={<Services />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              
              {/* Resources */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/research" element={<Research />} />
              
              {/* Support */}
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<SystemStatus />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/cookies" element={<Cookies />} />

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
