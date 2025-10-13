import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';'';
const AiAutonomousSystemsPage: React.FC = () => {
  
  
  
const features = [
  
    {
  
      icon: Brain,
      icon: '🚗'''    },
    {
  
      title: 'Smart Manufacturing',''      description: 'Autonomous robots and systems for industrial automation and production.',''      icon: Factory
    },
    {
  
      title: 'Healthcare Systems',''      description: 'Autonomous medical devices and systems for patient care and treatment.',''      icon: Stethoscope
    },
    {
  
      title: 'Smart Cities',''      description: 'Autonomous infrastructure systems for urban management and optimization.',''      icon: Building
    }
  ];
>>>>>>> cursor/delete-records-a75e

export default function PagePage() {
  return (
  
    <>
<Helmet>
<title>AI Autonomous Systems - Zion Tech Group</title>
<meta name="description" content="Build intelligent autonomous systems with our AI solutions. Self-driving vehicles, smart manufacturing, and autonomous infrastructure for the future." /></Helmet>""<Navigation />
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},''    {icon: BarChart,
    },
    {
  
      icon: BarChart,
      title: 'Advanced Analytics',''      description: 'Comprehensive analytics dashboard with real-time data visualization.',''      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']''    }
  ];
const benefits = [
  
'Increase efficiency by up to 50%',''    'Reduce costs by 30% with automation',''    'Improve decision-making with AI insights',''    'Scale operations without proportional staff increases',''    'Gain competitive advantage with advanced technology'''  ];

    },
  ]
>>>>>>> origin/main
  return (
  
    <>
</>
<Helmet>
<title>AI Autonomous Systems - Zion Tech Group</title>
<meta name="description" content="Cutting-edge autonomous systems powered by advanced AI technology." />""<meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous technology, AI solutions, intelligent automation" />""<Navigation />
<section className="relative py-20 px-4 overflow-hidden"></section>""<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />""<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />'"'<div className="relative max-w-7xl mx-auto text-center">""<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">""              Ai Autonomous Systems
            </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">""              Advanced AI-powered ai autonomous systems solution for modern businesses.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">""<button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">""                Get Started
              </button>
<button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">""                View Demo
              </button></div>
</div></section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">""                Key Features
              </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">""                Advanced AI technology that drives results
              </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""              {features.map((feature, index) => (
  
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">""<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">""<feature.icon className="w-8 h-8 text-white" /></div>""<h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>""<p className="text-gray-300 mb-4">{feature.description}</p>""                  {feature.benefits && (
  
                    <ul className="space-y-2">""                      {feature.benefits.map((benefit, idx) => (
  
                        <li key={idx} className="flex items-center text-sm text-gray-400">""<CheckCircle className="w-4 h-4 text-green-400 mr-2" />""                          {benefit}
                        </li>
                      ))}
                    </ul></div>
</div>
              ))}
            </div></div>
</section>

        {/* Benefits Section */}
        <section className="py-20 px-4"></section>""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">""                Why Choose Our Solution?
              </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">""                Proven results that drive business growth and efficiency
              </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""              {benefits.map((benefit, index) => (
  
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">""<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">""<CheckCircle className="w-8 h-8 text-white" /></div>""<p className="text-lg text-white font-medium">{benefit}</p></div>""              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>""<div className="max-w-4xl mx-auto text-center">""<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">""<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">""                Ready to Get Started?
              </h2>
<p className="text-xl text-gray-300 mb-8">""                Contact our experts to discuss your requirements and get started today.
              </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">""<button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">""                  Contact Us
                </button>
<button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">""                  Learn More
                </button></div>
            ))}
          ))
</section></div>
<Footer />

  );
}
export default AiAutonomousSystemsPage;
                  Learn More,

              </div></div>
</div></section>
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,</h2>""                Powerful AI Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how our AI platform can revolutionize your business operations.</p></p>""</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>""              {features.map((feature, index) => (
  
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>""<div className="flex items-center mb-4">""<feature.icon className="h-8 w-8 text-blue-600 mr-3" />""<h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3></div>""<p className="text-gray-600 mb-4">{feature.description</p>}</p>""<ul className="space-y-2">""                    {feature.benefits.map((benefit, benefitIndex) => (
  
                      <li key={benefitIndex}className="flex items-center text-sm text-gray-600">""<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />""                        {benefit} </li>
                    ))}
              ))}
            </div></div>
</section>
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>""<div className="max-w-4xl mx-auto text-center">""<h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>""              Ready to Transform Your Business?
            </h2>
<p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using our AI platform.</p></p>""<button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>""              Start Your Free Trial,

          </div>
            {features.map((feature, index) => (
  
              <div key={index}className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-blue-400/50 transition-all duration-300 group">,</div>""<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300">,</div>""<CheckCircle className="w-6 h-6 text-white" /></div>""<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""<p className="text-gray-300 mb-4">{feature.description</p>}</p>""<ul className="space-y-2">""                  {feature.benefits.map((benefit, benefitIndex) => (
  
                    <li key={benefitIndex}className="flex items-center text-sm text-gray-400">""<CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />""                      {benefit} </li>
                  ))}
            ))}
          </div></div>
</section>
      {/* Benefits Section */} <section className="py-20 px-4">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2>""<p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions;</p></""          </div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>""            {benefits.map((benefit, index) => (
  
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">""<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">""<CheckCircle className="w-8 h-8 text-white" />""<h3 className="text-lg font-semibold text-white">{benefit}""            ))}
          </div></div>
</section>
      {/* CTA Section */} <section className="py-20 px-4">""<div className="max-w-4xl mx-auto text-center">""<h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>""<p className="text-xl text-gray-300 mb-8">Transform your business with our page solutions today;</p></""          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>""<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>""              Start Free Trial;
  </
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>""              Contact Sales;
  </
          </div></div>
</section>
<Footer/ />
</div>
  ),
}
export default PagePage;
  </button></button>
</p></p>
</button></h2>
</button></button>
</h1></main>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> cursor/delete-records-a75e
