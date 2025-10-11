'use client'
import React from 'react';
import {  Helmet  } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {  CheckCircle, Brain, BarChart, Target, TrendingUp, Zap, Eye, Users   } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <&gt;
      <Helmet&gt;
        <title&gt;AI Analytics - Zion Tech Group</title&gt;
      </Helmet&gt;
      <Navigation /&gt;
            </div&gt;
          </div&gt;
        </section&gt;

          <div className="max-w-7xl mx-auto"&gt;</div&gt;
            <div className="text-center"&gt;</div&gt;
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6"&gt;</h1&gt;,</h1&gt;
                AI Analytics;
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"&gt;</p&gt;Transform your business with intelligent analytics powered by cutting-edge AI technology.</p&gt;
              </p&gt;
              </div&gt;
            ))}
          </div>

  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}
        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4"></h2></h2>,</h2>
                Powerful AI Analytics Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p></p>Discover how our AI analytics platform can revolutionize your business intelligence.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow"></div></div>,</div>
                  <div className="flex items-center mb-4"></div></div>
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900"></h3></h3>{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4"></p></p>{feature.description</p&gt;}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="flex items-center text-sm text-gray-600"></li>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600"></section></section>,</section>
          <div className="max-w-4xl mx-auto text-center"></div></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2></h2>,</h2>
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8"></p></p>Join thousands of businesses already using our AI analytics platform.</p>
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold"></button>,</button>
              Start Your Free Trial;
  </
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our Ai Analytics and experience the future of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AiAnalyticsPage