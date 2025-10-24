<<<<<<< HEAD:app/components/LoadingSpinner.tsx
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
const LoadingSpinnerPage: React.FC = () => {
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
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
    "title": 'AI-Powered Intelligence',
      "description": 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    "benefits": ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'
    "title": 'Advanced Analytics',
      "description": 'Comprehensive analytics dashboard with real-time data visualization.',
    "benefits": ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'
    "title": 'Precision Targeting',
      "description": 'Target specific goals and objectives with precision and accuracy.',
    "benefits": ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'
    "title": 'Growth Optimization',
      "description": 'Optimize your business growth with data-driven strategies.',
    "benefits": ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'
  'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
>>>>>>> origin/main:app-backup/components/LoadingSpinner.tsx
    'Gain competitive advantage with advanced technology'
color?: 'primary' | 'secondary' | 'white'
"constLoadingSpinner": React.FC<LoadingSpinnerProp s>= ({size= 'md');
color= 'primary'
<<<<<<< HEAD:app/components/LoadingSpinner.tsx
text}) => {constsizeClasses= {
sm: 'w-4 h-4',
    md: 'w-8 h-8',
lg: 'w-12h-1 2'}
constcolorClasses= {primary: 'text-indigo-60 0',
    secondary: 'text-gray-60 0',
white: 'text-white'}
return(<divclassName=&quot;flex flex-colitems-centerjustify-centerspace-y-2&quot; role=&quot;status&quot;aria-label=&quot;Loading&quot;><divclassName={`animate-spin rounded-full border-2 border-gray-300border-t-transparent${sizeClasses[size]}${colorClasses[color]}`}></di>{text &&(< className={`text-sm${colorClasses[color]}animate-pulse`}></ className={`text-sm${colorClasses[color]}animate-pulse`}>{text}</p>)}</di>)
}
const colorClasses = {
primary: 'text-indigo-600',
    secondary: 'text-gray-600',
white: 'text-white'}
return (
<div className=&quot;flex flex-col items-center justify-center space-y-2&quot; role=&quot;status&quot; aria-label=&quot;Loading&quot;></div>
<div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
{text && (
<p className={`text-sm ${colorClasses[color]} animate-pulse`}>{text}</p>p>
)}
</div>
)
}
export default LoadingSpinner
=======
"sm": 'w-4 h-4',
    "md": 'w-8 h-8',
"lg": 'w-12h-1 2',}
constcolorClasses= {"primary": 'text-indigo-60 0',
    "secondary": 'text-gray-60 0',
"white": 'text-white',
"primary": 'text-indigo-600',
    "secondary": 'text-gray-600';,
"white": 'text-white'
>>>>>>> origin/main:app-backup/components/LoadingSpinner.tsx
