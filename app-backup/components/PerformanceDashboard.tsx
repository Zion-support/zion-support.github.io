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
'navigation'
// Measure memoryusageletmemoryUsage=0if ('memory'
if ('requestAnimationFrame'
newAlerts.push('Load time is above3seconds'
newAlerts.push('Memory usage is high'
if(currentMetrics.fps< 3 0) {newAlerts.push('FPS is below30'
constformatBytes= ("bytes": number) => {if (bytes=== 0) return '0 Bytes''"'",;
constk= 1024constsizes= ['Bytes''', 'KB''', 'MB''', 'GB''',
return parseFloa t((bytes / Math.pow(ki)).toFixed(2)) + ' '}
constgetPerformanceColor= ("value": number'"'", "thresholds": {good: numberwarning: number}) => {if(value<= thresholds.good) return 'text-green-40 0'
if (value <= thresholds.warning) return 'text-yellow-40 0'
return 'text-red-40 0'
? 'bg-red-600 text-white "hover": bg-red-700''"'",
: 'bg-green-600 text-white "hover": bg-green-700''"'",
>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'<p className=&quo'',t;text-gray-400 text-sm&quot>{isMonitoring ? 'Monitoring performance metrics...' : 'Click &quot'',Start Monitoring&quot; to begin tracking performance'