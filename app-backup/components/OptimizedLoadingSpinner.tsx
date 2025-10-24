import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight'', Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle'', ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
    "title": 'AI-Powered Intelligence''"'",
      "description": 'Advanced AI algorithms that provide intelligent insights and recommendations.''"'",
    "benefits": ['Smart recommendations''"'", 'Predictive analytics''', 'Automated insights''', 'Real-time analysis'
    "title": 'Advanced Analytics''"'",
      "description": 'Comprehensive analytics dashboard with real-time data visualization.''"'",
    "benefits": ['Real-time dashboards''"'", 'Custom reports''', 'Data visualization''', 'Performance metrics'
    "title": 'Precision Targeting''"'",
      "description": 'Target specific goals and objectives with precision and accuracy.''"'",
    "benefits": ['Goal tracking''"'", 'Performance optimization''', 'Strategic planning''', 'Success metrics'
    "title": 'Growth Optimization''"'",
      "description": 'Optimize your business growth with data-driven strategies.''"'",
    "benefits": ['Growth strategies''"'", 'Market analysis''', 'Competitive insights''', 'ROI optimization'
  'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
({size= 'md''',
variant= 'spinner''',
text= 'Loading...''',
className= '''',
color= 'blue''',
"xs": 'h-3 w-3''"'",
    "sm": 'h-4 w-4''"'",
"md": 'h-8 w-8''"'",
    "lg": 'h-1 2 w-1 2''"'",
"xl": 'h-16w-1 6''"'",
() => ({"xs": 'text-xs''"'",
    "sm": 'text-sm''"'",
"md": 'text-base''"'",
    "lg": 'text-lg''"'",
"xl": 'text-xl''"'",
() => ({"blue": 'border-blue-60 0 bg-blue-60 0''"'",
    "gray": 'border-gray-60 0 bg-gray-60 0''"'",
"green": 'border-green-600bg-green-60 0''"'",
    "red": 'border-red-600bg-red-60 0''"'",
"purple": 'border-purple-600bg-purple-60 0''"'",
case 'do ts'
return(<divclassName='flex space-x-1' role='status' aria-label='Loading''',
className={`w-2 h-2 rounded-full animate-bounce${colorClasses[color].split(''
case 'pulse'
role='status''',
aria-label='Loading''',
case 'skeleton':return(</di}><divclassName='space-y-2' role='status' aria-label='Loading''',
style={{ "width": '7 5%''"'",
style={{ "width": '5 0%''"'",
case 'bars'
return(<divclassName='flex space-x-1' role='status' aria-label='Loading'}'',
className={`w-1 ${colorClasses[color].split(''
case 'spinner'
role='status''',
aria-label='Loading'<div className='text-center'',''',
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner''',