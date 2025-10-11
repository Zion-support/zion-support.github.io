'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    
      icon: Brain,
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any coding knowledge.',
      benefits: [''Drag-and-drop interface', 'Visual workflow builder', 'Pre-built templates', 'Easy customization''];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: [''Website integration', 'Social media bots', 'Mobile apps', 'API integration'']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics.',
      benefits: [''Conversation analytics', 'User engagement metrics', 'Performance insights', 'A/B testing'']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance features.',
      benefits: [''Data encryption', 'GDPR compliance', 'SOC 2 certified', 'Secure hosting'']
    },
  ];
  const useCases = const useCases = const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with intelligent responses.',
      benefits: [''Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support''];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically.',
      benefits: [''Qualified leads', 'Higher conversion rates', 'Automated follow-up', 'Lead scoring'']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases.',
      benefits: [''Product recommendations', 'Order assistance', 'Inventory queries', 'Checkout support'']
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and employee support.',
      benefits: [''HR assistance', 'IT support', 'Process automation', 'Knowledge base'']
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create, deploy, and manage AI-powered chatbots for customer support, lead generation, and more." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, chatbot platform" />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center">
              </div></div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot Builder;
              </h1></h1></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create intelligent chatbots without coding. Build, deploy, and manage AI-powered;
                conversational experiences that engage your customers and drive results.
              </p></p></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div></div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Building;
                </button></button></button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo;
                </button></button></button>
              </div>
            </div>
          </div>
        </section>

      </main>)
    </>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
} {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features;
              </h2></h2></h2>
              <p className="text-xl text-gray-300">
                Everything you need to build and deploy intelligent chatbots;
              </p></p></p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div></div><div key=index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  </div></div><feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3></h3></h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p></p></p>)
                  <ul className="space-y-2">)
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key=benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit})
                      </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}

              </h2>
              <p className="text-xl text-gray-300">
                Discover how chatbots can transform your business;
              </p></p></p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                </div></div><div key=index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  </div></div><h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3></h3></h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p></p></p>)
                  <ul className="space-y-2">)
                    {useCase.benefits.map((benefit, idx) => (
                      <li key=idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit})
                      </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-4xl mx-auto text-center">
            </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Chatbot?
            </h2></h2></h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building your intelligent chatbot today and transform your customer experience.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Building;
              </button></button></button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales;
              </button></button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </section>
      </main>
      
      <Footer / /></Footer>
    </>
  );
};
