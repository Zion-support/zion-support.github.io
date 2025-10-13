import React, { useState } from 'react';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Lock,
  Headphones,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
  Database,
  Cpu,
  Brain,
  Rocket
} from 'lucide-react';';
const Pricing: React.FC = () => {;
const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');';
const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
const plans = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'starter','
      name: 'Starter','
      description: 'Perfect for small businesses and startups','
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Limited AI model access','
        'Basic analytics only','
        'No custom development','
        'Standard response time''
      ],
      color: 'from-blue-500 to-cyan-500','
      price: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        monthly: 99,
        annual: 79
      },
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Up to 5 AI-powered workflows','
        'Basic automation templates','
        'Email support','
        'Standard integrations','
        '1 GB data storage','
        'Basic analytics dashboard','
        'Community forum access','
        'Monthly reports''
      ],
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Limited to 3 team members','
        'Basic customization options','
        'Standard response time (24 h)''
      ],
      icon: Rocket,
      popular: false
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'professional','
      name: 'Professional','
      description: 'Ideal for growing businesses and teams','
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Limited quantum computing access','
        'Standard compliance features','
        'No dedicated account manager''
      ],
      color: 'from-purple-500 to-pink-500','
      price: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        monthly: 299,
        annual: 239
      },
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Up to 25 AI-powered workflows','
        'Advanced automation templates','
        'Priority email support','
        'Premium integrations','
        '10 GB data storage','
        'Advanced analytics dashboard','
        'Priority community access','
        'Weekly reports','
        'Custom workflow builder','
        'Team collaboration tools','
        'API access','
        'Advanced security features''
      ],
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Limited to 15 team members','
        'Advanced customization options','
        'Priority response time (8 h)''
      ],
      icon: TrendingUp,
      popular: true
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'enterprise','
      name: 'Enterprise','
      description: 'For large organizations with complex needs','
        '24/7 priority support','
        'Custom integrations','
        'On-site training','
        'SLA guarantees','
        'Compliance certifications''
      ],
      limitations: [],
      color: 'from-orange-500 to-red-500',';
import React from 'react';';
import { Link } from 'react-router-dom';';';
export default function Pricing() {;
const pricingPlans = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Starter','
      price: '$999','
      period: '/month','
      description: 'Perfect for small businesses starting their AI journey','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'AI Business Intelligence Dashboard','
        'Basic Cybersecurity Assessment','
        'Cloud Infrastructure Setup','
        '24/7 Support','
        'Monthly Reports','
        'Basic Training''
      ],
      cta: 'Get Started','
      popular: false
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Professional','
      price: '$2,499','
      period: '/month','
      description: 'Ideal for growing companies with advanced needs','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Everything in Starter','
        'Advanced AI & Machine Learning','
        'Quantum-Safe Security','
        'Custom Micro SAAS Solutions','
        'Priority Support','
        'Weekly Reports','
        'Advanced Training','
        'API Access''
      ],
      cta: 'Start Free Trial','
      popular: true
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Enterprise','
      price: 'Custom','
      period: '','
      description: 'Tailored solutions for large organizations','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Everything in Professional','
        'Custom AI Development','
        'Quantum Computing Solutions','
        'Full-Stack Development','
        'Dedicated Support Team','
        'Custom Integrations','
        'On-site Training','
        'SLA Guarantees''
      ],
      cta: 'Contact Sales','
      price: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        monthly: 999,
        annual: 799
      },
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Unlimited AI-powered workflows','
        'Custom automation templates','
        '24/7 phone & email support','
        'Enterprise integrations','
        'Unlimited data storage','
        'Custom analytics dashboard','
        'Dedicated success manager','
        'Real-time reporting','
        'Advanced workflow builder','
        'Enterprise collaboration tools','
        'Full API access','
        'Enterprise security features','
        'Custom AI model training','
        'White-label solutions','
        'SLA guarantees','
        'On-premise deployment options''
      ],
      limitations: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Unlimited team members','
        'Full customization options','
        'Immediate response time''
      ],
      icon: Award,
      popular: false
    }
  ];
import React, { useState } from 'react';';
import { Header } from '@/components/header/Header';';
import { Footer } from '@/components/Footer';';
import { SEO } from '@/components/SEO';';
import { Button } from '@/components/ui/Button';';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';';
import { Badge } from '@/components/ui/Badge';';
import { Check, Star, Zap, Shield, Users, Globe, Clock, MessageSquare } from 'lucide-react';';';
export default function Pricing() {;
const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');';
const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
const plans = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Starter','
      description: 'Perfect for small businesses and startups','
      price: { monthly: 99, yearly: 990 },
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Basic IT Support','
        'Email & Phone Support','
        'Security Monitoring','
        'Monthly Reports','
        '5 User Licenses','
        'Basic Analytics''
      ],
      popular: false,
      icon: Building,
      color: 'from-green-500 to-emerald-500''
    }
  ];
const addOns = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'AI Model Training','
      description: 'Custom AI model development and training','
      price: { monthly: 500, annual: 400 },
      icon: Brain
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Advanced Security','
      description: 'Enhanced security features and compliance','
      price: { monthly: 300, annual: 250 },
      icon: Shield
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Priority Support','
      description: '24/7 priority support and dedicated team','
      price: { monthly: 200, annual: 150 },
      icon: Users
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Custom Integrations','
      description: 'Custom API integrations and development','
      price: { monthly: 400, annual: 350 },
      icon: Zap
    }
  ];
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Award,
      title: 'Industry Leading','
      description: 'Recognized as top AI solutions provider''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: 'Global Support','
      description: '24/7 support across all time zones''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Enterprise Security','
      description: 'Bank-level security and compliance''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: 'Fast Implementation','
      description: 'Get started in days, not months''
    }
  ];
const faqs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Can I change my plan at any time?','
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Is there a setup fee?','
      answer: 'No setup fees for any of our plans. You only pay for the services you use.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Do you offer custom pricing?','
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'What payment methods do you accept?','
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Is there a free trial available?','
      answer: 'Yes, we offer a 14-day free trial for all plans with full access to features.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      question: 'Can I cancel my subscription?','
      answer: 'Yes, you can cancel your subscription at any time with no penalties or fees.''
    }
  ];
const handlePlanSelect = (planId: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    setSelectedPlan(planId)
  }
  const getCurrentPrice = (plan: any) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return billingCycle === 'annual' ? plan.price.annual : plan.price.monthly'
  }
  const getSavings = (plan: any) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (billingCycle === 'annual') {;';
const monthlyTotal = plan.price.monthly * 12;
const annualTotal = plan.price.annual * 12
      return Math.round(((monthlyTotal - annualTotal) / monthlyTotal) * 100)
    }
    return 0
  }
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
<div className="
<div className="text-center"text-4 xl md:text-6 xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              Transparent Pricing
            </h1>
<p className="
              Choose the perfect plan for your business needs. All plans include our core AI and
              technology solutions with flexible pricing options.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8"min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900"
      {/* Hero Section */}
      <div className="
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
              Choose the perfect plan for your business. All plans include our core AI capabilities
              with flexible options to scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="
<span className={`mr-4 text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>'
                Monthly
              </span>
<$2 />
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}'
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600''
                }`}
              >
<$2 />
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1''
                  }`}
                />
</button>
<span className={`ml-4 text-sm ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>'
                Annual
                {billingCycle === 'annual' && ('
                  <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
<div className="
          {plans.map((plan) => {;
const Icon = plan.icon;
const currentPrice = plan.price[billingCycle];
const originalPrice = billingCycle === 'annual' ? plan.price.monthly * 12 : plan.price.monthly;';
const savings = billingCycle === 'annual' ? getAnnualSavings(plan.price.monthly, plan.price.annual) : 0'
            return (
  // TODO: Add parameters
)
              <$2 />
                key={plan.id}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  plan.popular
                    ? 'border-cyan-500 shadow-2 xl shadow-cyan-500/20' '
                    : 'border-gray-700 hover:border-cyan-500''
                }`}
              >
                {plan.popular && (
  // TODO: Add parameters
)
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full"
                      Most Popular
                    </span></div>
                )}

                <div className="
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-gray-400 mb-6"mb-4"
<span className="
<span className="text-gray-400"text-green-400 text-sm mb-4"
                      Save {savings}% with annual billing
                    </div>
                  )}

                  <$2 />
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white''
                        : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-cyan-500''
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}'
                  </button></div>
<div className="
<h4 className="font-semibold text-white mb-4"flex items-start"
<Check className="
<span className="text-gray-300 text-sm"font-semibold text-gray-400 mt-6 mb-4"
                      {plan.limitations.map((limitation, index) => (
  // TODO: Add parameters
)
                        <div key={index} className="
<div className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0"text-gray-500 text-sm"
                      ))}
                    </>
                  )}
                </div></div>
            )
          })}
        </div></div>

      {/* Add-ons Section */}
      <div className="
<div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-20"text-center mb-16"
<h2 className="
<p className="text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 gap-8"
            {addOns.map((addon, index) => (
  // TODO: Add parameters
)
              <$2 />
                key={index}
                className="
              >
<div className="flex items-start justify-between mb-4"text-xl font-semibold text-white mb-2"
<p className="
<div className="text-right"text-2 xl font-bold text-white"
                      {formatPrice(addon.price[billingCycle])}
                    </div>
<div className="
</div>
<div className="space-y-2 mb-6"flex items-center text-sm"
<Check className="
<span className="text-gray-300"w-full py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200"
                  Add to Plan
                </button></div>
            ))}
          </div></div>
</div>

      name: 'AI Services Package','
      description: 'Advanced AI and machine learning solutions','
      price: { monthly: 199, yearly: 1990 },
      features: ['Custom AI Models', 'Data Analytics', 'Process Automation']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Cybersecurity Suite','
      description: 'Comprehensive security and compliance solutions','
      price: { monthly: 149, yearly: 1490 },
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Reporting']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Green IT Solutions','
      description: 'Sustainable technology and energy optimization','
      price: { monthly: 99, yearly: 990 },
      features: ['Energy Audits', 'Sustainable Hardware', 'Carbon Footprint Tracking']'
    }
  ];
const savings = billingCycle === 'yearly' ? 20 : 0'
  return (
  // TODO: Add parameters
)
    <>
<SEO
        title=""
        description=""
        keywords=""
      />
<Header />
<main className="
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20"container mx-auto px-4 text-center"
<h1 className="
              Transparent Pricing
            </h1>
<p className="text-xl md:text-2 xl text-zion-slate-light max-w-3 xl mx-auto leading-relaxed"py-16"
<div className="
<div className="flex justify-center mb-12"bg-gray-100 rounded-lg p-1"
<$2 />
                  onClick={() => setBillingCycle('monthly')}'
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    billingCycle === 'monthly''
                      ? 'bg-white text-zion-blue shadow-sm''
                      : 'text-gray-600 hover:text-gray-900''
                  }`}
                >
                  Monthly Billing
                </button>
<$2 />
                  onClick={() => setBillingCycle('yearly')}'
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    billingCycle === 'yearly''
                      ? 'bg-white text-zion-blue shadow-sm''
                      : 'text-gray-600 hover:text-gray-900''
                  }`}
                >
                  Yearly Billing
                  {billingCycle === 'yearly' && ('
                    <Badge className="
                      Save {savings}%
                    </Badge>
                  )}
                </button></div>
</div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"absolute -top-4 left-1/2 transform -translate-x-1/2"
      {/* Benefits Section */}
      <div className="
<div className="text-center mb-16"text-3 xl font-bold text-white mb-6"
<p className="
            We're committed to providing the best value and experience for our customers'
          </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
<Icon className="w-8 h-8 text-white"text-lg font-semibold text-white mb-2"
<p className="
            )
          })}
        </div></div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700"max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
<div className="
<h2 className="text-3 xl font-bold text-white mb-6"text-xl text-gray-300"
              Get answers to common questions about our pricing and plans
            </p></div>
<div className="
            {faqs.map((faq, index) => (
  // TODO: Add parameters
)
              <$2 />
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600"text-lg font-semibold text-white mb-3"
<p className="
            ))}
          </div></div>
</div>;
const addOns = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'AI Training & Workshops','
      price: '$299','
      period: '/session','
      description: 'Custom AI training for your team''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Security Audit','
      price: '$1,499','
      period: '/audit','
      description: 'Comprehensive security assessment''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Cloud Migration','
      price: '$4,999','
      period: '/project','
      description: 'Complete cloud infrastructure setup''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Custom Development','
      price: '$150','
      period: '/hour','
      description: 'Tailored software development''
    }
  ]
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"pt-32 pb-20 px-4 sm:px-6 lg:px-8"
<div className="
<h1 className="text-5 xl md:text-6 xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto"
            Choose the perfect plan for your business. All plans include our core AI capabilities
            with flexible options to scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="
<span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>'
              Monthly
            </span>
<$2 />
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}'
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600''
              }`}
            >
<$2 />
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1''
                }`}
              />
</button>
<span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>'
              Annual
              {billingCycle === 'annual' && ('
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full"py-20 px-4 sm:px-6 lg:px-8"
<div className="
<div className="grid md:grid-cols-3 gap-8"absolute -top-4 left-1/2 transform -translate-x-1/2"
<span className="
                      Most Popular
                    </span></div>
                )}

                <div className="text-center mb-8"h-8 w-8 text-white"
<h3 className="
<p className="text-gray-300"text-center mb-8"
<div className="
<span className="text-4 xl font-bold text-white"text-gray-400 ml-2"
                      /{billingCycle === 'annual' ? 'month' : 'month'}'
                    </span></div>
                  {billingCycle === 'annual' && ('
                    <p className="
                      Save ${getSavings(plan)}% with annual billing
                    </p>
                  )}
                </div>
<ul className="space-y-4 mb-8"flex items-start"
<Check className="
<span className="text-gray-300"py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-white mb-6"
<p className="
              Enhance your plan with additional services tailored to your specific needs
            </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
<div className="
<addon.icon className="h-12 w-12 text-blue-400"text-xl font-semibold text-white mb-2 text-center"
<p className="
<div className="text-center"text-2 xl font-bold text-blue-400 mb-2"
                    ${billingCycle === 'annual' ? addon.price.annual : addon.price.monthly}'
                  </div>
<span className="
</div>
            ))}
          </div></div>
</section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h2 className="text-4 xl font-bold text-white mb-6"text-xl text-gray-300 max-w-3 xl mx-auto"
              We're committed to delivering exceptional value and results for your business'
            </p></div>
<div className="
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"flex justify-center mb-4"
<benefit.icon className="
<h3 className="text-xl font-semibold mb-3 text-white"text-gray-300"
            ))}
          </div></div>
</section>

      {/* FAQ Section */}
      <section className="
<div className="max-w-4 xl mx-auto"text-center mb-16"
<h2 className="
<p className="text-xl text-gray-300"space-y-6"
            {faqs.map((faq, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<h3 className="text-xl font-semibold text-white mb-3"text-gray-300"
            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="
<div className="max-w-4 xl mx-auto text-center"text-4 xl font-bold mb-6 text-white"
<p className="
            Join thousands of businesses that have transformed their operations with our AI-powered solutions.
          </p>
<div className="flex flex-wrap justify-center gap-4"/contact""bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Free Trial
            </Link>
<$2 />
              to=""
              className="
            >
<Phone className="w-5 h-5 mr-2"max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
<div className="
<h2 className="text-3 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-2 xl mx-auto"
            Start your free trial today and experience the power of AI-driven automation.
            No credit card required.
          </p>
<div className="
<button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"w-5 h-5 ml-2"
<button className="
              Contact Sales
            </button></div>
<p className="text-gray-400 text-sm mt-4"px-4 sm:px-6 lg:px-8 pb-16"
<div className="
<div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2 xl p-12"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Ready to Get Started?
            </h2>
<p className="
              Join thousands of businesses already transforming their operations with AI
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                Start Free Trial
              </button>
<$2 />
                to=""
                className="
              >
                Contact Sales
              </Link>
<div className="text-center"w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
<Phone className="
<h3 className="text-lg font-semibold text-white mb-2"text-cyan-400 font-medium"
<p className="
<div className="text-center"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
<Mail className="
<h3 className="text-lg font-semibold text-white mb-2"text-cyan-400 font-medium"
<p className="
<div className="text-center"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
<GlobeIcon className="
<h3 className="text-lg font-semibold text-white mb-2"text-cyan-400 font-medium"
<p className="
<div className="text-center"w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
<MapPin className="
<h3 className="text-lg font-semibold text-white mb-2"text-cyan-400 font-medium text-sm"
<p className="
</div></div>

        {/* FAQ Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2 xl p-8 border border-cyan-500/30 mb-20"text-3 xl font-bold text-white text-center mb-8"
            Frequently Asked Questions
          </h2>
<div className="
<div className="space-y-6"text-lg font-semibold text-cyan-400 mb-2"
                  What's included in the pricing?'
                </h3>
<p className="
                  All plans include the core software, technical support, regular updates, security patches, and access to our knowledge base. Enterprise plans include dedicated support and custom integrations.
                </p></div>
<div>
<h3 className="text-lg font-semibold text-cyan-400 mb-2"text-gray-300"
                  Yes! All our solutions are highly customizable. We work with you to tailor the software to your specific business needs and integrate with your existing systems.
                </p></div>
<div>
<h3 className="
                  What kind of support do you provide?
                </h3>
<p className="text-gray-300"space-y-6"
<div>
<h3 className="
                  How long does implementation take?
                </h3>
<p className="text-gray-300"text-lg font-semibold text-cyan-400 mb-2"
                  Do you offer training?
                </h3>
<p className="
                  Yes! We provide comprehensive training for your team, including user guides, video tutorials, and live training sessions. We also offer ongoing training as needed.
                </p></div>
<div>
<h3 className="text-lg font-semibold text-cyan-400 mb-2"text-gray-300"
                  Security is our top priority. All solutions include enterprise-grade encryption, regular security audits, compliance certifications, and secure cloud hosting.
                </p></div>
</div></div>
</div>

        {/* Final CTA */}
        <div className="
<div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2 xl p-8 border border-cyan-500/30"text-3 xl font-bold text-white mb-4"
              Start Your Digital Transformation Today
            </h2>
<p className="
              Join hundreds of businesses that have already transformed their operations with our AI-powered solutions.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center"
<Rocket className="
                Start Free Trial
              </button>
<button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                Schedule Demo
              </button></div>
</div></div>
</div></div>
</div>
  )
}
export default Pricing</$1></div>;
</div></div>
</div></div>
</span></p>
</main></section>
</section></section>
}}}}))))))