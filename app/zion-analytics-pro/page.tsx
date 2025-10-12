<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD
export default function ZionAnalyticsPro() {
=======
export default ZionAnalyticsProPage;
'use client';

const ZionAnalyticsProPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your business performance with live data updates and interactive visualizations',
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI-Powered Predictive Insights',
      description: 'Get intelligent forecasts and recommendations based on your data patterns',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Report Generation',
      description: 'Create personalized reports with drag-and-drop interface and automated scheduling',
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Team Collaboration Tools',
      description: 'Share insights, create annotations, and collaborate with your team in real-time',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'API Integrations',
      description: 'Connect with 100+ popular business tools and platforms seamlessly',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mobile App Access',
      description: 'Access your analytics on-the-go with our native iOS and Android apps',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 users',
        '10 data sources',
        'Basic dashboards',
        'Email support',
        '1 GB data storage',
        'Standard reports'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 users',
        'Unlimited data sources',
        'Advanced dashboards',
        'Priority support',
        '10 GB data storage',
        'Custom reports',
        'API access',
        'White-label options'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited data sources',
        'Enterprise dashboards',
        '24/7 phone support',
        'Unlimited data storage',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false;
    }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro has transformed how we understand our business. The AI insights have helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'ER'
    }
  ];
>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>ZionAnalyticsPro - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">ZionAnalyticsPro</h1>
            <p className="text-lg text-gray-300 mb-8">Professional zionanalyticspro services coming soon.</p>
            
              Contact Us

      </>
  );
}

=======
<<<<<<< HEAD
export default function ZionAnalyticsProPage() {
  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Professional zion analytics pro by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Zion Analytics Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional zion analytics pro coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <></>
      <Helmet></Helmet>
        <title />Zion Analytics Pro - AI-Powered Business Intelligence Platform</title>
        <meta const name = "description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting." /  /></meta>
        <meta name="keywords" content="business intelligence, analytics platform, AI insights, data visualization, business dashboard, predictive analytics" /></meta>
=======

export default function ZionAnalyticsProPage() {
  return (
    <>
      <Helmet>
        <title>ZionAnalyticsPro - Zion Tech Group</title>
        <meta name="description" content="Professional zion analytics pro solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">ZionAnalyticsPro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional zion analytics pro solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
