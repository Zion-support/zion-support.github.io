'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function AISocialMediaManager() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms'
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: 'Smart Scheduling',
      description: 'Optimize posting times based on audience engagement patterns and analytics'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and ROI with detailed analytics and insights'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Audience Insights',
      description: 'Understand your audience demographics, interests, and behavior patterns'
    }
  ]

  const platformFeatures = [
    {
      platform: 'Instagram',
      features: ['Story Templates', 'Reels Optimization', 'Hashtag Research', 'IGTV Scheduling', 'Stories Analytics', 'Shopping Integration']
    },
    {
      platform: 'Facebook',
      features: ['Page Management', 'Event Promotion', 'Group Management', 'Live Streaming', 'Ad Integration', 'Community Building']
    },
    {
      platform: 'Twitter',
      features: ['Thread Creation', 'Trend Monitoring', 'Hashtag Tracking', 'Reply Management', 'Moment Creation', 'Engagement Optimization']
    },
    {
      platform: 'LinkedIn',
      features: ['Professional Content', 'Company Updates', 'Article Publishing', 'Event Promotion', 'Lead Generation', 'B2B Analytics']
    },
    {
      platform: 'TikTok',
      features: ['Video Optimization', 'Trend Analysis', 'Sound Selection', 'Effect Recommendations', 'Challenge Participation', 'Viral Content Strategy']
    },
    {
      platform: 'YouTube',
      features: ['Video SEO', 'Thumbnail Optimization', 'Title Generation', 'Description Writing', 'Tag Research', 'Analytics Tracking']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Smart scheduling',
        'Detailed analytics',
        'Priority support',
        'Team collaboration',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'Custom AI training',
        'White-label solution',
        'Advanced analytics',
        'Dedicated support',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Brand Co.',
      content: 'AI Social Media Manager increased our engagement by 150% and saved us 20 hours per week on content creation.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Tech Startup',
      content: 'The AI content suggestions are spot-on. Our social media presence has never been stronger.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Agency',
      content: 'Managing multiple client accounts is now effortless. The analytics insights are incredibly valuable.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

}

}
