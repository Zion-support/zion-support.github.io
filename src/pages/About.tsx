import React from 'react';

const About: React.FC = ()  => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Zion Tech Group</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            We are a leading technology company specializing in AI-powered solutions,
            micro SaaS platforms, and comprehensive IT services.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg text-gray-300">
              <strong className="text-white">Founded in 2020</strong> | <strong className="text-white">500+ Projects Delivered</strong> | <strong className="text-white">99.9% Client Satisfaction</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive
              innovation, efficiency, and growth. We believe in the transformative
              power of AI and modern software architecture.
            </p>
            <p className="text-gray-300">
              Our team of expert engineers, data scientists, and business strategists
              work together to deliver solutions that not only meet today&apos;
s needs but
              anticipate tomorrow&apos;
s challenges.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10+ years of industry experience</li>
              <li>• 500+ successful projects</li>
              <li>• 99.9% uptime guarantee</li>
              <li>• 24/7 customer support</li>
              <li>• Enterprise-grade security</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300">Advanced AI solutions including NLP, computer vision, and predictive analytics.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Micro SaaS Development</h3>
              <p className="text-gray-300">Scalable SaaS platforms with modern architecture and cloud-native design.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>
              <p className="text-gray-300">Complete IT solutions including cloud migration, DevOps, and cybersecurity.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Innovation:</strong> We stay at the forefront of technology trends and continuously explore new possibilities.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Quality:</strong> We deliver exceptional solutions that exceed client expectations.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Transparency:</strong> We maintain open communication and provide clear project updates.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Partnership:</strong> We work closely with clients as strategic technology partners.
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
                <div className="text-gray-300">
                  <strong className="text-white">Discovery:</strong> Understanding your business needs and goals
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
                <div className="text-gray-300">
                  <strong className="text-white">Strategy:</strong> Developing a comprehensive technology roadmap
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
                <div className="text-gray-300">
                  <strong className="text-white">Development:</strong> Building and implementing your solution
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</div>
                <div className="text-gray-300">
                  <strong className="text-white">Support:</strong> Ongoing maintenance and optimization
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;
s discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );

};

export default About;