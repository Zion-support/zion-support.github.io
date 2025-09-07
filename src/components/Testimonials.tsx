import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. We\'ve seen a 300% increase in efficiency and our team productivity has never been higher.',
      rating: 5,
      avatar: '/testimonials/sarah-johnson.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'CTO, InnovateLab',
      content: 'Their cloud migration service was flawless. We were up and running in record time with zero downtime. The team\'s expertise is unmatched.',
      rating: 5,
      avatar: '/testimonials/mike-chen.jpg'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'VP Engineering, DataFlow',
      content: 'The data analytics platform they built for us has revolutionized how we make business decisions. ROI was achieved within the first quarter.',
      rating: 5,
      avatar: '/testimonials/emily-davis.jpg'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Founder, StartupXYZ',
      content: 'Working with Zion Tech Group was a game-changer. Their micro SaaS solutions helped us scale from 0 to 10,000 users in just 6 months.',
      rating: 5,
      avatar: '/testimonials/david-rodriguez.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white p-8 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < currentTestimonial.rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "{currentTestimonial.content}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
          </Card>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;