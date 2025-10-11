'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Code, BarChart, Users, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      icon: Brain,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Brain,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
    },
    {
      icon: Code,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Brain,
      title: 'AI Quantum Computing Solutions',
      description: 'Revolutionary quantum computing applications for optimization, cryptography, and complex problem solving.',
      category: 'ai',
      features: ['Quantum Optimization', 'Cryptographic Security', 'Complex Simulations', 'Machine Learning Acceleration', 'Quantum Algorithms'],
      price: 'Starting at $2,999/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Exponential processing power', 'Unbreakable encryption', 'Revolutionary problem solving', 'Future-proof technology']
    },
    {
      icon: Brain,
      title: 'AI Holographic Interface',
      description: 'Next-generation holographic user interfaces powered by AI for immersive business applications.',
      category: 'ai',
      features: ['3D Holographic Displays', 'Gesture Recognition', 'Spatial Computing', 'AR/VR Integration', 'Real-time Rendering'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Immersive user experience', 'Enhanced productivity', 'Cutting-edge technology', 'Competitive advantage']
    },
    {
      icon: Brain,
      title: 'AI Edge Computing Platform',
      description: 'Distributed AI processing at the edge for real-time decision making and reduced latency.',
      category: 'ai',
      features: ['Edge AI Processing', 'Real-time Analytics', 'Low Latency Response', 'Offline Capability', 'Distributed Learning'],
      price: 'Starting at $899/month',
      marketPrice: '$1500-6000/month',
      benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Enhanced privacy', 'Real-time processing']
    },
    {
      icon: Shield,
      title: 'AI Quantum Security Suite',
      description: 'Advanced quantum-resistant cybersecurity solutions for future-proof protection.',
      category: 'ai',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Threat Detection', 'Advanced Encryption', 'Future-Proof Security'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Quantum-resistant security', 'Future-proof protection', 'Advanced threat detection', 'Military-grade encryption']
    },
    {
      icon: BarChart,
      title: 'AI Neural Database',
      description: 'Revolutionary database system that learns and optimizes itself using neural networks.',
      category: 'ai',
      features: ['Self-Optimizing Queries', 'Predictive Indexing', 'Automatic Scaling', 'Neural Query Optimization', 'Intelligent Caching'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Self-optimizing performance', 'Reduced maintenance', 'Intelligent scaling', 'Predictive optimization']
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      category: 'ai',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved response times', 'Better customer satisfaction', 'Reduced agent workload', '24/7 availability']
    },
    {
      icon: BarChart,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      category: 'ai',
      features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Improved risk management', 'Better investment decisions', 'Reduced financial losses', 'Compliance automation']
    },
    {
      icon: Brain,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare']
    },
    {
      icon: BarChart,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated customer journey optimization.',
      category: 'ai',
      features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Personalized experiences', 'Automated optimization', 'Better ROI']
    },
    {
      icon: Code,
      title: 'AI Predictive Maintenance',
      description: 'Predictive maintenance solutions for industrial equipment using IoT sensors and machine learning.',
      category: 'ai',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Improved efficiency']
    },
    {
      icon: Cloud,
      title: 'AI Language Translation',
      description: 'Real-time language translation and localization services powered by advanced neural networks.',
      category: 'ai',
      features: ['Real-time Translation', 'Multi-language Support', 'Context Understanding', 'Voice Translation', 'Document Translation'],
      price: 'Starting at $149/month',
      marketPrice: '$250-1000/month',
      benefits: ['Global communication', 'Reduced language barriers', 'Faster localization', 'Cost-effective translation']
    },
    {
      icon: Brain,
      title: 'AI Voice Recognition',
      description: 'Advanced speech-to-text and voice command solutions for various business applications.',
      category: 'ai',
      features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Noise Cancellation', 'Multi-language Support'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster data entry', 'Enhanced user experience']
    },
    {
      icon: BarChart,
      title: 'AI Data Processing',
      description: 'Intelligent data cleaning, validation, and processing using machine learning algorithms.',
      category: 'ai',
      features: ['Data Cleaning', 'Validation Rules', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1500/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using artificial intelligence and machine learning.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Scanning', 'Security Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Enhanced security', 'Faster threat detection', 'Reduced false positives', '24/7 monitoring']
    },
    {
      icon: Code,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with automated meeting optimization.',
      category: 'ai',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Zone Management', 'Resource Allocation'],
      price: 'Starting at $99/month',
      marketPrice: '$150-600/month',
      benefits: ['Improved productivity', 'Reduced scheduling conflicts', 'Time optimization', 'Better resource utilization']
    },
    
    // IT Services
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Code,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    },
    {
      icon: Cloud,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times']
    },
    {
      icon: Cloud,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support']
    },
    {
      icon: Code,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      category: 'it',
      features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation', 'User Training', 'Incident Management'],
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      benefits: ['Reduced downtime', 'Expert support', 'Proactive maintenance', 'User satisfaction']
    },
    {
      icon: BarChart,
      title: 'Business Intelligence & Analytics',
      description: 'Data visualization and business intelligence solutions to transform data into actionable insights.',
      category: 'it',
      features: ['Data Visualization', 'Dashboard Creation', 'Report Automation', 'Data Integration', 'Performance Metrics', 'Custom Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Automated reporting', 'Better performance']
    },
    {
      icon: Shield,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect critical business data.',
      category: 'it',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage', 'Recovery Testing', 'Compliance Support'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Data protection', 'Business continuity', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Code,
      title: 'System Administration',
      description: 'Professional system administration services for servers, networks, and IT infrastructure.',
      category: 'it',
      features: ['Server Management', 'User Account Management', 'Security Updates', 'Performance Monitoring', 'Troubleshooting', 'Documentation'],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-5000/month',
      benefits: ['System reliability', 'Security maintenance', 'Performance optimization', 'Expert administration']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      category: 'it',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
      price: 'Starting at $3,000/month',
      marketPrice: '$5000-15000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Global reach']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      category: 'it',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      price: 'Starting at $4,000/month',
      marketPrice: '$6000-20000/month',
      benefits: ['Enhanced security', 'Compliance assurance', 'Risk mitigation', '24/7 monitoring']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      category: 'it',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Reporting'],
      price: 'Starting at $3,500/month',
      marketPrice: '$5000-15000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Better performance', 'Competitive advantage']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions.',
      category: 'it',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-12000/month',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Services | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI solutions, cloud services, cybersecurity, and custom development services. Transform your business with our expertise." />
        <meta name="keywords" content="AI services, cloud computing, cybersecurity, custom development, data analytics, IT consulting, business solutions" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Free Consultation
                  </a>
                  <a href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
