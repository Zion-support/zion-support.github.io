import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Settings, 
  Clock,
  Award,
  Sparkles,
  Brain,
  Activity,
  Target,
  Globe,
  Database
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAnalyticsPro = () => {
  const features = [
    {
      title: "Real-time Dashboards",
      description: "Live business intelligence with instant data visualization and insights",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide predictive analytics and recommendations",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Integrations",
      description: "Connect with 500+ data sources and APIs for comprehensive analytics",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "Mobile app access",
        "1 year data retention",
        "Basic AI insights"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Custom reports",
        "Priority support",
        "API access",
        "3 years data retention",
        "Advanced AI insights",
        "Real-time alerts",
        "Team collaboration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced reporting",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited data retention",
        "AI-powered insights",
        "Real-time monitoring",
        "Advanced security",
        "White-label solution",
        "SLA guarantee",
        "On-site training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Data Visualization",
      description: "Interactive charts, graphs, and dashboards for comprehensive data analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      details: [
        "Interactive dashboards",
        "Custom chart types",
        "Real-time updates",
        "Mobile-responsive design",
        "Export capabilities"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis for business planning",
      icon: <TrendingUp className="w-8 h-8" />,
      details: [
        "Sales forecasting",
        "Customer behavior prediction",
        "Market trend analysis",
        "Risk assessment",
        "Performance optimization"
      ]
    },
    {
      title: "Data Integration",
      description: "Seamless connection with business systems and data sources",
      icon: <Database className="w-8 h-8" />,
      details: [
        "500+ integrations",
        "Real-time data sync",
        "Custom connectors",
        "Data transformation",
        "Automated workflows"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Share insights and collaborate on data analysis across teams",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Shared dashboards",
        "Comment system",
        "Role-based access",
        "Team workspaces",
        "Notification system"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data strategy. The AI insights helped us identify new revenue opportunities worth $2M in the first quarter alone.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The real-time dashboards and predictive analytics have given us a competitive edge. We can now make data-driven decisions in real-time.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Global Manufacturing",
      role: "Data Director",
      content: "The integration capabilities are outstanding. We connected 50+ systems in just a few days and now have a unified view of our entire operation.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM", status: "Available" },
    { name: "Google Analytics", category: "Web Analytics", status: "Available" },
    { name: "Shopify", category: "E-commerce", status: "Available" },
    { name: "HubSpot", category: "Marketing", status: "Available" },
    { name: "Stripe", category: "Payments", status: "Available" },
    { name: "Slack", category: "Communication", status: "Available" },
    { name: "Microsoft 365", category: "Productivity", status: "Available" },
    { name: "AWS", category: "Cloud", status: "Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Analytics Pro - AI-Powered Business Intelligence Platform | Zion Tech Group"
        description="Advanced business intelligence platform with AI-powered insights, real-time dashboards, and predictive analytics. Connect 500+ data sources for comprehensive business analytics."
        keywords="business intelligence, analytics platform, data visualization, predictive analytics, AI insights, dashboard, data integration, business analytics"
        canonical="https://ziontechgroup.com/zion-analytics-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">500+ Data Source Integrations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced business intelligence platform with AI-powered insights, real-time dashboards, 
            and predictive analytics. Transform your data into actionable business intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Activity className="w-5 h-5" />}
            >
              View Live Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with 500+ popular business tools and data sources
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 font-semibold mb-2">{integration.name}</div>
                <div className="text-gray-400 text-xs mb-1">{integration.category}</div>
                <div className="text-green-400 text-xs">{integration.status}</div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive business intelligence tools powered by advanced AI and machine learning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform raw data into actionable business insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-cyan-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your business intelligence with flexible pricing plans. All plans include data security and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Zion Analytics Pro is transforming business intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses using Zion Analytics Pro to make data-driven decisions 
              and drive growth. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAnalyticsPro;