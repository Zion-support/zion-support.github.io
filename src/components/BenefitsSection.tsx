import React from 'react';
import { CheckCircle, Shield, Zap, Users, Clock, Award } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Proven Results",
      description: "We deliver measurable results with a 98% client satisfaction rate and proven ROI."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced threat protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Rapid deployment and implementation with minimal downtime for your business."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly at all times."
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized by leading industry organizations."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver 
            solutions that drive real business value and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of satisfied clients who trust us with their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;