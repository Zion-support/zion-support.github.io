'use client';

import React from 'react';
import { 
  MapPin,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and work with our research team to implement the latest machine learning algorithms.",
      requirements: [
        "5+ years of experience in AI/ML development",
        "Strong background in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "PhD or Master's in Computer Science preferred"
      ],
      benefits: ["Competitive salary", "Stock options", "Health insurance", "Remote work", "Learning budget"]
    },
    {
      title: "AI Research Scientist",
      department: "Research",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Conduct groundbreaking research in AI and machine learning, publish papers, and contribute to open-source projects.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong publication record in top AI conferences",
        "Experience with deep learning frameworks",
        "Passion for advancing AI research"
      ],
      benefits: ["Research budget", "Conference attendance", "Flexible schedule", "Mentorship opportunities", "Patent incentives"]
    },
    {
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product strategy for our AI solutions, work with engineering and design teams to deliver exceptional user experiences.",
      requirements: [
        "4+ years of product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills",
        "MBA or technical background preferred"
      ],
      benefits: ["Product ownership", "Cross-functional collaboration", "Career growth", "Competitive compensation", "Work-life balance"]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure high availability of our AI services.",
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of Kubernetes, Docker",
        "Experience with cloud platforms",
        "Scripting skills (Python, Bash)"
      ],
      benefits: ["Infrastructure ownership", "Latest tools", "Team collaboration", "Learning opportunities", "Flexible hours"]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and stock options",
      icon: Award
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support",
      icon: Star
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs",
      icon: Globe
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance initiatives",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Careers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join our team of innovators and help shape the future of AI technology. We're building the next generation of intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn About Us
            </button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our mission to democratize AI technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {position.experience}
                          </span>
                        </div>
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <div className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that fosters growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">We encourage experimentation and reward bold ideas that push the boundaries of what's possible.</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">We believe in the power of teamwork and cross-functional collaboration to solve complex problems.</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-4">Learning</h3>
              <p className="text-gray-300">We invest in our team's growth with continuous learning opportunities and skill development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Send Resume
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;