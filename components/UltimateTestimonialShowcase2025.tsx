'use client';

import React, { useState, useEffect } from 'react';

const UltimateTestimonialShowcase2025 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      company: "TechCorp Global",
      industry: "Manufacturing",
      image: "/images/testimonial-sarah-johnson.jpg",
      rating: 5,
      testimonial: "Zion Tech Group transformed our entire manufacturing operation. The AI automation system they implemented increased our efficiency by 85% and saved us over $2.3M annually. Their expertise and dedication to our success was exceptional.",
      results: {
        efficiency: "85%",
        costSavings: "$2.3M",
        timeSaved: "40 hours/week"
      },
      project: "AI Manufacturing Automation",
      duration: "18 months"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Chief Medical Officer",
      company: "MedTech Solutions",
      industry: "Healthcare",
      image: "/images/testimonial-michael-chen.jpg",
      rating: 5,
      testimonial: "The AI diagnostic platform revolutionized our patient care. We can now diagnose conditions 80% faster with 98% accuracy. The team's understanding of healthcare challenges and AI solutions was remarkable.",
      results: {
        accuracy: "98%",
        timeReduction: "80%",
        patientSatisfaction: "92%"
      },
      project: "AI Diagnostic Platform",
      duration: "12 months"
    },
    {
      id: 3,
      name: "Lisa Thompson",
      position: "Principal",
      company: "EduTech Academy",
      industry: "Education",
      image: "/images/testimonial-lisa-thompson.jpg",
      rating: 5,
      testimonial: "Student engagement increased by 95% with their personalized learning platform. Our teachers can now focus on teaching instead of administrative tasks. The impact on our students' learning outcomes has been incredible.",
      results: {
        engagement: "95%",
        learningOutcomes: "85%",
        teacherEfficiency: "70%"
      },
      project: "AI Learning Management System",
      duration: "16 months"
    },
    {
      id: 4,
      name: "David Park",
      position: "Supply Chain Manager",
      company: "RetailMax Chain",
      industry: "Retail",
      image: "/images/testimonial-david-park.jpg",
      rating: 5,
      testimonial: "The AI forecasting system eliminated stockouts completely and reduced excess inventory by 65%. Our profit margins increased by 23%. The ROI was achieved in just 6 months.",
      results: {
        stockouts: "0%",
        inventoryReduction: "65%",
        profitIncrease: "23%"
      },
      project: "AI Supply Chain Optimization",
      duration: "14 months"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      image: "/images/testimonial-emily-rodriguez.jpg",
      rating: 5,
      testimonial: "Document processing automation reduced our manual work by 92%. We can now process 10x more documents in half the time. The accuracy and reliability of their solutions exceeded our expectations.",
      results: {
        efficiency: "92%",
        processingSpeed: "10x",
        accuracy: "99.5%"
      },
      project: "Document Processing Automation",
      duration: "10 months"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Chief Engineer",
      company: "PowerGrid Systems",
      industry: "Energy",
      image: "/images/testimonial-james-wilson.jpg",
      rating: 5,
      testimonial: "The smart grid optimization reduced waste by 80% and outages by 85%. We saved $40M annually while improving service reliability. Their technical expertise in energy systems was outstanding.",
      results: {
        wasteReduction: "80%",
        outageReduction: "85%",
        costSavings: "$40M"
      },
      project: "Smart Grid Optimization",
      duration: "20 months"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💬 TESTIMONIALS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our AI and automation solutions. 
            Real results from real clients.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full translate-y-36 -translate-x-36"></div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto lg:mx-0 mb-6">
                  {currentTestimonialData.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTestimonialData.name}</h3>
                <p className="text-lg text-indigo-600 font-semibold mb-2">{currentTestimonialData.position}</p>
                <p className="text-gray-600 mb-4">{currentTestimonialData.company}</p>
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">{currentTestimonialData.project}</span> • {currentTestimonialData.duration}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed mb-8">
                  "{currentTestimonialData.testimonial}"
                </blockquote>

                {/* Results */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {Object.entries(currentTestimonialData.results).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.testimonial.substring(0, 150)}..."
              </blockquote>

              <div className="text-sm text-gray-500">
                <span className="font-semibold">{testimonial.project}</span> • {testimonial.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and automation solutions. 
            Join the ranks of satisfied clients who have transformed their businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View All Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateTestimonialShowcase2025;