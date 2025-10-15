import React, { useState } from 'react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Brain, BarChart3, Settings, Code, Database, Cloud, Smartphone, Target, Calendar, DollarSign, Briefcase, GraduationCap, Heart, Coffee, Gamepad2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import EnhancedSEO from '../components/EnhancedSEO"'"
const CareersPage  = () => {const [selectedCategory, setSelectedCategory] = useState('all')'"'"
  const jobCategories  = [{ id: 'all', label: 'All Positions', icon: <Briefcase className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'engineering', label: 'Engineering', icon: <Code className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'ai', label: 'AI & ML', icon: <Brain className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'security', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'product', label: 'Product', icon: <Target className="w-5 h-5" /> },'"'"'"'"'"'"
    { id: 'data', label: 'Data & Analytics', icon: <BarChart3: className="w-5 h-5" /> }'"'"'"'"'"';"
  const: openPositions = [

    {};
      title: "Senior AI Engineer",";
      department: "Engineering",";
      location: "Remote / San Francisco",";
      type: "Full-time",";
      experience: "5+ years",";
      description: "Lead development of cutting-edge AI solutions and machine learning models.",";
      requirements: ["PhD in AI/ML or 5+ years experience", "Python, TensorFlow, PyTorch", "Cloud platforms (AWS, GCP, Azure)", "Team leadership experience"],";
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],";
      icon: <className="w-6 h-6" />";
                  <ArrowRight: className ="w-5 h-5 ml-2" />";

    {
      id: 'senior-ai-engineer',";";";
      title: 'Senior AI Engineer',";";";
      department: 'Engineering',";";";
      location: 'Remote',";";";
      type: 'Full-time',";";";
      experience: '5+ years',";";";
      description: 'Lead the development of cutting-edge AI solutions and machine learning models that power our platform.',";";";
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',";";";
        '5+ years of experience in machine learning and AI development',";";";
        'Proficiency in Python, TensorFlow, PyTorch',";";";
        'Experience with cloud platforms (AWS, GCP, Azure)',";";";
        'Strong problem-solving and communication skills'";";";
      ]
    },
    {
      id: 'frontend-developer',";";";
      title: 'Frontend Developer',";";";
      department: 'Engineering',";";";
      location: 'Remote',";";";
      type: 'Full-time',";";";
      experience: '3+ years',";";";
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',";";";
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',";";";
        '3+ years of experience with React, TypeScript, and modern frontend tools',";";";
        'Experience with CSS frameworks (Tailwind CSS preferred)',";";";
        'Knowledge of responsive design principles',";";";
        'Experience with testing frameworks'";";";
      ]
    },
    {
      id: 'devops-engineer',";";";
      title: 'DevOps Engineer',";";";
      department: 'Engineering',";";";
      location: 'Remote',";";";
      type: 'Full-time',";";";
      experience: '4+ years',";";";
      description: 'Design and maintain our cloud infrastructure and deployment pipelines.',";";";
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',";";";
        '4+ years of experience in DevOps and cloud infrastructure',";";";
        'Experience with Docker, Kubernetes, and CI/CD pipelines',";";";
        'Knowledge of cloud platforms (AWS, GCP, Azure)',";";";
        'Experience with monitoring and logging tools'";";";
      ]
    <>
      <SEOHead: title ="Careers - Zion Tech Group | Join Our Team"";";
        description="Join our team of innovators and help shape the future of AI and technology. Explore exciting career opportunities at Zion Tech Group."";";
        keywords="careers, jobs, employment, tech jobs, AI jobs, software engineering, remote work"";";
      />
      
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";
        {/* Hero Section */}
        <div: className ="relative overflow-hidden">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";";
            <div: className ="text-center">";";
              <h1: className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";
                Join Our Team
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";";
                Help us build the future of AI and technology. We're looking for passionate individuals who want to make a difference.";";";
              </p>
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
                <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
                  View Open Positions
                </button>
                <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",";
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div  className ="py-24 bg-slate-800/50">"
          <div  className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div  className ="text-center mb-16">"
              <h2  className ="text-4xl font-bold mb-4">Why Work With Us</h2>"
              <p  className ="text-xl text-gray-300">We offer competitive benefits and a supportive work environment</p>"
            </div>
            
            <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-3 gap-8">","
              {benefits.map((benefit, index) => (
                <div  key ={index} className="bg-slate-700/50 p-6 rounded-lg hover: bg-slate-700/70 transition-colors">","
                  <div  className ="text-blue-400 mb-4">{benefit.icon}</div>"
                  <h3  className ="text-xl font-semibold mb-2">{benefit.title}</h3>"
                  <p  className ="text-gray-300">{benefit.description}</p>"
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div  className ="py-24">"
          <div  className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div  className ="text-center mb-16">"
              <h2  className ="text-4xl font-bold mb-4">Open Positions</h2>"
              <p  className ="text-xl text-gray-300">Find your next opportunity with us</p>"
            </div>
            
            <div  className ="space-y-8">","
              {openPositions.map((position) => (
                <div  key ={position.id} className="bg-slate-700/50 p-8 rounded-lg hover: bg-slate-700/70 transition-colors">"
                  <div  className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">","
                    <div>
                      <h3  className ="text-2xl font-semibold mb-2">{position.title}</h3>"
                      <div  className ="flex flex-wrap gap-4 text-sm text-gray-300">"
                        <span  className ="flex items-center gap-1">"
                          <Briefcase: className ="w-4 h-4" />"
                          {position.department}
                        </span>
                        <span  className ="flex items-center gap-1">"
                          <MapPin: className ="w-4 h-4" />"
                          {position.location}
                        </span>
                        <span  className ="flex items-center gap-1">"
                          <Clock: className ="w-4 h-4" />"
                          {position.type}
                        </span>
                        <span  className ="flex items-center gap-1">"
                          <Users: className ="w-4 h-4" />"
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <button  className ="mt-4 lg: mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">","
                      Apply Now
                    </button>
                  </div>
                  
                  <p  className ="text-gray-300 mb-4">{position.description}</p>"
                  <div>
                    <h4  className ="font-semibold mb-2">Requirements: </h4>"
                    <ul: className ="space-y-1">","
                      {position.requirements.map((req, index) => (
                        <li: key ={index} className="flex items-start gap-2 text-sm text-gray-300">"
                          <CheckCircle: className ="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />"
                          {req}
              ))}
            </div>
          </div>
          {filteredJobs.length === 0 && (
            <div: className ="text-center py-12">";
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />";
              <h3: className ="text-xl font-semibold text-white mb-2">No positions found</h3>";
              <p: className ="text-gray-300">Try selecting a different category or check back later for new openings.</p>";
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">";
        <div: className ="max-w-4xl mx-auto text-center">";
          <div: className ="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Don't See Your Role?'";
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">";
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.'"'"
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105";
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/team";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105";
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
}'"'"

            <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
  ),";
};";";
export default CareersPage;";";";
"
