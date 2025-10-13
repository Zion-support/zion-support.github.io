import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Circle, Star, ArrowRight, Brain, Zap, Shield, Cloud, Smartphone, Database, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Brain,
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
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with zero downtime', features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Security Implementation'] },
        { name: 'Cloud Architecture', price: '$2,200/month', description: 'Scalable and secure cloud infrastructure design and implementation', features: ['Infrastructure Design', 'Auto-scaling Setup', 'Load Balancing', 'Monitoring & Alerting'] },
        { name: 'DevOps & CI/CD', price: '$1,800/month', description: 'Automated deployment pipelines and infrastructure as code', features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Automated Testing'] },
        { name: 'Database Management', price: '$1,200/month', description: 'Optimized database design, management, and performance tuning', features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Security', price: '$1,600/month', description: 'Comprehensive network security and firewall management', features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Auditing'] },
        { name: 'Backup & Disaster Recovery', price: '$1,000/month', description: 'Reliable backup solutions and disaster recovery planning', features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing'] }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: Shield,
      services: [
        { name: 'Security Assessment', price: '$2,000/month', description: 'Comprehensive security audits and vulnerability assessments', features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Auditing', 'Compliance Checking'] },
        { name: 'Threat Detection', price: '$1,500/month', description: 'Advanced threat detection and response systems', features: ['SIEM Implementation', 'Threat Intelligence', 'Incident Response', 'Forensic Analysis'] },
        { name: 'Identity & Access Management', price: '$1,300/month', description: 'Secure identity management and access control solutions', features: ['SSO Implementation', 'Multi-factor Authentication', 'Role-based Access', 'Identity Governance'] },
        { name: 'Security Training', price: '$800/month', description: 'Employee security awareness and training programs', features: ['Phishing Simulation', 'Security Workshops', 'Compliance Training', 'Incident Response Training'] },
        { name: 'Compliance Management', price: '$1,400/month', description: 'GDPR, HIPAA, and other regulatory compliance assistance', features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Documentation'] },
        { name: 'Security Monitoring', price: '$1,200/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Real-time Alerts', 'Incident Response', 'Security Reporting'] }
      ]
    },
    {
      title: 'Mobile & Web Development',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: Smartphone,
      services: [
        { name: 'Mobile App Development', price: '$2,500/month', description: 'Native and cross-platform mobile applications', features: ['iOS/Android Apps', 'React Native', 'Flutter', 'App Store Optimization'] },
        { name: 'Web Application Development', price: '$2,000/month', description: 'Modern, responsive web applications and portals', features: ['React/Vue/Angular', 'Node.js/Python', 'Database Integration', 'API Development'] },
        { name: 'E-commerce Solutions', price: '$1,800/month', description: 'Custom e-commerce platforms and online stores', features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Order Processing'] },
        { name: 'Progressive Web Apps', price: '$1,500/month', description: 'Fast, reliable, and engaging web applications', features: ['PWA Development', 'Offline Functionality', 'Push Notifications', 'App-like Experience'] },
        { name: 'API Development', price: '$1,200/month', description: 'RESTful and GraphQL APIs for seamless integration', features: ['REST API Design', 'GraphQL APIs', 'API Documentation', 'Rate Limiting'] },
        { name: 'UI/UX Design', price: '$1,000/month', description: 'User-centered design and user experience optimization', features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'] }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion's AI solutions transformed our business operations. The ROI was evident within the first quarter.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "Their cloud migration service was seamless. We experienced zero downtime and improved performance significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "SecureTech Ltd.",
      role: "Security Director",
      content: "The cybersecurity assessment revealed critical vulnerabilities we weren't aware of. Their expertise is unmatched.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, cybersecurity, and mobile development. Transform your business with our expertise." />
        <meta name="keywords" content="AI services, IT services, machine learning, cloud computing, cybersecurity, mobile development, web development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business. 
              From artificial intelligence to cybersecurity, we provide end-to-end technology services.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="mb-20">
                  <div className="flex items-center mb-12">
                    <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <Circle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;