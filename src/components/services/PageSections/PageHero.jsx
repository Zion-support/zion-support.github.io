import React from 'react';
import { ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';

export const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  features = [], 
  ctaText = "Get Started",
  ctaLink = "#contact",
  backgroundImage = null,
  stats = []
}) => {
  const defaultFeatures = [
    {
      icon: Star,
      text: 'Professional Service',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      text: 'Expert Team',
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      text: '24/7 Support',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      text: 'Secure & Reliable',
      color: 'text-purple-500'
    }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;
  const displayStats = stats.length > 0 ? stats : [
    { value: '500+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '15+', label: 'Years Experience' }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
      )}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            {subtitle && (
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                {subtitle}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {displayFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <p className="text-sm text-gray-300 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {displayStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,8.77,158.84,3.79c62.64-5.35,111.72-16.85,189.56-5.4c43.7,6.76,87.2,25.69,113.42,54.49c28.53,31.84,47.02,79.55,69.18,127.13C470.34,300.37,518,340,580,360s89.6,12.47,132.1,10.69c56.12-2.46,118.07-31.46,172.41-90.69c32.84-35.7,50.42-85.32,50.42-149.6V0Z"
            fill="currentColor"
            opacity=".1"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8c40.92-19,84.73-46,130.83-49.67c36.26-2.85,70.9,9.42,98.6,31.56c31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5c22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="currentColor"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46c59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};