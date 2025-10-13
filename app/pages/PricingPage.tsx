import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  ShareIcon,
  EnvelopeIcon as EmailIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function PricingPage() {
  const microSaasServices = [
    {
      name: "AI Smart Document Processor",
      description: "Transform your document workflow with intelligent AI-powered processing",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      plans: [
        { name: "Starter", price: "$29", period: "/month", features: ["1,000 documents/month", "Basic OCR processing", "Email support", "Standard templates", "API access"] },
        { name: "Professional", price: "$99", period: "/month", features: ["10,000 documents/month", "Advanced AI processing", "Priority support", "Custom templates", "Full API access", "Analytics dashboard"], popular: true },
        { name: "Enterprise", price: "$299", period: "/month", features: ["Unlimited documents", "Premium AI features", "24/7 dedicated support", "Custom integrations", "White-label options", "Advanced analytics", "SLA guarantee"] }
      ]
    },
    {
      name: "AI Social Media Manager",
      description: "Transform your social media presence with AI-powered content generation and analytics",
      icon: ShareIcon,
      color: "from-blue-500 to-cyan-500",
      plans: [
        { name: "Starter", price: "$49", period: "/month", features: ["3 social media accounts", "50 AI-generated posts/month", "Basic analytics", "Email support", "Content calendar", "Hashtag suggestions"] },
        { name: "Professional", price: "$149", period: "/month", features: ["10 social media accounts", "200 AI-generated posts/month", "Advanced analytics", "Priority support", "Content calendar", "Hashtag research", "Competitor analysis", "Team collaboration"], popular: true },
        { name: "Enterprise", price: "$399", period: "/month", features: ["Unlimited accounts", "Unlimited AI posts", "Premium analytics", "24/7 dedicated support", "Custom integrations", "White-label options", "Advanced reporting", "API access"] }
      ]
    },
    {
      name: "AI Email Marketing Automation",
      description: "Transform your email marketing with AI-powered automation and personalization",
      icon: EmailIcon,
      color: "from-green-500 to-emerald-500",
      plans: [
        { name: "Starter", price: "$39", period: "/month", features: ["1,000 subscribers", "10,000 emails/month", "AI subject line generator", "Basic automation", "Email templates", "Analytics dashboard"] },
        { name: "Professional", price: "$99", period: "/month", features: ["10,000 subscribers", "50,000 emails/month", "Advanced AI features", "Complex automation", "A/B testing", "Advanced analytics", "Priority support"], popular: true },
        { name: "Enterprise", price: "$299", period: "/month", features: ["Unlimited subscribers", "Unlimited emails", "Premium AI features", "Custom integrations", "White-label options", "24/7 dedicated support", "API access"] }
      ]
    },
    {
      name: "AI Customer Support Chatbot",
      description: "Transform your customer support with intelligent AI chatbots",
      icon: ChatBubbleLeftRightIcon,
      color: "from-yellow-500 to-orange-500",
      plans: [
        { name: "Starter", price: "$79", period: "/month", features: ["1,000 conversations/month", "Basic AI responses", "Email support", "Standard integrations", "Basic analytics", "1 chatbot"] },
        { name: "Professional", price: "$199", period: "/month", features: ["5,000 conversations/month", "Advanced AI features", "Priority support", "Custom integrations", "Advanced analytics", "Up to 5 chatbots", "Multi-language support"], popular: true },
        { name: "Enterprise", price: "$499", period: "/month", features: ["Unlimited conversations", "Premium AI features", "24/7 dedicated support", "Custom development", "White-label options", "Unlimited chatbots", "API access", "SLA guarantee"] }
      ]
    },
    {
      name: "AI Business Intelligence Dashboard",
      description: "Transform your business with AI-powered analytics and insights",
      icon: ChartBarIcon,
      color: "from-indigo-500 to-purple-500",
      plans: [
        { name: "Starter", price: "$99", period: "/month", features: ["5 data sources", "Basic AI insights", "10 custom dashboards", "Email support", "Standard reports", "Mobile app access"] },
        { name: "Professional", price: "$299", period: "/month", features: ["25 data sources", "Advanced AI features", "Unlimited dashboards", "Priority support", "Custom reports", "API access", "Team collaboration", "Advanced analytics"], popular: true },
        { name: "Enterprise", price: "$799", period: "/month", features: ["Unlimited data sources", "Premium AI features", "White-label options", "24/7 dedicated support", "Custom integrations", "Advanced security", "SLA guarantee", "On-premise deployment"] }
      ]
    }
  ];

  const enterpriseServices = [
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: ShieldCheckIcon,
      color: "from-cyan-500 to-blue-500",
      startingPrice: "Custom pricing"
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management",
      icon: CloudIcon,
      color: "from-green-500 to-emerald-500",
      startingPrice: "Custom pricing"
    },
    {
      name: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business",
      icon: RocketLaunchIcon,
      color: "from-yellow-500 to-orange-500",
      startingPrice: "Custom pricing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - AI Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI micro SAAS services. Choose from our range of AI-powered solutions starting at $29/month. Free trials available." />
        <meta name="keywords" content="AI pricing, micro SAAS pricing, AI services cost, business intelligence pricing, document processing pricing" />
        <meta name="canonical" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose from our range of AI-powered micro SAAS services designed to transform your business. 
              All plans include free trials and no setup fees.
            </p>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trials • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-powered tools designed to solve specific business challenges
            </p>
          </div>

          {microSaasServices.map((service, serviceIndex) => {
            const Icon = service.icon;
            return (
              <div key={serviceIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {service.plans.map((plan, planIndex) => (
                    <div key={planIndex} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                      plan.popular 
                        ? 'border-purple-500 ring-2 ring-purple-500/20' 
                        : 'border-slate-600 hover:border-purple-500'
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-2">{plan.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to="/contact" 
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                            : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom enterprise solutions tailored to your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {enterpriseServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-green-400 mb-6">{service.startingPrice}</div>
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Contact Sales
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer free trials?</h3>
                <p className="text-gray-300">Yes! All our micro SAAS services come with a 14-day free trial. No credit card required to get started.</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Can I change plans anytime?</h3>
                <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees! All our services are ready to use immediately after signup.</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise customers with specific requirements and high-volume usage.</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">What support do you provide?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our AI-powered solutions to transform their operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}