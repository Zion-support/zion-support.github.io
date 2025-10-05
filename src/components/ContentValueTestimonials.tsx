import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  industry: string;
}

interface ContentValueTestimonialsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  showRating?: boolean;
  showIndustry?: boolean;
  maxTestimonials?: number;
}

const ContentValueTestimonials: React.FC<ContentValueTestimonialsProps> = ({
  className = '',
  title = 'What Our Clients Say',
  subtitle = 'Real results from real businesses that trust our solutions',
  testimonials = [],
  showRating = true,
  showIndustry = true,
  maxTestimonials = 6
}) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire AI infrastructure. The results exceeded our expectations with a 300% improvement in processing speed and 50% reduction in operational costs.',
      rating: 5,
      industry: 'Technology'
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'Global Finance Inc.',
      role: 'Head of Innovation',
      content: 'The AI solutions provided by Zion Tech Group have revolutionized our data analytics capabilities. We can now make data-driven decisions in real-time, giving us a significant competitive advantage.',
      rating: 5,
      industry: 'Finance'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      company: 'HealthTech Innovations',
      role: 'CEO',
      content: 'Working with Zion Tech Group was a game-changer for our healthcare platform. Their machine learning models improved our diagnostic accuracy by 40% and reduced patient wait times significantly.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      id: '4',
      name: 'David Thompson',
      company: 'RetailMax',
      role: 'VP of Operations',
      content: 'The automation solutions implemented by Zion Tech Group have streamlined our supply chain operations. We\'ve seen a 60% reduction in manual processes and a 25% increase in efficiency.',
      rating: 5,
      industry: 'Retail'
    },
    {
      id: '5',
      name: 'Lisa Wang',
      company: 'Manufacturing Plus',
      role: 'Operations Director',
      content: 'Zion Tech Group\'s predictive maintenance AI has saved us millions in unplanned downtime. The system predicts equipment failures with 95% accuracy, allowing us to schedule maintenance proactively.',
      rating: 5,
      industry: 'Manufacturing'
    },
    {
      id: '6',
      name: 'James Wilson',
      company: 'EduTech Solutions',
      role: 'Founder',
      content: 'The personalized learning AI developed by Zion Tech Group has transformed how we deliver education. Student engagement increased by 80% and learning outcomes improved dramatically.',
      rating: 5,
      industry: 'Education'
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials.slice(0, maxTestimonials) : defaultTestimonials.slice(0, maxTestimonials);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {showRating && (
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              )}

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                )}

                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {testimonial.company}
                  </div>
                  {showIndustry && (
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.industry}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentValueTestimonials;