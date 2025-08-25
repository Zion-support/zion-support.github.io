import React, { useState, useEffect } from 'react';
import { 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Brain,
  ArrowRight,
  Building
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
  results: string[];
  logo: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team is incredibly professional and always goes above and beyond.',
      rating: 5,
      avatar: '/images/avatars/sarah-johnson.jpg',
      industry: 'Technology',
      results: ['40% cost reduction', '300% performance improvement', 'Zero downtime'],
      logo: '/images/logos/techflow-solutions.png'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'VP of Engineering',
      company: 'Global Innovations Inc.',
      content: 'Working with Zion Tech Group has been a game-changer for our business. Their quantum computing solutions and AI algorithms have given us a competitive edge in the market. The implementation was smooth and the results exceeded our expectations.',
      rating: 5,
      avatar: '/images/avatars/michael-chen.jpg',
      industry: 'Manufacturing',
      results: ['25% efficiency gain', 'Market leadership', 'Innovation breakthrough'],
      logo: '/images/logos/global-innovations.png'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'Director of Operations',
      company: 'HealthTech Pro',
      content: 'Zion Tech Group\'s cybersecurity solutions are top-notch. They helped us achieve SOC2 compliance in record time while implementing advanced threat detection systems. Our security posture has never been stronger.',
      rating: 5,
      avatar: '/images/avatars/emily-rodriguez.jpg',
      industry: 'Healthcare',
      results: ['SOC2 compliance', 'Advanced security', 'Zero breaches'],
      logo: '/images/logos/healthtech-pro.png'
    },
    {
      id: '4',
      name: 'David Thompson',
      position: 'CEO',
      company: 'FinTech Dynamics',
      content: 'The micro-SaaS solution developed by Zion Tech Group has revolutionized our operations. The platform is scalable, secure, and user-friendly. Our team productivity has increased by 60% since implementation.',
      rating: 5,
      avatar: '/images/avatars/david-thompson.jpg',
      industry: 'Financial Services',
      results: ['60% productivity boost', 'Scalable platform', 'User adoption'],
      logo: '/images/logos/fintech-dynamics.png'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve remarkable results and drive innovation.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-500/20">
                <Quote className="w-24 h-24" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-8">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(currentTestimonialData.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {currentTestimonialData.name}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {currentTestimonialData.position} at {currentTestimonialData.company}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                        {currentTestimonialData.industry}
                      </span>
                    </div>
                  </div>

                  {/* Company Logo Placeholder */}
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                  "{currentTestimonialData.content}"
                </blockquote>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentTestimonialData.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/80 hover:bg-gray-700/90 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/80 hover:bg-gray-700/90 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,200+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Industries Served</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;