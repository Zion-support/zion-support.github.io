import React from 'react';
import { Award, Building2, CheckCircle, Star, TrendingUp, Users } from 'lucide-react';

const EnterpriseSuccessBanner: React.FC = () => {
  const successMetrics = [
    { icon: Building2, value: "500+", label: "Enterprise Clients", color: "text-blue-600" },
    { icon: TrendingUp, value: "300%", label: "Average ROI", color: "text-green-600" },
    { icon: Users, value: "50K+", label: "Users Transformed", color: "text-purple-600" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee", color: "text-orange-600" }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire digital infrastructure. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "Their AI solutions increased our operational efficiency by 400%. Absolutely game-changing.",
      author: "Michael Chen",
      role: "CEO, InnovateLabs",
      rating: 5
    },
    {
      quote: "The best technology partner we've ever worked with. Highly recommended!",
      author: "Emily Rodriguez",
      role: "VP Operations, GlobalTech",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 rounded-full px-4 py-2 mb-6 border border-yellow-400/30">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">ENTERPRISE SUCCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by Industry Leaders
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of Fortune 500 companies that have transformed their operations 
            with our cutting-edge AI and technology solutions.
          </p>
        </div>
        
        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20">
                <metric.icon className={`h-8 w-8 ${metric.color.replace('text-', 'text-white')}`} />
              </div>
              <div className={`text-3xl font-bold ${metric.color.replace('text-', 'text-white')} mb-2`}>
                {metric.value}
              </div>
              <div className="text-blue-200 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-blue-100 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-blue-200 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 rounded-full px-4 py-2 mb-6 border border-green-500/30">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">READY TO TRANSFORM YOUR BUSINESS?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSuccessBanner;