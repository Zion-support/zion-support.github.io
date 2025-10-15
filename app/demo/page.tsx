import React from 'react';
import SEOHead from '../components/SEOHead';

const DemoPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Schedule Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business."
        keywords="demo, schedule demo, AI demo, IT solutions demo, technology demonstration"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Schedule a Demo</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              See our AI and IT solutions in action. Schedule a personalized demonstration 
              tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request Your Demo</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an area of interest</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-solutions">IT Solutions</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
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
                    placeholder="Tell us about your specific needs and what you'd like to see in the demo..."
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
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Demo</h3>
                    <p className="text-gray-600">We'll tailor the demonstration to your specific business needs and challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Expert Consultation</h3>
                    <p className="text-gray-600">Get insights from our AI and IT experts on how our solutions can benefit your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Live Demonstration</h3>
                    <p className="text-gray-600">See our solutions in action with real-time demonstrations and interactive examples.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ROI Analysis</h3>
                    <p className="text-gray-600">Understand the potential return on investment and business impact of our solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Duration</h3>
                <p className="text-gray-600 mb-4">
                  Our demos typically last 30-45 minutes and can be conducted in-person, via video call, or at your office.
                </p>
                <div className="text-sm text-gray-500">
                  <p>📅 <strong>Available Times:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                  <p>⏱️ <strong>Duration:</strong> 30-45 minutes</p>
                  <p>📍 <strong>Location:</strong> Your choice (in-person or virtual)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't wait for a scheduled demo? Contact us directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <strong>Website:</strong> https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;