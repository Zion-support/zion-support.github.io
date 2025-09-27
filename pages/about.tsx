import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const About = React.memo(function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership, AI Innovation',
      image: '👩‍💼',
      description: '15+ years in technology leadership, former VP at major tech companies.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture, DevOps',
      image: '👨‍💻',
      description: 'Expert in scalable systems and modern development practices.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning, Data Science',
      image: '👩‍🔬',
      description: 'PhD in Computer Science with focus on AI and machine learning applications.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development, React',
      image: '👨‍💻',
      description: 'Specialist in modern web technologies and user experience design.'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.',
      icon: '🚀'
    },
    {
      title: 'Quality Excellence',
      description: 'Every line of code, every design decision, and every solution is crafted with meticulous attention to detail.',
      icon: '⭐'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we create for your business.',
      icon: '🎯'
    },
    {
      title: 'Collaborative Approach',
      description: 'We work closely with your team, ensuring seamless communication and alignment throughout the project.',
      icon: '🤝'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Solutions</title>
        <meta name="description" content="Learn about Zion Tech Solutions - a leading technology company specializing in AI, cloud computing, and custom software development." />
      </Head>
      
      <SEO
        title="About Us - Zion Tech Solutions"
        description="Learn about Zion Tech Solutions - a leading technology company specializing in AI, cloud computing, and custom software development."
        keywords={['about us', 'technology company', 'AI solutions', 'software development', 'team']}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future of Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                We're passionate about creating innovative solutions that transform businesses and drive digital success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded in 2020, Zion Tech Solutions emerged from a vision to bridge the gap between 
                    cutting-edge technology and real-world business challenges. Our team of experienced 
                    engineers, designers, and strategists came together with a shared mission: to help 
                    companies thrive in the digital age.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Today, we're proud to have helped over 100 companies transform their operations, 
                    streamline their processes, and achieve unprecedented growth through innovative 
                    technology solutions.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => trackClick('about-contact-cta')}
                  >
                    Get In Touch
                  </Link>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Team Photo Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => trackClick('about-cta-contact')}
                >
                  Start a Project
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                  onClick={() => trackClick('about-cta-services')}
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default About;