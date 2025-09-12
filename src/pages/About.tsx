
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";

export default function About() {
  const team = [
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Rocket,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Heart },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const values = [
    {
      name: "Alex Johnson",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
      bio:
        "Alex Johnson leads Zion as CEO, driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, reading science fiction, and cooking."
    },
    {
      name: "Maria Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
      bio:
        "Maria Chen, Zion's CTO, oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, delivering scalable solutions that power millions of users. At Zion, Maria champions a culture of experimentation and rigorous security, ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects."
    },
    {
      name: "Sam Lee",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      bio:
        "Sam Lee serves as Zion's Head of Community, cultivating relationships with developers, partners, and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, Sam orchestrates events, online forums, and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, he enjoys photography and traveling with his family, often."
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to democratize access to cutting-edge technology solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, establishing our reputation in the industry.'
    },
    {
      year: '2022',
      title: 'Quantum Leap',
      description: 'Launched our quantum computing division and began pioneering quantum-safe cybersecurity solutions.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations internationally and launched our AI talent marketplace platform.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established our innovation lab and launched cutting-edge AI and quantum technology services.'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge in next-generation technologies including space tech and autonomous systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're a forward-thinking technology company dedicated to transforming businesses through innovative AI, quantum computing, and cutting-edge solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to thrive in the digital age through innovative AI, quantum computing, and emerging technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Transform businesses through technology innovation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Make advanced AI and quantum solutions accessible</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Build a sustainable future through green technology</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 mb-6">
                To be the global leader in next-generation technology solutions, pioneering the future of AI, quantum computing, and space technology while creating a more connected and sustainable world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Rocket className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Lead the quantum computing revolution</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Advance AI to new frontiers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Expand into space technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown and evolved
            </p>
          </div>

          <div className="content-section">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Timeline</h2>
            <ol className="relative border-l border-zion-blue-light pl-6 max-w-3xl mx-auto">
              {timeline.map((event) => (
                <li key={event.year} className="mb-10 ml-4">
                  <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-zion-cyan" />
                  <time className="font-semibold text-white">{event.year}</time>
                  <p className="text-zion-slate-light mt-2">{event.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center space-y-3">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-white font-bold">{member.name}</p>
                  <p className="text-zion-slate-light">{member.role}</p>
                  <p className="text-zion-slate-light text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a diverse team of experts, innovators, and problem-solvers passionate about technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Leadership Team</h3>
              <p className="text-gray-300">Experienced executives guiding our strategic vision</p>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & ML Engineers</h3>
              <p className="text-gray-300">Experts in artificial intelligence and machine learning</p>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Specialists</h3>
              <p className="text-gray-300">Cybersecurity experts protecting your digital assets</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              <span>Meet the Full Team</span>
              <TrendingUp className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start a Conversation
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>

          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Press Kit</h2>
            <p className="text-zion-slate-light mb-4">Download our logos, color palette and press release templates.</p>
            <a
              href="/toolkit_assets/media_kit.zip"
              download
              className="text-zion-cyan underline"
            >
              Download Media Kit (.zip)
            </a>
          </div>
        </div>

        <div className="content-section text-center">
          <p className="text-zion-slate-light text-lg">
            Ready to work with us? Explore our{' '}
            <Link href="/services" legacyBehavior>
              <a className="text-zion-cyan underline">AI & IT services</a>
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-zion-cyan underline">get in touch</Link>. For the latest updates, visit our{' '}
            <Link href="/blog" legacyBehavior>
              <a className="text-zion-cyan underline">blog</a>
            </Link>
            .
          </p>
        </div>

        <ContactSection />
      </main>
    </>
=======
  );
}
