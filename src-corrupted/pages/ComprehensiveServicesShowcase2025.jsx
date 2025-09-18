<<<<<<< HEAD
import React, {useState} from 'react';'''
import {motion} from 'framer-motion';
import {Sparkles, ArrowRight, CheckCircle, Phone, Mail, MapPin, TrendingUp, Play, Download, ExternalLink, Search} from 'lucide-react';
import {CUTTING_EDGE_SERVICES_2025} from "../data/enhanced-2025-cutting-edge-services.jsx";
import {SPECIALIZED_INDUSTRY_SOLUTIONS_2025} from "../data/specialized-industry-solutions-2025.jsx";
const ComprehensiveServicesShowcase2025 = (props: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const allServices = [...CUTTING_EDGE_SERVICES_2025, ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025];
    const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
    const industries = ['all', ...Array.from(new Set(SPECIALIZED_INDUSTRY_SOLUTIONS_2025.map(service => service.industry)))];
    // Filter services based on selection
    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesIndustry && matchesSearch});
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
  hidden: { y: 20,
  opacity: 0 

},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center""""
          >""""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">""""
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cutting-Edge;
              </span>"""
              <br  />""""
              <span className="text-white">AI & IT Services</span>"""
            </h1>""""
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary micro SAAS solutions that are;
              transforming industries through artificial intelligence, quantum;
              computing, and next-generation technology."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300""""
              >""""
                <Play className="w-5 h-5"  />
                Watch Demo;
              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300""""
              >""""
                <Download className="w-5 h-5"  />
                Download Brochure;
              </motion.button>
            </div>
          </motion.div>
=======

const ComprehensiveServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensiveServicesShowcase2025 | Zion Tech Group</title>
        <meta name="description" content="ComprehensiveServicesShowcase2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ComprehensiveServicesShowcase2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
