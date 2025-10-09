import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
import SEOOptimizer from '../components/SEOOptimizer';
import {Cloud, Shield, Server, BarChart, Users from 'lucide-react';}
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Server, Database, BarChart, Users } from 'lucide-react';
const ItServicesPage: React.FC = () => {title: 'Advanced Threat Protection',}
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection'],
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.',
      icon: Server,
      features: ['Network setup', 'Server management', 'Backup solutions', 'Disaster recovery', 'Performance monitoring', '24/7 support'],
      price: 'Starting at $1,200/month',
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Improved efficiency', 'Cost savings'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with our comprehensive BI and analytics solutions.',
      icon: BarChart,
      features: ['Data visualization', 'Report generation', 'Dashboard creation', 'Data warehousing', 'ETL processes', 'Predictive analytics'],
      price: 'Starting at $1,000/month',
      category: 'Analytics',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost optimization'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'SSRS', 'SSAS', 'SSIS'],
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.',
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost analysis', 'Implementation guidance', 'Training'],
      price: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Cost optimization', 'Risk mitigation', 'Technology alignment'],
      technologies: ['IT Strategy', 'Architecture Design', 'Vendor Management', 'Project Management'],
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
      </main>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
// Contact Us;
          </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
Learn More;
          </div>
      <Footer />
    </div>
  );
};
export default PagePage;