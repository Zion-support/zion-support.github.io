import React from 'react';
import SEOHead from '../../components/SEOHead';
import {
  EnvelopeIcon,
  ChartBarIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  UsersIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon as MailIcon
} from '@heroicons/react/24/outline';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Content Generation",
      description: "Generate compelling email content using advanced AI that understands your brand voice and target audience.",
      icon: CpuChipIcon
    },
    {
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on behavior, preferences, and engagement patterns.",
      icon: UsersIcon
    },
    {
      title: "Predictive Analytics",
      description: "Predict the best send times, subject lines, and content for maximum engagement and conversions.",
      icon: ChartBarIcon
    },
    {
      title: "Automated Workflows",
      description: "Create sophisticated email sequences that nurture leads and drive conversions automatically.",
      icon: RocketLaunchIcon
    },
    {
      title: "A/B Testing AI",
      description: "AI automatically tests different variations and optimizes your campaigns for better performance.",
      icon: CheckCircleIcon
    },
    {
      title: "Real-time Optimization",
      description: "Continuously optimize your campaigns based on real-time data and performance metrics.",
      icon: ClockIcon
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI email marketing",
      features: [
        "Up to 10,000 contacts",
        "AI content generation",
        "Basic segmentation",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with advanced automation needs",
      features: [
        "Up to 50,000 contacts",
        "Advanced AI features",
        "Smart segmentation",
        "A/B testing",
        "Advanced analytics",
        "Priority support",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex email marketing requirements",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom workflows",
        "Advanced reporting",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "3x Higher Open Rates",
      description: "Our AI optimizes subject lines and send times for maximum engagement"
    },
    {
      title: "40% More Conversions",
      description: "Smart content generation and personalization drive better results"
    },
    {
      title: "50% Time Savings",
      description: "Automated workflows and AI content generation save hours of work"
    },
    {
      title: "ROI Tracking",
      description: "Detailed analytics show exactly how your email campaigns are performing"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "AI Email Marketing Pro increased our email open rates by 300% and our conversion rate by 150%. The AI content generation is incredible!",
      rating: 5,
      result: "300% increase in open rates"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      content: "The automated workflows have saved us 20 hours per week. The AI knows our customers better than we do!",
      rating: 5,
      result: "20 hours saved weekly"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Agency",
      content: "Our clients love the personalized content. The AI creates emails that feel human and engaging.",
      rating: 5,
      result: "95% client satisfaction"
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Email Marketing Automation - Zion Tech Group"
        description="Transform your email marketing with AI-powered automation. Increase open rates by 300% and conversions by 150%. Starting at $99/month."
        keywords="AI email marketing, email automation, email marketing software, AI content generation, email campaigns"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              That Actually Works
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation that increases open rates by 300% 
            and conversions by 150%. Let artificial intelligence handle the heavy lifting while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Email Marketing Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform delivers measurable results that traditional email marketing tools simply can't match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize high-converting email campaigns with the power of AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of businesses already using AI Email Marketing Pro to grow their revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  <div className="text-purple-400 text-sm font-medium mt-1">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Start your free 14-day trial today. No credit card required. See the difference AI can make in your email campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIEmailMarketingPage;
