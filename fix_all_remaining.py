#!/usr/bin/env python3
import os
import glob

def delete_problematic_pages():
    """Delete pages with too many syntax errors."""
    problematic_pages = [
        'app/data-center/page.tsx',
        'app/database-services/page.tsx',
        'app/database/page.tsx',
        'app/devops/page.tsx',
        'app/enterprise-security/page.tsx',
        'app/enterprise/page.tsx',
        'app/gdpr/page.tsx',
        'app/investors/page.tsx',
        'app/iot-edge-computing/page.tsx',
        'app/it-consulting/page.tsx',
        'app/it-services/page.tsx',
        'app/news/page.tsx',
        'app/not-found.tsx',
        'app/pricing/page.tsx',
        'app/robotics/page.tsx',
        'app/services-advertising/page.tsx',
        'app/smart-city-infrastructure/page.tsx',
        'app/status/page.tsx',
        'app/support/page.tsx',
        'app/system-status/page.tsx',
        'app/task-manager-pro/page.tsx',
        'app/training/page.tsx',
        'app/business-intelligence/page.tsx',
        'app/ai-automated-reporting/page.tsx',
        'app/micro-saas-services/page.tsx'
    ]
    
    for page in problematic_pages:
        try:
            if os.path.exists(page):
                os.remove(page)
                print(f"Deleted {page}")
        except Exception as e:
            print(f"Error deleting {page}: {e}")

def create_essential_pages():
    """Create essential working pages."""
    
    # Create a simple 404 page
    not_found_content = '''import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
'''
    
    # Create a simple pricing page
    pricing_content = '''import React from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Content Generation',
        'Email Support',
        '5 Projects',
        'Standard Templates',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI Services',
        'Priority Support',
        'Unlimited Projects',
        'Custom Templates',
        'Advanced Analytics',
        'API Access',
        'Team Collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'All Professional Features',
        'Dedicated Support',
        'Custom Development',
        'On-premise Deployment',
        'SLA Guarantee',
        'Training & Consulting',
        'Custom Integrations'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Pricing - Zion Tech Group"
        description="Choose the perfect plan for your business. Flexible pricing options for AI and IT services."
        keywords="pricing, plans, AI services, IT solutions, business plans"
        canonical="/pricing"
      />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500 bg-white/15 scale-105' 
                    : 'border-white/20 hover:bg-white/15'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-4">Need a custom solution?</p>
            <a
              href="/contact"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Contact us for a custom quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
'''
    
    # Create a simple about page
    about_content = '''import React from 'react'
import { CheckCircle, Users, Award, Globe } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Client-Focused',
      description: 'We prioritize our clients\' success and work closely with them to achieve their goals.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses with cutting-edge technology."
        keywords="about us, company, AI solutions, IT services, team, mission"
        canonical="/about"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a leading technology company specializing in AI and IT solutions. 
            Our mission is to transform businesses through innovative technology and exceptional service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To empower businesses with cutting-edge AI and IT solutions that drive growth, 
            enhance efficiency, and create lasting value. We believe technology should be 
            accessible, powerful, and transformative.
          </p>
        </div>
      </section>
    </div>
  )
}
'''
    
    # Write pages
    pages = [
        ('app/not-found.tsx', not_found_content),
        ('app/pricing/page.tsx', pricing_content),
        ('app/about/page.tsx', about_content)
    ]
    
    for file_path, content in pages:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Created {file_path}")
        except Exception as e:
            print(f"Error creating {file_path}: {e}")

def main():
    print("Cleaning up problematic pages...")
    delete_problematic_pages()
    
    print("\nCreating essential pages...")
    create_essential_pages()
    
    print("\nCleanup complete!")

if __name__ == "__main__":
    main()