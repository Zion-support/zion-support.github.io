import { Users, CheckCircle, Shield, Award, Target, Globe, Brain, Cloud, TrendingUp, Calendar, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client relationships.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Leading the future of AI and IT solutions with cutting-edge technology and unparalleled expertise
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes while maintaining the highest standards of security and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Meet the brilliant minds behind our innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}