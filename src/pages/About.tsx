import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/john-smith.jpg',
      bio: 'Visionary leader with 15+ years in tech innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah-johnson.jpg',
      bio: 'Technical architect specializing in scalable solutions.',
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/team/mike-chen.jpg',
      bio: 'Full-stack developer passionate about clean code.',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Security',
      description: 'Your data and privacy are our top priorities in everything we build.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we deliver.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            We are a leading technology company specializing in AI, cybersecurity, 
            and cloud solutions that transform businesses and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive 
              growth, enhance security, and enable digital transformation. We believe 
              in the power of AI and technology to solve complex business challenges.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team of experts combines deep technical knowledge with industry 
              experience to deliver solutions that not only meet today's needs but 
              anticipate tomorrow's challenges.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To be the world's most trusted technology partner, known for innovation, 
              reliability, and exceptional service. We envision a future where technology 
              seamlessly integrates with business operations to create unprecedented value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through continuous innovation and customer-centric approach, we aim to 
              shape the future of business technology and create lasting impact.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Innovation"
              description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems."
              icon="💡"
            />
            <Card
              title="Excellence"
              description="We are committed to delivering the highest quality solutions and services, exceeding expectations in everything we do."
              icon="⭐"
            />
            <Card
              title="Integrity"
              description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners."
              icon="🤝"
            />
            <Card
              title="Collaboration"
              description="We believe in the power of teamwork and work closely with our clients to achieve shared success."
              icon="👥"
            />
            <Card
              title="Growth"
              description="We are committed to continuous learning and improvement, both for our team and our clients."
              icon="📈"
            />
            <Card
              title="Impact"
              description="We measure our success by the positive impact we create for our clients and the communities we serve."
              icon="🌍"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Award-Winning</h3>
              <p className="text-gray-300">Recognized for excellence in technology innovation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Rapid deployment and quick time-to-market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-300">Measurable outcomes and ROI for every project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;