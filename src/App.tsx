<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Core pages (already present in repo)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';

// Services (existing)
import AISolutions from './pages/AISolutions';
import ITServices from './pages/ITServices';
import AIMicroSAAS from './pages/AIMicroSAAS';
import CloudDevOps from './pages/services/CloudDevOps';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AdvancedCybersecurityAI from './pages/services/AdvancedCybersecurityAI';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';

// Services (newly added in this update)
import AIComplianceMonitor from './pages/services/AIComplianceMonitor';
import SEOSplitTesting from './pages/services/SEOSplitTesting';
import ImageCDNOptimizer from './pages/services/ImageCDNOptimizer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-[18rem_1fr] gap-8">
              <div className="hidden xl:block">
                <Sidebar />
              </div>
              <main className="min-w-0">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/pricing" element={<Pricing />} />

                  {/* Services hub */}
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/ai-services" element={<AISolutions />} />
                  <Route path="/services/it-services" element={<ITServices />} />
                  <Route path="/services/micro-saas" element={<AIMicroSAAS />} />
                  <Route path="/services/cloud" element={<CloudDevOps />} />
                  <Route path="/services/analytics" element={<AIDataAnalytics />} />
                  <Route path="/services/security" element={<AdvancedCybersecurityAI />} />
                  <Route path="/services/automation" element={<AIWorkflowAutomation />} />

                  {/* New micro-SaaS services */}
                  <Route path="/services/ai-compliance-monitor" element={<AIComplianceMonitor />} />
                  <Route path="/services/seo-split-testing" element={<SEOSplitTesting />} />
                  <Route path="/services/image-cdn-optimizer" element={<ImageCDNOptimizer />} />

                  {/* Solutions hub */}
                  <Route path="/solutions" element={<SolutionsPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
=======
import React from "react";
import, AppMinimal, from "./A, p, p.minim, a, l";
const, Ap, p: Rea, c, t.FC = () => {
  retu, r, n <AppMinim, a, l />;
=======
impo, r, t { BrowserRouter, as, Router, Rout, e, s, Rou, t, e } fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t { HelmetProvid, e, r } fr, o, m "rea, c, t-helm, e, t-asy, n, c";
import, Header, from "./componen, t, s/Head, e, r";
import, Footer, from "./componen, t, s/Foot, e, r";
import, Sidebar, from "./componen, t, s/Sideb, a, r";
const, HomePag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/HomePa, g, e'));
const, AboutPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/AboutPa, g, e'));
const, ContactPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/ContactPa, g, e'));
const, ServicesPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/ServicesPa, g, e'));
const, SolutionsPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/SolutionsPa, g, e'));
const, BlogPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/BlogPa, g, e'));
const, CaseStudiesPag, e = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/CaseStudiesPa, g, e'));
const, Resource, s = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Resourc, e, s'));
const, Privac, y = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Priva, c, y'));
const, Term, s = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Ter, m, s'));
const, Tea, m = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Te, a, m'));
const, Suppor, t = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Suppo, r, t'));
const, Sitema, p = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Sitem, a, p'));
const, Cookie, s = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Cooki, e, s'));
const, Partner, s = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Partne, r, s'));
const, Pricin, g = Rea, c, t.la, z, y(() => impo, r, t('./pag, e, s/Prici, n, g'));
const, LoadingSpinne, r: Rea, c, t.FC = () => (
  <div, className="flex, item, s-center, justif, y-center, mi, n-h-scre, e, n">
    <div, className="anima, t, e-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2, borde, r-bl, u, e-6, 0, 0"></d, i, v>
  </d, i, v>
);
const, Ap, p: Rea, c, t.FC = () => {
  return (
    <HelmetProvid, e, r>
      <Rout, e, r>
        <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
          <Head, e, r   />
          <main, className="relativ, e, z-10">
            <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m:px-6, l, g:px-8, grid, grid-co, l, s-1 x
  l:gr, i, d-co, l, s-[18rem_1, f, r] g, a, p-8">
              <Sideb, a, r   />
              <div, i, d="ma, i, n-conte, n, t">
                <Rea, c, t.Suspense, fallbac, k={<LoadingSpinn, e, r />}>
                  <Rout, e, s>
                    <Route, pat, h="/" eleme, n, t={<HomePa, g, e />}  />
                    <Route, pat, h="/servic, e, s/*" eleme, n, t={<ServicesPa, g, e />}  />
                    <Route, pat, h="/solutio, n, s/*" eleme, n, t={<SolutionsPa, g, e />}  />
                    <Route, pat, h="/abo, u, t" eleme, n, t={<AboutPa, g, e />}  />
                    <Route, pat, h="/conta, c, t" eleme, n, t={<ContactPa, g, e />}  />
                    <Route, pat, h="/bl, o, g/*" eleme, n, t={<BlogPa, g, e />}  />
                    <Route, pat, h="/ca, s, e-studi, e, s" eleme, n, t={<CaseStudiesPa, g, e />}  />
                    <Route, pat, h="/resourc, e, s" eleme, n, t={<Resourc, e, s />}  />
                    <Route, pat, h="/partne, r, s" eleme, n, t={<Partne, r, s />}  />
                    <Route, pat, h="/prici, n, g" eleme, n, t={<Prici, n, g />}  />
                    <Route, pat, h="/te, a, m" eleme, n, t={<Te, a, m />}  />
                    <Route, pat, h="/priva, c, y" eleme, n, t={<Priva, c, y />}  />
                    <Route, pat, h="/ter, m, s" eleme, n, t={<Ter, m, s />}  />
                    <Route, pat, h="/cooki, e, s" eleme, n, t={<Cooki, e, s />}  />
                    <Route, pat, h="/suppo, r, t" eleme, n, t={<Suppo, r, t />}  />
                    <Route, pat, h="/sitem, a, p" eleme, n, t={<Sitem, a, p />}  />
                    <Rou, t, e
  pa, t, h="*"
                      eleme, n, t={
                        <div, className="m, i, n-h-screen, flex, items-center, justif, y-cent, e, r">
                          <div, className="te, x, t-cent, e, r">
                            <h1, className="te, x, t-6xl, fon, t-bold, tex, t-gr, a, y-300, m, b-4">4, 0, 4</h1>
                            <p, className="te, x, t-xl, tex, t-gr, a, y-600, m, b-8">Page, not, found</p>
                            <a, hre, f="/" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-6, p, y-3, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s">Return, Hom, e</a>
                          </d, i, v>
                        </d, i, v>
                      }
                     />
                  </Rout, e, s>
                </Rea, c, t.Suspen, s, e>
              </d, i, v>
            </d, i, v>
          </ma, i, n>
          <Foot, e, r   />
        </d, i, v>
      </Rout, e, r>
    </HelmetProvid, e, r>
>>>>>>> 84a13d73df97 (Fix syntax errors and optimize build performance)
  );
};
export default App;