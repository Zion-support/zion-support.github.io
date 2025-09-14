import React from 'react';
import Link from 'next/link';

const SuccessMetricsShowcase2025 = () => {
  const metrics = [
    {
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Average client satisfaction rating across all projects',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '340%',
      label: 'Average ROI',
      description: 'Average return on investment for our clients',
      icon: '📈',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock support and monitoring',
      icon: '🛡️',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      title: 'Fortune 500 Client',
      description: 'Successfully implemented AI solutions for multiple Fortune 500 companies',
      impact: '+$50M in revenue increase'
    },
    {
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Innovation" by TechCrunch and featured in MIT Technology Review',
      impact: 'Global recognition'
    },
    {
      title: 'Patent Portfolio',
      description: 'Developed and filed 25+ patents in AI and quantum computing technologies',
      impact: 'Innovation leadership'
    },
    {
      title: 'Global Expansion',
      description: 'Expanded operations to 15+ countries with local expertise and support',
      impact: 'Worldwide presence'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business operations with their AI solutions. We saw a 400% increase in efficiency within the first quarter.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "SJ"
    },
    {
      quote: "The quantum computing implementation exceeded our expectations. The ROI was visible within months of deployment.",
      author: "Michael Chen",
      role: "CTO, Quantum Solutions Inc.",
      avatar: "MC"
    },
    {
      quote: "Their neural interface technology revolutionized our customer experience. We're now industry leaders in innovation.",
      author: "Emily Rodriguez",
      role: "VP Innovation, FutureTech",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">📊 PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Success Metrics & Achievements
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our track record speaks for itself. See how we've helped organizations 
            achieve unprecedented success with cutting-edge technology solutions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.number}
              </div>
              <div className="text-xl font-semibold mb-2">{metric.label}</div>
              <div className="text-sm opacity-80">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Major Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Major Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <h4 className="text-2xl font-bold mb-4">{achievement.title}</h4>
                <p className="text-gray-200 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="inline-flex items-center bg-green-500 bg-opacity-20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Impact: {achievement.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-gray-200 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Ready to Achieve Similar Success?</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join the ranks of successful organizations that have transformed their operations 
              with our cutting-edge technology solutions. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Explore Our Solutions
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetricsShowcase2025;