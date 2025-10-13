import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, PenTool, Zap, Users, BarChart3 } from 'lucide-react'
const AIContentWriterPage: React.FC = () => {
const features = [
];
};
    {
;
  const benefits = [
    'Increase content production by 10x',
    'Improve engagement by 200%',
    'Save 50+ hours per week',
    'Reduce content costs by 70%',
    'Enable consistent branding',
    'Automate content workflows'
      <Helmet /><title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Professional AI content writer solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai content writer, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" /><Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center" /><h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Content Writer;
            </h1><span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions</span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create high-quality content with our AI Content Writer. Advanced writing tools, 
            templates, and optimization features for better content creation.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today;
              </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo</button>
            </button>
          </div>
        </div>
      </section>
{/* Stats Section */}
      <section className="py-16 px-4" /><div className="max-w-6xl mx-auto" /><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              </div><div key={index} className="text-center" /><div className="flex justify-center mb-4">
                  {stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      {/* Features Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-4xl font-bold text-white mb-4">AI Content Writer Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs</p>
            </p>
          </div>
            {features.map((feature, index) => (
              </div><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group" /><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" /><CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    </ul><li key={benefitIndex} className="flex items-center text-sm text-gray-400" /><CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Writer?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              </div><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center" /><div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center" /><CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" /><div className="max-w-4xl mx-auto text-center" /><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing Content?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating high-quality content with our AI-powered writing assistant today.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Writing Now</button>
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More</button>
              </button>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
                  )}
          </div><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group" /><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" /><CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        <Footer />
      </div>
    </>
  );
};
<Footer />
    </div>
  )
}
export default AIContentWriterPage;
;