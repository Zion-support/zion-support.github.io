import React, { Suspense, lazy } from &apos;react';
import { BrowserRouter as Router, Routes, Route } from &apos;react-router-dom';
import { AppHeader } from &apos;./layout/AppHeader.jsx';
import { Footer } from &apos;./components/Footer.jsx';
import { ChatAssistant } from &apos;./components/ChatAssistant.tsx';
(&apos;&apos;);
// Home and main pages';&apos;&apos;
const Home = lazy(() => import(&apos;./pages/Home.tsx&apos;));&apos;
const About = lazy(() => import(&apos;./pages/About.tsx&apos;));&apos;
const Contact = lazy(() => import(&apos;./pages/Contact.tsx&apos;));&apos;
const BlogPage = lazy(() => import(&apos;./pages/BlogPage.tsx&apos;));&apos;
const PartnersPage = lazy(() => import(&apos;./pages/Partners.tsx&apos;));&apos;
const Login = lazy(() => import(&apos;./pages/Login.tsx&apos;));&apos;
const FAQ = lazy(() => import(&apos;./pages/FAQ.tsx&apos;));&apos;
const Careers = lazy(() => import(&apos;./pages/Careers.tsx&apos;));&apos;
const Sitemap = lazy(() => import(&apos;./pages/Sitemap.jsx&apos;));
// Services pages;&apos;
const ComprehensivePricing = lazy(() =>
  import(&apos;./pages/ComprehensivePricing2025.tsx&apos;));
// Loading component&apos;
const LoadingSpinner = () => (
  <;<div className=&apos;flex items-center justify-center min-h-screen&apos;>&apos;'
    <div className=&apos;animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan&apos;>&apos;'</div>
  <;</div>
);
// Simple Services page component
const ServicesPage = () => (
  <;<div className=&apos;min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24&apos;>&apos;'
    <div className=&apos;container mx-auto px-4 py-16&apos;>&apos;'
      <div className=&apos;text-center mb-16&apos;>&apos;'
        <h1 className=&apos;text-4xl md:text-6xl font-bold mb-6&apos;>
          Our&apos;
          <span className=&apos;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400&apos;>
            {&apos; &apos;}
            Services&apos;&apos;
          </span>
        </h1>
        <p className=&apos;text-xl text-gray-300 max-w-3xl mx-auto&apos;>
          Comprehensive technology solutions to drive your business forward&apos;
        </p>
      </div>
      <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&apos;>&apos;'
        <div className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20&apos;>&apos;'
          <h3 className=&apos;text-xl font-bold text-white mb-4&apos;>
            AI & Machine Learning&apos;
          </h3>
          <;<p className=&apos;text-gray-300&apos;>
            Cutting-edge artificial intelligence solutions for business;
            automation and insights.&apos;
          </p>
        </div>
        <div className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20&apos;>&apos;'
          <h3 className=&apos;text-xl font-bold text-white mb-4&apos;>Cybersecurity&apos;</h3>
          <p className=&apos;text-gray-300&apos;>
            Advanced security solutions with zero-trust architecture and threat;
            detection.&apos;
          </p>
        </div>
        <div className=&apos;bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20&apos;>&apos;'
          <h3 className=&apos;text-xl font-bold text-white mb-4&apos;>Cloud & DevOps&apos;</h3>
          <p className=&apos;text-gray-300&apos;>
            Scalable cloud infrastructure and automated deployment solutions.&apos;
          </p>
        </div>
      </div>
    </div>
  </div>
)
function App() {}
  return (
    <Router>
      <div className=&apos;min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light&apos;>&apos;'
        <AppHeader />
        <main className=&apos;flex-1&apos;>&apos;'
          <Suspense fallback={}<LoadingSpinner />}>
            <Routes>
              <Route path=&apos;/&apos; element={&apos;}&apos;<Home />} />
              <Route path=&apos;/about&apos; element={&apos;}<About />} />
              <Route path=&apos;/contact&apos; element={&apos;}<Contact />} />
              <Route path=&apos;/blog&apos; element={&apos;}<BlogPage />} />
              <Route path=&apos;/partners&apos; element={&apos;}<PartnersPage />} />
              <Route path=&apos;/login&apos; element={&apos;}<Login />} />
              <Route path=&apos;/faq&apos; element={&apos;}<FAQ />} />
              <Route path=&apos;/careers&apos; element={&apos;}<Careers />} />
              <Route path=&apos;/sitemap&apos; element={&apos;}<Sitemap />} />
              <Route path=&apos;/pricing&apos; element={&apos;}<ComprehensivePricing />} />{/* Services routes */}
              <Route path=&apos;/services&apos; element={&apos;}<ServicesPage />} />{/* Catch-all route for 404 */}
              <Route
                path=&apos;*'&apos;&apos;';
                element={}&apos;&apos;
                  <div className=&apos;flex items-center justify-center min-h-screen&apos;>&apos;'
                    <div className=&apos;text-center&apos;>&apos;'
                      <h1 className=&apos;text-4xl font-bold text-zion-cyan mb-4&apos;>
                        404 - Page Not Found&apos;
                      </h1>
                      <p className=&apos;text-zion-slate-light mb-6&apos;>
                        The page you&apos;re looking for doesn&apos;t exist.&apos;
                      </p>
                      <a
                        href=&apos;/'&apos;&apos;';
                        className=&apos;bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors&apos;&apos;'&quot;>
                        Go Home&quot;&apos;
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  )}
export default App;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
