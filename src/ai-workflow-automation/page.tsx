'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Workflow } from 'lucide-react'
import { CheckCircle, Phone, Mail } from 'lucide-react'

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate complex business processes with intelligent workflow engines that adapt and learn.',
      benefits: ['Visual Workflow Builder', 'Conditional Logic', 'Error Handling', 'Process Optimization']
   },
    {icon: Brain,
      title: 'AI Decision Making',
      description: 'Let AI make intelligent decisions based on data patterns and business rules.',
      benefits: ['Smart Routing', 'Risk Assessment', 'Quality Control', 'Predictive Actions']
   },
    {icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor and analyze workflow performance with real-time dashboards and insights.',
      benefits: ['Real-time Monitoring', 'Performance Metrics', 'Bottleneck Detection', 'Optimization Suggestions']
   },
    {icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with any system or application through our extensive integration library.',
      benefits: ['API Integrations', 'Database Connections', 'Cloud Services', 'Legacy Systems']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small teams',
      features: ['Up to5workflows', 'Basic automation', 'Email notifications', 'Standard integrations']
   },
    {name: 'Professional',
      price: '$59 9/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25workflows', 'Advanced AI features', 'Custom integrations', 'Analytics dashboard', 'Priority support']
   },
    {name: 'Enterprise',
      price: '$1,29 9/month',
      description: 'For large organizations',
      features: ['Unlimited workflows', 'Custom AI models', 'Advanced analytics', 'Dedicated support', 'On-premise deployment']
    }
  ]
  const stats = [
    { number: '70%', label: 'Process Efficiency' },
    { number: '90%', label: 'Error Reduction' },
    { number: '50%', label: 'Time Savings' },
    { number: '99.9%', label: 'Reliability' }
  ]

  constuseCases= [
    {title: 'HR Onboarding',
      description: 'Automate employee onboarding processes from application to first day.',
      icon: Users
   },
    {title: 'Invoice Processing',
      description: 'Automatically process invoices, validate data, and route for approval.',
      icon: Database
   },
    {title: 'Customer Support',
      description: 'Route tickets, escalate issues, and provide automated responses.',
      icon: Globe
   },
    {title: 'Data Migration',
      description: 'Safely migrate data between systems with automated validation.',
      icon: Settings
    }
  ]

  const pricing = pricingPlans,
const Page = () => {
  return (
      </div>
    </>
  )
}

export default Page;