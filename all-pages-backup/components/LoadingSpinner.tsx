<<<<<<< HEAD:all-pages-backup/components/LoadingSpinner.tsx

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
};
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
<<<<<<< HEAD:all-pages-backup/components/LoadingSpinner.tsx
      icon: Brain,
  title: title,
  description: description,
  benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    {
      icon: BarChart,
  title: title,
  description: description,
  benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
    {
      icon: Target,
  title: title,
  description: description,
  benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
    {
      icon: TrendingUp,
  title: title,
  description: description,
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
<<<<<<< HEAD:all-pages-backup/components/LoadingSpinner.tsx
    <>;
      <Helmet>;
<<<<<<< HEAD:all-pages-backup/components/LoadingSpinner.tsx
  )};

export default LoadingSpinnerPage
color?: 'primary' | 'secondary' | 'white'
{text?: string}
constLoadingSpinner: React.FC<LoadingSpinnerProp s>= ({size= 'md'
color= 'primary'
text}) => {constsizeClasses= {
sm: sm,
  md: md,
  lg: 'w-12h-1 2'}
constcolorClasses= {primary: primary,
  secondary: secondary,
  white: 'text-white'}
return(<divclassName=&quot;flex flex-colitems-centerjustify-centerspace-y-2&quot; role=&quot;status&quot;aria-label=&quot;Loading&quot;><divclassName={`animate-spin rounded-full border-2 border-gray-300border-t-transparent${sizeClasses[size]}${colorClasses[color]}`}></di>{text &&(< className={`text-sm${colorClasses[color]}animate-pulse`}></ className={`text-sm${colorClasses[color]}animate-pulse`}>{text}</p>)}</di>)
}
const colorClasses = {;
primary: primary,
  secondary: secondary,
  white: 'text-white'
