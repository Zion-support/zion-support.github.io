import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  CalendarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demoFeatures = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered tools and see how they can transform your business',
      duration: '30 minutes',
      features: ['AI Chatbot Builder', 'Document Processor', 'Predictive Analytics', 'Content Generator']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions and infrastructure management capabilities',
      duration: '45 minutes',
      features: ['Cloud Migration', 'Scalability Solutions', 'Security Features', 'Cost Optimization']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics Demo',
      description: 'See how our analytics solutions can turn your data into actionable insights',
      duration: '30 minutes',
      features: ['Real-time Dashboards', 'Predictive Modeling', 'Data Visualization', 'Custom Reports']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Demo',
      description: 'Learn about our security solutions and threat protection capabilities',
      duration: '45 minutes',
      features: ['Security Assessment', 'Threat Monitoring', 'Compliance Tools', 'Incident Response']
    }
  ];

  const benefits = [
    'See solutions in action',
    'Ask questions to our experts',
    'Get personalized recommendations',
    'Understand implementation process',
    'See real ROI calculations',
    'No commitment required'
  ];

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business with a free, no-obligation demonstration."
        keywords="demo, AI demo, IT solutions demo, technology demonstration, free demo, personalized demo"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Schedule a Demo</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              See our AI and IT solutions in action with a personalized demonstration tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#demo-form" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Now
              </a>
              <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>

          {/* Demo Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {demoFeatures.map((demo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <demo.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {demo.duration}
                </div>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#demo-form" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-semibold">
                  Schedule Demo
                </a>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Schedule a Demo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Form */}
          <div id="demo-form" className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Schedule Your Demo</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 mb-2">
                    Demo Type *
                  </label>
                  <select
                    id="demoType"
                    name="demoType"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a demo type</option>
                    <option value="ai-solutions">AI Solutions Demo</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure Demo</option>
                    <option value="data-analytics">Data Analytics Demo</option>
                    <option value="cybersecurity">Cybersecurity Demo</option>
                    <option value="custom">Custom Demo</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold"
                >
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us directly for immediate assistance or to schedule a demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;