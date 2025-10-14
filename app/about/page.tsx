import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Users, Lightbulb, Target, Heart } from "lucide-react";

export default function AboutPage() {const values = [,

  {,

icon: Lightbulb}
}
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology.",
    },
    {,

icon: Target}
      title: "Excellence",
      description: "We deliver exceptional results that exceed expectations and drive business growth.",
    },
    {,

icon: Heart}
      title: "Integrity",
      description: "We build trust through transparent communication and ethical business practices.",
    },
    {,

icon: Users}
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success journey.",
    };];,

  const team = [,

    {,

      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and technology innovation."},
    {,

      name: "Michael Chen",
      role: "CTO",
      description: "Technical architect specializing in scalable AI solutions and cloud infrastructure."},
    {,

      name: "Emily Rodriguez",
      role: "Head of AI Research",
      description: "PhD in Machine Learning with expertise in natural language processing."},
    {,

      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack developer with passion for creating intuitive user experiences."}
  ];,

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    </div>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the expert team behind our innovative AI and IT solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            About Zion Tech Group,
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            We are a leading technology company specializing in AI-powered solutions and innovative IT services that transform businesses and drive digital success.,
          </p>
        </div>
    </div>
      </section>

    </section>
      {/* Mission Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="grid lg: grid-cols-2 gap-12 items-center"></div>
    </div>
            <div>
    </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6"></p>
                To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. We believe that every organization should have the power to leverage AI for growth, efficiency, and innovation.,
              </p>
              <div className="space-y-4"></div>
    </div>
                <div className="flex items-center text-purple-400"></div>
    </div>
                  <CheckCircle className="w-6 h-6 mr-3" /></CheckCircle>
                  <span className="font-semibold">AI-First Approach</span>
                </div>
    </div>
                <div className="flex items-center text-purple-400"></div>
    </div>
                  <CheckCircle className="w-6 h-6 mr-3" /></CheckCircle>
                  <span className="font-semibold">Client-Centric Solutions</span>
                </div>
    </div>
                <div className="flex items-center text-purple-400"></div>
    </div>
                  <CheckCircle className="w-6 h-6 mr-3" /></CheckCircle>
                  <span className="font-semibold">Continuous Innovation</span>
                </div>
    </div>
              </div>
    </div>
            </div>
    </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
    </div>
              <div className="grid grid-cols-2 gap-6"></div>
    </div>
                <div className="text-center"></div>
    </div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
    </div>
                  <div className="text-gray-400">Projects Delivered</div>
    </div>
                </div>
    </div>
                <div className="text-center"></div>
    </div>
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
    </div>
                  <div className="text-gray-400">Happy Clients</div>
    </div>
                </div>
    </div>
                <div className="text-center"></div>
    </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
    </div>
                  <div className="text-gray-400">Expert Team</div>
    </div>
                </div>
    </div>
                <div className="text-center"></div>
    </div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
    </div>
                  <div className="text-gray-400">Support</div>
    </div>
                </div>
    </div>
              </div>
    </div>
            </div>
    </div>
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Values Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="text-center mb-16"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              The principles that guide everything we do,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </div>
            {values.map((value, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover: bg-slate-800/70 transition-all duration-300"></div>
    </div>
                <value.icon className="w-12 h-12 text-purple-400 mb-4" /></value.icon>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
    </div>
            ))}
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* Team Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto"></div>
    </div>
          <div className="text-center mb-16"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
              The experts behind our innovative solutions,
            </p>
          </div>
    </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </div>
            {team.map((member, index) => (

              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-slate-800/70 transition-all duration-300"></div>
    </div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
    </div>
                  <Users className="w-10 h-10 text-white" /></Users>
                </div>
    </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
    </div>
            ))}
          </div>
    </div>
        </div>
    </div>
      </section>

    </section>
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
    </section>
        <div className="container mx-auto text-center"></div>
    </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"></div>
    </div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Let's discuss how we can help transform your business with AI and technology.,
            </p>
            <a,
              href="/contact",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            ></a,
>
              Get In Touch,
              <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
            </a>
          </div>
    </div>
        </div>
    </div>
      </section>
    </section>
    </div>
    </div>
  );,
}