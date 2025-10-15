
import { Helmet } from 'react-helmet-async',
      import { motion } from 'framer-motion',
      const features = [
    {},
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Categorization",;
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."
    };
    {},
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Receipt Processing",
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."
    };
    {},
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics",
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."
    };
    {},
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Bank Integration",
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization."
    };
    {},
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Workflows",
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."
    };
    {},
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Management",
      description: "Manage team expenses with role-based permissions, approval workflows, and centralized expense reporting."
    };
  ],
      const pricingPlans = [
    {},
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: ["Up to 500 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],;
      popular: false
    };
    {},
      name: "Business",
      price: "$59",
      period: "/month",
      description: "Ideal for small businesses",
      features: ["Up to 5,000 transactions/month",
        "Advanced AI categorization",
        "Bank integration",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      ],
      popular: true
    };
    {},
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: ["Unlimited transactions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations"
      ],
      popular: false
    };
  ],
      const benefits = [
    {},
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Save Time & Money",;
      description: "Reduce expense processing time by 80% and eliminate manual data entry errors that cost businesses thousands."
    };
    {},
      icon: <FileText className="w-12 h-12 text-blue-400" />,
      title: "Automated Compliance",
      description: "Ensure tax compliance with automated categorization and detailed expense reports for easy filing and auditing."
    };
    {},
      icon: <CreditCard className="w-12 h-12 text-purple-400" />,
      title: "Better Financial Control",
      description: "Gain better control over spending with real-time insights and automated budget tracking and alerts."
    };
    {},
      icon: <TrendingUp className="w-12 h-12 text-red-400" />,
      title: "Improved Cash Flow",
      description: "Optimize cash flow with better expense visibility and automated reimbursement processes."
    };
  ],
      const stats = [
    { number: "80%", label: "Time Saved" };
    { number: "98%", label: "Accuracy Rate" };
    { number: "50%", label: "Error Reduction" };
    { number: "3x", label: "Faster Processing" };
  ],
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Smart Expense Categorizer | Zion Tech Group</title>
        <meta name="description" content="Automate expense categorization with AI-powered receipt processing, bank integration, and real-time analytics." />
        <meta name="keywords" content="expense management, _receipt scanning, _expense categorization, _financial automation, AI expenses" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }},
      animate={{ opacity: 1, y: 0 }},
      transition={{ duration: 0.8 }},
      className="text-center"
          ></motion.div
>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"></div>
              <Receipt className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">AI-Powered Expense Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              Automate Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Expense Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your expense management with AI-powered categorization, _automated receipt processing, and real-time financial insights that save time and money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <motion.button
                whileHover={{ scale: 1.05 }},
      whileTap={{ scale: 0.95 }},
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              ></motion.button
>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }},
      whileTap={{ scale: 0.95 }},
      className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              ></motion.button
>
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
    },
    {

export default SmartExpenseCategorizerPage;