
<<<<<<< HEAD
import React from "react",;
import { Star } from 'lucide-react';
;
export const CommunityTrust:React.FC = () => {;
  // Stats display with social proof;
  const stats = [;
    { value:"4.8", label:"App Store Rating" },;
    { value:"50K+", label:"Downloads" },;
    { value:"96%", label:"User Satisfaction" },;
    { value:"12M+", label:"Matches Made" }
  ],;
;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold text-white">;
            Trusted by the <span className="text-zion-cyan">Tech Community</span>;
          </h2>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>;
        </div>;
        ;
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">;
          {stats.map((stat, index) => (;
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">;
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>;
              <div className="text-zion-slate-light">{stat.label}</div>;
            </div>;
=======
import React from "react",import { Star } from 'lucide-react'

export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" }
  ],  ];

  return (
    <section className=&quot;py-16 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
            Trusted by the <span className=&quot;text-zion-cyan&quot;>Tech Community</span>
          </h2>
          <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16&quot;>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-zion-cyan mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-zion-slate-light&quot;>{stat.label}</div>            </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          ))}
        </div>;
        ;
        {/* Rating display */}
<<<<<<< HEAD
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">;
          <div className="flex justify-center mb-4">;
            {[1, 2, 3, 4, 5].map((star) => (;
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />;
            ))}
          </div>;
          <blockquote className="text-center text-lg text-white italic mb-4">;
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className="text-center">;
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>;
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>;
  ),;
},;
=======
        <div className=&quot;max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6&quot;>
          <div className=&quot;flex justify-center mb-4&quot;>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className=&quot;w-6 h-6 text-zion-cyan&quot; fill=&quot;currentColor&quot; />            ))}
          </div>
          <blockquote className=&quot;text-center text-lg text-white italic mb-4&quot;>
            &quot;The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere.&quot;
          </blockquote>
          <div className=&quot;text-center&quot;>
            <div className=&quot;font-semibold text-zion-cyan&quot;>Sarah Johnson</div>
            <div className=&quot;text-sm text-zion-slate-light&quot;>CTO at TechFlow</div>
          </div>
        </div>
      </div>
    </section>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
