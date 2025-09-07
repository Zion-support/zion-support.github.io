import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 text-center">About Zion Tech Group</h1>
          
          <Card className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              We are dedicated to delivering cutting-edge technology solutions that transform businesses 
              and drive innovation. Our mission is to empower organizations with the tools and expertise 
              they need to thrive in the digital age.
            </p>
            <p className="text-lg text-gray-300">
              Through our comprehensive suite of AI, cybersecurity, cloud infrastructure, and digital 
              transformation services, we help companies stay ahead of the curve and achieve their goals.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be the leading provider of technology solutions that shape the future of business. 
              We envision a world where technology seamlessly integrates with human potential to create 
              unprecedented opportunities for growth and innovation.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Excellence</h3>
                <p className="text-gray-300">
                  We deliver the highest quality solutions that exceed expectations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients to achieve shared success.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-300">
                  We deliver solutions quickly without compromising quality.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Your data and systems are protected with enterprise-grade security.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
                <p className="text-gray-300">
                  We leverage the latest technologies to solve complex problems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;