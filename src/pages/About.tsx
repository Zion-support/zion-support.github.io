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