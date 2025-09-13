import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Download, Eye } from 'lucide-react';

interface ContentPromotionalBannerProps {
  variant?: 'default' | 'featured' | 'trending' | 'new';
  className?: string;
}

export default function ContentPromotionalBanner({ 
  variant = 'default',
  className = ''
}: ContentPromotionalBannerProps) {
  const variants = {
    default: {
      background: 'bg-gradient-to-r from-blue-600 to-purple-600',
      text: 'text-white',
      button: 'bg-white text-blue-600 hover:bg-gray-100',
      buttonSecondary: 'border-white text-white hover:bg-white hover:text-blue-600'
    },
    featured: {
      background: 'bg-gradient-to-r from-green-600 to-blue-600',
      text: 'text-white',
      button: 'bg-white text-green-600 hover:bg-gray-100',
      buttonSecondary: 'border-white text-white hover:bg-white hover:text-green-600'
    },
    trending: {
      background: 'bg-gradient-to-r from-orange-600 to-red-600',
      text: 'text-white',
      button: 'bg-white text-orange-600 hover:bg-gray-100',
      buttonSecondary: 'border-white text-white hover:bg-white hover:text-orange-600'
    },
    new: {
      background: 'bg-gradient-to-r from-purple-600 to-pink-600',
      text: 'text-white',
      button: 'bg-white text-purple-600 hover:bg-gray-100',
      buttonSecondary: 'border-white text-white hover:bg-white hover:text-purple-600'
    }
  };

  const styles = variants[variant];

  return (
    <div className={`${styles.background} rounded-2xl shadow-2xl p-8 mb-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            {variant === 'featured' ? '✨ FEATURED CONTENT' : 
             variant === 'trending' ? '🔥 TRENDING NOW' : 
             variant === 'new' ? '🆕 JUST PUBLISHED' : '📚 LATEST CONTENT'}
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.text}`}>
            Discover Our Latest AI Content
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.text} opacity-90`}>
            Explore cutting-edge AI insights, proven case studies, and comprehensive guides 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Trends</h3>
            <p className="text-sm opacity-90 mb-3">Latest AI adoption trends in Fortune 500 companies</p>
            <div className="flex items-center justify-center text-sm">
              <Eye className="w-4 h-4 mr-1" />
              <span>2.3k views</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
            <p className="text-sm opacity-90 mb-3">Complete guide to AI workflow optimization</p>
            <div className="flex items-center justify-center text-sm">
              <Eye className="w-4 h-4 mr-1" />
              <span>3.1k views</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🏭</div>
            <h3 className="text-lg font-semibold mb-2">Manufacturing Case Study</h3>
            <p className="text-sm opacity-90 mb-3">$2.8B cost savings transformation</p>
            <div className="flex items-center justify-center text-sm">
              <Eye className="w-4 h-4 mr-1" />
              <span>4.2k views</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold mb-2">Master Guide</h3>
            <p className="text-sm opacity-90 mb-3">150-page AI implementation playbook</p>
            <div className="flex items-center justify-center text-sm">
              <Download className="w-4 h-4 mr-1" />
              <span>12.5k downloads</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase" 
              className={`inline-flex items-center px-8 py-4 ${styles.button} rounded-lg font-semibold transition-colors text-lg shadow-lg`}
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/resources" 
              className={`inline-flex items-center px-8 py-4 border-2 ${styles.buttonSecondary} rounded-lg font-semibold transition-colors text-lg`}
            >
              Download Resources
            </Link>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>50k+ Monthly Readers</span>
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              <span>100k+ Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}