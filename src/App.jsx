import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

// Home and main pages
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));

// Services pages
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing2025.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen"></di></div>
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></d></di></div>
  </div>
);

// Simple Services page component
const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24"></di></div>
    <div className="container mx-auto px-4 py-16"></di></div>
      <div className="text-center mb-16"></di></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6"></h></h1>
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"></spa></span>
            {" "}Services
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></di></div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></di></div>
          <h3 className="text-xl font-bold text-white mb-4"></h>AI & Machine Learning</h3>
          <p className="text-gray-300"></p>
            Cutting-edge artificial intelligence solutions for business automation and insights.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></di></div>
          <h3 className="text-xl font-bold text-white mb-4"></h>Cybersecurity</h3>
          <p className="text-gray-300"></p>
            Advanced security solutions with zero-trust architecture and threat detection.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></di></div>
          <h3 className="text-xl font-bold text-white mb-4"></h>Cloud & DevOps</h3>
          <p className="text-gray-300"></p>
            Scalable cloud infrastructure and automated deployment solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router></Route></Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></di></div>
        <AppHeader /></AppHeade></AppHeader>
        <main className="flex-1"></mai></main>
          <Suspense fallback={<LoadingSpinner /></Suspens></Suspense>}>
            <Routes></Route></Routes>
              <Route path="/" element={<Home /></Rout></Route>} />
              <Route path="/about" element={<About /></Rout></Route>} />
              <Route path="/contact" element={<Contact /></Rout></Route>} />
              <Route path="/blog" element={<BlogPage /></Rout></Route>} />
              <Route path="/partners" element={<PartnersPage /></Rout></Route>} />
              <Route path="/login" element={<Login /></Rout></Route>} />
              <Route path="/faq" element={<FAQ /></Rout></Route>} />
              <Route path="/careers" element={<Careers /></Rout></Route>} />
              <Route path="/sitemap" element={<Sitemap /></Rout></Route>} />
              <Route path="/pricing" element={<ComprehensivePricing /></Rout></Route>} />

              {/* Services routes */}
              <Route path="/services" element={<ServicesPage /></Rout></Route>} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={></Rout></Route>
                <div className="flex items-center justify-center min-h-screen"></di></div>
                  <div className="text-center"></di></div>
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4"></h>404 - Page Not Found</h1>
                    <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"></a>
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer /></Foote></Footer>
        <ChatAssistant /></ChatAssistan></ChatAssistant>
      </div>
    </Router>

  );
}


export default App;
