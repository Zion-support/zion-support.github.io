
import React from "react";

export const CommunityTrust: React.FC = () => {_// Stats display with social proof
  const _stats = [
    { value: "4.8", _label: "App Store Rating"},
    {_value: "50K+", _label: "Downloads"},
    {_value: "96%", _label: "User Satisfaction"},
    {_value: "12M+", _label: "Matches Made"}
  ];

  return (_<section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by the <span className="text-zion-cyan">Tech Community</span>
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            Join thousands of professionals who are already using the Zion mobile app to connect, _hire, _and work
          </p>
        </div>
        
        {_/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {_stats.map((stat, _index) => (
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{_stat.value}</div>
              <div className="text-zion-slate-light">{_stat.label}</div>
            </div>
          ))}
        </div>
        
        {_/* Rating display */}
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
          <div className="flex justify-center mb-4">
            {_[1, _2, _3, _4, _5].map(_(star) => (
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-center text-lg text-white italic mb-4">
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere."
          </blockquote>
          <div className="text-center">
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
};
