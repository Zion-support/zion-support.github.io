import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Award,
  Target,
  Globe,
  Shield,
  Zap,
  Brain,
  BarChart,
  CheckCircle,
  Star,
  Quote,
  User,
  Building,
  GraduationCap,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Settings,
  Sparkles,
  Cloud,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin;)
} from 'lucide-react';
;
const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title></titl>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
<section className="py-20 bg-slate-800/50"></section>
          <div className="container mx-auto px-4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>
                <h2 className="text-4xl font-bold text-white mb-6"></h>Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6"></p>
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8"></p>
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4"></div>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  ></a>
                    <MessageCircle className="w-5 h-5" />
                    <span></spa>Get in Touch</span>
                  </a>
                  <a
                    href="/services"
                    className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  ></a>
                    <Settings className="w-5 h-5" />
                    <span></spa>Our Services</span>
                  </a>
                </div>
              </div>
              <div className="relative"></div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10"></div>
                  <div className="space-y-6"></div>
                    <div className="flex items-center space-x-3"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="space-y-4"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="text-center text-white"></div>
                      <div className="text-2xl font-bold"></di>AI Dashboard</div>
                      <div className="text-sm text-gray-300"></di>Real-time Analytics</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
</section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Our Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h>Innovation</h3>
                <p className="text-gray-300">We constantly push the boundaries of what's possible with technology.</p>
              </div>
              <div className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h>Collaboration</h3>
                <p className="text-gray-300">We work closely with our clients to achieve their goals.</p>
              </div>
              <div className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h>Excellence</h3>
                <p className="text-gray-300">We deliver exceptional results that exceed expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h>Ready to Work With Us?</h2>
            <p className="text-xl text-gray-100 mb-8"></p>
              Let's discuss how we can help transform your business with AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button>
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"></button>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
);)
};

export default AboutPage;