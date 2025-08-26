import React from 'react';
import { Briefcase, Users, Award, Heart, MapPin, Clock, DollarSign, GraduationCap, Zap, Globe, Shield, Lightbulb } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Research Engineer",
      department: "AI & Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120K - $180K",
      description: "Lead cutting-edge AI research projects, develop neural network architectures, and contribute to autonomous systems development.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong background in deep learning and neural networks",
        "Experience with PyTorch, TensorFlow, or similar frameworks",
        "Published research in top AI conferences (NeurIPS, ICML, etc.)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible work arrangements",
        "Professional development budget",
        "Health, dental, and vision coverage"
      ]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "New York / Remote",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130K - $190K",
      description: "Design and implement enterprise security solutions, develop security frameworks, and lead compliance initiatives.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "CISSP, CISM, or similar certifications",
        "Experience with SOC 2, ISO 27001 compliance",
        "Expertise in threat modeling and security architecture"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work options",
        "Security conference attendance",
        "Comprehensive benefits package"
      ]
    },
    {
      title: "Quantum Computing Researcher",
      department: "Quantum Systems",
      location: "Boston / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100K - $150K",
      description: "Research quantum algorithms, develop quantum software, and contribute to quantum neural network research.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "Background in quantum mechanics and quantum computing",
        "Experience with Qiskit, Cirq, or similar frameworks",
        "Strong mathematical and programming skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Access to quantum computing resources",
        "Research publication support",
        "Flexible work arrangements"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Austin / Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90K - $140K",
      description: "Build and maintain cloud infrastructure, automate deployment processes, and optimize CI/CD pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Proficiency in Docker, Kubernetes, and Terraform",
        "Strong scripting skills (Python, Bash, etc.)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Cloud certification support",
        "Home office setup allowance",
        "Flexible work hours"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Chicago / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$80K - $120K + Commission",
      description: "Develop strategic partnerships, identify new business opportunities, and drive revenue growth.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "Experience in B2B technology sales",
        "Strong relationship-building skills",
        "Understanding of AI and emerging technologies"
      ],
      benefits: [
        "Competitive base salary + commission",
        "Performance bonuses",
        "Travel and entertainment budget",
        "Professional development opportunities"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive salary, equity options, 401(k) matching, and performance bonuses"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and continuous learning opportunities"
    },
    {
      icon: Globe,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance initiatives"
    },
    {
      icon: Shield,
      title: "Security & Stability",
      description: "Job security, comprehensive insurance, and employee assistance programs"
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Work on cutting-edge technologies and contribute to groundbreaking research"
    }
  ];

  const culture = [
    "Collaborative and inclusive work environment",
    "Continuous learning and skill development",
    "Innovation-driven culture that encourages experimentation",
    "Work-life balance and flexible arrangements",
    "Diverse and international team",
    "Regular team building and social events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> With Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our team of innovators, researchers, and technology experts 
              working on the cutting edge of AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn About Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer more than just a job - we provide an opportunity to shape the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Zion Tech Group, we believe that great ideas come from diverse perspectives 
                and collaborative environments. Our culture is built on innovation, learning, and mutual respect.
              </p>
              <ul className="space-y-3">
                {culture.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Users className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Diverse Team</h3>
                <p className="text-gray-300 mb-6">
                  We're committed to building a diverse and inclusive workplace 
                  where everyone feels valued and empowered to contribute.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Equal opportunity employer</p>
                  <p>• Inclusive hiring practices</p>
                  <p>• Diversity training programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for your skills and career goals.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-blue-400 font-medium">{position.department}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <a
                      href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                      className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Award className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {position.salary}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our application process is designed to be simple and efficient. 
            Here's what you can expect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-gray-300">Fill out our online application form with your details and resume</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Review</h3>
              <p className="text-gray-300">Our team reviews your application and technical background</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview Process</h3>
              <p className="text-gray-300">Technical interviews and team discussions to assess fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send General Application
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;