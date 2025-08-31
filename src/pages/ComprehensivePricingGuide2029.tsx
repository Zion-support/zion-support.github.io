import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, X, Star, ArrowRight, Phone, Mail, MapPin, 
  Brain, Shield, Cloud, Rocket, BarChart3, Cpu, Atom,
  Network, DollarSign, Users, Zap, Lock, Globe
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  cta: string;
  ctaUrl: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  tiers: PricingTier[];
}

const ComprehensivePricingGuide2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      tiers: [
        {
          name: 'Starter',
          price: billingPeriod === 'monthly' ? '$2,500' : '$25,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Perfect for small businesses starting their AI journey',
          features: [
            'Custom AI model development',
            'Basic ML pipeline setup',
            'Data preprocessing & cleaning',
            'Model training & validation',
            'Basic API integration',
            'Email support'
          ],
          notIncluded: [
            'Advanced analytics',
            'Real-time processing',
            'Custom integrations',
            'Priority support'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Professional',
          price: billingPeriod === 'monthly' ? '$8,000' : '$80,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Advanced AI solutions for growing enterprises',
          features: [
            'Everything in Starter',
            'Advanced ML algorithms',
            'Real-time data processing',
            'Custom integrations',
            'Performance optimization',
            'Phone & email support',
            'Training & documentation'
          ],
          notIncluded: [
            'Enterprise security',
            'Custom AI hardware',
            'Dedicated support team'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Enterprise',
          price: billingPeriod === 'monthly' ? '$25,000' : '$250,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Full-scale AI transformation for large organizations',
          features: [
            'Everything in Professional',
            'Enterprise-grade security',
            'Custom AI hardware integration',
            'Dedicated support team',
            'Custom development',
            'SLA guarantees',
            'On-site training'
          ],
          notIncluded: [],
          popular: true,
          cta: 'Contact Sales',
          ctaUrl: '/contact'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced security solutions with AI-powered threat detection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      tiers: [
        {
          name: 'Basic',
          price: billingPeriod === 'monthly' ? '$1,500' : '$15,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Essential security for small businesses',
          features: [
            'Vulnerability assessment',
            'Basic threat monitoring',
            'Security awareness training',
            'Incident response plan',
            'Compliance reporting',
            'Email support'
          ],
          notIncluded: [
            'AI threat detection',
            '24/7 monitoring',
            'Advanced analytics',
            'Custom security policies'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Advanced',
          price: billingPeriod === 'monthly' ? '$5,000' : '$50,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Comprehensive security for medium enterprises',
          features: [
            'Everything in Basic',
            'AI-powered threat detection',
            '24/7 security monitoring',
            'Advanced analytics',
            'Custom security policies',
            'Phone & email support',
            'Security consulting'
          ],
          notIncluded: [
            'Dedicated security team',
            'Custom security tools',
            'On-site security audits'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Enterprise',
          price: billingPeriod === 'monthly' ? '$18,000' : '$180,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Military-grade security for large organizations',
          features: [
            'Everything in Advanced',
            'Dedicated security team',
            'Custom security tools',
            'On-site security audits',
            'Zero-trust architecture',
            'SLA guarantees',
            'Compliance automation'
          ],
          notIncluded: [],
          popular: true,
          cta: 'Contact Sales',
          ctaUrl: '/contact'
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Cloud migration, DevOps automation, and infrastructure optimization',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      tiers: [
        {
          name: 'Migration',
          price: billingPeriod === 'monthly' ? '$15,000' : '$150,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Complete cloud migration and setup',
          features: [
            'Cloud strategy planning',
            'Application migration',
            'Data migration',
            'Basic monitoring setup',
            'Security configuration',
            'Training & documentation'
          ],
          notIncluded: [
            'Ongoing management',
            'Advanced automation',
            'Cost optimization',
            '24/7 support'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Managed',
          price: billingPeriod === 'monthly' ? '$8,000' : '$80,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Ongoing cloud management and optimization',
          features: [
            '24/7 cloud monitoring',
            'Performance optimization',
            'Cost optimization',
            'Security updates',
            'Backup management',
            'Phone & email support'
          ],
          notIncluded: [
            'Custom development',
            'Advanced automation',
            'Dedicated team'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Enterprise',
          price: billingPeriod === 'monthly' ? '$25,000' : '$250,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Full-service cloud and DevOps transformation',
          features: [
            'Everything in Managed',
            'Custom development',
            'Advanced automation',
            'Dedicated team',
            'SLA guarantees',
            'On-site support',
            'Custom integrations'
          ],
          notIncluded: [],
          popular: true,
          cta: 'Contact Sales',
          ctaUrl: '/contact'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      description: 'Ready-to-deploy software solutions for modern businesses',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      tiers: [
        {
          name: 'Basic',
          price: billingPeriod === 'monthly' ? '$99' : '$990',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Essential features for small teams',
          features: [
            'Core functionality',
            'Basic integrations',
            'Email support',
            'Standard templates',
            'Basic analytics',
            'Up to 5 users'
          ],
          notIncluded: [
            'Advanced features',
            'Custom integrations',
            'Priority support',
            'White-label options'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Professional',
          price: billingPeriod === 'monthly' ? '$299' : '$2,990',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Advanced features for growing businesses',
          features: [
            'Everything in Basic',
            'Advanced features',
            'Custom integrations',
            'Priority support',
            'Advanced analytics',
            'Up to 25 users',
            'API access'
          ],
          notIncluded: [
            'White-label options',
            'Custom development',
            'Dedicated support'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Enterprise',
          price: billingPeriod === 'monthly' ? '$999' : '$9,990',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Full-featured solution with custom options',
          features: [
            'Everything in Professional',
            'White-label options',
            'Custom development',
            'Dedicated support',
            'Unlimited users',
            'Custom branding',
            'SLA guarantees'
          ],
          notIncluded: [],
          popular: true,
          cta: 'Contact Sales',
          ctaUrl: '/contact'
        }
      ]
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      description: 'Comprehensive data solutions with AI-powered insights',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      tiers: [
        {
          name: 'Insights',
          price: billingPeriod === 'monthly' ? '$2,000' : '$20,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Basic data analytics and reporting',
          features: [
            'Data collection & storage',
            'Basic dashboards',
            'Standard reports',
            'Data visualization',
            'Email support',
            'Monthly insights'
          ],
          notIncluded: [
            'Real-time processing',
            'Advanced analytics',
            'Custom dashboards',
            'Predictive modeling'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Advanced',
          price: billingPeriod === 'monthly' ? '$6,000' : '$60,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Advanced analytics with AI insights',
          features: [
            'Everything in Insights',
            'Real-time processing',
            'Advanced analytics',
            'Custom dashboards',
            'Predictive modeling',
            'Phone & email support',
            'Data consulting'
          ],
          notIncluded: [
            'Custom algorithms',
            'Dedicated team',
            'On-premise options'
          ],
          cta: 'Get Started',
          ctaUrl: '/contact'
        },
        {
          name: 'Enterprise',
          price: billingPeriod === 'monthly' ? '$20,000' : '$200,000',
          period: billingPeriod === 'monthly' ? '/month' : '/year',
          description: 'Full-scale data transformation',
          features: [
            'Everything in Advanced',
            'Custom algorithms',
            'Dedicated team',
            'On-premise options',
            'SLA guarantees',
            'Custom development',
            'On-site training'
          ],
          notIncluded: [],
          popular: true,
          cta: 'Contact Sales',
          ctaUrl: '/contact'
        }
      ]
    }
  ];

  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Zion Tech Group</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Future Technology Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Pricing Guide
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Transparent pricing for all our technology services. Choose the plan that fits your business needs and budget.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingPeriod === 'annual' ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingPeriod === 'annual' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Annual
                <span className="text-sm text-green-600 ml-1">(Save 20%)</span>
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentCategory && (
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentCategory.color} rounded-2xl mb-6`}>
                <currentCategory.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {currentCategory.name}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            </div>
          )}

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentCategory?.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  tier.popular 
                    ? 'border-blue-500 ring-4 ring-blue-500/20' 
                    : 'border-gray-200 dark:border-gray-700'
                } overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {tier.price}
                      </span>
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  {tier.notIncluded.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Not Included</h4>
                      <ul className="space-y-3">
                        {tier.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={tier.ctaUrl}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We specialize in creating custom technology solutions tailored to your specific business requirements. Let's discuss your project.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                <li><a href="/innovative-services-showcase-2029" className="hover:text-white transition-colors">Innovative Services</a></li>
                <li><a href="/comprehensive-services-2029" className="hover:text-white transition-colors">Comprehensive Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensivePricingGuide2029;