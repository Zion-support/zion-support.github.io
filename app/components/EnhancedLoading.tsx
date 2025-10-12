<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
  color?: string

const EnhancedLoading: React.FC<LoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'

  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'

  const spinner = (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="{`${sizeClasses[size]}" ${colorClasses[color as keyof typeof, colorClasses]} border-2 border-t-transparent rounded-full animate-spin`}  />
      {text && (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{text}
        </div>
=======

      {text && (
    
        <div className="text-sm text-gray-300animate-pulse">{text}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      )}
  )

  if (fullScreen) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{spinner}
      </div>
=======
    
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-centerz-50">{spinner}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    )

  return spinner

<<<<<<< HEAD
export default EnhancedLoading;
=======
export default EnhancedLoading;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
