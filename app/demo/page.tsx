  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7',
      category: 'AI Solutions',
      duration: '5 min',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Integration capabilities'
      ],
      thumbnail: '/demos/chatbot.jpg'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Dashboard',
      description: 'Explore our powerful analytics platform with real-time insights and visualizations',
      category: 'Analytics',
      duration: '8 min',
      features: [
        'Real-time data processing',
        'Interactive visualizations',
        'Custom reporting',
        'Predictive analytics'
      ],
      thumbnail: '/demos/analytics.jpg'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'See how we manage and scale cloud resources for optimal performance',
      category: 'Cloud',
      duration: '6 min',
      features: [
        'Auto-scaling capabilities',
        'Load balancing',
        'Security monitoring',
        'Cost optimization'
      ],
      thumbnail: '/demos/cloud.jpg'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Witness our advanced security solutions in action with threat detection',
      category: 'Security',
      duration: '7 min',
      features: [
        'Threat detection',
        'Incident response',
        'Compliance monitoring',
        'Security analytics'
      ],
      thumbnail: '/demos/security.jpg'
    }
      <Helmet>
        <title>Interactive Demos | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations." />
        <meta name="keywords" content="demos, AI demos, interactive demos, technology showcase, solution demonstrations" />
      </Helmet>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                  <span className="bg-slate-700 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full">
                    {demo.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-center text-sm">{demo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{demo.duration}</span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    4.9
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Player */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {selectedDemoData && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedDemoData.title}</h3>
                  <p className="text-gray-300">{selectedDemoData.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Demo Video Placeholder */}
              <div className="relative bg-slate-900 rounded-xl overflow-hidden mb-6">
                <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </div>
                    <p className="text-lg font-semibold">Demo Video</p>
                    <p className="text-sm opacity-80">Click to play</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>0:00 / {selectedDemoData.duration}</span>
                      <div className="flex items-center space-x-2">
                        <button className="hover:bg-white/20 p-1 rounded">
                          <RotateCcw className="w-4 h-4" />
                        </button>
                        <button className="hover:bg-white/20 p-1 rounded">
                          <Settings className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Demo Controls</h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Play Demo
                        </>
                      )}
                    </button>
                    <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Restart Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts and see how our solutions 
              can specifically address your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
