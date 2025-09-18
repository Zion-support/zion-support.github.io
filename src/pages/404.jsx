import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Users, Brain, Shield, Zap } from 'lucide-react';
const NotFoundPage = () => {
    const popularServices = [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain, description: 'Transform your business with AI' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Zap, description: 'Scale your infrastructure' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', icon: Users, description: 'Enterprise-grade technology' }
    ];
    const quickLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Search },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Users }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let us help you find what you need.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (<Link key={link.name} to={link.path} className="group p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <link.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:text-cyan-300 transition-colors"/>
                <span className="text-white font-medium">{link.name}</span>
              </Link>))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (<Link key={service.name} to={service.path} className="group p-6 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 text-left">
                <service.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors"/>
                <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Link>))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            <ArrowLeft className="w-5 h-5 mr-2"/>
            Back to Home
          </Link>
        </div>

        {/* Help Section */}
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
          <p className="text-gray-300 mb-4">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
              Contact Support
            </Link>
            <Link to="/help" className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
              Help Center
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-gray-400">
          <p className="text-sm">
            Try searching for what you need or browse our{' '}
            <Link to="/services" className="text-cyan-400 hover:text-cyan-300 underline">
              services directory
            </Link>
          </p>
        </div>
      </div>
    </div>);
};
export default NotFoundPage;
