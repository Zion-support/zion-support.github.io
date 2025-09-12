import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      company: "TechStart Inc.",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions helped us automate 80% of our manual processes, saving us over $200K annually. The team's expertise and dedication are unmatched.",
      rating: 5,
      project: "AI Automation & Cloud Migration"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The cybersecurity solutions provided by Zion Tech Group gave us complete peace of mind. They implemented a comprehensive security framework that protected us from multiple attempted breaches. Highly recommended!",
      rating: 5,
      project: "Cybersecurity Implementation"
    },
    {
      id: 3,
      name: "Emily Chen",
      company: "DataDriven Solutions",
      role: "Data Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Their data analytics platform revolutionized how we make business decisions. We now have real-time insights that have improved our revenue by 35%. The ROI was evident within the first quarter.",
      rating: 5,
      project: "Data Analytics & BI Platform"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Manufacturing Plus",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The digital transformation project exceeded all our expectations. Zion Tech Group streamlined our entire workflow, reducing operational costs by 40% while improving efficiency. Outstanding work!",
      rating: 5,
      project: "Digital Transformation"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Healthcare Innovations",
      role: "IT Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "Their cloud migration strategy was flawless. We achieved 99.9% uptime and reduced our infrastructure costs by 60%. The team's attention to detail and healthcare compliance expertise was impressive.",
      rating: 5,
      project: "Cloud Migration & Compliance"
    },
    {
      id: 6,
      name: "James Wilson",
      company: "RetailMax",
      role: "VP of Technology",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Zion Tech Group's AI-powered customer service solution increased our customer satisfaction by 45%. The implementation was smooth, and the results were immediate. They truly understand business needs.",
      rating: 5,
      project: "AI Customer Service Platform"
    }
  ];

  const successMetrics = [
    { metric: "500+", label: "Projects Completed" },
    { metric: "150+", label: "Happy Clients" },
    { metric: "99%", label: "Client Satisfaction" },
    { metric: "24/7", label: "Support Available" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Zion Tech Group.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {successMetrics.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {item.metric}
              </div>
              <div className="text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
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

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform Optimization",
                description: "Increased conversion rates by 40% through AI-powered personalization",
                metric: "40%",
                metricLabel: "Conversion Increase"
              },
              {
                title: "Healthcare Data Migration",
                description: "Successfully migrated 2TB of patient data with zero downtime",
                metric: "0",
                metricLabel: "Downtime Hours"
              },
              {
                title: "Financial Services Security",
                description: "Implemented comprehensive security framework preventing 100% of attacks",
                metric: "100%",
                metricLabel: "Attack Prevention"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {story.metric}
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {story.metricLabel}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {story.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;