export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page services by Zion Tech Group',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page services by Zion Tech Group',
    type: 'website',
  },
};
import React from 'react'


import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'


import Navigation from '../components/Navigation'



import Footer from '../components/Footer'



import { CheckCircle, ArrowRight } from 'lucide-react'


;
const LegalDocumentManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Document Analysis",
      description: "Automatically analyze and categorize legal documents using advanced AI algorithms.",
      benefits: ["Intelligent categorization", "Risk assessment", "Compliance checking"]
    },
    {
      icon: BarChart,
      title: "Document Analytics",
      description: "Gain insights from your document collection with powerful analytics tools.",
      benefits: ["Usage patterns", "Performance metrics", "Trend analysis"]
    },
    {
      icon: Target,
      title: "Smart Search",
      description: "Find relevant documents instantly with AI-powered search capabilities.",
      benefits: ["Semantic search", "Context awareness", "Relevance ranking"]
    },
    {
      icon: TrendingUp,
      title: "Workflow Automation",
      description: "Automate routine legal processes to improve efficiency and reduce errors.",
      benefits: ["Process automation", "Task scheduling", "Progress tracking"]
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
            {/* SEO handled by layout.tsx */}
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Legal Document Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline legal document management with AI-powered tools. Organize, search, and analyze legal documents efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" aria-label="Action Button">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" aria-label="Action Button">
                Learn More
              </button>
            </div>
          </div>
        </section>

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
};

export default LegalDocumentManagerPage;