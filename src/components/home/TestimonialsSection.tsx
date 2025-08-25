import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  testimonials = [] 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations and the team was incredibly professional throughout the entire process.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Industries',
      content: 'Working with Zion Tech Group was a game-changer for our company. Their innovative approach to technology solutions helped us achieve significant cost savings and efficiency improvements.',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'Startup Ventures',
      content: 'Zion Tech Group delivered exceptional results on our digital transformation project. Their expertise in AI and cloud solutions is unmatched in the industry.',
      rating: 5
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'IT Manager',
      company: 'Enterprise Solutions',
      content: 'The team at Zion Tech Group is incredibly knowledgeable and responsive. They helped us implement cutting-edge cybersecurity solutions that have significantly improved our security posture.',
      rating: 5
    },
    {
      id: '5',
      name: 'Lisa Wang',
      role: 'VP of Technology',
      company: 'Innovation Corp',
      content: 'Zion Tech Group\'s micro SAAS solutions have revolutionized how we handle customer data. The implementation was smooth and the results were immediate.',
      rating: 5
    }
  ];

  const finalTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % finalTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + finalTestimonials.length) % finalTestimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [finalTestimonials.length]);

  const currentTestimonial = finalTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Zion Tech Group.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-blue-600" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="font-semibold text-gray-900 text-lg">
                {currentTestimonial.name}
              </div>
              <div className="text-gray-600">
                {currentTestimonial.role} at {currentTestimonial.company}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {finalTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Trusted by leading companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-semibold">Fortune 500</div>
            <div className="text-gray-400 font-semibold">Startups</div>
            <div className="text-gray-400 font-semibold">Government</div>
            <div className="text-gray-400 font-semibold">Healthcare</div>
            <div className="text-gray-400 font-semibold">Finance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
