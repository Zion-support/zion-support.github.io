import React from 'react';
import {ArrowRight} from 'lucide-react';
'use client'

const Enhanced Hero: React.FC = () => {
  constbenefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon- Fri 9 AM-6 PM PST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Map Pin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting'
    }
  ];
  return (
    <div className ="relativemin-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900overflow-hidden" />
      {/* BackgroundEffects */}
      <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" / />
      <div className ="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
      {/* Main Content */}
      <div className ="relative z-10 flex flex-col lg:flex-rowitems-centermin-h-screen" />
        {/* Left Content */}
        <div className ="flex-1 px-4 sm:px-6lg:px-8py-20" />
          <div className ="max-w-2xl" />
            <h1className ="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
              Transform Your Business with{' '}
              <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />AI & IT Solutions
              </span>
            </h1>
            
            <pclassName ="text-lg sm:text-xl text-gray-300mb-8leading-relaxed" />
              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
            <div className ="mb-8" />
              <h3className ="text-lg font-semiboldtext-whitemb-4"  >Why Choose Us?</h3>
              <div className ="grid grid-cols-1sm:grid-cols-2gap-3" />
                {benefits.map((benefit, index) => (
                  <divkey ="{index}" className="flexitems-centertext-gray-300" />
                    <Check Circleclass Name="h-5 w-5 text-cyan-400mr-3flex-shrink-0" / />
                    <spanclassName ="text-sm"  >{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className ="flex flex-col sm:flex-rowgap-4mb-8" />
              <buttonclassName ="cyber-button px-8 py-4 text-lg font-semibold inline-flexitems-centerjustify-center" />
                Get Started
                <Arrow Rightclass Name="ml-2h-5w-5" />
              </button>
              <buttonclassName ="cyber-button-secondary px-8 py-4text-lgfont-semibold"  />Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className ="grid grid-cols-1sm:grid-cols-3gap-4" />
              {contact Info.map((contact, index) => (
                <divkey ="{index}" className="flexitems-centertext-gray-300" />
                  <contact.iconclassName ="h-5 w-5 text-cyan-400mr-3flex-shrink-0" / />
                  <div />
                    <div className ="text-smfont-mediumtext-white"  >{contact.title}</div>
                    <div className ="text-xstext-gray-400"  >{contact.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className ="flex-1 px-4 sm:px-6lg:px-8py-20" />
          <div className ="relative" />
            {/* Floating Cards */}
            <div className ="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2 xl backdrop-blur-sm borderborder-cyan-500/30animate-float" />
              <div className ="p-6" />
                <Brainclass Name ="h-8 w-8text-cyan-400mb-3" / />
                <h3className ="text-lg font-boldtext-whitemb-2"  >AI Solutions</h3>
                <pclassName ="text-smtext-gray-300">Machine Learning & Analytics</p>
              </div>
            </div>

            <div className ="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30animate-float" style="{{" animationDelay: '1 s' }} />
              <div className ="p-6" />
                <Shieldclass Name ="h-8 w-8text-purple-400mb-3" / />
                <h3className ="text-lg font-boldtext-whitemb-2"  >Security</h3>
                <pclassName ="text-smtext-gray-300">Cybersecurity & Compliance</p>
              </div>
            </div>

            <div className ="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30animate-float" style="{{" animationDelay: '2 s' }} />
              <div className ="p-6" />
                <Globeclass Name ="h-8 w-8text-green-400mb-3" / />
                <h3className ="text-lg font-boldtext-whitemb-2"  >Cloud Services</h3>
                <pclassName ="text-smtext-gray-300">Infrastructure & Migration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};