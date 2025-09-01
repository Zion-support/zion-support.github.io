import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Shield,
  HardDrive,
  Users,
  Building2,
  FileText,
  HelpCircle,
  Clock,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Database,
  Network,
  Smartphone,
  Lock,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const ComprehensivePricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: {
        monthly: 299,
        yearly: 2990
      },
      features: [
        'AI Business Intelligence Basic',
        'Cloud Infrastructure (up to 5TB)',
        'Basic Security Monitoring',
        'Email Support',
        '5 User Licenses',
        'Basic Analytics Dashboard',
        'API Access (1000 calls/month)',
        'Standard SLA (99.5%)'
      ],
      popular: false,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: {
        monthly: 799,
        yearly: 7990
      },
      features: [
        'AI Business Intelligence Pro',
        'AI Sales Copilot',
        'Cloud Infrastructure (up to 25TB)',
        'Advanced Security Suite',
        'Priority Support',
        '25 User Licenses',
        'Advanced Analytics & Reporting',
        'API Access (10,000 calls/month)',
        'Premium SLA (99.9%)',
        'Custom Integrations',
        'Training & Onboarding',
        'Monthly Strategy Sessions'
      ],
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: {
        monthly: 2499,
        yearly: 24990
      },
      features: [
        'All AI & Automation Services',
        'Complete Cloud & DevOps Suite',
        'Full Cybersecurity Platform',
        '24/7 Dedicated Support',
        'Unlimited User Licenses',
        'Custom AI Model Training',
        'Advanced Analytics & ML',
        'Unlimited API Access',
        'Enterprise SLA (99.99%)',
        'Custom Development',
        'Dedicated Account Manager',
        'Quarterly Business Reviews',
        'Compliance & Audit Support',
        'Multi-region Deployment',
        'Advanced Security Features'
      ],
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const servicePackages = [
    {
      name: 'AI & Automation Package',
      description: 'Comprehensive AI solutions for business transformation',
      price: 'Starting at $1,500/month',
      features: [
        'AI Business Intelligence',
        'AI Sales Copilot',
        'AI Compliance Assistant',
        'AI Workflow Automation',
        'Custom AI Model Development',
        'AI Training & Consulting'
      ],
      icon: Brain
    },
    {
      name: 'Cloud & DevOps Package',
      description: 'Scalable cloud infrastructure and DevOps automation',
      price: 'Starting at $1,200/month',
      features: [
        'Cloud Infrastructure Setup',
        'DevOps Automation',
        'CI/CD Pipeline Implementation',
        'Monitoring & Alerting',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      icon: HardDrive
    },
    {
      name: 'Cybersecurity Package',
      description: 'Advanced security solutions and compliance automation',
      price: 'Starting at $2,000/month',
      features: [
        'Zero Trust Security',
        'AI Threat Detection',
        'Compliance Automation',
        'Security Operations Center',
        'Penetration Testing',
        'Security Training'
      ],
      icon: Shield
    }
  ];

  const savings = billingCycle === 'yearly' ? 20 : 0;

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue-darker to-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our core technology solutions 
            with flexible scaling options.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-purple/30'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 text-sm bg-zion-cyan text-white px-2 py-1 rounded-full">
                  Save {savings}%
                </span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20 scale-105'
                    : 'border-zion-purple/30 hover:border-zion-cyan/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-zion-slate-light ml-2">
                      /{billingCycle === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                        : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Custom Service Packages
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Need a specific combination of services? We offer custom packages tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <pkg.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{pkg.name}</h3>
                <p className="text-zion-slate-light mb-4">{pkg.description}</p>
                <div className="text-zion-cyan font-semibold mb-4">{pkg.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We provide custom pricing and service packages for enterprise clients with specific requirements and volume needs.'
              },
              {
                question: 'What support is included with each plan?',
                answer: 'All plans include email support. Professional and Enterprise plans include priority support, while Enterprise includes 24/7 dedicated support.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs.'
              },
              {
                question: 'Can I cancel my subscription?',
                answer: 'Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all plans.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact our team to discuss your needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
            >
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help Choosing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 (555) 123-4567</p>
              <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">sales@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">24/7 Support</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">San Francisco, CA</p>
              <p className="text-zion-slate-light text-sm">Schedule a Meeting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing;
