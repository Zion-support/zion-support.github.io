import React from 'react';
import Card from '../components/Card';
const About: React.FC = () => {,
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            We are a leading technology company specializing in AI solutions, cybersecurity,
            and cloud infrastructure. Our mission is to transform businesses through
            innovative technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">"
          <Card
            title="Our Mission""
            description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age.""
          />
          <Card
            title="Our Vision""
            description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world.""
          />
          <Card
            title="Our Values""
            description="We maintain the highest standards in everything we do, from our code quality to our customer service and support.""
          />
        </div>

      </div>
</div>
  );
};
export default About;
