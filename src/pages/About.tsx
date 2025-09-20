import React from 'react';
// import SEO from '@/components/SEO';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Zap,
  Building2,
  Lightbulb,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '95%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to meet the unique needs and challenges of our clients.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and data protection in all our services.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions help businesses worldwide transform and succeed in the digital age.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation and AI development.',
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'AI Research Team',
      role: 'Machine Learning Specialists',
      bio: 'Experts in developing cutting-edge AI solutions and neural network architectures.',
      image: '/images/team/ai-team.jpg'
    },
    {
      name: 'Enterprise Solutions',
      role: 'Business Transformation',
      bio: 'Specialists in helping large organizations navigate digital transformation.',
      image: '/images/team/enterprise-team.jpg'
    }
  ];

  return (
    <>
      {/* <SEO 
        title="About Zion Tech Group - Leading AI & Technology Innovation Company"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and cutting-edge technology solutions. Discover our story, values, and commitment to innovation."
        keywords={['about Zion Tech Group', 'AI company', 'technology innovation', 'quantum computing', 'digital transformation']}
      /> */}
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              At Zion Tech Group, we're not just building technology – we're building the future. 
              Our mission is to democratize AI and cutting-edge technology, making it accessible 
              to businesses of all sizes.
            </p>
          </div>
        </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to cutting-edge AI technology and empower businesses of all sizes 
                to achieve digital transformation through innovative, scalable, and secure solutions.
              </p>
              <p className="text-lg text-zion-slate-light">
                We believe that every organization deserves access to the tools and expertise needed 
                to thrive in the digital economy.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the leading force in AI-powered business transformation, creating a future where 
                technology seamlessly enhances human potential and drives sustainable growth.
              </p>
              <p className="text-lg text-zion-slate-light">
                We envision a world where AI and human intelligence work together to solve the 
                most complex challenges facing society.
              </p>
            </div>
          </div>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple-light flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan mb-3">{member.role}</p>
                <p className="text-zion-slate-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our AI-powered solutions can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
