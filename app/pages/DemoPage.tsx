import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, Download, Calendar, Users, Star } from 'lucide-react'

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience our powerful AI analytics platform with real-time data visualization and insights.',
      duration: '15 minutes',
      category: 'AI Solutions',
      rating: 4.8,
      features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Insights', 'Data Export']
    },
    {
      title: '5G Network Simulation',
      description: 'See how 5G technology can transform your business operations with our interactive simulation.',
      duration: '20 minutes',
      category: '5G Technology',
      rating: 4.9,
      features: ['Network Performance', 'IoT Integration', 'Edge Computing', 'Security Features']
    },
    {
      title: 'Cloud Migration Tool',
      description: 'Test our cloud migration assessment tool to see how we can help optimize your infrastructure.',
      duration: '10 minutes',
      category: 'Cloud Services',
      rating: 4.7,
      features: ['Migration Planning', 'Cost Analysis', 'Security Assessment', 'Performance Optimization']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demos, AI demos, 5G demos, cloud demos, interactive demonstrations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand with our interactive demonstrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Demo
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Available Demos
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Choose from our range of interactive demonstrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {demo.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">{demo.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {demo.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{demo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Self-paced</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Start Demo</span>
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Live Demo?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Schedule a personalized demo with our experts to see how our solutions can meet your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Live Demo
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DemoPage