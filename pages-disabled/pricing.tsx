import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
const plans = []
  {'}
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: []
      "Basic AI consultation",
      "Email support",
      "Monthly check-ins",
      "Basic analytics dashboard",
      "Up to 5 team members"];
    ],
    limitations: []
      "Limited AI models",
      "Basic customization",
      "Standard response time"];
    ],
    popular: false,
    cta: "Get Started"
  },
  {}
    name: "Professional",
    price: "$5,000",
    period: "/month",
    description: "Ideal for growing companies with advanced needs",
    features: []
      "Advanced AI solutions",
      "Priority support",
      "Weekly check-ins",
      "Custom analytics dashboard",
      "Up to 25 team members",
      "API access",
      "Custom integrations",
      "Training sessions"];
    ],
    limitations: []
      "Limited to 2 custom models"];
    ],
    popular: true,
    cta: "Most Popular"
  },
  {}
    name: "Enterprise",
    price: "Custom",
    period: ",
    description: "Tailored solutions for large organizations",
    features: []
      "Unlimited AI solutions",
      "24/7 dedicated support",
      "Daily check-ins",
      "Custom analytics platform",
      "Unlimited team members",
      "Full API access",
      "Custom integrations",
      "Dedicated training program",
      "SLA guarantee",
      "Custom development"];
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales"
  };
];

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "AI-powered analytics dashboard",
        "Basic automation tools",
        "Email support",
        "Up to 5 team members",
        "Standard integrations",
        "Monthly reports"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    }, {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced AI analytics",
        "Custom automation workflows",
        "Priority support",
        "Up to 25 team members",
        "Advanced integrations",
        "Real-time reporting",
        "API access",
        "Custom branding"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    }, {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited AI capabilities",
        "Custom AI model training",
        "Dedicated support team",
        "Unlimited team members",
        "White-label solutions",
        "Advanced security",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  const servicePricing = [
    {
      service: "AI Development",
      startingPrice: "$5,000",
      description: "Custom AI solutions and machine learning models",
      features: ["Custom AI models", "Data analysis", "Integration support", "Training & documentation"]
    }, {
      service: "Cloud Migration",
      startingPrice: "$3,000",
      description: "Seamless migration to cloud infrastructure",
      features: ["Infrastructure assessment", "Migration planning", "Data transfer", "Performance optimization"]
    }, {
      service: "Cybersecurity",
      startingPrice: "$2,500",
      description: "Comprehensive security solutions and monitoring",
      features: ["Security audit", "Threat monitoring", "Incident response", "Compliance support"]
    }, {
      service: "Digital Transformation",
      startingPrice: "$10,000",
      description: "End-to-end digital transformation consulting",
      features: ["Strategy development", "Process optimization", "Technology implementation", "Change management"]
    }
  ];

export default function PricingPage() {}
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');'
  return (')
    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>
</Head>
        <title>Pricing - Zion Tech Group</title>"
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and technology consulting. Choose the plan that fits your business needs." />"
</meta>
      </Head>"
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h1 className="text-5xl font-bold mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>"
            <div className="flex items-center justify-center gap-4 mb-8">"
</div>"
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-300'}`}>
</span>
              </span>
              <button;)'
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}'
</button>
                <span;
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${``}
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1''
                  }`};
                />
</span>
              </button>
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-300'}`}>
</span>'
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">"
</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-7xl mx-auto">"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
                <motion.div;
                  key={index};
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${`}
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : '''
                  }`};
                  whileHover={{ y: -5 }};
                >
</motion>
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">"
</div>"
                      <Star className="w-4 h-4 inline mr-1" />"
</Star>
                    </div>"
                  <div className="p-8">"
</div>"
                    <div className="text-center mb-8">"
</div>"
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">"
</h3>
                      </h3>"
                      <p className="text-gray-600 mb-4">"
</p>
                      </p>"
                      <div className="flex items-baseline justify-center">"
</div>"
                        <span className="text-5xl font-bold text-gray-900">"
</span>
                        </span>"
                        <span className="text-gray-600 ml-1">"
</span>
                        </span>
                      </div>
                    </div>
"
                    <div className="space-y-4 mb-8">"
</div>"
                        <div key={featureIndex} className="flex items-start">"
</div>"
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
</Check>"
                          <span className="text-gray-700">{feature}</span>"
                        </div>"
                        <div key={limitationIndex} className="flex items-start">"
</div>"
                          <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />"
</X>"
                          <span className="text-gray-500">{limitation}</span>"
                        </div>
                    </div>

                    <Link;"
                      href={plan.name === 'Enterprise' ? '/contact' : '/contact'}'
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`}
                        plan.popular;
                          ? 'bg-blue-600 text-white hover:bg-blue-700'''
                          : 'bg-gray-900 text-white hover:bg-gray-800''
                      }`};
                    >
</Link>
                    </Link>
                  </div>
                </motion.div>
              ))};
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <div className="text-center mb-12">"
</div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-xl text-gray-600">"
</p>
              </p>
            </div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
                <motion.div;
                  key={index};
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  whileHover={{ y: -2 }};
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                  </h3>"
                  <div className="text-2xl font-bold text-blue-600 mb-2">"
</div>"
                    <span className="text-sm text-gray-600 font-normal">"
</span>
                    </span>
                  </div>"
                  <p className="text-gray-600 text-sm">"
</p>
                  </p>
                </motion.div>
              ))};
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto">"
</div>"
            <div className="text-center mb-12">"
</div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>
            </div>
"
            <div className="space-y-6">"
</div>
                <motion.div;
                  key={index};
                  className="bg-white rounded-lg p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ delay: index * 0.1 }};
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
</p>
                  </p>
                </motion.div>
              ))};
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-blue-600">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
              <Link;"
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
</Link>"
                <ArrowRight className="w-4 h-4" />"
</ArrowRight>
              </Link>
              <Link;"
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
  )};

export default Pricing;