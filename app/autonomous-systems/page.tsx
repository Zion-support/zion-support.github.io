import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Cpu, Shield, Zap, Target } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'Automated detection and resolution of infrastructure issues without human intervention',
      price: 'Starting at $2,500/month',
      features: [
        'Automated issue detection',
        'Self-repair capabilities',
        'Predictive maintenance',
        'Performance optimization',
        '24/7 monitoring'
      ],
      icon: '🔧',
      popular: true
    },
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation of complex business processes with decision-making capabilities',
      price: 'Starting at $3,000/month',
      features: [
        'Process intelligence',
        'Decision automation',
        'Exception handling',
        'Workflow optimization',
        'Continuous learning'
      ],
      icon: '⚙️',
      popular: true
    },
    {
      title: 'Autonomous Data Management',
      description: 'Self-managing data systems with automatic optimization and security',
      price: 'Starting at $2,200/month',
      features: [
        'Automated data cleaning',
        'Intelligent archiving',
        'Security monitoring',
        'Performance tuning',
        'Backup automation'
      ],
      icon: '🗄️',
      popular: false
    },
    {
      title: 'Smart Resource Allocation',
      description: 'Dynamic allocation of computing resources based on real-time demand',
      price: 'Starting at $1,800/month',
      features: [
        'Dynamic scaling',
        'Load balancing',
        'Cost optimization',
        'Performance monitoring',
        'Predictive scaling'
      ],
      icon: '📊',
      popular: false
    },
    {
      title: 'Autonomous Security Systems',
      description: 'Self-defending security systems that adapt to new threats automatically',
      price: 'Starting at $2,800/month',
      features: [
        'Threat detection',
        'Automated response',
        'Behavioral analysis',
        'Incident containment',
        'Security learning'
      ],
      icon: '🛡️',
      popular: false
    },
    {
      title: 'Intelligent Monitoring',
      description: 'AI-powered monitoring systems that predict and prevent issues',
      price: 'Starting at $1,500/month',
      features: [
        'Predictive analytics',
        'Anomaly detection',
        'Alert optimization',
        'Root cause analysis',
        'Performance insights'
      ],
      icon: '📈',
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Self-Learning',
      description: 'Systems that continuously learn and improve from experience',
      icon: '🧠',
      benefits: ['Adaptive algorithms', 'Pattern recognition', 'Continuous optimization']
    },
    {
      title: 'Self-Healing',
      description: 'Automatic detection and resolution of issues without human intervention',
      icon: '🔧',
      benefits: ['Fault tolerance', 'Automatic recovery', 'Minimal downtime']
    },
    {
      title: 'Self-Optimization',
      description: 'Continuous performance optimization based on real-time data',
      icon: '⚡',
      benefits: ['Performance tuning', 'Resource optimization', 'Efficiency gains']
    },
    {
      title: 'Self-Protection',
      description: 'Intelligent security systems that adapt to new threats',
      icon: '🛡️',
      benefits: ['Threat detection', 'Automated response', 'Security learning']
    },
    {
      title: 'Self-Scaling',
      description: 'Dynamic resource allocation based on demand patterns',
      icon: '📊',
      benefits: ['Elastic scaling', 'Cost optimization', 'Performance consistency']
    },
    {
      title: 'Self-Governance',
      description: 'Automated compliance and governance management',
      icon: '📋',
      benefits: ['Compliance monitoring', 'Policy enforcement', 'Audit automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Self-managing and self-optimizing systems that adapt, learn, and improve without human intervention
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

      {/* What are Autonomous Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What are Autonomous Systems?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Autonomous systems are intelligent, self-managing systems that can operate independently 
                with minimal human intervention. They use AI, machine learning, and advanced algorithms 
                to monitor, analyze, and respond to changes in their environment automatically.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Intelligent Decision Making</h3>
                    <p className="text-gray-600">AI-powered decision making based on real-time data and historical patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Self-Learning Capabilities</h3>
                    <p className="text-gray-600">Continuous learning and improvement from experience and feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adaptive Response</h3>
                    <p className="text-gray-600">Automatic adaptation to changing conditions and requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Benefits</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">70%</div>
                    <div className="text-sm text-gray-600">Reduction in manual tasks</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">System uptime</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">50%</div>
                    <div className="text-sm text-gray-600">Faster issue resolution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous System Services
            </h2>
            <p className="text-xl text-gray-600">
              Self-managing solutions that reduce operational overhead and improve efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autonomousServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Core capabilities that make systems truly autonomous
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              How we build and deploy autonomous systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze current systems and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Design autonomous system architecture and algorithms</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Build and deploy autonomous systems with monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Continuous learning and system optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Autonomous Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading expertise in autonomous system development and deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Experts</h3>
              <p className="text-gray-600">PhD-level AI researchers and engineers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Successful autonomous system implementations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact our autonomous systems experts for a consultation and custom solution development
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutonomousSystemsPage;