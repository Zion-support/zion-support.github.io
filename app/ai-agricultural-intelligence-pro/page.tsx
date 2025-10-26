import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Leaf, Zap, Eye, BarChart, Globe, Shield } from 'lucide-react'
export const metadata = {
  title: 'Ai Agricultural Intelligence Pro - Zion Tech Group',
  description: 'Professional ai agricultural intelligence pro services and solutions by Zion Tech Group.'
};


const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'Advanced AI-powered crop monitoring and health assessment using satellite imagery and IoT sensors.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction']
    },
    {
      icon: Zap,
      title: 'Precision Agriculture',
      description: 'Optimize farming operations with AI-driven precision agriculture techniques.',
      benefits: ['Smart irrigation', 'Fertilizer optimization', 'Resource efficiency']
    },
    {
      icon: Eye,
      title: 'Predictive Analytics',
      description: 'Predict crop yields, weather patterns, and market conditions using machine learning.',
      benefits: ['Yield forecasting', 'Weather prediction', 'Market analysis']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analytics for informed agricultural decision making.',
      benefits: ['Performance metrics', 'Trend analysis', 'ROI optimization']
    },
    {
      icon: Globe,
      title: 'Climate Adaptation',
      description: 'Adapt farming practices to changing climate conditions with AI recommendations.',
      benefits: ['Climate modeling', 'Adaptation strategies', 'Sustainability focus']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate agricultural risks with AI-powered risk assessment tools.',
      benefits: ['Risk prediction', 'Insurance optimization', 'Loss prevention']
    }
  ]

  const pricing = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small farms',
      features: ['Basic crop monitoring', 'Weather alerts', 'Simple analytics', 'Email support'],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for medium farms',
      features: ['Advanced analytics', 'Precision agriculture', 'Predictive modeling', 'Priority support', 'API access'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large agricultural operations',
      features: ['Custom integrations', 'Dedicated support', 'White-label solution', 'SLA guarantee', 'Training'],
      cta: 'Contact Sales'
    }
  ]

  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Agricultural Intelligence Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default AIAgriculturalIntelligenceProPage
