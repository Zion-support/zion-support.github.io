import React from 'react';

export function FeaturedListingsSection() {
  return (
    <section className="py-16 bg-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-3xl mb-4">
              🤖
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
            <p className="text-gray-300 mb-4">Advanced artificial intelligence and machine learning solutions for your business needs.</p>
            <div className="text-zion-cyan font-semibold">From $5,000</div>
          </div>
          
          <div className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-3xl mb-4">
              🔒
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">Comprehensive security solutions to protect your digital assets and infrastructure.</p>
            <div className="text-zion-cyan font-semibold">From $3,500</div>
          </div>
          
          <div className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-3xl mb-4">
              ☁️
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
            <p className="text-gray-300 mb-4">Scalable cloud infrastructure and DevOps solutions for modern applications.</p>
            <div className="text-zion-cyan font-semibold">From $2,500</div>
          </div>
        </div>
      </div>
    </section>
  );
}