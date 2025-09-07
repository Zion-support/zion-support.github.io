<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
=======
<<<<<<< HEAD
import React from "react";
import {Star} from "lucide-react";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import { Star } from "lucide-react",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {Card, CardContent, CardFooter} from "@/components/ui/card";

<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const testimonials = [
  {
    name: "Alex Johnson"
    role: "AI Developer"
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!"
    rating: 5
<<<<<<< HEAD
=======
    avatar: "/placeholder.svg"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Star } from './lucide-react';

import { Card, CardContent, CardFooter } from '@/components / ui / card';
const testimonials = [;
  {"
    name: "Alex Johnson","
    role: "AI Developer",'"
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,"
    avatar: "/placeholder.svg";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  {"
    name: "Sarah Williams""
    role: "Tech Recruiter""
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
<<<<<<< HEAD
    rating: 5
    avatar: "/placeholder.svg"
  }
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },
  {"
    name: "Sarah Williams","
    role: "Tech Recruiter","
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",
    rating: 5,"
    avatar: "/placeholder.svg"
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {

    name: "Michael Chen"
    role: "Full Stack Developer"

    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
    rating: 4"
    avatar: "/placeholder.svg"

<<<<<<< HEAD
];
],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const AppTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.
          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => ("
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">"
              <CardContent className="pt-6">"

                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Star

                      key={i}

                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                </div>"
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>"
              <CardFooter className="border-t border-zion-purple/20 pt-4">"
                <div className="flex items-center">"
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">"
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>"
                    <p className="font-semibold text-white">{testimonial.name}</p>"
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>
                </div>
              </CardFooter>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
                    />;
                  ))}
                </div>;
                <p className=text-gray-200 mb-6">"{testimonial && testimonial.text}"</p>;
                  {Array.from({ length: 5}).map((_, i) => (
                    <Star 
                      key = $2;
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
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
    avatar: "/placeholder && placeholder.svg";
  };
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
    rating: 5,;
    avatar: "/placeholder && placeholder.svg";
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
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
    avatar: "/placeholder && placeholder.svg";
  }
];

export const AppTestimonials: React.FC = () => {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials && testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array && Array.from({ length: 5 }).map((_, i) => (;
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial && testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />;
                  ))}
                </div>;

                <p className="text-gray-200 mb-6">"{testimonial && testimonial.text}"</p>;
<<<<<<< HEAD

              </CardContent>;"
              <CardFooter className="border-t border-zion-purple/20 pt-4">;"
                <div className="flex items-center">;"
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
<<<<<<< HEAD
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
=======
                    <img src={testimonial && testimonial.avatar} alt={testimonial && testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial && testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial && testimonial.role}</p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </div>;
    </section>;
  );
};

<<<<<<< HEAD
=======
  );
};
    rating: 5,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    avatar: "/placeholder.svg";
  }
  {"
    name: "Michael Chen","
    role: "Full Stack Developer","
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",
    rating: 4,"

    avatar: "/placeholder.svg";
  }
];
;

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

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
