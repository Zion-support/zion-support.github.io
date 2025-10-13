<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function whitepapers() {
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Download } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { Filter } from 'lucide-react';
import { Cloud } from 'lucide-react';

const WhitepapersPage = () => {
  const whitepapers = [
    {
      title: "The Future of AI in Business",
      description: "Comprehensive analysis of AI adoption trends and business impact",
      category: "Artificial Intelligence",
      pages: "24 pages",
      downloads: "5,200+",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Best Practices 2024",
      description: "Essential security strategies for modern businesses",
      category: "Cybersecurity",
      pages: "18 pages",
      downloads: "3,800+",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cloud Migration Guide",
      description: "Step-by-step guide to successful cloud transformation",
      category: "Cloud Technology",
      pages: "32 pages",
      downloads: "4,500+",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "5G Technology Impact",
      description: "How 5G will transform industries and business operations",
      category: "5G Technology",
      pages: "28 pages",
      downloads: "2,900+",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Micro SAAS Market Analysis",
      description: "Market trends and opportunities in micro SAAS solutions",
      category: "Business Strategy",
      pages: "20 pages",
      downloads: "3,200+",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Digital Transformation Roadmap",
      description: "Complete guide to digital transformation success",
      category: "Digital Transformation",
      pages: "35 pages",
      downloads: "6,100+",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Whitepapers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive whitepapers on AI, cybersecurity, cloud technology, and digital transformation. Get expert insights and industry analysis." />
        <meta name="keywords" content="whitepapers, industry reports, technology research, AI whitepapers, cybersecurity reports, cloud whitepapers" />
        <link rel="canonical" href="https://ziontechgroup.com/whitepapers" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Whitepapers</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Whitepapers - Zion Tech Group</title>
        <meta name="description" content="Advanced whitepapers solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Whitepapers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Whitepapers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
=======

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        </section>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Research</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Whitepapers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our comprehensive whitepapers and research reports. 
            Get expert insights on the latest technology trends and industry developments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Download All Whitepapers
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Request Custom Research
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Research & Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Download our comprehensive whitepapers and stay ahead of technology trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {whitepaper.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {whitepaper.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">{whitepaper.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {whitepaper.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{whitepaper.pages}</span>
                  <span>{whitepaper.downloads}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Custom Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our research team can create custom whitepapers and analysis reports 
            tailored to your specific industry and business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Request Custom Research
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Subscribe to Updates
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
};

export default WhitepapersPage;
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
}