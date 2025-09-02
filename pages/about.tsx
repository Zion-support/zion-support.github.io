import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Target, Award, Globe, Zap, Shield, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-8 h-8" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-8 h-8" /> },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Our clients\' success is our success. We build lasting partnerships based on trust, transparency, and mutual growth.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your business growth and efficiency.'
    }
  ];

  const team = [
    {
      name: 'Kleber Silva',
      role: 'Founder & CEO',
      bio: 'Technology visionary with over 15 years of experience in software development and business transformation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI/ML solutions with a passion for scalable, innovative technology.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      bio: 'Full-stack development specialist focused on creating robust, user-centric applications.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'UX/UI expert dedicated to creating intuitive, beautiful, and functional user experiences.',
      image: '/team/emily.jpg'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize technology solutions for businesses of all sizes.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, marking the beginning of our growth journey.'
    },
    {
      year: '2022',
      title: 'Micro SaaS Launch',
      description: 'Introduced our first suite of micro SaaS solutions, helping small businesses scale efficiently.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team to 20+ experts and expanded our service offerings to include comprehensive IT services.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Serving clients across multiple countries and industries, with a focus on AI and digital transformation.'
    }
  ];

  return (
    <MainLayout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions. Meet our expert team and discover our story."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses Through Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses 
              leverage cutting-edge technology to achieve their goals and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we believe that every business deserves access to world-class 
                technology solutions. Our mission is to democratize technology by providing 
                affordable, scalable, and innovative solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We combine deep technical expertise with business acumen to deliver solutions 
                that not only work flawlessly but also provide measurable ROI for our clients.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a startup looking to scale or an enterprise seeking digital transformation, 
                we're here to be your technology partner every step of the way.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Develop custom AI and machine learning solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Build scalable micro SaaS applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Provide comprehensive IT consulting services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Enable cloud migration and digital transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Deliver 24/7 support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team brings together diverse skills and experiences to deliver 
              exceptional results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to serving clients worldwide, here's our story of growth and innovation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mx-4"></div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another technology company. Here's what makes us different.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with deep expertise in AI, 
                cloud computing, and software development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                We've successfully delivered hundreds of projects across various industries 
                and business sizes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends and continuously innovate to provide 
                cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our priority. We work closely with you to ensure 
                your goals are achieved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                We build solutions that grow with your business, ensuring long-term 
                value and flexibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support ensures your systems run smoothly and 
                issues are resolved quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss how our team can help transform your business with innovative 
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Started Today
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                View Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;