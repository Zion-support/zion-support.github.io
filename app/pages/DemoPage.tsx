import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and computer vision.',
      duration: '30 minutes',
      features: [
        'Live AI model demonstrations',
        'Real-time data processing',
        'Custom AI solution examples',
        'Q&A with AI experts'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions Demo',
      description: 'See our comprehensive IT services including cloud infrastructure, cybersecurity, and network management.',
      duration: '45 minutes',
      features: [
        'Cloud infrastructure walkthrough',
        'Security monitoring dashboard',
        'Network performance analysis',
        'IT consulting session'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Demo',
      description: 'Explore our micro SaaS solutions and see how they can streamline your business operations.',
      duration: '25 minutes',
      features: [
        'Micro SaaS platform tour',
        'Automation workflow examples',
        'Integration demonstrations',
        'Pricing and scaling options'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Learn about our advanced cybersecurity solutions and threat protection capabilities.',
      duration: '35 minutes',
      features: [
        'Threat detection simulation',
        'Security assessment tools',
        'Incident response procedures',
        'Compliance management features'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  const scheduleOptions = [
    {
      date: 'Today',
      times: ['10:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      date: 'Tomorrow',
      times: ['9:00 AM', '11:00 AM', '3:00 PM', '5:00 PM']
    },
    {
      date: 'This Week',
      times: ['Monday 10:00 AM', 'Wednesday 2:00 PM', 'Friday 11:00 AM']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a demo of our AI and IT solutions. See our technology in action and learn how it can benefit your business." />
        <meta name="keywords" content="demo, AI demo, IT demo, technology demonstration, product showcase" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo to see how our AI and IT solutions can transform your business. 
              Our experts will show you exactly how our technology works for your specific needs.
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'border-purple-500 bg-purple-900/30'
                      : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{demo.description}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            {demos.filter(demo => demo.id === selectedDemo).map((demo) => (
              <div key={demo.id} className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                    <p className="text-gray-300 mb-6">{demo.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">What you'll see:</h4>
                      <ul className="space-y-2">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <PlayIcon className="w-16 h-16 mx-auto mb-4" />
                      <p>Demo Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Schedule Your Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scheduleOptions.map((option, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{option.date}</h3>
                  <div className="space-y-3">
                    {option.times.map((time, timeIndex) => (
                      <button
                        key={timeIndex}
                        className="w-full text-left p-3 bg-slate-600 hover:bg-slate-500 rounded-lg text-white transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Request a Demo</h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Demo Type</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Select a demo type</option>
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>{demo.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your specific needs and questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your demo today and discover how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-3 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
