import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap
} from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our AI team to build cutting-edge machine learning models and AI solutions.",
      requirements: [
        "Strong Python programming skills",
        "Experience with TensorFlow/PyTorch",
        "Knowledge of ML algorithms and data structures",
        "Experience with cloud platforms (AWS/Azure/GCP)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $150k",
      description: "Help protect our clients with advanced cybersecurity solutions and threat detection.",
      requirements: [
        "Experience with SIEM tools and security monitoring",
        "Knowledge of network security and protocols",
        "Familiarity with compliance frameworks",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $160k",
      description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "Experience with Kubernetes and Docker",
        "Knowledge of AWS, Azure, or GCP",
        "Experience with CI/CD tools",
        "Infrastructure as Code experience"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ]
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Remote / Chicago, IL",
      type: "Full-time",
      experience: "5+ years",
      salary: "$90k - $140k",
      description: "Drive business growth through strategic partnerships and client relationships.",
      requirements: [
        "Proven track record in B2B sales",
        "Experience in technology consulting",
        "Strong communication and presentation skills",
        "Ability to build long-term relationships"
      ],
      benefits: [
        "Competitive salary and commission",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family.",
      icon: Heart
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conferences, and skill development programs.",
      icon: GraduationCap
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO to maintain balance.",
      icon: Clock
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages, equity options, and performance-based bonuses.",
      icon: DollarSign
    },
    {
      title: "Innovation Culture",
      description: "Work on cutting-edge technologies and be part of groundbreaking projects.",
      icon: Zap
    },
    {
      title: "Team Collaboration",
      description: "Join a diverse, collaborative team of experts and innovators.",
      icon: Users
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and experimentation with new technologies."
    },
    {
      title: "Continuous Learning",
      description: "Our team members are always growing and developing new skills."
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from working together as a team."
    },
    {
      title: "Impact-Driven",
      description: "We focus on creating real value for our clients and society."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Be part of a team that's shaping the future of technology. Work on 
            cutting-edge projects and grow your career with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment where you can thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore current opportunities to join our team and make an impact.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  {position.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and 
            let's discuss how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Your Resume
            </Link>
            <Link
              to="/team"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;