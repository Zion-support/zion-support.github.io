'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle ArrowRight Star Clock Zap Shield Brain BarChart Target TrendingUp Globe Database Users Settings } from "lucide-react";
const GlobalErrorPage: React.FC = () => {
  const features = [
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Global Error - Zion Tech Group</title>
        <meta name="description" content="Global error page." />
        <meta name="keywords" content="global error, AI solutions, IT services, business transformation" />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"/>
                Global Error;</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"></p>
                Global error page.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"></button>
                  Get Started;
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"></button>
                  Learn More;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Our Services;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Discover how our solutions can help transform your business.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-white, p-6, rounded-xl, shadow-lg, hover:shado, w-xl, transition-shado, w"></di, v>
                  <div className="flex items-center mb-4"></div>
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3, className="tex, t-xl, font-semibold, text-gra, y-90, 0">{featur, e.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-600, mb-4">{featur, e.descriptio, n}</p>
                  <ul className="space-y-2"></ul>
                      <li, key={benefitInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-60, 0"></l, i>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    ))}
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            <p className="text-xl text-blue-100 mb-8"></p>
              Contact us today to learn more about our services.
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"></button>
              Contact Us;
      <Footer />
  );
export default GlobalErrorPage;