import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ARVRPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AR/VR Solutions - Zion Tech Group"
        description="Immersive AR/VR solutions to transform your business operations and customer experiences."
        keywords="AR, VR, augmented reality, virtual reality, immersive technology, 3D experiences"
        url="https://ziontechgroup.com/ar-vr"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immersive AR/VR solutions to transform your business operations and customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🥽</div>
              <h3 className="text-xl font-bold text-white mb-4">Virtual Reality</h3>
              <p className="text-gray-300 mb-4">
                Immersive VR experiences for training, simulation, and entertainment.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Augmented Reality</h3>
              <p className="text-gray-300 mb-4">
                AR applications that overlay digital content on the real world.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-4">Interactive Experiences</h3>
              <p className="text-gray-300 mb-4">
                Engaging interactive experiences for customers and employees.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get AR/VR Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ARVRPage;
