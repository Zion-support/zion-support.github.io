import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle, Star, Zap, Shield, Lock, Database, Users, Upload, Download, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionCloudVault = () => {
  const features = [
    'Unlimited Cloud Storage & Backup',
    'End-to-End Encryption (AES-256)',
    'Real-time File Synchronization',
    'Advanced File Versioning & Recovery',
    'Team Collaboration & Sharing',
    'Automated Backup Scheduling',
    'Cross-Platform Access',
    'Advanced Search & Organization',
    'Compliance & Audit Logging',
    'API Integration & Webhooks',
    '24/7 Technical Support',
    '99.99% Uptime SLA Guarantee'
  ];

  const storagePlans = [
    {
      name: 'Personal',
      price: '$29',
      period: '/month',
      originalPrice: '$59',
      storage: '1TB',
      users: '1 User',
      description: 'Perfect for individuals',
      features: [
        '1TB Cloud Storage',
        'End-to-End Encryption',
        'File Synchronization',
        'Version History (30 days)',
        'Mobile Apps',
        'Email Support',
        'Basic Sharing',
        'Automated Backup'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      originalPrice: '$199',
      storage: '10TB',
      users: 'Up to 10 Users',
      description: 'Ideal for small teams',
      features: [
        '10TB Cloud Storage',
        'Advanced Encryption',
        'Team Collaboration',
        'Version History (1 year)',
        'Advanced Sharing',
        'Priority Support',
        'Admin Dashboard',
        'API Access',
        'Compliance Tools',
        'Custom Branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      originalPrice: '$599',
      storage: 'Unlimited',
      users: 'Unlimited Users',
      description: 'For large organizations',
      features: [
        'Unlimited Storage',
        'Military-Grade Encryption',
        'Advanced Collaboration',
        'Unlimited Version History',
        'Custom Integrations',
        'Dedicated Support',
        'Advanced Analytics',
        'SSO Integration',
        'Custom SLA',
        'On-premise Option'
      ],
      popular: false
    }
  ];

  const securityFeatures = [
    {
      name: 'End-to-End Encryption',
      description: 'Your files are encrypted before leaving your device and remain encrypted in our secure cloud',
      icon: <Lock className="w-8 h-8" />,
      level: 'AES-256'
    },
    {
      name: 'Zero-Knowledge Architecture',
      description: 'We cannot access your files even if we wanted to. Only you have the encryption keys',
      icon: <Shield className="w-8 h-8" />,
      level: '100% Private'
    },
    {
      name: 'Multi-Factor Authentication',
      description: 'Additional security layers protect your account with biometric and hardware key support',
      icon: <Users className="w-8 h-8" />,
      level: 'MFA Enabled'
    },
    {
      name: 'Compliance Ready',
      description: 'Meets GDPR, HIPAA, SOC 2, and other major compliance requirements for enterprise use',
      icon: <CheckCircle className="w-8 h-8" />,
      level: 'SOC 2 Type II'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Zion Cloud Vault revolutionized our file management. The collaboration features are incredible and our team productivity increased by 60%.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Mark Stevens',
      company: 'Legal Firm',
      role: 'Managing Partner',
      content: 'The security and compliance features give us peace of mind. We can safely store sensitive client documents with confidence.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Amanda Foster',
      company: 'Healthcare Practice',
      role: 'Practice Manager',
      content: 'HIPAA compliance was our biggest concern. Zion Cloud Vault handles all our patient data securely and meets all requirements.',
      rating: 5,
      avatar: 'AF'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Cloud Vault - Secure Cloud Storage & Backup Platform | Zion Tech Group"
        description="Advanced secure cloud storage platform with end-to-end encryption, team collaboration, and automated backup. Protect your data with 99.99% uptime and military-grade security."
        keywords="cloud storage, secure backup, file sharing, team collaboration, data encryption, cloud vault, file synchronization, data protection"
        canonical="https://ziontechgroup.com/zion-cloud-vault"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Secure Cloud Solution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Zion Cloud Vault
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced secure cloud storage platform with end-to-end encryption, team collaboration, 
            and automated backup. Protect your most valuable data with military-grade security and 99.99% uptime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">AES-256</div>
              <div className="text-gray-300 text-sm">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Military-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data is protected with the highest security standards in the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {feature.name}
                      </h3>
                      <span className="text-lg font-bold text-green-400">{feature.level}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Cloud Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for secure file storage, sharing, and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
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
              Choose Your Storage Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible storage solutions for individuals, teams, and enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storagePlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-blue-500/20' 
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-400">{plan.storage}</div>
                    <div className="text-gray-300 text-sm">{plan.users}</div>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-lg mt-2">
                      {plan.originalPrice}{plan.period}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion Cloud Vault
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Data Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses trusting Zion Cloud Vault with their most important data. 
            Start your free trial and experience the difference secure cloud storage makes.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-blue-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCloudVault;