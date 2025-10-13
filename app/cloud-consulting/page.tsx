import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Smartphone,
  Zap,
  Database
} from 'lucide-react';

const CloudConsultingPage = () => {
  const features = [
    {
      title: "Cloud Strategy & Planning",
      description: "Develop comprehensive cloud strategies aligned with your business objectives",
      icon: <Target className="w-6 h-6" />,
      details: "Cloud readiness assessment, migration planning, and cost optimization"
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Design and implement robust multi-cloud solutions for maximum flexibility",
      icon: <Globe className="w-6 h-6" />,
      details: "AWS, Azure, GCP integration with seamless workload portability"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Implement enterprise-grade security and compliance frameworks",
      icon: <Shield className="w-6 h-6" />,
      details: "Zero-trust architecture, data encryption, and regulatory compliance"
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs while improving performance and reliability",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Right-sizing, reserved instances, and automated cost management"
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement modern DevOps practices with cloud-native CI/CD pipelines",
      icon: <Zap className="w-6 h-6" />,
      details: "Container orchestration, infrastructure as code, and automated deployments"
    },
    {
      title: "24/7 Cloud Monitoring",
      description: "Proactive monitoring and management of your cloud infrastructure",
      icon: <Clock className="w-6 h-6" />,
      details: "Real-time monitoring, alerting, and automated incident response"
    }
  ];

  const pricingPlans = [
    {
      name: "Cloud Assessment",
      price: "$5,000",
      period: "/project",
      description: "Comprehensive cloud readiness and strategy assessment",
      features: [
        "Current state analysis",
        "Cloud readiness assessment",
        "Migration roadmap",
        "Cost analysis",
        "Security evaluation",
        "Recommendations report"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Cloud Migration",
      price: "$25,000",
      period: "/project",
      description: "Complete cloud migration with optimization",
      features: [
        "Migration planning",
        "Data migration",
        "Application modernization",
        "Security implementation",
        "Performance optimization",
        "Training & documentation",
        "3 months support",
        "Go-live assistance"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Cloud Management",
      price: "$8,000",
      period: "/month",
      description: "Ongoing cloud management and optimization",
      features: [
        "24/7 monitoring",
        "Performance optimization",
        "Cost management",
        "Security updates",
        "Backup & disaster recovery",
        "Monthly reporting",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      description: "Optimize cloud spending and eliminate waste",
      icon: <TrendingUp className="w-8 h-8" />,
      stat: "40% cost reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Improve Performance",
      description: "Enhance application performance and reliability",
      icon: <Zap className="w-8 h-8" />,
      stat: "99.9% uptime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enhance Security",
      description: "Implement enterprise-grade security measures",
      icon: <Shield className="w-8 h-8" />,
      stat: "100% compliance",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scale Efficiently",
      description: "Scale resources based on demand automatically",
      icon: <Target className="w-8 h-8" />,
      stat: "10x scalability",
      color: "from-orange-500 to-red-500"
    }
  ];

  const cloudProviders = [
    { name: "Amazon Web Services", description: "Leading cloud platform with comprehensive services" },
    { name: "Microsoft Azure", description: "Enterprise-focused cloud with hybrid capabilities" },
    { name: "Google Cloud Platform", description: "AI and data analytics focused cloud solutions" },
    { name: "IBM Cloud", description: "Enterprise cloud with AI and blockchain services" },
    { name: "Oracle Cloud", description: "Database and enterprise application focused" },
    { name: "Alibaba Cloud", description: "Global cloud provider with strong Asia presence" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Consulting Services - Expert Cloud Strategy & Migration | Zion Tech Group</title>
        <meta name="description" content="Transform your business with expert cloud consulting. From strategy to migration, we help you optimize costs, improve performance, and enhance security in the cloud." />
        <meta name="keywords" content="cloud consulting, cloud migration, cloud strategy, AWS, Azure, GCP, cloud optimization, cloud security" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Cloud Consulting</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Consulting Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with expert cloud consulting. From strategy to migration, 
            we help you optimize costs, improve performance, and enhance security in the cloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Free Cloud Assessment
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-4 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Cloud Consulting?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Cloud Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Providers Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Multi-Cloud Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {provider.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies who trust our cloud expertise to optimize costs, 
              improve performance, and accelerate their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Free Assessment
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudConsultingPage;