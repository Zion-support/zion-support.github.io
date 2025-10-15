import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Brain, Volume2, Globe, Star, Settings, Headphones, Users, Smartphone, CheckCircle } from 'lucide-react';

const AiVoiceAssistantEnterprisePage: React.FC = () => {
  const [ setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);




export default function AIAutomatedTesting() {
  const features = [
    // ... features
  ];

  const useCases = [
  ];

  const pricingPlans = [
    // ... features
  ];

  const testimonials = [
  ];

  const languages = [
    { name: "English", flag: "🇺🇸", accuracy: "99.8%" },
    { name: "Spanish", flag: "🇪🇸", accuracy: "99.5%" },
    { name: "French", flag: "🇫🇷", accuracy: "99.3%" },
    { name: "German", flag: "🇩🇪", accuracy: "99.4%" },
    { name: "Chinese", flag: "🇨🇳", accuracy: "99.2%" },
    { name: "Japanese", flag: "🇯🇵", accuracy: "99.1%" },
    { name: "Arabic", flag: "🇸🇦", accuracy: "98.9%" },
    { name: "Portuguese", flag: "🇵🇹", accuracy: "99.3%" }
  ];
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Enterprise - Advanced Conversational AI | Zion Tech Group</title>
        <meta name="description" content="Transform customer interactions with our enterprise-grade AI voice assistant. 99.5% accuracy, 50+ languages, and seamless integration for modern businesses." />
        <meta name="keywords" content="AI voice assistant, conversational AI, voice recognition, speech synthesis, customer service, voice automation" />
        <meta property="og:title" content="AI Voice Assistant Enterprise - Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade AI voice assistant with advanced conversational capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant-enterprise" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        
        <div className="absolute inset-0">
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <section className="relative py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Voice Assistant <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Enterprise</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform customer interactions with our enterprise-grade AI voice assistant. 
                99.5% accuracy, 50+ languages, and seamless integration for modern businesses.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise Voice AI Features</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced conversational AI capabilities for enterprise applications
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  
        <div className="text-cyan-400 mb-4">
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  
          <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-white/5">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Voice AI solutions for every industry
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  
        <div className="text-cyan-400 mb-4">
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  
          <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">50+ Supported</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Global voice AI with exceptional accuracy across languages
              </p>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  
        <div className="text-2xl mb-2">{language.flag}</div>
                  
        <div className="text-white font-semibold mb-1">{language.name}</div>
                  
        <div className="text-cyan-400 text-sm">{language.accuracy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-white/5">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for businesses of all sizes
              </p>
            </div>
            
        <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/20'} relative`}>
                  
        <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
        <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    
          <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading organizations worldwide
              </p>
            </div>
            
        <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    
        <div className="font-semibold text-white">{testimonial.name}</div>
                    
        <div className="text-cyan-400">{testimonial.role}</div>
                    
        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Voice Experience?</h2>
              
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI voice technology to enhance customer interactions.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
}
}}