  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (pricing: typeof services[0]['pricing']) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    }
    
    let price = pricing.starting;
    if (billingPeriod === 'year' && pricing.period === 'month') {
      price = price * 12 * 0.8; // 20% discount for annual billing
    }
    
    const period = billingPeriod === 'year' && pricing.period === 'month' ? 'year' : pricing.period;
    return `$${Math.round(price).toLocaleString()}/${period === 'month' ? 'mo' : period === 'year' ? 'yr' : 'one-time'}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Star;
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Automation',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users',
        'Standard Security',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Real-time Monitoring',
        'Up to 25 Users',
        'Enhanced Security',
        'Advanced Analytics',
        'Custom Integrations',
        '24/7 Phone Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Development',
        'Dedicated Support Team',
        'Real-time Dashboards',
        'Unlimited Users',
        'Enterprise Security',
        'Custom Analytics',
        'Full Integration Support',
        '24/7 Dedicated Support',
        'SLA Guarantee',
        'Custom Training'
      ],
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart, Target, MessageSquare, Database, Settings, Network, RefreshCw } from 'lucide-react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,500',
      period: '/month',
      features: [
        'Basic AI automation tools',
        'Up to 5 AI models',
        'Email support',
        'Standard analytics',
        'Basic integrations',
        'Monthly reporting'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: '$7,500',
      period: '/month',
      features: [
        'Advanced AI automation suite',
        'Up to 25 AI models',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations',
        'Real-time monitoring',
        'Dedicated account manager',
        'Training & onboarding'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$18,000',
      period: '/month',
      features: [
        'Complete AI platform access',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Custom AI development',
        'White-label solutions',
        'Advanced security & compliance',
        'Dedicated team',
        'SLA guarantee',
        'Custom training programs',
        'Quarterly business reviews'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
      popular: false
    }
  ];

              </div>
            </div>
          </div>
        </section>

            </div>
          </div>
        </section>

                    </div>
                  </div>
                </div>
              </div>
=======
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
  );
};

export default PricingPage;