import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Database, 
  Network, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Truck,
  Package,
  ShoppingCart,
  MapPin,
  Camera,
  Mic,
  Search,
  Settings,
  Layers,
  Wifi,
  Monitor,
  Bot,
  FileText,
  Users,
  Brain,
  MessageSquare,
  Eye,
  TrendingUp,
  BarChart3,
  Calculator,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  Code
} from 'lucide-react';


export default function BlockchainEnterpriseSolutionsPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Custom smart contract development for automated business processes and secure transactions.",
      benefits: [
        "Automated contract execution",
        "Reduced transaction costs",
        "Elimination of intermediaries",
        "Transparent and auditable processes"
      ]
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Supply Chain Transparency",
      description: "End-to-end supply chain tracking with immutable records and real-time visibility.",
      benefits: [
        "Complete product traceability",
        "Counterfeit prevention",
        "Quality assurance tracking",
        "Regulatory compliance automation"
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "DeFi Solutions",
      description: "Decentralized finance applications including lending, trading, and yield farming platforms.",
      benefits: [
        "Automated lending protocols",
        "Decentralized exchange development",
        "Yield optimization strategies",
        "Cross-chain interoperability"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integrity & Security",
      description: "Immutable data storage and verification systems for critical business information.",
      benefits: [
        "Tamper-proof data storage",
        "Automated data verification",
        "Audit trail maintenance",
        "Compliance documentation"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Chain Integration",
      description: "Seamless integration between different blockchain networks and traditional systems.",
      benefits: [
        "Multi-blockchain support",
        "Legacy system integration",
        "Interoperability solutions",
        "Scalable architecture"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced security features including private keys management and access control.",
      benefits: [
        "Enterprise-grade security",
        "Private key management",
        "Role-based access control",
        "Compliance with regulations"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/project",
      description: "Perfect for small businesses exploring blockchain",
      features: [
        "Basic smart contract development",
        "Single blockchain integration",
        "Standard security features",
        "Email support",
        "Documentation and training",
        "3-month maintenance included"
      ],
      cta: "Get Quote",
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/project",
      description: "Advanced blockchain solutions for growing businesses",
      features: [
        "Custom smart contract development",
        "Multi-blockchain integration",
        "Advanced security features",
        "Priority support",
        "Custom integrations",
        "6-month maintenance included",
        "Performance optimization",
        "API development"
      ],
      cta: "Get Quote",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale blockchain solutions for large enterprises",
      features: [
        "Complete blockchain platform development",
        "Custom blockchain network setup",
        "Advanced security and compliance",
        "Dedicated project manager",
        "Custom integrations",
        "12-month maintenance included",
        "SLA guarantees",
        "White-label solutions"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Supply Chain",
      challenge: "Ensuring product authenticity and tracking across complex supply chains",
      solution: "Blockchain-based tracking system provides immutable records of product journey from origin to consumer",
      results: "99.9% counterfeit detection, 60% reduction in supply chain disputes"
    },
    {
      industry: "Financial Services",
      challenge: "Reducing transaction costs and processing times for cross-border payments",
      solution: "Smart contracts automate payment processing and reduce intermediary costs",
      results: "80% reduction in transaction costs, 90% faster settlement times"
    },
    {
      industry: "Healthcare",
      challenge: "Securing patient data and ensuring medical record integrity",
      solution: "Blockchain-based medical records system ensures data integrity and patient privacy",
      results: "100% data integrity, 50% reduction in data breaches"
    },
    {
      industry: "Real Estate",
      challenge: "Streamlining property transactions and reducing fraud",
      solution: "Smart contracts automate property transfers and title management",
      results: "70% reduction in transaction time, 95% reduction in fraud cases"
    }
  ];

  const blockchainStats = [
    { metric: "Transaction Speed", value: "10,000+", description: "Transactions per second processing capacity" },
    { metric: "Security Level", value: "99.99%", description: "Immutable transaction security" },
    { metric: "Cost Reduction", value: "80%", description: "Average reduction in transaction costs" },
    { metric: "Processing Time", value: "90%", description: "Faster than traditional systems" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blockchain Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with enterprise-grade blockchain solutions. Smart contracts, 
              DeFi applications, and secure transaction processing for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="#demo" 
                className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Performance</h2>
            <p className="text-xl text-gray-600">Proven capabilities at enterprise scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end blockchain development and integration services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the blockchain solution that fits your business needs. All projects include consultation and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all ${
                tier.popular ? 'border-orange-500 relative' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how blockchain is transforming industries across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {useCase.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600 mb-4">{useCase.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600 mb-4">{useCase.solution}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
                  <p className="text-green-700 font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Blockchain?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies leveraging blockchain for competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}