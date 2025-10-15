import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Globe, Database, Shield, TrendingUp, Clock, Users, Zap, BarChart3, Star, CheckCircle, ArrowRight } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    &quot;Comprehensive cloud readiness assessment&quot;,
    &quot;Zero-downtime migration strategies&quot;,
    &quot;Multi-cloud and hybrid cloud solutions&quot;,
    &quot;Data security and compliance assurance&quot;,
    &quot;Cost optimization and resource management&quot;,
    &quot;Automated migration tools and scripts&quot;,
    &quot;Performance monitoring and optimization&quot;,
    &quot;Disaster recovery and backup solutions&quot;,
    &quot;24/7 migration support and monitoring&quot;,
    &quot;Post-migration optimization and training&quot;
  ];

  const cloudProviders = [
    { name: &quot;AWS&quot;, icon: <Cloud className="w-6 h-6" />, color: &quot;text-orange-600&quot; },
    { name: &quot;Azure&quot;, icon: <Server className="w-6 h-6" />, color: &quot;text-blue-600&quot; },
    { name: &quot;Google Cloud&quot;, icon: <Globe className="w-6 h-6" />, color: &quot;text-green-600&quot; },
    { name: &quot;IBM Cloud&quot;, icon: <Database className="w-6 h-6" />, color: &quot;text-blue-700&quot; },
    { name: &quot;Oracle Cloud&quot;, icon: <Shield className="w-6 h-6" />, color: &quot;text-red-600&quot; },
    { name: &quot;Alibaba Cloud&quot;, icon: <TrendingUp className="w-6 h-6" />, color: &quot;text-orange-500&quot; }
  ];

const pricingPlans = [
    {
      name: &quot;Assessment&quot;,
      price: &quot;$2,500&quot;,
      period: &quot;one-time&quot;,
      description: &quot;Comprehensive cloud readiness assessment&quot;,
      features: [
        &quot;Infrastructure analysis&quot;,
        &quot;Security assessment&quot;,
        &quot;Cost analysis&quot;,
        &quot;Migration roadmap&quot;,
        &quot;Risk assessment&quot;,
        &quot;Timeline estimation&quot;
      ],
      popular: false
    },
    {
      name: &quot;Migration&quot;,
      price: &quot;$15,000&quot;,
      period: &quot;project&quot;,
      description: &quot;Complete cloud migration service&quot;,
      features: [
        &quot;Full migration execution&quot;,
        &quot;Zero-downtime migration&quot;,
        &quot;Data security assurance&quot;,
        &quot;Performance optimization&quot;,
        &quot;24/7 support during migration&quot;,
        &quot;Post-migration monitoring&quot;
      ],
      popular: true
    },
    {
      name: &quot;Enterprise&quot;,
      price: &quot;Custom&quot;,
      period: &quot;quote&quot;,
      description: &quot;Large-scale enterprise migration&quot;,
      features: [
        &quot;Everything in Migration&quot;,
        &quot;Multi-cloud strategy&quot;,
        &quot;Custom security solutions&quot;,
        &quot;Dedicated migration team&quot;,
        &quot;Advanced monitoring&quot;,
        &quot;Training and documentation&quot;,
        &quot;Ongoing optimization&quot;
      ],
      popular: false
    }
  ];

  const stats = [
    { number: &quot;99.9%&quot;, label: &quot;Uptime Guarantee&quot;, icon: <Shield className="w-6 h-6" /> },
    { number: &quot;50%&quot;, label: &quot;Cost Reduction&quot;, icon: <TrendingUp className="w-6 h-6" /> },
    { number: &quot;24/7&quot;, label: &quot;Support Available&quot;, icon: <Clock className="w-6 h-6" /> },
    { number: &quot;100+&quot;, label: &quot;Successful Migrations&quot;, icon: <Users className="w-6 h-6" /> }
  ];

const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: &quot;Zero-Downtime Migration&quot;,
      description: &quot;Seamless migration with no business interruption&quot;
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: &quot;Enhanced Security&quot;,
      description: &quot;Advanced security measures and compliance assurance&quot;
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: &quot;Cost Optimization&quot;,
      description: &quot;Significant cost reduction through cloud optimization&quot;
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: &quot;Performance Boost&quot;,
      description: &quot;Improved performance and scalability in the cloud&quot;
    }
  ];
  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | Professional Cloud Solutions</title>
        <meta name="description" content="Professional cloud migration services. Seamless, secure, and cost-effective cloud migration with zero downtime. Get your free assessment today!" />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud services, cloud consulting" />
        <meta property="og:title" content="Cloud Migration Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with professional cloud migration services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          
        <div className="absolute inset-0">
            
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
        <div className="container mx-auto px-4 relative z-10">
            
        <div className="text-center max-w-6xl mx-auto">
              
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 Cloud Migration Services
              </div>
              
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cloud Migration
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Seamless cloud migration with zero downtime. Reduce costs by 50%, 
                improve performance, and enhance security with our expert 
                cloud migration services.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
              {/* Stats */}
              
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    
        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    
        <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Our Cloud Migration Services?
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your business with professional cloud migration services
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Migration Services</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for a successful cloud migration
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  
        <div className="flex items-start space-x-4">
                    
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Cloud Providers Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Cloud Providers</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud platforms
              </p>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={provider.color}>{provider.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the service that fits your migration needs
              </p>
            </div>
            
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 hover:transform hover:scale-105`}>
                  {plan.popular && (
                    
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
        <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
          <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
        <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? &apos;Get Started&apos; : &apos;Choose Plan&apos;}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses that have successfully migrated to the cloud with our expert services.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                
          <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                  <Cloud className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CloudMigrationServicesPage;