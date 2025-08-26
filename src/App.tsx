import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// Additional pages
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Partners = React.lazy(() => import('./pages/Partners.tsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.tsx'));
const Talent = React.lazy(() => import('./pages/Talent.tsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.tsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage.tsx'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Security = React.lazy(() => import('./pages/Security.tsx'));
const Status = React.lazy(() => import('./pages/Status.tsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.tsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.tsx'));
const Profile = React.lazy(() => import('./pages/Profile.tsx'));
const Settings = React.lazy(() => import('./pages/Settings.tsx'));
const Signup = React.lazy(() => import('./pages/Signup.tsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.tsx'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'));

// Service pages
const CybersecurityServices = React.lazy(() => import('./pages/CybersecurityServices.tsx'));
const CloudServices = React.lazy(() => import('./pages/services/Cloud.tsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.tsx'));
const IoTServices = React.lazy(() => import('./pages/IoTServicesPage.tsx'));
const QuantumServices = React.lazy(() => import('./pages/services/QuantumServices.tsx'));
const AIServices = React.lazy(() => import('./pages/AIServicesPage.tsx'));
const DigitalMarketingServices = React.lazy(() => import('./pages/DigitalMarketingServicesPage.tsx'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions.tsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.tsx'));
const EnterpriseSolutions = React.lazy(() => import('./pages/solutions/EnterpriseSolutions.tsx'));
const HealthcareSolutions = React.lazy(() => import('./pages/solutions/HealthcareSolutions.tsx'));
const GovernmentSolutions = React.lazy(() => import('./pages/solutions/GovernmentSolutions.tsx'));
const RetailSolutions = React.lazy(() => import('./pages/solutions/RetailSolutions.tsx'));

// Admin pages
const Admin = React.lazy(() => import('./pages/Admin.tsx'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard.tsx'));

// Community pages
const Community = React.lazy(() => import('./pages/Community.tsx'));
const Events = React.lazy(() => import('./pages/Events.tsx'));

// Developer pages
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.tsx'));
const API = React.lazy(() => import('./pages/API.tsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.tsx'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              
              {/* Company Pages */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Service Pages */}
              <Route path="/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/cloud-services" element={<CloudServices />} />
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              <Route path="/iot-services" element={<IoTServices />} />
              <Route path="/quantum-services" element={<QuantumServices />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/digital-marketing-services" element={<DigitalMarketingServices />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              
              {/* Solution Pages */}
              <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
              <Route path="/healthcare-solutions" element={<HealthcareSolutions />} />
              <Route path="/government-solutions" element={<GovernmentSolutions />} />
              <Route path="/retail-solutions" element={<RetailSolutions />} />
              
              {/* Support & Resources */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              
              {/* Community Routes */}
              <Route path="/community" element={<Community />} />
              <Route path="/events" element={<Events />} />
              
              {/* Developer Routes */}
              <Route path="/developer" element={<DeveloperPortal />} />
              <Route path="/api" element={<API />} />
              <Route path="/docs" element={<Documentation />} />
              
              {/* Error Routes */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
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