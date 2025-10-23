'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, Zap, Brain, DollarSign, Shield, TrendingUp, Target } from 'lucide-react'

constAIFintechPage: React.FC= () =>{constaiFintechServices= [
    {
      title: 'AI Algorithmic Trading Platform',
      description: 'Advanced algorithmic trading system with machine learning for market prediction, risk management, and automated trading strategies.',
      icon: '📈',
      price: '$4,99 9/month',
      features: ['Market prediction models', 'Risk assessment', 'Portfolio optimization', 'High-frequency trading', 'Sentiment analysis'],
      benefits: ['Increase trading profits by 3 5%', 'Reduce risk exposure by50%', 'Automate trading decisions'],
      marketPrice: '$8,00 0-2 5,00 0/month',
      category: 'Trading',
      technologies: ['QuantLib', 'Zipline', 'Backtrader', 'TensorFlow', 'PyTorch']
   },
    {title: 'AI Fraud Detection & Prevention',
      description: 'Real-time fraud detection system using machine learning to identify suspicious transactions and prevent financial crimes.',
      icon: '🛡️',
      price: '$2,99 9/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert systems', 'False positive reduction'],
      benefits: ['Prevent 9 9.5% of fraud attempts', 'Reduce false positives by80%', 'Save millions in losses'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Security',
      technologies: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'XGBoost', 'Real-time Streaming']
   },
    {title: 'AI Credit Scoring & Risk Assessment',
      description: 'Intelligent credit scoring system with alternative data analysis and real-time risk assessment for lending decisions.',
      icon: '💳',
      price: '$1,99 9/month',
      features: ['Alternative data analysis', 'Real-time scoring', 'Risk modeling', 'Credit decision automation', 'Portfolio management'],
      benefits: ['Improve approval rates by 2 5%', 'Reduce default rates by40%', 'Expand credit access'],
      marketPrice: '$3,50 0-1 0,00 0/month',
      category: 'Lending',
      technologies: ['Machine Learning', 'Alternative Data APIs', 'Credit Bureau APIs', 'Python', 'Risk Models']
   },
    {title: 'AI Personal Finance Management',
      description: 'Intelligent personal finance platform with budgeting, investment advice, and automated financial planning.',
      icon: '💰',
      price: '$1,49 9/month',
      features: ['Smart budgeting', 'Investment recommendations', 'Goal tracking', 'Expense categorization', 'Financial planning'],
      benefits: ['Improve financial health', 'Increase savings by30%', 'Optimize investment return s'],
      marketPrice: '$2,50 0-7,00 0/month',
      category: 'Personal Finance',
      technologies: ['Open Banking APIs', 'Machine Learning', 'Mobile Apps', 'Cloud Computing', 'Data Analytics']
   },
    {title: 'AI Insurance Underwriting',
      description: 'Automated insurance underwriting with risk assessment, pricing optimization, and claims prediction using AI.',
      icon: '🏥',
      price: '$2,49 9/month',
      features: ['Risk assessment', 'Pricing optimization', 'Claims prediction', 'Automated underwriting', 'Fraud detection'],
      benefits: ['Reduce underwriting time by70%', 'Improve pricing accuracy', 'Lower claims costs'],
      marketPrice: '$4,00 0-1 2,00 0/month',
      category: 'Insurance',
      technologies: ['Machine Learning', 'Actuarial Models', 'Risk APIs', 'Data Analytics', 'Cloud Computing']
   },
    {title: 'AI Regulatory Compliance Platform',
      description: 'Automated compliance monitoring and reporting system for financial regulations with real-time risk assessment.',
      icon: '📋',
      price: '$3,49 9/month',
      features: ['Regulatory monitoring', 'Compliance reporting', 'Risk assessment', 'Audit trails', 'Alert systems'],
      benefits: ['Ensure 10 0% compliance', 'Reduce compliance costs by60%', 'Automate reporting'],
      marketPrice: '$6,00 0-1 8,00 0/month',
      category: 'Compliance',
      technologies: ['Regulatory APIs', 'NLP', 'Machine Learning', 'Blockchain', 'Cloud Security']
   },
    {title: 'AI Payment Processing & Optimization',
      description: 'Intelligent payment processing with fraud detection, optimization, and real-time transaction analysis.',
      icon: '💳',
      price: '$1,79 9/month',
      features: ['Payment optimization', 'Fraud detection', 'Transaction analysis', 'Fee optimization', 'Settlement automation'],
      benefits: ['Reduce payment costs by25%', 'Improve success rates', 'Enhance security'],
      marketPrice: '$3,00 0-9,00 0/month',
      category: 'Payments',
      technologies: ['Payment APIs', 'Machine Learning', 'Real-time Processing', 'Blockchain', 'Security Protocols']
   },
    {title: 'AI Wealth Management Platform',
      description: 'Robo-advisor platform with portfolio optimization, tax-loss harvesting, and personalized investment strategies.',
      icon: '📊',
      price: '$2,29 9/month',
      features: ['Portfolio optimization', 'Tax-loss harvesting', 'Rebalancing', 'Risk management', 'Performance tracking'],
      benefits: ['Improve return s by20%', 'Reduce fees by50%', 'Optimize tax efficiency'],
      marketPrice: '$4,00 0-1 2,00 0/month',
      category: 'Wealth Management',
      technologies: ['Portfolio Optimization', 'Tax APIs', 'Market Data APIs', 'Machine Learning', 'Cloud Computing']
   },
    {title: 'AI Cryptocurrency Trading Bot',
      description: 'Automated cryptocurrency trading with market analysis, arbitrage opportunities, and risk management.',
      icon: '₿',
      price: '$1,99 9/month',
      features: ['Market analysis', 'Arbitrage detection', 'Risk management', 'Portfolio rebalancing', 'Performance tracking'],
      benefits: ['Capture arbitrage opportunities', 'Reduce trading risks', 'Automate crypto strategies'],
      marketPrice: '$3,50 0-1 0,00 0/month',
      category: 'Cryptocurrency',
      technologies: ['Crypto APIs', 'Machine Learning', 'Blockchain', 'Real-time Data', 'Trading Algorithms']
   },
    {title: 'AI Financial Planning & Forecasting',
      description: 'Intelligent financial planning with cash flow forecasting, scenario analysis, and automated financial advice.',
      icon: '🔮',
      price: '$1,79 9/month',
      features: ['Cash flow forecasting', 'Scenario analysis', 'Financial planning', 'Goal tracking', 'Automated advice'],
      benefits: ['Improve financial planning', 'Reduce planning time by80%', 'Optimize financial decisions'],
      marketPrice: '$3,00 0-9,00 0/month',
      category: 'Financial Planning',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Financial Models', 'Data Analytics', 'Cloud Computing']
   },
    {title: 'AI Anti-Money Laundering (AML)',
      description: 'Advanced AML system with transaction monitoring, suspicious activity detection, and regulatory reporting.',
      icon: '🚨',
      price: '$2,99 9/month',
      features: ['Transaction monitoring', 'Suspicious activity detection', 'Regulatory reporting', 'Risk scoring', 'Alert management'],
      benefits: ['Detect99% of suspicious activities', 'Reduce false positives by70%', 'Ensure regulatory compliance'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'AML',
      technologies: ['Graph Analytics', 'Machine Learning', 'Regulatory APIs', 'Real-time Processing', 'Blockchain Analysis']
   },
    {title: 'AI Customer Onboarding & KYC',
      description: 'Automated customer onboarding with identity verification, do cument processing, and compliance checking.',
      icon: '👤',
      price: '$1,29 9/month',
      features: ['Identity verification', 'Document processing', 'Compliance checking', 'Risk assessment', 'Automated workflows'],
      benefits: ['Reduce onboarding time by90%', 'Improve accuracy', 'Enhance customer experience'],
      marketPrice: '$2,50 0-7,00 0/month',
      category: 'KYC',
      technologies: ['OCR', 'Facial Recognition', 'Document APIs', 'Machine Learning', 'Identity Verification APIs']
    }
  ]
  const categories = [...new Set(aiFintechServices.map(service => service.category))]
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AIFintechPage
