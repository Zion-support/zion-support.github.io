'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function AIVideoEditor() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Editing',
      description: 'Automatically edit videos with intelligent scene detection, color correction, and audio enhancement'
    },
    {
      icon: <Scissors className="w-6 h-6 text-purple-400" />,
      title: 'Smart Cut Detection',
      description: 'AI automatically identifies the best moments and creates seamless cuts and transitions'
    },
    {
      icon: <Play className="w-6 h-6 text-yellow-400" />,
      title: 'Auto-Generated Content',
      description: 'Create engaging videos from text, images, and audio with AI-generated animations and effects'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Performance Analytics',
      description: 'Track video performance, engagement metrics, and optimize content for better results'
    }
  ]

  const editingFeatures = [
    {
      category: 'AI Editing',
      items: ['Auto Scene Detection', 'Smart Cuts', 'Color Correction', 'Audio Enhancement', 'Stabilization', 'Background Removal']
    },
    {
      category: 'Content Creation',
      items: ['Text to Video', 'Image Animation', 'Voice Synthesis', 'Music Generation', 'Template Library', 'Custom Branding']
    },
    {
      category: 'Export & Sharing',
      items: ['Multiple Formats', 'Social Media Optimization', 'Cloud Storage', 'Direct Publishing', 'Collaboration Tools', 'Version Control']
    },
    {
      category: 'Analytics',
      items: ['View Metrics', 'Engagement Tracking', 'A/B Testing', 'Performance Reports', 'Audience Insights', 'ROI Analysis']
    }
  ]

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and influencers',
      features: [
        'Up to 10 hours of video/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for businesses and agencies',
      features: [
        'Up to 50 hours of video/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited video processing',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      company: 'YouTube Creator',
      content: 'AI Video Editor cut my editing time by 70%. The auto-generated content is incredibly engaging.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency',
      content: 'Creating professional videos for clients is now effortless. The AI quality is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      company: 'E-learning Platform',
      content: 'The analytics help us understand what content performs best. Our engagement increased by 150%.',
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
        <meta property="og:url" content="https://ziontechgroup.com/ai-video-editor" />
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
