import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const DemoPage = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business data into actionable insights.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      duration: '15 minutes',
      category: 'AI Solutions'
    },
    {
      title: 'Cloud Migration Demo',
      description: 'Experience our cloud migration process and see the benefits for your business.',
      features: ['Migration planning', 'Security assessment', 'Cost optimization', 'Performance monitoring'],
      duration: '20 minutes',
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Explore our comprehensive cybersecurity solutions and threat detection capabilities.',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      duration: '25 minutes',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Automation Workflow',
      description: 'Watch how AI automation can streamline your business processes and reduce manual work.',
      features: ['Process automation', 'Workflow optimization', 'Error reduction', 'Time savings'],
      duration: '18 minutes',
      category: 'AI Solutions'
    }
  ]

  const benefits = [
    {
      icon: Eye,
      title: 'See It In Action',
      description: 'Watch our solutions work with real data and scenarios'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our AI experts'
    },
    {
      icon: Target,
      title: 'Customized Demo',
      description: 'Tailored demonstrations based on your specific needs'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See our AI and IT solutions in action. Schedule a personalized demo to discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors">
              Watch Video
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Request a Demo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Available Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800/70 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    {demo.category}
                  </span>
                  <span className="text-gray-400 text-sm">{demo.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{demo.title}</h3>
                <p className="text-gray-300 mb-6">{demo.description}</p>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Request Demo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Form */}
        <div className="mb-16">
          <div className="bg-slate-800/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Schedule Your Demo</h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="demoType" className="block text-sm font-medium text-gray-300 mb-2">
                  Demo Type
                </label>
                <select
                  id="demoType"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a demo type</option>
                  <option value="ai-analytics">AI Analytics Dashboard</option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="cybersecurity">Cybersecurity Suite</option>
                  <option value="ai-automation">AI Automation Workflow</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your specific needs and questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your demo today and discover how our AI and IT solutions can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DemoPage