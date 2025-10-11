
const ServiceCardPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ServiceCard
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))
        </div>
      </section>
import { ArrowRight, CheckCircle }  } from 'lucide-react';
interface ServiceCardProps {title: string;,}
  description: string;,
  features: string[],
  price?: string;
  popular?: boolean;
  onSelect?: () => void,
  className?: string;}const ServiceCard: React.FC<ServiceCardProps> = ({,
  title,
  description,
  features,
  price,
  popular = false,
  onSelect,
  className = ''}) => {return(<div className="{`bg-white/5" backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300 group ${className,)}${popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''}`}></div></div>{popular && (</div&gt;
        <div className="flex items-center gap-2 mb-4"&gt;</div&gt;
          <div className="w-2 h-2 bg-purple-400 rounded-full"&gt;</div&gt;</div&gt;
          <span className="text-purple-400 text-sm font-semibold"&gt;</span&gt;Most Popular</span&gt;
        </div&gt;
      )} <div className="mb-4"></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors"></h3></h3>,
          {title} </h3>
        <p className="text-gray-300 text-sm"></p></p>{description</p&gt;}</p>
      </div>
      <div className="space-y-2 mb-6"></div></div>{features.map((feature, index) => (</div>
          <div key={index}className="flex items-center gap-2"></div></div>
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm"></span></span>{feature</span&gt;}</span>
'use client'
import React from 'react'
import {  ArrowRight, CheckCircle  } from 'lucide-react'interface ServiceCardProps {
    title: string
  description: string
  features: string[]
  price?: string
  popular?: boolean
  onSelect?: () =&gt; void,
  className?: string
  }
const ServiceCard: React.FC<ServiceCardProps> = ()
}) => {
  return (
    </ServiceCardProps>< className="{`bg-white/5" backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${$2 /&gt;
      popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
    }`}>
      {popular && (
        </div&gt;<div className="flex items-center gap-2 mb-4"&gt;</div&gt;
          </div&gt;<div className="w-2 h-2 bg-purple-400 rounded-full"&gt;</div&gt;</div&gt;
          <span className="text-purple-400 text-sm font-semibold"&gt;</span&gt;Most Popular</span&gt;
        </div&gt;
      )}
      <div className="mb-4"></div>
        </div><h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3></h3>
  return ()
      )}
      <div className="mb-4" /></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors" /></h3>
          {title}
        </h3>
        <p className="text-gray-300 text-sm"></p></p>{description}</p>
      </div>
      <div className="space-y-2 mb-6"></div></div>
        {features.map((feature, index) => (
          </div><div key={index} className="flex items-center gap-2"></div></div>
            </div><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm"></span></span>{feature}</span>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServiceCardPage;
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">ServiceCard Title</h3>
      <p className="text-gray-300 mb-4">ServiceCard description goes here.</p>
      {children}
    </div>
  );
};

export default ServiceCard;
