import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Search, 
  BarChart3, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Share2, 
  Settings, 
  Zap,
  Brain,
  ArrowRight,
  Star,
  Award,
  Shield,
  Globe,
  CheckCircle,
  File,
  Database,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

const ZionAIDocumentAnalyzerPage = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Multi-Format Support",
      description: "Analyze PDFs, Word docs, Excel files, PowerPoint presentations, and more"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Search",
      description: "Find specific information across thousands of documents with AI-powered search"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Extraction",
      description: "Automatically extract key data points, tables, and structured information"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Content Analysis",
      description: "AI-powered sentiment analysis, topic modeling, and content categorization"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Detection",
      description: "Identify patterns and trends across your document collection over time"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share insights and collaborate on document analysis with your team"
    }
  ];

  const useCases = [
    {
      title: "Legal Document Review",
      description: "Analyze contracts, legal briefs, and case files for key information and compliance",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Research & Development",
      description: "Process scientific papers, patents, and technical documentation for insights",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Financial Analysis",
      description: "Extract financial data from reports, statements, and regulatory filings",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Content Management",
      description: "Organize and categorize large document libraries for easy retrieval",
      icon: <Database className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 documents",
        "Basic AI analysis",
        "PDF & Word support",
        "Standard search",
        "Email support",
        "5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 documents",
        "Advanced AI analysis",
        "All file formats",
        "Advanced search & filters",
        "Priority support",
        "25 team members",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "Advanced analytics",
        "White-label solution",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Document Analyzer - Intelligent Document Processing & Analysis</title>
        <meta name="description" content="Transform your document workflow with Zion AI Document Analyzer. Extract insights, analyze content, and find information across thousands of documents with advanced AI technology." />
        <meta name="keywords" content="document analysis, AI document processing, document search, data extraction, content analysis, document management, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-document-analyzer" />
      </Helmet>

      <EnhancedSEO 
        title="Zion AI Document Analyzer - Intelligent Document Processing & Analysis"
        description="Transform your document workflow with Zion AI Document Analyzer. Extract insights, analyze content, and find information across thousands of documents with advanced AI technology."
        keywords="document analysis, AI document processing, document search, data extraction, content analysis, document management, business intelligence"
        canonical="https://ziontechgroup.com/zion-ai-document-analyzer"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="Zion AI Document Analyzer"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your document workflow with AI-powered analysis, 
              intelligent search, and automated data extraction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Document Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to analyze, understand, and extract value from your documents
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different teams use Zion AI Document Analyzer to solve their challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Upload Documents</h3>
              <p className="text-gray-300">
                Upload your documents in any format - PDF, Word, Excel, PowerPoint, and more
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Analysis</h3>
              <p className="text-gray-300">
                Our AI processes and analyzes your documents, extracting key insights and data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Get Insights</h3>
              <p className="text-gray-300">
                Access powerful analytics, search across documents, and export insights
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your document processing needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton 
                  className="w-full py-3"
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  Start Free Trial
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Document Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Zion AI Document Analyzer 
              to extract insights from their documents and make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
              >
                Email kleber@ziontechgroup.com
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAIDocumentAnalyzerPage;