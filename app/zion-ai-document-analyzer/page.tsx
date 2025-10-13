import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Brain, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  DollarSign, 
  Globe, 
  Smartphone,
  Monitor
} from 'lucide-react';

const features = [
  {
    title: "AI-Powered Document Processing",
    description: "Advanced OCR and NLP technology to extract, analyze, and understand content from any document format",
    icon: <Brain className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Intelligent Data Extraction",
    description: "Automatically extract structured data from unstructured documents with 99% accuracy",
    icon: <FileText className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with end-to-end encryption and compliance with industry standards",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Real-time Processing",
    description: "Process documents in real-time with lightning-fast AI algorithms and cloud infrastructure",
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    features: [
      "Up to 1,000 documents/month",
      "Basic AI analysis",
      "Email support",
      "Standard templates"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    features: [
      "Up to 10,000 documents/month",
      "Advanced AI analysis",
      "Priority support",
      "Custom templates",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "month",
    features: [
      "Unlimited documents",
      "Full AI capabilities",
      "24/7 support",
      "White-label options",
      "Custom integrations"
    ],
    popular: false
  }
];

const useCases = [
  {
    industry: "Legal",
    description: "Contract analysis, legal document review, and compliance checking",
    icon: <FileText className="w-6 h-6" />
  },
  {
    industry: "Finance",
    description: "Invoice processing, financial report analysis, and audit documentation",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    industry: "Healthcare",
    description: "Medical record analysis, insurance claim processing, and patient documentation",
    icon: <Users className="w-6 h-6" />
  },
  {
    industry: "Education",
    description: "Research paper analysis, student document processing, and academic assessment",
    icon: <Award className="w-6 h-6" />
  }
];

export default function ZionAIDocumentAnalyzer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion AI Document Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered document analysis and processing platform with OCR, NLP, and intelligent data extraction capabilities." />
        <meta name="keywords" content="AI document analysis, OCR, NLP, document processing, data extraction, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-document-analyzer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Document Analysis</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Document Analyzer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform any document into actionable insights with our advanced AI-powered document analysis platform. 
            Extract, analyze, and understand content with unprecedented accuracy and speed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105">
              Watch Demo
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Document Analysis Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI document analyzer combines cutting-edge OCR, NLP, and machine learning technologies 
              to deliver unprecedented document processing capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI document analyzer transforms document processing across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.industry}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Document Processing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using our AI document analyzer to streamline their document workflows. 
            Start your document transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              Start Analysis Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105">
              Schedule Demo
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}</section>