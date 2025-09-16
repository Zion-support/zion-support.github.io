<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, {useState} from 'react';'''

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

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
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;