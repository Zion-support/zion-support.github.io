import React from 'react'
import { FileText, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AIDocumentProcessingPage: React.FC = () => {
  const features = [
    'OCR text extraction',
    'Document classification',
    'Data extraction and validation',
    'Multi-format support (PDF, Word, Excel)',
    'Automated data entry',
    'Document routing and workflow',
    'Quality assurance checks',
    'Integration with existing systems'
  ]

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Process documents 10x faster than manual data entry',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 99%+ accuracy in data extraction and processing',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce document processing costs by up to 70%',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalability',
      description: 'Process thousands of documents simultaneously',
      icon: <Users className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract data from invoices and process payments',
      icon: '🧾'
    },
    {
      title: 'Contract Analysis',
      description: 'Analyze contracts and extract key terms and clauses',
      icon: '📄'
    },
    {
      title: 'Form Processing',
      description: 'Process application forms and extract structured data',
      icon: '📝'
    },
    {
      title: 'Receipt Management',
      description: 'Extract data from receipts for expense management',
      icon: '🧾'
    },
    {
      title: 'Document Classification',
      description: 'Automatically categorize and organize documents',
      icon: '📁'
    },
    {
      title: 'Data Migration',
      description: 'Convert paper documents to digital format with high accuracy',
      icon: '💾'
    }
  ]

  const stats = [
    { number: '1M+', label: 'Documents Processed' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Processing' }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Finance Director',
      content: 'Invoice processing that used to take days now takes minutes. The accuracy is incredible.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Operations Manager',
      content: 'Document classification has streamlined our workflow. Everything is organized automatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Legal Counsel',
      content: 'Contract analysis is now automated and incredibly accurate. Saves us hours of manual work.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Document Processing"
      description="Automate document processing with AI-powered OCR and data extraction. Process invoices, contracts, forms, and other documents with high accuracy and speed."
      icon={<FileText className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $99/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Document Management"
      popular={false}
    />
  )
}

export default AIDocumentProcessingPage