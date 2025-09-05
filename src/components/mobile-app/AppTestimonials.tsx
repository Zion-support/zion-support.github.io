
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card",
=======
import React from &quot;react&quot;;
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from &quot;@/components/ui/card&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const testimonials = [
  {
    name: &quot;Alex Johnson&quot;,
    role: &quot;AI Developer&quot;,
    text: &quot;The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!&quot;,
    rating: 5,
    avatar: &quot;/placeholder.svg&quot;
  },
  {
    name: &quot;Sarah Williams&quot;,
    role: &quot;Tech Recruiter&quot;,
    text: &quot;As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.&quot;,
    rating: 5,
    avatar: &quot;/placeholder.svg&quot;
  },
  {
    name: &quot;Michael Chen&quot;,
    role: &quot;Full Stack Developer&quot;,
    text: &quot;I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.&quot;,
    rating: 4,
    avatar: &quot;/placeholder.svg&quot;
  }
],

export const AppTestimonials: React.FC = () => {
  return (
    <section className=&quot;py-16 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>What Our Users Say</h2>
          <p className=&quot;text-lg text-gray-300 max-w-2xl mx-auto&quot;>
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className=&quot;bg-zion-blue-dark border-zion-purple/30&quot;>
              <CardContent className=&quot;pt-6&quot;>
                <div className=&quot;flex mb-4&quot;>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? &quot;text-yellow-400 fill-yellow-400&quot; : &quot;text-gray-400&quot;}`}
                    />
                  ))}
                </div>
                <p className=&quot;text-gray-200 mb-6&quot;>&quot;{testimonial.text}&quot;</p>
              </CardContent>
              <CardFooter className=&quot;border-t border-zion-purple/20 pt-4&quot;>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;h-10 w-10 rounded-full overflow-hidden mr-4&quot;>
                    <img src={testimonial.avatar} alt={testimonial.name} className=&quot;h-full w-full object-cover&quot; loading=&quot;lazy&quot; />
                  </div>
                  <div>
                    <p className=&quot;font-semibold text-white&quot;>{testimonial.name}</p>
                    <p className=&quot;text-sm text-gray-400&quot;>{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </div>;
      </div>;
    </section>;
  );
};