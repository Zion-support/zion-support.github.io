import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, ArrowRight, Sparkles, CheckCircle, Globe, Settings } from 'lucide-react';
const DataCenterServicesPage = () => {,
  const benefits = [
    "99.99% uptime guarantee"
    "Enterprise-grade security"
    "24/7 technical support"
    "Scalable infrastructure"
    "Global data center network"
    "Compliance certified"]
  ];
  const features = [
    {,
      title: "Enterprise Data Centers"
      description: "State-of-the-art data centers with 99.99% uptime and enterprise-grade security"
      icon: <Server className="w-8 h-8" /></Server>
      color: "from-blue-500 to-cyan-500"
    }
    {,
      title: "Cloud Migration"
      description: "Seamless migration to cloud infrastructure with zero downtime and data loss"
      icon: <Globe className="w-8 h-8" /></Globe>
      color: "from-green-500 to-emerald-500"
    }
    {,
      title: "Disaster Recovery"
      description: "Comprehensive backup and disaster recovery solutions to protect your data"
      icon: <Shield className="w-8 h-8" /></Shield>
      color: "from-purple-500 to-pink-500"
    }
    {,
      title: "24/7 Monitoring"
      description: "Round-the-clock monitoring and support to ensure optimal performance"
      icon: <Settings className="w-8 h-8" /></Settings>
      color: "from-orange-500 to-red-500"
    }]
  ];
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" /></div>
      <Helmet /></Helmet>
        <title>Data Center Services - Zion Tech Group</title>
        <meta name="description" content="Professional data center services including enterprise hosting, cloud migration, disaster recovery, and 24/7 monitoring for optimal performance." / /></meta>
        <meta name="keywords" content="data center services, enterprise hosting, cloud migration, disaster recovery, server management, infrastructure" / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/data-center-services" / /></link>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" /></section>
        <div className="absolute inset-0 overflow-hidden" /></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" /></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" / />
        
        <div className="max-w-7xl mx-auto text-center relative z-10" /></div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /></div>
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" / /></Sparkles>
            <span className="text-cyan-400 text-sm font-medium">Enterprise Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" /></h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" /></span>
              Data Center Services;
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
            Reliable, secure, and scalable data center solutions for your business. 
            From enterprise hosting to cloud migration, we provide the infrastructure you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" /></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             /></Link>
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
            </Link>
            <Link;
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             /></Link>
              Watch Demo;
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" / /></Sparkles>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" /></h2>
              Enterprise Data Center Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" /></p>
              Our data center services provide the reliability, security, and performance;
              your business needs to thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />)
            {features.map((feature, index) => (,
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               /></div>
                <div;
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                 /></div>
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors" /></h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base" /></p>
                  {feature.description}
                </p>
              </div>)
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
              Why Choose Our Data Centers?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the benefits of enterprise-grade data center services;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" /></div>
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" / /></CheckCircle>
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>)
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" /></h2>
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" /></p>
            Join thousands of businesses trusting our data center services. 
            Get reliable, secure, and scalable infrastructure today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             /></Link>
              Start Your Project;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
            </Link>
            <Link;
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             /></Link>
              Schedule Demo;
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" / /></Sparkles>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DataCenterServicesPage;