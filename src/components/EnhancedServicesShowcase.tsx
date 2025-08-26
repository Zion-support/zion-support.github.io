import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Star, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Cloud, 
  Brain, 
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  Settings,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Award,
  Eye,
  MessageSquare,
  MessageCircle,
  FileText,
  Mic,
  ThumbsUp
} from 'lucide-react';
import enhancedMicroSaasServices2025 from '../data/enhancedMicroSaasServices2025';
import enhancedAIServices2025 from '../data/enhancedAIServices2025';
import enhancedITServices2025 from '../data/enhancedITServices2025';
import nextGenInnovativeServices2025 from '../data/nextGenInnovativeServices2025';
import blockchainWeb3Services2025 from '../data/blockchainWeb3Services2025';
import iotEdgeComputingServices2025 from '../data/iotEdgeComputingServices2025';
import advancedCybersecurityServices2025 from '../data/advancedCybersecurityServices2025';

interface ServiceShowcaseProps {
  title?: string;
  subtitle?: string;
}

export function EnhancedServicesShowcase({ 
  title = "Our Comprehensive Technology Solutions",
  subtitle = "Discover cutting-edge micro SAAS, AI, and IT services designed to transform your business"
}: ServiceShowcaseProps) {
  const [activeTab, setActiveTab] = useState('microsaas');

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'productivity': return <Users className="h-5 w-5" />;
      case 'finance': return <DollarSign className="h-5 w-5" />;
      case 'marketing': return <TrendingUp className="h-5 w-5" />;
      case 'development': return <Code className="h-5 w-5" />;
      case 'data & analytics': return <BarChart3 className="h-5 w-5" />;
      case 'cybersecurity': return <Shield className="h-5 w-5" />;
      case 'cloud & devops': return <Cloud className="h-5 w-5" />;
      case 'human resources': return <Users className="h-5 w-5" />;
      case 'education': return <Globe className="h-5 w-5" />;
      case 'healthcare': return <Award className="h-5 w-5" />;
      case 'computer vision': return <Eye className="h-5 w-5" />;
      case 'natural language processing': return <MessageSquare className="h-5 w-5" />;
      case 'predictive analytics': return <TrendingUp className="h-5 w-5" />;
      case 'conversational ai': return <MessageCircle className="h-5 w-5" />;
      case 'content generation': return <FileText className="h-5 w-5" />;
      case 'data science': return <Database className="h-5 w-5" />;
      case 'voice ai': return <Mic className="h-5 w-5" />;
      case 'recommendation systems': return <ThumbsUp className="h-5 w-5" />;
      case 'security ai': return <Shield className="h-5 w-5" />;
      case 'process automation': return <Settings className="h-5 w-5" />;
      case 'cloud services': return <Cloud className="h-5 w-5" />;
      case 'infrastructure': return <Server className="h-5 w-5" />;
      case 'network security': return <Lock className="h-5 w-5" />;
      case 'mobile development': return <Smartphone className="h-5 w-5" />;
      case 'consulting': return <Users className="h-5 w-5" />;
      case 'managed services': return <Settings className="h-5 w-5" />;
      case 'web development': return <Globe className="h-5 w-5" />;
      default: return <Star className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'productivity': return 'from-green-500 to-emerald-500';
      case 'finance': return 'from-blue-500 to-cyan-500';
      case 'marketing': return 'from-purple-500 to-pink-500';
      case 'development': return 'from-orange-500 to-red-500';
      case 'data & analytics': return 'from-indigo-500 to-purple-500';
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'cloud & devops': return 'from-blue-500 to-indigo-500';
      case 'human resources': return 'from-teal-500 to-green-500';
      case 'education': return 'from-yellow-500 to-orange-500';
      case 'healthcare': return 'from-pink-500 to-red-500';
      case 'computer vision': return 'from-purple-500 to-pink-500';
      case 'natural language processing': return 'from-blue-500 to-cyan-500';
      case 'predictive analytics': return 'from-indigo-500 to-purple-500';
      case 'conversational ai': return 'from-green-500 to-teal-500';
      case 'content generation': return 'from-yellow-500 to-orange-500';
      case 'data science': return 'from-indigo-500 to-blue-500';
      case 'voice ai': return 'from-pink-500 to-purple-500';
      case 'recommendation systems': return 'from-teal-500 to-green-500';
      case 'security ai': return 'from-red-500 to-pink-500';
      case 'process automation': return 'from-orange-500 to-yellow-500';
      case 'cloud services': return 'from-blue-500 to-indigo-500';
      case 'infrastructure': return 'from-gray-500 to-slate-500';
      case 'network security': return 'from-red-500 to-orange-500';
      case 'mobile development': return 'from-green-500 to-blue-500';
      case 'consulting': return 'from-purple-500 to-indigo-500';
      case 'managed services': return 'from-teal-500 to-cyan-500';
      case 'web development': return 'from-blue-500 to-green-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const formatPrice = (price: number, pricingModel: string) => {
    if (pricingModel === 'per API call') {
      return `$${price.toFixed(3)} per call`;
    } else if (pricingModel === 'per word') {
      return `$${price.toFixed(2)} per word`;
    } else if (pricingModel === 'per recommendation') {
      return `$${price.toFixed(3)} per recommendation`;
    } else if (pricingModel === 'per employee/month') {
      return `$${price}/employee/month`;
    } else if (pricingModel === 'monthly') {
      return `$${price}/month`;
    } else if (pricingModel === 'usage-based') {
      return `$${price} per unit`;
    } else if (pricingModel === 'tiered') {
      return `$${price}/month starting`;
    } else if (pricingModel === 'enterprise') {
      return `$${price}/month`;
    } else {
      return `$${price}`;
    }
  };

  const renderMicroSaasService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-slate-500 text-slate-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-slate-400">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">AI Score: {service.aiScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-300">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-green-500/30 text-green-400">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-400">ROI:</span>
              <div className="text-sm font-semibold text-green-400">{service.roi}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAIService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-purple-800/50 to-pink-700/50 border-purple-600/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-purple-500 text-purple-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-purple-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 font-semibold">AI Score: {service.aiScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">Accuracy: {service.accuracy}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-purple-700/50 text-purple-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-200">AI Models:</h4>
          <div className="flex flex-wrap gap-2">
            {service.aiModels.slice(0, 3).map((model: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-pink-500/30 text-pink-400">
                {model}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-purple-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-purple-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-purple-300">Real-time:</span>
              <div className="text-sm font-semibold text-green-400">
                {service.realTimeProcessing ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:border-pink-500 hover:text-pink-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderITService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-blue-800/50 to-indigo-700/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-blue-500 text-blue-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-blue-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Response: {service.responseTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">SLA: {service.sla}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-blue-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-700/50 text-blue-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-blue-200">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 3).map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-indigo-500/30 text-indigo-400">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-blue-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-blue-300">Hourly Rate:</span>
              <div className="text-lg font-bold text-white">${service.hourlyRate}/hour</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-blue-300">Project Rate:</span>
              <div className="text-sm font-semibold text-green-400">${service.projectRate.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-blue-500 text-blue-300 hover:border-indigo-500 hover:text-indigo-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderInnovativeService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-green-800/50 to-emerald-700/50 border-green-600/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-green-500 text-green-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-green-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">Innovation Score: {service.innovationScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-green-700/50 text-green-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-200">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-green-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-green-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-green-300">Emerging Tech:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.emergingTech ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-green-500 text-green-300 hover:border-emerald-500 hover:text-emerald-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBlockchainService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-orange-800/50 to-red-700/50 border-orange-600/30 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-orange-500 text-orange-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-orange-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-orange-400" />
            <span className="text-orange-400 font-semibold">Blockchain Score: {service.blockchainScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-orange-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-orange-700/50 text-orange-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-orange-200">Web3 Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.web3Native ? 'Web3 Native' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.smartContractSupport ? 'Smart Contracts' : 'No Smart Contracts'}
            </Badge>
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.crossChainCompatibility ? 'Cross-Chain' : 'Single Chain'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-orange-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-orange-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-orange-300">Use Cases:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.useCases.length}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-orange-500 text-orange-300 hover:border-red-500 hover:text-red-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderIoTService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-teal-800/50 to-cyan-700/50 border-teal-600/30 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-teal-500 text-teal-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-teal-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-teal-400" />
            <span className="text-teal-400 font-semibold">IoT Score: {service.iotScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-teal-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-teal-700/50 text-teal-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-teal-200">IoT Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.edgeNative ? 'Edge Native' : 'Cloud Based'}
            </Badge>
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.aiIntegration ? 'AI Powered' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.predictiveAnalytics ? 'Predictive' : 'Reactive'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-teal-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-teal-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-teal-300">Real-time:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.realTimeProcessing ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-teal-500 text-teal-300 hover:border-cyan-500 hover:text-cyan-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCybersecurityService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-pink-800/50 to-rose-700/50 border-pink-600/30 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-pink-500 text-pink-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-pink-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-pink-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-pink-400" />
            <span className="text-pink-400 font-semibold">Security Score: {service.securityScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-pink-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-pink-700/50 text-pink-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-pink-200">Security Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.zeroTrust ? 'Zero Trust' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.aiPowered ? 'AI Powered' : 'Rule Based'}
            </Badge>
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.quantumResistant ? 'Quantum Resistant' : 'Standard'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-pink-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-pink-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-pink-300">Threat Intel:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.threatIntelligence ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-pink-500 text-pink-300 hover:border-rose-500 hover:text-rose-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-600/30">
            <TabsTrigger 
              value="microsaas" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Zap className="h-4 w-4 mr-2" />
              Micro SAAS
            </TabsTrigger>
            <TabsTrigger 
              value="ai" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Brain className="h-4 w-4 mr-2" />
              AI Services
            </TabsTrigger>
            <TabsTrigger 
              value="it" 
              className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
            >
              <Server className="h-4 w-4 mr-2" />
              IT Services
            </TabsTrigger>
            <TabsTrigger 
              value="innovative" 
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              <Star className="h-4 w-4 mr-2" />
              Innovative
            </TabsTrigger>
          </TabsList>

          <TabsContent value="microsaas" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedMicroSaasServices2025.map(renderMicroSaasService)}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedAIServices2025.map(renderAIService)}
            </div>
          </TabsContent>

          <TabsContent value="it" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedITServices2025.map(renderITService)}
            </div>
          </TabsContent>
          
          <TabsContent value="innovative" className="mt-8">
            <div className="space-y-8">
              {/* Next Gen Innovative Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Next Generation Innovative Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nextGenInnovativeServices2025.map(renderInnovativeService)}
                </div>
              </div>
              
              {/* Blockchain & Web3 Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Blockchain & Web3 Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blockchainWeb3Services2025.map(renderBlockchainService)}
                </div>
              </div>
              
              {/* IoT & Edge Computing Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">IoT & Edge Computing Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {iotEdgeComputingServices2025.map(renderIoTService)}
                </div>
              </div>
              
              {/* Advanced Cybersecurity Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Cybersecurity Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {advancedCybersecurityServices2025.map(renderCybersecurityService)}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how our comprehensive technology solutions can transform your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3"
                onClick={() => window.open('https://ziontechgroup.com', '_blank')}
              >
                Visit Our Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400 px-8 py-3"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com`)}
              >
                Contact Us
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnhancedServicesShowcase;