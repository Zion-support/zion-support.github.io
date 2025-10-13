import React from 'react';
import { Settings, Users, Sparkles, ArrowRight, CheckCircle, Star, Zap, Brain, BarChart3, Database, Target, Mic, FileText, Mail, Play, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { BarChart3, ArrowRight, Sparkles, CheckCircle, Star, Users, Brain, Target, Mail, Phone, MapPin, Play, Settings, Database, Cloud, Watch, FileText } from 'lucide-react';
=======
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Play } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

const ZionAIAnalyticsProPage = () => {
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
      title: 'Real-time Data Visualization',
      description: 'Interactive dashboards that update in real-time with live data from all your business sources.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Live data updates', 'Interactive charts', 'Customizable widgets', 'Mobile responsive']
    },
    {
      title: 'AI-Powered Predictive Analytics',
      description: 'Advanced machine learning algorithms predict future trends and business outcomes with 95% accuracy.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Trend forecasting', 'Anomaly detection', 'Risk assessment', 'Opportunity identification']
    },
    {
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI insights and recommendations.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Scheduled reports', 'Custom templates', 'AI insights', 'Multi-format export']
    },
    {
      title: 'Custom Dashboard Builder',
      description: 'Drag-and-drop interface to create personalized dashboards for different roles and departments.',
      icon: <Settings className="w-6 h-6" />,
      benefits: ['Drag-and-drop builder', 'Role-based views', 'Widget library', 'Collaborative editing']
    },
    {
      title: 'Multi-Source Data Integration',
      description: 'Connect and analyze data from 100+ sources including CRM, ERP, social media, and more.',
      icon: <Database className="w-6 h-6" />,
      benefits: ['100+ connectors', 'Real-time sync', 'Data transformation', 'Error handling']
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and insights powered by advanced AI algorithms.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Smart recommendations', 'Pattern recognition', 'Automated alerts', 'Action suggestions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        '10 custom dashboards',
        'Basic AI insights',
        'Email support',
        'Monthly reports',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 data sources',
        'Unlimited dashboards',
        'Advanced AI insights',
        'Priority support',
        'Real-time reports',
        'API access',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'Complete solution for large enterprises with complex data needs',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Premium AI insights',
        '24/7 dedicated support',
        'Custom reporting',
        'Advanced API access',
        'White-label options',
        'On-premise deployment',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF', category: 'CRM' },
    { name: 'HubSpot', logo: 'HS', category: 'Marketing' },
    { name: 'Google Analytics', logo: 'GA', category: 'Web Analytics' },
    { name: 'Shopify', logo: 'SH', category: 'E-commerce' },
    { name: 'Stripe', logo: 'ST', category: 'Payments' },
    { name: 'Slack', logo: 'SL', category: 'Communication' },
    { name: 'Microsoft Teams', logo: 'MT', category: 'Communication' },
    { name: 'Zapier', logo: 'ZP', category: 'Automation' },
    { name: 'MySQL', logo: 'MY', category: 'Database' },
    { name: 'PostgreSQL', logo: 'PG', category: 'Database' },
    { name: 'MongoDB', logo: 'MG', category: 'Database' },
    { name: 'AWS', logo: 'AW', category: 'Cloud' }
  ];

export default function ZionAiAnalyticsProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Analytics Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Analytics Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai analytics pro solutions designed to meet your business needs.
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