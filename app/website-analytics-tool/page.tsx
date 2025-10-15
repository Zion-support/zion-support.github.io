
import FuturisticCard from '../components/FuturisticCard',
      import FuturisticButton from '../components/FuturisticButton',
      import ResponsiveContainer from '../components/ResponsiveContainer',
      import EnhancedSEO from '../components/EnhancedSEO';
,
      const WebsiteAnalyticsToolPage = () => {"}
        "
  const features = [",
        "
    {""}
      title: "Real-time Analytics",""
      description: "Track website performance in real-time with live visitor data and metrics",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Live visitor tracking", "Real-time metrics", "Instant alerts", "Live dashboards"]
    },",
        "
    {"}
        "
      title: "Visitor Behavior Analysis",""
      description: "Understand how visitors interact with your website with detailed behavior analytics",""
      icon: <Users className="w-8 h-8" />,""
      benefits: ["Heatmaps", "Session recordings", "Click tracking", "Scroll analysis"]
    },",
        "
    {"}
        "
      title: "Conversion Tracking",""
      description: "Track and optimize conversions with detailed funnel analysis and goal tracking",""
      icon: <Target className="w-8 h-8" />,""
      benefits: ["Goal setup", "Funnel analysis", "Conversion paths", "ROI tracking"]
    },",
        "
    {"}
        "
      title: "Traffic Sources",""
      description: "Analyze where your traffic comes from and optimize your marketing efforts",""
      icon: <Globe className="w-8 h-8" />,""
      benefits: ["Source analysis", "Campaign tracking", "Referral tracking", "UTM parameters"]
    },",
        "
    {"}
        "
      title: "Custom Dashboards",""
      description: "Create personalized dashboards with the metrics that matter most to you",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Custom widgets", "Drag & drop", "Multiple dashboards", "Team sharing"]
    },",
        "
    {"}
        "
      title: "Advanced Reporting",""
      description: "Generate comprehensive reports with automated scheduling and delivery",""
      icon: <TrendingUp className="w-8 h-8" />,""
      benefits: ["Scheduled reports", "Custom reports", "PDF export", "Email delivery"]
    };
  ];
,
      const pricing = [",
        "
    {"}
        "
      name: "Starter",""
      price: "$29",""
      period: "per month",""
      description: "Perfect for small websites and blogs",",
        "
      features: [",
        "
        "Up to 100,000 page views",""
        "Basic analytics",""
        "Standard reports",""
        "Email support",""
        "Mobile app access";
      ],",
        "
      popular: false",
        "
    },",
        "
    {"}
        "
      name: "Professional",""
      price: "$79",""
      period: "per month",""
      description: "Ideal for growing businesses and e-commerce",",
        "
      features: [",
        "
        "Up to 1M page views",""
        "Advanced analytics",""
        "Custom dashboards",""
        "Priority support",""
        "API access",""
        "Conversion tracking";
      ],",
        "
      popular: true",
        "
    },",
        "
    {"}
        "
      name: "Enterprise",""
      price: "$199",""
      period: "per month",""
      description: "For large websites with advanced needs",",
        "
      features: [",
        "
        "Unlimited page views",""
        "Advanced features",""
        "Custom integrations",""
        "Dedicated support",""
        "Advanced security",""
        "Custom development";
      ],",
        "
      popular: false",
        "
    };
  ];
,
      const benefits = [",
        "
    {"}
        "
      title: "Better Insights",""
      description: "Gain deeper insights into your website performance and user behavior",""
      icon: <className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Increase Conversions",""
      description: "Optimize your website to increase conversions by up to 30%",""
      icon: <Target className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Save Time",""
      description: "Automate reporting and get insights without manual analysis",""
      icon: <className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Data-Driven Decisions",""
      description: "Make informed decisions based on real data and analytics",""
      icon: <TrendingUp className="w-6 h-6" />""
    };
  ];
,
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">",)
        "
      <EnhancedSEO",>
        "
        title="Website Analytics Tool - Zion Tech Group | Advanced Web Analytics & Tracking",
      description="Powerful website analytics tool with real-time tracking, visitor behavior analysis, _conversion tracking, and custom dashboards. Optimize your website performance.",
      keywords="website analytics tool, _web analytics, _visitor tracking, _conversion tracking, _behavior analysis, website optimization",
      canonical="https://ziontechgroup.com/website-analytics-tool" />""
      {/* Hero Section */};
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""
        <ResponsiveContainer className="text-center">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">",
        "
              Website Analytics Tool",
        "
            </span>",
        "
          </h1>",
        "
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Understand your website performance with our comprehensive analytics tool.",
        "
            Track visitors, _analyze behavior, and optimize conversions with detailed insights.",
        "
          </p>",
        "
          <div className="flex flex-col sm:flex-row gap-4 justify-center">",
        "
            <FuturisticButton",>
        "
              href="/contact",
      variant="primary",
      size="lg",
      icon={<ArrowRight className="w-5 h-5" />};
            >",
        "
              Start Free Trial",
        "
            </FuturisticButton>",
        "
            <FuturisticButton",>
        "
              href="/demo",
      variant="outline",
      size="lg",
      icon={<Globe className="w-5 h-5" />};
            >",
        "
              Watch Demo",
        "
            </FuturisticButton>",
        "
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>",
        "
      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Powerful Analytics Features",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Everything you need to understand and optimize your website performance.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {features.map((feature, index) => (<FuturisticCard key={index} className="h-full">"")
                <div className="text-center mb-6">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",
        "
                    {feature.icon};
                  </div>",
        "
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300 mb-4">{feature.description}</p>",
        "
                </div>",
        "
                <ul className="space-y-2">",
        "
                  {feature.benefits.map((benefit, benefitIndex) => (",)}
        "
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />",
        "
                      {benefit};
                    </li>",
        "
                  ))};
                </ul>",
        "
              </FuturisticCard>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Simple, Transparent Pricing",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Choose the plan that fits your website size and analytics needs. No hidden fees, no surprises.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">",
        "
            {pricing.map((plan, index) => (",)}
        "
              <FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>",
        "
                {plan.popular && (",)}
        "
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">",
        "
                      Most Popular",
        "
                    </span>",
        "
                  </div>",
        "
                )};
                <div className="text-center mb-6">""
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                  <div className="text-4xl font-bold text-cyan-400 mb-2">""
                    {plan.price};
                    <span className="text-lg text-gray-400">{plan.period}</span>",
        "
                  </div>",
        "
                  <p className="text-gray-300 text-sm">{plan.description}</p>",
        "
                </div>",
        "
                <ul className="space-y-3 mb-8">",
        "
                  {plan.features.map((feature, featureIndex) => (",)}
        "
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />",
        "
                      {feature};
                    </li>",
        "
                  ))};
                </ul>",
        "
                <FuturisticButton",>
        "
                  href="/contact",
      variant={plan.popular ? "primary" : "outline"},
      size="sm",
      className="w-full";
                >",
        "
                  Get Started",
        "
                </FuturisticButton>",
        "
              </FuturisticCard>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Why Choose Our Analytics Tool?",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Join thousands of websites who have optimized their performance with our analytics tool.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",
        "
            {benefits.map((benefit, index) => (",)}
        "
              <div key={index} className="text-center">""
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",
        "
                  {benefit.icon};
                </div>",
        "
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""
                <p className="text-gray-300 text-sm">{benefit.description}</p>",
        "
              </div>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">""
        <ResponsiveContainer className="text-center">""
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
            Ready to Optimize Your Website?",
        "
          </h2>""
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Start your free trial today and see how our analytics tool can improve your website performance.",
        "
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">",
        "
            <FuturisticButton",>
        "
              href="/contact",
      variant="primary",
      size="lg",
      icon={<ArrowRight className="w-5 h-5" />};
            >",
        "
              Start Free Trial",
        "
            </FuturisticButton>",
        "
            <FuturisticButton",>
        "
              href="/demo",
      variant="outline",
      size="lg",
      icon={<Globe className="w-5 h-5" />};
            >",
        "
              Watch Demo",
        "
            </FuturisticButton>",
        "
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>",
        "
    </div>""
  )
    },
    {}
,
      export default WebsiteAnalyticsToolPage;
;