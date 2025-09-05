
import React from "react";

export const MobileFeatureShowcase: React.FC = () => {_const _features = [
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />, _title: "Hire from Anywhere", _description: "Browse and hire top AI talent on the go with a streamlined mobile interface."},
    {_icon: <Star className="h-8 w-8 text-zion-purple" />, _title: "AI-Match Instantly", _description: "Get matched with the perfect talent or jobs using our advanced AI algorithm."},
    {_icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />, _title: "Track Milestones", _description: "Monitor project progress and approve milestones directly from your phone."},
    {_icon: <Mail className="h-8 w-8 text-zion-purple" />, _title: "Instant Messaging", _description: "Chat with candidates or clients and receive notifications in real-time."},
    {_icon: <Smartphone className="h-8 w-8 text-zion-cyan" />, _title: "Biometric Security", _description: "Login quickly and securely with Face ID or Touch ID on supported devices."}
  ];

  return (_<section id="features" className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Everything You Need On The Go
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {_features.map((feature, _index) => (
            <div 
              key={index} 
              className="bg-zion-blue-dark border border-zion-blue-light p-6 rounded-lg hover:border-zion-purple/50 transition-all duration-300"
            >
              <div className="mb-4">
                {_feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{_feature.title}</h3>
              <p className="text-zion-slate-light">{_feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
