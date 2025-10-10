'use client';
import React from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import { CheckCircle ArrowRight Star Users TrendingUp Shield } from "lucide-react";
const ContentPromotionBanner: React.FC = () => {
  const stats = [
  ];

  const features = [
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve customer satisfaction',
    'Scale without limits',
    'Stay ahead of competition',
    'Future-proof your business'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Transform Your Business</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              with AI & Technology;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
              <div className="flex justify-center mb-4"></div>
              <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
              <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
          ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
              <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{featur, e.titl, e}</h, 3>
              <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
          ))}

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-4"></div>
              <div, key={inde, x} classNam, e="flex, items-center, gap-3"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}

        <div className="text-center"></div>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join thousands of satisfied customers and transform your business today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
  );

export default ContentPromotionBanner;