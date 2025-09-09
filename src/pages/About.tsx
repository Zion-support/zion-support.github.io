
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Rocket, 
  Shield, 
  Zap, 
  Target, 
  Heart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions to solve complex challenges.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of our clients\' data, building robust systems that protect against evolving threats.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing market conditions and client needs, delivering solutions that evolve with your business.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your success is our success. We go above and beyond to understand your needs and deliver solutions that exceed expectations.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business development.',
      avatar: 'https://placehold.co/120x120?text=KS'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Expert in AI and machine learning with a passion for innovative solutions.',
      avatar: 'https://placehold.co/120x120?text=SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist ensuring our platform and clients remain protected.',
      avatar: 'https://placehold.co/120x120?text=MR'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Operations',
      bio: 'Operations expert streamlining processes for maximum efficiency.',
      avatar: 'https://placehold.co/120x120?text=PP'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize access to cutting-edge technology.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Successfully delivered our first AI-powered business intelligence solutions to enterprise clients.'
    },
    {
      year: '2022',
      title: 'Market Expansion',
      description: 'Expanded services to include cybersecurity, cloud solutions, and digital transformation.'
    },
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched our comprehensive marketplace platform connecting talent with opportunities.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended our services internationally, serving clients across multiple continents.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and expand our offerings to meet evolving market needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            We're building the future of technology, one innovation at a time. Our mission is to democratize 
            access to cutting-edge AI and technology solutions, empowering businesses of all sizes to thrive 
            in the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-zion-slate-light text-lg leading-relaxed">
              To create the world's most accessible and innovative technology marketplace, connecting 
              businesses with cutting-edge AI solutions, expert talent, and transformative technology 
              that drives growth and success.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-zion-slate-light text-lg leading-relaxed">
              A world where every business, regardless of size or location, has access to the same 
              cutting-edge technology that powers Fortune 500 companies, enabling unprecedented 
              innovation and growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/50 transition-colors">
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-12 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Zion Tech Group by the Numbers</h2>
            <p className="text-xl text-zion-slate-light">
              Our impact and growth in the technology industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">98%</div>
              <div className="text-zion-slate-light">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">5+</div>
              <div className="text-zion-slate-light">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the journey that shaped Zion Tech Group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/50 transition-colors">
                <div className="text-3xl font-bold text-zion-cyan mb-3">{milestone.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The brilliant minds behind our success, dedicated to driving innovation and delivering excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-purple/50 transition-colors">
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-12 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in innovation and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Proven Track Record</h3>
                  <p className="text-zion-slate-light">500+ successful projects delivered across various industries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
                  <p className="text-zion-slate-light">50+ certified professionals with deep expertise in their domains.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Innovation Focus</h3>
                  <p className="text-zion-slate-light">Always at the forefront of emerging technologies and trends.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
                  <p className="text-zion-slate-light">Round-the-clock support and maintenance for your systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                  <p className="text-zion-slate-light">Built to grow with your business and adapt to changing needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Competitive Pricing</h3>
                  <p className="text-zion-slate-light">Enterprise-grade solutions at accessible price points.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/80 transition-colors font-semibold"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
