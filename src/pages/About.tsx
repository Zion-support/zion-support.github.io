
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  Lightbulb, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Zap,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const companyStats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Target, value: "95%", label: "Success Rate" }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing cutting-edge technologies to deliver breakthrough solutions."
    },
    {
      icon: Shield,
      title: "Excellence in Execution",
      description: "Every project is delivered with meticulous attention to detail, ensuring the highest quality standards and client satisfaction."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships with our clients, understanding their unique challenges and becoming trusted technology partners."
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "Our team is committed to lifelong learning, staying ahead of industry trends and emerging technologies."
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize advanced technology solutions for businesses of all sizes."
    },
    {
      year: "2016",
      title: "First AI Project",
      description: "Successfully delivered our first AI-powered business intelligence solution, marking the beginning of our AI journey."
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Expanded operations to serve clients across 25+ countries, establishing global partnerships and delivery capabilities."
    },
    {
      year: "2020",
      title: "Digital Transformation Focus",
      description: "Launched comprehensive digital transformation services, helping businesses adapt to the new digital landscape."
    },
    {
      year: "2022",
      title: "Quantum & Blockchain",
      description: "Introduced cutting-edge quantum computing and blockchain solutions, positioning us at the forefront of emerging technologies."
    },
    {
      year: "2024",
      title: "AI Autonomous Systems",
      description: "Pioneered AI autonomous business systems, revolutionizing how organizations operate and make decisions."
    }
  ];

  const teamHighlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      count: "15+",
      description: "Expert data scientists and AI engineers"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      count: "20+",
      description: "Certified cloud architects and DevOps specialists"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      count: "12+",
      description: "Security experts and compliance specialists"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      count: "18+",
      description: "Strategic consultants and change management experts"
    }
  ];

  const certifications = [
    "ISO 27001 Information Security Management",
    "SOC 2 Type II Compliance",
    "AWS Advanced Consulting Partner",
    "Microsoft Gold Partner",
    "Google Cloud Partner",
    "CISSP Certified Team Members",
    "PMP Certified Project Managers"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        config={{
          title: "About Us - Zion Tech Group",
          description: "Learn about Zion Tech Group's journey from startup to industry leader in AI solutions, IT services, and digital transformation. Discover our mission, values, and commitment to innovation.",
          keywords: "about Zion Tech Group, company history, mission, values, team, AI solutions, IT services, digital transformation",
          type: "website"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Pioneering the future of technology through innovation, expertise, and unwavering commitment to client success
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                To democratize advanced technology solutions, making cutting-edge AI, cloud computing, 
                and digital transformation accessible to businesses of all sizes. We believe that every 
                organization deserves access to the tools and expertise needed to thrive in the digital age.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Through innovation, expertise, and unwavering commitment to client success, we empower 
                businesses to transform their operations, enhance their competitive advantage, and achieve 
                sustainable growth.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the world's most trusted technology partner, recognized for our innovative solutions, 
                exceptional service, and commitment to driving positive change through technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span>Leading the AI revolution in business</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span>Enabling sustainable digital transformation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span>Building a more connected, intelligent world</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the milestones that shaped our success
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Team & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented professionals who make our vision a reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{highlight.count}</div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry certifications and awards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already transformed their business with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-cyan-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
