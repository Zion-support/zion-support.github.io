import React from "react"
import { Link } from "react-router-dom"
import { ;
  Users,;
  Award, ;
  Star, ;
  Target, ;
  TrendingUp, ;
  Globe, ;
  Zap, ;
  Shield, ;
  Brain, ;
  Rocket,;
  Building,;
  Heart,;
  Crown,;
  Sparkles,;
  ArrowRight,;
  Linkedin,;
  Mail,;
  Phone,;
  MapPin;
} from "lucide-react"
import SEO from "../components/SEO"
export default function Leadership() {;
  const leadershipTeam = [;
    {;
      name: 'Kleber Santos',title: 'Founder & CEO',image: 'https://[^;]*
      linkedin: 'https://linkedin.com/in/klebersantos',email: 'kleber@ziontechgroup.com',phone: '+1 302 464 0950'
    };
    {;
      name: 'Dr. Sarah Chen',title: 'Chief Technology Officer',image: 'https://[^;]*
      expertise: ['Quantum ComputingAI Research', 'Technology ArchitectureInnovation Strategy'],;
      linkedin: 'https://linkedin.com/in/sarahchen',email: 'sarah@ziontechgroup.com',phone: '+1 302 464 0951'
    };
    {;
      name: 'Michael Rodriguez',title: 'Chief Operations Officer',image: 'https://[^;]*
      linkedin: 'https://linkedin.com/in/michaelrodriguez',email: 'michael@ziontechgroup.com',phone: '+1 302 464 0952'
    };
    {;
      name: 'Dr. Emily Watson',title: 'Head of AI Research',image: 'https://[^;]*
      linkedin: 'https://linkedin.com/in/emilywatson',email: 'emily@ziontechgroup.com',phone: '+1 302 464 0953'
    };
  ];
  const values = [;
    {;
      icon: Brain,title: 'Innovation First',description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative problem-solving.'
    };
    {;
      icon: Heart,title: 'Client Success',description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.'
    };
    {;
      icon: Shield,title: 'Trust & Security',description: 'We maintain the highest standards of security and ethical AI practices in everything we do.'
    };
    {;
      icon: Globe,title: 'Global Impact',description: 'We believe technology should make the world better for everyone, everywhere.'
    };
  ],;

  const achievements = [;
    {;
      metric: '500+',label: 'AI Solutions Deployed',description: 'Successfully implemented AI solutions across diverse industries'
    };
    {;
      metric: '50+',label: 'Enterprise Clients',description: 'Trusted by leading companies worldwide'
    };
    {;
      metric: '95%',label: 'Client Satisfaction',description: 'Consistently high satisfaction ratings from our clients'
    };
    {;
      metric: '25+',label: 'Industry Awards',description: 'Recognition for innovation and excellence in technology'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Leadership - Zion Tech Group"
        description="Meet the visionary leaders driving innovation at Zion Tech Group. Our experienced team is committed to transforming businesses through cutting-edge AI and technology solutions."
      />;
      ;
      {/* Hero Section */};
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">;
        <div className="container mx-auto px-4">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Meet Our;
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Leadership</[^>]*>
              <br />Team;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
              Visionary leaders with deep expertise in AI, technology innovation, and business transformation. ;
              Our team is dedicated to revolutionizing how businesses leverage technology.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Leadership Team */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Executive Leadership;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Meet the experienced professionals who are driving innovation and growth at Zion Tech Group.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 gap-12">;
            {leadershipTeam.map((leader, index) => (;
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">;
                  <div className="flex-shrink-0">;
                    <img ;
                      src={leader.image} ;
                      alt={leader.name};
                      className="[^"]*"
                    />;
                  </[^>]*>
                  <div className="flex-1">;
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</[^>]*>
                    <p className="text-cyan-400 text-lg font-semibold mb-4">{leader.title}</[^>]*>
                    <p className="text-slate-300 mb-6 leading-relaxed">{leader.bio}</[^>]*>
                    ;
                    <div className="mb-6">;
                      <h4 className="text-white font-semibold mb-3">Areas of Expertise:</[^>]*>
                      <div className="flex flex-wrap gap-2">;
                        {leader.expertise.map((skill, skillIndex) => (;
                          <span ;
                            key={skillIndex};
                            className="[^"]*"
                          >;
                            {skill};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    <div className="flex items-center space-x-4">;
                      <a;
                        href={leader.linkedin};
                        target="_blank"
                        rel="noopener noreferrer"
                        className="[^"]*"
                      >;
                        <[^>]*/>
                        <span>LinkedIn</[^>]*>
                      </[^>]*>
                      <a;
                        href={`mailto:${leader.email}`};
                        className="[^"]*"
                      >;
                        <[^>]*/>
                        <span>Email</[^>]*>
                      </[^>]*>
                      <a;
                        href={`tel:${leader.phone}`};
                        className="[^"]*"
                      >;
                        <[^>]*/>
                        <span>Call</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Company Values */};
      <section className="py-16 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Core Values;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              The principles that guide everything we do and shape our company culture.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {values.map((value, index) => (;
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</[^>]*>
                <p className="text-slate-300">{value.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Achievements */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Achievements;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Milestones that demonstrate our commitment to excellence and innovation.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {achievements.map((achievement, index) => (;
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="text-4xl font-bold text-cyan-400 mb-2">{achievement.metric}</[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.label}</[^>]*>
                <p className="text-slate-300 text-sm">{achievement.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Company Culture */};
      <section className="py-16 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">;
              Join Our Mission;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
              We're building a team of passionate innovators who believe in the power of technology ;
              to transform businesses and improve lives. If you share our vision, we'd love to hear from you.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/careers"
                className="[^"]*"
              >;
                View Open Positions;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get in Touch;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-400/20">;
            <div className="text-center mb-8">;
              <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</[^>]*>
              <p className="text-slate-300">;
                Ready to discuss how our leadership team can help transform your business?;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid md: grid-cols-3 gap-8">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</[^>]*>
                <p className="text-slate-300 text-sm">;
                  364 E Main St STE 1008<[^>]*/>
                  Middletown DE 19709;
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
                <p className="text-slate-300 text-sm">;
                  +1 302 464 0950<[^>]*/>
                  Mon-Fri 9AM-6PM EST;
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</[^>]*>
                <p className="text-slate-300 text-sm">;
                  kleber@ziontechgroup.com<[^>]*/>
                  We'll respond within 24 hours;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};