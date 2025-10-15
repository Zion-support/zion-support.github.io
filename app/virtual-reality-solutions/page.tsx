import React from 'react';
import SEOHead from '../components/SEOHead';

const VirtualRealitySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Virtual Reality Solutions - Zion Tech Group"
        description="Immersive VR solutions for training, simulation, entertainment, and virtual experiences with cutting-edge virtual reality technology."
        keywords="virtual reality, VR solutions, immersive technology, VR training, VR simulation, virtual experiences"
        canonicalUrl="https://ziontechgroup.com/virtual-reality-solutions"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Virtual Reality Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create immersive virtual environments for training, simulation, entertainment, and virtual experiences that engage and captivate users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">VR Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Immersive Training</h3>
                    <p className="text-gray-600">Create realistic training environments for high-risk or complex procedures.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Virtual Simulations</h3>
                    <p className="text-gray-600">Simulate real-world scenarios for testing, planning, and decision-making.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborative Spaces</h3>
                    <p className="text-gray-600">Enable remote teams to collaborate in shared virtual environments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Entertainment Experiences</h3>
                    <p className="text-gray-600">Create engaging VR content for marketing, events, and customer experiences.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Aviation</h3>
                  <p className="text-gray-600">Flight simulation, pilot training, and emergency procedure practice</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Healthcare</h3>
                  <p className="text-gray-600">Surgical training, therapy applications, and medical education</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Immersive learning experiences and virtual field trips</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Architecture</h3>
                  <p className="text-gray-600">Virtual walkthroughs and design visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualRealitySolutionsPage;