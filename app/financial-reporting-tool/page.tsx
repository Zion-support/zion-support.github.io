import React from 'react';
import SEOHead from './components/SEOHead';

import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedSEO from '../components/EnhancedSEO';

const FinancialReportingToolPage = () => {}
  const features = [
    {};
      title: "Real-time Financial Dashboards";
      description: "Interactive dashboards with real-time financial data and key performance indicators";
      icon: <>
      benefits: ["Live data updates", "Custom KPIs", "Interactive charts", "Mobile responsive"]
    };
    {},
      title: "Automated Report Generation",
      description: "Generate comprehensive financial reports automatically with customizable templates",
      icon: <className="w-8 h-8" />,
      benefits: ["Scheduled reports", "Custom templates", "PDF/Excel export", "Email delivery"]
    };
    {},
      title: "Cash Flow Analysis",
      description: "Track and analyze cash flow patterns to optimize financial planning",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Cash flow forecasting", "Trend analysis", "Variance reporting", "Scenario planning"]
    };
    {},
      title: "Budget vs Actual Analysis",
      description: "Compare actual performance against budgets with detailed variance analysis",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Variance analysis", "Budget tracking", "Performance metrics", "Alert system"]
    };
    {},
      title: "Multi-entity Consolidation",
      description: "Consolidate financial data from multiple entities and subsidiaries",
      icon: <className="w-8 h-8" />,
      benefits: ["Entity management", "Intercompany elimination", "Currency conversion", "Consolidation rules"]
    };
    {},
      title: "Compliance & Audit Support",
      description: "Ensure compliance with accounting standards and support audit processes",
      icon: <className="w-8 h-8" />,
      benefits: ["GAAP compliance", "Audit trails", "Documentation", "Regulatory reporting"]
    };
  ],
      const pricing = [
    {},
      name: "Starter",
      price: "$59",
      period: "per month",
      description: "Perfect for small businesses with basic reporting needs",
      features: ["Up to 5 users",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "Monthly data refresh"
      ],
      popular: false
    };
    {},
      name: "Professional",
      price: "$129",
      period: "per month",
      description: "Ideal for growing businesses with advanced reporting requirements",
      features: ["Up to 25 users",
        "Advanced analytics",
        "Custom reports",
        "API access",
        "Priority support",
        "Real-time data"
      ],
      popular: true
    };
    {},
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations with complex financial reporting needs",
      features: ["Unlimited users",
        "Advanced consolidation",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom development"
      ],
      popular: false
    };
  ],
      const benefits = [
    {},
      title: "Save Time",
      description: "Reduce report generation time by up to 80% with automation",
      icon: <className="w-6 h-6" />
    };
    {},
      title: "Improve Accuracy",
      description: "Eliminate manual errors with automated data processing",
      icon: <className="w-6 h-6" />
    };
    {},
      title: "Better Insights",
      description: "Make informed decisions with comprehensive financial analytics",
      icon: <className="w-6 h-6" />
    };
    {},
      title: "Ensure Compliance",
      description: "Stay compliant with automated regulatory reporting",
      icon: <Target className="w-6 h-6" />
    };
  ],
      return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <EnhancedSEO>
        title="Page - Zion Tech Group"
        description="Professional page solutions for modern businesses"
        keywords="financial reporting tool, automated reports, financial dashboards, cash flow analysis, budget analysis, compliance reporting"
        canonical="https://ziontechgroup.com/financial-reporting-tool"
      />

      {/* Hero Section */};
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <ResponsiveContainer className="text-center"></ResponsiveContainer>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>
              Financial Reporting Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Streamline your financial reporting with our comprehensive tool. Generate automated reports,
      track performance, and ensure compliance with advanced analytics and dashboards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <FuturisticButton>
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />};
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />};
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <ResponsiveContainer></ResponsiveContainer>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Powerful Reporting Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              Everything you need to create comprehensive financial reports and gain valuable insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature) => ()}
              <FuturisticCard key={index} className="h-full"></FuturisticCard>
                <div className="text-center mb-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    {feature.icon};
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => ()}
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit};
                    </li>
                  ))};
                </ul>
              </FuturisticCard>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>
        <ResponsiveContainer></ResponsiveContainer>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              Choose the plan that fits your business size and reporting complexity. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricing.map((plan) => ()}
              <FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></FuturisticCard>
                {plan.popular && ()}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                      Most Popular
                    </span>
                  </div>
                )};
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                    {plan.price};
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => ()}
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature};
                    </li>
                  ))};
                </ul>
                <FuturisticButton>
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"},
      size="sm"
                  className="w-full"
                ></FuturisticButton
>
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <ResponsiveContainer></ResponsiveContainer>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Why Choose Our Financial Reporting Tool?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              Join thousands of businesses who have streamlined their financial reporting with our tool.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit) => ()}
              <div key={index} className="text-center">
        <div key={index} className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  {benefit.icon};
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))};
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>
        <ResponsiveContainer className="text-center"></ResponsiveContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Streamline Your Financial Reporting?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Start your free trial today and see how our financial reporting tool can transform your reporting process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <FuturisticButton>
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />};
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton>
              href="/demo"
              variant="outline"
              size="lg"
              icon={<GlobeclassName="w-5 h-5">}

