"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Star, Users, Heart, Award } from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: "1",
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years of experience in AI/ML",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching",
      ],
      featured: true,
    },
    {
      id: "2",
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years of cloud architecture experience",
        "Certifications in AWS, Azure, or GCP",
        "Experience with containerization and orchestration",
        "Strong leadership and client-facing skills",
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Remote work flexibility",
        "Professional development budget",
        "401(k) with company matching",
      ],
      featured: false,
    },
  ];

  const companyValues = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results for our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and fostering an inclusive, collaborative environment.",
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "We embrace innovation and encourage creative thinking to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Growth",
      description: "We invest in our team's growth and development, providing opportunities to learn and advance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology" />
        <meta property="og:title" content="Careers | Zion Tech Group" />
        <meta property="og:description" content="Join our team and build the future of technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our team and help build the future of technology. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300">
                What drives us to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300">
                Join our team and make an impact
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    {position.featured && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="text-gray-300 text-sm">• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-300 text-sm">• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Apply Now
              </a>
              <a
                href="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;