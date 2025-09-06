import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in cutting-edge AI and ML solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Cloud Architecture Team',
      role: 'Cloud Solutions Architects',
      description: 'Certified professionals in AWS, Azure, and GCP platforms.',
      image: '/api/placeholder/300/300'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with technology.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and support.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed expectations.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services. Our mission is to empower 
              businesses with cutting-edge technology that drives growth and ensures security.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                enhance security, and create sustainable competitive advantages. We believe 
                technology should be an enabler, not a barrier.
              </p>
              <p className="text-gray-300">
                Our team of experts works tirelessly to deliver solutions that not only meet 
                current needs but also position our clients for future success in an ever-evolving 
                digital landscape.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-6">
                To be the world's most trusted technology partner, known for our innovation, 
                reliability, and commitment to client success. We envision a future where 
                technology seamlessly integrates with business operations to create unprecedented 
                value.
              </p>
              <p className="text-gray-300">
                Through continuous innovation and strategic partnerships, we aim to shape the 
                future of business technology and help organizations thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-300">Meet the experts behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;