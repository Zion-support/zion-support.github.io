:src/pages/AboutPage.tsx
import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve great things.',
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'We focus on creating solutions that make a positive difference in the world.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '👩‍💼',
      bio: 'Leading our AI and quantum computing research initiatives.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '👨‍💻',
      bio: 'Overseeing our technical architecture and development teams.',
    },
    {
      name: 'Lisa Wang',
      role: 'Director of Innovation',
      image: '👩‍🔬',
      bio: 'Driving our autonomous systems and automation solutions.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Zion Tech Group</h1>
          <p className="about-hero-subtitle">
            Pioneering the future of technology through innovation, research, and transformative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h2 className="card-title">Our Mission</h2>
            <p className="card-description">
              To revolutionize the technology landscape through innovative AI solutions, 
              quantum computing research, and autonomous systems that transform businesses 
              and drive sustainable growth.
            </p>
          </div>
          <div className="vision-card">
            <div className="card-icon">🔮</div>
            <h2 className="card-title">Our Vision</h2>
            <p className="card-description">
              To be the global leader in next-generation technology solutions, 
              empowering organizations worldwide to achieve unprecedented levels 
              of efficiency, innovation, and success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values-container">
          <div className="values-header">
            <h2 className="values-title">Our Core Values</h2>
            <p className="values-subtitle">
              The principles that guide everything we do at Zion Tech Group.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-container">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
};
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => (
  <>
<SEOHead
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to empower businesses with cutting-edge technology solutions. Leading technology company with industry expertise."
      keywords="about zion tech group, technology company, mission, vision, team, expertise"
      canonicalUrl="https://ziontechgroup.com/about"
    />"
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
<motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
:src/pages/AboutPage.tsx
<motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
:src/pages/AboutPage.tsx
        About Us;
      </motion.h1>"
      <div className="max-w-4xl mx-auto">
<motion.p
          className="text-lg sm:text-xl text-gray-600 mb-12 text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
:src/pages/AboutPage.tsx
Zion Tech Group is a leading technology company dedicated to delivering innovative
          solutions that transform businesses and drive growth in the digital age.
        </motion.p>"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div;
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
:src/pages/AboutPage.tsx
<Card
              title="Our Mission"
              description="To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth."
              className="h-full"
            />
          </motion.div>
          <motion.div;
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
:src/pages/AboutPage.tsx
<Card
              title="Our Vision"
              description="To be the global leader in technology solutions, creating a world where every business can leverage technology."
              className="h-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
    </div>
  </>
);
:src/pages/AboutPage.tsx

export default AboutPage;
