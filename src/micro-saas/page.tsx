'use client'
import React from 'react'
import { BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

constMicroSAASPage: React.FC= () =>{constcategories= [
    {
      title: 'AI-Powered Tools',
      icon: Brain,
      color: 'text-purple-40 0',
      bgColor: 'bg-purple-50 0/2 0',
      services: [
        { name: 'AI Writing Assistant', price: '$1 9/month', description: 'AI-powered content creation and editing'},
        {name: 'AI Code Generator', price: '$4 9/month', description: 'AI-assisted coding and development'},
        {name: 'AI Design Studio', price: '$3 9/month', description: 'AI-powered graphic design tools'},
        {name: 'AI Analytics Dashboard', price: '$7 9/month', description: 'Real-time business intelligence'},
        {name: 'AI Chatbot Builder', price: '$2 9/month', description: 'No-code chatbot creation'},
        {name: 'AI SEO Optimizer', price: '$4 9/month', description: 'Automated SEO analysis and optimization'}
      ]
    },
    {title: 'Business Applications',
      icon: BarChart,
      color: 'text-blue-40 0',
      bgColor: 'bg-blue-50 0/2 0',
      services: [
        { name: 'AI-Powered CRM', price: '$4 9/month', description: 'Intelligent customer relationship management'},
        {name: 'AI Invoice Generator', price: '$1 9/month', description: 'Automated invoicing and billing'},
        {name: 'AI Lead Scoring', price: '$3 9/month', description: 'Intelligent lead qualification'},
        {name: 'AI Social Media Manager', price: '$5 9/month', description: 'Social media automation'},
        {name: 'AI Email Marketing', price: '$5 9/month', description: 'Automated email campaigns'},
        {name: 'AI Financial Planner', price: '$6 9/month', description: 'Financial planning and analysis'}
      ]
    },
    {title: 'Productivity Tools',
      icon: Settings2,
      color: 'text-green-40 0',
      bgColor: 'bg-green-50 0/2 0',
      services: [
        { name: 'AI Task Manager Pro', price: '$2 9/month', description: 'Intelligent task management'},
        {name: 'AI Expense Tracker', price: '$1 9/month', description: 'Smart expense management'},
        {name: 'AI Scheduler', price: '$3 9/month', description: 'Intelligent scheduling'},
        {name: 'AI Document Processor', price: '$4 9/month', description: 'Intelligent do cument processing'},
        {name: 'AI Password Manager', price: '$9/month', description: 'Secure password management'},
        {name: 'AI Voice Assistant', price: '$3 9/month', description: 'Custom voice assistants'}
      ]
    },
    {title: 'Creative & Media',
      icon: Palette,
      color: 'text-pink-40 0',
      bgColor: 'bg-pink-50 0/2 0',
      services: [
        { name: 'AI Video Creator', price: '$7 9/month', description: 'Automated video production'},
        {name: 'AI Music Composer', price: '$4 9/month', description: 'AI music generation'},
        {name: 'AI3D Generator', price: '$8 9/month', description: 'AI3D modeling and design'},
        {name: 'AI Fashion Design', price: '$6 9/month', description: 'AI fashion solutions'},
        {name: 'AI Photo Editor', price: '$2 9/month', description: 'AI-powered photo editing'},
        {name: 'AI Content Studio', price: '$5 9/month', description: 'Complete content creation suite'}
      ]
    },
    {title: 'E-commerce & Marketing',
      icon: CreditCard,
      color: 'text-orange-40 0',
      bgColor: 'bg-orange-50 0/2 0',
      services: [
        { name: 'AI E-commerce Assistant', price: '$7 9/month', description: 'E-commerce optimization'},
        {name: 'AI Store Optimizer', price: '$5 9/month', description: 'Store performance optimization'},
        {name: 'AI Market Research', price: '$8 9/month', description: 'Automated market analysis'},
        {name: 'AI A/B Testing', price: '$4 9/month', description: 'Intelligent testing platform'},
        {name: 'AI Growth Hacker', price: '$9 9/month', description: 'Automated growth strategies'},
        {name: 'AI Website Builder', price: '$3 9/month', description: 'AI website creation'}
      ]
    },
    {title: 'Security & Monitoring',
      icon: ShieldCheck,
      color: 'text-red-40 0',
      bgColor: 'bg-red-50 0/2 0',
      services: [
        { name: 'AI Security Monitor', price: '$9 9/month', description: 'Real-time security monitoring'},
        {name: 'AI Performance Tracker', price: '$4 9/month', description: 'Comprehensive performance tracking'},
        {name: 'AI Predictive Analytics', price: '$7 9/month', description: 'Future outcome predictions'},
        {name: 'AI Health Tracker', price: '$2 9/month', description: 'Personal health monitoring'},
        {name: 'AI Learning Platform', price: '$5 9/month', description: 'Personalized learning'},
        {name: 'AI Data Pipeline', price: '$6 9/month', description: 'Automated data processing'}
      ]
    }
  ]

  constbenefits= [
    {icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our ready-to-use applications'
   },
    {icon: Star,
      title: 'Proven Results',
      description: 'Average200% productivity increase within 30days'
   },
    {icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all applications'
   },
    {icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible pricing'
    }
  ]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;