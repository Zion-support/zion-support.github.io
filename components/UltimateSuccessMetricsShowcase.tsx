import React, { useState, useEffect } from 'react';

const UltimateSuccessMetricsShowcase = () => {
  const [animatedCounters, setAnimatedCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    roi: 0,
    countries: 0,
    years: 0
  });

  const metrics = [
    {
      id: 'clients',
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Companies transformed worldwide',
      color: 'from-blue-500 to-cyan-500',
      icon: '👥'
    },
    {
      id: 'projects',
      value: 1200,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful implementations',
      color: 'from-green-500 to-emerald-500',
      icon: '🚀'
    },
    {
      id: 'satisfaction',
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Average satisfaction rating',
      color: 'from-purple-500 to-pink-500',
      icon: '⭐'
    },
    {
      id: 'roi',
      value: 340,
      suffix: '%',
      label: 'Average ROI',
      description: 'Return on investment',
      color: 'from-orange-500 to-red-500',
      icon: '💰'
    },
    {
      id: 'countries',
      value: 45,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global presence',
      color: 'from-indigo-500 to-purple-500',
      icon: '🌍'
    },
    {
      id: 'years',
      value: 8,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise',
      color: 'from-teal-500 to-cyan-500',
      icon: '⏰'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      image: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      quote: "Zion Tech Group transformed our entire operation. The AI automation they implemented increased our efficiency by 340% and saved us over $2M annually. Absolutely incredible results!",
      results: "340% efficiency increase, $2M+ savings"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateLabs",
      image: "/images/testimonials/michael-chen.jpg",
      rating: 5,
      quote: "Their AI solutions are game-changing. We went from manual processes to fully automated workflows in just 3 months. The ROI was visible within the first quarter.",
      results: "95% process automation, 3-month implementation"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Manufacturing Inc",
      image: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5,
      quote: "The predictive analytics platform they built for us has revolutionized our supply chain management. We've reduced costs by 25% while improving delivery times by 40%.",
      results: "25% cost reduction, 40% faster delivery"
    },
    {
      id: 4,
      name: "David Kim",
      position: "VP of Technology",
      company: "FinTech Innovations",
      image: "/images/testimonials/david-kim.jpg",
      rating: 5,
      quote: "Their AI security monitoring system caught threats we never knew existed. The peace of mind alone is worth the investment, but the cost savings are substantial too.",
      results: "100% threat detection, $500K+ prevented losses"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "RetailMax",
      image: "/images/testimonials/lisa-thompson.jpg",
      rating: 5,
      quote: "The AI content generation tools have been a game-changer for our marketing team. We're producing 5x more content with higher quality and better engagement rates.",
      results: "5x more content, 60% higher engagement"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Founder",
      company: "StartupXYZ",
      image: "/images/testimonials/james-wilson.jpg",
      rating: 5,
      quote: "As a startup, we needed cost-effective solutions that could scale. Zion Tech Group delivered exactly that. Their AI tools helped us compete with much larger companies.",
      results: "300% growth, enterprise-level capabilities"
    }
  ];

  const achievements = [
    {
      title: "AI Innovation Award 2024",
      organization: "Tech Industry Association",
      description: "Recognized for breakthrough AI automation solutions",
      icon: "🏆"
    },
    {
      title: "Best AI Consulting Firm",
      organization: "Global Tech Awards",
      description: "Top-rated AI consulting and implementation services",
      icon: "🥇"
    },
    {
      title: "Excellence in Customer Success",
      organization: "Customer Success Institute",
      description: "98% client satisfaction and retention rate",
      icon: "⭐"
    },
    {
      title: "Innovation in Enterprise AI",
      organization: "Enterprise Technology Council",
      description: "Leading enterprise AI transformation solutions",
      icon: "🚀"
    }
  ];

  // Animate counters on component mount
  useEffect(() => {
    const animateCounters = () => {
      metrics.forEach((metric) => {
        const target = metric.value;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedCounters(prev => ({
            ...prev,
            [metric.id]: Math.floor(current)
          }));
        }, 16);
      });
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📊 PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record of success is backed by measurable results, 
            satisfied clients, and industry recognition. See why companies 
            choose us for their AI transformation journey.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {animatedCounters[metric.id as keyof typeof animatedCounters]}{metric.suffix}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the leaders who've 
              transformed their businesses with our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-green-800">Key Results:</div>
                  <div className="text-sm text-green-700">{testimonial.results}</div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition & Awards
            </h3>
            <p className="text-lg text-gray-600">
              Our expertise and results have been recognized by leading industry organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <div className="text-sm font-semibold text-purple-600 mb-2">{achievement.organization}</div>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSuccessMetricsShowcase;