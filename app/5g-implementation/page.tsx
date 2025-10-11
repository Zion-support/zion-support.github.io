'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            5G Implementation Services
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Transform your business with our comprehensive 5G implementation services
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FiveGImplementationPage