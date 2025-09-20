import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Cloud, Shield, Zap, Users, Globe, Code, Database, Star, CheckCircle, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate stats
    const animateStats = () => {
      setStats({
        projects: 500,
        clients: 200,
        years: 10,
        satisfaction: 98
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 200+ Companies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI, cloud, cybersecurity, and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stats.projects}+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stats.years}+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Cloud className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle>Cloud Solutions</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Scalable cloud infrastructure and migration services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Transform your business with our comprehensive cloud solutions including AWS, Azure, and Google Cloud.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Shield className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle>Cybersecurity</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Advanced security solutions to protect your digital assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive security services including threat detection, vulnerability assessment, and compliance.
                </p>
                <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                    <Zap className="h-8 w-8 text-yellow-400" />
                  </div>
                  <CardTitle>AI & Machine Learning</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Intelligent solutions powered by artificial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Leverage AI and ML to automate processes, gain insights, and drive innovation.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle>Digital Transformation</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Complete digital overhaul for modern businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  End-to-end digital transformation services to modernize your operations.
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Globe className="h-8 w-8 text-cyan-400" />
                  </div>
                  <CardTitle>Web Development</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Modern, responsive web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Custom web development using the latest technologies and frameworks.
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                    <Database className="h-8 w-8 text-orange-400" />
                  </div>
                  <CardTitle>Data Analytics</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Turn data into actionable insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Advanced analytics and business intelligence solutions to drive data-driven decisions.
                </p>
                <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">
                Highly skilled professionals with years of experience in cutting-edge technologies
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security and reliability in all our solutions
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Rapid development and deployment with agile methodologies
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group transformed our entire infrastructure. Their cloud solutions saved us 40% in costs while improving performance."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold">John Smith</div>
                    <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Outstanding cybersecurity implementation. We feel completely secure with their comprehensive protection strategy."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold">Maria Johnson</div>
                    <div className="text-gray-400 text-sm">Security Director, FinanceInc</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Their AI solutions revolutionized our data analytics. We now have insights we never knew were possible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    DR
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-semibold">David Rodriguez</div>
                    <div className="text-gray-400 text-sm">Data Scientist, DataFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success
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

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}