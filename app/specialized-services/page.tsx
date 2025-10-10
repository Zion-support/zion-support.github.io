'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const PagePage: React.FC = () => {}
return (;
const features="[]"
    {}
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {}
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {}
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {}
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {}
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your solutions globally with intelligent distribution.',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
    {}
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security to protect your data and operations.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];
  const benefits="[]"
    'Transform your business with AI technology',
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Optimize business processes and workflows',
    'Reduce costs through intelligent automation',
    'Gain competitive advantage with advanced technology'
  ];
  return (
    <>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content=""Advanced page solution powered by artificial intelligence." /></meta>"
        <meta name="keywords" content=""page" /></meta>"
      </Helmet>
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <Navigation /></Navigation>
        {/* Hero Section */}
        <section className=""pt-20 pb-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h1 className=""text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
                Page;
              </h1>
              <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
                Advanced page solution powered by artificial intelligence.
              </p>
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a href=""/contact"></a>"
                  className=""bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">"
                  <span>Get Started</span>
                  <ArrowRight className=""w-5 h-5" /></ArrowRight>"
                </a>
                <a href=""#features"></a>"
                  className=""border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">"
                  <span>Learn More</span>
                  <ArrowRight className=""w-5 h-5" /></ArrowRight>"
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
);
}
        </section>
        {/* Features Section */}
        <section id="features" className=""py-20"></section>"
          <div className=""container mx-auto px-4"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-4xl font-bold text-white mb-6">Powerful Features</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Our comprehensive platform provides everything you need to succeed.
              </p>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {features.map((feature, index) => (
                <div key={index} className=""bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300"></div>"
                  <div className=""bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6"></div>"
                    <feature.icon className=""w-6 h-6 text-cyan-400" /></feature>"
                  </div>
                  <h3 className=""text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className=""text-gray-300 mb-6">{feature.description}</p>"
                  <ul className=""space-y-2"></ul>"
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className=""flex items-center text-gray-300"></li>"
                        <CheckCircle className=""w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
                        <span className=""text-sm">{benefit}</span>"
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className=""text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                <p className=""text-gray-300">{feature.description}</p>"
              </div>
            ));
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=""py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>"
        <div className=""max-w-7xl mx-auto"></div>"
          <div className=""text-center mb-16"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Key Benefits;
            </h2>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Experience the power of our page solutions for your business.
            </p>
          </div>
          <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
            {benefits.map((benefit, index) => (
              <div key={index} className=""flex items-start space-x-3"></div>"
                <CheckCircle className=""h-6 w-6 text-purple-400 mt-1 flex-shrink-0" /></CheckCircle>"
                <p className=""text-gray-300 text-lg">{benefit}</p>"
              </div>
            ));
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=""py-20 px-4 sm:px-6 lg:px-8"></section>"
        <div className=""max-w-4xl mx-auto text-center"></div>"
          <div className=""bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Ready to Get Started?
            </h2>
            <p className=""text-xl text-purple-100 mb-8"></p>"
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <button className=""bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>"
                <Phone className=""mr-2 h-5 w-5" /></Phone>"
                Call Now;
              </button>
              <button className=""border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>"
                <Mail className=""mr-2 h-5 w-5" /></Mail>"
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>)
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className=""py-20 bg-slate-800/50"></section>"
          <div className=""container mx-auto px-4"></div>"
            <div className=""grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>"
              <div></div>
                <h2 className=""text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>"
                <p className=""text-lg text-gray-300 mb-8"></p>"
                  Our platform is designed to help you achieve your goals efficiently and effectively.
                </p>
                <ul className=""space-y-4"></ul>"
                  {benefits.map((benefit, index) => (
                    <li key={index} className=""flex items-start"></li>"
                      <CheckCircle className=""w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" /></CheckCircle>"
                      <span className=""text-gray-300">{benefit}</span>"
                    </li>
                  ))}
                </ul>
              </div>
              <div className=""relative"></div>"
                <div className=""bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10"></div>"
                  <div className=""text-center"></div>"
                    <div className=""bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"></div>"
                      <Brain className=""w-10 h-10 text-cyan-400" /></Brain>"
                    </div>
                    <h3 className=""text-2xl font-bold text-white mb-4">AI-Powered</h3>"
                    <p className=""text-gray-300 mb-6"></p>"
                      Leverage the power of artificial intelligence to transform your business.
                    </p>
                    <div className=""grid grid-cols-2 gap-4 text-center"></div>"
                      <div></div>
                        <div className=""text-3xl font-bold text-cyan-400">99.9%</div>"
                        <div className=""text-gray-300 text-sm">Uptime</div>"
                      </div>
                      <div></div>
                        <div className=""text-3xl font-bold text-purple-400">50ms</div>"
                        <div className=""text-gray-300 text-sm">Response Time</div>"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=""py-20"></section>"
          <div className=""container mx-auto px-4 text-center"></div>"
            <div className=""bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10"></div>"
              <h2 className=""text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>"
              <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
                Join hundreds of companies that have already transformed their business with our solutions.
              </p>
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a href=""/contact"></a>"
                  className=""bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">"
                  <span>Get Started Now</span>
                  <ArrowRight className=""w-5 h-5" /></ArrowRight>"
                </a>
                <a href=""/pricing"></a>"
                  className=""border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">"
                  <span>View Pricing</span>
                  <ArrowRight className=""w-5 h-5" /></ArrowRight>"
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer /></Footer>
      </div>
    </>
  );
};
export default PagePage;
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
;