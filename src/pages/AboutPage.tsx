import React from 'react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to deliver cutting-edge AI, micro SaaS, and IT solutions that transform businesses."
        keywords="about zion tech group, AI company, IT services company, technology consulting"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Zion Tech Group is a leading provider of enterprise-grade AI, micro SaaS, and IT solutions. 
                We help businesses transform their operations through cutting-edge technology and automation.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage. 
                We believe in the transformative power of technology and are committed to delivering solutions that make a real impact.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Innovation:</strong> We stay at the forefront of technology trends and continuously explore new possibilities.</li>
                <li><strong>Excellence:</strong> We deliver high-quality solutions that exceed expectations.</li>
                <li><strong>Collaboration:</strong> We work closely with our clients to understand their unique needs and challenges.</li>
                <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical practices.</li>
              </ul>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Team</h2>
              <p className="text-gray-600 mb-6">
                Our team consists of experienced AI engineers, software developers, IT specialists, and business consultants 
                who are passionate about leveraging technology to solve complex business challenges.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose Us</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Proven track record of successful project delivery</li>
                <li>Deep expertise in AI, machine learning, and cloud technologies</li>
                <li>24/7 support and maintenance services</li>
                <li>Scalable solutions that grow with your business</li>
                <li>Competitive pricing and flexible engagement models</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;