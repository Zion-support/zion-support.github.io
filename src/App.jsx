import React, { Suspense, lazy } from 'react'; import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; import { AppHeader } from './layout/AppHeader.jsx'; import { Footer } from './components/Footer.jsx'; import { ChatAssistant } from './components/ChatAssistant.tsx';
import React, { Suspense, lazy } from 'react'; import { BrowserRouter as Router, Routes, Route    } from 'react-router-dom'; import { AppHeader } from './layout/AppHeader.jsx'; import { Footer } from './components/Footer.jsx'; import { ChatAssistant } from './components/ChatAssistant.tsx';

import React, { Suspense, lazy } from 'react';,"});,"})
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';,"});,"})
import { AppHeader } from './layout/AppHeader.jsx';,"});,"})
import { Footer } from './components/Footer.jsx';,"});,"})
import { ChatAssistant } from './components/ChatAssistant.tsx';,"});,"})
;,"});,"})
('');,"});,"})
;,"});,"})
import React, { Suspense, lazy } from 'react'; import { BrowserRouter as Router, Routes, Route    } from 'react-router-dom'; import { AppHeader } from './layout/AppHeader.jsx'; import { Footer } from './components/Footer.jsx'; import { ChatAssistant } from './components/ChatAssistant.tsx';,"});,"})
// Home and main pages';,"});,"})
const Home = lazy(() => import('./pages/Home.tsx'));,"});,"})
const About = lazy(() => import('./pages/About.tsx'));,"});,"})
const Contact = lazy(() => import('./pages/Contact.tsx'));,"});,"})
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));,"});,"})
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));,"});,"})
const Login = lazy(() => import('./pages/Login.tsx'));,"});,"})
const FAQ = lazy(() => import('./pages/FAQ.tsx'));,"});,"})
const Careers = lazy(() => import('./pages/Careers.tsx'));,"});,"})
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));,"});,"})
;,"});,"})
// Services pages;,"});,"})
const ComprehensivePricing = lazy(() =>;,"});,"})
  import('./pages/ComprehensivePricing2025.tsx');,"});,"})
);,"});,"})
;,"});,"})
// Loading component;,"});,"})
const LoadingSpinner = () => (;,"});,"})
  <div className="flex items-center justify-center min-h-screen">;,"});,"})
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>;,"});,"})
  </div>;,"});,"})
);,"});,"})
;,"});,"})
// Simple Services page component;,"});,"})
const ServicesPage = () => (;,"});,"})
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">;,"});,"})
    <div className="container mx-auto px-4 py-16">;,"});,"})
      <div className="text-center mb-16">;,"});,"})
        <h1 className="text-4xl md:text-6xl font-bold mb-6">;,"});,"})
          Our;,"});,"})
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">;,"});,"})
            {' '}"});,"})
            Services;,"});,"})
          </span>;,"});,"})
        </h1>;,"});,"})
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">;,"});,"})
          Comprehensive technology solutions to drive your business forward;,"});,"})
        </p>;,"});,"})
      </div>;,"});,"})
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;,"});,"})
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;,"});,"})
          <h3 className="text-xl font-bold text-white mb-4">;,"});,"})
            AI & Machine Learning;,"});,"})
          </h3>;,"});,"})
          <p className="text-gray-300">;,"});,"})
            Cutting-edge artificial intelligence solutions for business;,"});,"})
            automation and insights.;,"});,"})
          </p>;,"});,"})
        </div>;,"});,"})
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;,"});,"})
          <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>;,"});,"})
          <p className="text-gray-300">;,"});,"})
            Advanced security solutions with zero-trust architecture and threat;,"});,"})
            detection.;,"});,"})
          </p>;,"});,"})
        </div>;,"});,"})
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;,"});,"})
          <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>;,"});,"})
          <p className="text-gray-300">;,"});,"})
            Scalable cloud infrastructure and automated deployment solutions.;,"});,"})
          </p>;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
    </div>;,"});,"})
  </div>;,"});,"})
);,"});,"})
;,"});,"})
function App() {}"});,"})
  return (;,"});,"})
    <Router>;,"});,"})
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;,"});,"})
        <AppHeader />;,"});,"})
        <main className="flex-1">;,"});,"})
          <Suspense fallback={<LoadingSpinner />}>;,"});,"})
            <Routes>;,"});,"})
              <Route path="/" element={<Home />} />;,"});,"})
              <Route path="/about" element={<About />} />;,"});,"})
              <Route path="/contact" element={<Contact />} />;,"});,"})
              <Route path="/blog" element={<BlogPage />} />;,"});,"})
              <Route path="/partners" element={<PartnersPage />} />;,"});,"})
              <Route path="/login" element={<Login />} />;,"});,"})
              <Route path="/faq" element={<FAQ />} />;,"});,"})
              <Route path="/careers" element={<Careers />} />;,"});,"})
              <Route path="/sitemap" element={<Sitemap />} />;,"});,"})
              <Route path="/pricing" element={<ComprehensivePricing />} />;,"});,"})
              {/* Services routes */}"});,"})
              <Route path="/services" element={<ServicesPage />} />;,"});,"})
              {/* Catch-all route for 404 */}"});,"})
              <Route;,"});,"})
                path="*"""";,"});,"})
                element={}"});,"})
                  <div className="flex items-center justify-center min-h-screen">;,"});,"})
                    <div className="text-center">;,"});,"})
                      <h1 className="text-4xl font-bold text-zion-cyan mb-4">;,"});,"})
                        404 - Page Not Found;,"});,"})
                      </h1>;,"});,"})
                      <p className="text-zion-slate-light mb-6">;,"});,"})
                        The page you're looking for doesn't exist.;,"});,"})
                      </p>;,"});,"})
                      <a;,"});,"})
                        href="/"""";,"});,"})
                        className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"""";,"});,"})
                      >;,"});,"})
                        Go Home;,"});,"})
                      </a>;,"});,"})
                    </div>;,"});,"})
                  </div>;,"});,"});
}"});,"})
              />;,"});,"})
            </Routes>;,"});,"})
          </Suspense>;,"});,"})
        </main>;,"});,"})
        <Footer />;,"});,"})
        <ChatAssistant />;,"});,"})
      </div>;,"});,"})
    </Router>;,"});,"})
  );,"});,"});
}"});,"})
;,"});,"})
export default App;,"});,"})
;,"});,"})
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };,"});,"})
;,"});,"})
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };,"});,"})
;,"});,"})
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };,"});,"})
;,"});,"})
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };,"});,"})
;,"});,"})
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };,"});,"})
import React, {Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AppHeader } from './layout/AppHeader.jsx';
import {Footer } from './components/Footer.jsx';
import {ChatAssistant } from './components/ChatAssistant.tsx';

// Home and main pages'
// Home and main pages
import React, { Suspense, lazy } from 'react';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
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
import React, { Suspense, lazy } from 'react';""
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';""
import { AppHeader } from './layout/AppHeader.jsx';""
import { Footer } from './components/Footer.jsx';""
import React, { Suspense, lazy } from 'react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom
import { AppHeader } from './layout/AppHeader.jsx
import { Footer } from './components/Footer.jsx
import { ChatAssistant } from './components/ChatAssistant.tsx';
(');
// Home and main pages';
('');
// Home and main pages';'
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));

// Home and main pages""
const Home = lazy(() => import('./pages/Home.tsx'));""
const About = lazy(() => import('./pages/About.tsx'));""
const Contact = lazy(() => import('./pages/Contact.tsx'));""
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));""
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));""
const Login = lazy(() => import('./pages/Login.tsx'));""
const FAQ = lazy(() => import('./pages/FAQ.tsx'));""
const Careers = lazy(() => import('./pages/Careers.tsx'));""
// Home and main pages"
const Home = lazy(() => import('./pages/Home.tsx'));"
const About = lazy(() => import('./pages/About.tsx'));"
const Contact = lazy(() => import('./pages/Contact.tsx'));"
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));"
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));"
const Login = lazy(() => import('./pages/Login.tsx'));"
const FAQ = lazy(() => import('./pages/FAQ.tsx'));"
const Careers = lazy(() => import('./pages/Careers.tsx'));"
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));
// Services pages;
const ComprehensivePricing = lazy(() =>
  import('./pages/ComprehensivePricing2025.tsx'))
const ComprehensivePricing = lazy(() =>;
  import('./pages/ComprehensivePricing2025.tsx'));
// Loading component;
const LoadingSpinner = () => (;
  <div className='flex items-center justify-center min-h-screen'>;
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></div>;
  </div>;
);
// Simple Services page component;
const ServicesPage = () => (;
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'>;
    <div className='container mx-auto px-4 py-16'>;
      <div className='text-center mb-16'>;
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>;
          Our;
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>;
            {' '}
            Services;
          </span>;
        </h1>;
        <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
          Comprehensive technology solutions to drive your business forward;
        </p>;
      </div>;
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>;
          <h3 className='text-xl font-bold text-white mb-4'>;
            AI & Machine Learning;
          </h3>;
          <p className='text-gray-300'>;
            Cutting-edge artificial intelligence solutions for business;
            automation and insights.;
          </p>;
        </div>;
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>;
          <h3 className='text-xl font-bold text-white mb-4'>Cybersecurity</h3>;
          <p className='text-gray-300'>;
            Advanced security solutions with zero-trust architecture and threat;
            detection.;
          </p>;
        </div>;
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>;
          <h3 className='text-xl font-bold text-white mb-4'>Cloud & DevOps</h3>;
          <p className='text-gray-300'>;
            Scalable cloud infrastructure and automated deployment solutions.;
          </p>;
        </div>;
      </div>;
    </div>;
  </div>;
);
function App() {}
  return (;
    <Router>;
      <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>;
        <AppHeader />;
        <main className='flex-1'>;
          <Suspense fallback={<LoadingSpinner />}>;
            <Routes>;
              <Route path='/' element={<Home />} />;
              <Route path='/about' element={<About />} />;
              <Route path='/contact' element={<Contact />} />;
              <Route path='/blog' element={<BlogPage />} />;
              <Route path='/partners' element={<PartnersPage />} />;
              <Route path='/login' element={<Login />} />;
              <Route path='/faq' element={<FAQ />} />;
              <Route path='/careers' element={<Careers />} />;
              <Route path='/sitemap' element={<Sitemap />} />;
              <Route path='/pricing' element={<ComprehensivePricing />} />{/* Services routes */}
              <Route path='/services' element={<ServicesPage />} />{/* Catch-all route for 404 */}
              <Route;
                path='*'';
                element={}
                  <div className='flex items-center justify-center min-h-screen'>;
                    <div className='text-center'>;
                      <h1 className='text-4xl font-bold text-zion-cyan mb-4'>;
                        404 - Page Not Found;
                      </h1>;
                      <p className='text-zion-slate-light mb-6'>;
                        The page you're looking for doesn't exist.;
                      </p>;
                      <a;
                        href='/'';
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors''">;
                        Go Home;
                      </a>;
                    </div>;
                  </div>;
                }
              />;
            </Routes>;
          </Suspense>;
        </main>;
        <Footer />;
        <ChatAssistant />;
      </div>;
    </Router>;
  )}
// Services pages
const ComprehensivePricing = lazy(() =>'
  import('./pages/ComprehensivePricing2025.tsx');
);
// Loading component
const LoadingSpinner = () => ('
  <div className='flex items-center justify-center min-h-screen>
const ComprehensivePricing = lazy(() =>""
  import('./pages/ComprehensivePricing2025.tsx')
);
// Loading component
const LoadingSpinner = () => (""
  <div className='flex items-center justify-center min-h-screen'>""
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></div>
  </div>
)
);
// Simple Services page component
const ServicesPage = () => ('
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24>
    <div className='container mx-auto px-4 py-16>
      <div className='text-center mb-16>
        <h1 className='text-4xl md:text-6xl font-bold mb-6>
const ServicesPage = () => (""
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'>""
    <div className='container mx-auto px-4 py-16'>""
      <div className='text-center mb-16'>""
        <h1 className='text-4xl md: text-6xl font-bold mb-6'>""
          Our{' '}""
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
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'>
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl md: text-6xl font-bold mb-6'>
          Our{' '}
          Our
const ServicesPage = () => ("
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24'>"
    <div className='container mx-auto px-4 py-16'>"
      <div className='text-center mb-16'>"
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>'
          Our{ }'
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
            Services
          </span>
        </h1>'
        <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>'
      <div className='grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8>
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20>
          <h3 className='text-xl font-bold text-white mb-4'>
            AI & Machine Learning
          </h3>'
        </h1>""
        <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>
      <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>
      </div>""
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>""
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>""
          <h3 className='text-xl font-bold text-white mb-4'>
            AI & Machine Learning
          </h3>""
          <p className='text-gray-300'>
            Cutting-edge artificial intelligence solutions for business
            automation and insights.
          </p>
        </div>'
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20>
          <h3 className='text-xl font-bold text-white mb-4'>Cybersecurity</h3>'
        </div>""
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>""
          <h3 className='text-xl font-bold text-white mb-4'>Cybersecurity</h3>""
          <p className='text-gray-300'>
            Advanced security solutions with zero-trust architecture and threat
            detection.
          </p>
        </div>'
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20>
          <h3 className='text-xl font-bold text-white mb-4'>Cloud & DevOps</h3>'
        </div>""
        <div className='bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20'>""
          <h3 className='text-xl font-bold text-white mb-4'>Cloud & DevOps</h3>""
          <p className='text-gray-300'>
            Scalable cloud infrastructure and automated deployment solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {return (
function App() {
  return (
    <Router>'
      <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>
    <Router>
      <div className=&apos;min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light&apos;>&apos;'
        <AppHeader />
        <main className=&apos;flex-1&apos;>&apos;'
          <Suspense fallback={}<LoadingSpinner />}>
    <Router>""
      <div className='min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>
        <AppHeader /" >"
        <main className='flex-1'>
          <Suspense fallback={<LoadingSpinner /" >}>"
            <Routes>""
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>'
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/partners' element={<PartnersPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/sitemap' element={<Sitemap />} />
              <Route path='/pricing' element={<ComprehensivePricing />} />
              {/* Services routes */}
              <Route path='/services' element={<ServicesPage />} />
              {/* Catch-all route for 404 */}
              <Route'
                path='*'
                element={'
                  <div className='flex items-center justify-center min-h-screen>
                    <div className='text-center>
                      <h1 className='text-4xl font-bold text-zion-cyan mb-4'>
                        404 - Page Not Found
                      </h1>'
                      <p className='text-zion-slate-light mb-6>
                        The page you're looking for doesn't exist.
                      </p>
                      <a'
                        href='/''
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors'
                      >
              <Route path='*' element={<div className='flex items-center justify-center min-h-screen'>
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
                path=&apos;*'&apos;&apos;
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
                        href=&apos;/'&apos;&apos;
                        className=&apos;bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors&apos;&apos;'&quot;>
                        Go Home&quot;&apos;
                path='*'''';'
                element={}
                  <div className='flex items-center justify-center min-h-screen'>
                    <div className='text-center'>
                      <h1 className='text-4xl font-bold text-zion-cyan mb-4'>
                        404 - Page Not Found
                      </h1>
                      <p className='text-zion-slate-light mb-6'>
                        The page you&apos;re looking for doesn&apos;t exist.
                      </p>
                      <a href='/' className='bg-zion-purple text-white px-6 py-3 rounded-lg hover: bg-zion-purple-dark transition-colors' >
                      <a
                        href='/'''';'
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover: bg-zion-purple-dark transition-colors'''">"
          <Suspense fallback={<LoadingSpinner /" >}>
            <Routes>"
              <Route path='/' element={<Home /" >} />"
              <Route path='/about' element={<About /" >} />"
              <Route path='/contact' element={<Contact /" >} />"
              <Route path='/blog' element={<BlogPage /" >} />"
              <Route path='/partners' element={<PartnersPage /" >} />"
              <Route path='/login' element={<Login /" >} />"
              <Route path='/faq' element={<FAQ /" >} />"
              <Route path='/careers' element={<Careers /" >} />"
              <Route path='/sitemap' element={<Sitemap /" >} />"
              <Route path='/pricing' element={<ComprehensivePricing /" >} />"
              {/* Services routes */}""
              <Route path='/services' element={<ServicesPage /" >} />"
              {/* Catch-all route for 404 */}
              <Route""
                path='*'
                element={""
                  <div className='flex items-center justify-center min-h-screen'>""
                    <div className='text-center'>""
                      <h1 className='text-4xl font-bold text-zion-cyan mb-4'>
                        404 - Page Not Found
                      </h1>""
                      <p className='text-zion-slate-light mb-6'>""
                        The page you&apos;re looking for doesn&apos;t exist.
                      </p>
                      <a ""
                        href='/'
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover: bg-zion-purple-dark transition-colors'" >"
                        className='bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors  >
                        Go Home
                      </a>
                    </div>
                  </div>}
              />
            </Routes>
          </Suspense>
        </main>
        <Footer /" >"
        <ChatAssistant /" >"
        <Footer /' >
        <ChatAssistant /" >
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
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };
;
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App };
export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }

export { Home, About, Contact, BlogPage, PartnersPage, Login, FAQ, Careers, Sitemap, ComprehensivePricing, LoadingSpinner, ServicesPage, App }
""
