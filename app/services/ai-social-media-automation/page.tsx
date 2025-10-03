// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Social Media Automation Platform - Zion Tech Group',
  description: 'Automate your social media presence with AI-powered content creation, scheduling, and engagement. Boost your online presence with intelligent social media management.',
  keywords: 'social media automation, AI content creation, social media management, automated posting, social media analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AISocialMediaAutomation() {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI models trained on viral content patterns.',
      icon: '🤖',
      benefits: ['300% increase in engagement', '50% time savings', 'Consistent brand voice']
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience behavior and platform algorithms.',
      icon: '⏰',
      benefits: ['40% higher reach', 'Optimal timing', 'Cross-platform sync']
    },
    {
      title: 'Automated Engagement',
      description: 'Intelligent responses to comments, mentions, and DMs with personalized, brand-appropriate messaging.',
      icon: '💬',
      benefits: ['24/7 engagement', 'Faster response times', 'Improved customer satisfaction']
    },
    {
      title: 'Analytics & Insights',
      description: 'Deep analytics with AI-powered insights to optimize your social media strategy.',
      icon: '📊',
      benefits: ['ROI tracking', 'Performance predictions', 'Competitor analysis']
    },
    {
      title: 'Multi-Platform Management',
      description: 'Manage Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one unified dashboard.',
      icon: '🌐',
      benefits: ['Unified workflow', 'Cross-platform consistency', 'Centralized analytics']
    },
    {
      title: 'Brand Safety AI',
      description: 'Advanced content moderation and brand safety checks to protect your reputation.',
      icon: '🛡️',
      benefits: ['Risk prevention', 'Brand protection', 'Compliance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '50 AI-generated posts/month',
        'Basic analytics',
        'Email support',
        'Standard scheduling'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        '200 AI-generated posts/month',
        'Advanced analytics & insights',
        'Priority support',
        'Advanced scheduling & automation',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited social media accounts',
        'Unlimited AI-generated posts',
        'Custom AI model training',
        'Dedicated account manager',
        'White-label options',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Our social media engagement increased by 300% in just 2 months. The AI content generation is incredibly accurate and saves us hours every week.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The automated engagement feature has transformed our customer service. We respond to inquiries 10x faster and our customers love the personalized responses.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Personal Brand',
      content: 'As a content creator, this platform has revolutionized my workflow. The AI suggestions are spot-on and help me maintain consistency across all platforms.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI Social Media Automation Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered automation. Create, schedule, and engage with intelligent social media management that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#pricing" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to automate and optimize your social media strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their social media transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to automate their social media presence. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </Link>
            <Link to="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}