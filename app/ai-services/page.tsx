import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['24/7 customer support', 'Lead qualification', 'FAQ automation', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting', 'Data visualization', 'Trend analysis'],
      price: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with intelligent AI assistance.',
      features: ['Smart email sorting', 'Auto-responses', 'Meeting scheduling', 'Priority detection', 'Email templates', 'Spam filtering'],
      price: 'Starting at $19/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Integrate voice-activated AI assistants into your applications and workflows.',
      features: ['Voice commands', 'Speech recognition', 'Natural language processing', 'Multi-platform support', 'Custom wake words', 'API integration'],
      price: 'Starting at $59/month',
      link: '/ai-voice-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management', 'Custom triggers', 'Performance monitoring'],
      price: 'Starting at $79/month',
      link: '/ai-automation',
      popular: true
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'AI Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality control', 'Document processing'],
      price: 'Starting at $89/month',
      link: '/ai-computer-vision',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend analysis', 'Risk assessment', 'Performance prediction', 'Scenario planning', 'Market forecasting', 'Customer behavior analysis'],
      price: 'Starting at $99/month',
      link: '/ai-predictive-analytics',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets and detect threats.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', 'Risk assessment', 'Incident response'],
      price: 'Starting at $149/month',
      link: '/ai-cybersecurity',
      popular: false
    }
  ];

  const benefits = [
    {
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Custom Solution',
      description: 'We design and develop tailored AI solutions for your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration with your existing systems.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for maximum performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
              </div>
            ))}
          </div>
        </div>
      </section>

                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.pricing}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
          </div>
        </section>
      )}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
}