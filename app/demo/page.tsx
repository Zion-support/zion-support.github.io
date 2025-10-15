import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demoCategories = [
    {
      title: 'AI Solutions',
      icon: CpuChipIcon,
      description: 'Experience our AI-powered tools and services',
      color: 'from-purple-500 to-pink-500',
      demos: [
        { name: 'AI Chatbot Builder', duration: '15 min', type: 'Interactive' },
        { name: 'Machine Learning Models', duration: '20 min', type: 'Live Demo' },
        { name: 'Natural Language Processing', duration: '10 min', type: 'Interactive' },
        { name: 'Computer Vision', duration: '15 min', type: 'Live Demo' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: CloudIcon,
      description: 'See our cloud solutions in action',
      color: 'from-blue-500 to-cyan-500',
      demos: [
        { name: 'Cloud Migration', duration: '25 min', type: 'Live Demo' },
        { name: 'Container Orchestration', duration: '20 min', type: 'Interactive' },
        { name: 'Serverless Architecture', duration: '15 min', type: 'Live Demo' },
        { name: 'Monitoring & Analytics', duration: '10 min', type: 'Interactive' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheckIcon,
      description: 'Explore our security solutions',
      color: 'from-green-500 to-emerald-500',
      demos: [
        { name: 'Security Audit Tools', duration: '20 min', type: 'Live Demo' },
        { name: 'Threat Detection', duration: '15 min', type: 'Interactive' },
        { name: 'Data Protection', duration: '10 min', type: 'Live Demo' }
      ]
    },
    {
      title: 'Data Analytics',
      icon: ChartBarIcon,
      description: 'Discover our analytics capabilities',
      color: 'from-yellow-500 to-orange-500',
      demos: [
        { name: 'Business Intelligence', duration: '20 min', type: 'Interactive' },
        { name: 'Predictive Analytics', duration: '25 min', type: 'Live Demo' },
        { name: 'Real-time Dashboards', duration: '15 min', type: 'Interactive' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: GlobeAltIcon,
      description: 'Try our micro software solutions',
      color: 'from-indigo-500 to-purple-500',
      demos: [
        { name: 'Task Manager Pro', duration: '10 min', type: 'Interactive' },
        { name: 'Analytics Dashboard', duration: '15 min', type: 'Live Demo' },
        { name: 'AI Content Generator', duration: '10 min', type: 'Interactive' }
      ]
    },
    {
      title: 'Development Tools',
      icon: RocketLaunchIcon,
      description: 'Explore our development solutions',
      color: 'from-pink-500 to-rose-500',
      demos: [
        { name: 'API Development', duration: '20 min', type: 'Live Demo' },
        { name: 'CI/CD Pipeline', duration: '15 min', type: 'Interactive' },
        { name: 'Code Quality Tools', duration: '10 min', type: 'Live Demo' }
      ]
    }
  ];

  const demoTypes = [
    {
      type: 'Live Demo',
      description: 'Real-time demonstration with our experts',
      icon: PlayIcon,
      color: 'text-blue-400'
    },
    {
      type: 'Interactive',
      description: 'Hands-on experience with our tools',
      icon: CheckCircleIcon,
      color: 'text-green-400'
    }
  ];

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Experience our AI and IT solutions firsthand. Schedule a personalized demo with our experts to see how we can transform your business."
        keywords="demo, schedule demo, AI demo, IT solutions demo, technology demonstration, free trial"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                See Our Solutions in Action
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the power of our AI and IT solutions firsthand. Schedule a personalized demo tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#schedule-demo" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Schedule Demo
                </a>
                <a href="#demo-categories" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Browse Demos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Categories */}
        <section id="demo-categories" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Demo <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of demonstrations covering all our services and solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.demos.map((demo, demoIndex) => (
                      <div key={demoIndex} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div>
                          <h4 className="text-white font-medium text-sm">{demo.name}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-gray-400 text-xs flex items-center">
                              <ClockIcon className="w-3 h-3 mr-1" />
                              {demo.duration}
                            </span>
                            <span className={`text-xs font-medium ${demo.type === 'Live Demo' ? 'text-blue-400' : 'text-green-400'}`}>
                              {demo.type}
                            </span>
                          </div>
                        </div>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors">
                          <PlayIcon className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Demo Form */}
        <section id="schedule-demo" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Schedule Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Personalized Demo</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and our team will contact you to schedule a demo tailored to your specific needs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Demo Category *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="development-tools">Development Tools</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Specific Interests</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs and what you'd like to see in the demo..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
                    <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-300">
                    I'd like to receive updates about new features and services
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule My Demo
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Schedule a <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our demos are designed to show you exactly how our solutions can address your specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personalized Experience',
                  description: 'Demos tailored to your industry and specific use cases',
                  icon: '🎯'
                },
                {
                  title: 'Expert Guidance',
                  description: 'Learn from our technical experts and solution architects',
                  icon: '👨‍💼'
                },
                {
                  title: 'Real-time Q&A',
                  description: 'Get immediate answers to your questions and concerns',
                  icon: '💬'
                },
                {
                  title: 'Custom Scenarios',
                  description: 'See how our solutions work with your specific data and processes',
                  icon: '🔧'
                },
                {
                  title: 'ROI Analysis',
                  description: 'Understand the potential return on investment for your business',
                  icon: '📊'
                },
                {
                  title: 'Implementation Plan',
                  description: 'Get a roadmap for successful implementation and adoption',
                  icon: '🗺️'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't wait to transform your business. Schedule your demo today and see the difference our solutions can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#schedule-demo" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Demo Now
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;