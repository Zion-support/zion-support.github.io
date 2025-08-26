import React, { useState } from 'react';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  Cpu, 
  Network,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025, InnovativeService, getServicesByCategory, getTopRatedServices } from '@/data/innovativeServices2025';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface InnovativeServicesOverviewProps {
  showAllServices?: boolean;
  maxServices?: number;
  category?: string;
}

const InnovativeServicesOverview: React.FC<InnovativeServicesOverviewProps> = ({
  showAllServices = false,
  maxServices = 6,
  category
}) => {
  const [activeTab, setActiveTab] = useState('featured');

  const topRatedServices = getTopRatedServices(maxServices);
  const aiServices = getServicesByCategory('AI Services').slice(0, maxServices);
  const itServices = getServicesByCategory('IT Services').slice(0, maxServices);
  const microSaasServices = getServicesByCategory('Micro SAAS').slice(0, maxServices);
  const businessSolutions = getServicesByCategory('Business Solutions').slice(0, maxServices);
  const developmentTools = getServicesByCategory('Development Tools').slice(0, maxServices);
  const securityServices = getServicesByCategory('Security').slice(0, maxServices);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Cpu;
      case 'Micro SAAS': return Zap;
      case 'Business Solutions': return TrendingUp;
      case 'Development Tools': return Code;
      case 'Security': return Shield;
      default: return Globe;
    }
  };

  const formatPrice = (price: any) => {
    if (price.monthly && price.yearly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.monthly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.yearly) {
      return `$${price.yearly.toLocaleString()}/year`;
    } else if (price.oneTime) {
      return `$${price.oneTime.toLocaleString()} one-time`;
    }
    return 'Contact for pricing';
  };

  const getCategoryStats = () => {
    const totalServices = INNOVATIVE_SERVICES_2025.length;
    const avgRating = INNOVATIVE_SERVICES_2025.reduce((acc, service) => acc + service.rating, 0) / totalServices;
    const avgAIScore = INNOVATIVE_SERVICES_2025.reduce((acc, service) => acc + service.aiScore, 0) / totalServices;
    const totalReviews = INNOVATIVE_SERVICES_2025.reduce((acc, service) => acc + service.reviewCount, 0);

    return { totalServices, avgRating, avgAIScore, totalReviews };
  };

  const stats = getCategoryStats();

  if (category) {
    const categoryServices = getServicesByCategory(category).slice(0, maxServices);
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {category} Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge {category.toLowerCase()} that drive innovation and transform businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Innovative Services 2025
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Discover cutting-edge AI, IT, and Micro SAAS solutions that transform businesses and drive innovation
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalServices}+</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.avgRating.toFixed(1)}</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.avgAIScore.toFixed(0)}</div>
            <div className="text-sm text-gray-600">Avg AI Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalReviews}+</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2 text-blue-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Mail className="h-4 w-4" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-700">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-yellow-500" />
            <span className="text-blue-700 font-medium">Trusted by 1000+ Companies Worldwide</span>
          </div>
        </div>
      </div>

      {/* Services Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100">
          <TabsTrigger value="featured" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Star className="mr-2 h-4 w-4" />
            Featured
          </TabsTrigger>
          <TabsTrigger value="ai-services" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Brain className="mr-2 h-4 w-4" />
            AI Services
          </TabsTrigger>
          <TabsTrigger value="it-services" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Cpu className="mr-2 h-4 w-4" />
            IT Services
          </TabsTrigger>
          <TabsTrigger value="micro-saas" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Zap className="mr-2 h-4 w-4" />
            Micro SAAS
          </TabsTrigger>
          <TabsTrigger value="business" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <TrendingUp className="mr-2 h-4 w-4" />
            Business
          </TabsTrigger>
          <TabsTrigger value="development" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Code className="mr-2 h-4 w-4" />
            Development
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai-services" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="it-services" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="micro-saas" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSolutions.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="development" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentTools.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
        <h3 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of companies already using our innovative services to stay ahead of the competition
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
            <Mail className="mr-2 h-5 w-5" />
            Request Quote
          </Button>
        </div>
      </div>

      {showAllServices && (
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
            onClick={() => window.open('/innovative-services-2025', '_blank')}
          >
            <Globe className="mr-2 h-5 w-5" />
            View All Services
          </Button>
        </div>
      )}
    </div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: InnovativeService }> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return Brain;
      case 'IT Services': return Cpu;
      case 'Micro SAAS': return Zap;
      case 'Business Solutions': return TrendingUp;
      case 'Development Tools': return Code;
      case 'Security': return Shield;
      default: return Globe;
    }
  };

  const formatPrice = (price: any) => {
    if (price.monthly && price.yearly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.monthly) {
      return `$${price.monthly.toLocaleString()}/month`;
    } else if (price.yearly) {
      return `$${price.yearly.toLocaleString()}/year`;
    } else if (price.oneTime) {
      return `$${price.oneTime.toLocaleString()} one-time`;
    }
    return 'Contact for pricing';
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              {React.createElement(getCategoryIcon(service.category), { className: "h-5 w-5 text-blue-600" })}
            </div>
            <div>
              <CardTitle className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {service.subcategory}
              </CardDescription>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            {service.aiScore}/100
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-3">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-gray-900 text-sm font-medium">{service.rating}</span>
            <span className="text-gray-500 text-xs">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-blue-400 text-blue-600">
            {service.status}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-gray-900 font-semibold">
            {formatPrice(service.price)}
          </div>
          <div className="text-sm text-gray-500">
            Market Price: {service.marketPrice}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <div className="text-sm text-gray-600">
            <strong className="text-gray-900">Unique Value:</strong> {service.uniqueValue}
          </div>
          
          <div className="text-sm text-gray-600">
            <strong className="text-gray-900">Competitors:</strong> {service.competitors.join(', ')}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(service.website, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            Contact
          </Button>
        </div>

        {service.demoLink && (
          <Button 
            variant="ghost" 
            className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={() => window.open(service.demoLink, '_blank')}
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Request Demo
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default InnovativeServicesOverview;