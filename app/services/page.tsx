import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Cloud, Cpu, BarChart3, Wrench, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Cpu,
      services: [
        { name: 'AI Analytics', price: '$2,500/month', description: 'Advanced AI-powered data analytics and insights', features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Models', 'API Integration'] },
        { name: 'AI Content Generation', price: '$1,800/month', description: 'Automated content creation using AI', features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization'] },
        { name: 'AI Customer Support', price: '$1,200/month', description: 'Intelligent chatbots and customer service automation', features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Integration APIs'] },
        { name: 'AI Cybersecurity', price: '$3,000/month', description: 'AI-powered threat detection and security automation', features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Real-time Monitoring'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheck,
      services: [
        { name: 'Security Assessment', price: '$1,200/month', description: 'Comprehensive security evaluation and vulnerability assessment', features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] },
        { name: 'Managed Security Services', price: '$2,000/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] },
        { name: 'Identity & Access Management', price: '$1,500/month', description: 'Secure user authentication and authorization systems', features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] },
        { name: 'Data Protection', price: '$1,800/month', description: 'Comprehensive data encryption and backup solutions', features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance'] }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },
        { name: 'Cloud Management', price: '$2,200/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['Resource Optimization', 'Cost Management', 'Performance Monitoring', 'Security Management'] },
        { name: 'DevOps Services', price: '$2,800/month', description: 'Complete DevOps implementation and CI/CD pipeline setup', features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'] },
        { name: 'Cloud Security', price: '$2,500/month', description: 'Comprehensive cloud security implementation and monitoring', features: ['Security Architecture', 'Compliance Management', 'Threat Protection', 'Access Control'] }
      ]
    },
    {
      title: 'Data Analytics',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: BarChart3,
      services: [
        { name: 'Business Intelligence', price: '$2,000/month', description: 'Transform data into actionable business insights', features: ['Custom Dashboards', 'Data Visualization', 'Report Automation', 'KPI Tracking'] },
        { name: 'Data Engineering', price: '$2,500/month', description: 'Build robust data pipelines and data warehouses', features: ['Data Pipeline Design', 'ETL Processes', 'Data Warehousing', 'Data Quality'] },
        { name: 'Machine Learning', price: '$3,500/month', description: 'Implement machine learning models for business optimization', features: ['Model Development', 'Training & Testing', 'Model Deployment', 'Performance Monitoring'] },
        { name: 'Data Governance', price: '$1,800/month', description: 'Establish data governance frameworks and compliance', features: ['Data Policies', 'Compliance Management', 'Data Lineage', 'Quality Standards'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud infrastructure, data analytics, and AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud infrastructure, data analytics, business solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional {category.title.toLowerCase()} solutions tailored to your business needs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
