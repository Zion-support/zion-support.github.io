"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Target, Users, Award, ArrowRight } from "lucide-react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with AI and technology.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships with our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from code to customer service.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in AI and technology leadership.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in machine learning and cloud architecture.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description:
        "Passionate about creating beautiful, user-centered experiences.",
    },
  ];

  return (
    <>
      
    </><Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of AI and IT experts." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div><section className="relative py-20 px-4 overflow-hidden">
          
        </section><div className="relative max-w-6xl mx-auto text-center">
          <h$1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Zion Tech Group
              </span>
            </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/5">
          
        </section><div className="max-w-6xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-4xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
        
          </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        
          </div><div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-blue-400" />
          <h$1 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
          
          </div><p className="text-gray-300">{value.description}</p>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          
        </section><div className="max-w-6xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The talented individuals behind our innovative solutions.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
        
          </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
        
          </div><div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-400" />
          <h$1 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
          
          </div><p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          
        </section><div className="max-w-4xl mx-auto text-center">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;