import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Main Navigation Component
const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-cyan-400">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-cyan-400 transition-colors ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-400">Leading technology solutions provider</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/services/ai-business-intelligence" className="hover:text-cyan-400">AI Business Intelligence</Link></li>
            <li><Link to="/services/cybersecurity" className="hover:text-cyan-400">Cybersecurity</Link></li>
            <li><Link to="/services/cloud-devops" className="hover:text-cyan-400">Cloud & DevOps</Link></li>
            <li><Link to="/services/quantum-computing" className="hover:text-cyan-400">Quantum Computing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/solutions/enterprise" className="hover:text-cyan-400">Enterprise Solutions</Link></li>
            <li><Link to="/solutions/healthcare" className="hover:text-cyan-400">Healthcare</Link></li>
            <li><Link to="/solutions/financial" className="hover:text-cyan-400">Financial Services</Link></li>
            <li><Link to="/solutions/manufacturing" className="hover:text-cyan-400">Manufacturing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-cyan-400">Careers</Link></li>
            <li><Link to="/press" className="hover:text-cyan-400">Press</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Page Components
const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Zion Tech Group</h1>
        <p className="text-xl mb-8">Leading AI & Technology Solutions Provider</p>
        <Link to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Explore Our Services
        </Link>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-600">Advanced artificial intelligence and machine learning solutions</p>
            <Link to="/ai-services" className="text-blue-600 hover:underline">Learn more →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">IT Services</h3>
            <p className="text-gray-600">Comprehensive IT infrastructure and support services</p>
            <Link to="/it-services" className="text-blue-600 hover:underline">Learn more →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Micro SaaS</h3>
            <p className="text-gray-600">Specialized software-as-a-service solutions</p>
            <Link to="/micro-saas" className="text-blue-600 hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
          { title: 'Cybersecurity Suite', path: '/services/cybersecurity' },
          { title: 'Cloud & DevOps', path: '/services/cloud-devops' },
          { title: 'Quantum Computing', path: '/services/quantum-computing' },
          { title: 'Digital Transformation', path: '/services/digital-transformation' },
          { title: 'Data Analytics', path: '/services/data-analytics' },
        ].map((service) => (
          <div key={service.path} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">Comprehensive solutions for modern businesses</p>
            <Link to={service.path} className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">About Zion Tech Group</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Zion Tech Group is a leading technology solutions provider specializing in AI, cybersecurity, 
          cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge 
          technology to drive innovation and growth.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our team of experts combines deep technical knowledge with industry expertise to deliver 
          customized solutions that meet the unique needs of each client.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ServiceDetailPage = ({ title, description }: { title: string; description: string }) => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced technology implementation</li>
            <li>Expert consultation and support</li>
            <li>Customized solutions for your business</li>
            <li>24/7 monitoring and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* AI Services */}
          <Route path="/ai-services" element={<ServiceDetailPage title="AI Services" description="Comprehensive artificial intelligence solutions for modern businesses." />} />
          
          {/* IT Services */}
          <Route path="/it-services" element={<ServiceDetailPage title="IT Services" description="Complete IT infrastructure and support services." />} />
          
          {/* Micro SaaS */}
          <Route path="/micro-saas" element={<ServiceDetailPage title="Micro SaaS" description="Specialized software-as-a-service solutions." />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/ai-business-intelligence" element={<ServiceDetailPage title="AI Business Intelligence" description="Advanced AI-powered business intelligence and analytics solutions." />} />
          <Route path="/services/cybersecurity" element={<ServiceDetailPage title="Cybersecurity" description="Comprehensive cybersecurity solutions to protect your business." />} />
          <Route path="/services/cloud-devops" element={<ServiceDetailPage title="Cloud & DevOps" description="Cloud infrastructure and DevOps automation services." />} />
          <Route path="/services/quantum-computing" element={<ServiceDetailPage title="Quantum Computing" description="Next-generation quantum computing solutions." />} />
          <Route path="/services/digital-transformation" element={<ServiceDetailPage title="Digital Transformation" description="Complete digital transformation services." />} />
          <Route path="/services/data-analytics" element={<ServiceDetailPage title="Data Analytics" description="Advanced data analytics and insights." />} />
          
          {/* Solution Pages */}
          <Route path="/solutions/enterprise" element={<ServiceDetailPage title="Enterprise Solutions" description="Comprehensive enterprise technology solutions." />} />
          <Route path="/solutions/healthcare" element={<ServiceDetailPage title="Healthcare Solutions" description="Specialized healthcare technology solutions." />} />
          <Route path="/solutions/financial" element={<ServiceDetailPage title="Financial Solutions" description="Financial services technology solutions." />} />
          <Route path="/solutions/manufacturing" element={<ServiceDetailPage title="Manufacturing Solutions" description="Advanced manufacturing technology solutions." />} />
          
          {/* Additional Pages */}
          <Route path="/blog" element={<ServiceDetailPage title="Blog" description="Latest insights and updates from Zion Tech Group." />} />
          <Route path="/case-studies" element={<ServiceDetailPage title="Case Studies" description="Success stories from our clients." />} />
          <Route path="/pricing" element={<ServiceDetailPage title="Pricing" description="Transparent pricing for all our services." />} />
          <Route path="/careers" element={<ServiceDetailPage title="Careers" description="Join our team of technology experts." />} />
          <Route path="/press" element={<ServiceDetailPage title="Press" description="Press releases and media coverage." />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
