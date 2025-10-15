
import FuturisticCard from '../components/FuturisticCard',
      import FuturisticButton from '../components/FuturisticButton',
      import ResponsiveContainer from '../components/ResponsiveContainer',
      import EnhancedSEO from '../components/EnhancedSEO';
,
      const ProjectManagementToolPage = () => {"}
        "
  const features = [",
        "
    {""}
      title: "Task Management",""
      description: "Create, assign, and track tasks with drag-and-drop functionality",""
      icon: <CheckCircle className="w-8 h-8" />,""
      benefits: ["Visual task boards", "Priority settings", "Due date tracking", "Progress monitoring"]
    },",
        "
    {"}
        "
      title: "Team Collaboration",""
      description: "Real-time collaboration tools for seamless team communication",""
      icon: <Users className="w-8 h-8" />,""
      benefits: ["Team chat", "File sharing", "Comment threads", "Notification system"]
    },",
        "
    {"}
        "
      title: "Project Planning",""
      description: "Comprehensive project planning with Gantt charts and timelines",""
      icon: <Calendar className="w-8 h-8" />,""
      benefits: ["Gantt charts", "Milestone tracking", "Resource allocation", "Timeline management"]
    },",
        "
    {"}
        "
      title: "Analytics & Reporting",""
      description: "Advanced analytics to track project performance and team productivity",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Performance metrics", "Custom reports", "Data visualization", "Export capabilities"]
    },",
        "
    {"}
        "
      title: "Time Tracking",""
      description: "Built-in time tracking for accurate project billing and productivity analysis",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Automatic tracking", "Manual entry", "Billable hours", "Productivity insights"]
    },",
        "
    {"}
        "
      title: "Integration Hub",""
      description: "Connect with your favorite tools and services for seamless workflow",""
      icon: <className="w-8 h-8" />,""
      benefits: ["API integrations", "Webhook support", "Third-party apps", "Custom connectors"]
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
      description: "Perfect for small teams getting started",",
        "
      features: [",
        "
        "Up to 5 team members",""
        "Unlimited projects",""
        "Basic task management",""
        "Email support",""
        "5GB storage";
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
      description: "Ideal for growing teams and businesses",",
        "
      features: [",
        "
        "Up to 25 team members",""
        "Advanced analytics",""
        "Time tracking",""
        "Priority support",""
        "50GB storage",""
        "API access";
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
      description: "For large organizations with advanced needs",",
        "
      features: [",
        "
        "Unlimited team members",""
        "Custom integrations",""
        "Advanced security",""
        "Dedicated support",""
        "Unlimited storage",""
        "Custom reporting";
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
      title: "Increase Productivity",""
      description: "Streamline workflows and boost team efficiency by up to 40%",""
      icon: <Target className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Better Visibility",""
      description: "Get real-time insights into project progress and team performance",""
      icon: <className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Reduce Costs",""
      description: "Eliminate the need for multiple tools and reduce software costs",""
      icon: <className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Scale Easily",""
      description: "Grow your team and projects without changing your workflow",""
      icon: <Globe className="w-6 h-6" />""
    };
  ];
,
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">",)
        "
      <EnhancedSEO",>
        "
        title="Project Management Tool - Zion Tech Group | Team Collaboration & Task Management",
      description="Powerful project management tool with task management, team collaboration, _analytics, and time tracking. Streamline your workflow and boost productivity.",
      keywords="project management tool, _task management, _team collaboration, _project planning, _time tracking, productivity software",
      canonical="https://ziontechgroup.com/project-management-tool" />""
      {/* Hero Section */};
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""
        <ResponsiveContainer className="text-center">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">",
        "
              Project Management Tool",
        "
            </span>",
        "
          </h1>",
        "
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Streamline your projects with our comprehensive project management solution.",
        "
            Manage tasks, _collaborate with your team, and track progress all in one place.",
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
              Powerful Features",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Everything you need to manage projects effectively and keep your team productive.",
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
              Choose the plan that fits your team size and needs. No hidden fees, no surprises.",
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
              Why Choose Our Project Management Tool?",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Join thousands of teams who have transformed their project management with our solution.",
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
            Ready to Transform Your Project Management?",
        "
          </h2>""
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Start your free trial today and see how our project management tool can boost your team's productivity.",
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
      export default ProjectManagementToolPage;
;