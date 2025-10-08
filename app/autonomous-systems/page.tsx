import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Bot, Zap, Shield, Brain, Settings, Target } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered infrastructure that automatically detects, diagnoses, and repairs system issues.',
      icon: '🔧',
      price: 'Starting at $5,000/month',
      features: ['Automatic issue detection', 'Self-repair capabilities', 'Predictive maintenance', 'Zero-downtime operations', 'Performance optimization'],
      benefits: ['Reduce downtime by 90%', 'Lower maintenance costs by 60%', 'Improve system reliability'],
      marketPrice: '$8,000-15,000/month',
      category: 'Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'AI/ML Models']
    },
    {
      title: 'Autonomous Business Operations',
      description: 'End-to-end business process automation with intelligent decision-making capabilities.',
      icon: '🤖',
      price: 'Starting at $7,500/month',
      features: ['Process automation', 'Decision automation', 'Exception handling', 'Workflow optimization', 'Performance monitoring'],
      benefits: ['Increase efficiency by 80%', 'Reduce human errors by 95%', 'Scale operations automatically'],
      marketPrice: '$12,000-25,000/month',
      category: 'Business Operations',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'API Integration', 'Process Mining']
    },
    {
      title: 'Intelligent Monitoring Systems',
      description: 'AI-powered monitoring that predicts issues before they occur and takes preventive action.',
      icon: '📊',
      price: 'Starting at $3,500/month',
      features: ['Predictive analytics', 'Anomaly detection', 'Automated alerts', 'Performance optimization', 'Capacity planning'],
      benefits: ['Prevent 95% of issues', 'Reduce alert fatigue by 70%', 'Optimize resource usage'],
      marketPrice: '$6,000-12,000/month',
      category: 'Monitoring',
      technologies: ['Machine Learning', 'Time Series DB', 'Alerting Systems', 'Visualization Tools']
    },
    {
      title: 'Autonomous DevOps Pipeline',
      description: 'Self-managing CI/CD pipelines that adapt and optimize based on code changes and performance.',
      icon: '🔄',
      price: 'Starting at $4,500/month',
      features: ['Auto-scaling pipelines', 'Intelligent testing', 'Deployment optimization', 'Performance tuning', 'Security scanning'],
      benefits: ['Deploy 5x faster', 'Reduce deployment failures by 85%', 'Optimize resource usage'],
      marketPrice: '$7,500-15,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Kubernetes', 'Docker', 'AI/ML']
    },
    {
      title: 'Smart Resource Management',
      description: 'Autonomous resource allocation and optimization for cloud and on-premises infrastructure.',
      icon: '⚡',
      price: 'Starting at $6,000/month',
      features: ['Dynamic scaling', 'Cost optimization', 'Load balancing', 'Capacity planning', 'Performance tuning'],
      benefits: ['Reduce costs by 40%', 'Improve performance by 50%', 'Eliminate manual scaling'],
      marketPrice: '$10,000-20,000/month',
      category: 'Resource Management',
      technologies: ['Kubernetes', 'Cloud APIs', 'Machine Learning', 'Cost Analytics']
    },
    {
      title: 'Autonomous Security Operations',
      description: 'AI-driven security that automatically detects, responds to, and prevents cyber threats.',
      icon: '🛡️',
      price: 'Starting at $8,500/month',
      features: ['Threat detection', 'Automated response', 'Incident investigation', 'Security hardening', 'Compliance monitoring'],
      benefits: ['Prevent 99% of attacks', 'Reduce response time by 90%', 'Ensure compliance'],
      marketPrice: '$15,000-30,000/month',
      category: 'Security',
      technologies: ['SIEM', 'SOAR', 'AI/ML', 'Threat Intelligence', 'Automation Tools']
    },
    {
      title: 'Intelligent Data Management',
      description: 'Autonomous data processing, cleaning, and optimization with intelligent insights.',
      icon: '📈',
      price: 'Starting at $4,000/month',
      features: ['Data quality automation', 'Intelligent ETL', 'Data lineage tracking', 'Performance optimization', 'Cost management'],
      benefits: ['Improve data quality by 95%', 'Reduce processing time by 70%', 'Lower storage costs'],
      marketPrice: '$7,000-14,000/month',
      category: 'Data Management',
      technologies: ['Apache Airflow', 'Spark', 'Data Lakes', 'AI/ML', 'Data Catalogs']
    },
    {
      title: 'Autonomous Customer Service',
      description: 'AI-powered customer service that learns, adapts, and resolves issues autonomously.',
      icon: '💬',
      price: 'Starting at $3,000/month',
      features: ['Intelligent routing', 'Automated responses', 'Issue resolution', 'Customer insights', 'Performance optimization'],
      benefits: ['Resolve 80% of issues automatically', 'Improve satisfaction by 60%', 'Reduce support costs'],
      marketPrice: '$5,000-10,000/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Chatbots', 'CRM Integration', 'Knowledge Bases', 'AI/ML']
    }
  ];

  const categories = [...new Set(autonomousServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems including self-healing infrastructure, intelligent monitoring, and autonomous business operations for enterprise automation." />
        <meta name="keywords" content="autonomous systems, self-healing infrastructure, intelligent automation, autonomous operations, AI automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Autonomous Systems
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Self-managing, self-optimizing systems that operate independently and intelligently
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Explore Autonomous Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-600">
                Self-managing systems that learn, adapt, and optimize continuously for maximum efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Managing</h3>
                <p className="text-gray-600">Systems that operate independently without human intervention</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Learning</h3>
                <p className="text-gray-600">AI that continuously learns and improves performance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Response</h3>
                <p className="text-gray-600">Millisecond response times for critical operations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Healing</h3>
                <p className="text-gray-600">Automatic detection and repair of issues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Autonomous {category.toLowerCase()} systems that operate independently and intelligently
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {autonomousServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Autonomous Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Get Autonomous Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our autonomous systems experts for a free consultation and custom automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousSystemsPage;