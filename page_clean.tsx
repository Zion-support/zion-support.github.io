import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone } from 'lucide-react';
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticButton from "./components/FuturisticButton";
import ResponsiveContainer from "./components/ResponsiveContainer";
const HomePage = () => {,
  // const structuredData = {,
  //   "@context": "https://schema.org"
  //   "@type": "Organization"
  //   "name": "Zion Tech Group"
  //   "url": "https://ziontechgroup.com"
  //   "logo": "https://ziontechgroup.com/logo.svg"
  //   "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."
  //   "address": {,
  //     "@type": "PostalAddress"
  //     "streetAddress": "364 E Main St STE 1008"
  //     "addressLocality": "Middletown"
  //     "addressRegion": "DE"
  //     "postalCode": "19709"
  //     "addressCountry": "US"
  //   }
  //   "contactPoint": {,
  //     "@type": "ContactPoint"
  //     "telephone": "+1-302-464-0950"
  //     "contactType": "customer service"
  //     "email": "kleber@ziontechgroup.com"
  //   }
  //   "sameAs": [
  //     "https://twitter.com/ziontechgroup"
  //     "https://linkedin.com/company/ziontechgroup"]
  //   ]
  //   "offers": [
  //     {,
  //       "@type": "Offer"
  //       "name": "AI Solutions"
  //       "description": "Artificial intelligence and machine learning services"
  //     }
  //     {,
  //       "@type": "Offer"
  //       "name": "Cybersecurity"
  //       "description": "Advanced cybersecurity solutions and protection"
  //     }
  //     {,
  //       "@type": "Offer"
  //       "name": "Cloud Infrastructure"
  //       "description": "Cloud computing and infrastructure services"
  //     }]
  //   ]
  // };
  const features = [
    {,
      title: "AI-Powered Solutions"
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics"
      icon: <Brain className="w-8 h-8" /></Brain>
      color: "from-blue-500 to-cyan-500"
      stats: "40% efficiency boost"
      link: "/ai-services"
    }
    {,
      title: "IT Services"
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses"
      icon: <Shield className="w-8 h-8" /></Shield>
      color: "from-green-500 to-emerald-500"
      stats: "99.9% uptime SLA"
      link: "/services"
    }
    {,
      title: "Micro SAAS"
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools"
      icon: <Zap className="w-8 h-8" /></Zap>
      color: "from-purple-500 to-pink-500"
      stats: "50+ solutions"
      link: "/micro-saas"
    }
    {,
      title: "5G Solutions"
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations"
      icon: <Globe className="w-8 h-8" /></Globe>
      color: "from-orange-500 to-red-500"
      stats: "10x faster speeds"
      link: "/5g-solutions"
    },]
  ];
  const microSaasHighlights = [
    {,
      name: "Zion AI Meeting Transcriber"
      description: "Real-time meeting transcription with 99.5% accuracy, speaker identification, and automatic action item extraction"
      price: "From $19/month"
      icon: <Mail className="w-6 h-6" /></Mail>
      link: "/zion-ai-meeting-transcriber"
      featured: true;
    }
    {,
      name: "Zion AI Sales Predictor"
      description: "AI-powered sales forecasting with 95% accuracy, lead scoring, and customer behavior prediction"
      price: "From $39/month"
      icon: <TrendingUp className="w-6 h-6" /></TrendingUp>
      link: "/zion-ai-sales-predictor"
      featured: true;
    }
    {,
      name: "Zion Analytics Pro"
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics"
      price: "From $299/month"
      icon: <BarChart3 className="w-6 h-6" /></BarChart3>
      link: "/zion-analytics-pro"
      featured: true;
    }
    {,
      name: "Zion Security Shield"
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response"
      price: "From $499/month"
      icon: <Shield className="w-6 h-6" /></Shield>
      link: "/zion-security-shield"
      featured: true;
    }
    {,
      name: "Zion Cloud Vault"
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability"
      price: "From $99/month"
      icon: <Cloud className="w-6 h-6" /></Cloud>
      link: "/zion-cloud-vault"
      featured: true;
    }
    {,
      name: "Zion AI CRM Pro"
      description: "AI-powered customer relationship management with intelligent lead scoring and automation"
      price: "From $199/month"
      icon: <Users className="w-6 h-6" /></Users>
      link: "/zion-ai-crm-pro"
      featured: true;
    }]
  ];
  const stats = [
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> }
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> }
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> }
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }]
  ];
  const testimonials = [
    {,
      name: "Sarah Johnson"
      company: "TechStart Inc."
      role: "CEO"
      content: "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months."
      rating: 5;
    }
    {,
      name: "Michael Chen"
      company: "E-commerce Solutions"
      role: "CTO"
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools."
      rating: 5;
    }
    {,
      name: "Emily Rodriguez"
      company: "Digital Marketing Agency"
      role: "Operations Director"
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs."
      rating: 5;
    }]
  ];
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" /></div>
      <EnhancedSEO;
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      / /></EnhancedSEO>
      <FuturisticBackground / /></FuturisticBackground>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" /></section>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden" /></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" /></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" / />
        
        <ResponsiveContainer className="text-center relative z-10" /></ResponsiveContainer>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /></div>
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" / /></Sparkles>
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" /></h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" /></span>
              Transform Your Business with AI;
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center" /></p>
            Unlock the power of artificial intelligence, cybersecurity, and cloud solutions. 
            We help businesses scale, secure, and innovate with cutting-edge technology that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" /></div>
            <FuturisticButton;
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your AI Journey;
            </FuturisticButton>
            <FuturisticButton;
              href="/ai-services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Explore AI Solutions;
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto" />)
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" /></div>
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" /></div>
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>)
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
        <ResponsiveContainer /></ResponsiveContainer>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" /></h2>
              Our Core Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" /></p>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
            {features.map((feature, index) => (,
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
               /></div>
                <Link;
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                 /></Link>
                  <div;
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                   /></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors" /></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base" /></p>
                    {feature.description}
                  </p>
                  <div className="text-center" /></div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400" /></span>
                      {feature.stats}
                    </span>
                  </div>
                </Link>
              </div>)
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
              Featured Micro SAAS Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {microSaasHighlights.map((saas, index) => (,
              <Link;
                key={index}
                to={saas.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
               /></Link>
                {saas.featured && (,
                  <div className="absolute top-4 right-4" /></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold" / />
                  </div>)
                )}
                <div className="flex items-center mb-4" /></div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform" /></div>
                    {saas.icon}
                  </div>
                  <div className="flex-1" /></div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors" /></h3>
                      {saas.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{saas.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed" /></p>
                  {saas.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors" /></div>
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12" /></div>
            <Link;
              to="/micro-saas"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group"
             /></Link>
              View All Micro SAAS Solutions;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
              Trusted by Industry Leaders;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              See what our clients say about working with Zion Tech Group;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
            {testimonials.map((testimonial, index) => (,
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
               /></div>
                <div className="flex items-center mb-4" />)
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" / />)
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div /></div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" /></h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" /></p>
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" /></div>
            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /></div>
                <Mail className="w-6 h-6 text-white" / /></Mail>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /></div>
                <Smartphone className="w-6 h-6 text-white" / /></Smartphone>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /></div>
                <Globe className="w-6 h-6 text-white" / /></Globe>
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             /></Link>
              Start Your Journey;
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
            </Link>
            <Link;
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             /></Link>
              Explore Services;
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" / /></Sparkles>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;