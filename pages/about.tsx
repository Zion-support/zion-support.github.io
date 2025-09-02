import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

const About: NextPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We deliver exceptional quality in every project, ensuring client satisfaction and success.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and goals.',
      icon: '🤝'
    },
    {
      title: 'Reliability',
      description: 'We provide dependable solutions and support, building long-term relationships with our clients.',
      icon: '🛡️'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with over 15 years of experience in software development and business strategy.',
      image: '👨‍💼'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in AI, machine learning, and data science solutions.',
      image: '🤖'
    },
    {
      name: 'Cloud Architecture Team',
      role: 'Cloud Solutions Architects',
      description: 'Certified professionals in AWS, Azure, and Google Cloud Platform implementations.',
      image: '☁️'
    },
    {
      name: 'Development Team',
      role: 'Full-Stack Developers',
      description: 'Skilled developers creating modern web and mobile applications with cutting-edge technologies.',
      image: '💻'
    }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, a leading technology solutions provider specializing in AI development, cloud architecture, and digital transformation services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                Zion Tech Group has been at the forefront of digital transformation since our inception.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in delivering comprehensive technology solutions that drive growth, 
                efficiency, and innovation. Our team of experts combines deep technical knowledge 
                with business acumen to create solutions that not only meet current needs but 
                also scale for future growth.
              </p>
              <p className="text-lg text-gray-600">
                From AI-powered applications to cloud infrastructure, we help businesses 
                leverage technology to achieve their strategic objectives and stay competitive 
                in today's digital landscape.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading technology partner for businesses seeking to transform 
                their operations through cutting-edge AI, cloud, and development solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact"><a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </a></Link>
            <Link href="/services"><a className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              View Our Services
            </a></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;