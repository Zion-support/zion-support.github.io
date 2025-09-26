

import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { FileText, Download, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Brain, Cloud, Shield, Zap } from "lucide-react"
export const WhitePapers: React.FC = () => {
  const whitePapers = [;
    {;
      id: 1,title: 'AI-Powered Business Transformation: A Comprehensive Guide 2025',description: 'Explore how artificial intelligence is revolutionizing business operations, from automation to decision-making processes.',;
      category: 'AI & Business',author: 'Zion Tech Group Research Team',date: '2025-01-15',downloadCount: 1247,featured: true,icon: Brain,color: 'from-purple-500 to-pink-500'
    };
    {;
      id: 2,title: 'Quantum Computing in Enterprise: Practical Applications and ROI',description: 'A detailed analysis of quantum computing applications in enterprise environments and their measurable business impact.',category: 'Quantum Computing',author: 'Dr. Sarah Chen',date: '2024-12-20',downloadCount: 892,featured: true,icon: Zap,color: 'from-blue-500 to-cyan-500'
    };
    {;
      id: 3,title: 'Cybersecurity in the AI Era: Threats, Solutions, and Best Practices',;
      description: 'Comprehensive guide to protecting AI systems and data in an increasingly connected digital landscape.',category: 'Cybersecurity',author: 'Marcus Rodriguez',date: '2024-11-30',downloadCount: 1563,featured: true,icon: Shield,color: 'from-green-500 to-emerald-500'
    };
    {;
      id: 4,title: 'Cloud-Native Architecture: Building Scalable AI Applications',description: 'Best practices for designing and deploying AI applications in cloud environments for optimal performance and scalability.',category: 'Cloud & DevOps',author: 'Alex Thompson',date: '2024-10-25',downloadCount: 734,featured: false,icon: Cloud,color: 'from-blue-500 to-indigo-500'
    };
    {;
      id: 5,title: 'Data Analytics Revolution: From Insights to Actionable Intelligence',description: 'How modern data analytics platforms are transforming raw data into strategic business intelligence.',category: 'Data Analytics',author: 'Dr. Emily Watson',date: '2024-09-18',downloadCount: 1102,featured: false,icon: TrendingUp,color: 'from-orange-500 to-red-500'
    };
    {;
      id: 6,title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',description: 'Comprehensive overview of digital twin applications across industries and their implementation strategies.',category: 'Digital Twin',author: 'James Wilson',date: '2024-08-12',downloadCount: 645,featured: false,icon: Target,color: 'from-purple-500 to-violet-500'
    };
  ];
  const categories = [;
    { name: 'All', count: whitePapers.length, active: true };
    { name: 'AI & Business', count: whitePapers.filter(wp => wp.category === 'AI & Business').length, active: false };
    { name: 'Quantum Computing', count: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, active: false };
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, active: false };
    { name: 'Cloud & DevOps', count: whitePapers.filter(wp => wp.category === 'Cloud & DevOps').length, active: false };
    { name: 'Data Analytics', count: whitePapers.filter(wp => wp.category === 'Data Analytics').length, active: false };
    { name: 'Digital Twin', count: whitePapers.filter(wp => wp.category === 'Digital Twin').length, active: false };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, and emerging technologies."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">;
              <[^>]*/>
              Research & Insights;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              White Papers &;
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Research;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Deep dive into cutting-edge technology research, industry insights, and practical implementation guides. ;
              Our white papers provide comprehensive analysis and actionable strategies for modern businesses.;
            </[^>]*>
            ;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>{whitePapers.length} White Papers</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>Free Downloads</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>Updated Monthly</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        {/* Background Elements */};
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Categories Filter */};
      <section className="py-12 border-b border-slate-700/50">;
        <div className="container-responsive">;
          <div className="flex flex-wrap justify-center gap-3">;
            {categories.map((category) => (;
              <button;
                key={category.name};
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${;
                  category.active
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                    : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                }`};
              >;
                {category.name};
                <span className="ml-2 text-sm opacity-75">({category.count})</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured White Papers */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</[^>]*>
            <p className="text-gray-400">Our most popular and impactful white papers</[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {whitePapers.filter(wp => wp.featured).map((paper) => (;
              <motion.div
                key={paper.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} mb-4`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <div className="mb-4">;
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full mb-3">;
                    {paper.category};
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">;
                    {paper.title};
                  </[^>]*>
                  <p className="text-gray-400 text-sm leading-relaxed">;
                    {paper.description};
                  </[^>]*>
                </[^>]*>
                ;
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">;
                  <span>{paper.author}</[^>]*>
                  <span>{new Date(paper.date).toLocaleDateString()}</[^>]*>
                </[^>]*>
                ;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-2 text-sm text-gray-400">;
                    <[^>]*/>
                    <span>{paper.downloadCount.toLocaleString()}</[^>]*>
                  </[^>]*>
                  ;
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">;
                    Download;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* All White Papers */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">All Research Papers</[^>]*>
            <p className="text-gray-400">Complete collection of our research and insights</[^>]*>
          </[^>]*>
          ;
          <div className="space-y-6">;
            {whitePapers.map((paper) => (;
              <motion.div
                key={paper.id};
                initial={{ opacity: 0, x: -20 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">;
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>;
                    <[^>]*/>
                  </[^>]*>
                  ;
                  <div className="flex-1 min-w-0">;
                    <div className="flex flex-wrap items-center gap-3 mb-3">;
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">;
                        {paper.category};
                      </[^>]*>
                      {paper.featured && (;&& (; (
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30">;
                          Featured;
                        </[^>]*>
                      )};
                    </[^>]*>
                    ;
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                      {paper.title};
                    </[^>]*>
                    ;
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">;
                      {paper.description};
                    </[^>]*>
                    ;
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">;
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {paper.author};
                      </[^>]*>
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {new Date(paper.date).toLocaleDateString()};
                      </[^>]*>
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {paper.downloadCount.toLocaleString()} downloads;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex-shrink-0">;
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                      Download PDF;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container-responsive text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Stay Updated with Latest Research;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Get notified when we publish new white papers and research insights. ;
              Join thousands of professionals staying ahead of technology trends.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email"
                placeholder="Enter your email"
                className="[^"]*"
              />;
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">;
                Subscribe;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-sm text-gray-500 mt-4">;
              We respect your privacy. Unsubscribe at any time.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default WhitePapers;