
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

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-blue-light rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Innovation First</h3>
            <p className="text-zion-slate-light">
              We pioneer cutting-edge technologies and solutions that transform industries and drive digital evolution.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-purple rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quality Assured</h3>
            <p className="text-zion-slate-light">
              Every solution undergoes rigorous testing and quality assurance to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-green rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
            <p className="text-zion-slate-light">
              Our team of industry experts brings decades of experience in technology, innovation, and business solutions.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              To empower businesses and organizations with transformative technology solutions that drive growth, 
              efficiency, and innovation in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">What We Do</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-Powered Business Solutions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quantum Computing Platforms
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cybersecurity & Compliance
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud Infrastructure & DevOps
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-blue-light mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Micro SAAS Development
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Us</h3>
              <ul className="space-y-4 text-zion-slate-light">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Proven track record of successful projects
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cutting-edge technology expertise
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 support and monitoring
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable and future-proof solutions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-zion-purple mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Competitive pricing and flexible terms
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;