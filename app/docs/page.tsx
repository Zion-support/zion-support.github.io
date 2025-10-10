'use client';
import React, { useState } from 'react';
import { Search BookOpen Code FileText Download ArrowRight ChevronRight Globe Brain Cloud Shield Settings Users Database Zap Eye Sparkles } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const docCategories = [
      title: 'Getting Started',
      icon: 'rocket',
      description: 'Quick start guides and basic setup instructions',
      docs: [
;
export default function DocsPage() {;
  const [searchQuery, setSearchQuery] = useState('');
;
  const docCategories = [;
      title: 'Getting Started',;
      icon: 'rocket',;
      description: 'Quick start guides and basic setup instructions',;
      docs: [;}
      ];
      title: 'API Reference',;
      icon: 'code',;
      description: 'Complete API documentation and endpoints',;
      docs: [;}
      ];
      title: 'AI Solutions',;
      icon: 'brain',;
      description: 'AI and machine learning documentation',;
      docs: [;}
      ];
      title: 'Cloud Services',;
      icon: 'cloud',;
      description: 'Cloud infrastructure and services',;
      docs: [;}
      ];
  ];
  const popularDocs = [
  ];
  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer;
        title="Documentation - Zion Tech Group"
        description="Complete documentation for Zion Tech Group's AI and IT solutions. Find guides, tutorials, API references, and best practices."
        keywords="documentation, API docs, guides, tutorials, AI solutions, cloud services, technical documentation"
      />
      <Navigation />
;
  const popularDocs = [;
  ];
;
  const filteredDocs = docCategories.map(category => ({;
    ...category,;
    docs: category.docs.filter(doc =>;
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    );}
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
      <SEOOptimizer;
        title="Documentation - Zion Tech Group";
        description="Complete documentation for Zion Tech Group's AI and IT solutions. Find guides, tutorials, API references, and best practices.";
        keywords="documentation, API docs, guides, tutorials, AI solutions, cloud services, technical documentation";
      />;
      <Navigation />;
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>;
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-6, border borde, r-whit, e/10, hover:borde, r-purpl, e-50, 0/50, transition-all, duration-300, group"></di, v>;
                <div className="flex items-center gap-3 mb-4"></div>;
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>;
                    <BookOpen className="w-5 h-5 text-white" />;
                  <span, className="tex, t-purpl, e-400, text-sm, font-mediu, m">{do, c.categor, y}</spa, n>;
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">;</h3>
                <p, className="tex, t-gra, y-300, text-sm, mb-4">{do, c.descriptio, n}</p>;
                <a;
                  hre, f={do, c.lin, k}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm">
                  Read More</a>
                  <ArrowRight className="w-4 h-4" />
            ))}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, border borde, r-whit, e/1, 0"></di, v>
                <div className="flex items-center gap-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <BookOpen className="w-6 h-6 text-white" />
                  <div></div>
                    <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{categor, y.titl, e}</h, 3>
                    <p, className="tex, t-gra, y-30, 0">{categor, y.descriptio, n}</p>
                <div className="space-y-4"></div>
                    <a;
                      ke, y={docInde, x}
                      hre, f={do, c.lin, k}
                      className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between"></div>
                        <div></div>
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm";</h4>
                  Read More;</h4>
                  <ArrowRight className="w-4 h-4" />;
            ))}
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>;
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, border borde, r-whit, e/1, 0"></di, v>;
                <div className="flex items-center gap-4 mb-6"></div>;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>;
                    <BookOpen className="w-6 h-6 text-white" />;
                  <div></div>;
                    <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{categor, y.titl, e}</h, 3>;
                    <p, className="tex, t-gra, y-30, 0">{categor, y.descriptio, n}</p>;
                <div className="space-y-4"></div>;
                    <a;}
                      ke, y={docInde, x}
                      hre, f={do, c.lin, k}
                      className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group";
                      <div className="flex items-center justify-between"></div>;
                        <div></div>;
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">;</h4>
                          <p, className="tex, t-gra, y-300, text-s, m">{do, c.descriptio, n}</p>;
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />;
                  ))}
            ))}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Need Help?
          <p className="text-xl text-purple-100 mb-8"></p>
            Can't find what you're looking for? Our support team is here to help.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"></button>
              Contact Support;
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"></button>
              Join Community;
      <Footer />
  );
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section>;
        <div className="max-w-4xl mx-auto text-center"></div>;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;</h2>
            Need Help?;
          <p className="text-xl text-purple-100 mb-8">;</p>
            Can't find what you're looking for? Our support team is here to help.;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">;</button>
              Contact Support;
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">;</button>
              Join Community;
      <Footer />;
  );
;
