import React from 'react'
import { Helmet  } from 'react-helmet-async'
import { Link  } from 'react-router-dom'
import { CpuChipIcon,
'use client';'use client';'
'use client';'
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
 } from '@heroicons/react/24/outline'
const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [{]      title: "AI-Powered Analytics Dashboard,
      description: "Comprehensive analytics solution with AI-driven insights and real-time data visualization.",
      icon: ChartBarIcon", "
      features: [Real-time data processing","]        "AI-powered insights", "
        "Custom dashboards, ""
        Automated reporting", "
        "Data export capabilities", "
        "Multi-user access""
      ],
      color: from-blue-50 to-cyan-50",
      price: "Starting at $99/month,
      benefits: ["Increased efficiency", Better decision making", "Cost savings],""
      useCases: [Business intelligence", "Performance tracking, "Data analysis"],"
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Content Generator,
      description: "Advanced content creation tool powered by artificial intelligence for blogs, social media, and marketing.",
      icon: DocumentTextIcon", "
      features: [AI content generation","]        "Multiple content types", "
        "SEO optimization, ""
        Brand voice consistency", "
        "Content scheduling", "
        "Performance analytics""
      ],
      color: from-green-50 to-emerald-50",
      price: "Starting at $79/month,
      benefits: ["Time savings", Consistent quality", "SEO optimization],""
      useCases: [Content marketing", "Social media, "Blog management"],"
      href: "/micro-saas/content-generator"
    },
    {
      title: "AI Customer Support Chatbot,
      description: "Intelligent chatbot solution that provides 24/7 customer support with natural language processing.",
      icon: ChatBubbleLeftRightIcon", "
      features: [Natural language processing","]        "24/7 availability", "
        "Multi-language support, ""
        Integration capabilities", "
        "Analytics dashboard", "
        "Custom training""
      ],
      color: from-purple-500 to-pink-500",
      price: "Starting at 49/month,
      benefits: ["24/7 support", Reduced costs", "Improved satisfaction],""
      useCases: [Customer service", "Lead qualification, "FAQ automation"],"
      href: "/micro-saas/ai-customer-support-chatbot"
    },
    {
      title: "AI Project Manager,
      description: "Intelligent project management tool with AI-powered task optimization and team collaboration features.",
      icon: CogIcon", "
      features: [AI task optimization","]        "Team collaboration", "
        "Progress tracking, ""
        Resource management", "
        "Automated scheduling", "
        "Performance insights""
      ],
      color: from-orange-500 to-red-500",
      price: "Starting at 29/month,
      benefits: ["Better organization", Improved productivity", "Resource optimization],""
      useCases: [Project management", "Team coordination, "Task automation"],"
      href: "/micro-saas/ai-project-manager"
    },
    {
      title: "AI Inventory Manager,
      description: "Smart inventory management system with predictive analytics and automated reordering capabilities.",
      icon: EyeIcon", "
      features: [Predictive analytics","]        "Automated reordering", "
        "Stock optimization, ""
        Multi-location support", "
        "Integration APIs", "
        "Real-time tracking""
      ],
      color: from-indigo-500 to-purple-500",
      price: "Starting at 99/month,
      benefits: ["Reduced waste", Optimized stock", "Cost savings],""
      useCases: [Inventory management", "Supply chain, "Retail operations"],"
      href: "/micro-saas/ai-inventory-manager"
    },
    {
      title: "AI Expense Tracker,
      description: "Intelligent expense tracking and categorization system with automated receipt processing and reporting.",
      icon: CurrencyDollarIcon", "
      features: [Automated categorization","]        "Receipt processing", "
        "Expense reporting, ""
        Budget tracking", "
        "Tax preparation", "
        "Multi-currency support""
      ],
      color: from-cyan-50 to-blue-50",
      price: "Starting at $59/month,
      benefits: ["Time savings", Better tracking", "Tax compliance],""
      useCases: [Expense management", "Financial tracking, "Tax preparation"],;"
      href: "/micro-saas/ai-expense-tracker;"
  }
  ]
  const features = [{]      title: "AI-Powered Solutions,
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
      icon: CpuChipIcon},
    {
      title: Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.,
      icon: CloudIcon},
    {
      title: "Easy Integration",
      description: Seamlessly integrate with your existing tools and workflows.",
      icon: CogIcon},
    {title: "24/7 Support,
      description: Round-the-clock support to ensure your success.,
      icon: UserGroupIcon}
  ]
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content=Discover our comprehensive micro SaaS solutions designed to streamline your business operations." />"
        <meta name=keywords" content="micro SaaS, AI solutions, business automation, productivity tools />"
      </Helmet>
      <div className="min-h-screen bg-white>"
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-10>"
          <div className="max-w-6xl mx-auto text-center>"
            <h1 className="text-5xl font-bold text-gray-90 mb-6>"
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-60 mb-8 max-w-3xl mx-auto>"
              Discover our comprehensive suite of micro SaaS solutions designed to streamline
              your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>"
              <Link>
                to="/contact" "
                className="bg-blue-60 text-white px-8 py-3 rounded-lg hover:bg-blue-70 transition-colors"
              >
                Get Started
              </Link>
              <Link>
                to=""/demo ""
                className=border border-blue-60 text-blue-60 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors""
              >
                View Demo
              </Link></div>
          </div></section>
        {/* Solutions Grid */}
        <section className=py-20 px-4">"
          <div className=max-w-6xl mx-auto">"
            <h2 className=text-3xl font-bold text-center text-gray-90 mb-12">"
              Our Micro SaaS Solutions
            </h2>
            <div className=grid md: grid-cols-2 lg:grid-cols-3 gap-8">"
              {solutions.map((solution, index) => (
                <div key={index} className=bg-white border border-gray-20 rounded-lg p-6 hover:shadow-lg transition-shadow">"
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>```                    <solution.icon className=w-6 h-6 text-white" />"
                  </div>
                  <h3 className=text-xl font-semibold text-gray-90 mb-3">{solution.title}</h3>"
                  <p className=text-gray-60 mb-4">{solution.description}</p>"
                  <div className=mb-4">"
                    <p className=text-blue-60 font-semibold">{solution.price}</p>"
                  </div>
                  <Link>
                    to={solution.href}
                    className=text-blue-60 hover:text-blue-70 font-medium flex items-center""
                  >
                    Learn More <ArrowRightIcon className=w-4 h-4 ml-1" />"
                  </Link></div>
              ))}
            </div></div>
        </section>
        {/* Features Section */}
        <section className=py-20 px-4 bg-gray-50">"
          <div className=max-w-6xl mx-auto">"
            <h2 className=text-3xl font-bold text-center text-gray-90 mb-12">"
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className=grid md: grid-cols-2 lg:grid-cols-4 gap-8">"
              {features.map((feature, index) => (
                <div key={index} className=text-center">"
                  <div className=w-16 h-16 mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center mb-4">"
                    <feature.icon className=w-8 h-8 text-white" />"
                  </div>
                  <h3 className=text-xl font-semibold text-gray-90 mb-3">{feature.title}</h3>"
                  <p className=text-gray-60">{feature.description}</p>"
                </div>
              ))}
            </div></div>
        </section>
        {/* CTA Section */}
        <section className=py-20 px-4">"
          <div className=max-w-4xl mx-auto text-center">"
            <h2 className=text-3xl font-bold text-gray-90 mb-6">"
              Ready to Transform Your Business?
            </h2>
            <p className=text-lg text-gray-60 mb-8>"              Let's discuss how our micro SaaS solutions can help you achieve your goals.'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>"
              <Link>
                to="/contact" "
                className="bg-blue-60 text-white px-8 py-3 rounded-lg hover:bg-blue-70 transition-colors"
              >
                Contact Us
              </Link>
              <Link>
                to=""/demo ""
                className=border border-blue-60 text-blue-60 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors""
              >
                Schedule Demo
              </Link></div>
          </div></section>
      </div>
        <meta name=description" content="Comprehensive micro SaaS solutions including AI-powered analytics, content management, customer support, and more. Transform your business with our innovative software solutions. />"
        <meta name="keywords content="micro SaaS, software solutions, AI analytics, content management, customer support, business automation" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-90 via-purple-90o0 to-slate-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed">
              Innovative micro SaaS products designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-40 max-w-3xl mx-auto">
              From AI-powered analytics to automated customer support, our micro SaaS solutions
              provide powerful, cost-effective tools to accelerate your business growth.
            </p></div>
        </div></section>
      {/* Micro SaaS Products Grid */}
      <section className="py-20 bg-slate-90">
        <div className="container mx-auto px-4">
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaaSProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <div key={product.title} className="group bg-gradient-to-br from-slate-80 to-slate-70 p-8 rounded-xl border border-slate-60 hover:border-purple-50 transition-all duration-30o0 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover: "scale-110 transition-transform floating`"}>```                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{product.title}</h3>
                  <p className="text-gray-30 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-40">{product.price}</span>
                      <span className="text-gray-40">/month</span>
                    </div>
                    <div className="text-sm text-gray-40">
                      Setup fee: {product.setupFee}
                    </div></div>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-3">Key Features: </h4>", "
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=flex items-center text-gray-30">"
                          <CheckCircleIcon className=w-4 h-4 text-green-40 mr-3 flex-shrink-0" />"
                          <span className=text-sm">{feature}</span>"
                        </li>
                      ))}
                    </ul></div>
                  {/* Benefits */}
                  <div className=mb-6">"
                    <h4 className=text-sm font-semibold text-gray-40 mb-2">Benefits: "</h4>, "
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-90/30 text-green-30 px-2 py-1 rounded-full">"
                          {benefit}
                        </span>
                      ))}
                    </div></div>
                  {/* Use Cases */}
                  <div className=mb-6">"
                    <h4 className=text-sm font-semibold text-gray-40 mb-2">Perfect for: "</h4>, "
                      {product.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-90/30 text-blue-30 px-2 py-1 rounded-full">"
                          {useCase}
                        </span>
                      ))}
                    </div></div>
                  <div className=flex gap-2">"
                    <Link>
                      to={product.href}
                      className=flex-1 inline-flex items-center justify-center gap-2 text-purple-40 hover: text-purple-30 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hove,r:bg-purple-40"/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link>
                      to=""/contact""
                      className=bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-4 py-2 rounded-lg hover: from-purple-70 hove,r:to-cyan-70 transition-all duration-30o0 font-semibold""
                    >
                      Get Started
                    </Link></div></div>);)}
          </div></div>
      </section>
      {/* Why Choose Our Micro SaaS */}
      <section className=py-20 bg-gradient-to-r from-slate-90 to-purple-90">"
        <div className=container mx-auto px-4">"
          <div className=text-center mb-16">"
            <h2 className=text-4xl md:text-5xl font-bold text-white mb-6">"
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className=text-xl text-gray-30 max-w-3xl mx-auto">"
              Built for modern businesses with cutting-edge technology and user-friendly interfaces
            </p></div>
          <div className=grid md: grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">"
            <div className=text-center">"
              <div className=w-20 h-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">"
                <CpuChipIcon className=w-10 h-10 text-white" />"
              </div>
              <h3 className=text-2xl font-bold text-white mb-4">AI-Powered</h3>"
              <p className=text-gray-30">"
                Advanced AI and machine learning capabilities built into every solution for maximum efficiency.
              </p></div>
            <div className=text-center">"
              <div className=w-20 h-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">"
                <ClockIcon className=w-10 h-10 text-white" />"
              </div>
              <h3 className=text-2xl font-bold text-white mb-4">Quick Setup</h3>"
              <p className=text-gray-30">"
                Get up and running in minutes with our streamlined onboarding and setup process.
              </p></div>
            <div className=text-center">"
              <div className=w-20 h-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">"
                <ShieldCheckIcon className=w-10 h-10 text-white" />"
              </div>
              <h3 className=text-2xl font-bold text-white mb-4">Secure & Reliable</h3>"
              <p className=text-gray-30">"
                Enterprise-grade security and 99.9% uptime guarantee for peace of mind.
              </p></div>
            <div className=text-center">"
              <div className=w-20 h-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">"
                <CogIcon className=w-10 h-10 text-white" />"
              </div>
              <h3 className=text-2xl font-bold text-white mb-4">Customizable</h3>"
              <p className=text-gray-30">"
                Tailor each solution to your specific business needs with flexible configuration options.
              </p></div>
          </div></div>
      </section>
      {/* CTA Section */}
      <section className=py-20 bg-slate-90">"
        <div className=container mx-auto px-4">"
          <div className=max-w-4xl mx-auto text-center">"
            <h2 className=text-4xl md:text-5xl font-bold text-white mb-8">"
              Ready to Transform Your Business?
            </h2>
            <p className=text-xl text-gray-30 mb-12>"              Let's discuss which micro SaaS solution is perfect for your business needs'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12>"
              <Link>
                to="/contact""
                className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-70 hover:to-cyan-70 transition-all duration-30o0 transform hove,r:scale-10o5 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link>
                to=""/demo""
                className=border-2 border-purple-40 text-purple-30 px-8 py-4 rounded-lg font-semibold hover: bg-purple-40 hove,r:text-white transition-all duration-30o0 flex items-center justify-center gap-2""
              >
                Schedule Demo
                <ArrowRightIcon className=w-5 h-5" />"
              </Link></div>
            <div className=flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-30">"
              <div className=flex items-center gap-3">"
                <PhoneIcon className=w-6 h-6 text-purple-40" />"
                <span>+1-30o2-464-0o950</span></div>
              <div className=flex items-center gap-3">"
                <EnvelopeIcon className=w-6 h-6 text-purple-40" />"
                <span>kleber@ziontechgroup.com</span></div>
            </div></div>
        </div></section>
    </>
  );
}
export default MicroSaaSSolutionsPage;