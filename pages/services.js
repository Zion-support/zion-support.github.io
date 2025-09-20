import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowRight, Cloud, Shield, Zap, Users, Globe, Database, Code, BarChart3, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      details: "Transform your business with our comprehensive cloud solutions including AWS, Azure, and Google Cloud. We provide end-to-end cloud migration, optimization, and management services.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      details: "Comprehensive security services including threat detection, vulnerability assessment, compliance management, and 24/7 security monitoring.",
      color: "green"
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      details: "Leverage AI and ML to automate processes, gain insights, and drive innovation. From chatbots to predictive analytics, we build intelligent solutions.",
      color: "yellow"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Complete digital overhaul for modern businesses",
      details: "End-to-end digital transformation services to modernize your operations, improve efficiency, and enhance customer experience.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications",
      details: "Custom web development using the latest technologies and frameworks. From simple websites to complex web applications.",
      color: "cyan"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Turn data into actionable insights",
      details: "Advanced analytics and business intelligence solutions to drive data-driven decisions and uncover hidden opportunities.",
      color: "orange"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions for your business needs",
      details: "Bespoke software development services tailored to your specific requirements, from mobile apps to enterprise software.",
      color: "indigo"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Data-driven insights for better decision making",
      details: "Transform your data into powerful insights with our business intelligence solutions and reporting tools.",
      color: "pink"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      details: "Build engaging mobile experiences with our native iOS, Android, and cross-platform development services.",
      color: "emerald"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30",
      green: "bg-green-500/20 text-green-400 group-hover:bg-green-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30",
      purple: "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30",
      cyan: "bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30",
      orange: "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30",
      indigo: "bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30",
      pink: "bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30",
      emerald: "bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology services to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${getColorClasses(service.color)}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      {service.details}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">
                We analyze your requirements and understand your business goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">
                We create a detailed project plan with timelines and milestones
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300">
                Our expert team builds your solution using best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300">
                We deploy your solution and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}