import React from 'react';
export default function About() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses
            through innovative AI solutions and cutting-edge technology services.
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive innovation,
              efficiency, and growth in the digital age.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-zion-slate-light">
                Constantly pushing the boundaries of what's possible with technology.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-zion-slate-light">
                Delivering the highest quality solutions and services to our clients.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
              <p className="text-zion-slate-light">
                Building trust through honest, transparent, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
