import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowRight, AlertTriangle } from 'lucide-react';
const NotFound = () => {
    const popularPages = [
        { path: '/', label: 'Home', description: 'Main landing page' },
        { path: '/services', label: 'Services', description: 'All our services' },
        { path: '/about', label: 'About Us', description: 'Learn about Zion Tech Group' },
        { path: '/contact', label: 'Contact', description: 'Get in touch with us' },
        { path: '/blog', label: 'Blog', description: 'Latest insights and news' },
        { path: '/careers', label: 'Careers', description: 'Join our team' }
    ];
    const servicePages = [
        { path: '/services/ai', label: 'AI Services', description: 'Artificial Intelligence solutions' },
        { path: '/services/cloud', label: 'Cloud Services', description: 'Cloud infrastructure and DevOps' },
        { path: '/services/cybersecurity', label: 'Cybersecurity', description: 'Security and protection' },
        { path: '/services/infrastructure', label: 'IT Infrastructure', description: 'Enterprise IT solutions' }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {/* 404 Icon */}
        <motion.div className="mb-8" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 text-white"/>
          </div>
        </motion.div>

        {/* Main Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let us help you find what you need.
        </p>
      </div>
    </div>
  )}