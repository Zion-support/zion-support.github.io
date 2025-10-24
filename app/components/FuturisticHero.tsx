'use client'
import React from 'react'
import { ArrowRight, Play, Star } from 'lucide-react'
interface FuturisticHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  backgroundVideo?: string
  showVideo?: boolean
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = 'Transform Your Business with AI'
  subtitle = 'The Future is Here'
  description = 'Experience cutting-edge technology solutions that revolutionize how you work, think, and grow.'
  primaryButtonText = 'Get Started'
  secondaryButtonText = 'Watch Demo'
  onPrimaryClick
  onSecondaryClick
  backgroundVideo
  showVideo = false
}) => {
  return (
    <div className="...">
      {/* Background */}
      <div className="...">
        {showVideo && backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            className="...">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
        
        {/* Animated background elements */}
        <div className="...">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="...">
        <div className="...">
          <div className="...">
            <Star className="w-4 h-4 mr-2" />
            {subtitle}
          </div>
          
          <h1 className="...">
            <span className="...">
              {title}
            </span>
          </h1>
          
          <p className="...">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="...">
          <button
            onClick={onPrimaryClick}
            className="...">
            <span className="...">
              {primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </button>
          
          <button
            onClick={onSecondaryClick}
            className="...">
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            {secondaryButtonText}
          </button>
        </div>

        {/* Stats */}
        <div className="...">
          <div className="...">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="...">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="...">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FuturisticHero