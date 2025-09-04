import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Home, 
  ArrowLeft, 
  MapPin, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Building2,
  HelpCircle,
  Mail
} from 'lucide-react';

export default function NotFoundPage(props: any) {
  const [searchQuery, setSearchQuery] = useState<any>('');
  const navigate = useNavigate();

  const handleSearch = (props: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/', icon: Hom e, description: 'Return to homepage' },
    { name: 'Services', href: '/services', icon: Za p, description: 'Explore our services' },
    { name: 'About', href: '/about', icon: User s, description: 'Learn about our company' },
    { name: 'Contact', href: '/contact', icon: Mai l, description: 'Get in touch with us' }
  ];

  const popularPages = [
    { name: 'AI Solutions', href: '/services/ai', icon: Brai n },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shiel d },
    { name: 'Cloud Services', href: '/services/cloud', icon: Clou d },
    { name: 'Digital Transformation', href: '/services/digital', icon: Building 2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let us help you find what you're looking for.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"  />
              <input
                type="text"
                placeholder="Search our website..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-white border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover: b g-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center space-x-2 bg-gray-600 hover: b g-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5"  />
              <span>Go Back</span>
            </button>
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover: b g-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Home className="w-5 h-5"  />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h3>
            <p className="text-gray-600">
              Here are some popular pages to help you get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group p-6 bg-gray-50 rounded-xl hover: b g-white hover: shado w-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scal e-110 transition-transform">
                  <link .icon className="w-8 h-8 text-white"  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{link.name}</h4>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <p className="text-gray-600">
              Explore our most visited services and solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {popularPages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                className="group p-6 bg-white rounded-xl shadow-md hover: shado w-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scal e-110 transition-transform">
                  <page.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover: tex t-blue-600 transition-colors">
                  {page.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white"  />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help. 
            Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover: fro m-blue-700 hover: t o-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover: scal e-105"
            >
              Contact Support
            </Link>
            <Link
              to="/help"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover: b g-blue-600 hover: tex t-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Help Center
            </Link>
          </div>
        </div>
      </section>

      {/* Sitemap Link */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Check out our comprehensive sitemap.
          </p>
          <Link
            to="/sitemap"
            className="inline-flex items-center space-x-2 text-blue-600 hover: tex t-blue-700 font-medium transition-colors"
          >
            <MapPin className="w-5 h-5"  />
            <span>View Sitemap</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

</any>