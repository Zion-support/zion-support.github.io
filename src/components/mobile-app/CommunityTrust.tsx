<<<<<<< HEAD

import React from "react";
import { Star } from 'lucide-react'
=======
import { Star } from 'lucide-react'
<<<<<<< HEAD
import React from 'react'; import { Star } from 'lucide-react'
import React from "react"

import React from "react";

import { Star } from 'lucide-react';

import React from 'react'; import { Star } from 'lucide-react'
import React from "react"

import React from "react";
import React from "react",
import { Star } from 'lucide-react'
=======

import { Star } from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { value: '4.8', label: 'App Store Rating' }
    { value: '50K+', label: 'Downloads' }
    { value: '96%', label: 'User Satisfaction' }
    { value: '12M+', label: 'Matches Made' }
=======

import { Star } from 'lucide-react';
import { Star } from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;
    { value: '4 && 4.8', label: 'App Store Rating' },;
    { value: '50K+', label: 'Downloads' },;
    { value: '96%', label: 'User Satisfaction' },;
    { value: '12M+', label: 'Matches Made' },;
  ];


  return (
    <section className='py-16 bg-zion-blue'>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold text-white'>;
            Trusted by the{' '}

            <span className='text-zion-cyan'>Tech Community</span>;
          </h2>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>;
import React from 'react'; import { Star } from 'lucide-react';
import React from './react';
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof;
  const stats = [;


    { value: '4.8', label: 'App Store Rating' },
    { value: '50K+', label: 'Downloads' },
    { value: '96%', label: 'User Satisfaction' },
    { value: '12M+', label: 'Matches Made' },

        </div>;


        {/* Rating display */}
        <div className='max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6'>;
          <div className='flex justify-center mb-4'>;
            {[1, 2, 3, 4, 5].map(star => (;
              <Star
        {/* Stats Grid */}
        <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16'>;
          {stats.map ((stat, index) => (
            <div;
              key={index}
              className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center';
            >;
              <div className='text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2'>;
                {stat.value}
              </div>;
              <div className='text - zion - slate - light'>{stat.label}</div>            </div>))}
        </div>;
        {/* Rating display */}
        <div className='max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6'>;
          <div className='flex justify - center mb - 4'>;
            {[1, 2, 3, 4, 5].map (star => (
              <Star;
                key={star}
                className='w - 6 h - 6 text - zion - cyan';
                fill='current_color';
              />            ))}



  ]
>>>>>>> merged-prs-20250907-203621
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" }
<<<<<<< HEAD
  ];

  return (
    <section className="py-16 bg-zion-blue">
=======
  ],

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




  return (
>>>>>>> merged-prs-20250907-203621
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by the <span className="text-zion-cyan">Tech Community</span>
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work
          </p>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center'
            >
              <div className='text-3xl md:text-4xl font-bold text-zion-cyan mb-2'>
                {stat.value}
              </div>
              <div className='text-zion-slate-light'>{stat.label}</div>            </div>
          ))}
        </div>
        {/* Rating display */}
        <div className='max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6'>
          <div className='flex justify-center mb-4'>
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                className='w-6 h-6 text-zion-cyan'
                fill='currentColor'
              />            ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
          <blockquote className='text-center text-lg text-white italic mb-4'>;
            "The Zion app has completely changed how I find tech talent. The AI;
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className='text-center'>;
            <div className='font-semibold text-zion-cyan'>Sarah Johnson</div>;
            <div className='text-sm text-zion-slate-light'>CTO at TechFlow</div>          </div>;
        </div>;
      </div>;
    </section>;
          <div className="text-center">;
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>;
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>;

>>>>>>> merged-prs-20250907-203621
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
<<<<<<< HEAD
          ))}
        </div>
        
=======
import React from "react",;
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;
    { value: "4.8", label: "App Store Rating" },;
    { value: "50K+", label: "Downloads" },;
    { value: "96%", label: "User Satisfaction" },;
    { value: "12M+", label: "Matches Made" }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
          ))}
<<<<<<< HEAD
        </div>;
=======

        </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        {/* Rating display */}
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />
            ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  )
};
=======
          <div className="text-center">
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>
  ]
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by the <span className="text-zion-cyan">Tech Community</span>
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Rating display */}
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />
            ))}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center'
            >
              <div className='text-3xl md:text-4xl font-bold text-zion-cyan mb-2'>
                {stat.value}
              </div>
              <div className='text-zion-slate-light'>{stat.label}</div>            </div>
          ))}
        </div>
        {/* Rating display */}
        <div className='max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6'>
          <div className='flex justify-center mb-4'>
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                className='w-6 h-6 text-zion-cyan'
                fill='currentColor'
              />            ))}
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
  )
}</div>) )
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>)
}
'"  )
}

<<<<<<< HEAD
  )
},
}</div>) ) 
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>) ;
};
'"  );
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
  );
}</div>) ) ;

  )
},

<<<<<<< HEAD
  )
},
  )
},
  )
},
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}</div>) ) 
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>) ;
};
'"  );
};



};

          </div>;
          <blockquote className='text - center text - lg text - white italic mb - 4'>;
            "The Zion app has completely changed how I find tech talent. The AI;
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className='text - center'>;
            <div className='font - semibold text - zion - cyan'>Sarah Johnson</div>;
            <div className='text - sm text - zion - slate - light'>CTO at TechFlow</div>          </div>;
        </div>;
      </div>;
    </section>;
          <div className="text - center">;
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
  ];
  return (
    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold text - white">;
            Trusted by the <span className="text - zion - cyan">Tech Community</span>;
          </h2>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>;
        </div>;
        {/* Stats Grid */}
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16">;
          {stats.map ((stat, index) => (
            <div key={index} className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center">;
              <div className="text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2">{stat.value}</div>;
              <div className="text - zion - slate - light">{stat.label}</div>;
            </div>))}
        </div>;
        {/* Rating display */}
        <div className="max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6">;
          <div className="flex justify - center mb - 4">;
            {[1, 2, 3, 4, 5].map ((star) => (
              <Star key={star} className="w - 6 h - 6 text - zion - cyan" fill="current_color" />))}
          </div>;
          <blockquote className="text - center text - lg text - white italic mb - 4">;
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere.";
          </blockquote>;
          <div className="text - center">;
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>);
}</div>) );
}</div> <blockquote className="text - center text - lg text - white italic mb - 4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text - center" > <div className="font - semibold text - zion - cyan" >Sarah Johnson</div> <div className="text - sm text - zion - slate - light" >CTO at TechFlow</div> </div> </div> </div> </section>);
}
'"  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
