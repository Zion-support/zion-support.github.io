import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cloud, Database, Monitor, Server, Settings, Shield } from 'lucide-react';

const ItServicesPage: React.FC = () => { const itServices = [ { icon: <Cloud className="w-8 h-8" />, title: "Cloud Infrastructure", description: "Scalable and secure cloud infrastructure solutions for modern businesses.", href: "/ai-cloud-infrastructure", features: ["Cloud Migration", "Multi-Cloud Management", "Serverless Architecture", "Cost Optimization"] }, { icon: <Shield className="w-8 h-8" />, title: "Advanced Security Suite", description: "Comprehensive cybersecurity solutions to protect your digital assets.", href: "/advanced-security-suite", features: ["Threat Detection", "Data Encryption", "Compliance Management", "Security Auditing"] }, { icon: <Database className="w-8 h-8" />, title: "Database Solutions", description: "Robust database management and optimization services for data-driven businesses.", href: "/database-solutions", features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"] }, { icon: <Monitor className="w-8 h-8" />, title: "Performance Monitoring", description: "Real-time monitoring and optimization of your IT infrastructure and applications.", href: "/performance-monitoring", features: ["Real-time Monitoring", "Performance Analytics", "Alert Management", "Capacity Planning"] }, { icon: <Settings className="w-8 h-8" />, title: "DevOps Solutions", description: "Streamlined development and deployment processes with modern DevOps practices.", href: "/devops-solutions", features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Automated Testing"] }, { icon: <Server className="w-8 h-8" />, title: "API Management", description: "Comprehensive API management and integration solutions for seamless connectivity.", href: "/ai-api-management", features: ["API Gateway", "Rate Limiting", "Authentication", "Analytics & Monitoring"] } ];
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database solutions, performance monitoring, DevOps, and API management." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, database solutions, DevOps, API management, performance monitoring" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your IT infrastructure with our comprehensive technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet> 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive information technology solutions that modernize your infrastructure, 
                enhance security, and optimize performance for maximum business efficiency.
              </p>
            </div>
          </div>
        </section>
        { /* IT Services Grid */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Solutions</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to transform your technology infrastructure
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { itServices.map((service, index) => (
                <div key={index } className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">
                      { service.icon }
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{ service.title }</h3>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">{ service.description }</p>
                  
        <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    { service.features.map((feature, featureIndex) => (
                      <div key={featureIndex } className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{ feature }</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={ service.href }
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your IT Infrastructure?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT solutions can optimize your technology stack and drive efficiency.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our IT experts are ready to help you implement the perfect solution for your business needs. 
            Get a free consultation and see how we can transform your IT operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default ITServicesPage;
