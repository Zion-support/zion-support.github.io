'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: '24/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
    },
    {
      icon: Users,
      title: 'Smart Ticket Routing',
      description: 'AI-powered ticket classification and routing to the most appropriate support agent based on expertise and workload.',
      benefits: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
    },
    {
      icon: Clock,
      title: 'Predictive Analytics',
      description: 'Predict customer issues before they occur and proactively reach out with solutions.',
      benefits: ['Issue Prediction', 'Proactive Support', 'Trend Analysis', 'Prevention Strategies']
    },
    {
      icon: Shield,
      title: 'Knowledge Base Integration',
      description: 'Seamlessly integrated knowledge base that provides accurate, up-to-date information to both AI and human agents.',
      benefits: ['Real-time Updates', 'Version Control', 'Search Optimization', 'Content Management']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small businesses',
      features: ['Up to 1,000 conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations']
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing companies',
      features: ['Up to 10,000 conversations/month', 'Advanced AI with learning', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations',
      features: ['Unlimited conversations', 'Custom AI training', '24/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AICustomerSupportPage;
