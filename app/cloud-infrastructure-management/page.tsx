import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Target,
  Sparkles,
  FileText,
  BarChart,
  Download,
  Phone,
  Mail,
  Star,
  Activity,
  BookOpen,
  Smile,
  Settings,
  Smartphone,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  TrendingUp,
  Monitor
} from 'lucide-react';

const CloudInfrastructureManagementPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Multi-Cloud Management",
      description: "Seamlessly manage AWS, Azure, GCP, and hybrid cloud environments from a single platform",
      price: "$199/month"
    },
    {
      icon: Server,
      title: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting for servers, databases, and network infrastructure",
      price: "$149/month"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Automated database tuning, backup management, and performance optimization",
      price: "$179/month"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security monitoring, vulnerability scanning, and compliance management",
      price: "$229/month"
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Intelligent auto-scaling based on demand patterns and resource utilization",
      price: "$159/month"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access control and team collaboration tools for infrastructure management",
      price: "$99/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly reports",
        "Cloud backup",
        "Basic auto-scaling"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies and mid-size enterprises",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Advanced security suite",
        "Real-time reports",
        "Automated backups",
        "Intelligent auto-scaling",
        "Multi-cloud support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex infrastructure needs",
      features: [
        "Unlimited servers",
        "Enterprise monitoring",
        "24/7 dedicated support",
        "Full security suite",
        "Custom reporting",
        "Disaster recovery",
        "Advanced auto-scaling",
        "Multi-cloud orchestration",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      category: "Cloud Migration",
      icon: Cloud,
      description: "Seamless migration to cloud platforms with zero downtime and data integrity",
      services: [
        "AWS migration services",
        "Azure cloud migration",
        "Google Cloud migration",
        "Hybrid cloud solutions",
        "Data migration tools",
        "Application modernization"
      ]
    },
    {
      category: "Infrastructure Monitoring",
      icon: Monitor,
      description: "Comprehensive monitoring and alerting for all infrastructure components",
      services: [
        "Server performance monitoring",
        "Database health checks",
        "Network traffic analysis",
        "Application performance monitoring",
        "Log aggregation and analysis",
        "Custom dashboard creation"
      ]
    },
    {
      category: "Security Management",
      icon: Shield,
      description: "Advanced security monitoring and compliance management for cloud infrastructure",
      services: [
        "Vulnerability scanning",
        "Security compliance auditing",
        "Access control management",
        "Encryption key management",
        "Threat detection and response",
        "Security policy enforcement"
      ]
    },
    {
      category: "Cost Optimization",
      icon: TrendingUp,
      description: "Intelligent cost management and optimization across all cloud platforms",
      services: [
        "Cost analysis and reporting",
        "Resource right-sizing",
        "Reserved instance management",
        "Spot instance optimization",
        "Budget alerts and controls",
        "Cost allocation and tagging"
      ]
    }
  ];

  const benefits = [
    {
      title: "99.9% Uptime",
      description: "Ensure maximum availability with our robust infrastructure management",
      icon: Server,
      stats: "99.9% SLA guarantee"
    },
    {
      title: "Cost Reduction",
      description: "Optimize cloud costs and reduce infrastructure expenses by up to 40%",
      icon: TrendingUp,
      stats: "40% cost savings"
    },
    {
      title: "Enhanced Security",
      description: "Comprehensive security monitoring and compliance management",
      icon: Shield,
      stats: "100% compliance"
    },
    {
      title: "Scalability",
      description: "Auto-scaling capabilities that adapt to your business needs",
      icon: Zap,
      stats: "10x faster scaling"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      icon: Cloud,
      description: "Full AWS management and optimization services"
    },
    {
      name: "Microsoft Azure",
      icon: Server,
      description: "Comprehensive Azure cloud infrastructure management"
    },
    {
      name: "Google Cloud Platform",
      icon: Database,
      description: "GCP infrastructure monitoring and optimization"
    },
    {
      name: "IBM Cloud",
      icon: Settings,
      description: "IBM Cloud services and hybrid cloud solutions"
    },
    {
      name: "Oracle Cloud",
      icon: Shield,
      description: "Oracle Cloud Infrastructure management and migration"
    },
    {
      name: "Alibaba Cloud",
      icon: Wifi,
      description: "Alibaba Cloud services for global expansion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure Management - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive cloud infrastructure management for AWS, Azure, GCP. 99.9% uptime, cost optimization, security monitoring. Starting at $299/month." 
        />
        <meta 
          name="keywords" 
          content="cloud infrastructure, cloud management, AWS, Azure, GCP, cloud migration, infrastructure monitoring, cloud optimization, DevOps" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Enterprise Cloud Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud Infrastructure
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Management Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cloud infrastructure management for AWS, Azure, GCP, and hybrid environments. 
              Ensure 99.9% uptime, optimize costs, and maintain security with our expert cloud management services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
                <Cloud className="w-5 h-5 mr-2" />
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Infrastructures Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Cloud
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Management
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud infrastructure management services provide everything you need 
              to optimize, secure, and scale your cloud environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-blue-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Infrastructure
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to ongoing management, we provide comprehensive 
              infrastructure services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{category.category}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                    
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Multi-Cloud Platform
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support all major cloud providers and help you choose the best 
              platform for your specific needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <provider.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{provider.name}</h3>
                <p className="text-gray-300 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Management?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of enterprises who trust our cloud infrastructure 
              management services for their critical business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Cloud
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your infrastructure needs. 
              All plans include our core management features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105'
                    : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Optimize Your Cloud
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Infrastructure Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let cloud complexity slow you down. Let our experts manage your 
            infrastructure while you focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Contact Expert
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free infrastructure assessment • ✓ No long-term contracts • ✓ 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructureManagementPage;