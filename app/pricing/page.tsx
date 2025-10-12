'use client';
import { useState  } from "react";
import { Link  } from "react-router-dom";
import { ArrowRight  } from "lucide-react";
const PricingPage: React.FC = () => {
  return (
  return (
  const [billingCycle, setBillingCycle] = useState('monthly');
  const aiServicesPricing = [
    {
      name: 'AI Starter',
      price: { monthly: 999, yearly: 9999;
  );

  );
},
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Basic AI chatbot',
        'Simple analytics',
        'Email support',
        'Up to 1,000 interactions/month',
        'Standard integrations'
      ],
      popular: false,
      category: 'ai'
    },
    {
      name: 'AI Professional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Advanced AI models',
        'Custom training',
        'Priority support',
        'Up to 10,000 interactions/month',
        'All integrations',
        'API access',
        'Custom workflows'
      ],
      popular: true,
      category: 'ai'
    },
    {
      name: 'AI Enterprise',
      price: { monthly: 5999, yearly: 59999 },
      description: 'Complete AI transformation for large organizations',
      features: [
        'Unlimited AI models',
        'Custom AI development',
        '24/7 dedicated support',
        'Unlimited interactions',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      category: 'ai'
    }
  ];
  const itServicesPricing = [
    {
      name: 'IT Basic',
      price: { monthly: 1499, yearly: 14999 },
      description: 'Essential IT services for small businesses',
      features: [
        'Basic web development',
        'Cloud setup',
        'Email support',
        'Monthly maintenance',
        'Standard security'
      ],
      popular: false,
      category: 'it'
    },
    {
      name: 'IT Professional',
      price: { monthly: 3999, yearly: 39999 },
      description: 'Comprehensive IT solutions for growing companies',
      features: [
        'Full-stack development',
        'Cloud migration',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'DevOps automation',
        'Database management'
      ],
      popular: true,
      category: 'it'
    },
    {
      name: 'IT Enterprise',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Complete IT transformation for large enterprises',
      features: [
        'Custom enterprise solutions',
        'Multi-cloud architecture',
        'Dedicated team',
        '24/7 phone support',
        'Enterprise security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      category: 'it'
    }
  ];
  const microSaasPricing = [
    {
      name: 'Micro SAAS Starter',
      price: { monthly: 99, yearly: 999 },
      description: 'Essential business tools for startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard tools',
        '1 GB storage'
      ],
      popular: false,
      category: 'saas'
    },
    {
      name: 'Micro SAAS Professional',
      price: { monthly: 299, yearly: 2999 },
      description: 'Advanced tools for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'All tools included',
        '10 GB storage',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      category: 'saas'
    },
    {
      name: 'Micro SAAS Enterprise',
      price: { monthly: 599, yearly: 5999 },
      description: 'Complete business automation suite',
      features: [
        'Unlimited users',
        'AI-powered insights',
        '24/7 phone support',
        'Custom tools',
        'Unlimited storage',
        'Advanced automation',
        'Dedicated manager'
      ],
      popular: false,
      category: 'saas'
    }
  ];
  const addOns = [
    {
      name: 'AI Content Generation',
      price: { monthly: 199, yearly: 1999 },
      description: 'Advanced AI-powered content creation',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization']
    },
    {
      name: 'Advanced Analytics',
      price: { monthly: 299, yearly: 2999 },
      description: 'Deep business intelligence and insights',
      features: ['Custom dashboards', 'Predictive analytics', 'Real-time reporting', 'Data visualization']
    },
    {
      name: 'Priority Support',
      price: { monthly: 199, yearly: 1999 },
      description: '24/7 priority support and faster response times',
      features: ['Phone support', 'Faster response', 'Dedicated support', 'SLA guarantee']
    },
    {
      name: 'Custom Integration',
      price: { monthly: 499, yearly: 4999 },
      description: 'Custom integrations with your existing systems',
      features: ['API development', 'Custom connectors', 'Data migration', 'Ongoing maintenance']
    }
  ];
  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes access to all features of the Professional plan for 14 days. No credit card required.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom enterprise pricing for organizations with specific needs. Contact us for a custom quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay the monthly or annual subscription fee.'
    },
    {question: 'What happens if I exceed my usage limits?',
      answer: 'We will notify you before you reach your limits and offer options to upgrade or purchase additional capacity.'
    }
  ];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0;
    }).format(price);
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <>>
      <><Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta const name = "description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with 14-day free trials." / / /></meta>
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, business solutions" / / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/pricing" /></link>
      </Helmet></>

      <>div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" ></div>
        {/* Hero Section */}
    <>section className="relative py-20px-4overflow-hidden" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)]animate-pulse" /></div><div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / /></div></>
              {addOns.map((addon, index) => (
    <>div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />

              {faqs.map((faq, index) => (
    <>div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6borderborder-white/20" />
                  <h3 className="text-xl font-bold text-white mb-3" />{faq.question}</h3>
                  <p className="text-gray-300leading-relaxed" ></p>
              {faq.answer}</p>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* CTA Section */}
    <>section className="py-20px-4" />
          <>div className="max-w-7xlmx-auto" ></div><div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-centerrelativeoverflow-hidden" ></div></>
              <>div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" /></div><div className="relativez-10" ></div></>
                <h2 className="text-4xl font-bold text-white mb-6" />Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" ></p>
              Start your free trial today and experience the power of our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
                  <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" >Start Free Trial;
                  </Link><Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" >Contact Sales;
                  </Link></>
                </div>
            </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div></>
  );
};

export default PricingPage;
    </>
}))