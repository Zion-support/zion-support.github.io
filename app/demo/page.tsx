import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Play, Pause, RotateCcw, Settings, Monitor, Smartphone, Tablet, Download, Share2 } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('ai-analytics');
  const [deviceView, setDeviceView] = useState('desktop');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics platform provides real-time insights and predictive analytics for your business.',
      duration: '2:30',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content automatically for your marketing campaigns.',
      duration: '1:45',
      features: ['Automated content creation', 'Multi-language support', 'SEO optimization', 'Brand consistency']
    },
    {
      id: 'micro-saas-crm',
      title: 'Zion AI CRM Pro',
      description: 'Experience our AI-powered CRM system that helps you manage customer relationships more effectively.',
      duration: '3:15',
      features: ['AI-powered lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting']
    },
    {
      id: '5g-iot-solutions',
      title: '5G IoT Solutions',
      description: 'Discover how our 5G IoT solutions can transform your business operations.',
      duration: '2:00',
      features: ['Ultra-low latency', 'Massive connectivity', 'Edge computing', 'Real-time monitoring']
    }
  ];

  const deviceViews = [
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' }
  ];

  const currentDemoData = demos.find(demo => demo.id === currentDemo);

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Watch live demos of Zion Tech Group's AI solutions, IT services, and 5G technology. See how our solutions can transform your business." />
        <meta name="keywords" content="demo, AI solutions demo, IT services demo, 5G technology demo, live demonstration" />
        <meta property="og:title" content="Demo - Zion Tech Group" />
        <meta property="og:description" content="See our solutions in action with live demos." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span> in Action
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the power of our AI solutions, IT services, and 5G technology through interactive demos. 
                See how we can transform your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selector */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Choose a Demo</h2>
                <p className="text-xl text-gray-300">Select a solution to see it in action</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setCurrentDemo(demo.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                      currentDemo === demo.id
                        ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/50'
                        : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-sm font-medium">{demo.duration}</span>
                      <Play className="w-4 h-4 text-cyan-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Player */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{currentDemoData?.title}</h2>
                <p className="text-gray-300">{currentDemoData?.description}</p>
              </div>

              {/* Device View Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-slate-800/50 rounded-lg p-2 flex space-x-2">
                  {deviceViews.map((device) => (
                    <button
                      key={device.id}
                      onClick={() => setDeviceView(device.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                        deviceView === device.id
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <device.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{device.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Demo Player */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/20">
                <div className={`mx-auto bg-slate-900 rounded-lg overflow-hidden ${
                  deviceView === 'desktop' ? 'w-full max-w-4xl' :
                  deviceView === 'tablet' ? 'w-full max-w-2xl' :
                  'w-full max-w-sm'
                }`}>
                  {/* Demo Header */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {currentDemoData?.title}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Demo Content */}
                  <div className="p-8 min-h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {isPlaying ? 'Demo Running...' : 'Click to Start Demo'}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {isPlaying 
                          ? 'Experience the full capabilities of our solution'
                          : 'Watch how our solution can transform your business'
                        }
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                        >
                          {isPlaying ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Play Demo
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 flex items-center"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentDemoData?.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Monitor className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;