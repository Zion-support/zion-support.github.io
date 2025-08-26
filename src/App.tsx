import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Partners = React.lazy(() => import('./pages/Partners'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Help = React.lazy(() => import('./pages/Help'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Support = React.lazy(() => import('./pages/Support'));
const Consulting = React.lazy(() => import('./pages/Consulting'));
const AI = React.lazy(() => import('./pages/services/AI'));
const Cloud = React.lazy(() => import('./pages/services/Cloud'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const Infrastructure = React.lazy(() => import('./pages/services/Infrastructure'));
const Transformation = React.lazy(() => import('./pages/services/Transformation'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumTechnology = React.lazy(() => import('./pages/services/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-cyan-500 text-lg font-medium">Loading Zion...</p>
      <p className="text-gray-400 text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* Company Pages */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              
              {/* Support Pages */}
              <Route path="/help" element={<Help />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              
              {/* Service Pages */}
              <Route path="/services" element={<div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-4">Services Overview</h1>
                  <p className="text-gray-400 mb-6">Our comprehensive service portfolio</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="/services/ai" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
                      <p className="text-gray-400">Cutting-edge AI solutions</p>
                    </a>
                    <a href="/services/cloud" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">Cloud & DevOps</h3>
                      <p className="text-gray-400">Scalable cloud infrastructure</p>
                    </a>
                    <a href="/services/cybersecurity" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                      <p className="text-gray-400">Advanced security solutions</p>
                    </a>
                    <a href="/services/infrastructure" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>
                      <p className="text-gray-400">Robust IT foundations</p>
                    </a>
                    <a href="/services/transformation" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">Digital Transformation</h3>
                      <p className="text-gray-400">Business modernization</p>
                    </a>
                    <a href="/services/consulting" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">Consulting</h3>
                      <p className="text-gray-400">Strategic technology guidance</p>
                    </a>
                  </div>
                </div>
              </div>} />
              <Route path="/services/ai" element={<AI />} />
              <Route path="/services/cloud" element={<Cloud />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/infrastructure" element={<Infrastructure />} />
              <Route path="/services/transformation" element={<Transformation />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/iot-edge-computing" element={<IoTServices />} />
              <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/services/space-tech" element={<SpaceTech />} />
              <Route path="/services/green-it" element={<GreenIT />} />
              <Route path="/services/micro-saas" element={<MicroSAAS />} />
              <Route path="/services/consulting" element={<Consulting />} />
              
              {/* Catch all route for 404 */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">Return to Home</a>
                </div>
              </div>} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;