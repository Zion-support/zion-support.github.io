import React from 'react';
import { Star, TrendingUp, Users, Award, Clock, Target } from 'lucide-react';

interface ContentValueTestimonialsProps {
  className?: string;
}

export const ContentValueTestimonials: React.FC<ContentValueTestimonialsProps> = ({
  className = ""
}) => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechForward Inc.",
      avatar: "SC",
      quote: "The AI workflow automation guide helped us reduce manual tasks by 85%. The step-by-step implementation was exactly what we needed.",
      rating: 5,
      metric: "85% reduction in manual tasks",
      icon: TrendingUp,
      color: "green"
    },
    {
      name: "Michael Rodriguez",
      role: "Security Director",
      company: "SecureBank",
      avatar: "MR",
      quote: "Zion's Zero Trust implementation guide saved us months of planning. We achieved SOC 2 compliance in record time.",
      rating: 5,
      metric: "SOC 2 compliance in 3 months",
      icon: Award,
      color: "blue"
    },
    {
      name: "Jennifer Kim",
      role: "Head of Data Analytics",
      company: "DataDriven Corp",
      avatar: "JK",
      quote: "The edge AI insights helped us implement real-time analytics that improved our decision-making speed by 60%.",
      rating: 5,
      metric: "60% faster decision making",
      icon: Clock,
      color: "purple"
    },
    {
      name: "David Thompson",
      role: "VP of Engineering",
      company: "InnovateLab",
      avatar: "DT",
      quote: "The quantum computing business applications article opened our eyes to new possibilities. We're now exploring quantum optimization.",
      rating: 5,
      metric: "New quantum initiatives launched",
      icon: Target,
      color: "orange"
    }
  ];

  const stats = [
    { label: "Content Readers", value: "50,000+", icon: Users },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Implementation Success", value: "95%", icon: Award },
    { label: "Time Saved", value: "6 months avg", icon: Clock }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our insights and content have helped companies transform their operations and achieve measurable results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full border ${getColorClasses(testimonial.color)}`}>
                <testimonial.icon className="w-4 h-4 mr-2" />
                <span className="font-semibold">{testimonial.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real Results from Our Content</h3>
            <p className="text-blue-100 text-lg">
              Companies are implementing our insights and seeing immediate impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.5M</div>
              <div className="text-blue-100">Average cost savings from AI automation insights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6 months</div>
              <div className="text-blue-100">Average time saved in implementation planning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success rate for companies following our guides</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who trust Zion Tech Group for cutting-edge insights and proven implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Explore All Insights
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentValueTestimonials;