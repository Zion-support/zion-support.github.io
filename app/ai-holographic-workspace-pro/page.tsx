import React from 'react';
import { 
  Eye, 
  Zap, 
  Brain, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Star, 
  Play, 
  Phone, 
  Mail, 
  Rocket, 
  Shield, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  Lock, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  Target, 
  Cpu, 
  Atom, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  FileText, 
  Settings, 
  Download, 
  Upload, 
  Share2, 
  Heart, 
  ThumbsUp, 
  ChevronRight, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  Check, 
  X, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  Search, 
  Filter, 
  Sort, 
  Grid, 
  List, 
  Maximize, 
  Minimize, 
  RefreshCw, 
  Save, 
  Edit, 
  Trash2, 
  Copy, 
  Move, 
  Archive, 
  Tag, 
  Flag, 
  Bookmark, 
  Share, 
  Send, 
  Plus, 
  Minus, 
  Menu, 
  MoreHorizontal, 
  MoreVertical, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  Home, 
  User, 
  Building, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Trophy, 
  Medal, 
  Crown, 
  Gem, 
  Diamond, 
  Flash, 
  Thunder, 
  Lightning, 
  Fire, 
  Flame, 
  Sun, 
  Moon, 
  Planet, 
  Galaxy, 
  Universe, 
  Infinity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';

const HolographicWorkspaceProPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion Holographic Workspace Pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, AR/VR, Mobile",
    "description": "Revolutionary holographic workspace that transforms your physical environment into an immersive 3D digital workspace using advanced AR/VR technology.",
    "url": "https://ziontechgroup.com/ai-holographic-workspace-pro",
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "89"
    }
  };

  const features = [
    {
      title: "3D Holographic Displays",
      description: "Transform any surface into a high-resolution 3D holographic display with spatial tracking and gesture control",
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      benefits: ["360° immersive workspace", "Gesture-based interaction", "Multi-user collaboration"]
    },
    {
      title: "Spatial Computing",
      description: "Advanced spatial computing that understands your physical environment and adapts the digital workspace accordingly",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      benefits: ["Context-aware interfaces", "Room-scale tracking", "Intelligent object recognition"]
    },
    {
      title: "Holographic Collaboration",
      description: "Real-time holographic meetings where participants appear as life-sized 3D avatars in your physical space",
      icon: <Users className="w-8 h-8 text-green-400" />,
      benefits: ["Life-sized avatars", "Spatial audio", "Shared 3D objects"]
    },
    {
      title: "AI-Powered Workspace",
      description: "Intelligent workspace that learns your habits and automatically organizes your digital environment",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: ["Predictive organization", "Smart notifications", "Adaptive layouts"]
    }
  ];

  const pricingPlans = [
    {
      name: "Holographic Starter",
      price: "$499",
      period: "per month",
      description: "Perfect for individuals exploring holographic workspaces",
      features: [
        "Basic 3D holographic display",
        "Up to 2 simultaneous users",
        "Standard spatial tracking",
        "Email support",
        "10GB holographic storage"
      ],
      popular: false,
      cta: "Start Holographic Journey"
    },
    {
      name: "Holographic Professional",
      price: "$1,299",
      period: "per month",
      description: "Advanced holographic capabilities for teams and businesses",
      features: [
        "Advanced 3D holographic display",
        "Up to 10 simultaneous users",
        "Premium spatial tracking",
        "Priority support",
        "100GB holographic storage",
        "Holographic API access",
        "Custom 3D environments"
      ],
      popular: true,
      cta: "Go Holographic Pro"
    },
    {
      name: "Holographic Enterprise",
      price: "$2,999",
      period: "per month",
      description: "Full holographic power for large organizations",
      features: [
        "Unlimited holographic displays",
        "Unlimited simultaneous users",
        "Enterprise spatial tracking",
        "24/7 dedicated support",
        "Unlimited holographic storage",
        "Full holographic API access",
        "Custom hardware integration",
        "Holographic consulting included"
      ],
      popular: false,
      cta: "Scale to Holographic"
    }
  ];

  const useCases = [
    {
      title: "Architectural Design",
      description: "Visualize and manipulate 3D building designs in real-time within your physical space",
      icon: <Building className="w-6 h-6" />,
      results: "50% faster design iterations"
    },
    {
      title: "Medical Training",
      description: "Practice complex surgical procedures with holographic 3D models and simulations",
      icon: <Heart className="w-6 h-6" />,
      results: "90% improved learning retention"
    },
    {
      title: "Remote Collaboration",
      description: "Conduct immersive meetings with colleagues appearing as life-sized holograms",
      icon: <Users className="w-6 h-6" />,
      results: "300% better engagement"
    },
    {
      title: "Data Visualization",
      description: "Explore complex datasets in immersive 3D holographic environments",
      icon: <BarChart3 className="w-6 h-6" />,
      results: "200% faster insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <EnhancedSEO
        title="Zion Holographic Workspace Pro - Revolutionary 3D Workspace"
        description="Transform your physical environment into an immersive 3D holographic workspace. Experience the future of work with spatial computing, gesture control, and holographic collaboration."
        keywords="holographic workspace, 3D workspace, AR workspace, VR workspace, spatial computing, holographic collaboration, immersive workspace"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse" />
        <ResponsiveContainer>
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Holographic Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Holographic Workspace Pro
            </h1>
            
            <ResponsiveText className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Step into the future of work with our revolutionary holographic workspace. 
              Transform any physical space into an immersive 3D digital environment.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
                <Play className="w-5 h-5 mr-2" />
                Start Holographic Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Holographic Experts
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Holographic Features
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of workspace technology
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-cyan-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Holographic Use Cases
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with holographic technology
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-300 font-medium">{useCase.results}</span>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Holographic Pricing
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your holographic workspace level
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''} group hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-cyan-600 to-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    {plan.cta}
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Holographic?
            </h2>
            <ResponsiveText className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Step into the future of work with our Holographic Workspace Pro
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
                <Rocket className="w-5 h-5 mr-2" />
                Start Holographic Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default HolographicWorkspaceProPage;
