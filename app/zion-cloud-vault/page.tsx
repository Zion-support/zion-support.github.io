import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Cloud, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Database,
  Settings,
  Clock,
  Award,
  Sparkles,
  Rocket,
  Target,
  Lock,
  Eye,
  Cpu,
  HardDrive
} from "lucide-react";

const ZionCloudVaultPage = () => {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects your data at rest and in transit. Your files are encrypted before leaving your device and remain encrypted in our secure cloud.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "Unlimited Storage",
      description: "Store unlimited files, documents, and data without worrying about storage limits. Scale from personal use to enterprise needs seamlessly.",
      icon: <HardDrive className="w-6 h-6" />,
      benefits: ["Unlimited storage", "No file size limits", "Automatic scaling", "Global CDN"]
    },
    {
      title: "Advanced Collaboration",
      description: "Work together on files with real-time editing, version control, and team sharing. Control access permissions and track changes.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Real-time editing", "Version control", "Team sharing", "Access permissions"]
    },
    {
      title: "Mobile Sync",
      description: "Access your files anywhere with our mobile apps for iOS and Android. Automatic sync ensures you always have the latest version.",
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ["iOS & Android apps", "Automatic sync", "Offline access", "Touch-optimized"]
    },
    {
      title: "API Integration",
      description: "Integrate with your existing tools and workflows through our comprehensive API. Connect to 100+ popular business applications.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["RESTful API", "Webhook support", "100+ integrations", "Custom connectors"]
    },
    {
      title: "Custom Branding",
      description: "White-label the platform with your company's logo, colors, and domain. Perfect for agencies and consultants serving clients.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Custom branding", "White-label domain", "Client management", "Multi-tenant"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Mobile apps",
        "Basic collaboration",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Mobile apps",
        "Advanced collaboration",
        "Priority support",
        "API access",
        "Team management",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Mobile apps",
        "Enterprise collaboration",
        "24/7 dedicated support",
        "Unlimited API access",
        "Advanced team management",
        "Custom branding",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "256-bit", label: "Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "100+", label: "Integrations", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure cloud storage with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible anywhere. Start your free trial today."
        />
        <meta
          name="keywords"
          content="cloud storage, secure storage, end-to-end encryption, file sharing, collaboration, unlimited storage, data security, cloud backup"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-400 text-sm font-medium">#1 Secure Cloud Storage</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Zion Cloud Vault
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. 
                  Your data, secured and accessible anywhere.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Secure Storage Dashboard</h3>
                    <p className="text-gray-300 text-sm">Your files, protected and accessible</p>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Storage Used</span>
                        <span className="text-green-400 text-sm">2.4 TB</span>
                      </div>
                      <div className="text-2xl font-bold text-white">Unlimited</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-gray-300 text-sm mb-1">Files Synced</div>
                        <div className="text-lg font-bold text-white">15,247</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-gray-300 text-sm mb-1">Encryption</div>
                        <div className="text-lg font-bold text-white">AES-256</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-gray-300 text-sm mb-2">Security Status</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">All files encrypted and secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Secure Storage Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and share your files securely
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your storage needs. All plans include unlimited storage and encryption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-indigo-500/50 shadow-indigo-500/20' 
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Files?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion Cloud Vault to store and share files securely. 
                Start your free trial today or contact us for a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-indigo-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-indigo-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionCloudVaultPage;