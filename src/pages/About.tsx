<<<<<<< HEAD
import React, { memo } from 'react';

// Info card component for better performance
const InfoCard = memo<{ title: string; children: React.ReactNode }>(({ title, children }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    {children}
  </div>
));

InfoCard.displayName = 'InfoCard';

const About: React.FC = memo(() => {
  const features = [
    'Expert team with years of industry experience',
    'Cutting-edge AI and machine learning solutions',
    'Comprehensive IT support and cybersecurity',
    'Scalable micro SAAS platforms',
    '24/7 customer support and monitoring'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        About Zion Tech Group
      </h2>
      <div className="space-y-6 text-blue-200">
        <p className="text-lg">
          Zion Tech Group is a leading provider of innovative IT solutions and AI services, 
          dedicated to helping businesses transform and thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Our Mission">
            <p>
              To empower businesses with cutting-edge technology solutions that drive 
              growth, efficiency, and innovation.
            </p>
          </InfoCard>
          <InfoCard title="Our Vision">
            <p>
              To be the premier technology partner for businesses seeking to leverage 
              AI and modern IT infrastructure for competitive advantage.
            </p>
          </InfoCard>
        </div>
        <InfoCard title="Why Choose Us?">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
=======


export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and cutting-edge expertise
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                At Zion Tech Group, we're dedicated to transforming businesses through innovative technology solutions. 
                Our mission is to empower organizations with cutting-edge tools and expertise that drive growth, 
                efficiency, and competitive advantage.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                We believe in the power of technology to solve complex challenges and create opportunities 
                for businesses of all sizes. From AI and machine learning to cybersecurity and cloud infrastructure, 
                we provide comprehensive solutions that adapt to your unique needs.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                We envision a future where technology seamlessly integrates with business operations, 
                creating intelligent, automated, and highly efficient systems that drive innovation 
                and sustainable growth.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                By staying at the forefront of emerging technologies and industry trends, 
                we help our clients navigate the digital landscape with confidence and achieve 
                their strategic objectives.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-zion-slate-light">Cutting-edge solutions that keep you ahead of the competition</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-zion-slate-light">Deep knowledge across all major technology domains</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-zion-slate-light">Long-term relationships built on trust and results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/chore/auto-deps
