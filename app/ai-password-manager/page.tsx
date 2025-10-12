import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, EyeOff, Copy, Plus, Search, Star, AlertTriangle, Key, Zap, Globe, Smartphone, CreditCard, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIPasswordManagerPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPassword, setNewPassword] = useState({
    title: '',
    username: '',
    password: '',
    website: '',
    category: 'General',
    notes: ''
  });

  const [passwords] = useState([
    {
      id: 1,
      title: 'Gmail Account',
      username: 'user@example.com',
      password: '••••••••••••',
      website: 'gmail.com',
      category: 'Email',
      strength: 'Strong',
      lastUsed: '2 days ago',
      isFavorite: true
    },
    {
      id: 2,
      title: 'Banking App',
      username: 'john.doe',
      password: '••••••••••••',
      website: 'mybank.com',
      category: 'Banking',
      strength: 'Very Strong',
      lastUsed: '1 week ago',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Social Media',
      username: 'johndoe',
      password: '••••••••••••',
      website: 'twitter.com',
      category: 'Social',
      strength: 'Medium',
      lastUsed: '3 days ago',
      isFavorite: true
    }
  ]);

  const categories = [
    { name: 'All', icon: <Globe className="w-4 h-4" />, count: passwords.length },
    { name: 'Email', icon: <FileText className="w-4 h-4" />, count: passwords.filter(p => p.category === 'Email').length },
    { name: 'Banking', icon: <CreditCard className="w-4 h-4" />, count: passwords.filter(p => p.category === 'Banking').length },
    { name: 'Social', icon: <Smartphone className="w-4 h-4" />, count: passwords.filter(p => p.category === 'Social').length },
    { name: 'Work', icon: <Globe className="w-4 h-4" />, count: passwords.filter(p => p.category === 'Work').length }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Zero-Knowledge Encryption',
      description: 'Your passwords are encrypted with military-grade AES-256 encryption. Only you can access them.'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered Generation',
      description: 'Generate strong, unique passwords using our AI algorithm that learns your preferences.'
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      title: 'Breach Monitoring',
      description: 'Get instant alerts if your passwords are found in data breaches.'
    },
    {
      icon: <Key className="w-6 h-6 text-orange-500" />,
      title: 'Auto-Fill',
      description: 'Seamlessly fill passwords across all your devices and browsers.'
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: 'Cross-Platform Sync',
      description: 'Access your passwords on desktop, mobile, and web with real-time sync.'
    },
    {
      icon: <Star className="w-6 h-6 text-indigo-500" />,
      title: 'Password Health Score',
      description: 'Get insights on password strength and security recommendations.'
    }
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: ['Up to 25 passwords', 'Basic encryption', '1 device', 'Community support'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$3',
      period: '/month',
      features: ['Unlimited passwords', 'AI generation', '5 devices', 'Breach monitoring', 'Priority support'],
      popular: true
    },
    {
      name: 'Family',
      price: '$5',
      period: '/month',
      features: ['Everything in Pro', 'Up to 6 users', 'Family sharing', 'Advanced analytics', '24/7 support'],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI password generator is incredible. It creates passwords that are both secure and memorable.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'Finally, a password manager that actually works across all my devices. The sync is flawless.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'IT Manager',
      content: 'The breach monitoring feature saved us from potential security issues. Highly recommended!',
      rating: 5
    }
  ];

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'Very Strong': return 'text-green-400';
      case 'Strong': return 'text-blue-400';
      case 'Medium': return 'text-yellow-400';
      case 'Weak': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Password Manager - Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Generate strong passwords, monitor breaches, and sync across all devices." />
        <meta name="keywords" content="password manager, AI password generator, secure passwords, password security, digital security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Password Manager
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Secure your digital life with our AI-powered password manager. 
            Generate strong passwords, monitor breaches, and sync across all devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital identity with cutting-edge security technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Password Manager Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Password Vault
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your passwords in one secure place
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            {/* Search and Add */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search passwords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add Password
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Password List */}
            <div className="space-y-4">
              {passwords.map((password) => (
                <div key={password.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-semibold">{password.title}</h3>
                          {password.isFavorite && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                        </div>
                        <p className="text-gray-400 text-sm">{password.username}</p>
                        <p className="text-gray-500 text-xs">{password.website}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className={`text-sm font-medium ${getStrengthColor(password.strength)}`}>
                          {password.strength}
                        </p>
                        <p className="text-gray-400 text-xs">{password.lastUsed}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Security Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor your password health and security status
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">85%</h3>
              <p className="text-gray-300">Password Health Score</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">127</h3>
              <p className="text-gray-300">Total Passwords</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">3</h3>
              <p className="text-gray-300">Breach Alerts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">42</h3>
              <p className="text-gray-300">Auto-Fills Today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your digital life with our affordable pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                    : 'border-2 border-white text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Secure Your Digital Life Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust our AI-powered password manager to keep their accounts safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPasswordManagerPage;