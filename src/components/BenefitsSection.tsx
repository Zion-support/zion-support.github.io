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
      description: "Optimized performance with 99.9% uptime and sub-second response times."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert Team",
      description: "Certified professionals with 10+ years of experience in AI and IT solutions."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "24/7 Support",
      description: "Round-the-clock support with dedicated account managers and rapid response times."
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized by leading technology organizations."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver 
            solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of companies that trust Zion Tech for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;