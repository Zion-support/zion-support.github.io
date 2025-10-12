import React from 'react'
import { FileText, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIDocumentIntelligencePage: React.FC = () => {
  const features = [
    'Intelligent document analysis',
    'Content extraction and understanding',
    'Document classification and tagging',
    'Automated data validation',
    'Multi-format support',
    'Natural language processing',
    'Document search and retrieval',
    'Compliance monitoring'
  ]

  const benefits = [
    {
      title: 'Intelligent Processing',
      description: 'Understand document content and context with AI intelligence',
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Time Efficiency',
      description: 'Process documents 10x faster with intelligent automation',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 99%+ accuracy in document analysis and extraction',
      icon: <Target className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce document processing costs by up to 80%',
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Contract Analysis',
      description: 'Analyze contracts and extract key terms and clauses',
      icon: '📄'
    },
    {
      title: 'Invoice Processing',
      description: 'Intelligently process invoices and extract payment data',
      icon: '🧾'
    },
    {
      title: 'Legal Document Review',
      description: 'Review legal documents for compliance and risk assessment',
      icon: '⚖️'
    },
    {
      title: 'Research Papers',
      description: 'Analyze research papers and extract key insights',
      icon: '📚'
    },
    {
      title: 'Financial Reports',
      description: 'Process financial reports and extract key metrics',
      icon: '💰'
    },
    {
      title: 'Medical Records',
      description: 'Analyze medical records and extract patient information',
      icon: '🏥'
    }
  ]

  const stats = [
    { number: '1M+', label: 'Documents Analyzed' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '80%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Legal Counsel',
      content: 'Contract analysis is now automated and incredibly accurate. Saves us hours of manual work.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Finance Director',
      content: 'Invoice processing that used to take days now takes minutes. The accuracy is incredible.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Research Director',
      content: 'Document intelligence has transformed our research process. Insights are extracted automatically.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Document Intelligence"
      description="Transform document processing with AI-powered intelligence. Analyze, understand, and extract insights from documents with advanced natural language processing and machine learning."
      icon={<FileText className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $199/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Document Intelligence"
      popular={false}
    />
  )
}

export default AIDocumentIntelligencePage