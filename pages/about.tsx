import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Users, Lightbulb, Globe, Shield } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Reliability",
      description: "Our solutions are built with enterprise-grade security and reliability, ensuring your business operations run smoothly."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions."
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-400" />,
      title: "Global Reach",
      description: "With a worldwide presence, we serve clients across different industries and time zones with consistent excellence."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in technology leadership, former VP at Microsoft",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI/ML expert with PhD in Computer Science from Stanford",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Engineering",
      bio: "Full-stack architect with expertise in cloud-native applications",
      image: "/team/emily.jpg"
    },
    {
      name: "David Kim",
      role: "Head of Design",
      bio: "UX/UI specialist with a focus on enterprise applications",
      image: "/team/david.jpg"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to democratize advanced technology" },
    { year: "2021", event: "First Major Client", description: "Secured partnership with Fortune 500 company" },
    { year: "2022", event: "AI Division Launch", description: "Expanded into specialized AI and machine learning services" },
    { year: "2023", event: "Global Expansion", description: "Opened offices in Europe and Asia-Pacific" },
    { year: "2024", event: "500+ Projects", description: "Reached milestone of 500+ successful project deliveries" }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and the expert team behind our innovative technology solutions."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We&apos;re a team of passionate technologists dedicated to transforming businesses through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, reliable, 
                and transformative for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to bridge the gap between complex technology and practical business 
                needs, delivering solutions that not only meet today&apos;s requirements but also 
                prepare our clients for tomorrow&apos;s challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s leading technology partner, recognized for our innovation, 
                reliability, and commitment to client success. We envision a future where 
                technology seamlessly integrates with business operations to create 
                unprecedented value and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding to today, here are the key milestones that have shaped our company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve accomplished together with our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our team can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;