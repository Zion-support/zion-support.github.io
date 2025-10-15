import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Users, Award, Zap, Globe, Target } from 'lucide-react';
// Company values
const values = [
  { icon: <Brain className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions." },
  { icon: <Shield className="w-8 h-8" />,
    title: "Security & Trust",
    description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures." },
  { icon: <Users className="w-8 h-8" />,
    title: "Client Success",
    description: "Our success is measured by our clients' success. We're committed to delivering exceptional results." },
  { icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service." }
];
// Company stats
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "150+", label: "Happy Clients" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];
// Team members
const team = [
  { name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech innovation",
    image: "/api/placeholder/300/300" },
  { name: "Michael Chen",
    role: "CTO",
    description: "Technical architect specializing in AI and cloud solutions",
    image: "/api/placeholder/300/300" },
  { name: "Emily Rodriguez",
    role: "Head of Design",
    description: "Creative director focused on user experience and interface design",
    image: "/api/placeholder/300/300" },
  { name: "David Kim",
    role: "Lead Developer",
    description: "Full-stack developer with expertise in modern web technologies",
    image: "/api/placeholder/300/300" }
];
// Services we offer
const services = [
  { icon: <Zap className="w-6 h-6" />,
    title: "AI Solutions",
    description: "Custom AI implementations for business automation and intelligence" },
  { icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Modern, responsive websites and web applications" },
  { icon: <Target className="w-6 h-6" />,
    title: "Digital Transformation",
    description: "Complete digital transformation strategies and implementation" },
  { icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business" }
];

const AboutPage: React.FC = () => { return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI solutions, web development, and digital transformation." />
        <meta name="keywords" content="about us, technology company, AI solutions, web development, digital transformation, team" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology company specializing in AI solutions and digital transformation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We are a leading technology company dedicated to transforming businesses 
                through innovative AI solutions, cutting-edge web development, and comprehensive digital transformation.
              </p>
            </div>
          </div>
        </section>
        { /* Stats Section */ }
        <section className="py-20 bg-white/5">
          
        <div className="container mx-auto px-4">
            
        <div className="grid md:grid-cols-4 gap-8">
              { stats.map((stat, index) => (
                <div key={index } className="text-center">
                  
        <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    { stat.number }
                  </div>
                  
        <div className="text-gray-300 text-lg">
                    { stat.label }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Values Section */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { values.map((value, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  
        <div className="text-cyan-400 mb-4 flex justify-center">
                    { value.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ value.title }</h3>
                  
          <p className="text-gray-300">{ value.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Services Section */ }
        <section className="py-20 bg-white/5">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What We Do</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { services.map((service, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  
        <div className="text-cyan-400 mb-4">
                    { service.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ service.title }</h3>
                  
          <p className="text-gray-300">{ service.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Team Section */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind our success
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { team.map((member, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      { member.name.split(' ').map(n => n[0]).join('') }
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{ member.name }</h3>
                  
        <div className="text-cyan-400 mb-3">{ member.role }</div>
                  
          <p className="text-gray-300 text-sm">{ member.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get In Touch
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutPage;