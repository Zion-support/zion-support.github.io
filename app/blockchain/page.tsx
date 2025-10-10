'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle ArrowRight Phone Mail Shield Brain Globe Zap } from "lucide-react";
const BlockchainPage: React.FC = () => {
  const features = [
      icon: Shield,
      title: 'Secure Blockchain Solutions',
      description: 'Advanced blockchain technology with enterprise-grade security and compliance'
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution'
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology'
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide blockchain deployment and support for international businesses'
  ];
  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"/>
            Blockchain Solutions;</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with cutting-edge blockchain technology and decentralized solutions. 
            Powered by advanced AI and industry expertise.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Our blockchain solutions deliver unmatched performance, security, and scalability.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, text-center, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
              <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Choose Our Blockchain Solutions?
          <div className="grid md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Why Choose Our Blockchain Services?
              <p className="text-xl text-gray-600"></p>
                Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Link className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified blockchain developers and architects</p>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices</p>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development frameworks</p>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Target className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored blockchain solutions for your specific needs</p>
          <section, key={categor, y} classNam, e="p, y-16, bg-gra, y-5, 0"></sectio, n>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                <p className="text-xl text-gray-600"></p>
                  Professiona, l {categor, y.toLowerCas, e()} solutions, powered by, blockchain technolog, y;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div, key={inde, x} classNam, e="b, g-white, rounded-lg, shadow-lg, p-6, hover:shado, w-xl, transition-shado, w"></di, v>
                      <div, className="tex, t-4xl, mb-4">{servic, e.ico, n}</di, v>
                      <h3, className="tex, t-xl, font-semibold, text-gra, y-900, mb-3">{servic, e.titl, e}</h, 3>
                      <p, className="tex, t-gra, y-600, mb-4">{servic, e.descriptio, n}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span, className="tex, t-2xl, font-bold, text-blu, e-60, 0">{servic, e.pric, e}</spa, n>
                          <span, className="tex, t-sm, text-gra, y-50, 0">Marke, t: {servic, e.marketPric, e}</spa, n>
                        <div className="text-sm text-green-600 font-semibold"></div>
                          Save up to 50% vs market rates;
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1"></ul>
                            <li, key={featureInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-60, 0"></l, i>
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          ))}
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div>
                            <span, key={techInde, x} classNam, e="b, g-blu, e-100, text-blu, e-800, text-xs, px-2, py-1, rounded"></spa, n>
                          ))}
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1"></ul>
                            <li, key={benefitInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-60, 0"></l, i>
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          ))}
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"></button>
                        Get Blockchain Quote;
                  ))}
        ))}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Our Blockchain Capabilities;
              <p className="text-xl text-gray-600"></p>
                Comprehensive blockchain technologies and methodologies for modern business applications;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div>
                <Link className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Automated contract execution with transparency and security</p>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions for modern financial services</p>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Marketplaces</h3>
                <p className="text-gray-600">Digital asset trading and ownership verification platforms</p>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Solutions</h3>
                <p className="text-gray-600">Private and consortium blockchains for business applications</p>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3>
                <p className="text-gray-600">Decentralized applications with user-friendly interfaces</p>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Analytics</h3>
                <p className="text-gray-600">Comprehensive data analysis and visualization tools</p>
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2>
              Ready to Transform with Blockchain?
            <p className="text-xl mb-8 text-blue-100"></p>
              Contact our blockchain experts for a free consultation and custom blockchain strategy development;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                📞 +1 302 464 0950;</a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                ✉️ kleber@ziontechgroup.com;</a>
            <div className="mt-8 text-sm text-blue-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
  );
export default BlockchainPage;