<<<<<<< HEAD
import React from 'react';import { Star } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

import React from "react";
import { Star } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

import React from "react";
import { Star } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Star } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    { value: '4.8', label: 'App Store Rating' },
    { value: '50K+', label: 'Downloads' },
    { value: '96%', label: 'User Satisfaction' },
    { value: '12M+', label: 'Matches Made' },
<<<<<<< HEAD
=======
=======
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  return (
    <section className='py-16 bg-zion-blue'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Trusted by the{' '}
            <span className='text-zion-cyan'>Tech Community</span>
          </h2>
          <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
            Join thousands of professionals who are already using the Zion
            mobile app to connect, hire, and work
          </p>
        </div>

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
              <div className='text-zion-slate-light'>{stat.label}</div>
            </div>
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
              />
            ))}
          </div>
          <blockquote className='text-center text-lg text-white italic mb-4'>
            "The Zion app has completely changed how I find tech talent. The AI
            matching is spot on and I can manage everything from anywhere."
          </blockquote>
<<<<<<< HEAD
          <div className='text-center'>
            <div className='font-semibold text-zion-cyan'>Sarah Johnson</div>
            <div className='text-sm text-zion-slate-light'>CTO at TechFlow</div>          </div>
        </div>
      </div>
    </section>
=======
<<<<<<< HEAD
          <div className='text-center'>
            <div className='font-semibold text-zion-cyan'>Sarah Johnson</div>
            <div className='text-sm text-zion-slate-light'>CTO at TechFlow</div>
=======
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" }
  ];

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
          </div>
          <blockquote className="text-center text-lg text-white italic mb-4">
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere."
          </blockquote>
          <div className="text-center">
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="text-center">
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );
}</div>) ) ;
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>) ;
};
<<<<<<< HEAD
'"
=======
'"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
