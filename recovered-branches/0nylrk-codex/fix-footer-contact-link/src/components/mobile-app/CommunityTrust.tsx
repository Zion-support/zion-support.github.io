<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { Star } from "lucide-react";

import React from "react",
import { Star } from "lucide-react",
=======


import React from "react",
import { Star } from "lucide-react",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" }
    { value: "50K+", label: "Downloads" }
    { value: "96%", label: "User Satisfaction" }
<<<<<<< HEAD
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {Star} from "lucide-react";
import React from "react",
import { Star } from "lucide-react",
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" };
  ];
    { value: "12M+", label: "Matches Made" }
  ];
  ],

  return (

import React from './react';
import { Star  } from './lucide-react';
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof;
  const stats = [;
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" },
  ];
;
  return (
    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold text - white">;
            Trusted by the{" "}
            <span className="text - zion - cyan">Tech Community</span>;
          </h2>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
            Join thousands of professionals who are already using the Zion;
            mobile app to connect, hire, and work;
          </p>;
        </div>;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Stats Grid */}
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16">;
          {stats.map ((stat, index) => (
            <div;
              key={index}
              className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center";
            >;
              <div className="text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2">;
                {stat.value}
<<<<<<< HEAD
              </div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
import React from "react",;
import { Star } from "lucide-react",;
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;
    { value: "4.8", label: "App Store Rating" },;
    { value: "50K+", label: "Downloads" },;
    { value: "96%", label: "User Satisfaction" },;
    { value: "12M+", label: "Matches Made" }
  ];
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
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">;
          {stats.map((stat, index) => (;
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">;
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>;
              <div className="text-zion-slate-light">{stat.label}</div>;
            </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          ))}
        </div>
=======
              </div>;
              <div className="text - zion - slate - light">{stat.label}</div>;
            </div>))}
        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Rating display */}
        <div className="max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6">;
          <div className="flex justify - center mb - 4">;
            {[1, 2, 3, 4, 5].map ((star) => (
              <Star;
                key={star}
<<<<<<< HEAD

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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">;
          {stats && stats.map((stat, index) => (;
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">;
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat && stat.value}</div>;
              <div className="text-zion-slate-light">{stat && stat.label}</div>;
            </div>;
          ))}
        </div>;

        {/* Rating display */}
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">;
          <div className="flex justify-center mb-4">;
            {[1, 2, 3, 4, 5].map((star) => (;
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />;
            ))}
          </div>
          <blockquote className="text-center text-lg text-white italic mb-4">
            "The Zion app has completely changed how I find tech talent. The AI
            matching is spot on and I can manage everything from anywhere."
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

<<<<<<< HEAD
  )
},
};
},
=======
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                className="w - 6 h - 6 text - zion - cyan";
                fill="current_color";
              />))}
          </div>;
          <blockquote className="text - center text - lg text - white italic mb - 4">;
            "The Zion app has completely changed how I find tech talent. The AI;
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className="text - center">;
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>);
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
