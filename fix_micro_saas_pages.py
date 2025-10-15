#!/usr/bin/env python3
import os
import re

def fix_micro_saas_page(file_path):
    """Fix common JSX issues in micro-saas pages"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is a micro-saas page with the problematic pattern
        if 'micro-saas' in file_path and 'page.tsx' in file_path:
            # Extract service name from path
            service_name = file_path.split('/')[-2]
            title = service_name.replace('-', ' ').title()
            
            # Create a proper React component
            fixed_content = f'''import React from 'react'
import {{ Helmet }} from 'react-helmet-async'
import {{ Settings, ArrowRight, CheckCircle, Zap, Shield, Globe, BarChart3 }} from 'lucide-react'

const {title.replace(' ', '')}Page: React.FC = () => {{
  const serviceName = '{service_name}'
  const title = '{title}'

  const features = [
    {{
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Core Feature 1',
      description: 'Essential functionality for your business needs'
    }},
    {{
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Core Feature 2', 
      description: 'Reliable and secure solution for your operations'
    }},
    {{
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Core Feature 3',
      description: 'Global reach and scalability for your business'
    }},
    {{
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Core Feature 4',
      description: 'Analytics and insights to drive growth'
    }}
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{{title}} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta name="description" content={{`Powerful ${{title.toLowerCase()}} micro SaaS solution for modern businesses.`}} />
        <link rel="canonical" href={{`https://ziontechgroup.com/micro-saas/${{serviceName}}`}} />
      </Helmet>
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            <span>{{title}}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {{title}} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Solution</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful {{title.toLowerCase()}} micro SaaS solution designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed with {{title.toLowerCase()}}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {{features.map((feature, index) => (
              <div key={{index}} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{{feature.icon}}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{{feature.title}}</h3>
                <p className="text-gray-300">{{feature.description}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our {{title.toLowerCase()}} solution today and transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}}

export default {title.replace(' ', '')}Page'''
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            print(f"Fixed micro-saas page: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all micro-saas page files
    micro_saas_dir = './app/micro-saas'
    if os.path.exists(micro_saas_dir):
        for root, dirs, files in os.walk(micro_saas_dir):
            for file in files:
                if file == 'page.tsx':
                    file_path = os.path.join(root, file)
                    fix_micro_saas_page(file_path)

if __name__ == '__main__':
    main()