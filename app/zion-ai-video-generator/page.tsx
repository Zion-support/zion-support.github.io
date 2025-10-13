import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Edit } from 'lucide-react';
import { Play } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';

const ZionAIVideoGeneratorPage = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions.",
      avatar: "/images/testimonials/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise in AI and automation is unmatched.",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "We saw immediate results after implementing their solutions.",
      avatar: "/images/testimonials/mike-chen.jpg"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'AI Video Creation',
      description: 'Generate professional videos from text prompts using advanced AI models',
      icon: <Brain className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Voice Synthesis',
      description: 'Convert text to natural-sounding speech in 50+ languages',
      icon: <Mic className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Auto Editing',
      description: 'Intelligent video editing with automatic cuts, transitions, and effects',
      icon: <Edit className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Template Library',
      description: 'Access to 1000+ professional video templates and styles',
      icon: <Layout className="w-6 h-6" />,
      included: true
    },
    {
      title: 'HD Export',
      description: 'Export videos in 4K resolution with professional quality',
      icon: <Video className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Brand Integration',
      description: 'Add your logo, colors, and branding elements automatically',
      icon: <Palette className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Multi-language Support',
      description: 'Create videos in multiple languages with accurate translations',
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Cloud Storage',
      description: 'Unlimited cloud storage for your video projects and assets',
      icon: <Cloud className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Collaboration Tools',
      description: 'Real-time collaboration with team members and clients',
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track video performance and engagement metrics',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'API Integration',
      description: 'Integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      originalPrice: '$199',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10 videos per month',
        'HD quality export',
        'Basic templates',
        'Email support',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$199',
      originalPrice: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and content creators',
      features: [
        '50 videos per month',
        '4K quality export',
        'Premium templates',
        'Priority support',
        '50GB storage',
        'Brand integration',
        'Voice synthesis'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$399',
      originalPrice: '$799',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited videos',
        '4K quality export',
        'All templates',
        '24/7 support',
        'Unlimited storage',
        'Advanced branding',
        'API access',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create compelling product demos, promotional videos, and social media content',
      icon: <Target className="w-8 h-8" />,
      examples: ['Product demos', 'Social media ads', 'Promotional videos', 'Brand stories']
    },
    {
      title: 'Training Content',
      description: 'Develop educational videos, tutorials, and onboarding materials',
      icon: <Users className="w-8 h-8" />,
      examples: ['Employee training', 'Customer tutorials', 'Onboarding videos', 'Educational content']
    },
    {
      title: 'Social Media',
      description: 'Generate engaging content for Instagram, TikTok, YouTube, and other platforms',
      icon: <Share className="w-8 h-8" />,
      examples: ['Instagram stories', 'TikTok videos', 'YouTube shorts', 'LinkedIn content']
    },
    {
      title: 'E-commerce',
      description: 'Create product showcase videos and sales presentations',
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ['Product showcases', 'Sales presentations', 'Customer testimonials', 'How-to guides']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Video Generator - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Video Generator solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Video Generator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai video generator solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
