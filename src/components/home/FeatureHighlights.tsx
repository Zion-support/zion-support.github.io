import React from 'react';

export function FeatureHighlights() {
  const highlights = [
    {
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols and compliance standards to protect your data and systems.',
      icon: '🛡️'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.',
      icon: '🔄'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible infrastructure that grows with your business needs and requirements.',
      icon: '📈'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise technology solutions.',
      icon: '👥'
    },
    {
      title: 'Innovation Focus',
      description: 'Stay ahead with cutting-edge technologies and forward-thinking solutions.',
      icon: '💡'
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations and measurable business outcomes.',
      icon: '✅'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and innovation drives everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                  {highlight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}