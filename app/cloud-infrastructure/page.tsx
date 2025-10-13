import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Users, 
  Award, 
  Sparkles, 
  Mail, 
  Smartphone, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Settings, 
  Monitor, 
  Lock, 
  BarChart3, 
  Target, 
  Brain, 
  HardDrive, 
  Cpu, 
  Network, 
  FileText, 
  Key, 
  Activity,
  Phone,
  MessageCircle,
  Headphones,
  Wifi,
  Database as DatabaseIcon,
  Loader
} from "lucide-react";

const CloudInfrastructurePage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Solutions",
      description: "Seamlessly integrate AWS, Azure, and Google Cloud for optimal performance and cost efficiency."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance, and advanced threat protection."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand to ensure optimal performance and cost control."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Worldwide content delivery network for lightning-fast performance across all regions."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Managed Databases",
      description: "Fully managed database services with automated backups, monitoring, and optimization."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and alerting to ensure maximum uptime and performance."
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Leading cloud platform with comprehensive services",
      features: ["EC2, S3, RDS", "Lambda functions", "CloudFront CDN", "Elastic Beanstalk"]
    },
    {
      name: "Microsoft Azure",
      logo: "AZ",
      description: "Enterprise-focused cloud solutions",
      features: ["Virtual Machines", "Azure SQL", "App Service", "Active Directory"]
    },
    {
      name: "Google Cloud",
      logo: "GC",
      description: "AI and data analytics powerhouse",
      features: ["Compute Engine", "BigQuery", "Cloud Functions", "Kubernetes Engine"]
    },
    {
      name: "Hybrid Cloud",
      logo: "HC",
      description: "Best of both worlds - on-premise and cloud",
      features: ["Hybrid connectivity", "Data synchronization", "Unified management", "Flexible deployment"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Single cloud provider",
        "Basic monitoring",
        "Email support",
        "99.9% uptime SLA",
        "Monthly backups",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Multi-cloud support",
        "Advanced monitoring",
        "Priority support",
        "99.95% uptime SLA",
        "Daily backups",
        "Advanced security",
        "Auto-scaling",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large organizations",
      features: [
        "Full cloud ecosystem",
        "Dedicated support team",
        "24/7 phone support",
        "99.99% uptime SLA",
        "Real-time backups",
        "Enterprise security",
        "Custom solutions",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Financial Services Inc.",
      role: "CTO",
      content: "Zion Tech Group's cloud infrastructure has been rock solid. We've achieved 99.99% uptime and our costs have decreased by 30% through their optimization.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Platform",
      role: "VP Engineering",
      content: "The auto-scaling capabilities are incredible. During peak shopping seasons, our infrastructure automatically scales without any manual intervention.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The security and compliance features give us complete confidence in storing sensitive patient data. Their expertise in healthcare cloud solutions is unmatched.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const infrastructureStats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Monitor className="w-6 h-6" /> },
    { number: "< 1min", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Security Compliance", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group | AWS, Azure, Google Cloud</title>
        <meta
          name="description"
          content="Scalable cloud infrastructure solutions with AWS, Azure, and Google Cloud. 99.99% uptime SLA, auto-scaling, and enterprise security. Start from $299/month."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, auto-scaling, cloud security, managed cloud services, hybrid cloud"
        />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">Scalable Cloud Infrastructure</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Cloud
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    {" "}Infrastructure
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Scalable cloud solutions with 99.99% uptime guarantee. We design, deploy, and manage 
                  cloud infrastructure across AWS, Azure, and Google Cloud platforms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>No setup fees</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Dashboard</h3>
                    <p className="text-gray-300">Real-time cloud monitoring</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">System Status</span>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">Operational</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">CPU Usage</span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Memory Usage</span>
                      </div>
                      <span className="text-purple-400 text-sm font-semibold">62%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-sm text-white">Uptime</span>
                      </div>
                      <span className="text-yellow-400 text-sm font-semibold">99.99%</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Last health check</div>
                    <div className="text-lg font-semibold text-green-400">2 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {infrastructureStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage scalable cloud infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Multi-Cloud Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solution for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{provider.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{provider.description}</p>
                  <div className="space-y-2">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-400">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Cloud Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the cloud infrastructure plan that matches your business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    plan.popular ? 'ring-2 ring-green-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Cloud Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our cloud infrastructure services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our cloud infrastructure solutions to scale efficiently. 
              Start your cloud transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;