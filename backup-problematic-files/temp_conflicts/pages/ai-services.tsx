
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, Rocket, Atom, Cpu, Users, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
;
const aiServices = [;
  {;
















    icon:<Shield className="w-8 h-8 text-red-400" />,;
    href:'/ai-ethics-governance-framework',;
    features:['Ethical GuidelinesGovernance Framework', 'Compliance Monitoring'];




        <title>AI Services | Zion Tech Group</title>;"
        <meta name="description" content="LLM apps, RAG, MLOps, and AI research enablement with transparent pricing and measurable outcomes." />;"
</meta>"
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />;"
</link>
      ;"
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">;"
</div>"
        <ServiceAds heading="Featured AI Services" subheading="Production-ready offerings with transparent pricing." items={featuredAIAds} />;"
        <div className="text-center max-w-4xl mx-auto mb-12">;"
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Services</h1>;""
          <p className="text-xl text-gray-300">From prototype to production, we build AI systems that are safe, observable, and cost-efficient.</p>;"
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">;"
            <div key={t.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">;"
              <div className="mb-4">{t.icon}</div>;""
              <h3 className="text-white font-semibold mb-2">{t.title}</h3>;""
              <p className="text-gray-400 text-sm">{t.desc}</p>;"
            </div>;
        <div className="max-w-6xl mx-auto mb-20">;"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
              <div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">;"
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>;""
                <div className="text-cyan-400 font-semibold mb-4">{p.price}</div>;""
                <ul className="space-y-2 text-gray-300 text-sm">;"
</ul>"
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>;"
        </section>;"
        <section className="py-20 px-4 sm:px-6 lg:px-8">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity: 0;, y: 20 ;}}
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0.8;, delay: 0.2 ;}}"
              className="text-center mb-16";"
            >;
</motion>"
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;"
</p>
              </p>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
                  key={service.title}
                  transition={{ duration: 0.6;, delay: index * 0.1 ;}}"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group";"
                  <div className="mb-6">;"
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">;"
</h3>
                  </h3>;"
                  <p className="text-gray-400 mb-6 leading-relaxed">;"
                  </p>;"
                  <ul className="space-y-2 mb-6">;"
                      <li key={featureIndex} className="flex items-center text-gray-300">;"
</li>"
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />;"
                    whileHover={{ x: 5 ;}}"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300 transition-colors";"
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;"
          <div className="max-w-4xl mx-auto text-center">;"
              transition={{ duration: 0.8;, delay: 0.4 ;}}
              <p className="text-xl text-gray-400 mb-8">;"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
                <motion.button;
                  whileHover={{ scale: 1.05 ;}}
                  whileTap={{ scale: 0.95 ;}}"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300";"
</motion>
                </motion.button>;
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300";"