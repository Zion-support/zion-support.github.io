import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const ContentValueTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI solutions provided by Zion Tech Group have revolutionized our operations. We\'ve seen a 300% increase in efficiency.',
      rating: 5,
      image: '/api/placeholder/60/60'
=======
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const ContentValueTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The AI solutions provided by Zion Tech Group have revolutionized our business operations. We\'ve seen a 300% increase in efficiency and significant cost savings.',
      rating: 5
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
    },
    {
      id: 2,
      name: 'Michael Chen',
<<<<<<< HEAD
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and cutting-edge technology. Our team productivity has increased dramatically.',
      rating: 5,
      image: '/api/placeholder/60/60'
=======
      company: 'Global Enterprises',
      role: 'VP of Operations',
      content: 'Outstanding service and cutting-edge technology. The team\'s expertise in enterprise automation has transformed our workflow completely.',
      rating: 5
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
<<<<<<< HEAD
      company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The AI automation tools have streamlined our processes and saved us countless hours of manual work.',
      rating: 5,
      image: '/api/placeholder/60/60'
=======
      company: 'Innovation Labs',
      role: 'Director of Technology',
      content: 'Working with Zion Tech Group has been a game-changer. Their cloud infrastructure solutions are robust, scalable, and perfectly tailored to our needs.',
      rating: 5
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8245
    <div className='bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-y border-emerald-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6'>
            <span className='text-emerald-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              💎 VALUE TESTIMONIALS
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
=======
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface ContentValueTestimonialsProps {
  testimonials?: Testimonial[];
  className?: string;
}

const ContentValueTestimonials: React.FC<ContentValueTestimonialsProps> = ({
  testimonials = [],
  className = ''
}) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Corp',
      content: 'Excellent service and great value for money.',
      rating: 5
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'CTO',
      company: 'Innovation Inc',
      content: 'Outstanding results and professional team.',
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <div className={`content-value-testimonials ${className}`}>
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say
            about our AI and technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
      </div>
    </div>
  );
};

export default ContentValueTestimonials;