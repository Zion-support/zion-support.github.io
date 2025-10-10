'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  BarChart,
  TrendingUp,
  Database,
  CheckCircle,
  Brain,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Lock,
  Activity,
  Settings,
  Target,
  Eye,
  PieChart,
  LineChart;}
} from 'lucide-react'

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.';}
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.';}
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources to get a complete picture of your business.';}
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.';}
    }
  ]

  const benefits = [
    'Make data-driven business decisions',
    'Identify new opportunities and trends',
    'Improve operational efficiency',
    'Reduce costs through optimization',
    'Enhance customer experience',
    'Comply with data regulations',
    'Real-time insights and reporting',
    'Custom analytics solutions'
  ]

  return (
    <></>Data Analytics Services - Zion Tech Group | Business Intelligence</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Data Analytics Services</$1>
                Transform your data into actionable insights with our advanced analytics solutions.
                Make smarter decisions and drive business growth with AI-powered data analysis.</$1></div>
                  Get Analytics Now</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Our Analytics Solutions</$1>
                We provide comprehensive data analytics services to help you unlock the power of your data.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Drive business success with our comprehensive data analytics services.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Unlock Your Data?</$1>
                Contact our analytics experts to discuss your data needs and get a customized solution.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default DataAnalyticsPage