import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Mail, Award, Users, Target, Lightbulb } from "lucide-react";

export default function TeamZionTechGroup() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "AI Strategy & Business Development",
      bio: "15+ years in AI and technology leadership. Former VP at Google AI, leading digital transformation initiatives for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      expertise: "Cloud Architecture & AI Engineering",
      bio: "Expert in cloud-native solutions and machine learning systems. Previously led engineering teams at AWS and Microsoft Azure.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of AI Research",
      expertise: "Machine Learning & Data Science",
      bio: "PhD in Computer Science from MIT. Published researcher in deep learning and neural networks with 50+ peer-reviewed papers.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez"
    },
    {
      name: "David Kim",
      role: "Head of Cybersecurity",
      expertise: "Cybersecurity & Risk Management",
      bio: "Former NSA cybersecurity analyst with 12+ years protecting critical infrastructure. Certified in CISSP, CISM, and CISA.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    },
    {
      name: "Lisa Wang",
      role: "Head of 5G Solutions",
      expertise: "5G Networks & Edge Computing",
      bio: "Telecommunications expert with 10+ years at Verizon and Ericsson. Led 5G implementation projects for smart cities and IoT deployments.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/lisawang",
      github: "https://github.com/lisawang"
    },
    {
      name: "James Thompson",
      role: "Lead Data Engineer",
      expertise: "Big Data & Analytics",
      bio: "Data engineering specialist with expertise in Apache Spark, Kafka, and cloud data platforms. Former data architect at Netflix.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/jamesthompson",
      github: "https://github.com/jamesthompson"
    }
  ];

  const teamStats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "100+", label: "Certifications", icon: <Target className="w-8 h-8" /> },
    { number: "25+", label: "Patents Filed", icon: <Lightbulb className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Team - Zion Tech Group | Meet Our Expert Team</title>
        <meta
          name="description"
          content="Meet the expert team at Zion Tech Group. Our diverse team of AI researchers, engineers, and technology consultants brings decades of experience in cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="zion tech group team, AI experts, cloud engineers, cybersecurity specialists, 5G experts, technology consultants"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Expert Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Our diverse team of AI researchers, software engineers, and technology consultants 
              brings together decades of experience in cutting-edge technologies. We're passionate 
              about solving complex problems and delivering innovative solutions.
            </p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the leaders who drive our innovation and guide our mission to transform businesses through technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {member.expertise}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@ziontechgroup.com`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster a culture of innovation, collaboration, and continuous learning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We encourage creative thinking and embrace new technologies to solve complex problems.",
                  icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
                },
                {
                  title: "Collaborative Spirit",
                  description: "We believe in the power of teamwork and cross-functional collaboration to achieve excellence.",
                  icon: <Users className="w-8 h-8 text-blue-400" />
                },
                {
                  title: "Continuous Learning",
                  description: "We invest in our team's growth through training, conferences, and hands-on experience.",
                  icon: <Award className="w-8 h-8 text-green-400" />
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to be part of something extraordinary? We're always looking for talented individuals 
                who share our passion for technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Send Your Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
