import { ArrowRight, RefreshCw, Database, Zap, Shield, Globe, Users, Star, CheckCircle, Mail, Smartphone, MapPin, Link2, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionDataSync() {
  const features = [
    {
      title: "Real-time Synchronization",
      description: "Keep all your data sources in perfect sync with real-time updates and conflict resolution",
      icon: <RefreshCw className="w-6 h-6" />,
      benefit: "Always up-to-date data"
    },
    {
      title: "Universal Connectors",
      description: "Connect to 500+ data sources including databases, APIs, cloud services, and file systems",
      icon: <Link2 className="w-6 h-6" />,
      benefit: "Connect anything"
    },
    {
      title: "Intelligent Mapping",
      description: "AI-powered field mapping automatically detects and maps data relationships between systems",
      icon: <Database className="w-6 h-6" />,
      benefit: "Zero configuration"
    },
    {
      title: "Data Transformation",
      description: "Transform data on-the-fly with built-in functions, custom scripts, and data validation",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Clean, consistent data"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance with SOC 2 and GDPR",
      icon: <Shield className="w-6 h-6" />,
      benefit: "Maximum security"
    },
    {
      title: "Global Performance",
      description: "High-performance sync with global CDN and optimized data transfer protocols",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Lightning fast"
    }
  ];

  const integrations = [
    {
      name: "Databases",
      description: "MySQL, PostgreSQL, MongoDB, Redis, and 50+ more",
      icon: <Database className="w-8 h-8" />,
      count: "50+"
    },
    {
      name: "Cloud Services",
      description: "AWS, Azure, Google Cloud, Salesforce, and 100+ more",
      icon: <Cloud className="w-8 h-8" />,
      count: "100+"
    },
    {
      name: "APIs & Webhooks",
      description: "REST APIs, GraphQL, webhooks, and custom endpoints",
      icon: <Link2 className="w-8 h-8" />,
      count: "Unlimited"
    },
    {
      name: "File Systems",
      description: "FTP, SFTP, S3, Google Drive, Dropbox, and more",
      icon: <FileText className="w-8 h-8" />,
      count: "25+"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 data sources",
        "Real-time sync",
        "Basic transformations",
        "Email support",
        "1GB data transfer/month",
        "Standard connectors"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50 data sources",
        "Advanced transformations",
        "Custom connectors",
        "Priority support",
        "10GB data transfer/month",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom development",
        "Dedicated support",
        "24/7 phone support",
        "Unlimited data transfer",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      company: "E-commerce Platform",
      role: "Data Engineer",
      content: "Zion Data Sync saved us months of development time. We connected all our systems in just a few days.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Kevin Liu",
      company: "SaaS Company",
      role: "CTO",
      content: "The real-time sync is incredible. Our data is always consistent across all platforms now.",
      rating: 5,
      avatar: "KL"
    },
    {
      name: "Rachel Green",
      company: "Marketing Agency",
      role: "Data Analyst",
      content: "The AI mapping feature is a game-changer. It automatically figured out our data relationships.",
      rating: 5,
      avatar: "RG"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Data Sync - Real-time Data Synchronization Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Sync your data across all platforms with Zion Data Sync. Real-time synchronization, 500+ connectors, and AI-powered data mapping for seamless integration."
        />
        <meta
          name="keywords"
          content="data synchronization, data integration, ETL, data pipeline, real-time sync, data connectors, data transformation, API integration"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-data-sync" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 mb-6">
              <RefreshCw className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Data Integration Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400">
                Zion Data Sync
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most powerful data synchronization platform. Connect, sync, and transform data across 
              500+ sources with real-time updates and AI-powered intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <RefreshCw className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Data Connectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
                <div className="text-gray-300 text-sm">Synchronization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300 text-sm">Faster Setup</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect to Everything
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with 500+ data sources and platforms with our universal connectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {integration.description}
                  </p>
                  <div className="flex items-center justify-center text-green-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {integration.count} Available
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Data Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to sync, transform, and manage your data across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Flexible Data Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your data integration needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Data Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what data professionals say about Zion Data Sync
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-green-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sync Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of companies using Zion Data Sync to keep their data synchronized 
              across all platforms. Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <RefreshCw className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}