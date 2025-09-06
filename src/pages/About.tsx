import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cybersecurity, 
            and cloud infrastructure. Our mission is to transform businesses through
            innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            title="Our Mission"
            description="To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in the digital age."
          />
          <Card
            title="Our Vision"
            description="To be the global leader in AI and technology solutions, creating a smarter, more connected world for future generations."
          />
          <Card
            title="Our Values"
            description="Innovation, integrity, excellence, and customer success are the core values that guide everything we do at Zion Tech Group."
          />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-400">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SB</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Brown</h3>
              <p className="text-gray-400">Head of Design</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Expert Team"
              description="Our team consists of industry experts with years of experience in AI, cybersecurity, and cloud technologies."
            />
            <Card
              title="Proven Track Record"
              description="We have successfully delivered 500+ projects for clients across various industries worldwide."
            />
            <Card
              title="24/7 Support"
              description="Our dedicated support team is available around the clock to ensure your systems run smoothly."
            />
            <Card
              title="Cutting-Edge Technology"
              description="We stay ahead of the curve by adopting the latest technologies and best practices in the industry."
            />
            <Card
              title="Custom Solutions"
              description="Every solution we deliver is tailored to meet the specific needs and requirements of our clients."
            />
            <Card
              title="Competitive Pricing"
              description="We offer competitive pricing without compromising on quality, ensuring the best value for your investment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;