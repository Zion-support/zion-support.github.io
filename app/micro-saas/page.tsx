import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const generalFeatures = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for business intelligence and data insights.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      link: '/zion-ai-analytics-pro',
      price: '$99/month',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      link: '/zion-ai-crm-pro',
      price: '$149/month'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Video Generator',
      description: 'Create professional videos automatically with AI-powered content generation.',
      features: ['Auto Video Creation', 'Multiple Templates', 'Voice Synthesis', 'Brand Customization'],
      link: '/zion-ai-video-generator',
      price: '$79/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation and management with smart categorization.',
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency'],
      link: '/zion-ai-invoice-generator',
      price: '$59/month'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI Customer Insights',
      description: 'Deep customer analytics and sentiment analysis for better business decisions.',
      features: ['Sentiment Analysis', 'Customer Segmentation', 'Churn Prediction', 'Behavior Analytics'],
      link: '/zion-ai-customer-insights',
      price: '$129/month'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Email Analyzer',
      description: 'Smart email analysis and optimization for better communication.',
      features: ['Email Scoring', 'Content Optimization', 'A/B Testing', 'Performance Analytics'],
      link: '/zion-ai-email-analyzer',
      price: '$89/month'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'No Setup Required',
      description: 'Get started immediately with our ready-to-use solutions.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion\'s AI Analytics Pro transformed our data analysis. We saw 300% improvement in insights quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      content: 'The AI CRM Pro is a game-changer. Our sales team productivity increased by 150%.',
      rating: 5
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Micro Saas solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Micro Saas</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive micro saas solutions designed to meet your business needs.
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
