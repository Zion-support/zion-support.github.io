'use client';
import React from 'react';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education" />
      </Helmet>
      
      <div>
        <div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span>
                Tutorials & Learning Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

          <div>
            </meta>
            </meta>
            {/* AI Tutorials */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Tutorials</h3>
              <p className="text-gray-300 mb-4">
                Learn artificial intelligence from basics to advanced implementations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Machine Learning Fundamentals</li>
                <li>• Deep Learning with TensorFlow</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Applications</li>
              </ul>
            </div>

            {/* IT Infrastructure */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Master cloud computing, DevOps, and system administration.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Architecture Design</li>
                <li>• Container Orchestration</li>
                <li>• CI/CD Pipeline Setup</li>
                <li>• Security Best Practices</li>
              </ul>
            </div>

            {/* Web Development */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 mb-4">
                Build modern, scalable web applications with cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React & Next.js Mastery</li>
                <li>• Full-Stack Development</li>
                <li>• API Design & Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Data Science */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Science</h3>
              <p className="text-gray-300 mb-4">
                Extract insights from data using advanced analytics and visualization.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Data Analysis with Python</li>
                <li>• Statistical Modeling</li>
                <li>• Data Visualization</li>
                <li>• Big Data Processing</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Protect systems and data with comprehensive security strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Threat Detection & Response</li>
                <li>• Penetration Testing</li>
                <li>• Security Architecture</li>
                <li>• Compliance & Governance</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300 mb-4">
                Create cross-platform mobile applications with modern frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React Native Development</li>
                <li>• Flutter Applications</li>
                <li>• Native iOS & Android</li>
                <li>• Mobile UI/UX Design</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and IT professionals who are advancing their careers with our tutorials.
            </p>
            <div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Browse All Tutorials
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;