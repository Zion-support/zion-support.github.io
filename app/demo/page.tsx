import React from 'react';
import { Play, CheckCircle, Clock, Users, Award } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demoTypes = [
    {
      name: 'AI Services Demo',
      duration: '30 minutes',
      description: 'See our AI solutions in action with real-world examples',
      features: [
        'Live AI model demonstrations',
        'Custom use case examples',
        'Performance metrics',
        'Integration capabilities'
      ]
    },
    {
      name: 'Micro SAAS Demo',
      duration: '20 minutes',
      description: 'Explore our collection of AI-powered micro applications',
      features: [
        'Interactive app demonstrations',
        'Feature walkthroughs',
        'Pricing and plans',
        'Setup process'
      ]
    },
    {
      name: 'Enterprise Demo',
      duration: '60 minutes',
      description: 'Comprehensive enterprise solution demonstration',
      features: [
        'Custom solution showcase',
        'Security and compliance',
        'Scalability demonstration',
        'Integration planning'
      ]
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: 'Live Demonstrations',
      description: 'See our solutions in action with real data and scenarios'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get insights from our AI specialists and solution architects'
    },
    {
      icon: Award,
      title: 'Customized Experience',
      description: 'Tailored demonstrations based on your specific business needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See our AI and IT solutions in action. Schedule a personalized demonstration 
            tailored to your business needs and discover how we can help transform your operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Demos Conducted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Conversion Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-gray-300">No Cost</div>
            </div>
          </div>
        </div>

        {/* Demo Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoTypes.map((demo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{demo.name}</h3>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-green-600">Free</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{demo.duration}</span>
                  </div>
                  <p className="text-gray-600">{demo.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  Schedule Demo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Schedule a Demo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Request Form */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Schedule Your Demo
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Demo Type
                </label>
                <select className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                  <option value="">Select demo type</option>
                  <option value="ai-services">AI Services Demo</option>
                  <option value="micro-saas">Micro SAAS Demo</option>
                  <option value="enterprise">Enterprise Demo</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Tell us about your specific needs and requirements"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to See the Future?
          </h2>
          <p className="text-purple-100 mb-6">
            Don't wait to transform your business. Schedule your demo today and discover the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;