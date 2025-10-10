'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Cloud,
  Settings,
  CheckCircle,
  BarChart,
  Clock,
  Users,
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
  Target,
  Eye,
  Database,
  Server,
  Monitor;}
} from 'lucide-react'

const CloudInfrastructureManagerPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Manage and monitor your infrastructure across AWS, Azure, Google Cloud, and other platforms from a single dashboard.';}
    },
    {
      icon: Settings,
      title: 'Automated Scaling',
      description: 'Intelligent auto-scaling based on demand to optimize costs and performance automatically.';}
    },
    {
      icon: BarChart,
      title: 'Cost Optimization',
      description: 'Advanced analytics and recommendations to reduce cloud costs while maintaining performance.';}
    },
    {
      icon: Zap,
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.';}
    }
  ]

  const benefits = [
    'Centralized cloud infrastructure management',
    'Automated scaling and optimization',
    'Cost reduction and optimization',
    'Enhanced security and compliance',
    'Real-time monitoring and alerts',
    'Easy deployment and configuration',
    'Multi-cloud support',
    'Expert technical support'
  ]

  return (
    <></>Cloud Infrastructure Manager - Zion Tech Group | Cloud Management Platform</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Cloud Infrastructure Manager</$1>
                Streamline your cloud operations with our comprehensive infrastructure management platform.
                Monitor, optimize, and scale your cloud resources across multiple providers.</$1></div>
                  Start Free Trial</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Platform Features</$1>
                Our cloud infrastructure manager provides everything you need to optimize your cloud operations.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Optimize your cloud infrastructure with our comprehensive management platform.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Optimize Your Cloud?</$1>
                Start your free trial today and experience the power of our cloud infrastructure manager.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default CloudInfrastructureManagerPage