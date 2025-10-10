'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300 mb-4">
                Need something specific? We offer custom AI and IT solutions 
                tailored to your unique business requirements.
              </p>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-2"
              >
                <span>Contact us for a quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;