<<<<<<< HEAD

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

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      title: 'Micro SaaS Products';
      description: 'Innovative, focused software solutions for modern businesses',
      icon: Code;
      features: ['AI-Powered Video Clip Maker', 'Smart Contract Analyzer', 'Cybersecurity Threat Intelligence', 'Multi-Language Website Translator'],
      href: '/micro-saas';
      color: 'blue'
    },
    {
      title: 'AI Services';
      description: 'Advanced artificial intelligence solutions and automation';
      icon: Cpu;
      features: ['Autonomous AI Agents', 'AI-Powered Financial Trading', 'AI Legal Document Analysis', 'AI-Powered Voice Analytics'],
      href: '/ai-services';
      color: 'purple'
    },
    {
      title: 'IT & Cloud Services';
      description: 'Comprehensive IT solutions and cloud infrastructure';
      icon: Cloud;
      features: ['Quantum Computing Consulting', 'Blockchain & Web3 Solutions', 'DevSecOps & Security Automation', 'Enterprise Data Platform'],
      href: '/it-services';
      color: 'green'
    },
    {
      title: 'Cybersecurity';
      description: 'Advanced security solutions and threat protection';
      icon: Shield;
      features: ['Threat Intelligence', 'Security Audits', 'Penetration Testing', 'Compliance Management'],
      href: '/cybersecurity';
      color: 'red'
    },
    {
      title: 'Performance Optimization';
      description: 'Speed and efficiency improvements for your applications';
      icon: Zap;
      features: ['Performance Audits', 'Code Optimization', 'Database Tuning', 'Caching Strategies'],
      href: '/performance';
      color: 'yellow'
    },
    {
      title: 'Enterprise Solutions';
      description: 'Comprehensive business technology solutions';
      icon: Building;
      features: ['Custom Software Development', 'System Integration', 'Digital Transformation', 'Process Automation'],
      href: '/enterprise';
      color: 'indigo'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson';
      company: 'TechCorp Inc.';
      content: 'Zion Tech Group transformed our business with their AI-powered solutions. The results exceeded our expectations.';
      rating: 5
    },
    {
      name: 'Michael Chen';
      company: 'StartupXYZ';
      content: 'Their micro SaaS products helped us scale rapidly. The team is professional and innovative.';
      rating: 5
    },
    {
      name: 'Emily Rodriguez';
      company: 'Enterprise Solutions Ltd.';
      content: 'Outstanding IT services and cloud solutions. They delivered on time and within budget.';
      rating: 5
    }
  ];

  const stats = null;
    { label: 'Happy Clients', value: '500+', icon: Users }
  ];

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading Zion Tech Group..." />;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
=======
import React from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ServiceCard from './src/components/ServiceCard';
import TestimonialCarousel from './src/components/TestimonialCarousel';
import ContactSection from './src/components/ContactSection';
import BenefitsSection from './src/components/BenefitsSection';
import HowItWorksSection from './src/components/HowItWorksSection';
import FaqSection from './src/components/FaqSection';
import ChatAssistant from './src/components/ChatAssistant';
import ScrollToTop from './src/components/ScrollToTop';
import ParticleBackground from './src/components/ParticleBackground';



function App() {
>>>>>>> origin/main

  return (
<<<<<<< HEAD

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

=======
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="relative">
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with innovative solutions
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

      </main>
    </div>
>>>>>>> origin/main
  );
}
ursor/automate-test-improve-and-merge-code-a45b

function App() {
  return (
    <div className="min-h-screen bg-gray-50">"
</div>"
      <h1 className="text-4xl font-bold text-center py-20">"
</h1>
      </h1>"
      <p className="text-center text-gray-600">"
</p>
    </div>
    <main>
</main>
      <h1>Hello App</h1>

    </main>"
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">"
      <ParticleBackground />

      <Header />

"
      <main className="relative">"
        <section className="relative py-20 px-4 text-center">"
</section>"
          <div className="container mx-auto max-w-6xl">"
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">"
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">"
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">"
</button>
              </button>"
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">"
        <section className="py-16 px-4 bg-white">"
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                <ServiceCard;
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />

        </section>
        <BenefitsSection />

        <HowItWorksSection />
        <section className="py-16 px-4 bg-gray-50">"
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>"
            <TestimonialCarousel />

        <FaqSection />

        <ContactSection />


      <Footer />

      <ChatAssistant />

      <ScrollToTop />

    </div>)"
pr-12325


export default App;

