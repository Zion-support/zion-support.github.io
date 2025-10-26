import React from 'react'
import { Calculator, BarChart, FileText, Shield, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export const metadata = {
  title: 'AI Accounting Assistant - Zion Tech Group',
  description: 'Professional AI accounting assistant services and solutions by Zion Tech Group.'
};


const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    { 
      icon: Calculator, 
      title: 'Automated Bookkeeping', 
      description: 'AI-powered automated bookkeeping and transaction categorization.' 
    },
    {
      icon: BarChart, 
      title: 'Financial Analytics', 
      description: 'Advanced financial reporting and analytics with AI insights.' 
    },
    {
      icon: FileText, 
      title: 'Tax Preparation', 
      description: 'Automated tax preparation and compliance management.' 
    },
    {
      icon: Shield, 
      title: 'Audit Trail', 
      description: 'Complete audit trail and compliance tracking for financial records.' 
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Basic bookkeeping', 'Transaction categorization', 'Simple reporting', 'Email support'],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced analytics', 'Tax preparation', 'Multi-currency support', 'Priority support', 'API access'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Custom integrations', 'Dedicated support', 'White-label solution', 'SLA guarantee', 'Training'],
      cta: 'Contact Sales'
    }
  ]

  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Accounting Assistant
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

export default AIAccountingAssistantPage
