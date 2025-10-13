<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Users, Brain, Clock, Shield, ArrowRight, CheckCircle, Star, FileText, TrendingUp, Calendar, Heart } from 'lucide-react';
=======
import React from 'react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Heart } from 'lucide-react';

const ZionHRAssistantPro = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Automatically screen and rank candidates with 95% accuracy using advanced NLP and machine learning",
      icon: <FileText className="w-6 h-6" />,
      benefit: "Save 80% screening time"
    },
    {
      title: "Intelligent Interview Scheduling",
      description: "Automatically coordinate interview times across multiple time zones and calendars",
      icon: <Clock className="w-6 h-6" />,
      benefit: "Zero scheduling conflicts"
    },
    {
      title: "Employee Performance Analytics",
      description: "Track and analyze employee performance with AI-driven insights and recommendations",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Data-driven HR decisions"
    },
    {
      title: "Automated Onboarding",
      description: "Streamline new employee onboarding with personalized workflows and task automation",
      icon: <Users className="w-6 h-6" />,
      benefit: "50% faster onboarding"
    },
    {
      title: "Smart Leave Management",
      description: "Intelligent leave balance tracking, approval workflows, and conflict resolution",
      icon: <Calendar className="w-6 h-6" />,
      benefit: "Automated compliance"
    },
    {
      title: "Employee Sentiment Analysis",
      description: "Monitor employee satisfaction and engagement through AI-powered sentiment analysis",
      icon: <Brain className="w-6 h-6" />,
      benefit: "Proactive engagement"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic AI screening",
        "Interview scheduling",
        "Leave management",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced AI screening",
        "Performance analytics",
        "Automated onboarding",
        "Priority support",
        "Custom workflows",
        "API integration",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Premium AI features",
        "Custom AI training",
        "White-label options",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const hrProcesses = [
    {
      title: "Recruitment & Hiring",
      description: "AI-powered candidate screening, interview scheduling, and talent pipeline management",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Performance Management",
      description: "Continuous performance tracking, goal setting, and 360-degree feedback systems",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Employee Engagement",
      description: "Sentiment analysis, engagement surveys, and culture monitoring tools",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance & Analytics",
      description: "Automated compliance tracking, reporting, and predictive analytics",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function ZionHrAssistantProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Hr Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Hr Assistant Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Hr Assistant Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion hr assistant pro solutions designed to meet your business needs.
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
