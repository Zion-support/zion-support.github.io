import React from 'react';''';
import { Button } from '@/components/ui/button';
import {}
  Card,;
  CardContent,';
  CardDescription,'';
  CardHeader,''';
  CardTitle} from '@/components/ui/card';''';
import { Badge } from '@/components/ui/badge';''';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {}
  Star,;
  Zap,;
  TrendingUp,;
  CheckCircle,;
  Phone,;
  Mail,;
  Globe,;
  Shield,;
  Users,;
  ArrowUpRight,;
  Brain,;
  Cloud,;
  Database,;
  Lock,;
  Code,;
  BarChart3,;
  MessageSquare,';
  FileText,'';
  ShoppingCart,''';
  Settings} from 'lucide-react';''';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from '@/data/expandedServices';''';
import { TrustedBySection } from '@/components/TrustedBySection';''';
import { SEO } from '@/components/SEO';
export {};
  return null;
}
  const getCategoryIcon = category => {}
    switch (category) {}
';
'';
''';
      case 'AI Services':'''';
        return '🤖';''';
      case 'Micro SAAS':'''';
        return '☁️';''';
      case 'IT Services':'''';
        return '💻';''';
      case 'Digital Services':'''';
        return '🚀';''';
      default:'''';
        return '⚡'}
  }
  const getCategoryIconComponent = category => {}
    switch (category) {}
';
      case 'AI Services': any;
        return <Brain className="h-6 w-6" />;'";
      case 'Micro SAAS':"";
        return <Cloud className="h-6 w-6" />;'";
      case 'IT Services':"";
        return <Code className="h-6 w-6" />;'";
      case 'Digital Services':"";
        return <ArrowUpRight className="h-6 w-6" />;";
      default:"";
        return <Settings className="h-6 w-6" />}
  }
  const getPricingModelColor = model => {}
    switch (model) {}
';
'';
''';
      case 'subscription':'''';
        return 'bg-blue-100 text-blue-800';''';
      case 'project-based':'''';
        return 'bg-purple-100 text-purple-800';''';
      case 'one-time':'''';
        return 'bg-green-100 text-green-800';''';
      case 'usage-based':'''';
        return 'bg-orange-100 text-orange-800';''';
      default:'''';
        return 'bg-gray-100 text-gray-800'}
  }
  const getServiceIcon = subcategory => {}
    switch (subcategory) {}
'";
      case 'Customer Service':"";
        return <MessageSquare className="h-5 w-5" />;'";
      case 'Analytics':"";
        return <BarChart3 className="h-5 w-5" />;'";
      case 'Content Creation':"";
        return <FileText className="h-5 w-5" />;'";
      case 'Inventory Management':"";
        return <Database className="h-5 w-5" />;'";
      case 'HR Analytics':"";
        return <Users className="h-5 w-5" />;'";
      case 'Financial Management':"";
        return <BarChart3 className="h-5 w-5" />;'";
      case 'Cloud Solutions':"";
        return <Cloud className="h-5 w-5" />;'";
      case 'Cybersecurity':"";
        return <Lock className="h-5 w-5" />;'";
      case 'DevOps':"";
        return <Code className="h-5 w-5" />;'";
      case 'Transformation':"";
        return <ArrowUpRight className="h-5 w-5" />;'";
      case 'E-commerce':"";
        return <ShoppingCart className="h-5 w-5" />;";
      default:"";
        return <Settings className="h-5 w-5" />}
  };";
  return ("";
    <div className="min-h-screen bg-background">";
      <div>Broken JSX</div>
      />;
";
      {/* Hero Section */}"";
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">"";
        <div className="container mx-auto px-4 text-center">"";
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Complete Tech Solutions Ecosystem";
          </h1>"";
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
            From cutting-edge AI automation to affordable micro SAAS solutions,;
            comprehensive IT infrastructure, and digital transformation services;
            - we provide everything your business needs to thrive in the digital;
            age.;
          </p>";
"";
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">";
            <div>Broken JSX</div>
              className="bg-white text-zion-purple hover:bg-gray-100"">"";
              <Phone className="h-5 w-5 mr-2" />;
              Call +1 302 464 0950;
            </Button>";
            <div>Broken JSX</div>
              className="border-white text-white hover:bg-white hover:text-zion-purple"">"";
              <Mail className="h-5 w-5 mr-2" />;
              Get Free Consultation;
            </Button>;
          </div>;
";
          {/* Quick Stats */}"";
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">;
                {EXPANDED_SERVICES.length}";
              </div>"";
              <div className="text-zion-slate-light">Total Services</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">4</div>"";
              <div className="text-zion-slate-light">Categories</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>"";
              <div className="text-zion-slate-light">Support</div>";
            </div>"";
            <div className="text-center">"";
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>"";
              <div className="text-zion-slate-light">Satisfaction</div>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Services by Category Tabs */}"";
      <section className="py-16">"";
        <div className="container mx-auto px-4">"";
          <div className="text-center mb-12">"";
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">;
              Explore Our Service Categories";
            </h2>"";
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Each category is designed to address specific business challenges;
              and opportunities;
            </p>;
          </div>";
"";
          <Tabs defaultValue="ai-services" className="w-full">"";
            <TabsList className="grid w-full grid-cols-4 mb-8">;
              {};
                    {getCategoryIcon(category.name)}";
                  </span>"";
                  <span className="hidden sm:inline">{category.name}</span>;
                </TabsTrigger>;
              ))}
            </TabsList>;

            {};
                    {getCategoryIconComponent(category.name)}";
                  </div>"";
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">;
                    {category.name}";
                  </h3>"";
                  <p className="text-gray-600 max-w-2xl mx-auto">;
                    {category.description}
                  </p>;
                </div>";
"";
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                  {};
                            {getCategoryIcon(service.category)}
                          </div>;
                          <div>Broken JSX</div>
                          >';
                            {service.pricingModel.replace('-')}
                          </Badge>";
                        </div>"";
                        <div className="flex items-center space-x-2 mb-2">";
                          {getServiceIcon(service.subcategory)}"";
                          <span className="text-sm text-zion-purple font-medium">;
                            {service.subcategory}
                          </span>";
                        </div>"";
                        <CardTitle className="text-lg text-zion-blue-dark">;
                          {service.title}";
                        </CardTitle>"";
                        <CardDescription className="text-gray-600">;
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Rating and AI Score */}
                        <div className="flex items - center justify - between">
                          <div className="flex items - center space - x-2">
                            <div className="flex items - center">
                              <Star className="h - 4 w - 4 text - yellow - 500 fill - current"       />
                              <span className="ml - 1 text - sm font - medium">
                                {service.rating}
                              </span>
                              <span className="text - gray - 500 text - sm ml - 1"> ({service.reviewCount}) </span>
                            </div>
                          </div>
                          <div className="flex items - center space - x-2">
                            <Zap className="h - 4 w - 4 text - zion - purple"       />
                            <span className="text - sm font - medium text - zion - purple">
                              AI Score: {service.aiScore}
                            </span>
                          </div>
                        </div>

                        {/* Price and Market Price */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-zion-blue-dark">
                              ${service.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500">
                              Market: {service.marketPrice}
                            </span>
                          </div>
                        </div>

      <TrustedBySection />;
    </div>)}


export { AllServicesLandingPage }
export { AllServicesLandingPage }
export { AllServicesLandingPage }
export { AllServicesLandingPage }
export { AllServicesLandingPage }