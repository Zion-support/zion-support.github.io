
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react";
import {Star} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Star } from "lucide-react",
import { Card, CardContent, CardFooter } from "@/components/ui/card",

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  {
    name: "Sarah Williams"
    role: "Tech Recruiter"
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx


=======
    rating: 5
    avatar: "/placeholder.svg"
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
    name: "Sarah Williams",
    role: "Tech Recruiter",
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Michael Chen"
    role: "Full Stack Developer"
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
    rating: 4
    avatar: "/placeholder.svg"
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======


],



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
];
=======
],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
=======
<<<<<<< HEAD
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import { Star } from "lucide-react",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
<<<<<<< HEAD
    avatar: "/placeholder && placeholder.svg";
  };
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
    rating: 5,;
    avatar: "/placeholder && placeholder.svg";
  };
=======
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
<<<<<<< HEAD
    avatar: "/placeholder && placeholder.svg";
  }
];
export const AppTestimonials: React.FC = () => {;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
<<<<<<< HEAD
                  {Array.from({ length:5 }).map((_, i) => (;
                    <Star ;
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" :"text-gray-400"}`}
=======
                  {Array.from({ length: 5 }).map((_, i) => (;
                    <Star;
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    />;
                  ))}
                </div>;
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
<<<<<<< HEAD
<<<<<<< HEAD
                    <img src={testimonial && testimonial.avatar} alt={testimonial && testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial && testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial && testimonial.role}</p>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx

  );
};

=======
  );
};

=======
========
  );
};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/AppTestimonials.tsx
=======
        </div>;
      </div>;
    </section>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
