<<<<<<< HEAD
import { Helmet } from "react-helmet-async"; const CloudMigrationServicesPage: React.FC = () => { return ( <> <Helmet> <title>Cloud Migration Services</title> <meta name="description" content="Professional cloud migration services solutions and services" /> <meta name="keywords" content="cloud, migration, services" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cloud migration services solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  ArrowRight, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  TrendingUp,
  Database,
  Server,
  Lock,
  Globe,
  BarChart3,
  Settings
} from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    "Comprehensive cloud readiness assessment",
    "Zero-downtime migration strategies",
    "Multi-cloud and hybrid cloud solutions",
    "Data security and compliance assurance",
    "Cost optimization and resource management",
    "Automated migration tools and scripts",
    "Performance monitoring and optimization",
    "Disaster recovery and backup solutions",
    "24/7 migration support and monitoring",
    "Post-migration optimization and training"
  ];

  const cloudProviders = [
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, color: "text-orange-600" },
    { name: "Microsoft Azure", icon: <Server className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Google Cloud", icon: <Globe className="w-6 h-6" />, color: "text-green-600" },
    { name: "IBM Cloud", icon: <Database className="w-6 h-6" />, color: "text-blue-500" },
    { name: "Oracle Cloud", icon: <Shield className="w-6 h-6" />, color: "text-red-600" },
    { name: "Alibaba Cloud", icon: <Settings className="w-6 h-6" />, color: "text-orange-500" }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure, applications, and data to create a detailed migration roadmap."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business needs, including timeline, budget, and risk mitigation plans."
    },
    {
      step: "03",
      title: "Pre-Migration Testing",
      description: "Thorough testing of migration processes in a controlled environment to ensure zero data loss and minimal downtime."
    },
    {
      step: "04",
      title: "Migration Execution",
      description: "Seamless migration of your applications, data, and infrastructure to the cloud with real-time monitoring."
    },
    {
      step: "05",
      title: "Optimization & Support",
      description: "Post-migration optimization, performance tuning, and ongoing support to ensure maximum efficiency."
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$2,999",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 servers",
        "Basic migration planning",
        "Email support",
        "Standard security",
        "30-day post-migration support",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      description: "Ideal for medium to large enterprises",
      features: [
        "Up to 100 servers",
        "Comprehensive migration strategy",
        "24/7 phone support",
        "Advanced security & compliance",
        "90-day post-migration support",
        "Advanced monitoring & optimization",
        "Custom migration tools",
        "Team training included"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      description: "Tailored solutions for complex requirements",
      features: [
        "Unlimited servers",
        "Custom migration strategy",
        "Dedicated project manager",
        "Enterprise-grade security",
        "1-year post-migration support",
        "Full optimization suite",
        "Custom development",
        "White-glove service"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Migrations", icon: <Cloud className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime During Migration", icon: <Clock className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Migration Support", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "40% Cost Reduction",
      description: "Optimize your cloud resources and reduce operational costs significantly"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security and compliance with industry standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Improved Performance",
      description: "Faster, more reliable applications with cloud-native architecture"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scalability",
      description: "Scale your infrastructure globally to meet growing demands"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | Professional Cloud Migration Experts</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, Google Cloud. Zero-downtime migration, cost optimization, and 24/7 support. Reduce costs by 40% and improve performance." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, infrastructure migration" />
        <meta property="og:title" content="Cloud Migration Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with professional cloud migration services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 Cloud Migration Experts
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-df60
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cloud Migration
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert cloud migration services for AWS, Azure, Google Cloud, and more. 
                Zero-downtime migration, 40% cost reduction, and 24/7 support. 
                Transform your infrastructure with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Our Cloud Migration Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your infrastructure with our proven migration methodology and expert team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Migration Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Cloud Providers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud platforms to ensure the best fit for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={provider.color}>{provider.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Migration Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 5-step methodology for successful cloud migration
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your infrastructure size and requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 hover:transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Contact Sales'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free cloud readiness assessment and migration strategy tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Cloud className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  ); };
=======
  );
};

>>>>>>> cursor/enhance-application-with-new-services-and-improvements-df60
export default CloudMigrationServicesPage;