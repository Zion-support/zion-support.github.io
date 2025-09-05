import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy, Cloud Architecture",
      experience: "15+ years",
      image: "/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      expertise: "Software Engineering, DevOps",
      experience: "12+ years",
      image: "/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      expertise: "Machine Learning, Data Science",
      experience: "10+ years",
      image: "/team/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      expertise: "Cybersecurity, Compliance",
      experience: "8+ years",
      image: "/team/emily-rodriguez.jpg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering solutions that drive real business value.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to project delivery and customer service.",
      icon: "⭐"
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with our clients as partners, ensuring transparency and alignment throughout every project.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider specializing in AI, cloud services, and digital transformation. Based in Middletown, DE." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, software development, Delaware" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
              <p className="text-xl max-w-3xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative AI, cloud, and software solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2018, Zion Tech Group has grown from a small startup to a trusted technology 
                  partner for businesses across various industries. Our journey began with a simple mission: 
                  to make cutting-edge technology accessible and beneficial for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we specialize in AI-powered solutions, cloud architecture, and digital transformation 
                  services. Our team of expert engineers, data scientists, and consultants work tirelessly to 
                  deliver solutions that not only meet but exceed our clients' expectations.
                </p>
                <p className="text-lg text-gray-600">
                  Based in Middletown, Delaware, we serve clients globally, helping them navigate the 
                  complexities of modern technology and achieve their digital transformation goals.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's most trusted technology partner, known for delivering 
                  exceptional results and transforming how businesses operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">Let's discuss how we can help transform your business</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;