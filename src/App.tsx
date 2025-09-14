import React from 'react';
import {
  ChevronRight,
  Users,
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { SEO } from './components/SEO';

export default function App() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Enterprise Security",
      description: "Military-grade security protocols to protect your data and infrastructure."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Scale",
      description: "Worldwide deployment capabilities with 99.9% uptime guarantee."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience."
    }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Navigation */}
        <Navigation />

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All PRs have been successfully merged and consolidated. We're building the future of technology 
              with cutting-edge AI solutions, enterprise-grade security, and unparalleled innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through innovative technology solutions and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied clients who trust Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center justify-center group">
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading the future of technology with innovative solutions and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Solutions</li>
                <li>Cloud Infrastructure</li>
                <li>Security Services</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@ziontechgroup.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}