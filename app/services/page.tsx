import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] }
      ]
    },
    {
      title: 'IT Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CloudIcon,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with zero downtime', features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Security Implementation'] },
        { name: 'Cloud Architecture', price: '$2,200/month', description: 'Scalable and secure cloud infrastructure design and implementation', features: ['Infrastructure Design', 'Auto-scaling Setup', 'Load Balancing', 'Disaster Recovery'] },
        { name: 'DevOps & CI/CD', price: '$1,800/month', description: 'Automated deployment pipelines and infrastructure management', features: ['CI/CD Pipeline Setup', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing'] },
        { name: 'Database Management', price: '$1,200/month', description: 'Optimized database solutions for performance and scalability', features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Security', price: '$1,600/month', description: 'Comprehensive network security and monitoring solutions', features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring'] },
        { name: 'IT Support', price: '$1,000/month', description: '24/7 technical support and maintenance services', features: ['24/7 Support', 'Remote Monitoring', 'Preventive Maintenance', 'Issue Resolution'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        { name: 'Security Assessment', price: '$2,000/month', description: 'Comprehensive security audit and vulnerability assessment', features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audit', 'Compliance Check'] },
        { name: 'Threat Monitoring', price: '$1,500/month', description: '24/7 threat detection and response services', features: ['SIEM Implementation', 'Threat Intelligence', 'Incident Response', 'Forensic Analysis'] },
        { name: 'Identity Management', price: '$1,200/month', description: 'Secure identity and access management solutions', features: ['SSO Implementation', 'Multi-factor Authentication', 'Role-based Access', 'Identity Governance'] },
        { name: 'Data Protection', price: '$1,400/month', description: 'Advanced data encryption and protection services', features: ['Data Encryption', 'Backup Solutions', 'Data Loss Prevention', 'Privacy Compliance'] },
        { name: 'Security Training', price: '$800/month', description: 'Employee security awareness and training programs', features: ['Security Awareness', 'Phishing Simulation', 'Training Modules', 'Compliance Training'] },
        { name: 'Compliance Management', price: '$1,600/month', description: 'Ensure compliance with industry standards and regulations', features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'] }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: ChartBarIcon,
      services: [
        { name: 'Digital Strategy', price: '$2,500/month', description: 'Comprehensive digital transformation strategy and planning', features: ['Digital Roadmap', 'Technology Assessment', 'Change Management', 'ROI Analysis'] },
        { name: 'Process Automation', price: '$1,800/month', description: 'Automate business processes for improved efficiency', features: ['Workflow Automation', 'RPA Implementation', 'Process Optimization', 'Integration Services'] },
        { name: 'Data Analytics', price: '$1,600/month', description: 'Transform data into actionable business insights', features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Reporting Dashboards'] },
        { name: 'Mobile Solutions', price: '$1,400/month', description: 'Custom mobile applications for iOS and Android', features: ['Native App Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization'] },
        { name: 'E-commerce Solutions', price: '$2,000/month', description: 'Complete e-commerce platform development and management', features: ['Platform Development', 'Payment Integration', 'Inventory Management', 'SEO Optimization'] },
        { name: 'API Development', price: '$1,200/month', description: 'RESTful APIs and microservices architecture', features: ['API Design', 'Microservices', 'API Gateway', 'Documentation'] }
      ]
    },
    {
      title: '5G Solutions',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      icon: GlobeAltIcon,
      services: [
        { name: '5G Network Design', price: '$3,500/month', description: 'Complete 5G network architecture and implementation', features: ['Network Planning', 'Infrastructure Design', 'Coverage Optimization', 'Performance Testing'] },
        { name: 'IoT Integration', price: '$2,000/month', description: 'Internet of Things solutions leveraging 5G connectivity', features: ['Device Integration', 'Data Collection', 'Real-time Monitoring', 'Analytics Platform'] },
        { name: 'Edge Computing', price: '$2,200/month', description: 'Edge computing solutions for low-latency applications', features: ['Edge Infrastructure', 'Data Processing', 'Latency Optimization', 'Distributed Computing'] },
        { name: 'Smart City Solutions', price: '$4,000/month', description: 'Comprehensive smart city infrastructure and services', features: ['Traffic Management', 'Environmental Monitoring', 'Public Safety', 'Citizen Services'] },
        { name: 'Industrial IoT', price: '$2,500/month', description: '5G-powered industrial automation and monitoring', features: ['Manufacturing Automation', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'] },
        { name: '5G Applications', price: '$1,800/month', description: 'Custom applications leveraging 5G capabilities', features: ['AR/VR Applications', 'Real-time Streaming', 'Autonomous Systems', 'Remote Operations'] }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: CpuChipIcon,
      services: [
        { name: 'Custom SaaS Development', price: '$3,000/month', description: 'Tailored SaaS solutions for specific business needs', features: ['Custom Development', 'Multi-tenancy', 'Scalable Architecture', 'API Integration'] },
        { name: 'SaaS Migration', price: '$2,500/month', description: 'Migrate existing applications to SaaS architecture', features: ['Legacy Migration', 'Data Migration', 'User Management', 'Performance Optimization'] },
        { name: 'SaaS Maintenance', price: '$1,200/month', description: 'Ongoing maintenance and support for SaaS applications', features: ['Bug Fixes', 'Feature Updates', 'Security Patches', 'Performance Monitoring'] },
        { name: 'SaaS Analytics', price: '$1,000/month', description: 'Comprehensive analytics and reporting for SaaS platforms', features: ['Usage Analytics', 'User Behavior', 'Performance Metrics', 'Custom Reports'] },
        { name: 'SaaS Security', price: '$1,400/month', description: 'Advanced security solutions for SaaS applications', features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance Management'] },
        { name: 'SaaS Scaling', price: '$2,000/month', description: 'Scale SaaS applications to handle growing user bases', features: ['Auto-scaling', 'Load Balancing', 'Database Optimization', 'CDN Integration'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, digital transformation, 5G solutions, and micro SaaS development." />
        <meta name="keywords" content="AI services, cybersecurity services, cloud services, digital transformation, 5G solutions, micro SaaS, IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center"
          >
            Get Started Today
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-purple-400 font-bold">{service.price}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <div className="flex items-center justify-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>+1-302-464-0950</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;