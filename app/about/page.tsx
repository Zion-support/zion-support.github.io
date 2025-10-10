import React from 'react';
import { Helmet } from 'react-helmet-async';
import {}
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
  MapPin;
} from 'lucide-react';

const AboutPage: React.FC = () => {}
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape our approach to innovation and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and solutions.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                <p className="text-gray-400">Leading AI researchers and engineers</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Engineering Team</h3>
                <p className="text-gray-400">Full-stack developers and system architects</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Team</h3>
                <p className="text-gray-400">Strategy and client success specialists</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;