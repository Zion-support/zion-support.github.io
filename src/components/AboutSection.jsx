import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Zion Tech Group</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 2015, Zion Tech Group has emerged as a leading force in the technology
              industry, pioneering innovative solutions that transform how businesses operate in
              the digital age.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our mission is to democratize cutting-edge technology, making advanced AI,
              quantum computing, and autonomous systems accessible to organizations of all sizes.
              We believe that innovation should drive progress, not complexity.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Today, we serve clients across 25+ countries, from startups to Fortune 500
              companies, helping them navigate the complexities of digital transformation
              and emerge stronger, more efficient, and future-ready.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          {/* Right Column - Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "Years of Experience", icon: <Award className="w-6 h-6"/> },
              { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6"/> },
              { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6"/> },
              { number: "25+", label: "Countries Served", icon: <Globe className="w-6 h-6"/> }
            ].map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible, constantly exploring emerging technologies and novel approaches.",
                icon: <TrendingUp className="w-8 h-8"/>
              },
              {
                title: "Client Success",
                description: "Your success is our success. We measure our achievements by the impact we create for your business.",
                icon: <Target className="w-8 h-8"/>
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from code quality to client communication.",
                icon: <Award className="w-8 h-8"/>
              },
              {
                title: "Trust & Security",
                description: "Your data and systems are protected with enterprise-grade security and compliance standards.",
                icon: <Shield className="w-8 h-8"/>
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Technologies</span> We Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Artificial Intelligence & ML", "Cloud Computing", "Cybersecurity", "Data Analytics",
              "Blockchain Technology", "IoT Solutions", "Mobile Development", "Web Applications",
              "DevOps & Automation", "Quantum Computing", "Edge Computing", "5G Networks"
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
