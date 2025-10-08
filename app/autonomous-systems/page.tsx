import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Bot, Zap, Shield, Cpu, Brain, Target, Settings } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered systems that automatically detect, diagnose, and fix infrastructure issues without human intervention.',
      icon: '🔧',
      price: 'Starting at $5,000/month',
      features: ['Automated monitoring', 'Predictive maintenance', 'Self-repair capabilities', 'Performance optimization', 'Alert management'],
      benefits: ['99.9% uptime guarantee', 'Reduce downtime by 80%', 'Lower maintenance costs'],
      marketPrice: '$8,000-15,000/month',
      category: 'Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Custom AI Models']
    },
    {
      title: 'Autonomous Business Processes',
      description: 'End-to-end automation of complex business workflows with intelligent decision-making capabilities.',
      icon: '⚙️',
      price: 'Starting at $3,500/month',
      features: ['Workflow automation', 'Decision automation', 'Exception handling', 'Process optimization', 'Integration management'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve efficiency'],
      marketPrice: '$6,000-12,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Custom AI Models', 'RPA Tools']
    },
    {
      title: 'Intelligent Monitoring Systems',
      description: 'AI-powered monitoring that learns from patterns and automatically adjusts thresholds and responses.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Anomaly detection', 'Predictive alerts', 'Auto-scaling', 'Performance tuning', 'Root cause analysis'],
      benefits: ['Prevent issues before they occur', 'Reduce false positives by 90%', 'Optimize resource usage'],
      marketPrice: '$4,000-8,000/month',
      category: 'Monitoring',
      technologies: ['ELK Stack', 'Splunk', 'DataDog', 'New Relic', 'Custom ML Models']
    },
    {
      title: 'Autonomous Data Management',
      description: 'Self-managing data systems that automatically optimize storage, backup, and data lifecycle management.',
      icon: '💾',
      price: 'Starting at $4,000/month',
      features: ['Auto-backup scheduling', 'Data deduplication', 'Storage optimization', 'Compliance management', 'Data governance'],
      benefits: ['Reduce storage costs by 40%', 'Ensure data compliance', 'Automate data lifecycle'],
      marketPrice: '$6,500-13,000/month',
      category: 'Data Management',
      technologies: ['AWS S3', 'Azure Blob', 'Google Cloud Storage', 'Custom AI Models', 'Data Lakes']
    },
    {
      title: 'Self-Optimizing Networks',
      description: 'Autonomous network management that continuously optimizes performance, security, and resource allocation.',
      icon: '🌐',
      price: 'Starting at $3,000/month',
      features: ['Traffic optimization', 'Security automation', 'Bandwidth management', 'Load balancing', 'Network healing'],
      benefits: ['Improve network performance', 'Reduce security incidents', 'Lower operational costs'],
      marketPrice: '$5,000-10,000/month',
      category: 'Networking',
      technologies: ['SD-WAN', 'Cisco ACI', 'VMware NSX', 'Custom AI Models', 'Network Analytics']
    },
    {
      title: 'Autonomous Security Operations',
      description: 'AI-driven security systems that automatically detect, analyze, and respond to security threats.',
      icon: '🛡️',
      price: 'Starting at $6,000/month',
      features: ['Threat detection', 'Automated response', 'Incident analysis', 'Security orchestration', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce response time by 85%', 'Prevent 95% of attacks'],
      marketPrice: '$10,000-20,000/month',
      category: 'Security',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Custom AI Models']
    }
  ];

  const categories = [...new Set(autonomousServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems including self-healing infrastructure, autonomous business processes, and intelligent monitoring for enterprise operations." />
        <meta name="keywords" content="autonomous systems, self-healing infrastructure, process automation, intelligent monitoring, autonomous operations" />
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
                Self-managing, self-optimizing systems that operate independently and continuously improve
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Start Automation Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View Autonomous Solutions
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
                Self-managing systems that reduce operational overhead while maximizing performance and reliability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Managing</h3>
                <p className="text-gray-600">Systems that operate independently without constant human intervention</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Optimization</h3>
                <p className="text-gray-600">Systems that learn and improve their performance over time</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Healing</h3>
                <p className="text-gray-600">Automatic detection and resolution of issues before they impact operations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful implementations with measurable business impact</p>
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
                  Autonomous {category.toLowerCase()} systems that manage themselves
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
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
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

        {/* Autonomous Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Advanced autonomous technologies that enable self-managing systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Bot className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Healing</h3>
                <p className="text-gray-600">Automatic detection and resolution of system issues</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">AI that learns and adapts to optimize performance</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Automation</h3>
                <p className="text-gray-600">End-to-end automation of complex business processes</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Monitoring</h3>
                <p className="text-gray-600">Smart monitoring that predicts and prevents issues</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Shield className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Autonomous Security</h3>
                <p className="text-gray-600">Self-managing security systems with automated responses</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Scaling</h3>
                <p className="text-gray-600">Dynamic resource allocation based on demand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Autonomous Systems?
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