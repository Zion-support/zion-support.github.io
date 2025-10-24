'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const LoadingSpinnerPage: React.FC = () => {
  const features = [

export default LoadingSpinnerPage;
color?: 'primary' | 'secondary' | 'white'
text?: string}
constLoadingSpinner: React.FC<LoadingSpinnerProp s>= ({size= 'md',
color= 'primary',
text}) =</ {constsizeClasses= {
sm: 'w-4 h-4',
md: 'w-8 h-8',
lg: 'w-12h-1 2'}
constcolorClasses= {primary: 'text-indigo-60 0',
secondary: 'text-gray-60 0',
white: 'text-white'}
return(<divclassName="flex flex-colitems-centerjustify-centerspace-y-2" role="status"aria-label="Loading"><divclassName={`animate-spin rounded-full border-2 border-gray-300border-t-transparent${sizeClasses[size]}${colorClasses[color]}`}></di>{text &&(< className={`text-sm${colorClasses[color]}animate-pulse`}  />{text}</p>)}</di>)
}
const colorClasses = {primary: 'text-indigo-600',
secondary: 'text-gray-600',
white: 'text-white'
};

  return (
<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading"></div>
<div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
{text && (
<p className={`text-sm ${colorClasses[color]} animate-pulse`}>{text}</p>p</
)}
</div>
)
}
export default LoadingSpinner;