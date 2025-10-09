import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  DollarSign,
  Smartphone,
  Globe,
  Brain,
  Clock,
  Shield,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification using machine learning to identify high-value prospects automatically.',
      price: '$299/month'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast sales outcomes and identify the best opportunities with AI-powered predictions.',
      price: '$399/month'
    },
    {
      icon: MessageSquare,
      title: 'Automated Outreach',
      description: 'Personalized email sequences, follow-ups, and social media engagement at scale.',
      price: '$199/month'
    },
    {
      icon: BarChart3,
      title: 'Sales Intelligence',
      description: 'Real-time insights into pipeline health, conversion rates, and revenue forecasting.',
      price: '$249/month'
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with Salesforce, HubSpot, Pipedrive, and other popular CRMs.',
      price: 'Included'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks, follow-ups, and data entry to focus on closing deals.',
      price: '$179/month'
    }
  ];

  const benefits = [
    'Increase sales productivity by 50%',
    'Improve lead conversion by 35%',
    'Reduce sales cycle time by 40%',
    'Automate 80% of routine tasks',
    'Boost revenue by 25% on average',
    'Scale sales efforts without scaling team'
  ];

  const automationFeatures = [
    {
      title: 'Lead Generation',
      description: 'AI finds and qualifies leads from multiple sources automatically',
      icon: Users
    },
    {
      title: 'Email Sequences',
      description: 'Personalized, multi-touch email campaigns that convert',
      icon: Mail
    },
    {
      title: 'Follow-up Automation',
      description: 'Never miss a follow-up with intelligent scheduling and reminders',
      icon: Clock
    },
    {
      title: 'Social Selling',
      description: 'Automated LinkedIn outreach and social media engagement',
      icon: Globe
    },
    {
      title: 'Meeting Scheduling',
      description: 'AI-powered calendar management and meeting optimization',
      icon: Calendar
    },
    {
      title: 'Proposal Generation',
      description: 'Automated proposal creation with personalized content',
      icon: FileText
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        '1,000 leads/month',
        'Basic AI scoring',
        'Email automation',
        'CRM integration',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        '5,000 leads/month',
        'Advanced AI scoring',
        'Multi-channel automation',
        'Predictive analytics',
        'Advanced reporting',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Full automation suite',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI Sales Automation
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Sales Automation
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Supercharge your sales team with intelligent automation that finds, 
            qualifies, and converts leads while you sleep. Increase revenue by 25% 
            with our cutting-edge AI sales platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">More Productive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Sales Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">25%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Sales Automation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-green-400 font-semibold">{feature.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete Sales Automation Suite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our AI Sales Automation?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-green-400 scale-105' 
                  : 'border-white/20 hover:border-green-400'
              }`}>
                {plan.popular && (
                  <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Sales Process?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of sales teams already using our AI automation 
              to close more deals and grow revenue faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;