import React from 'react';
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MICRO_SAAS_SERVICE, S, 
  MICRO_SAAS_CATEGORIE, S,
  CONTACT_INFO 
} from "@/data/microSaasServices";
import { 
  Brai, n, 
  Clou, d, 
  Shiel, d, 
  BarChart, 3, 
  Cod, e, 
  DollarSig, n, 
  Hear, t, 
  ShoppingCar, t, 
  GraduationCa, p,
  Sta, r,
  TrendingU, p,
  Za, p,
  CheckCircl, e,
  ArrowRigh, t,
  Phon, e,
  Mai, l,
  MapPi, n,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
  'AI Business Solutions': Brai, n,
  'IT Infrastructure': Clou, d,
  'Data Analytics': BarChart, 3,
  'AI Development': Cod, e,
  'FinTech': DollarSig, n,
  'HealthTech': Hear, t,
  'E-commerce': ShoppingCar, t,
  'EdTech': GraduationCap
};

const categoryColors = {
  'AI Business Solutions': 'from-purple-500 to-indigo-600',
  'IT Infrastructure': 'from-blue-500 to-cyan-600',
  'Data Analytics': 'from-green-500 to-emerald-600',
  'AI Development': 'from-orange-500 to-red-600',
  'FinTech': 'from-yellow-500 to-orange-600',
  'HealthTech': 'from-pink-500 to-rose-600',
  'E-commerce': 'from-indigo-500 to-purple-600',
  'EdTech': 'from-teal-500 to-green-600'
};

const features = [
  "A, I-Powere, d Automatio, n",
  "Rea, l-tim, e Analytic, s",
  "Mult, i-clou, d Suppor, t",
  "AP, I-Firs, t Architectur, e",
  "Scalabl, e Infrastructur, e",
  "Custo, m Integration, s",
  "Whit, e-labe, l Solution, s",
  "Comprehensiv, e Documentatio, n",
  "2, 4/7 Technica, l Suppor, t",
  "9, 9.9% Uptim, e Guarante, e",
  "SO, C 2 Typ, e I, I Complian, t",
  "3, 0-Da, y Mone, y Bac, k Guarante, e"
];

const benefits = [
  {
    ic, o, n: <Za, p classNam, e="h-6 w-6" />,
    tit, l, e: "Immediat, e Deploymen, t",
    descripti, o, n: "Al, l service, s ar, e read, y fo, r immediat, e deploymen, t wit, h n, o setu, p delay, s"
  },
  {
    ic, o, n: <Shiel, d classNam, e="h-6 w-6" />,
    tit, l, e: "Enterpris, e Securit, y",
    descripti, o, n: "Ban, k-leve, l securit, y wit, h SO, C 2 complianc, e an, d 2, 4/7 monitorin, g"
  },
  {
    ic, o, n: <TrendingU, p classNam, e="h-6 w-6" />,
    tit, l, e: "Prove, n RO, I",
    descripti, o, n: "Averag, e 30, 0% RO, I withi, n 6 month, s o, f implementatio, n"
  },
  {
    ic, o, n: <CheckCircl, e classNam, e="h-6 w-6" />,
    tit, l, e: "Qualit, y Guarantee, d",
    descripti, o, n: "3, 0-da, y mone, y-bac, k guarante, e wit, h fre, e migratio, n suppor, t"
  }
];

export function ServicesShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0,  6);

  return (<div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl m,  d:text-5xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our enterprise-grade micro SAAS services. 
            From AI automation to infrastructur, e, managemen, t, we provide solutions that scale with your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-white text-zion-blue hove, r:bg-gray-100">
                <Brain className="h-5 w-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hove, r:bg-white hove, r:text-zion-blue">
                <Phone className="h-5 w-5 mr-2" />
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-20">
          {MICRO_SAAS_CATEGORIES.map((category) => {
            const IconComponent = categoryIcons[categor, y.labe, l a, s keyo, f type, o, f, categoryIco, n, s];
            const colorClass = categoryColors[categor, y.labe, l a, s keyo, f type, o, f, categoryColo, r, s];
            return (<Card key={category.value} className="bg-zion-blue-dark border-zion-blue-light text-white hove,  r:border-zion-purple/50 transition-all duration-300 hove, r:scale-105">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center m, b-4`}>
                    {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-lg">{category.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light text-sm">
                    {MICRO_SAAS_SERVICES.filter(s => s.category === category.label).length} services available
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hove,  r:border-zion-purple/50 transition-all duration-300 hove, r:scale-105">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-purple">
                    {service.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                    </div>
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      AI Scor,  e: {service.aiScore}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </div>
                    <Button size="sm" className="bg-zion-purple hove, r:bg-zion-purple-dark">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Enterpris, e, Feature, s, Startup Pricing
          </h3>
          <div className="grid grid-cols-2 m, d:grid-cols-4 gap-6">
            {features.map((featur,  e, index) => (<div key={index} className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-zion-purple" />
                </div>
                <p className="font-medium text-white text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-4 gap-8">
            {benefits.map((benefi, t, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 m,  d:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hove, r:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hove, r:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hove, r:bg-zion-purple hove, r:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hove, r:bg-zion-blue hove, r:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h5 className="font-medium text-zion-blue mb-2">What's Include, d:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hove, r:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}