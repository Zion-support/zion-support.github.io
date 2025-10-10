import React from 'react';
import { Brain Cloud Shield Zap ArrowRight CheckCircle Star TrendingUp Users Award Clock Globe } from "lucide-react";
const EnhancedServicesShowcase: React.FC = () => {
  const services = [
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI'
      title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime'
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches'
      title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency'
  ];
  return (
    <section className="py-16"></section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse"></h2>
            Our Core Services;
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto"></p>
            Comprehensive AI and IT solutions designed to transform your business and drive innovation;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div, key={inde, x} classNam, e="cybe, r-card, hologram-card, p-6, group hove, r:scal, e-105, transition-all, duration-30, 0"></di, v>
              <div className="flex items-center mb-4"></div>
                <servic, e.icon, className={`w-12, h-1, 2 ${servic, e.colo, r} m, r-4`} />
                <div></div>
                  <h3, className="tex, t-xl, font-bold, text-whit, e">{servic, e.titl, e}</h, 3>
                  <div, className="tex, t-sm, text-cya, n-400, font-semibol, d">{servic, e.stat, s}</di, v>
              <p, className="tex, t-gra, y-300, mb-4">{servic, e.descriptio, n}</p>
              <ul className="space-y-2 mb-6"></ul>
                  <li, key={featureInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-40, 0"></l, i>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
;
const EnhancedServicesShowcase: React.FC = () => {;
  const services = [;
      title: 'AI Solutions',;
      description: 'Transform your business with cutting-edge artificial intelligence',;
      icon: Brain,;
      color: 'text-purple-400',;
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],;
      stats: '300% ROI';}
      title: 'IT Infrastructure',;
      description: 'Build and maintain robust technology foundations',;
      icon: Cloud,;
      color: 'text-blue-400',;
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],;
      stats: '99.9% Uptime';}
      title: 'Cybersecurity',;
      description: 'Protect your business with enterprise-grade security',;
      icon: Shield,;
      color: 'text-green-400',;
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],;
      stats: 'Zero Breaches';}
      title: 'Automation',;
      description: 'Streamline processes with intelligent automation',;
      icon: Zap,;
      color: 'text-yellow-400',;
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],;
      stats: '95% Efficiency';}
  ];
;
  return (;
    <section className="py-16"></section>;
      <div className="container mx-auto px-4"></div>;
        <div className="text-center mb-16"></div>;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">;</h2>
            Our Core Services;
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">;</p>
            Comprehensive AI and IT solutions designed to transform your business and drive innovation;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>;
            <div, key={inde, x} classNam, e="cybe, r-card, hologram-card, p-6, group hove, r:scal, e-105, transition-all, duration-30, 0"></di, v>;
              <div className="flex items-center mb-4"></div>;
                <servic, e.icon, className={`w-12, h-1, 2 ${servic, e.colo, r} m, r-4`} />;
                <div></div>;
                  <h3, className="tex, t-xl, font-bold, text-whit, e">{servic, e.titl, e}</h, 3>;
                  <div, className="tex, t-sm, text-cya, n-400, font-semibol, d">{servic, e.stat, s}</di, v>;
              <p, className="tex, t-gra, y-300, mb-4">{servic, e.descriptio, n}</p>;
              <ul className="space-y-2 mb-6">;</ul>
                  <li, key={featureInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-40, 0">;</l, i>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />;
                ))}
              <a;
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
          ))}
        <div className="text-center mt-12"></div>
          <a;
            href="/services"
            className="cyber-button inline-flex items-center">
            View All Services</a>
            <ArrowRight className="w-5 h-5 ml-2" />
  );
export default EnhancedServicesShowcase;
              <a;
                href="/services";
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform";
                Learn More <ArrowRight className="w-4 h-4 ml-2" />;
          ))}
        <div className="text-center mt-12"></div>;
          <a;
            href="/services";
            className="cyber-button inline-flex items-center";
            View All Services;
            <ArrowRight className="w-5 h-5 ml-2" />;
  );
;
export default EnhancedServicesShowcase;
;
