import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Star, Right, Brain, Zap, Shield, Cloud, Smartphone, Database, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
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
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with zero downtime', features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Security Implementation'] },
        { name: 'Cloud Architecture', price: '$2,200/month', description: 'Scalable and secure cloud infrastructure design and implementation', features: ['Infrastructure Design', 'Auto-scaling Setup', 'Load Balancing', 'Monitoring & Alerting'] },
        { name: 'DevOps & CI/CD', price: '$1,800/month', description: 'Automated deployment pipelines and infrastructure management', features: ['CI/CD Pipeline Setup', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'] },
        { name: 'Database Management', price: '$1,200/month', description: 'Database optimization, backup, and performance tuning', features: ['Performance Optimization', 'Backup & Recovery', 'Security Hardening', '24/7 Monitoring'] },
        { name: 'Network Security', price: '$1,600/month', description: 'Comprehensive network security and firewall management', features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Audits'] },
        { name: 'Server Management', price: '$1,000/month', description: 'Complete server administration and maintenance services', features: ['Server Setup & Configuration', 'Performance Monitoring', 'Security Updates', 'Backup Management'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      services: [
        { name: 'Security Assessment', price: '$2,000/month', description: 'Comprehensive security audit and vulnerability assessment', features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audit', 'Compliance Check'] },
        { name: 'Managed Security Services', price: '$1,500/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'] },
        { name: 'Identity & Access Management', price: '$1,200/month', description: 'Secure user authentication and authorization systems', features: ['SSO Implementation', 'Multi-factor Authentication', 'User Provisioning', 'Access Control'] },
        { name: 'Data Protection', price: '$1,400/month', description: 'Data encryption, backup, and recovery solutions', features: ['Data Encryption', 'Backup Solutions', 'Disaster Recovery', 'Compliance Management'] },
        { name: 'Security Training', price: '$800/month', description: 'Employee security awareness and training programs', features: ['Security Awareness Training', 'Phishing Simulation', 'Best Practices', 'Certification Programs'] },
        { name: 'Compliance Management', price: '$1,600/month', description: 'GDPR, HIPAA, and other regulatory compliance assistance', features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Documentation'] }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Digital Strategy', price: '$2,800/month', description: 'Comprehensive digital transformation strategy and roadmap', features: ['Digital Assessment', 'Strategy Development', 'Technology Roadmap', 'Change Management'] },
        { name: 'Process Automation', price: '$1,600/month', description: 'Business process automation and workflow optimization', features: ['Process Analysis', 'Automation Design', 'Implementation', 'Monitoring & Optimization'] },
        { name: 'API Development', price: '$1,400/month', description: 'RESTful and GraphQL API development and integration', features: ['API Design', 'Development', 'Documentation', 'Testing & Deployment'] },
        { name: 'Mobile App Development', price: '$2,000/month', description: 'Native and cross-platform mobile application development', features: ['iOS/Android Development', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Deployment'] },
        { name: 'Web Application Development', price: '$1,800/month', description: 'Custom web applications and e-commerce solutions', features: ['Custom Development', 'E-commerce Solutions', 'Responsive Design', 'Performance Optimization'] },
        { name: 'Legacy System Modernization', price: '$2,500/month', description: 'Modernizing legacy systems and applications', features: ['System Analysis', 'Modernization Planning', 'Data Migration', 'Integration'] }
      ]
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Scalable Solutions',
    'Enterprise Security',
    'Custom Development',
    'Cloud Migration',
    'AI Integration'
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, cybersecurity, and digital transformation solutions." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, digital transformation, machine learning, cloud migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth through innovation.
            </p>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  {categoryIndex === 0 && <Brain className={`w-6 h-6 ${category.color}`} />}
                  {categoryIndex === 1 && <Cloud className={`w-6 h-6 ${category.color}`} />}
                  {categoryIndex === 2 && <Shield className={`w-6 h-6 ${category.color}`} />}
                  {categoryIndex === 3 && <Zap className={`w-6 h-6 ${category.color}`} />}
                </div>
                <h2 className={`text-3xl font-bold ${category.color}`}>{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <span className="text-cyan-400 font-bold">{service.price}</span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <Circle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <Right className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Features Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get Quote
                <Right className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Schedule Consultation
                <Right className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;