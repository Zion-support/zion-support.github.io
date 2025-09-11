import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Williams',
    role: 'Tech Recruiter',
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.',
    rating: 5,
    avatar: '/placeholder.svg'
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.',
    rating: 4,
    avatar: '/placeholder.svg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    text: 'The AI matching is incredibly accurate. I found my dream job within a week of using the app. Highly recommended!',
    rating: 5,
    avatar: '/placeholder.svg'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const AppTestimonials: React.FC = () => {
  return (
    <div className="py-16 bg-zion-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users are saying about our mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppTestimonials;