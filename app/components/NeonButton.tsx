'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const NeonButtonPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl",
    secondary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl",
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl"
  }

  const neonEffect =
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10"

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`

  const content = (
    <div>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}
    </div>
  )

  if (href) {
    return (
<a href={href} className={buttonClasses}>{content}</a>a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>{content}</button>button>
  );
};

export default NeonButton;
