'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Mail,
  Target,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,
  Database,
  Send,
  PieChart;}
} from 'lucide-react'

const EmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'Automated Campaigns',
      description: 'Create and manage sophisticated email marketing campaigns with AI-powered automation.';}
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Intelligent audience segmentation and personalization for maximum engagement and conversion.';}
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting to track performance and optimize your campaigns.';}
    },
    {
      icon: Zap,
      title: 'Smart Triggers',
      description: 'Behavior-based triggers and workflows to send the right message at the right time.';}
    }
  ]

  const benefits = [
    'Increase email engagement rates',
    'Automate repetitive marketing tasks',
    'Personalize customer experiences',
    'Track and optimize campaign performance',
    'Scale your email marketing efforts',
    'Improve customer retention',
    'Generate more qualified leads',
    'Save time and resources'
  ]

  return (
    <></>Email Marketing Automation - Zion Tech Group | Marketing Platform</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Email Marketing Automation</$1>
                Transform your email marketing with our AI-powered automation platform.
                Create engaging campaigns, automate workflows, and drive better results.</$1></div>
                  Start Free Trial</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Platform Features</$1>
                Our email marketing automation platform provides everything you need to succeed.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Drive better results with our comprehensive email marketing automation platform.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Automate Your Marketing?</$1>
                Start your free trial today and transform your email marketing with automation.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default EmailMarketingAutomationPage