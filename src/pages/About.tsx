import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cybersecurity, 
            and cloud infrastructure. Our mission is to transform businesses through innovative technology.
          </p>
        </div>

{/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card 
            title="Our Mission" 
            description="To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age." 
          />
          <Card 
            title="Our Vision" 
            description="To be the global leader in AI-powered technology solutions, transforming how businesses operate and compete in the modern world." 
          />
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Innovation" description="We constantly push the boundaries of what's possible with technology." />
            <Card title="Excellence" description="We deliver the highest quality solutions and services to our clients." />
            <Card title="Integrity" description="We operate with honesty, transparency, and ethical business practices." />
            <Card title="Collaboration" description="We work closely with our clients as partners in their success." />
            <Card title="Security" description="We prioritize the protection and privacy of our clients' data." />
            <Card title="Growth" description="We are committed to continuous learning and improvement." />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">K</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kleber</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Team</h3>
              <p className="text-gray-600">Machine Learning Engineers</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Team</h3>
              <p className="text-gray-600">Cybersecurity Experts</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
</div>
  );
};

export default About;
