import React from 'react'
import { Loader2, Brain, Zap, Shield, Globe } from 'lucide-react'

interface ImprovedLoadingProps {
//   message?: string
//   size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'futuristic' | 'minimal'
//   showProgress?: boolean
//   progress?: number
}

const ImprovedLoading: React.FC<ImprovedLoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  variant = 'futuristic',
  showProgress = false,
  progress = 0
}) => {
  const sizeClasses = {
//     sm: 'w-4 h-4',
//     md: 'w-8 h-8',
//     lg: 'w-12 h-12',
//     xl: 'w-16 h-16'
  }

  const textSizeClasses = {
//     sm: 'text-sm',
//     md: 'text-base',
//     lg: 'text-lg',
//     xl: 'text-xl'
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        {message && (
          <span className={`ml-2 text-gray-300 ${textSizeClasses[size]}`}>
            {message}
</span>
        )}
</div>
//     )
  }

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Background */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-purple-500/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-4 border-4 border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />
</div>
</div>
</div>

          <h2 className="text-2xl font-bold text-white mb-4">
            {message}
</h2>

          {showProgress && (
            <div className="w-64 mx-auto mb-4">
              <div className="bg-white/10 rounded-full h-2 overflow-hidden">
//                 <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
//                 ></div>
</div>
              <div className="text-sm text-gray-400 mt-2">
                {Math.round(progress)}% complete
</div>
</div>
          )}

          {/* Service Icons Animation */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0s' }}>
              <Brain className="w-4 h-4 text-white" />
</div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-4 h-4 text-white" />
</div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Zap className="w-4 h-4 text-white" />
</div>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.6s' }}>
              <Globe className="w-4 h-4 text-white" />
</div>
</div>

          <p className="text-gray-400 text-sm mt-6">
//             Preparing your experience...
</p>
</div>
</div>
//     )
  }

  // Default variant
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
</div>
      {message && (
        <span className={`mt-4 text-gray-300 ${textSizeClasses[size]}`}>
          {message}
</span>
      )}
      {showProgress && (
        <div className="w-48 mt-4">
          <div className="bg-white/10 rounded-full h-1 overflow-hidden">
//             <div 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
//             ></div>
</div>
</div>
      )}
</div>
//   )
}

export default ImprovedLoading