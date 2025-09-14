import React from 'react';
import Image from 'next/image';

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechFlow Solutions",
      image: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      testimonial: "Zion Tech Group transformed our entire operation. Their AI automation solutions increased our productivity by 400% while reducing costs by 60%. The ROI was evident within the first month.",
      results: "400% productivity increase60% cost reduction"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateCorp",
      image: "/images/testimonials/michael-chen.jpg",
      rating: 5,
      testimonial: "The quantum-neural computing implementation was revolutionary. We're now solving complex problems in minutes that previously took days. This is the future of business intelligence.",
      results: "1000% faster problem solving"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Manufacturing Ltd",
      image: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5,
      testimonial: "Their autonomous business ecosystem completely changed how we operate. Our systems now self-optimize and self-healreducing downtime by 95%. It's like having a team of AI experts working 24/7.",
      results: "95% downtime reduction"
    },
    {
      name: "David Kim",
      position: "VP of Technology",
      company: "FutureTech Industries",
      image: "/images/testimonials/david-kim.jpg",
      rating: 5,
      testimonial: "The synthetic intelligence networks they implemented have accelerated our innovation pipeline by 500%. We're now developing solutions that were previously impossible.",
      results: "500% innovation acceleration"
    },
    {
      name: "Lisa Thompson",
      position: "Chief Innovation Officer",
      company: "NextGen Systems",
      image: "/images/testimonials/lisa-thompson.jpg",
      rating: 5,
      testimonial: "Working with Zion Tech Group was a game-changer. Their neural interface solutions have enhanced our team's cognitive capabilities beyond what we thought possible.",
      results: "300% cognitive enhancement"
    },
    {
      name: "Robert Williams",
      position: "Founder & CEO",
      company: "OmniData Corp",
      image: "/images/testimonials/robert-williams.jpg",
      rating: 5,
      testimonial: "The omniversal data networks they built for us provide insights from dimensions we never knew existed. Our competitive advantage is now insurmountable.",
      results: "Unprecedented market advantage"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💬 CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our cutting-edge AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonialindex) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-purple-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-green-800 font-semibold text-sm">
                  📈 Key Results: {testimonial.results}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Be the next industry leader to transform your business with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;