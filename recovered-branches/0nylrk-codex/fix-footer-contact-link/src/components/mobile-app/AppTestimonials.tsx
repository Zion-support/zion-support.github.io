
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
<<<<<<< HEAD

<<<<<<< HEAD

import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Star } from "lucide-react",
import { Card, CardContent, CardFooter } from "@/components/ui/card",




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const testimonials = [
  {
    name: "Alex Johnson"
    role: "AI Developer"
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!"
    rating: 5
    avatar: "/placeholder.svg"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Star } from './lucide-react';
import { Card, CardContent, CardFooter } from '@/components / ui / card';
const testimonials = [;
  {
    name: "Alex Johnson",
    role: "AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    name: "Sarah Williams"
    role: "Tech Recruiter"
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
<<<<<<< HEAD
<<<<<<< HEAD
    rating: 5
    avatar: "/placeholder.svg"
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    rating: 5
    avatar: "/placeholder.svg"
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  {
    name: "Sarah Williams",
    role: "Tech Recruiter",
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    name: "Michael Chen"
    role: "Full Stack Developer"
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
    rating: 4
    avatar: "/placeholder.svg"
  }
<<<<<<< HEAD


],



<<<<<<< HEAD
];
],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
];
],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const AppTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;

          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
<<<<<<< HEAD
<<<<<<< HEAD
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    avatar: "/placeholder && placeholder.svg";
  };
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
    rating: 5,;
    avatar: "/placeholder && placeholder.svg";
  };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
;
const testimonials = [;
  {;
    name:"Alex Johnson",;
    role:"AI Developer",;
    text:"The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating:5,;
    avatar:"/placeholder.svg";
  },;
  {;
    name:"Sarah Williams",;
    role:"Tech Recruiter",;
    text:"As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating:5,;
    avatar:"/placeholder.svg";
  },;
  {;
    name:"Michael Chen",;
    role:"Full Stack Developer",;
    text:"I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating:4,;
    avatar:"/placeholder.svg";
  }
],;
;
export const AppTestimonials:React.FC = () => {;
  return (;
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    avatar: "/placeholder && placeholder.svg";
  }
];

export const AppTestimonials: React.FC = () => {;
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => (;
                    <Star;
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />;
                  ))}
                </div>;
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials && testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array && Array.from({ length: 5 }).map((_, i) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial && testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />;
                  ))}
                </div>;
                <p className="text-gray-200 mb-6">"{testimonial && testimonial.text}"</p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
<<<<<<< HEAD
<<<<<<< HEAD
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <img src={testimonial && testimonial.avatar} alt={testimonial && testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial && testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial && testimonial.role}</p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD

  );
};
    rating: 5,
    avatar: "/placeholder.svg";
  }
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",
    rating: 4,
    avatar: "/placeholder.svg";
  }
];
;
export const AppTestimonials: React.FC = () => {
  return (
    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">What Our Users Say</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {testimonials.map ((testimonial, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - purple / 30">;
              <CardContent className="pt - 6">;
                <div className="flex mb - 4">;
                  {Array.from ({ length: 5 }).map ((_, i) => (
                    <Star;
                      key={i}
                      className={`h - 5 w - 5 ${i < testimonial.rating ? "text - yellow - 400 fill - yellow - 400" : "text - gray - 400"}`}
                    />))}
                </div>;
                <p className="text - gray - 200 mb - 6">"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className="border - t border - zion - purple / 20 pt - 4">;
                <div className="flex items - center">;
                  <div className="h - 10 w - 10 rounded - full overflow - hidden mr - 4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h - full w - full object - cover" />;
                  </div>;
                  <div>;
                    <p className="font - semibold text - white">{testimonial.name}</p>;
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
;
<<<<<<< HEAD
  ),;
},; const testimonials = [ {
  name: "Alex Johnson";
role: "AI Developer";
text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!";
rating: 5;
avatar: "/placeholder.svg" 
};
{
  name: "Sarah Williams";
role: "Tech Recruiter";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
rating: 5;
avatar: "/placeholder.svg" 
};
{
  name: "Michael Chen";
role: "Full Stack Developer";
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.";
rating: 4;
avatar: "/placeholder.svg" 
}];
export const AppTestimonials: React.FC = () => {
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > 
}</div> </div> </section>) 
};
        </div>;
      </div>;
    </section>;
  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
