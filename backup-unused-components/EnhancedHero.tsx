<<<<<<< HEAD
import React from 'react';

interface EnhancedHeroProps {
=======
import React from "react";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
interface EnhancedHeroProps;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: 
    text: string;
    href: string;
;
  secondaryCta?: 
    text: string;
    href: string;
;
  benefits?: string[];
  backgroundImage?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedHero({ className = '', children }: EnhancedHeroProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <div;
      className="{`relative" min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
          <div;
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style="{}" backgroundImage: `url(${backgroundImage})` {}
          />
  </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
          {/* Left Column */}
          <div className="space-y-8"></div>
            <div></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"></h1>
                {title}
              </h1>
              <p className="text-xl text-cyan-400 mb-4 font-semibold"></p>
                {subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8">{description}</p>
  </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4"></div>
              <Link;
                to={primaryCta.href}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                {primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to={secondaryCta.href}
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                {secondaryCta.text}
              </Link>
  </div>
            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4"></div>
              
                <div key="{index}" className="flex items-center text-gray-300"></div>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
  </div>  </div>
  </div>
          {/* Right Column - Contact Info */}
          <div className="space-y-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center"></h3>
                Get in Touch;
              </h3>
              <div className="space-y-4"></div>
                
                  <div key="{index}" className="flex items-start space-x-4"></div>
                    <div className="flex-shrink-0"></div>
                      <info.icon className="w-6 h-6 text-cyan-400" />
  </div>
                    <div></div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                      <p className="text-gray-400 text-sm"></p>
                        {info.description}
                      </p>
  </div>
  </div>  </div>
  </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4"></div>
              <div className="text-center"></div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
  </div>
              <div className="text-center"></div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
  </div>
              <div className="text-center"></div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}