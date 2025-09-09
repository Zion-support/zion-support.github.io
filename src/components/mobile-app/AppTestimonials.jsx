import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
      name: "Dr. Emily Watson",
      role: "Data Scientist",
      comp: "AI Solutions Inc",
      rating: 5,
      content: "The mobile app's AI talent discovery feature is game-changing. I can find specialized experts for our projects in seconds, even while commuting.",
      avatar: "/images/testimonials/emily-watson.jpg"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      comp: "Digital Dynamics",
      rating: 5,
      content: "Managing multiple AI projects used to be a nightmare. With Zion's mobile app, I can track progress, assign tasks, and communicate with teams effortlessly.",
      avatar: "/images/testimonials/david-kim.jpg"

  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
            />
    ))};

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their AI workflows with the Zion mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((((((((testimonial, index, index, index, index, index, index, index) => ({ ...((((((testimonial, index, index, index, index, index, index, key: index })) => ({ ...(((((testimonial, index, index, index, index, index, key: index })) => ({ ...((((testimonial, index, index, index, index, key: index })) => ({ ...(((testimonial, index, index, index, key: index })) => ({ ...((testimonial, index, index, key: index })) => ({ ...(testimonial, index, key: index })) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.comp}</p>
                </div>
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img loading="lazy" src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover"/>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-400/30"       />
                <p className="text-gray-300 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>;
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Success Story
            </h3>
            <p className="text-gray-300 mb-6">
              See why thousands of professionals choose Zion for their AI talent and project management needs.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>);
};
