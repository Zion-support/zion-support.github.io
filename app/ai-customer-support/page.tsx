'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    {

      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']

    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Provide support across all customer touchpoints with consistent AI assistance.',
      benefits: ['Chat integration', 'Email automation', 'Phone support', 'Social media']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Get immediate answers to customer queries with 24/7 AI availability.',
      benefits: ['Real-time responses', '24/7 availability', 'Instant resolution', 'No wait times']
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for all customer interactions.',
      benefits: ['Data encryption', 'Compliance ready', 'High availability', 'Secure processing']
    }
  ];

              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI customer support platform combines cutting-edge technology with user-friendly design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </section>

              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered customer support solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
            </div>
          </div>
        </section>

export default PagePage;
=======
      </main>

      <Footer />
    </div>
  );
};

