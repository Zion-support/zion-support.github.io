import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cog, BarChart3, Clock, CheckCircle, Star, Users, Building2 } from 'lucide-react';

export default function AI2025EnterpriseAutomationMastery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Enterprise Grade AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 2025: Enterprise
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Automation Mastery
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise operations with our comprehensive AI automation platform. 
              Scale efficiently, reduce costs, and achieve unprecedented operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-2025-ultimate-breakthrough" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Enterprise Clients" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "$50M+", label: "Cost Savings Delivered" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-300">
              Built for scale, security, and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-12 w-12 text-cyan-400" />,
                title: "Intelligent Process Automation",
                description: "Automate complex business processes with AI that learns and adapts to your workflows."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
                title: "Real-time Analytics",
                description: "Get instant insights into your operations with advanced AI-powered analytics dashboards."
              },
              {
                icon: <Clock className="h-12 w-12 text-green-400" />,
                title: "24/7 Operations",
                description: "Never stop working with AI systems that operate around the clock without human intervention."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-purple-400" />,
                title: "Compliance & Security",
                description: "Enterprise-grade security with full compliance to industry standards and regulations."
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-400" />,
                title: "Team Collaboration",
                description: "Seamlessly integrate with your existing teams and workflows for maximum efficiency."
              },
              {
                icon: <Building2 className="h-12 w-12 text-red-400" />,
                title: "Scalable Infrastructure",
                description: "Scale from startup to enterprise with our cloud-native, auto-scaling platform."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300">
              From consultation to full deployment in 30 days
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your current processes and identify automation opportunities."
              },
              {
                step: "02",
                title: "Custom Solution Design",
                description: "Design a tailored AI automation solution that fits your specific needs."
              },
              {
                step: "03",
                title: "Implementation & Testing",
                description: "Deploy the solution with comprehensive testing and validation."
              },
              {
                step: "04",
                title: "Training & Support",
                description: "Train your team and provide ongoing support for optimal results."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by industry leaders worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI automation platform transformed our operations completely. We've seen a 300% increase in efficiency and saved millions in operational costs.",
                author: "Sarah Johnson",
                role: "CTO, Global Tech Corp",
                rating: 5
              },
              {
                quote: "Implementation was seamless and the results were immediate. Our team productivity increased by 250% within the first month.",
                author: "Michael Chen",
                role: "Operations Director, Enterprise Solutions",
                rating: 5
              },
              {
                quote: "The best investment we've made. The AI system handles complex processes that used to take hours in minutes.",
                author: "Emily Rodriguez",
                role: "VP of Operations, Manufacturing Inc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Enterprise Automation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprises already transforming their operations with AI. 
            Get your free consultation and see how we can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough" 
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Download Case Study
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors"> Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors"> Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}