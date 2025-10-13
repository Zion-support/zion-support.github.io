import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function ZionAIDocumentAnalyzer() {

export default function ZionAiDocumentAnalyzerPage() {
  return (
=======
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

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
  Monitor  } from 'lucide-react';
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
    popular: false;
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
    popular: true;
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
    popular: false;
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
];  return (
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Document Analyzer - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Document Analyzer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Document Analyzer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai document analyzer solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}