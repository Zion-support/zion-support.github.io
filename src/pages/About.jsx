import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-futuristic py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          About Zion Tech Group
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zion-slate-light text-lg mb-8">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
            cutting-edge cybersecurity, and scalable cloud infrastructure.
          </p>
          <p className="text-zion-slate-light text-lg">
            Our mission is to empower organizations with the tools and expertise they need to thrive in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}
