<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React from "react",
import { Star } from "lucide-react",


import React from "react",
import { Star } from "lucide-react",


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";

import { Star } from "lucide-react";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import { Star } from "lucide-react";

import React from "react",
import { Star } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" }
    { value: "50K+", label: "Downloads" }
    { value: "96%", label: "User Satisfaction" }
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {Star} from "lucide-react";
import React from "react",
import { Star } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Star } from "lucide-react";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React from "react";
import { Star } from "lucide-react";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import React from "react";
import { Star } from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" },
  ];

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by the{" "}
            <span className="text-zion-cyan">Tech Community</span>
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            Join thousands of professionals who are already using the Zion
            mobile app to connect, hire, and work
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          ))}
        </div>

        {/* Rating display */}
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-zion-cyan"
                fill="currentColor"
              />
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  )

