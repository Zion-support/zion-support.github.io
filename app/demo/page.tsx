import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Clock, Award } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience our advanced AI analytics platform with real-time insights and predictive analytics.',
      duration: '15 minutes',
      features: ['Real-time Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports'],
      category: 'AI Services'
    },
    {
      title: 'IT Infrastructure Monitoring',
      description: 'See how our IT monitoring solutions keep your infrastructure running smoothly.',
      duration: '20 minutes',
      features: ['System Monitoring', 'Alert Management', 'Performance Analytics', 'Automated Remediation'],
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Interact with our intelligent chatbot and see how it can transform customer service.',
      duration: '10 minutes',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
      category: 'AI Services'
    },
    {
      title: 'Cloud Migration Tool',
      description: 'Watch our cloud migration tool in action, simplifying complex infrastructure moves.',
      duration: '25 minutes',
      features: ['Automated Migration', 'Risk Assessment', 'Rollback Capabilities', 'Progress Tracking'],
      category: 'IT Services'
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: 'Interactive Experience',
      description: 'Hands-on demos that let you explore our solutions at your own pace'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our specialists guide you through each demo and answer your questions'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book demos at times that work best for your schedule'
    },
    {
      icon: Award,
      title: 'Customized Content',
      description: 'Demos tailored to your specific industry and use cases'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Our <span className="text-cyan-400">Solutions</span> in Action
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
          </p>
        </section>

        {/* Demo Cards */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Available Demos</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of interactive demonstrations to see our solutions in action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                        {demo.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3">{demo.title}</h3>
                      <p className="text-gray-300 mb-4">{demo.description}</p>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Schedule Demo
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Book a Demo?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our demos are designed to give you a comprehensive understanding of our solutions and their potential impact on your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Request a Demo</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll schedule a personalized demo for you.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="demoType" className="block text-sm font-medium text-gray-300 mb-2">
                    Demo Type
                  </label>
                  <select
                    id="demoType"
                    name="demoType"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="">Select a demo type</option>
                    <option value="ai-analytics">AI Analytics Dashboard</option>
                    <option value="it-monitoring">IT Infrastructure Monitoring</option>
                    <option value="ai-chatbot">AI-Powered Chatbot</option>
                    <option value="cloud-migration">Cloud Migration Tool</option>
                    <option value="custom">Custom Demo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about your specific needs or questions"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See the Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a demo today and discover how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Demo Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoPage;