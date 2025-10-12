<<<<<<< HEAD
<<<<<<< HEAD


'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import React from 'react';
<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

        {/* Hero Section */}
    
                AI Project Management Pro

              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* Features Section */}
    
                Why Choose Our AI Project Management?

                Our advanced AI technology helps you manage projects more efficiently

              {[
                  icon: <Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Planning",
                  description: "Advanced machine learning algorithms help optimize project timelines and resource allocation."
                },
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Tracking",
                  description: "Get instant insights into project progress and team performance with our comprehensive dashboard."
                },
                  icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your project data is protected while maintaining 99.9% uptime."
 (

                    {feature.icon}

                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* Pricing Section */}
    
                Choose Your Plan

                Flexible pricing options to fit your team's needs

 (
    
                    <h3 className="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>

                      {plan.price}
    
                      <span className="text-lgtext-gray-400">{plan.period}</span>

                    <p className="text-gray-300">{plan.description}</p>

 (

                        {feature}
                    ))}
                  
                    Get Started

              ))}
    
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Clock, Target, BarChart3 } from 'lucide-react';

=======
import React from 'react';
>>>>>>> origin/main
export default function AIProjectManagementPro() {
export default Page;
'use client';
const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 projects',
        'Basic task management',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing teams',
      features: [
        'Up to 50 projects',
        'Advanced project management',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools'
      ]
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Custom workflows',
        '24/7 dedicated support',
        'Custom integrations',
<<<<<<< HEAD
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'AI Project Management Pro helped us increase productivity by 40% and reduce project delays by 60%.',
      rating: 5
    },
      name: 'Michael Chen',
      company: 'Consulting Firm',
      content: 'The AI-powered insights and automated scheduling have transformed how we manage our projects.',
      rating: 5
    },
      name: 'Emily Rodriguez',
      company: 'Software Company',
      content: 'Our team collaboration and project visibility have improved dramatically since using this platform.',
      rating: 5
  ]
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
        'White-label options'
      ]
    }
  ];
>>>>>>> origin/main

export default function Page() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    
        <title>AI Project Management Pro - Zion Tech Group</title>
=======
>>>>>>> origin/main

        <>
      <title>AI Project Management Pro - Zion Tech Group</title>

      </>
  );

=======
    <></>
      <Helmet></Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
        <meta name="keywords" content="AI project management, productivity, Zion Tech Group" /></meta>
  const features = [
    {
      icon: <Brain className="w-6 h-6text-cyan-400" />,
      title: 'AI-Powered Project Planning',
      description: 'Intelligent project planning with automated resource allocation and timeline optimization'
    },
    {
      icon: <Zap className="w-6 h-6text-purple-400" />,
      title: 'Real-time Collaboration',
      description: 'Seamless team collaboration with instant updates, notifications, and progress tracking'
    },
    {
      icon: <Shield className="w-6 h-6text-yellow-400" />,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies powered by machine learning'
    },
    {
      icon: <BarChart3 className="w-6 h-6text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive project insights, performance metrics, and predictive analytics'
    }
  ];

  return (
    <></>
      <Helmet></Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
        <meta name="keywords" content="AI project management, automation, productivity, Zion Tech Group" /></meta>
        <meta property="og:title" content="AI Project Management Pro - Zion Tech Group" /></meta>
        <meta property="og:description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" /></meta>
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiProjectManagementProPage() {
  return (
    <>
      <Helmet>
        <title>AiProjectManagementPro - Zion Tech Group</title>
        <meta name="description" content="Professional ai project management pro solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiProjectManagementPro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project management pro solutions coming soon.</p>
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

<<<<<<< HEAD
=======
    <>
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Professional  by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
          <p className="text-lg text-gray-300 mb-8">Professional  coming soon.</p>
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
;
}

}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
