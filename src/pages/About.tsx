import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              Zion Tech Group is a pioneering technology company dedicated to delivering cutting-edge AI and IT solutions. We empower businesses to thrive in the digital age through innovation, expertise, and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to transform industries by providing intelligent, scalable, and secure technology services. We believe in the power of AI to revolutionize operations, enhance decision-making, and create lasting value for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}