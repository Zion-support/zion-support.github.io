import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Cpu,
  Database,
  Settings,
  BarChart3,
  Lightbulb,
  Heart,
  Eye,
  MessageSquare,
  Lock,
  Smartphone,
  Network,
  Server
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and technology innovation. Former Google AI researcher and serial entrepreneur.",
      image: "KS",
      expertise: ["AI Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "PhD in Machine Learning from MIT. Expert in deep learning, computer vision, and AI system architecture.",
      image: "SC",
      expertise: ["Machine Learning", "AI Architecture", "Research"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      description: "Full-stack engineer with expertise in cloud infrastructure, microservices, and scalable system design.",
      image: "MR",
      expertise: ["Cloud Computing", "DevOps", "System Design"]
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      description: "Product strategist with 10+ years experience in SaaS and AI product development. Former product lead at Microsoft.",
      image: "EJ",
      expertise: ["Product Strategy", "UX Design", "SaaS"]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and technology, always staying ahead of the curve.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Customer Success",
      description: "Our success is measured by our clients' success. We go above and beyond to ensure every project delivers real value.",
      icon: Heart,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Transparency",
      description: "We believe in open communication, clear pricing, and honest feedback. No hidden fees, no surprises.",
      icon: Eye,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      icon: Award,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and make it accessible to businesses of all sizes."
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Launched our first AI-powered micro SAAS solutions, helping 100+ businesses automate their processes."
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Expanded to serve enterprise clients with comprehensive IT solutions and custom AI implementations."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Reached 500+ clients worldwide and launched our cloud infrastructure and cybersecurity services."
    },
    {
      year: "2024",
      title: "AI Innovation Hub",
      description: "Established our AI research lab and launched cutting-edge solutions in computer vision and NLP."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Micro SAAS Solutions", icon: Smartphone },
    { number: "100+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "50+", label: "Languages Supported", icon: Globe }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Brain, description: "TensorFlow, PyTorch, Scikit-learn" },
    { name: "Cloud Computing", icon: Cloud, description: "AWS, Azure, Google Cloud" },
    { name: "Cybersecurity", icon: Shield, description: "SIEM, Firewalls, Encryption" },
    { name: "Data Analytics", icon: BarChart3, description: "Python, R, SQL, Power BI" },
    { name: "DevOps", icon: Settings, description: "Docker, Kubernetes, CI/CD" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS" }
  ];

  return (
    <>
      <SEOHead
        title="About Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and micro SAAS applications. Founded in 2020, we've helped 500+ businesses transform with technology."
        keywords="about zion tech group, ai company, it solutions provider, micro saas company, technology company, ai innovation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're a leading provider of AI solutions, IT services, and micro SAAS applications, 
              helping businesses transform and thrive in the digital age.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#mission" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Our Mission
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize artificial intelligence and make cutting-edge technology accessible 
                to businesses of all sizes. We believe that every company, regardless of size or industry, 
                should have access to the tools and solutions that can transform their operations and drive growth.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Through our innovative AI solutions, comprehensive IT services, and user-friendly micro SAAS applications, 
                we're building a future where technology empowers rather than complicates.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="/services" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Our Services
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700 rounded-xl p-6 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300">To be the world's leading provider of accessible AI and IT solutions</p>
              </div>
              <div className="bg-slate-700 rounded-xl p-6 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
                <p className="text-gray-300">Innovation, transparency, excellence, and customer success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions. Our diverse team of experts 
              brings together decades of experience in AI, technology, and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                </div>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-slate-600 text-cyan-400 text-xs px-2 py-1 rounded mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${value.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay at the forefront of technology, mastering the latest tools and frameworks 
              to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small startup to a leading technology company, here's how we've grown and evolved.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
                    <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
            <a 
              href="/careers" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;