import React from "react";
"use client";
import { Helmet } from "react-helmet-async";


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
      description:
        "Lead the development of cutting-edge AI solutions and machine learning models.",
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
      description:
        "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
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

  const _companyValues = [
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering exceptional results for our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and fostering an inclusive, collaborative environment.",
    },
    {
      icon: Heart,
      title: "Innovation",
      description:
        "We embrace innovation and encourage creative thinking to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Growth",
      description:
        "We invest in our team's growth and development, providing opportunities to learn and advance.",
    },
  ];
  return (
    <>
      <Helmet>
        </div>
      </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to creating an environment where our team can
                thrive and make a meaningful impact.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
        
          </div><div key={index} className="text-center">
        
          </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
          <h1 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
          
          </div><p className="text-gray-300">{value.description}</p>{" "}
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-white/5">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our growing
                team.
              </p>
        <div className="space-y-8">
        
          </div><div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        
          </div><div>
        
          </div><div className="flex items-center gap-4 mb-2">
          <h1 className="text-2xl font-bold text-white">
                          {position.title}
                        </h3>
                        {position.featured && (
                          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                            Featured
                          </span>
                        )}
        
          </div><div className="flex flex-wrap items-center gap-4 text-gray-300">
        
          </div><div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
        
          </div><div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
        
          </div><div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
        
          </div><div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{position.experience}</span>
        </div>
      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
          <p className="text-gray-300 mb-6">{position.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          </div><div>
          <h1 className="text-lg font-semibold text-white mb-3">
                        Requirements
                      </h4>
            
          </div><ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
        <div>
          <h1 className="text-lg font-semibold text-white mb-3">
                        Benefits
                      </h4>
            
          </div><ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
        </div>
      </div>{" "}
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume
              and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Send Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>{" "}
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default CareersPage;
