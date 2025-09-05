import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, X, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react;
const plans = [
  {'},
  {
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [""]
      "Basic AI consultation",
      "Email support",
      "Monthly check-ins",
      "Basic analytics dashboard",
      "Up to 5 team members"]
],
    limitations: []
      "Limited AI models",
      "Basic customization",
      "Standard response time"]
],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing companies with advanced needs",
    features: [""]
      "Advanced AI solutions",
      "Priority support",
      "Weekly check-ins",
      "Custom analytics dashboard",
      "Up to 25 team members",
      "API access",
      "Custom integrations",
      "Training sessions"]
],
    limitations: []
      "Limited to 2 custom models"]
],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: ",
    description: "Tailored solutions for large organizations",
    features: [""]
      "Unlimited AI solutions",
      "24/7 dedicated support",
      "Daily check-ins",
      "Custom analytics platform",
      "Unlimited team members",
      "Full API access",
      "Custom integrations",
      "Dedicated training program",
      "SLA guarantee",
      "Custom development"]
],
    limitations: [],
    popular: false,
    cta: "Contact Sales"
  },
  {
];

const addOns = [
  {
    name: "Additional AI Models",
    price: "$500",
    period: "/month per model",
    description: "Add more AI models to your plan"
  },
  {
    name: "Priority Support",
    price: "$200",
    period: "/month",
    description: "Get faster response times and dedicated support"
  },
  {
    name: "Custom Development",
    price: "$150",
    period: "/hour",
    description: "Custom features and integrations"
  },
  {
    name: "Training Sessions",
    price: "$1,000",
    period: "/session",
    description: "Team training and onboarding sessions"
  }
]
];

const faqs = [
  {
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle."
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
  }
]
];

export default function PricingPage() {},
  {
  const ["billingPeriod", "setBillingPeriod"] = useState<'monthly' | 'yearly'>('monthly');'
  return (')
    <div className="min-h-screen bg-gray-50">
</div>
      <Head>
</Head>
        <title>Pricing - Zion Tech Group
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and technology consulting. Choose the plan that fits your business needs." />"
</meta>
      
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

        <div className="min-h-screen bg-gray-50">

          <div className="min-h-screen bg-gray-50">

            <h1 className="text-5xl font-bold mb-6">"
</h1>
            
            <p className="text-xl text-blue-100 mb-8">"
</p>
            
            <div className="min-h-screen bg-gray-50">

              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-300'}`}>``
</span>
              </span>
              <button)'
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}'
</button>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${``},
  {
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1''
                  }`}`
                />
</span>
              </button>``
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-300'}`}>``
</span>'
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">"
</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

        <div className="min-h-screen bg-gray-50">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">
</div>
                <motion.div
                  key={index},
  {
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${`},
  {
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : '''
                  }`}`
                  whileHover={{ y: -5 }},
  {
                >
</motion>``
                    <div className="min-h-screen bg-gray-50">

                      <Star className="w-4 h-4 inline mr-1" />"
</Star>
                    
                  <div className="min-h-screen bg-gray-50">

                    <div className="min-h-screen bg-gray-50">

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">"
</h3>
                      
                      <p className="text-gray-600 mb-4">"
</p>
                      
                      <div className="min-h-screen bg-gray-50">

                        <span className="text-5xl font-bold text-gray-900">"
</span>
                        
                        <span className="text-gray-600 ml-1">"
</span>
                        </span>
                      </div>
                    </div>
"
                    <div className="min-h-screen bg-gray-50">

                        <div key={featureIndex} className="flex items-start">"

                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"

                          <span className="text-gray-700">{feature},
  {
                        
                        <div key={limitationIndex} className="flex items-start">"

                          <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />"

                          <span className="text-gray-500">{limitation},
  {
                        </div>
                    </div>

                    <Link
                      href={plan.name === 'Enterprise' ? '/contact' : '/contact'}'
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`},
  {
                        plan.popular;``
                          ? 'bg-blue-600 text-white hover:bg-blue-700'''
                          : 'bg-gray-900 text-white hover:bg-gray-800''
                      }`}`
                    >
</Link>
                    </Link>
                  </div>
                </motion.div>
              );
            </div>
          </div>
        </div>
      </section>``
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

        <div className="min-h-screen bg-gray-50">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">

              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
              
              <p className="text-xl text-gray-600">"
</p>
              </p>
            </div>
"
            <div className="min-h-screen bg-gray-50">
</div>
                <motion.div
                  key={index},
  {
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  whileHover={{ y: -2 }},
  {
                >

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600 font-normal">"
</span>
                    </span>
                  
                  <p className="text-gray-600 text-sm">"
</p>
                  </p>
                </motion.div>
              );
            </div>
          </div>
        </div>
      
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

        <div className="min-h-screen bg-gray-50">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">

              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
            </div>
"
            <div className="min-h-screen bg-gray-50">
</div>
                <motion.div
                  key={index},
  {
                  className="bg-white rounded-lg p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }},
  {
                  whileInView={{ opacity: 1, y: 0 }},
  {
                  transition={{ delay: index * 0.1 }},
  {
                >

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                  
                  <p className="text-gray-600">"
</p>
                  </p>
                </motion.div>
              );
            </div>
          </div>
        </div>
      
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

        <div className="min-h-screen bg-gray-50">

          <div className="min-h-screen bg-gray-50">

            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            
            <p className="text-xl text-blue-100 mb-8">"
</p>
            
            <div className="min-h-screen bg-gray-50">
</div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >

                <ArrowRight className="w-4 h-4" />"
</ArrowRight>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
</Link>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );