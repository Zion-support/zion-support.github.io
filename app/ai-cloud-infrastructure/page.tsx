import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Brain, Database, Zap, Star, Phone, Play, CheckCircle, ArrowRight, Mail } from 'lucide-react';

const AiCloudInfrastructurePage: React.FC = () => { const [isVisible, setIsVisible] = useState(false); useEffect(() => { setIsVisible(true); }, []);

const features = [ { icon: <Cloud className="w-6 h-6" />, title: "AI-Powered Auto-Scaling", description: "Intelligent resource management that automatically scales your infrastructure based on demand and AI predictions.", benefits: ["Predictive scaling", "Cost optimization", "Performance monitoring", "Automatic failover"] }, { icon: <Server className="w-6 h-6" />, title: "Multi-Cloud Architecture", description: "Seamlessly deploy across AWS, Azure, and Google Cloud with unified management and monitoring.", benefits: ["Multi-cloud deployment", "Vendor independence", "Disaster recovery", "Load balancing"] }, { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "Bank-level security with end-to-end encryption, access controls, and compliance management.", benefits: ["End-to-end encryption", "Identity management", "Compliance automation", "Threat detection"] }, { icon: <Brain className="w-6 h-6" />, title: "AI Monitoring & Analytics", description: "Advanced AI-powered monitoring that predicts issues before they occur and provides actionable insights.", benefits: ["Predictive analytics", "Anomaly detection", "Performance optimization", "Cost analysis"] }, { icon: <Database className="w-6 h-6" />, title: "Managed Database Services", description: "Fully managed database solutions with automated backups, scaling, and performance tuning.", benefits: ["Automated backups", "Performance tuning", "High availability", "Data migration"] }, { icon: <Zap className="w-6 h-6" />, title: "Edge Computing", description: "Deploy AI workloads closer to users with our global edge computing network for ultra-low latency.", benefits: ["Global edge network", "Low latency", "Real-time processing", "CDN integration"] } ];


export default function Page() {
  const features = [ { icon: <Cloud className="w-6 h-6" />, title: "AI-Powered Auto-Scaling", description: "Intelligent resource management that automatically scales your infrastructure based on demand and AI predictions.", benefits: ["Predictive scaling", "Cost optimization", "Performance monitoring", "Automatic failover"]
;
  const pricingPlans = [ { name: "Starter", price: "$499", period: "month", description: "Perfect for small businesses starting their cloud journey", features: [ "Up to 10 servers", "Basic AI monitoring", "Standard support", "99.9% uptime SLA", "Email support", "1TB storage" ]
;
  const testimonials = [ { name: "Alex Rodriguez", company: "TechCorp Solutions", role: "CTO", content: "The AI-powered auto-scaling has reduced our infrastructure costs by 40% while improving performance. Incredible technology.", rating: 5 }, { name: "Maria Santos", company: "Global Enterprises", role: "Infrastructure Director", content: "The multi-cloud architecture gives us the flexibility we need. The AI monitoring has prevented several potential outages.", rating: 5 }, { name: "James Wilson", company: "StartupX", role: "Founder", content: "Zion Tech Group's cloud infrastructure has been the backbone of our rapid growth. Reliable, scalable, and cost-effective.", rating: 5 } ]
;
  return (
    <> <Helmet> <title>AI Cloud Infrastructure - Advanced Cloud Solutions | Zion Tech Group</title> <meta name="description" content="Transform your business with AI-powered cloud infrastructure. Scalable, secure, and intelligent cloud solutions for modern enterprises." /> <meta name="keywords" content="AI cloud infrastructure, cloud computing, multi-cloud, auto-scaling, cloud security, managed services" /> <meta property="og:title" content="AI Cloud Infrastructure - Zion Tech Group" /> <meta property="og:description" content="Advanced AI-powered cloud infrastructure solutions" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/ai-cloud-infrastructure" /> </Helmet> 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        
        <div className="absolute inset-0">
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <main className="relative z-10">
          <section className="relative py-20 overflow-hidden">
            
        <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Cloud Platform
                </div>
                
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Cloud Infrastructure
                  </span>
                </h1>
                
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with intelligent cloud infrastructure that scales, secures, and optimizes itself. 
                  Built for the future of enterprise computing.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started Today
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Cloud Capabilities
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Harness the power of AI-driven cloud infrastructure designed for modern enterprises.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div 
                    key={index } 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    </h3>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing Plans
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the cloud infrastructure plan that scales with your business needs.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    
        <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      
          <p className="text-gray-300 mb-4">{ plan.description }</p>
                      
        <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{ plan.price }</span>
                        <span className="text-gray-400 ml-2">/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4 mb-8">
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={ `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Client Success Stories
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how organizations are transforming their infrastructure with our AI cloud solutions.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold text-white">{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Scale Your Infrastructure?
                </h2>
                
          <p className="text-xl text-gray-300 mb-8">
                  Transform your business with AI-powered cloud infrastructure. Get a free consultation and see how we can optimize your operations.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
}
}}}