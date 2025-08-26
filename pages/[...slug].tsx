import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Phone, Mail, MapPin, Zap, Shield, Users } from 'lucide-react';

export default function GenericPage() {
  const { slug } = useParams();
  const slugParts = slug ? slug.split('/').filter(Boolean) : [];
  const path = '/' + slugParts.join('/');
  const title = slugParts.length === 0 ? 'Page' : slugParts.map(s => s.replace(/-/g, ' ')).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' / ');
  const canonical = `https://ziontechgroup.com${path.endsWith('/') ? path : path + '/'}`;

  const services = [
    {
      icon: <Zap className="w-6 h-6 text-zion-cyan" />,
      title: "Micro SaaS Solutions",
      description: "Tailored workflow solutions designed for your specific business needs"
    },
    {
      icon: <Shield className="w-6 h-6 text-zion-purple" />,
      title: "Applied AI Services",
      description: "AI assistants, RAG systems, and intelligent automation solutions"
    },
    {
      icon: <Users className="w-6 h-6 text-zion-blue" />,
      title: "Cloud & DevOps",
      description: "Comprehensive cloud infrastructure, DevOps, data, and cybersecurity services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-white text-xl font-bold hover:text-zion-cyan transition-colors">
              Zion Tech Group
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/services" className="text-white hover:text-zion-cyan transition-colors">Services</Link>
              <Link to="/solutions" className="text-white hover:text-zion-cyan transition-colors">Solutions</Link>
              <Link to="/about" className="text-white hover:text-zion-cyan transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <motion.nav 
          className="mb-8 flex items-center space-x-2 text-sm text-zion-slate-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-1 hover:text-zion-cyan transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <span className="text-zion-slate-light">/</span>
          <span className="text-white">{title}</span>
        </motion.nav>

        {/* Page Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            This page is under active development. If you were expecting specific information, please contact us and we will prioritize it.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.section 
          className="mb-16 p-8 rounded-2xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-zion-blue-dark/20 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-dark/60 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-zion-slate-light mb-4">
              Have questions about {title.toLowerCase()}? 
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.div
          className="text-center p-8 rounded-2xl bg-zion-blue-dark/20 border border-zion-blue-light/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <Phone className="w-5 h-5" />
              <a href="tel:+13024640950" className="hover:text-white">+1 (302) 464-0950</a>
            </div>
            <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center justify-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 px-6 py-3 bg-zion-blue-dark/40 hover:bg-zion-blue-dark/60 text-white font-medium rounded-xl border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}