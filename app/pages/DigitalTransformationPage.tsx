import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {,

      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your organization through digital transformation with effective change management strategies.',
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Plans', 'Resistance Management']
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives and market needs.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'Success Metrics']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights to drive informed business decisions.',
      features: ['Data Collection', 'Analysis & Visualization', 'Predictive Modeling', 'Business Intelligence']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster innovation culture and implement cutting-edge technologies to stay competitive.',
      features: ['Innovation Workshops', 'Technology Evaluation', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircle,
      title: 'Digital Governance',
      description: 'Establish governance frameworks to ensure successful digital transformation initiatives.',
      features: ['Policy Development', 'Risk Management', 'Compliance Monitoring', 'Performance Tracking']
    }
  ];

  const benefits = [
    'Increased Operational Efficiency',
    'Enhanced Customer Experience',
    'Improved Data-Driven Decision Making',
    'Reduced Operational Costs',
    'Faster Time to Market',
    'Competitive Advantage'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, change management, and innovation consulting." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, data analytics, innovation consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Digital Transformation Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              We help organizations modernize processes, adopt new technologies, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
          </div>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Digital Transformation Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Benefits of Digital Transformation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
              ))}
            </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Transformation Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Analyze current state and identify transformation opportunities</p>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
                <p className="text-gray-300">Develop comprehensive digital transformation roadmap</p>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">Execute transformation initiatives with agile methodology</p>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300">Monitor performance and continuously improve processes</p>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our digital transformation services can help you achieve your business goals 
              and stay competitive in the digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
          </div>
      </div>
    </>);
};

export default DigitalTransformationPage</section>
              </div>
                </div>
              </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
            </div>
          </div>
          </div>
        </section>
      </div>