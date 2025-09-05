import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our productivity by 300% and reduced costs by 40%. The team is incredibly professional and always available when we need them.',
      service: 'AI Business Intelligence Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'E-commerce Solutions',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'The cloud migration service was flawless. Zero downtime, perfect execution, and ongoing support that exceeds expectations. Our system performance improved dramatically, and we saved 50% on infrastructure costs.',
      service: 'Cloud Migration Service'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Growth Marketing Co.',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'Their email marketing automation platform revolutionized our campaigns. Open rates increased by 60% and conversion rates by 45%. The AI-powered personalization is game-changing for our business.',
      service: 'Email Marketing Automation'
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'Manufacturing Plus',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'The IoT solutions they implemented for our manufacturing process have been incredible. Real-time monitoring, predictive maintenance, and 30% reduction in downtime. ROI was achieved within 6 months.',
      service: 'IoT Solutions'
    },
    {
      name: 'Lisa Wang',
      role: 'Founder',
      company: 'Blockchain Ventures',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'Zion Tech Group developed our DeFi platform from concept to launch. Their blockchain expertise is unmatched. The smart contracts are secure, audited, and performing perfectly in production.',
      service: 'Blockchain Development'
    },
    {
      name: 'Robert Kim',
      role: 'IT Director',
      company: 'Healthcare Systems',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'The cybersecurity audit and implementation gave us complete peace of mind. HIPAA compliance achieved, security posture strengthened, and our patients\' data is fully protected. Highly recommend their services.',
      service: 'Cybersecurity Audit'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Customer Satisfaction' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Zion Tech Group.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Service Used */}
              <div className="bg-blue-50 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-blue-800 text-center">
                  Used: {testimonial.service}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Quote className="w-8 h-8" />
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "Zion Tech Group doesn't just provide services – they become your technology partner. 
              Their innovative solutions and unwavering support have been instrumental in our company's 
              digital transformation and continued growth."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                SJ
              </div>
              <div className="ml-6 text-left">
                <div className="text-xl font-semibold">Sarah Johnson</div>
                <div className="text-blue-200">CEO, TechStart Inc.</div>
                <div className="text-sm text-blue-100">Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;