import React from 'react';
import SEOHead from '../components/SEOHead';
import { Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react';
const CareersPage: React.FC  =  () => {
  const benefits = [
    {;
      icon: <Heart className ="w-8 h-8" />,";"
      title: 'Health & Wellness',";"
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'";
    },
    {"
      icon: <DollarSign className ="w-8 h-8" />,";"
      title: 'Competitive Salary',";"
      description: 'Above-market compensation with performance bonuses and equity options.'",
    },
    {"
      icon: <Home className ="w-8 h-8" />,";"
      title: 'Remote Work',";"
      description: 'Flexible remote work options with home office setup assistance.'",
    },
    {"
      icon: <GraduationCap className ="w-8 h-8" />,";"
      title: 'Learning & Development',";"
      description: 'Professional development budget, conferences, and skill-building opportunities.'";
    },
    {"
      icon: <Zap className ="w-8 h-8" />,";"
      title: 'Innovation Time',";"
      description: 'Dedicated time for personal projects and innovation initiatives.'",
    },
    {"
      icon: <Shield className ="w-8 h-8" />,";"
      title: 'Work-Life Balance',";"
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'";
    }
  ];
import { Helmet } from 'react-helmet-async';
const CareersPage: React.FC  =  () => {}
  const openPositions = [
    {}"
      title: "Senior AI Engineer","
      department: "Engineering","
      location: "Remote / San Francisco","
      type: "Full-time","
      experience: "5+ years","
      description: "Lead development of cutting-edge AI solutions and machine learning models.","
      requirements: ["PhD in AI/ML or 5+ years experience", "Python, TensorFlow, PyTorch", "Cloud platforms (AWS, GCP, Azure)", "Team leadership experience"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <className="w-6 h-6" />
    },
    {}"
      title: "DevOps Engineer","
      department: "Engineering","
      location: "Remote / New York","
      type: "Full-time","
      experience: "3+ years","
      description: "Build and maintain scalable infrastructure for our AI platform.","
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure", "ing tools"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Settings className="w-6 h-6" />
    },
    {}"
      title: "Product Manager","
      department: "Product","
      location: "San Francisco","
      type: "Full-time","
      experience: "4+ years","
      description: "Drive product strategy and roadmap for our AI solutions.","
      requirements: ["Product management experience", "AI/ML knowledge", "Analytics skills", "Cross-functional collaboration"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Target className="w-6 h-6" />
    };
  ];
  const benefits  =  ["
    { icon: <DollarSign className="w-8 h-8" />, title: "Competitive Compensation", description: "Above-market salaries with equity options" },"
    { icon: <className="w-8 h-8" />, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },"
    { icon: <Home className="w-8 h-8" />, title: "Flexible Work", description: "Remote-first culture with flexible hours" },"
    { icon: <GraduationCap className="w-8 h-8" />, title: "Learning & Development", description: "Annual learning budget and conference attendance" },"
    { icon: <className="w-8 h-8" />, title: "Cutting-Edge Tech", description: "Work with the latest AI and cloud technologies" },"
    { icon: <className="w-8 h-8" />, title: "Job Security", description: "Stable company with strong growth trajectory" };
  ];
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Careers - Zion Tech Group</title>"
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the AI revolution. We're looking for passionate individuals 
            who want to shape the future of technology.
          </p>
        </div>"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => ()}"
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                {benefit.icon}
              </div>"
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>"
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>"
          <div className="space-y-8">
            {openPositions.map((position, index) => ()}"
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">"
                <div className="flex items-start justify-between mb-6">"
                  <div className="flex items-center">"
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      {position.icon}
                    </div>
                    <div>"
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>"
                      <p className="text-gray-600">{position.department}</p>
                    </div>
                  </div>"
                  <div className="text-right">"
                    <p className="text-gray-600">{position.location}</p>"
                    <p className="text-gray-500">{position.type}</p>
                  </div>
                </div>"
                <p className="text-gray-700 mb-6">{position.description}</p>"
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>"
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => ()}"
                        <li key={reqIndex} className="flex items-center">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>"
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => ()}"
                        <li key={benefitIndex} className="flex items-center">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>"
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                  Apply Now"
                  <ArrowRight className="w-5 h-5 ml-2" />
    {"
      id: 'senior-ai-engineer',";"
      title: 'Senior AI Engineer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '5+ years',";"
      description: 'Lead the development of cutting-edge AI solutions and machine learning models that power our platform.',";
      requirements: ["
        'Master\'s degree in Computer Science, AI, or related field',";"
        '5+ years of experience in machine learning and AI development',";"
        'Proficiency in Python, TensorFlow, PyTorch',";"
        'Experience with cloud platforms (AWS, GCP, Azure)',";"
        'Strong problem-solving and communication skills'";
      ]
    },
    {"
      id: 'frontend-developer',";"
      title: 'Frontend Developer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '3+ years',";"
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',";
      requirements: ["
        'Bachelor\'s degree in Computer Science or related field',";"
        '3+ years of experience with React, TypeScript, and modern frontend tools',";"
        'Experience with CSS frameworks (Tailwind CSS preferred)',";"
        'Knowledge of responsive design principles',";"
        'Experience with testing frameworks'";
      ]
    },
    {"
      id: 'devops-engineer',";"
      title: 'DevOps Engineer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '4+ years',";"
      description: 'Design and maintain our cloud infrastructure and deployment pipelines.',";
      requirements: ["
        'Bachelor\'s degree in Computer Science or related field',";"
        '4+ years of experience in DevOps and cloud infrastructure',";"
        'Experience with Docker, Kubernetes, and CI/CD pipelines',";"
        'Knowledge of cloud platforms (AWS, GCP, Azure)',";"
        'Experience with monitoring and logging tools'";
      ]
    }
  ];
  const stats  =  ["
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },""
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6" /> },""
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },""
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6" /> }"";
  ];
  const filteredJobs  =  selectedCategory === 'all''
    ? jobOpenings;
    : jobOpenings.filter(job => job.category === selectedCategory);
  return (
    <>"
      <SEOHead title ="Careers - Zion Tech Group | Join Our Team"";"
        description="Join our team of innovators and help shape the future of AI and technology. Explore exciting career opportunities at Zion Tech Group."";"
        keywords="careers, jobs, employment, tech jobs, AI jobs, software engineering, remote work"";
      />"
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        {/* Hero Section */}"
        <div className ="relative overflow-hidden">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";"
            <div className ="text-center">";"
              <h1 className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                Join Our Team
              </h1>"
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";"
                Help us build the future of AI and technology. We're looking for passionate individuals who want to make a difference.";
              </p>"
              <div className ="flex flex-col sm:flex-row gap-4 justify-center">";"
                <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
                  View Open Positions
                </button>"
                <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Benefits Section */}"
        <div className ="py-24 bg-slate-800/50">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Why Work With Us</$1>"
              <p className ="text-xl text-gray-300">We offer competitive benefits and a supportive work environment</$1>
            </div>"
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",
              {benefits.map((benefit, index) => ("
                <div key ={index} className="bg-slate-700/50 p-6 rounded-lg hover: bg-slate-700/70 transition-colors">","
                  <div className ="text-blue-400 mb-4">{benefit.icon}</$1>"
                  <h3 className ="text-xl font-semibold mb-2">{benefit.title}</$1>"
                  <p className ="text-gray-300">{benefit.description}</$1>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Open Positions Section */}"
        <div className ="py-24">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Open Positions</$1>"
              <p className ="text-xl text-gray-300">Find your next opportunity with us</$1>
            </div>"
            <div className ="space-y-8">",
              {openPositions.map((position) => ("
                <div key ={position.id} className="bg-slate-700/50 p-8 rounded-lg hover: bg-slate-700/70 transition-colors">";"
                  <div className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">",
                    <div>"
                      <h3 className ="text-2xl font-semibold mb-2">{position.title}</$1>"
                      <div className ="flex flex-wrap gap-4 text-sm text-gray-300">";"
                        <span className ="flex items-center gap-1">";"
                          <Briefcase className ="w-4 h-4" />";
                          {position.department}
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <MapPin className ="w-4 h-4" />";
                          {position.location}
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <Clock className ="w-4 h-4" />";
                          {position.type}
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <Users className ="w-4 h-4" />";
                          {position.experience}
                        </span>
                      </div>
                    </div>"
                    <button className ="mt-4 lg: mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">",
                      Apply Now
                    </button>
                  </div>"
                  <p className ="text-gray-300 mb-4">{position.description}</$1>
                  <div>"
                    <h4 className ="font-semibold mb-2">Requirements: </$1>"
                    <ul className ="space-y-1">",
                      {position.requirements.map((req, index) => ("
                        <li key ={index} className="flex items-start gap-2 text-sm text-gray-300">";"
                          <CheckCircle className ="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />";
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {filteredJobs.length === 0 && ("
            <div className="text-center py-12">""
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />""
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>""
              <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>""
            </div>
          )}
        </div>
        {/* CTA Section */}"
        <div className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";"
          <div className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";"
            <h2 className ="text-4xl font-bold mb-4">Don't See Your Role?</$1>"
            <p className ="text-xl text-gray-300 mb-8">";"
              We're always looking for talented individuals. Send us your resume and let's start a conversation.";
            </p>"
            <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  ),
};
export default CareersPage;
"