'use client';
import Footer from "Footer";
import Navigation from './Navigation';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Brain , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
  ]
  const benefits = [
  'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {
  return (
    <>
      
    </>
      <Helmet> </Helmet><title>SystemMonitor</title>
        <meta name="description" content="Advanced SystemMonitor solution for modern businesses." /> </meta><meta name="keywords" content="AI, artificial intelligence, SystemMonitor, AI solutions, intelligent automation" /> </meta>
      <Navigation /> </Navigation><div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">{/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden"> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="relative max-w-7xl mx-auto text-center"> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
              SystemMonitor
            </h1>
            <p>Advanced SystemMonitor solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">,
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Learn More
              </button>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4"> </section><div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>Powerful AI-driven features designed to transform your business operations</p>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"> </div><feature.icon className="h-12 w-12 text-emerald-400 mb-4" /> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">{feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-300"> </li><CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />{benefit}
                      </CheckCircle>
                    ))}
                  </ul>
              ))}
            </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"> </section><div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p>Experience the benefits of cutting-edge AI technology</p>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"> </div><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /> </CheckCircle><p className="text-gray-300 text-lg">{benefit}</p>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"> </section><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Contact Sales
              </button>
          </div>
      </div>
      <Footer />

</Footer></>
  )
}

export default SystemMonitorPage

            </div>
    </div>
  )
;
  );

}
=======
}

export default SystemMonitorPage
  );
}