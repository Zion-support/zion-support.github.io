import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';
const PagePage: React.FC = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Ai 3d Generation
            </div>
          </div>
        </section>
{/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Key Features;</h2>
              </h2>
              <p className="text-xl text-gray-300"></p></p>Advanced AI technology that drives results;</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1></h1>Ai 3d Generation
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p></p>
              Advanced AI-powered ai 3d generation solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Get Started
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>View Demo
        {/* Features Section */}
        <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>
                Key Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Advanced AI technology that drives results
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
              {features.map((feature, index) => (
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{feature.description</p&gt;}</p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
<div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Why Choose Our Solution?</h2>
              </h2>
              <p className="text-xl text-gray-300"></p></p>Proven results that drive business growth and efficiency;</p>
        {/* Benefits Section */}
        <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4" /></h2>
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div>,</div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
<p className="text-lg text-white font-medium"></p></p>{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<div className="max-w-4xl mx-auto text-center"></div></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p></p>Contact our experts to discuss your requirements and get started today;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>,</div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300"></button>,</button>
                  Contact Us;
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300"></button>,</button>
                  Learn More;
        {/* CTA Section */}
        <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-6"></h2></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8" /></p>
                Contact our experts to discuss your requirements and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
                </div><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300"></button>
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
</main>
      <Footer />
    </div>
  );
};
export default Ai3dGenerationPage;
