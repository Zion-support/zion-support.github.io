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
  Database,
  Target,
  Monitor;}
} from 'lucide-react'

const SecurityMonitoringSuitePage: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Real-time Dashboard',
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.';}
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Alerts',
      description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.';}
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Detailed security reports and analytics to help you understand and improve your security posture.';}
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Automated incident response and threat mitigation to protect your systems 24/7.';}
    }
  ]

  const benefits = [
    '24/7 security monitoring and protection',
    'Real-time threat detection and alerts',
    'Comprehensive security analytics',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Easy-to-use dashboard interface',
    'Scalable for any business size',
    'Expert security team support'
  ]

  return (
    <></>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Security Monitoring Suite</$1>
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,
                and automated response capabilities to protect your business 24/7.</$1></div>
                  Start Free Trial</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Platform Features</$1>
                Our security monitoring suite provides everything you need to protect your business from cyber threats.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Why Choose Our Suite?</$1>
                Experience comprehensive security protection with our all-in-one monitoring platform.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Secure Your Business?</$1>
                Start your free trial today and experience the power of our security monitoring suite.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default SecurityMonitoringSuitePage