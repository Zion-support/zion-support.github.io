<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { JSX } from 'react';
<<<<<<< HEAD

import React, { JSX } from 'react';
export default function App(): JSX.Element {
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { JSX } from 'react';
=======
import React from 'react';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react';
import Header from './src/components/Header';
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorBoundary from './src/components/ErrorBoundary';

<<<<<<< HEAD
export default function App(): JSX.Element {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻',
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
    },
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function App(): JSX.Element {
=======
<<<<<<< HEAD
export default function App(): React.JSX.Element {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
=======
// Import existing pages
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Services from './src/pages/Services';
import FAQ from './src/pages/FAQ';
import Careers from './src/pages/Careers';
import Privacy from './src/pages/Privacy';
import Terms from './src/pages/Terms';
import Cookies from './src/pages/Cookies';
import Pricing from './src/pages/Pricing';
import RequestQuote from './src/pages/RequestQuote';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import News from './src/pages/News';
import Help from './src/pages/Help';
import ComprehensivePricing from './src/pages/ComprehensivePricing';
import AIServices from './src/pages/AIServices';
import ITServices from './src/pages/ITServices';
import RevolutionaryServicesPage from './src/pages/RevolutionaryServicesPage';
import NewServicesShowcase2025 from './src/pages/NewServicesShowcase2025';
import EnhancedNewServices2025 from './src/pages/EnhancedNewServices2025';
import Sitemap from './src/pages/Sitemap';
import ComprehensiveSitemap from './src/pages/ComprehensiveSitemap';
import Support from './src/pages/Support';
import Training from './src/pages/Training';
import Helpdesk from './src/pages/Helpdesk';
import WhitePapers from './src/pages/WhitePapers';
import NotFound from './src/pages/NotFound';

// Lazy load pages for better performance
const SolutionsPage = lazy(() => import('./src/pages/Solutions').then(module => ({ default: module.default })));
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

function App() {
  return (
<<<<<<< HEAD
    <main>
      <h1>Hello App</h1>
    </main>
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
=======

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
  return (
=======

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ParticleBackground />
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for AI and IT solutions. We help businesses transform through
              cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
      <ChatAssistant />
      <ScrollToTop />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf89
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  );
}
<<<<<<< HEAD
=======

export default function App() {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

<<<<<<< HEAD
export default function App(): React.JSX.Element {
=======
<<<<<<< HEAD
=======
import React from 'react';

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
export default function App(): React.JSX.Element {
=======
export default function App(): JSX.Element {
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <main>
      <h1>Zion Tech Group - AI, Micro SaaS & IT Services</h1>
      <p>Building the future with innovative technology solutions</p>
    </main>
<<<<<<< HEAD
<<<<<<< HEAD
  )}
=======
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import HomePage from './src/pages/Home';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<Help />} />
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/ai-solutions" element={<AIServices />} />
                <Route path="/solutions/enterprise" element={<SolutionsPage />} />
                <Route path="/solutions/healthcare" element={<SolutionsPage />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Tech Group</h1>
        <p>Welcome to our application</p>
      </header>
    </div>
  );
}

export default App;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center py-20">
        Zion Tech Group
      </h1>
      <p className="text-center text-gray-600">
        This is a Next.js application. Please navigate to the appropriate pages using the Next.js routing system.
      </p>
    </div>
  );
}

export default App;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
