'use client'
import React from 'react'
import {cn} from '../$1/utils'
interface ResponsiveContainerProp s {children: React.ReactNode;
  class Nam e?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2 xl' | '3 xl' | '4 xl' | '5 xl' | '6 xl' | '7 xl' | 'full';}

constResponsiveContainer= ({children,
  class Nam e,
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2 xl': 'max-w-2 xl',
    '3 xl': 'max-w-3 xl',
    '4 xl': 'max-w-4 xl',
    '5 xl': 'max-w-5 xl',
    '6 xl': 'max-w-6 xl',
    '7 xl': 'max-w-7 xl',
    full: 'max-w-full'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ResponsiveContainerPage: React.FC = () => {
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

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      maxWidthClasses[maxWidth],
      className
    )}>{children}</div>div>
 };

  return (
  <divclassName={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      maxWidthClasses[maxWidth],
      class Nam e
   )}>{children}
  </di>
  );
};

export default ResponsiveContainer;
