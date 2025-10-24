<<<<<<< HEAD

interface EnhancedLoadingSkeletonProps {
  lines?: number
  showAvatar?: boolean
  showImage?: boolean
  height?: string
  className?: string


const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  lines = 3,
  showAvatar = false,
  showImage = false,
  height = 'auto',
  className = '',
}) => {
  return (
    <div className={`animate-pulse ${className}`} style={{ height }}></div>
      <div className="space-y-4"></div>
        {showAvatar && (
          <div className="flex items-center space-x-4"></div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2 flex-1"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        )
        
        {showImage && (
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
        )
        
        <div className="space-y-2"></div>
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index
              className={`h-4 bg-gray-300 rounded ${
                index === lines - 1 ? 'w-3/4' : 'w-full'
              }`
            ></div>
          ))
        </div>
      </div>
    </div>
  )
}

}

export default EnhancedLoadingSkeleton;}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
const EnhancedLoadingSkeletonPage: React.FC = () => {
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
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
