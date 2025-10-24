<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Ai Social Media Scheduler - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Social Media Scheduler
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-social-media-scheduler services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react'
import {Link} from 'react-router-dom'

import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, Share2, Star, Shield} from 'lucide-react';

export default function AISocialMediaSchedulerPage() {const features = [{
      icon: <Calendar className="w-5h-5ml-2"   />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'},
    {icon: <BarChart3 className="w-5h-5ml-2"   />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics and ROI tracking across all platforms'},
    {icon: <Users className="w-5h-5ml-2"   />,
      title: 'Audience Insights',
      description: 'AI-driven audience analysis and content personalization recommendations'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Auto-Posting',
      description: 'Seamless cross-platform content distribution with smart formatting'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: 'Content Optimization',
      description: 'AI suggestions for hashtags, captions, and optimal posting times'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'Brand Safety',
      description: 'Automated content moderation and brand compliance checking'}]

  const pricingPlans = [{name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'Email support',
        'Content calendar',
        'Hashtag suggestions'],
      popular: false;},
    {name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: ['10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'AI content suggestions',
        'Competitor analysis',
        'Custom branding'],
      popular: true;},
    {name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: ['Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features',
        'API access',
        'Custom reporting'],
      popular: false;}
  ]

  const testimonials = [{name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Increased our social media engagement by 300% in just 2 months. The AI scheduling is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'},
    {name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking is spot-on.',
      rating: 5,
      avatar: 'MC'},
    {name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week. The AI content suggestions are always on-brand and engaging.',
      rating: 5,
      avatar: 'ER'}]

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Social Media Scheduler - Zion Tech Group | Automated Social Media Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AisocialmediaschedulerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Social Media Scheduler - Zion Tech Group</title>
        <meta name="description" content="Professional ai social media scheduler services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Social Media Scheduler</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai social media scheduler services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
