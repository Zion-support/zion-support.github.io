import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function SocialProofShowcase() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'CEOTechCorp Global',
      company: 'Fortune 500 Technology',
      content: 'The AI 2025 Ultimate Breakthrough Revolution transformed our entire operation. We achieved 18,500% ROI in just 6 months. This is the most revolutionary technology I\'ve ever seen.',
      metrics: '18,500% ROI',
      image: 'SC',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      title: 'Chief Scientific Officer',
      company: 'QuantumPharma Inc.',
      content: 'Our quantum computing breakthrough reduced drug discovery time from 10 years to 3.6 days. We identified 5 new potential cancer treatments in the first month.',
      metrics: '1,000x Faster',
      image: 'MR',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      name: 'Jennifer Walsh',
      title: 'CTOFinanceFirst Bank',
      company: 'Global Banking Corporation',
      content: 'Quantum-powered fraud detection systems reduced false positives by 95% while catching 100% of actual fraud attempts. Our security is now unbreakable.',
      metrics: '99.9% Accuracy',
      image: 'JW',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'VP of Operations',
      company: 'ManufacturingMax Ltd.',
      content: 'The autonomous systems mastery completely revolutionized our production line. We achieved 99.9% quality control accuracy with 24/7 operation.',
      metrics: '99.9% Quality',
      image: 'DK',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const successMetrics = [
    { label: 'Companies 'Transformed', 'value: '500+'icon: '🏢' },
    { label: 'Average ROI 'Achieved', 'value: '15,000%'icon: '📈' },
    { label: 'Countries 'Served', 'value: '50+'icon: '🌍' },
    { label: 'Success 'Rate', 'value: '99.9%'icon: '✅' }
  ];

  const logos = [
    { name: ''Microsoft', 'logo: 'MS' },
    { name: ''Google', 'logo: 'GO' },
    { name: ''Amazon', 'logo: 'AM' },
    { name: ''Tesla', 'logo: 'TS' },
    { name: ''Meta', 'logo: 'ME' },
    { name: ''Apple', 'logo: 'AP' }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proven ResultsRevolutionary Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary AI technologies have transformed businesses worldwide
            delivering unprecedented results and breakthrough performance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metricindex) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logoindex) => (
              <div key={index} className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                {logo.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
                  {testimonial.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Highlights */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Revolutionary Case Studies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-2">Manufacturing Revolution</h4>
              <p className="text-gray-300 mb-4">
                Fortune 500 manufacturer achieved 99.9% quality control accuracy with fully autonomous production lines.
              </p>
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                2,500% ROI
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold mb-2">Healthcare Breakthrough</h4>
              <p className="text-gray-300 mb-4">
                Leading hospital system reduced diagnostic errors by 95% using AI-powered medical imaging.
              </p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                95% Accuracy
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2">Financial Optimization</h4>
              <p className="text-gray-300 mb-4">
                Global bank achieved 99.9% fraud detection accuracy while reducing false positives by 95%.
              </p>
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold">
                99.9% Security
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join the Revolution
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            'Don', 't just read about our success stories. Become one. Join thousands of companies 
            already experiencing the revolutionary power of our AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-transform"
            >
              Start Your Success Story
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-blue-500 text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-blue-500 hover:text-white transition-colors"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}