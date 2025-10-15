import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, FileText, Globe, Mail, Phone, Play, Shield, Star, Target, Wand2, Zap, Helmet } from 'lucide-react';

const AiContentGenerationProPage: React.FC = () => { const [isVisible, setIsVisible] = useState(false); useEffect(() => { setIsVisible(true); }, []);
""
const features = [ { icon: <Wand2 className="w-6 h-6" />, title: "AI-Powered Writing", description: "Generate high-quality content using advanced AI models trained on millions of articles and documents.", benefits: ["Natural language generation", "Context-aware writing", "Multiple writing styles", "Real-time suggestions"] }, { icon: <FileText className="w-6 h-6" />, title: "Multi-Format Support", description: "Create content in various formats including articles, blogs, social media posts, emails, and more.", benefits: ["Blog posts", "Social media content", "Email campaigns", "Product descriptions", "Press releases"] }, { icon: <Target className="w-6 h-6" />, title: "SEO Optimization", description: "Automatically optimize content for search engines with keyword integration and meta descriptions.", benefits: ["Keyword research", "SEO optimization", "Meta tag generation", "Content scoring", "Ranking suggestions"] }, { icon: <Globe className="w-6 h-6" />, title: "Multi-Language Support", description: "Generate content in over 50 languages with native-level quality and cultural adaptation.", benefits: ["50+ languages", "Cultural adaptation", "Localization", "Translation", "Regional preferences"] }, { icon: <Shield className="w-6 h-6" />, title: "Content Security", description: "Enterprise-grade security with plagiarism detection and content originality guarantees.", benefits: ["Plagiarism detection", "Originality guarantee", "Content encryption", "Access controls", "Audit trails"] }, { icon: <Zap className="w-6 h-6" />, title: "Real-Time Collaboration", description: "Work with your team in real-time with live editing, comments, and version control.", benefits: ["Live editing", "Team collaboration", "Version control", "Comments & feedback", "Approval workflows"] } ];
""
const pricingPlans = [ { name: "Starter", price: "$99", period: "month", description: "Perfect for small businesses and content creators", features: [ "10,000 words per month", "5 content templates", "Basic SEO optimization", "Email support", "Standard quality", "1 user account" ], popular: false }, { name: "Professional", price: "$199", period: "month", description: "Ideal for growing businesses with content needs", features: [ "50,000 words per month", "Unlimited templates", "Advanced SEO tools", "Priority support", "High quality content", "5 user accounts", "API access", "Custom integrations" ], popular: true }, { name: "Enterprise", price: "$499", period: "month", description: "Complete solution for large organizations", features: [ "Unlimited words", "Custom templates", "Full SEO suite", "24/7 dedicated support", "Premium quality", "Unlimited users", "Advanced API", "White-label options", "Custom training" ], popular: false } ];
""
const testimonials = [ { name: "Jennifer Martinez", company: "Content Marketing Co.", role: "Content Director", content: "The AI Content Generation Pro has revolutionized our content production. We've increased our output by 300% while maintaining quality.", rating: 5 }, { name: "David Kim", company: "TechStart Inc.", role: "Marketing Manager", content: "The SEO optimization features are incredible. Our organic traffic has increased by 150% since we started using this platform.", rating: 5 }, { name: "Sarah Thompson", company: "Global Media Group", role: "Editor-in-Chief", content: "The multi-language support has allowed us to expand into new markets effortlessly. The quality is consistently excellent.", rating: 5 } ];
  return (
    <>
      <Helmet> <title>AI Content Generation Pro - Advanced Content Creation | Zion Tech Group</title> <meta name="description" content="Transform your content strategy with AI-powered content generation. Create high-quality, SEO-optimized content at scale with our advanced AI writing platform." /> <meta name="keywords" content="AI content generation, content creation, AI writing, SEO content, content marketing, automated writing" /> <meta property="og:title" content="AI Content Generation Pro - Zion Tech Group" /> <meta property="og:description" content="Advanced AI-powered content generation platform for businesses" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/ai-content-generation-pro" /> </Helmet>
      <div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden>
        { /* Animated Background */ }
        
        <div className="absolute" inset-0>
          
        <div className="absolute" top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse></div>
          
        <div className="absolute" top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000></div>
          
        <div className="absolute" bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000></div>
        </div>
        { /* Grid Pattern */ }
        
        <div className="absolute" inset-0 opacity-20>
          
        <div className="h-full" w-full></div>
        </div>
        <main className="relative" z-10>
          { /* Hero Section */ }
          <section className="relative" py-20 overflow-hidden>
            
        <div className="container" mx-auto px-4>
              <div className="{" `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex" items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8>
                  <Star className="w-4" h-4 mr-2 />
                  #1 AI Content Platform
                </div>
                
          <h1 className="text-5xl" md:text-7xl font-bold text-white mb-6 leading-tight>
                  <span className="bg-gradient-to-r" from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent>
                    AI Content Generation Pro
                  </span>
                </h1>
                
          <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto>
                  Transform your content strategy with AI-powered writing that's faster, smarter, and more effective. 
                  Create high-quality, SEO-optimized content at scale.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center mb-12>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Get Started Today
                  </a>
                  <a"
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5" h-5 mr-2 />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900 relative>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Powerful Features
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Everything you need to create, optimize, and scale your content marketing efforts.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8>
                { features.map((feature, index) => (
                  <div 
                    key={index } "
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    
        <div className="w-16" h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300>
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl" font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300>
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex" items-center text-sm text-gray-300>
                          <CheckCircle className="w-4" h-4 text-green-400 mr-2 flex-shrink-0 />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Simple Pricing
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Choose the plan that fits your content needs. All plans include our core AI writing features.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8 max-w-6xl mx-auto>
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className="{" `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute" -top-4 left-1/2 transform -translate-x-1/2>
                        
        <div className="bg-gradient-to-r" from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold>
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center" mb-8>
                      <h3 className="text-2xl" font-bold text-white mb-2>{ plan.name }</h3>
                      
          <p className="text-gray-300" mb-4>{ plan.description }</p>
                      
        <div className="flex" items-baseline justify-center>
                        <span className="text-5xl" font-bold text-cyan-400>{ plan.price }</span>
                        <span className="text-gray-400" ml-2>/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4" mb-8>
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex" items-center text-gray-300>
                          <CheckCircle className="w-5" h-5 text-green-400 mr-3 flex-shrink-0 />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a"
                      href="tel:+13024640950"
                      className="{" `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4" h-4 ml-2 />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    What Our Clients Say
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Join thousands of content creators who have transformed their workflow with our AI platform.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8>
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex" items-center mb-4>
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5" h-5 text-yellow-400 fill-current />
                      ))}
                    </div>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold" text-white>{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400" text-sm>{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" max-w-4xl mx-auto>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  Ready to Transform Your Content?
                </h2>
                
          <p className="text-xl" text-gray-300 mb-8>
                  Start creating better content faster with AI. Get a free trial and see the difference for yourself.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Call +1 302 464 0950
                  </a>
                  <a"
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5" h-5 mr-2 />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default AiContentGenerationProPage;"