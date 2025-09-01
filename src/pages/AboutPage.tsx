import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and business security are our top priorities, backed by industry-leading practices."
    },
    {
      icon: Brain,
      title: "AI Excellence",
      description: "We leverage artificial intelligence to create intelligent, adaptive, and scalable solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions reach businesses worldwide, driving digital transformation across industries."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Zion Tech Group established with a vision for AI-driven business transformation" },
    { year: "2021", title: "First AI Solutions", description: "Launched our first AI-powered business automation platform" },
    { year: "2022", title: "Cloud Expansion", description: "Expanded into cloud infrastructure and DevOps services" },
    { year: "2023", title: "Cybersecurity Suite", description: "Introduced comprehensive cybersecurity solutions" },
    { year: "2024", title: "Global Reach", description: "Extended services to international markets" },
    { year: "2025", title: "AI Revolution", description: "Leading the charge in autonomous business operations" }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in AI and technology innovation",
      expertise: ["AI Strategy", "Business Transformation", "Technology Leadership"]
    },
    {
      name: "AI Development Team",
      role: "AI Engineers & Researchers",
      bio: "Expert team specializing in machine learning, neural networks, and autonomous systems",
      expertise: ["Machine Learning", "Deep Learning", "AI Architecture"]
    },
    {
      name: "Cloud & DevOps Team",
      role: "Infrastructure Specialists",
      bio: "Experienced professionals in cloud migration, DevOps automation, and infrastructure optimization",
      expertise: ["Cloud Architecture", "DevOps", "Infrastructure Security"]
    },
    {
      name: "Cybersecurity Team",
      role: "Security Experts",
      bio: "Certified security professionals protecting businesses from evolving cyber threats",
      expertise: ["Threat Detection", "Compliance", "Security Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Transforming businesses through cutting-edge AI technology, innovative cloud solutions, 
            and strategic digital transformation expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-zion-cyan mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-zinc-300 mb-6">
                To democratize AI technology and make advanced business automation accessible to 
                organizations of all sizes, enabling them to thrive in the digital age.
              </p>
              <ul className="space-y-3">
                {[
                  "Empower businesses with AI-driven solutions",
                  "Simplify complex technology implementations",
                  "Drive measurable business outcomes",
                  "Foster innovation and continuous improvement"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-zion-purple mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-zinc-300 mb-6">
                To be the global leader in autonomous business operations, creating a future where 
                businesses run seamlessly with AI-powered intelligence and automation.
              </p>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-zion-purple">Future Goals</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Pioneer next-generation AI business platforms</li>
                  <li>• Establish industry standards for autonomous operations</li>
                  <li>• Create sustainable technology solutions</li>
                  <li>• Build a global community of innovators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-zinc-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              From startup to industry leader - the milestones that shaped our success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-zion-cyan to-zion-purple h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-4 h-4 bg-zion-cyan rounded-full border-4 border-zinc-900 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                    <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-zinc-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional service delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-zion-cyan text-center mb-4">{member.role}</p>
                <p className="text-zinc-300 text-center mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-zinc-400 bg-zinc-700/50 px-3 py-1 rounded-full text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Join the hundreds of businesses already leveraging our AI-powered solutions 
            to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
