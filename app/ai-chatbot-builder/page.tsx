'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = const features = const features = [
    {
      icon: Brain,
      title: 'No-Code Builder',;
      description: 'Create sophisticated chatbots without any coding knowledge.',;
      benefits: ['Drag-and-drop interface', 'Visual workflow builder', 'Pre-built templates', 'Easy customization'];
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: ['Website integration', 'Social media bots', 'Mobile apps', 'API integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics.',
      benefits: ['Conversation analytics', 'User engagement metrics', 'Performance insights', 'A/B testing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'GDPR compliance', 'SOC 2 certified', 'Secure hosting']
    },
  ];
  const useCases = const useCases = const useCases = [
    {
      title: 'Customer Support',;
      description: 'Provide 24/7 customer support with intelligent responses.',;
      benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support'];
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically.',
      benefits: ['Qualified leads', 'Higher conversion rates', 'Automated follow-up', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases.',
      benefits: ['Product recommendations', 'Order assistance', 'Inventory queries', 'Checkout support']
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and employee support.',
      benefits: ['HR assistance', 'IT support', 'Process automation', 'Knowledge base']
    },
  ];

  return ()
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}, {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Everything you need to build and deploy intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {features.map((feature, index) => ()
                    {feature.benefits.map((benefit, benefitIndex) => ()
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}

              </h2>
              <p className="text-xl text-gray-300" /></p>
                Discover how chatbots can transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" /></div>
              {useCases.map((useCase, index) => ()
                    {useCase.benefits.map((benefit, idx) => ()
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /></h2>
              Ready to Build Your Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Start building your intelligent chatbot today and transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" /></button>
                Start Building
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors" /></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer / /></Footer>
    </>
  );
};
