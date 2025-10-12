

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
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

      {text && (
    
        <div className="text-sm text-gray-300animate-pulse">{text}

      )}
  )

  if (fullScreen) {
    return (

      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-centerz-50">{spinner}

    )

  return spinner

export default EnhancedLoading;

=======
export default function EnhancedLoading() {
  return (
    <>
      <Helmet>
        <title>Enhanced Loading - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced loading by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhanced Loading</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhanced loading coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
