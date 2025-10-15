import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Brain, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Users,
  BarChart3,
  Code,
  Cloud,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink
} from 'lucide-react';

const AiDocumentProcessorProPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "OCR & Text Extraction",
      description: "Advanced optical character recognition that accurately extracts text from scanned documents, images, and PDFs.",
      benefits: ["99% accuracy OCR", "Multi-language support", "Handwriting recognition", "Batch processing"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Intelligent document analysis that understands context, extracts key information, and categorizes content automatically.",
      benefits: ["Smart categorization", "Key information extraction", "Context understanding", "Data validation"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Advanced Search & Retrieval",
      description: "Powerful search capabilities that find documents instantly using natural language queries and semantic search.",
      benefits: ["Natural language search", "Semantic matching", "Full-text search", "Filtered results"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with encryption, access controls, and compliance features for sensitive documents.",
      benefits: ["End-to-end encryption", "Role-based access", "Audit trails", "GDPR compliance"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration Tools",
      description: "Real-time collaboration features that allow teams to work together on documents with version control and comments.",
      benefits: ["Real-time editing", "Version control", "Comment system", "Team workflows"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics on document usage, processing efficiency, and team productivity metrics.",
      benefits: ["Usage analytics", "Processing metrics", "Productivity insights", "Performance reports"]
    }
  ];

  const useCases = [
    {
      title: "Legal Firms",
      description: "Process contracts, case files, and legal documents with AI-powered analysis and automated categorization.",
      icon: <Shield className="w-6 h-6" />,
      results: ["90% faster document processing", "95% reduction in manual errors", "80% time savings on research"]
    },
    {
      title: "Accounting Firms",
      description: "Automate invoice processing, expense reports, and financial document management with intelligent data extraction.",
      icon: <DollarSign className="w-6 h-6" />,
      results: ["85% faster invoice processing", "99% accuracy in data extraction", "70% reduction in manual work"]
    },
    {
      title: "Insurance Companies",
      description: "Process claims, policies, and medical records with AI-powered document analysis and automated workflows.",
      icon: <Heart className="w-6 h-6" />,
      results: ["75% faster claims processing", "90% reduction in processing time", "95% accuracy in data extraction"]
    },
    {
      title: "Healthcare Providers",
      description: "Manage patient records, medical reports, and administrative documents with secure, compliant processing.",
      icon: <Users className="w-6 h-6" />,
      results: ["60% faster record processing", "100% HIPAA compliance", "50% reduction in administrative time"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$89",
      period: "/month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 1,000 documents/month",
        "Basic OCR & extraction",
        "Standard search",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI analysis",
        "Advanced search & filters",
        "Priority support",
        "API access",
        "Custom workflows",
        "Team collaboration",
        "Advanced analytics"
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
        "AI-powered insights",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Processing", description: "Automate document workflows" },
    { number: "99%", label: "Accuracy Rate", description: "AI-powered data extraction" },
    { number: "90%", label: "Time Savings", description: "Reduce manual document work" },
    { number: "24/7", label: "Automated Processing", description: "Never stop processing documents" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Document Processor Pro - Zion Tech Group | Intelligent Document Management</title>
        <meta name="description" content="Transform your document processing with AI-powered OCR, analysis, and automation. Process documents 10x faster with 99% accuracy." />
        <meta name="keywords" content="AI document processing, OCR, document management, text extraction, document automation, document analysis" />
        <meta property="og:title" content="AI Document Processor Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent document processing powered by AI. Process documents 10x faster with 99% accuracy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-document-processor-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Most Advanced Document Processing
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Document
                </span>
                <br />
                <span className="text-white">Processor Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your document processing with AI-powered OCR, analysis, and automation. 
                Process documents 10x faster with 99% accuracy and intelligent categorization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powerful Features
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Everything You Need
                </span>
                <br />
                <span className="text-white">to Process Documents</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-powered document processor combines advanced OCR, intelligent analysis, and automation 
                to transform how you handle documents and extract valuable information.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Document Processor Pro works across industries, helping organizations 
                streamline their document workflows and extract valuable insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">Typical Results:</h4>
                        {useCase.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <FileText className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your document processing needs. 
                Start with a free trial and upgrade when you're ready.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-purple-400/40 hover:border-purple-400/60 shadow-2xl shadow-purple-500/10 scale-105' 
                      : 'border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Document Processing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of organizations already using AI Document Processor Pro to streamline their workflows. 
                Start your free trial today and experience the future of document management.
              </p>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
                    <p className="text-gray-300 text-lg mb-2">+1 302 464 0950</p>
                    <p className="text-gray-400 text-sm">24/7 Support Available</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
                    <p className="text-gray-300 text-lg mb-2">kleber@ziontechgroup.com</p>
                    <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Visit Us</h3>
                    <p className="text-gray-300 text-lg mb-2">364 E Main St STE 1008</p>
                    <p className="text-gray-400 text-sm">Middletown DE 19709</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial Today</h3>
                    <p className="text-gray-300 mb-6">
                      No credit card required. Get full access to all features for 14 days. 
                      See why thousands of organizations trust us with their document processing needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+13024640950"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiDocumentProcessorProPage;