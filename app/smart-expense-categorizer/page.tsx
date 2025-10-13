import React from 'react';
import { Helmet , motion  } from "react-helmet-async";
import { ArrowRight, CheckCircle, Globe } from "lucide-react";
const SmartExpenseCategorizerPage = () => {
  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false;
    },
    {
      name: "Business",
      price: "$59",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 5,000 transactions/month",
        "Advanced AI categorization",
        "Bank integration",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations"
      ],
      popular: false;
    }
  ];
  const stats = [
    { number: "80%", label: "Time Saved" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "50%", label: "Error Reduction" },
    { number: "3x", label: "Faster Processing" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Helmet /><title>Smart Expense Categorizer | Zion Tech Group</title>
        <meta name="description" content="Automate expense categorization with AI-powered receipt processing, bank integration, and real-time analytics." />
        <meta name="keywords" content="expense management, receipt scanning, expense categorization, financial automation, AI expenses" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4" /><div className="max-w-7xl mx-auto" /><motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
           /><div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6" /><Receipt className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">AI-Powered Expense Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Automate Your;
              </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Expense Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your expense management with AI-powered categorization, automated receipt processing, 
              and real-time financial insights that save time and money.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Free Trial;
                </motion><ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Demo</motion>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              </div><motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
               /><div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}</div>
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Financial Management</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered expense management delivers measurable improvements in efficiency, 
              accuracy, and financial control.</p>
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              </div><motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
               /><div className="mb-6 flex justify-center">
                  {benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}</h3>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}</p>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Features</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate and optimize every aspect ;
              of your expense management process.</p>
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              </div><motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
               /><div className="mb-6">
                  {feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}</h3>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}</p>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business size and expense volume. 
              All plans include our core AI features with no setup fees.</p>
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              </div><motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular ;
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  </motion><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular</div>
                    </div>
                  </div>
                )}
                <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" /><span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center" /><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-gray-600 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started</motion>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center"
           /><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Expenses?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our Smart Expense Categorizer ;
              to streamline their financial management and save time.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Free Trial;
                </motion><ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales</motion>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16 px-4 bg-black/20" /><div className="max-w-7xl mx-auto text-center" /><h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Contact us today to learn more about our Smart Expense Categorizer and how it can transform your financial management.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300" /><div className="flex items-center" /><Receipt className="w-5 h-5 mr-2 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center" /><Globe className="w-5 h-5 mr-2 text-cyan-400" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
;