import React from 'react';
import React from 'react';
import { Loader2, Brain, Zap, Shield, Globe  } from "lucide-react";

interface ImprovedLoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'futuristic' | 'minimal'
  showProgress?: boolean
  progress?: number
}

const ImprovedLoading: React.FC<ImprovedLoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  variant = 'futuristic',
  showProgress = false,
  progress = 0
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        {message && (
          <span className={`ml-2 text-gray-300 ${textSizeClasses[size]}`}>
            {message}
          </>
        )}
      </>
    )
  }

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated Background */}
          <div className="relative mb-8">
            <div></>
            <div className="relative w-24 h-24 mx-auto">
              <div></>
              <div></>
              <div></>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />
              </>
            </>
          </>
          <h2 className="text-2 xl font-bold text-white mb-4">
            {message}
          </>
          {showProgress && (
            <div className="w-64 mx-auto mb-4">
              <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                <div></>
              </>
              <div >
                {Math.round(progress)}% complete
              </>
            </>
          )}

          {/* Service Icons Animation */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0 s' }}>
              <Brain className="w-4 h-4 text-white" />
            </>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2 s' }}>
              <Shield className="w-4 h-4 text-white" />
            </>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4 s' }}>
              <Zap className="w-4 h-4 text-white" />
            </>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.6 s' }}>
              <Globe className="w-4 h-4 text-white" />
            </>
          </>
          <p >
            Preparing your experience...
          </>
        </>
      </>
    )
  }

  // Default variant
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        <div></>
      </>
      {message && (
        <span className={`mt-4 text-gray-300 ${textSizeClasses[size]}`}>
          {message}
        </>
      )}
      {showProgress && (
        <div className="w-48 mt-4">
          <div className="bg-white/10 rounded-full h-1 overflow-hidden">
            <div></>
          </>
        </>
      )}
    </>
  )
}

export default ImprovedLoading