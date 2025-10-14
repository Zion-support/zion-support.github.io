import React from 'react';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
        <p className="text-gray-300 text-lg mb-8">
          Professional web development services including responsive design, backend development, 
          and full-stack solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-300">
              Modern frontend development using React, Vue, Angular, and other cutting-edge technologies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-300">
              Robust backend development with Node.js, Python, PHP, and other server-side technologies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Full-Stack Solutions</h3>
            <p className="text-gray-300">
              Complete full-stack web applications from design to deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}