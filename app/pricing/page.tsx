import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,999',
      period: '/month',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Performance Reports',
        'Basic Security Features',
        'Up to 10 Users'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies with advanced needs',
      price: '$7,999',
      period: '/month',
      features: [
        'Advanced AI Solutions',
        'Custom Cloud Architecture',
        'Priority Support',
        'Real-time Analytics Dashboard',
        'Advanced Security & Compliance',
        'Up to 50 Users',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Full AI Suite & Custom Models',
        'Multi-Cloud Infrastructure',
        '24/7 Dedicated Support',
        'Custom Analytics & Reporting',
        'Enterprise Security & Compliance',
        'Unlimited Users',
        'White-label Solutions',
        'On-site Training & Support',
        'SLA Guarantees',
        'Custom Development'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const addOns = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: '$15,000',
      period: 'one-time'
    },
    {
      name: 'Data Migration',
      description: 'Complete data migration and system integration',
      price: '$8,000',
      period: 'one-time'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and hardening',
      price: '$12,000',
      period: 'one-time'
    },
    {
      name: 'Training & Support',
      description: 'On-site training and ongoing support',
      price: '$5,000',
      period: '/month'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and technology solutions with no hidden fees.
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                variant={plan.popular ? "elevated" : "glass"}
                className={`p-8 border-white/20 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your solution with our additional services and custom implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-blue-400">{addon.price}</span>
                  <span className="text-gray-400 ml-1 text-sm">{addon.period}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <Card variant="glass" className="p-6 border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </Card>
            
            <Card variant="glass" className="p-6 border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">What's included in the setup?</h3>
              <p className="text-gray-300">
                All plans include initial setup, configuration, and migration assistance. 
                We handle the technical implementation so you can focus on your business.
              </p>
            </Card>
            
            <Card variant="glass" className="p-6 border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-300">
                Absolutely! Our Enterprise plan includes custom development, but we can also 
                create tailored solutions for any plan based on your specific needs.
              </p>
            </Card>
            
            <Card variant="glass" className="p-6 border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">What kind of support do you provide?</h3>
              <p className="text-gray-300">
                Support varies by plan: Starter includes email support, Professional includes 
                priority support, and Enterprise includes 24/7 dedicated support with SLA guarantees.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <Card variant="glass" className="p-12 text-center border-white/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with a free consultation to discuss your needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}