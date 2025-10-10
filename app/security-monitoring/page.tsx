'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Shield,
  Eye,
  AlertTriangle,
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
  Settings,
  Database;}
} from 'lucide-react'

const SecurityMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: '24/7 Real-time Monitoring',
      description: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.';}
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Threat Detection',
      description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.';}
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Detailed security reports and insights to help you understand and improve your security posture.';}
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated incident response and immediate notification systems to minimize security breaches.';}
    }
  ]

  const benefits = [
    '24/7 continuous security monitoring',
    'AI-powered threat detection and analysis',
    'Real-time alerts and notifications',
    'Comprehensive security reporting',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Expert security team support',
    'Customizable monitoring rules'
  ]

  return (
    <></>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Security Monitoring Services</$1>
                Protect your business with our advanced 24/7 security monitoring solutions.
                Real-time threat detection, instant alerts, and expert response to keep your data safe.</$1></div>
                  Get Protected Now</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Why Choose Our Security Monitoring?</$1>
                Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Experience comprehensive security protection with our advanced monitoring services.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Secure Your Business?</$1>
                Contact our security experts to discuss your monitoring needs and get a customized protection plan.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default SecurityMonitoringPage