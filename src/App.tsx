import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and cutting-edge expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Services"
            description="Transform your business with cutting-edge AI solutions."
            icon="✨"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions."
            icon="☁️"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Innovation" description="Pioneering the next generation of technology." />
            <Card title="Expertise" description="Team of industry-leading professionals." />
            <Card title="Reliability" description="Trusted solutions for critical operations." />
            <Card title="Scalability" description="Solutions designed to grow with you." />
            <Card title="Security" description="Robust protection for all your data." />
            <Card title="Support" description="24/7 dedicated customer assistance." />
          </div>
        </div>
      </div>
    </div>
  );
}
