import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cloud, Shield, Zap, Users, Globe, Code, Database } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI, cloud, cybersecurity, and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
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
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cloud className="h-8 w-8 text-blue-400" />
                  <CardTitle>Cloud Solutions</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Scalable cloud infrastructure and migration services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Transform your business with our comprehensive cloud solutions including AWS, Azure, and Google Cloud.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-400" />
                  <CardTitle>Cybersecurity</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Advanced security solutions to protect your digital assets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Comprehensive security services including threat detection, vulnerability assessment, and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-yellow-400" />
                  <CardTitle>AI & Machine Learning</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Intelligent solutions powered by artificial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Leverage AI and ML to automate processes, gain insights, and drive innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-400" />
                  <CardTitle>Digital Transformation</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Complete digital overhaul for modern businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  End-to-end digital transformation services to modernize your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-cyan-400" />
                  <CardTitle>Web Development</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Modern, responsive web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Custom web development using the latest technologies and frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-8 w-8 text-orange-400" />
                  <CardTitle>Data Analytics</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Turn data into actionable insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Advanced analytics and business intelligence solutions to drive data-driven decisions.
                </p>
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
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">
                Highly skilled professionals with years of experience in cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security and reliability in all our solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Rapid development and deployment with agile methodologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}