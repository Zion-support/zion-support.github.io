import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }
  };

  const features = [
    { icon: "🕐", text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: "🌍", text: "Global Coverage", color: "text-zion-purple" },
    { icon: "🔒", text: "Certified Technicians", color: "text-zion-cyan" },
    { icon: "⚡", text: "Fast Response", color: "text-zion-purple" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
                Global IT Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6">
              24x7 Global IT
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Onsite Services
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-lg">
              Request professional technicians anywhere in the world, anytime you need them. 
              Fast, reliable, and secure IT support services.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-zion-slate-light">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-zion-blue-light/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-zion-purple/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Request IT Service
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Service Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city, state, or country"
                  className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 text-white placeholder-zion-slate-light transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25"
              >
                Request Service
              </button>
            </form>
            
            <p className="text-xs text-center text-zion-slate-light mt-4">
              Available worldwide, 24 hours a day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
