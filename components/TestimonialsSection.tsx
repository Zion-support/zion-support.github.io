import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      position: "CTO",
      content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions helped us reduce costs by 40% while improving efficiency. Highly recommended!",
      rating: 5,
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "StartupXYZ",
      position: "Founder",
      content: "The team at Zion Tech Group delivered an exceptional micro SaaS solution that scaled perfectly with our growth. Their expertise is unmatched.",
      rating: 5,
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      company: "Enterprise Solutions",
      position: "VP of Technology",
      content: "Outstanding cybersecurity implementation. They identified vulnerabilities we didn't even know existed and provided comprehensive protection.",
      rating: 5,
      image: "/images/testimonials/emily-rodriguez.jpg"
    },
    {
      id: "4",
      name: "David Kim",
      company: "Global Corp",
      position: "IT Director",
      content: "The cloud migration was seamless. Zion Tech Group's expertise in AWS and Azure saved us months of work and potential downtime.",
      rating: 5,
      image: "/images/testimonials/david-kim.jpg"
    },
    {
      id: "5",
      name: "Lisa Thompson",
      company: "Innovation Labs",
      position: "Head of Development",
      content: "Their AI development services are top-notch. The machine learning models they built for us are delivering incredible results.",
      rating: 5,
      image: "/images/testimonials/lisa-thompson.jpg"
    },
    {
      id: "6",
      name: "Robert Wilson",
      company: "Data Systems",
      position: "CEO",
      content: "Professional, reliable, and innovative. Zion Tech Group has been our technology partner for over two years and we couldn't be happier.",
      rating: 5,
      image: "/images/testimonials/robert-wilson.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;