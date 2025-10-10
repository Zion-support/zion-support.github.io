'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Shield,
  Search,
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
  Eye;}
} from 'lucide-react'

const PenetrationTestingPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Comprehensive Vulnerability Assessment',
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.';}
    },
    {
      icon: Target,
      title: 'Simulated Attack Scenarios',
      description: 'Real-world attack simulations to test your defenses and response capabilities.';}
    },
    {
      icon: BarChart,
      title: 'Detailed Security Reports',
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.';}
    },
    {
      icon: Zap,
      title: 'Expert Security Analysis',
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.';}
    }
  ]

  const benefits = [
    'Identify security vulnerabilities before attackers do',
    'Comply with industry regulations and standards',
    'Improve your security posture and defenses',
    'Receive detailed remediation recommendations',
    'Test incident response procedures',
    'Validate security controls effectiveness',
    'Expert analysis and reporting',
    'Ongoing security improvement guidance'
  ]

  return (
    <></>Penetration Testing Services - Zion Tech Group | Security Assessment</title></$1></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section></div></div>
                Penetration Testing Services</$1>
                Identify and fix security vulnerabilities before attackers exploit them.
                Our expert penetration testing services help secure your systems and protect your business.</$1></div>
                  Schedule Assessment</$1>
                  Call (302) 464-0950</$1></$1></$1></$1></$1>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Our Penetration Testing Approach</$1>
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.</$1></$1></div>
              {features.map((feature, index) => (;}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></$1>{feature.title}</h3>{feature.description}</p></$1>
              ))}
            </div></$1></$1>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
                Key Benefits</$1>
                Strengthen your security defenses with our comprehensive penetration testing services.</$1></$1></div>
              {benefits.map((benefit, index) => (;}
                <div key={index} className="flex items-start space-x-3"></div>{benefit}</p></$1>
              ))}
            </div></$1></$1>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
                Ready to Test Your Security?</$1>
                Contact our security experts to schedule a comprehensive penetration test for your systems.</$1></div>
                  Call (302) 464-0950</$1>
                  Email Us</$1></$1></$1></$1></$1></$1>
  )
}

export default PenetrationTestingPage