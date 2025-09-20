import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  BarChart3,
  Lock,
  Server,
  Cpu
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure and migration services",
      features: [
        "AWS, Azure, Google Cloud expertise",
        "Cloud migration and optimization",
        "Serverless architecture design",
        "Cost optimization strategies"
      ],
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      features: [
        "Threat detection and response",
        "Vulnerability assessments",
        "Compliance and governance",
        "Security training and awareness"
      ],
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: [
        "Custom AI model development",
        "Machine learning pipelines",
        "Natural language processing",
        "Computer vision solutions"
      ],
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Complete digital overhaul for modern businesses",
      features: [
        "Process automation",
        "Legacy system modernization",
        "Change management",
        "Digital strategy consulting"
      ],
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications",
      features: [
        "React, Next.js, Vue.js development",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "API development and integration"
      ],
      color: "text-cyan-400"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Turn data into actionable insights",
      features: [
        "Business intelligence dashboards",
        "Data warehousing solutions",
        "Predictive analytics",
        "Real-time data processing"
      ],
      color: "text-orange-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS and Android development",
        "React Native solutions",
        "Flutter applications",
        "Mobile app optimization"
      ],
      color: "text-pink-400"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Data-driven decision making solutions",
      features: [
        "Custom reporting dashboards",
        "KPI tracking and monitoring",
        "Data visualization",
        "Performance analytics"
      ],
      color: "text-indigo-400"
    },
    {
      icon: Lock,
      title: "Data Privacy & Compliance",
      description: "Ensure compliance with data protection regulations",
      features: [
        "GDPR compliance implementation",
        "Privacy impact assessments",
        "Data governance frameworks",
        "Audit and compliance reporting"
      ],
      color: "text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> website-improvements
}