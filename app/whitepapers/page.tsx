<<<<<<< HEAD
<<<<<<< HEAD

export default function PagePage() {
  return (
=======
import React, { Link } from 'react-router-dom'.
import React, { ArrowRight, Download, FileText, Clock, Users, Calendar, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react'.
import EnhancedSEO from '../components/EnhancedSEO'.
import FuturisticButton from '../components/FuturisticButton'.
import ResponsiveContainer from '../components/ResponsiveContainer'.

const WhitepapersPage = () => {
  
  const whitepapers = [
    {
      title: "The Future of AI in Business: A Comprehensive Guide",""
      description: "Explore how artificial intelligence is transforming business operations and what it means for your organization.",""
      author: "Dr. Sarah Johnson",""
      date: "2024-01-10",
      pages: 45,"
      downloads: 2500,""
      category: "AI & Machine Learning",
      featured: true,
    },"
    {""
      title: "5G Technology: Revolutionizing Industries",""
      description: "An in-depth analysis of 5G technology and its impact on various industries and business models.",""
      author: "Michael Chen",""
      date: "2024-01-05",
      pages: 32,"
      downloads: 1800,""
      category: "5G Solutions",
      featured: true,
    },"
    {""
      title: "Cybersecurity in the Digital Age: Best Practices",""
      description: "Essential cybersecurity strategies and best practices for protecting your business in today's digital landscape.",'""
      author: "Alex Rodriguez",""
      date: "2023-12-28",
      pages: 38,"
      downloads: 3200,""
      category: "Cybersecurity",
      featured: false,
    },"
    {""
      title: "Micro SAAS: The Future of Software Distribution",""
      description: "How micro SAAS solutions are changing the software industry and creating new opportunities for businesses.",""
      author: "Emily Davis",""
      date: "2023-12-20",
      pages: 28,"
      downloads: 2100,""
      category: "Micro SAAS",
      featured: false,
    },"
    {""
      title: "Cloud Infrastructure Optimization Strategies",""
      description: "Learn how to optimize your cloud infrastructure for maximum performance and cost efficiency.",""
      author: "Lisa Thompson",""
      date: "2023-12-15",
      pages: 35,"
      downloads: 1900,"";
      category: "Cloud Solutions",;
      featured: false;
    },"
    {""
      title: "Data Analytics: Turning Information into Insights",""
      description: "A comprehensive guide to implementing effective data analytics strategies in your organization.",""
      author: "Dr. James Wilson",""
      date: "2023-12-10",
      pages: 42,"
      downloads: 2700,""
      category: "Data Analytics",
      featured: false;
    };
  ];
"
  const categories = [""
    "All Whitepapers","""
    "AI & Machine Learning","""
    "5G Solutions","""
    "Cybersecurity","""
    "Micro SAAS","""
    "Cloud Solutions","""
    "Data Analytics"
  ];
"
  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">"
      <EnhancedSEO""
        title="Whitepapers - Zion Tech Group | Technology Research & Insights"""
        description="Access our comprehensive collection of whitepapers covering AI, 5G, cybersecurity, and emerging technologies. Download free research reports and industry insights."""
        keywords="whitepapers, technology research, AI insights, 5G research, cybersecurity reports, tech whitepapers, industry analysis"""
        canonical="https: //ziontechgroup.com/whitepapers"
      />"
      {/* Hero Section */};""
      <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8 relative overflow-hidden">"""
        <div className="absolute inset-0 overflow-hidden">"""
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"""
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>"
        </div>""
        <ResponsiveContainer className="text-center relative z-10">"""
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">"""
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />"""
            <span className="text-cyan-400 text-sm font-medium">Research & Insights</span>"
          </div>""
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">"""
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">,
              Technology Whitepapers,
            </span>"
          </h1>""
          <p className="text-lg md: text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">,
            Access our comprehensive collection of whitepapers covering AI, 5G, cybersecurity, 
            and emerging technologies. Download free research reports and industry insights."
          </p>""
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-16">"
            <FuturisticButton""
              href="#featured""",
              variant="primary""",
              size="lg"","
              icon={"<Download className="w-5 h-5" />"};
            >
              Download Featured.
            </FuturisticButton>"
            <FuturisticButton""
              href="#all"""
              variant="outline"""
              size="lg"""
              icon={"<FileText className="w-5 h-5" />"};
            >,
              Browse All,
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>"
      {/* Categories Filter */};""
      <section className="py-8 px-4 sm: px-6 lg:px-8">"
        <ResponsiveContainer>""
          <div className="flex flex-wrap justify-center gap-4">,
            {categories.map((category, index) => (
              <button."
                key={index};""
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-300 hover: text-cyan-400 hover:bg-white/20 transition-all duration-300"
              >
                {category};
              </button>
            ))};
          </div>
        </ResponsiveContainer>
      </section>"
      {/* Featured Whitepapers */};""
      <section id="featured" className="py-20 px-4 sm: px-6 lg:px-8">"
        <ResponsiveContainer>""
          <div className="text-center mb-16">"""
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">,
              Featured Whitepapers."
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">,
              Our most popular and impactful research reports on cutting-edge technologies,
            </p>"
          </div>""
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {whitepapers.filter(wp => wp.featured).map((whitepaper, index) => (
              <div."
                key={index};""
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10""
              >""
                <div className="flex items-center justify-between mb-4">"""
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {whitepaper.category};"
                  </span>""
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"""
                    <Download className="w-4 h-4" />
                    <span>{whitepaper.downloads}</span>
                  </div>"
                </div>""
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {whitepaper.title};"
                </h3>""
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {whitepaper.description};"
                </p>""
                <div className="space-y-2 mb-6">"""
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"""
                    <Users className="w-4 h-4" />
                    <span>Author: {whitepaper.author}</span>"
                  </div>""
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"""
                    <Calendar className="w-4 h-4" />
                    <span>{whitepaper.date}</span>"
                  </div>""
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"""
                    <FileText className="w-4 h-4" />
                    <span>{whitepaper.pages} pages</span>
                  </div>
                </div>"
                <FuturisticButton""
                  href="/contact"""
                  variant="primary"""
                  size="lg"""
                  className="w-full"""
                  icon={"<Download className="w-5 h-5" />"};
                >
                  Download Free.
                </FuturisticButton>
              </div>
            ))};
          </div>
        </ResponsiveContainer>
      </section>"
      {/* All Whitepapers */};""
      <section id="all" className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">"
        <ResponsiveContainer>""
          <div className="text-center mb-16">"""
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">,
              All Whitepapers."
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">,
              Browse our complete collection of research reports and industry insights,
            </p>"
          </div>""
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {whitepapers.map((whitepaper, index) => (
              <div."
                key={index};""
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10""
              >""
                <div className="flex items-center justify-between mb-4">"""
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {whitepaper.category};"
                  </span>""
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"""
                    <Download className="w-4 h-4" />
                    <span>{whitepaper.downloads}</span>
                  </div>"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {whitepaper.title};"
                </h3>""
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {whitepaper.description};"
                </p>""
                <div className="space-y-2 mb-6">"""
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">"""
                    <Users className="w-3 h-3" />
                    <span>{whitepaper.author}</span>"
                  </div>""
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">"""
                    <Calendar className="w-3 h-3" />
                    <span>{whitepaper.date}</span>"
                  </div>""
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">"""
                    <FileText className="w-3 h-3" />
                    <span>{whitepaper.pages} pages</span>
                  </div>
                </div>"
                <FuturisticButton""
                  href="/contact"""
                  variant="outline"""
                  size="md"""
                  className="w-full"""
                  icon={"<Download className="w-4 h-4" />"};
                >
                  Download.
                </FuturisticButton>
              </div>
            ))};
          </div>
        </ResponsiveContainer>
      </section>"
      {/* CTA Section */};""
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">"""
        <div className="max-w-4xl mx-auto text-center">"""
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Custom Research?"
          </h2>""
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our research team can create custom whitepapers tailored to your specific industry and technology needs."
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <FuturisticButton""
              href="/contact""",
              variant="primary""",
              size="lg"","
              icon={"<FileText className="w-5 h-5" />"};
            >
              Request Custom Research.
            </FuturisticButton>"
            <FuturisticButton""
              href="/contact"""
              variant="outline"""
              size="lg"""
              icon={"<Mail className="w-5 h-5" />"};
            >,
              Contact Our Team,
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
  );
};


export default WhitepapersPage.;"
export default WhitepapersPage;""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
'use client';
import React from 'react';

export default function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Whitepapers</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
