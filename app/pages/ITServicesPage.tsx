import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']
    },
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation']
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management']
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Remote Support', 'Preventive Maintenance', 'Emergency Response']
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved efficiency.',
      features: ['API Integration', 'Data Migration', 'System Customization', 'Workflow Automation']
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Database Design', 'Data Backup', 'Recovery Planning', 'Data Security']
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            IT Services
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8h-8 text-white" />
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-sm flex items-center">
                        <div className="w-2h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                    ))}

                <button className="w-fullbg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                  Learn More

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
            Let&apos;s discuss how our IT services can improve your business operations and security.
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-rfrom-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            <button className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
  </div></div></div></div></div></div></div></div></p></h1></h2></section></section></section></Helmet>);
};

export default ITServicesPage;