import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const demos = [
    {
      title: 'AI Solutions Demo',
      description: 'See how our AI solutions can transform your business processes',
      duration: '30 minutes',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cybersecurity Demo',
      description: 'Experience our comprehensive security solutions in action',
      duration: '45 minutes',
      features: ['Threat Detection', 'Security Monitoring', 'Incident Response', 'Compliance Management']
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions and infrastructure management',
      duration: '40 minutes',
      features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization', 'Performance Monitoring']
    },
    {
      title: 'Digital Transformation Demo',
      description: 'Learn how to modernize your business with digital solutions',
      duration: '35 minutes',
      features: ['Process Automation', 'Change Management', 'Data Analytics', 'Innovation Consulting']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a demo of Zion Tech Group's AI and IT solutions. See our technology in action." />
        <meta name="keywords" content="demo, AI solutions, IT solutions, cloud computing, cybersecurity, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our AI and IT solutions through interactive demos. 
              See how our technology can transform your business.
            </p>
          </div>

          {/* Demo Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {demos.map((demo, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{demo.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">What You'll See:</h4>
                  <ul className="space-y-2">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            ))}
          </div>

          {/* Demo Request Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Demo</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Demo Request Submitted!</h3>
                <p className="text-gray-300">We'll contact you within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Demo Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a demo type</option>
                    {demos.map((demo, index) => (
                      <option key={index} value={demo.title}>
                        {demo.title} ({demo.duration})
                      </option>
                    ))}
                    <option value="custom">Custom Demo</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule My Demo
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-gray-300 mb-6">
              Contact our sales team directly for immediate support and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-302-464-0950"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us: +1-302-464-0950
              </a>
              <a
                href="mailto:sales@ziontechgroup.com"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <UserIcon className="w-5 h-5 mr-2" />
                Email Sales Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;