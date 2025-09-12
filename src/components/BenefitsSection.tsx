import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of experienced professionals brings deep expertise in AI, cloud computing, and digital transformation.",
      icon: "👥",
      stats: "50+ Experts"
    },
    {
      title: "Proven Results",
      description: "We've successfully delivered 500+ projects with a 99% client satisfaction rate and measurable business impact.",
      icon: "📈",
      stats: "500+ Projects"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support ensures your systems run smoothly and any issues are resolved quickly.",
      icon: "🛡️",
      stats: "24/7 Available"
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, from startup to enterprise scale, ensuring long-term value.",
      icon: "🚀",
      stats: "Unlimited Scale"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through our expertise, proven track record, and commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="text-2xl font-bold text-blue-600">
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;