import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Zion Tech Group</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 mb-6">
              Zion Tech Group is a leading technology company specializing in AI solutions, 
              cloud services, and digital transformation. We help businesses leverage 
              cutting-edge technology to achieve their goals.
            </p>
            <p className="text-foreground/80 mb-6">
              Our team of experts brings decades of experience in artificial intelligence, 
              cloud computing, and enterprise solutions. We're committed to delivering 
              innovative solutions that drive real business value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-foreground/70">
                  To empower businesses with cutting-edge technology solutions that 
                  drive innovation and growth.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-foreground/70">
                  To be the leading provider of AI and technology solutions that 
                  transform industries and create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;