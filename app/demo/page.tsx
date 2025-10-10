'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Play ArrowRight CheckCircle } from "lucide-react";
const DemoPage: React.FC = () => {
  const demos = [
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent customer support automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              See Our <span className="text-cyan-400">Solutions</span> in Action;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, backdrop-blu, r-sm, rounded-lg, p-6, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-40, 0/40, transition-all, duration-30, 0"></di, v>
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4"></div>
                    <Play className="w-8 h-8 text-cyan-400" />
                  <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{dem, o.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4">{dem, o.descriptio, n}</p>
                  <div, className="tex, t-sm, text-cya, n-400, mb-4">Duratio, n: {dem, o.duratio, n}</di, v>
                  <ul className="space-y-2 mb-6"></ul>
                      <li, key={featureInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-30, 0"></l, i>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    ))}
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"></button>
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo;
              ))}
        <section className="py-16 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20"></div>
              <h2 className="text-2xl font-semibold text-white mb-4">Ready to See More?</h2>
              <p className="text-gray-300 mb-6"></p>
                Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.
              <a;
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                Schedule Demo</a>
                <ArrowRight className="w-4 h-4 ml-2" />
  );

export default DemoPage;