import React from 'react'
import { FlaskConical, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    'Molecular design and optimization',
    'Drug-target interaction prediction',
    'Toxicity and safety assessment',
    'Clinical trial optimization',
    'Biomarker discovery',
    'Drug repurposing analysis',
    'Pharmacokinetic modeling',
    'Regulatory compliance support'
  ]

  const benefits = [
    {
      title: 'Faster Discovery',
      description: 'Accelerate drug discovery by up to 50% with AI analysis',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce drug development costs by up to 60%',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Higher Success Rate',
      description: 'Improve drug approval success rates with better predictions',
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Safety Assurance',
      description: 'Ensure drug safety with AI-powered toxicity prediction',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'New Drug Development',
      description: 'Discover and develop new therapeutic compounds',
      icon: '💊'
    },
    {
      title: 'Drug Repurposing',
      description: 'Find new uses for existing drugs',
      icon: '🔄'
    },
    {
      title: 'Target Identification',
      description: 'Identify new drug targets for various diseases',
      icon: '🎯'
    },
    {
      title: 'Clinical Trials',
      description: 'Optimize clinical trial design and patient selection',
      icon: '🏥'
    },
    {
      title: 'Biomarker Discovery',
      description: 'Discover biomarkers for disease diagnosis and treatment',
      icon: '🔬'
    },
    {
      title: 'Safety Assessment',
      description: 'Assess drug safety and potential side effects',
      icon: '⚠️'
    }
  ]

  const stats = [
    { number: '50%', label: 'Faster Discovery' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '40%', label: 'Success Rate Improvement' },
    { number: '24/7', label: 'Analysis' }
  ]

  const testimonials = [
    {
      name: 'Dr. Jennifer Walsh',
      company: 'Research Director',
      content: 'Drug discovery has accelerated dramatically. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Dr. Michael Torres',
      company: 'Clinical Research Manager',
      content: 'Clinical trial optimization has improved success rates by 40%.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Lee',
      company: 'Pharmaceutical CEO',
      content: 'Development costs have decreased significantly. The AI insights are invaluable.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Drug Discovery Pro"
      description="Revolutionize pharmaceutical research with AI-powered drug discovery. Accelerate molecular design, predict drug interactions, and optimize clinical trials with advanced AI technology."
      icon={<FlaskConical className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $2,999/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Pharmaceutical Research"
      popular={false}
    />
  )
}

export default AIDrugDiscoveryProPage