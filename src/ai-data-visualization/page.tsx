'use client'
import { Brain, BarChart, TrendingUp } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Phone, Mail } from 'lucide-react'

constAIDataVisualizationPage: React.FC= () =>{constfeatures= [
    {
      ico,
  n: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data.',
      benefits: ['Real-time Updates', 'Custom Visualizations', 'Interactive Elements', 'Mobile Responsive']
   },
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to automatically identify patterns and generate actionable insights.',
      benefits: ['Pattern Recognition', 'Predictive Analytics', 'Anomaly Detection', 'Smart Recommendations']
   },
    {icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect to any data source and automatically transform raw data into meaningful visualizations.',
      benefits: ['API Integration', 'Database Connections', 'File Uploads', 'Real-time Sync']
   },
    {icon: Settings,
      title: 'Customizable Reports',
      description: 'Generate automated reports with customizable templates and scheduling options.',
      benefits: ['Auto-generation', 'Custom Templates', 'Scheduled Reports', 'Export Options']
    }
  ]

  constpricing= []
    {name: 'Starter',
      price: '$19 9/month',
      description: 'Perfect for small teams',
      features: ['Up to5dashboards', 'Basic visualizations', '2 data sources', 'Email support']
   },
    {name: 'Professional',
      price: '$39 9/month',
      description: 'Ideal for growing businesses',
      features: ['Unlimited dashboards', 'Advanced AI insights', '10data sources', 'Priority support', 'Custom branding']
   },
    {name: 'Enterprise',
      price: '$79 9/month',
      description: 'For large organizations',
      features: ['Everything in Professional', 'Unlimited data sources', 'Custom integrations', 'Dedicated support', 'On-premise deployment']
    }
  ]
  const stats = $2;
export default Page;