import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours"],
      featured: true
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, responsive user interfaces for our AI-powered applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, TypeScript",
        "Experience with modern CSS frameworks",
        "Strong understanding of UX/UI principles"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Professional development"],
      featured: false
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage and scale our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience with AWS, Docker, Kubernetes",
        "Experience with CI/CD pipelines",
        "Knowledge of monitoring and logging tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Stock options"],
      featured: false
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive product strategy and roadmap for our AI solutions portfolio.",
      requirements: [
        "MBA or Master's degree in related field",
        "5+ years product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Equity participation"],
      featured: true
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "3+ years",
      description: "Help clients understand and implement our AI solutions through technical sales support.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "3+ years technical sales experience",
        "Strong presentation and communication skills",
        "Understanding of AI/ML technologies"
      ],
      benefits: ["Competitive salary", "Commission structure", "Health insurance", "Travel opportunities"],
      featured: false
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "4+ years",
      description: "Create intuitive and engaging user experiences for our AI-powered applications.",
      requirements: [
        "Bachelor's degree in Design or related field",
        "4+ years UX/UI design experience",
        "Proficiency in Figma, Sketch, Adobe Creative Suite",
        "Portfolio demonstrating AI/ML interface design"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Design tools budget"],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance support"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Career Development",
      description: "Clear career paths, internal mobility, and leadership opportunities"
    }
  ];

  const culture = [
    "Innovation-driven environment",
    "Collaborative team culture",
    "Diversity and inclusion focus",
    "Continuous learning mindset",
    "Work-life balance",
    "Impact-driven projects"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join Zion Tech Group and be part of the future of AI and technology. Explore career opportunities, benefits, and our innovative company culture."
        keywords="careers, jobs, AI engineer, technology jobs, remote work, company culture, benefits"
        canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be part of the future of AI and technology. Join a team of passionate innovators 
            who are building solutions that transform businesses and improve lives.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building the future of technology, and we want you to be part of it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current opportunities and find your perfect role
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  position.featured 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {position.featured && (
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {position.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits:</h4>
                      <ul className="space-y-2 mb-6">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                At Zion Tech Group, we believe that great technology comes from great people. 
                We foster a culture of innovation, collaboration, and continuous learning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {culture.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Innovation</h4>
                  <p className="text-gray-300 text-sm">
                    We constantly push the boundaries of what's possible with technology.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Collaboration</h4>
                  <p className="text-gray-300 text-sm">
                    We believe the best solutions come from working together as a team.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Excellence</h4>
                  <p className="text-gray-300 text-sm">
                    We strive for excellence in everything we do, from code to customer service.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Impact</h4>
                  <p className="text-gray-300 text-sm">
                    We're driven by the positive impact our technology has on businesses and people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes it easy to join our team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Apply</h3>
              <p className="text-gray-300 text-sm">
                Submit your application with resume and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
              <p className="text-gray-300 text-sm">
                Our team reviews your application and portfolio
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
              <p className="text-gray-300 text-sm">
                Technical and cultural fit interviews with our team
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Offer</h3>
              <p className="text-gray-300 text-sm">
                Receive your offer and join our amazing team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Send Resume
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;