
<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from 'lucide-react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'

=======
import React from "react";
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import React from 'react'
import { Star } from 'lucide-react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const testimonials = [
  {
    name: 'Alex Johnson'
    role: 'AI Developer'
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!"
    rating: 5
    avatar: '/placeholder.svg'
  }
<<<<<<< HEAD
const testimonials = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const testimonials = [
  {
    name: "Alex Johnson",
    role: "AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg"
  },
<<<<<<< HEAD

=======
const testimonials = [

import React from "react",
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card",

const testimonials = [
  {
    name: "Alex Johnson",
    role: "AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg"
  },
const testimonials = [
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  {
=======
const testimonials = [
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    name: 'Sarah Williams'
    role: 'Tech Recruiter'
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.'
    rating: 5
    avatar: '/placeholder.svg'
  }
  {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    name: 'Michael Chen'
    role: 'Full Stack Developer'
    text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.'
    rating: 4
    avatar: '/placeholder.svg'
<<<<<<< HEAD
<<<<<<< HEAD
    avatar: '/placeholder.svg',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    name: "Michael Chen",
    role: "Full Stack Developer",
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",
    rating: 4,
    avatar: '/placeholder.svg',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },]
export const AppTestimonials: React.FC = () => {
  return (    avatar: "/placeholder.svg"
  }
]
export const AppTestimonials: React.FC = () => {
  return (
    <section className='py-16 bg-zion-blue'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            What Our Users Say
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Join thousands of satisfied users who have transformed their tech
            careers with the Zion mobile app.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='bg-zion-blue-dark border-zion-purple/30'
            >
              <CardContent className='pt-6'>
                <div className='flex mb-4'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card",

const testimonials = [
  {
    name: "Alex Johnson",
    role: "AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Sarah Williams",
    role: "Tech Recruiter",
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",
    rating: 4,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    avatar: "/placeholder.svg"
  }
];

export const AppTestimonials: React.FC = () => {;
  return (
    <section className='py-16 bg-zion-blue'>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;
            What Our Users Say;
          </h2>;
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>;
    <section className='py - 16 bg - zion - blue'>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 12'>;
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
            What Our Users Say;
          </h2>;
          <p className='text - lg text - gray - 300 max - w-2xl mx - auto'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Join thousands of satisfied users who have transformed their tech;
            careers with the Zion mobile app.;
          </p>;
        </div>;

];
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    avatar: "/placeholder.svg"
  }
],
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export const AppTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  ))}
=======
>>>>>>>                   ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <p className='font-semibold text-white'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>                  </div>
<<<<<<< HEAD
=======
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
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
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial && testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />;
                  ))}


                </div>
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
>>>>>>>                     <p className="font-semibold text-white">{testimonial.name}</p>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <p className="font-semibold text-white">{testimonial.name}</p>
>>>>>>>                     <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      </div>
    </section>;
  );
};
{";
  name: "Sarah Williams";"
role: "Tech Recruiter";"
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive."
rating: 5;"
avatar: "/placeholder.svg"
}
{"
  name: "Michael Chen";"
role: "Full Stack Developer";"
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
rating: 4;"
avatar: "/placeholder.svg"
}]
export const AppTestimonials: React.FC = () => {"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}</div> </div> </section>)
}
'"}
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
import React from "react",;
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
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
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}</div> </div> </section>) 
}
'"},

  );
};
import React from "react",;
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
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
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
