import React, { useState } from 'react;
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Brain, BarChart3, Settings, Code, Database, Cloud, Smartphone, Target, Calendar, DollarSign, Briefcase, GraduationCap, Heart, Coffee, Gamepad2 } from "lucide-react";

import { Helmet } from 'react-helmet-async';
import EnhancedSEO from '../components/EnhancedSEO;

const CareersPage = () => {';
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = ['
    { id: 'all', label: 'All Positions', icon: <Briefcase className="w-5 h-5"> },'
    { id: 'engineering', label: 'Engineering', icon: <Code className="w-5 h-5"> },'
    { id: 'ai', label: 'AI & ML', icon: <Brain className="w-5 h-5"> },'
    { id: 'security', label: 'Cybersecurity', icon: <Shield className="w-5 h-5"> },'
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5"> },'
    { id: 'product', label: 'Product', icon: <Target className="w-5 h-5"> },'
    { id: 'data', label: 'Data & Analytics', icon: <BarChart3 className="w-5 h-5"> }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & ML",
      category: "ai",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years experience in AI/ML",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)"
      ],
      benefits: ["Health Insurance", "401k Matching", "Flexible Hours", "Learning Budget"],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      category: "security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130,000 - $200,000",
      description: "Design and implement enterprise-grade security solutions and frameworks.",
      requirements: [
        "CISSP, CISM, or similar certification",
        "7+ years in cybersecurity",
        "Experience with security frameworks (NIST, ISO 27001)",
        "Knowledge of cloud security best practices"
      ],
      benefits: ["Health Insurance", "401k Matching", "Security Training", "Home Office Setup"],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      category: "cloud",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "6+ years",
      salary: "$140,000 - $220,000",
      description: "Architect scalable cloud solutions and lead DevOps transformation initiatives.",
      requirements: [
        "AWS/Azure/GCP certifications",
        "6+ years cloud architecture experience",
        "Expertise in Kubernetes, Docker, Terraform",
        "Experience with CI/CD pipelines"
      ],
      benefits: ["Health Insurance", "401k Matching", "Cloud Certifications", "Flexible Schedule"],
      posted: "3 days ago",
      featured: true
    },
    {
      id: 4,
      title: "Product Manager - AI Solutions",
      department: "Product",
      category: "product",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Drive product strategy and roadmap for our AI-powered solutions portfolio.",
      requirements: [
        "MBA or technical degree",
        "4+ years product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills"
      ],
      benefits: ["Health Insurance", "401k Matching", "Stock Options", "Professional Development"],
      posted: "5 days ago",
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data & Analytics",
      category: "data",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Extract insights from complex datasets and build predictive models for business applications.",
      requirements: [
        "MS in Data Science or related field",
        "3+ years data science experience",
        "Proficiency in Python, R, SQL",
        "Experience with statistical modeling and ML"
      ],
      benefits: ["Health Insurance", "401k Matching", "Data Science Conferences", "Research Time"],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Engineering",
      category: "engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $130,000",
      description: "Build beautiful, responsive user interfaces for our web applications and dashboards.",
      requirements: [
        "3+ years frontend development experience",
        "Expertise in React, TypeScript, CSS",
        "Experience with modern build tools",
        "Portfolio demonstrating UI/UX skills"
      ],
      benefits: ["Health Insurance", "401k Matching", "Design Tools", "Creative Freedom"],
      posted: "4 days ago",
      featured: false;
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support",
      icon: <Heart />
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and certification support",
      icon: <GraduationCap />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO",
      icon: <Coffee />
    },
    {
      title: "Growth Opportunities",
      description: "Clear career paths, mentorship programs, and internal mobility",
      icon: <Target />
    },
    {
      title: "Modern Tools",
      description: "Latest technology stack, top-tier equipment, and home office setup",
      icon: <Settings />
    },
    {
      title: "Team Culture",
      description: "Collaborative environment, team events, and innovation time",
      icon: <Users />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6"> },
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6"> },
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6"> },
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6"> }
  ];
'
  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <h1>Join Our
             <span>{" "}Mission
            </span></h1>
          <p />
            Be part of the future of technology. Join our diverse team of innovators, engineers, and visionaries who are building the next generation of AI and IT solutions.

          </p>
          <div>
    <Link />
              View Open Positions
              <ArrowRight />
            </Link>
            <Link />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div>
    <div />
            {stats.map((stat, index) => (
              <div>
    <div />
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Why Join Zion Tech Group?
              </span>
            </h2>
            <p />'
              We're not just building technology – we're shaping the future. Here's what makes us special.
            </p>
          </div>
          
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <div />
                <div>
    <div />
                    {benefit.icon}
                  </div>
                  <h3 />
                    {benefit.title}
                  </h3>
                  <p />
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Open Positions
              </span>
            </h2>
            <p />
              Find your perfect role and help us build the future of technology.
            </p>
          </div>

          {/* Category Filter */}
          <div />
            {jobCategories.map((category) => (
              <button
                key={category.id;
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg';
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon;
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div />
            {filteredJobs.map((job) => (
              <div />
                {job.featured && (
                  <div>
    <span />
                      Featured
                    </span>
                  </div>
                )}
                
                <div>
    <div />
                    <div>
    <h3 />
                        {job.title}
                      </h3>
                      <span />
                        {job.department}
                      </span>
                    </div>
                    
                    <div>
    <div />
                        <MapPin />
                        <span>{job.location}</span>
                      </div>
                      <div>
    <Clock />
                        <span>{job.type}</span>
                      </div>
                      <div>
    <Briefcase />
                        <span>{job.experience}</span>
                      </div>
                      <div>
    <DollarSign />
                        <span>{job.salary}</span>
                      </div>
                      <div>
    <Calendar />
                        <span>Posted {job.posted}</span>
                      </div>
  </div>
  <p />
                      {job.description}
                    </p>
                    
                    <div />
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span />
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span />
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
  </div>
  <div>
    <button />
                      Apply Now
                      <ArrowRight />
                    </button>
                    <button />
                      View Details
                    </button>
                  </div>
        </div>
      </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div>
    <Briefcase />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <div />
            <h2 />'
              Don't See Your Role?
            </h2>
            <p />'
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div>
    <Link />
                Send Your Resume
                <ArrowRight />
              </Link>
              <Link />
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}'
}'

'