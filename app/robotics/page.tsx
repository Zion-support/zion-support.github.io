import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Cpu, Zap, Target, Shield } from 'lucide-react';

const RoboticsPage: React.FC = () => {
  const roboticsServices = [
    {
      title: 'RPA (Robotic Process Automation)',
      description: 'Automate repetitive business processes with software robots',
      price: 'Starting at $2,500/month',
      features: [
        'Process automation',
        'Data extraction',
        'Workflow optimization',
        'Error handling',
        'Performance monitoring'
      ],
      icon: '🤖',
      popular: true
    },
    {
      title: 'Industrial Robotics',
      description: 'Advanced robotic solutions for manufacturing and industrial applications',
      price: 'Starting at $5,000/month',
      features: [
        'Assembly line automation',
        'Quality control',
        'Material handling',
        'Welding & cutting',
        'Safety systems'
      ],
      icon: '🏭',
      popular: true
    },
    {
      title: 'Service Robotics',
      description: 'Intelligent robots for customer service and operational tasks',
      price: 'Starting at $3,500/month',
      features: [
        'Customer interaction',
        'Cleaning automation',
        'Security patrol',
        'Delivery services',
        'Maintenance tasks'
      ],
      icon: '🛎️',
      popular: false
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation with decision-making capabilities',
      price: 'Starting at $4,000/month',
      features: [
        'Machine learning integration',
        'Predictive maintenance',
        'Adaptive behavior',
        'Natural language processing',
        'Computer vision'
      ],
      icon: '🧠',
      popular: false
    },
    {
      title: 'Robotic Process Integration',
      description: 'Seamlessly integrate robots into existing business processes',
      price: 'Starting at $3,000/month',
      features: [
        'System integration',
        'API development',
        'Data synchronization',
        'Workflow design',
        'Change management'
      ],
      icon: '🔌',
      popular: false
    },
    {
      title: 'Robotics Consulting',
      description: 'Strategic guidance on robotics adoption and implementation',
      price: 'Starting at $2,000/month',
      features: [
        'Technology assessment',
        'ROI analysis',
        'Implementation planning',
        'Team training',
        'Ongoing support'
      ],
      icon: '💡',
      popular: false
    }
  ];

  const applications = [
    {
      title: 'Manufacturing',
      description: 'Automated production lines and quality control',
      icon: '🏭',
      benefits: ['Increased productivity', 'Improved quality', 'Reduced costs', '24/7 operation']
    },
    {
      title: 'Healthcare',
      description: 'Surgical robots and patient care automation',
      icon: '🏥',
      benefits: ['Precision surgery', 'Patient monitoring', 'Medication management', 'Rehabilitation']
    },
    {
      title: 'Logistics',
      description: 'Warehouse automation and delivery robots',
      icon: '📦',
      benefits: ['Faster fulfillment', 'Reduced errors', 'Cost savings', 'Scalability']
    },
    {
      title: 'Customer Service',
      description: 'AI-powered chatbots and virtual assistants',
      icon: '🎧',
      benefits: ['24/7 availability', 'Consistent service', 'Cost reduction', 'Scalability']
    },
    {
      title: 'Agriculture',
      description: 'Autonomous farming and crop management',
      icon: '🌾',
      benefits: ['Precision farming', 'Increased yield', 'Resource optimization', 'Labor reduction']
    },
    {
      title: 'Security',
      description: 'Autonomous security systems and surveillance',
      icon: '🛡️',
      benefits: ['Continuous monitoring', 'Threat detection', 'Rapid response', 'Cost efficiency']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Robotics & Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Intelligent robots and automation solutions to transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Explore Robotics Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Robotics & Automation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Robotics & Automation?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Robotics and automation combine mechanical engineering, computer science, and AI to create 
                intelligent systems that can perform tasks autonomously. From software robots that automate 
                business processes to physical robots that handle manufacturing tasks, these technologies 
                revolutionize how work gets done.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Intelligent Automation</h3>
                    <p className="text-gray-600">AI-powered robots that learn and adapt to new situations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Process Optimization</h3>
                    <p className="text-gray-600">Streamline operations and eliminate human error</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scalable Solutions</h3>
                    <p className="text-gray-600">Deploy robots that can scale with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Robotics Benefits</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">70%</div>
                    <div className="text-sm text-gray-600">Reduction in manual tasks</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Continuous operation</div>
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
              Robotics & Automation Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete robotic solutions from RPA to industrial automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roboticsServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robotics Applications
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, benefitIndex) => (
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
              How we deploy robotics and automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">Analyze current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Design robotic solutions and automation workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">Implement and test robotic systems in your environment</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600">Monitor performance and continuously optimize operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Robotics Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading expertise in robotics and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Experts</h3>
              <p className="text-gray-600">Certified robotics engineers and AI specialists</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Successful robotics implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored robotics solutions for your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact our robotics experts for a consultation and custom automation solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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

export default RoboticsPage;