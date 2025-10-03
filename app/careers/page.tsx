import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  MapPin,
  Briefcase,
  Heart,
  Lightbulb,
  Coffee,
  BookOpen,
  DollarSign,
  Mail,
  Phone,
  Users,
  Rocket,
  CheckCircle,
  Home,
  Award,
  Tag,
  Calendar,
  Target
} from 'lucide-react';

export const metadata = {
  title: 'Careers - Zion Tech Group | Join Our AI Revolution Team',
  description: 'Join the world-class team at Zion Tech Group. Explore career opportunities in AI, engineering, research, and technology leadership.',
  keywords: 'careers, jobs, AI careers, technology jobs, engineering careers, Zion Tech Group careers',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Join Our AI Revolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Be part of the team that's transforming the world with cutting-edge AI technology. 
            Join world-class experts in building the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#open-positions" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a mission-driven company that's pushing the boundaries of what's possible with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Innovation</h3>
              <p className="text-gray-600">
                Work on breakthrough AI technologies that are transforming industries and changing the world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">World-Class Team</h3>
              <p className="text-gray-600">
                Collaborate with leading AI researchers, engineers, and industry experts from top universities and companies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Growth</h3>
              <p className="text-gray-600">
                Join a fast-growing company with unlimited opportunities for career advancement and skill development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
              <p className="text-gray-600">
                Contribute to AI solutions that help Fortune 500 companies achieve unprecedented success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits and perks designed to support your success and well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
              <p className="text-gray-600 mb-4">
                Top-tier salaries, equity participation, and performance bonuses that reward your contributions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Market-leading salaries
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Equity participation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance bonuses
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health coverage and wellness programs to keep you healthy and happy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Premium health insurance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mental health support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fitness stipend
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
              <p className="text-gray-600 mb-4">
                Continuous learning opportunities to advance your skills and career.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Conference attendance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Training budget
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mentorship programs
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
              <p className="text-gray-600 mb-4">
                Work-life balance with flexible schedules and remote work options.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Remote work options
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Flexible hours
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Unlimited PTO
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Office Perks</h3>
              <p className="text-gray-600 mb-4">
                Amazing office environment with all the amenities you need to thrive.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Gourmet meals
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Game rooms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  On-site gym
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
              <p className="text-gray-600 mb-4">
                Clear career paths and opportunities for advancement within the company.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Promotion opportunities
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Leadership development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cross-team collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help build the future of AI. We're looking for talented individuals to join our mission.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Senior AI Research Scientist</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Middletown, DE / Remote</span>
                    <span className="mx-2">•</span>
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Full-time</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Research
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Lead breakthrough research in quantum AI computing and autonomous systems. Work with world-class researchers 
                to develop next-generation AI technologies that will transform industries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Quantum Computing</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Neural Networks</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Python</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Posted 2 days ago
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Senior ML Engineer</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Middletown, DE / Remote</span>
                    <span className="mx-2">•</span>
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Full-time</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Engineering
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Build and deploy scalable machine learning systems for enterprise clients. Work with cutting-edge AI technologies 
                to solve complex business problems and deliver exceptional results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Docker</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Posted 1 week ago
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">AI Solutions Architect</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Middletown, DE / Remote</span>
                    <span className="mx-2">•</span>
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Full-time</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Solutions
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Design and implement AI solutions for Fortune 500 clients. Work directly with enterprise customers 
                to understand their needs and deliver transformative AI implementations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Solution Design</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Enterprise AI</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Client Relations</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Project Management</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Posted 3 days ago
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">DevOps Engineer</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Middletown, DE / Remote</span>
                    <span className="mx-2">•</span>
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Full-time</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-orange-600">
                  <Tag className="w-4 h-4 mr-1" />
                  Infrastructure
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Build and maintain cloud infrastructure for AI workloads. Ensure scalable, secure, and reliable 
                deployment of AI systems for enterprise clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Terraform</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Python</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  Posted 5 days ago
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We encourage bold thinking and breakthrough innovations that push the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe the best solutions come from diverse teams working together toward common goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from research to client delivery and team collaboration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                Our success is measured by the transformative impact we create for our clients and the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest standards of integrity, transparency, and ethical conduct in all our work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">
                We foster continuous learning and growth, both for our team members and the technologies we develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process designed to find the best talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Submit your application with resume and cover letter through our online portal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">
                Our team reviews your application and conducts initial screening within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">
                Technical and cultural fit interviews with team members and leadership.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Decision</h3>
              <p className="text-gray-600 text-sm">
                Receive our decision within one week and join the Zion Tech Group team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the AI revolution and help us build the future of artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
              View All Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Recruiting
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Careers?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>careers@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}