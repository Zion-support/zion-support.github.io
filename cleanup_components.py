#!/usr/bin/env python3
import os
import glob

def delete_problematic_components():
    """Delete components with too many syntax errors."""
    problematic_components = [
        'app/components/OptimizedLoadingSpinner.tsx',
        'app/components/PWAInstaller.tsx',
        'app/components/PerformanceEnhancer.tsx',
        'app/components/SEOEnhancer.tsx',
        'app/components/SecurityEnhancer.tsx',
        'app/components/ServiceWorkerRegistration.tsx',
        'app/components/ServiceWorker.tsx',
        'app/components/SystemMonitor.tsx',
        'app/components/UserExperienceEnhancer.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/components/PerformanceMonitor.tsx',
        'app/components/Sidebar.tsx'
    ]
    
    for component in problematic_components:
        try:
            if os.path.exists(component):
                os.remove(component)
                print(f"Deleted {component}")
        except Exception as e:
            print(f"Error deleting {component}: {e}")

def create_essential_components():
    """Create essential working components."""
    
    # Create a simple OptimizedLoading component
    optimized_loading_content = '''import React from 'react'

interface OptimizedLoadingProps {
  fullScreen?: boolean
  text?: string
}

export default function OptimizedLoading({ 
  fullScreen = false, 
  text = 'Loading...' 
}: OptimizedLoadingProps) {
  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center bg-gray-900'
    : 'flex items-center justify-center p-4'

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  )
}
'''
    
    # Create a simple FuturisticHero component
    futuristic_hero_content = '''import React from 'react'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

interface FuturisticHeroProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function FuturisticHero({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: FuturisticHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryButtonLink}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          {secondaryButtonText && secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
'''
    
    # Create a simple FuturisticServiceCard component
    futuristic_service_card_content = '''import React from 'react'
import { ArrowRight } from 'lucide-react'

interface FuturisticServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  pricing: string
  link: string
}

export default function FuturisticServiceCard({
  icon,
  title,
  description,
  features,
  pricing,
  link
}: FuturisticServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-green-400">{pricing}</span>
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center group-hover:translate-x-1"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  )
}
'''
    
    # Write components
    components = [
        ('app/components/OptimizedLoading.tsx', optimized_loading_content),
        ('app/components/FuturisticHero.tsx', futuristic_hero_content),
        ('app/components/FuturisticServiceCard.tsx', futuristic_service_card_content)
    ]
    
    for file_path, content in components:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Created {file_path}")
        except Exception as e:
            print(f"Error creating {file_path}: {e}")

def main():
    print("Cleaning up problematic components...")
    delete_problematic_components()
    
    print("\nCreating essential components...")
    create_essential_components()
    
    print("\nCleanup complete!")

if __name__ == "__main__":
    main()