import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Lock, 
  Shield, 
  Upload, 
  Download, 
  Share2, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Sparkles,
  Monitor,
  Database,
  Globe,
  Smartphone,
  Award,
  Target,
  Brain,
  Cpu,
  Users,
  Clock,
  TrendingUp,
  Zap,
  FileText,
  Folder,
  Archive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionCloudVaultPage = () => {
  const features = [
    {
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption ensures your data is protected at rest and in transit with zero-knowledge architecture.',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['AES-256 encryption', 'Zero-knowledge architecture', 'Client-side encryption', 'Secure key management']
    },
    {
      title: 'Unlimited Storage Capacity',
      description: 'Scale your storage needs without limits. Store everything from documents to large media files with no restrictions.',
      icon: <Database className="w-6 h-6" />,
      benefits: ['Unlimited storage', 'No file size limits', 'Automatic scaling', 'Cost-effective pricing']
    },
    {
      title: 'Advanced File Sharing',
      description: 'Secure file sharing with granular permissions, expiration dates, and password protection for maximum security.',
      icon: <Share2 className="w-6 h-6" />,
      benefits: ['Granular permissions', 'Password protection', 'Expiration dates', 'Audit trails']
    },
    {
      title: 'Version Control & History',
      description: 'Never lose your work with comprehensive version control and file history tracking for all your documents.',
      icon: <Archive className="w-6 h-6" />,
      benefits: ['File versioning', 'Change tracking', 'Rollback capability', 'Collaboration history']
    },
    {
      title: 'Team Collaboration Tools',
      description: 'Real-time collaboration features that allow teams to work together seamlessly on documents and projects.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Real-time editing', 'Comment system', 'Task assignment', 'Notification system']
    },
    {
      title: 'Mobile & Desktop Sync',
      description: 'Access your files anywhere with seamless synchronization across all your devices and platforms.',
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ['Cross-platform sync', 'Offline access', 'Mobile apps', 'Desktop integration']
    }
  ];

  const securityFeatures = [
    {
      name: 'Data Encryption',
      description: 'AES-256 encryption for maximum security',
      icon: <Lock className="w-8 h-8" />,
      level: 'Military Grade'
    },
    {
      name: 'Access Control',
      description: 'Multi-factor authentication and role-based access',
      icon: <Shield className="w-8 h-8" />,
      level: 'Enterprise'
    },
    {
      name: 'Compliance',
      description: 'GDPR, HIPAA, and SOC 2 compliant',
      icon: <Award className="w-8 h-8" />,
      level: 'Certified'
    },
    {
      name: 'Backup & Recovery',
      description: 'Automated backups with 99.99% uptime',
      icon: <Cloud className="w-8 h-8" />,
      level: '99.99%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '1TB storage',
        'End-to-end encryption',
        'Mobile & desktop apps',
        'Basic sharing',
        'Email support',
        'Version history (30 days)'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '5TB storage',
        'Advanced sharing controls',
        'Team collaboration',
        'Admin dashboard',
        'Priority support',
        'Version history (1 year)',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited storage',
        'Advanced security features',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Unlimited version history',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Zion Cloud Vault has revolutionized how our team collaborates. The real-time editing and version control features are game-changers.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Mark Thompson',
      company: 'Legal Firm',
      role: 'Managing Partner',
      content: 'The security features give us peace of mind when handling sensitive client documents. The encryption is top-notch.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Sarah Davis',
      company: 'Marketing Consultancy',
      role: 'Operations Manager',
      content: 'The unlimited storage and seamless sync across devices has made our workflow so much more efficient.',
      rating: 5,
      avatar: 'SD'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Files Stored', icon: <FileText className="w-6 h-6" /> },
    { number: '99.99%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '50,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '256-bit', label: 'Encryption', icon: <Lock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion Cloud Vault - Secure Cloud Storage Solution | Zion Tech Group"
        description="Store and share your files securely with Zion Cloud Vault. End-to-end encryption, unlimited storage, and advanced collaboration features for modern teams."
        keywords="cloud storage, file sharing, encryption, collaboration, secure storage, team collaboration, file sync, data protection"
        canonical="https://ziontechgroup.com/zion-cloud-vault"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Cloud className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Secure Cloud Storage</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Zion Cloud Vault
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Store and share your files securely with our advanced cloud storage solution. 
            End-to-end encryption, unlimited storage, and seamless collaboration for modern teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your data is protected with military-grade security and compliance standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-2xl font-bold text-green-400">{feature.level}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need for secure file storage and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your storage needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Zion Cloud Vault is transforming team collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Storing Securely Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of teams already using Zion Cloud Vault for secure file storage and collaboration. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
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
        </div>
      </section>
    </div>
  );
};

export default ZionCloudVaultPage;