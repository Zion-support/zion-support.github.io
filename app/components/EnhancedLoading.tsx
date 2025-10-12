import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string;
  fullScreen?: boolean;
  color?: string;
}
const EnhancedLoading: React.FC<LoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  }
  const spinner = (
    <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
      <div className="{`${size classes[size]}" ${colorClasses[color as keyof typeof, colorClasses]} border-2 border-t-transparent rounded-full animate-spin`}><div></div></div></div></div>
      {text && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{text}
        </div>
      )}
    </div>
  )
  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{spinner}
      </div>
    )
  }
  return spinner
export default EnhancedLoading;
  return spinner;
}