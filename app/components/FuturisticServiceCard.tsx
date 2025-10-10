'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>FuturisticServiceCard | Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>FuturisticServiceCard;</span>
              </span>
              <br>
              <span className="text-white">Solutions</span>
            </h1>
            <p>Transform your business with our advanced futuristicservicecard solutions.;)</p>
              Powered by cutting-edge AI technology and industry expertise.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>Get Started</button>
                <ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More</button>
              </button>
            </div>
          </div>
        </div>
  )
}
export default FuturisticServiceCardPage;