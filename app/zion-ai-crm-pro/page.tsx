import React from 'react';
import { TrendingUp, Users, Sparkles, ArrowRight, CheckCircle, Star, Zap, BarChart3, Target, Mic, Mail, Play, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Play } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mic } from 'lucide-react';

const ZionAICRMProPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

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

  const features = [
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring algorithm that automatically ranks prospects based on likelihood to convert.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Automatic scoring', 'Behavioral analysis', 'Conversion prediction', 'Custom scoring models']
    },
    {
      title: 'Automated Follow-ups',
      description: 'Smart follow-up sequences that automatically engage leads at the right time with personalized messages.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Smart timing', 'Personalized content', 'Multi-channel outreach', 'Performance tracking']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict customer behavior, churn risk, and sales opportunities.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Churn prediction', 'Upsell opportunities', 'Customer lifetime value', 'Risk assessment']
    },
    {
      title: 'Email Integration',
      description: 'Seamless email integration with automatic logging, tracking, and response management.',
      icon: <Mail className="w-6 h-6" />,
      benefits: ['Auto-logging', 'Email tracking', 'Response management', 'Template library']
    },
    {
      title: 'Sales Pipeline Management',
      description: 'Visual pipeline management with drag-and-drop stages and automated progression rules.',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['Visual pipeline', 'Drag-and-drop', 'Automated rules', 'Stage analytics']
    },
    {
      title: 'Customer Segmentation',
      description: 'AI-powered customer segmentation for targeted marketing and personalized experiences.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['AI segmentation', 'Behavioral grouping', 'Custom segments', 'Dynamic updates']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email integration',
        'Mobile app',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing sales teams with advanced needs',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Full email integration',
        'Sales pipeline management',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom fields'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete solution for large sales organizations',
      features: [
        'Unlimited contacts',
        'Premium AI features',
        'Advanced integrations',
        'Custom workflows',
        '24/7 dedicated support',
        'Advanced reporting',
        'White-label options',
        'On-premise deployment',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Gmail', logo: 'GM', category: 'Email' },
    { name: 'Outlook', logo: 'OL', category: 'Email' },
    { name: 'Slack', logo: 'SL', category: 'Communication' },
    { name: 'Microsoft Teams', logo: 'MT', category: 'Communication' },
    { name: 'Zoom', logo: 'ZM', category: 'Video' },
    { name: 'Calendly', logo: 'CL', category: 'Scheduling' },
    { name: 'Stripe', logo: 'ST', category: 'Payments' },
    { name: 'PayPal', logo: 'PP', category: 'Payments' },
    { name: 'HubSpot', logo: 'HS', category: 'Marketing' },
    { name: 'Mailchimp', logo: 'MC', category: 'Email Marketing' },
    { name: 'Zapier', logo: 'ZP', category: 'Automation' },
    { name: 'Salesforce', logo: 'SF', category: 'CRM' }
  ];

export default function ZionAiCrmProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Crm Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Crm Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Crm Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai crm pro solutions designed to meet your business needs.
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

}