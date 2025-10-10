'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  CheckSquare,
  Users,
  CheckCircle,
  BarChart,
  Clock,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,
  Database,
  Target,
  Calendar,
  FileText;}
} from 'lucide-react'

const ProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Organize and track tasks with advanced project management tools and AI-powered insights.';}
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, comments, and file sharing.';}
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Comprehensive project analytics and reporting to track progress and performance.';}
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and productivity.';}
    }
  ]

  const benefits = [
    'Improve project delivery times',
    'Enhance team collaboration',
    'Track progress and performance',
    'Automate routine tasks',
    'Better resource allocation',
    'Reduce project risks',
    'Increase team productivity',
    'Streamline project workflows'
  ]

  return (
    <></>Project Management Pro - Zion Tech Group | Project Management Platform</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Project Management Pro</$1>
                Streamline your projects with our comprehensive management platform.
                Organize tasks, collaborate with teams, and deliver projects on time.</$1></div>
                  Start Free Trial</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Platform Features</$1>
                Our project management platform provides everything you need to succeed.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Transform your project management with our comprehensive platform.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Manage Better?</$1>
                Start your free trial today and transform your project management.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default ProjectManagementProPage