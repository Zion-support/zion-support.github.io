import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export function AboutSection() {
  const achievements = [
    { number: "10+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "25+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies and novel approaches.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the impact we create for your business.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Trust & Security",
      description: "Your data and systems are protected with enterprise-grade security and compliance standards.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const technologies = [
    "Artificial Intelligence & ML", "Cloud Computing", "Cybersecurity", "Data Analytics",
    "Blockchain Technology", "IoT Solutions", "Mobile Development", "Web Applications",
    "DevOps & Automation", "Quantum Computing", "Edge Computing", "5G Networks"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-futuristic">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion Tech Group</span>
            </h2>
            
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              Founded in 2015, Zion Tech Group has emerged as a leading force in the technology 
              industry, pioneering innovative solutions that transform how businesses operate in 
              the digital age.
            </p>
            
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              Our mission is to democratize cutting-edge technology, making advanced AI, 
              quantum computing, and autonomous systems accessible to organizations of all sizes. 
              We believe that innovation should drive progress, not complexity.
            </p>

            <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
              Today, we serve clients across 25+ countries, from startups to Fortune 500 
              companies, helping them navigate the complexities of digital transformation 
              and emerge stronger, more efficient, and future-ready.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column - Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{achievement.number}</div>
                <div className="text-sm text-zion-slate-light">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-futuristic">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-tech">{value.title}</h4>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-futuristic">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Expertise</span>
            </h3>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Our team of experts spans across cutting-edge technologies, ensuring we can 
              deliver comprehensive solutions for any digital challenge your business faces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center text-zion-slate-light">
                <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
            >
              Explore Our Expertise
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6 font-futuristic">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Team</span>
          </h3>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our diverse team of engineers, designers, and consultants brings together 
            decades of combined experience in technology and business transformation.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
          >
            Meet the Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}