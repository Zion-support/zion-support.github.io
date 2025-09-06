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

export default AboutPage;