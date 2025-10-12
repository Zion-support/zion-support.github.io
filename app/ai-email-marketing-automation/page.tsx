<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

<<<<<<< HEAD
const Page: React.FC = () => {
=======
export default function AIEmailMarketingAutomation() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Create compelling email campaigns with AI-powered subject lines, content, and CTAs'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement'
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: 'Automated Workflows',
      description: 'Set up complex email sequences that trigger based on user actions and behaviors'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Track open rates, click-through rates, conversions, and ROI with detailed insights'
    }
  ]

  const automationFeatures = [
    {
      category: 'Email Creation',
      items: ['AI Subject Line Generator', 'Content Templates', 'Personalization Engine', 'A/B Testing', 'Mobile Optimization', 'Spam Score Checker']
    },
    {
      category: 'Automation',
      items: ['Welcome Series', 'Abandoned Cart Recovery', 'Birthday Campaigns', 'Re-engagement Sequences', 'Lead Nurturing', 'Post-Purchase Follow-up']
    },
    {
      category: 'Segmentation',
      items: ['Behavioral Triggers', 'Demographic Filters', 'Engagement Levels', 'Purchase History', 'Custom Fields', 'Dynamic Lists']
    },
    {
      category: 'Analytics',
      items: ['Real-time Dashboard', 'Campaign Performance', 'Revenue Tracking', 'Subscriber Growth', 'Unsubscribe Analysis', 'ROI Reports']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Basic automation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 subscribers',
        'Advanced AI features',
        'Custom templates',
        'Advanced automation',
        'Detailed analytics',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Custom AI training',
        'White-label solution',
        'Advanced automation',
        'Custom analytics',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'E-commerce Store',
      content: 'AI Email Marketing Automation increased our email revenue by 200% and reduced our workload by 60%.',
      rating: 5
    },
    {
      name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows are incredible. Our lead nurturing process is now completely hands-off.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Marketing Agency',
      content: 'Managing multiple client email campaigns is now effortless. The AI content generation saves hours.',
      rating: 5
    }
  ]

<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-6024
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" />
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
=======
      <Helmet />
        <title   />- Zion Tech Group</title>
        <meta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" / / />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4 text-center">
            <h1 className="text-5 xl md:text-6 xl font-boldtext-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400-bg-clip-texttext-transparent"   / />
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3-xlmx-auto" />
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4-justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
                Get Started
                <ArrowRight className="ml-2-group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105">Learn More
                      </Link>
      </div>
    </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12 text-center">
              <h2 className="text-4 xl font-boldtext-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2-xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105-shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105">View All Services
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </>
  );
};

export default Page;
=======
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-6024
