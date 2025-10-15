<<<<<<< HEAD
import React from 'react";";";";
import SEOHead from '../components/SEOHead";";";";
import { Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react";
const CareersPage: React.FC  =  () => {";
  const benefits = [";";
    {;";";,";
      icon: <Heart className ="w-8 h-8" />,";"
      title: 'Health & Wellness',";"
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'";";";
    },";";";
    {"
      icon: <DollarSign className ="w-8 h-8" />,";"
      title: 'Competitive Salary',";"
      description: 'Above-market compensation with performance bonuses and equity options.'",";";
    },";";";
    {"
      icon: <Home className ="w-8 h-8" />,";"
      title: 'Remote Work',";"
      description: 'Flexible remote work options with home office setup assistance.'",";";
    },";";";
    {"
      icon: <GraduationCap className ="w-8 h-8" />,";"
      title: 'Learning & Development',";"
      description: 'Professional development budget, conferences, and skill-building opportunities.'";";";
    },";";";
    {"
      icon: <Zap className ="w-8 h-8" />,";"
      title: 'Innovation Time',";"
      description: 'Dedicated time for personal projects and innovation initiatives.'",";";
    },";";";
    {"
      icon: <Shield className ="w-8 h-8" />,";"
      title: 'Work-Life Balance',";"
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'";";
    };";";
  ];";";";
import { Helmet } from 'react-helmet-async";";
const CareersPage: React.FC  =  () => {};";";
  const openPositions = [";";";
    {}"
      title: "Senior AI Engineer","
      department: "Engineering","
      location: "Remote / San Francisco","
      type: "Full-time","
      experience: "5+ years","
      description: "Lead development of cutting-edge AI solutions and machine learning models.","
      requirements: ["PhD in AI/ML or 5+ years experience", "Python, TensorFlow, PyTorch", "Cloud platforms (AWS, GCP, Azure)", "Team leadership experience"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <className="w-6 h-6" />";";
    },";";";
    {}"
      title: "DevOps Engineer","
      department: "Engineering","
      location: "Remote / New York","
      type: "Full-time","
      experience: "3+ years","
      description: "Build and maintain scalable infrastructure for our AI platform.","
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure", "ing tools"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Settings className="w-6 h-6" />";";
    },";";";
    {}"
      title: "Product Manager","
      department: "Product","
      location: "San Francisco","
      type: "Full-time","
      experience: "4+ years","
      description: "Drive product strategy and roadmap for our AI solutions.","
      requirements: ["Product management experience", "AI/ML knowledge", "Analytics skills", "Cross-functional collaboration"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Target className="w-6 h-6" />";
    };";";
  ];";";";
  const benefits  =  ["
    { icon: <DollarSign className="w-8 h-8" />, title: "Competitive Compensation", description: "Above-market salaries with equity options" },"
    { icon: <className="w-8 h-8" />, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },"
    { icon: <Home className="w-8 h-8" />, title: "Flexible Work", description: "Remote-first culture with flexible hours" },"
    { icon: <GraduationCap className="w-8 h-8" />, title: "Learning & Development", description: "Annual learning budget and conference attendance" },"
    { icon: <className="w-8 h-8" />, title: "Cutting-Edge Tech", description: "Work with the latest AI and cloud technologies" },"
    { icon: <className="w-8 h-8" />, title: "Job Security", description: "Stable company with strong growth trajectory" };";";
  ];";";";
  return ()"
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">";";
      <Helmet>";";";
        <title>Careers - Zion Tech Group</title>"
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />";";";
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">";";
            Join Our Team";";";
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">";";";
            Be part of the AI revolution. We"re looking for passionate individuals ";
            who want to shape the future of technology.";";
          </p>";";";
        </div>"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";";";
          {benefits.map((benefit, index) => ()}"
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">";";
                {benefit.icon}";";";
              </div>"
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>"
              <p className="text-gray-600">{benefit.description}</p>";
            </div>";";
          ))}";";";
        </div>"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>"
          <div className="space-y-8">";";";
            {openPositions.map((position, index) => ()}"
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">"
                <div className="flex items-start justify-between mb-6">"
                  <div className="flex items-center">"
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">";
                      {position.icon};";";
                    </div>";";";
                    <div>"
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>"
                      <p className="text-gray-600">{position.department}</p>";";
                    </div>";";";
                  </div>"
                  <div className="text-right">"
                    <p className="text-gray-600">{position.location}</p>"
                    <p className="text-gray-500">{position.type}</p>";";
                  </div>";";";
                </div>"
                <p className="text-gray-700 mb-6">{position.description}</p>"
                <div className="grid md:grid-cols-2 gap-6 mb-6">";";";
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>"
                    <ul className="space-y-2">";";";
                      {position.requirements.map((req, reqIndex) => ()}"
                        <li key={reqIndex} className="flex items-center">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))};";
                    </ul>";";
                  </div>";";";
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>"
                    <ul className="space-y-2">";";";
                      {position.benefits.map((benefit, benefitIndex) => ()}"
                        <li key={benefitIndex} className="flex items-center">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))};";
                    </ul>";";
                  </div>";";";
                </div>"
                <button className="bg-blue-600 hover: bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">";";";
                  Apply Now"
                  <ArrowRight className="w-5 h-5 ml-2" />";";";
    {",";
      id: 'senior-ai-engineer',";"
      title: 'Senior AI Engineer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '5+ years',";"
      description: 'Lead the development of cutting-edge AI solutions and machine learning models that power our platform.',";";";";
      requirements: ["
        'Master\'s degree in Computer Science, AI, or related field',";"
        '5+ years of experience in machine learning and AI development',";"
        'Proficiency in Python, TensorFlow, PyTorch',";"
        'Experience with cloud platforms (AWS, GCP, Azure)',";"
        'Strong problem-solving and communication skills'";";
      ]";";
    },";";";
    {"
      id: 'frontend-developer',";"
      title: 'Frontend Developer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '3+ years',";"
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',";";";";
      requirements: ["
        'Bachelor\'s degree in Computer Science or related field',";"
        '3+ years of experience with React, TypeScript, and modern frontend tools',";"
        'Experience with CSS frameworks (Tailwind CSS preferred)',";"
        'Knowledge of responsive design principles',";"
        'Experience with testing frameworks'";";
      ]";";
    },";";";
    {"
      id: 'devops-engineer',";"
      title: 'DevOps Engineer',";"
      department: 'Engineering',";"
      location: 'Remote',";"
      type: 'Full-time',";"
      experience: '4+ years',";"
      description: 'Design and maintain our cloud infrastructure and deployment pipelines.',";";";";
      requirements: ["
        'Bachelor\'s degree in Computer Science or related field',";"
        '4+ years of experience in DevOps and cloud infrastructure',";"
        'Experience with Docker, Kubernetes, and CI/CD pipelines',";"
        'Knowledge of cloud platforms (AWS, GCP, Azure)',";"
        'Experience with monitoring and logging tools'";
      ];";
    };";";
  ];";";";
  const stats  =  ["
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },""
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6" /> },""
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },""
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6" /> }"";";";
  ];";";";
  const filteredJobs  =  selectedCategory === 'all'"
    ? jobOpenings;";
    : jobOpenings.filter(job => job.category === selectedCategory);";";
  return (";";";
    <>"
      <SEOHead title ="Careers - Zion Tech Group | Join Our Team"";"
        description="Join our team of innovators and help shape the future of AI and technology. Explore exciting career opportunities at Zion Tech Group."";"
        keywords="careers, jobs, employment, tech jobs, AI jobs, software engineering, remote work"";";";";
      />"
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";";";
        {/* Hero Section */}"
        <div className ="relative overflow-hidden">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";"
            <div className ="text-center">";"
              <h1 className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";";
                Join Our Team";";";
              </h1>"
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";"
                Help us build the future of AI and technology. We're looking for passionate individuals who want to make a difference.";";";";
              </p>"
              <div className ="flex flex-col sm:flex-row gap-4 justify-center">";"
                <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";";
                  View Open Positions";";";
                </button>"
                <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",
=======
<<<<<<< HEAD
import React, { useState } from 'react;'";
import { Link } from "react-router-dom";""";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Brain, BarChart3, Settings, Code, Database, Cloud, Smartphone, Target, Calendar, DollarSign, Briefcase, GraduationCap, Heart, Coffee, Gamepad2 } from "lucide-react";""";
import { Helmet } from "react-helmet-async";""";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: CareersPage = () => {;
  const [selectedCategory, setSelectedCategory] = useState('all');''";
  const: jobCategories = [;
    { id: 'all', label: 'All Positions', icon: <Briefcase: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'engineering', label: 'Engineering', icon: <Code: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'ai', label: 'AI & ML', icon: <Brain: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'security', label: 'Cybersecurity', icon: <Shield: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'product', label: 'Product', icon: <Target: className ="w-5 h-5" /> },'"'"'"'"'"";";
    { id: 'data', label: 'Data & Analytics', icon: <BarChart3: className ="w-5 h-5" /> }'"'"'"'"'"";";
  ];
  const: jobOpenings = [
    {
      id: 1,;
      title: "Senior AI Engineer",""";
      department: "AI & ML",""";
      category: "ai",""";
      location: "Remote / New York",""";
      type: "Full-time",""";
      experience: "5+ years",""";
      salary: "$120,000 - $180,000",""";
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",""";
      requirements: [
        "PhD in Computer Science or related field",""";
        "5+ years experience in AI/ML",""";
        "Expertise in Python, TensorFlow, PyTorch",""";
        "Experience with cloud platforms (AWS, GCP, Azure)""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Flexible Hours", "Learning Budget"],""";
      posted: "2 days ago",""";
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Architect",""";
      department: "Cybersecurity",""";
      category: "security",""";
      location: "Remote / Delaware",""";
      type: "Full-time",""";
      experience: "7+ years",""";
      salary: "$130,000 - $200,000",""";
      description: "Design and implement enterprise-grade security solutions and frameworks.",""";
      requirements: [
        "CISSP, CISM, or similar certification",""";
        "7+ years in cybersecurity",""";
        "Experience with security frameworks (NIST, ISO 27001)",""";
        "Knowledge of cloud security best practices""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Security Training", "Home Office Setup"],""";
      posted: "1 week ago",""";
      featured: false
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",""";
      department: "Cloud & DevOps",""";
      category: "cloud",""";
      location: "Remote / San Francisco",""";
      type: "Full-time",""";
      experience: "6+ years",""";
      salary: "$140,000 - $220,000",""";
      description: "Architect scalable cloud solutions and lead DevOps transformation initiatives.",""";
      requirements: [
        "AWS/Azure/GCP certifications",""";
        "6+ years cloud architecture experience",""";
        "Expertise in Kubernetes, Docker, Terraform",""";
        "Experience with CI/CD pipelines""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Cloud Certifications", "Flexible Schedule"],""";
      posted: "3 days ago",""";
      featured: true
    },
    {
      id: 4,
      title: "Product Manager - AI Solutions",""";
      department: "Product",""";
      category: "product",""";
      location: "Remote / Austin",""";
      type: "Full-time",""";
      experience: "4+ years",""";
      salary: "$110,000 - $160,000",""";
      description: "Drive product strategy and roadmap for our AI-powered solutions portfolio.",""";
      requirements: [
        "MBA or technical degree",""";
        "4+ years product management experience",""";
        "Experience with AI/ML products",""";
        "Strong analytical and communication skills""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Stock Options", "Professional Development"],""";
      posted: "5 days ago",""";
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",""";
      department: "Data & Analytics",""";
      category: "data",""";
      location: "Remote / Boston",""";
      type: "Full-time",""";
      experience: "3+ years",""";
      salary: "$100,000 - $150,000",""";
      description: "Extract insights from complex datasets and build predictive models for business applications.",""";
      requirements: [
        "MS in Data Science or related field",""";
        "3+ years data science experience",""";
        "Proficiency in Python, R, SQL",""";
        "Experience with statistical modeling and ML""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Data Science Conferences", "Research Time"],""";
      posted: "1 week ago",""";
      featured: false
    },
    {
      id: 6,
      title: "Frontend Developer",""";
      department: "Engineering",""";
      category: "engineering",""";
      location: "Remote / Seattle",""";
      type: "Full-time",""";
      experience: "3+ years",""";
      salary: "$90,000 - $130,000",""";
      description: "Build beautiful, responsive user interfaces for our web applications and dashboards.",""";
      requirements: [
        "3+ years frontend development experience",""";
        "Expertise in React, TypeScript, CSS",""";
        "Experience with modern build tools",""";
        "Portfolio demonstrating UI/UX skills""";
      ],
      benefits: ["Health Insurance", "401k Matching", "Design Tools", "Creative Freedom"],""";
      posted: "4 days ago",""";
      featured: false
    }
  ];
  const: benefits = [
    {;
      title: "Health & Wellness",""";
      description: "Comprehensive health insurance, dental, vision, and mental health support",""";
      icon: <Heart: className ="w-8 h-8" />""";
    },
    {
      title: "Learning & Development",""";
      description: "Annual learning budget, conference attendance, and certification support",""";
      icon: <GraduationCap: className ="w-8 h-8" />""";
    },
    {
      title: "Work-Life Balance",""";
      description: "Flexible hours, remote work options, and unlimited PTO",""";
      icon: <Coffee: className ="w-8 h-8" />""";
    },
    {
      title: "Growth Opportunities",""";
      description: "Clear career paths, mentorship programs, and internal mobility",""";
      icon: <Target: className ="w-8 h-8" />""";
    },
    {
      title: "Modern Tools",""";
      description: "Latest technology stack, top-tier equipment, and home office setup",""";
      icon: <Settings: className ="w-8 h-8" />""";
    },
    {
      title: "Team Culture",""";
      description: "Collaborative environment, team events, and innovation time",""";
      icon: <Users: className ="w-8 h-8" />""";
=======

import React from 'react';;";
import SEOHead from '../components/SEOHead';";
import { Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react';";

const CareersPage: React.FC = () => {
  const: benefits = [
    {;
      icon: <Heart: className ="w-8 h-8" />,";";
      title: 'Health & Wellness',";";";
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'";";";
    },
    {
      icon: <DollarSign: className ="w-8 h-8" />,";";
      title: 'Competitive Salary',";";";
      description: 'Above-market compensation with performance bonuses and equity options.'",";";
    },
    {
      icon: <Home: className ="w-8 h-8" />,";";
      title: 'Remote Work',";";";
      description: 'Flexible remote work options with home office setup assistance.'",";";
    },
    {
      icon: <GraduationCap: className ="w-8 h-8" />,";";
      title: 'Learning & Development',";";";
      description: 'Professional development budget, conferences, and skill-building opportunities.'";";";
    },
    {
      icon: <Zap: className ="w-8 h-8" />,";";
      title: 'Innovation Time',";";";
      description: 'Dedicated time for personal projects and innovation initiatives.'",";";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,";";
      title: 'Work-Life Balance',";";";
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'";";";
    }
  ];

import { Helmet } from 'react-helmet-async';";
const CareersPage: React.FC = () => {}
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
    },
    {}
      title: "DevOps Engineer",";
      department: "Engineering",";
      location: "Remote / New York",";
      type: "Full-time",";
      experience: "3+ years",";
      description: "Build and maintain scalable infrastructure for our AI platform.",";
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure", "ing tools"],";
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],";
      icon: <Settings: className ="w-6 h-6" />";
    },
    {}
      title: "Product Manager",";
      department: "Product",";
      location: "San Francisco",";
      type: "Full-time",";
      experience: "4+ years",";
      description: "Drive product strategy and roadmap for our AI solutions.",";
      requirements: ["Product management experience", "AI/ML knowledge", "Analytics skills", "Cross-functional collaboration"],";
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],";
      icon: <Target: className ="w-6 h-6" />";
    }
  ];

  const: benefits = [;
    { icon: <DollarSign: className ="w-8 h-8" />, title: "Competitive Compensation", description: "Above-market salaries with equity options" },";
    { icon: <className="w-8 h-8" />, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },";
    { icon: <Home: className ="w-8 h-8" />, title: "Flexible Work", description: "Remote-first culture with flexible hours" },";
    { icon: <GraduationCap: className ="w-8 h-8" />, title: "Learning & Development", description: "Annual learning budget and conference attendance" },";
    { icon: <className="w-8 h-8" />, title: "Cutting-Edge Tech", description: "Work with the latest AI and cloud technologies" },";
    { icon: <className="w-8 h-8" />, title: "Job Security", description: "Stable company with strong growth trajectory" }";
  ];

  return ()
    <div: className ="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">";
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta: name ="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />";
      </Helmet>

      <div: className ="container mx-auto px-4 py-16">";
        <div: className ="text-center mb-16">";
          <h1: className ="text-4xl md:text-6xl font-bold text-gray-900 mb-6">";
            Join Our Team
          </h1>
          <p: className ="text-xl text-gray-600 max-w-3xl mx-auto">";
            Be part of the AI revolution. We're looking for passionate individuals ";
            who want to shape the future of technology.
          </p>
        </div>

        <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";
          {benefits.map((benefit, index) => ()}
            <div: key ={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">";
              <div: className ="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">";
                {benefit.icon}
              </div>
              <h3: className ="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>";
              <p: className ="text-gray-600">{benefit.description}</p>";
            </div>
          ))}
        </div>

        <div: className ="mb-16">";
          <h2: className ="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>";
          <div: className ="space-y-8">";
            {openPositions.map((position, index) => ()}
              <div: key ={index} className="bg-white rounded-2xl shadow-lg p-8">";
                <div: className ="flex items-start justify-between mb-6">";
                  <div: className ="flex items-center">";
                    <div: className ="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">";
                      {position.icon}
                    </div>
                    <div>
                      <h3: className ="text-2xl font-bold text-gray-900">{position.title}</h3>";
                      <p: className ="text-gray-600">{position.department}</p>";
                    </div>
                  </div>
                  <div: className ="text-right">";
                    <p: className ="text-gray-600">{position.location}</p>";
                    <p: className ="text-gray-500">{position.type}</p>";
                  </div>
                </div>

                <p: className ="text-gray-700 mb-6">{position.description}</p>";

                <div: className ="grid md:grid-cols-2 gap-6 mb-6">";
                  <div>
                    <h4: className ="font-semibold text-gray-900 mb-3">Requirements</h4>";
                    <ul: className ="space-y-2">";
                      {position.requirements.map((req, reqIndex) => ()}
                        <li: key ={reqIndex} className="flex items-center">";
                          <CheckCircle: className ="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          <span: className ="text-gray-700">{req}</span>";
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4: className ="font-semibold text-gray-900 mb-3">Benefits</h4>";
                    <ul: className ="space-y-2">";
                      {position.benefits.map((benefit, benefitIndex) => ()}
                        <li: key ={benefitIndex} className="flex items-center">";
                          <CheckCircle: className ="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          <span: className ="text-gray-700">{benefit}</span>";
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button: className ="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">";
                  Apply Now
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
>>>>>>> main
    }
  ];
  const: stats = [;
    { number: "50+", label: "Team Members", icon: <Users: className ="w-6 h-6" /> },""";
    { number: "15+", label: "Open Positions", icon: <Briefcase: className ="w-6 h-6" /> },""";
    { number: "95%", label: "Employee Satisfaction", icon: <Star: className ="w-6 h-6" /> },""";
    { number: "100%", label: "Remote Friendly", icon: <Globe: className ="w-6 h-6" /> }""";
  ];
  const: filteredJobs = selectedCategory === 'all''";
    ? jobOpenings
    : jobOpenings.filter(job => job.category === selectedCategory);
  return (
<<<<<<< HEAD
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
      <EnhancedSEO: title ="Careers - Zion Tech Group | Join Our Team""";
        description="Join Zion Tech Group and be part of the future of technology. Explore exciting career opportunities in AI, cybersecurity, and digital transformation.""";
        keywords="careers, jobs, technology careers, AI jobs, cybersecurity jobs, software development""";
        canonical="https://ziontechgroup.com/careers""";
      />
      {/* Hero Section */}
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto text-center">""";
          <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
            Join Our
            <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">""";
              {" "}Mission""";
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">""";
            Be part of the future of technology. Join our diverse team of innovators, engineers, and visionaries who are building the next generation of AI and IT solutions.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
            <Link: to ="#open-positions""";
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105""";
            >
              View Open Positions
              <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""";
            </Link>
            <Link: to ="/contact""";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105""";
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="grid grid-cols-2 md:grid-cols-4 gap-8">""";
            {stats.map((stat, index) => (
              <div: key ={index} className="text-center group">""";
                <div: className ="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""";
                  {stat.icon}
                </div>
                <div: className ="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>""";
                <div: className ="text-gray-300 text-xs md:text-sm">{stat.label}</div>""";
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Join Us Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">""";
                Why Join Zion Tech Group?
              </span>
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              We're not just building technology – we're shaping the future. Here's what makes us special.''";
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""";
            {benefits.map((benefit, index) => (
              <div: key ={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center""";
              >
                <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>""";
                <div: className ="relative z-10">""";
                  <div: className ="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">""";
                    {benefit.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">""";
                    {benefit.title}
                  </h3>
                  <p: className ="text-gray-300 leading-relaxed">""";
                    {benefit.description}
                  </p>
                </div>)
              </div>)
            ))}
          </div>
        </div>
      </section>
      {/* Job Openings Section */}
      <section: id ="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">""";
                Open Positions
              </span>
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Find your perfect role and help us build the future of technology.
            </p>
          </div>
          {/* Category Filter */}
          <div: className ="flex flex-wrap justify-center gap-4 mb-12">""";
            {jobCategories.map((category) => (
              <button: key ={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg''";
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white''";
                }`}
              >
                {category.icon;}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
          {/* Job Listings */}
          <div: className ="space-y-6">""";
            {filteredJobs.map((job) => (
              <div: key ={job.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  job.featured ? 'ring-2 ring-cyan-500/50' : '''";
                }`}
              ></div>
                {job.featured && (
                  <div: className ="absolute top-4 right-4">""";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">""";
                      Featured
                    </span>
                  </div>
                )}
                <div: className ="flex flex-col lg:flex-row lg:items-center lg:justify-between">""";
                  <div: className ="flex-1">""";
                    <div: className ="flex items-center space-x-4 mb-3">""";
                      <h3: className ="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">""";
                        {job.title}
                      </h3>
                      <span: className ="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-medium">""";
                        {job.department}
                      </span>
                    </div>
                    <div: className ="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">""";
                      <div: className ="flex items-center space-x-1">""";
                        <MapPin: className ="w-4 h-4" />""";
                        <span>{job.location}</span>
                      </div>
                      <div: className ="flex items-center space-x-1">""";
                        <Clock: className ="w-4 h-4" />""";
                        <span>{job.type}</span>
                      </div>
                      <div: className ="flex items-center space-x-1">""";
                        <Briefcase: className ="w-4 h-4" />""";
                        <span>{job.experience}</span>
                      </div>
                      <div: className ="flex items-center space-x-1">""";
                        <DollarSign: className ="w-4 h-4" />""";
                        <span>{job.salary}</span>
                      </div>
                      <div: className ="flex items-center space-x-1">""";
                        <Calendar: className ="w-4 h-4" />""";
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <p: className ="text-gray-300 mb-4 leading-relaxed">""";
                      {job.description}
                    </p>
                    <div: className ="flex flex-wrap gap-2 mb-4">""";
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span: key ={idx}
                          className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs""";
                        >
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span: className ="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">""";
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div: className ="flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 lg:mt-0 lg:ml-6">""";
                    <button: className ="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105">""";
                      Apply Now
                      <ArrowRight: className ="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />""";
                    </button>
                    <button: className ="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105">""";
                      View Details
                    </button>
=======
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
>>>>>>> main
                  Learn About Our Culture
                </button>
              </div>
<<<<<<< HEAD
            </div>";
          </div>";";
        </div>";";";
        {/* Benefits Section */}"
        <div className ="py-24 bg-slate-800/50">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Why Work With Us</$1>"
              <p className ="text-xl text-gray-300">We offer competitive benefits and a supportive work environment</$1>";";";
            </div>"
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",";";";
              {benefits.map((benefit, index) => ("
                <div key ={index} className="bg-slate-700/50 p-6 rounded-lg hover: bg-slate-700/70 transition-colors">","
                  <div className ="text-blue-400 mb-4">{benefit.icon}</$1>"
                  <h3 className ="text-xl font-semibold mb-2">{benefit.title}</$1>"
                  <p className ="text-gray-300">{benefit.description}</$1>
                </div>
              ))};
            </div>";
          </div>";";
        </div>";";";
        {/* Open Positions Section */}"
        <div className ="py-24">";"
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";"
            <div className ="text-center mb-16">";"
              <h2 className ="text-4xl font-bold mb-4">Open Positions</$1>"
              <p className ="text-xl text-gray-300">Find your next opportunity with us</$1>";";";
            </div>"
            <div className ="space-y-8">",";";";
              {openPositions.map((position) => ("
                <div key ={position.id} className="bg-slate-700/50 p-8 rounded-lg hover: bg-slate-700/70 transition-colors">";"
                  <div className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">",";";";
                    <div>"
                      <h3 className ="text-2xl font-semibold mb-2">{position.title}</$1>"
                      <div className ="flex flex-wrap gap-4 text-sm text-gray-300">";"
                        <span className ="flex items-center gap-1">";"
                          <Briefcase className ="w-4 h-4" />";";";
                          {position.department}";";";
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <MapPin className ="w-4 h-4" />";";";
                          {position.location}";";";
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <Clock className ="w-4 h-4" />";";";
                          {position.type}";";";
                        </span>"
                        <span className ="flex items-center gap-1">";"
                          <Users className ="w-4 h-4" />";
                          {position.experience};";
                        </span>";";
                      </div>";";";
                    </div>"
                    <button className ="mt-4 lg: mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">",";
                      Apply Now";";
                    </button>";";";
                  </div>"
                  <p className ="text-gray-300 mb-4">{position.description}</$1>";";";
                  <div>"
                    <h4 className ="font-semibold mb-2">Requirements: </$1>"
                    <ul className ="space-y-1">",";";";
                      {position.requirements.map((req, index) => ("
                        <li key ={index} className="flex items-start gap-2 text-sm text-gray-300">";"
                          <CheckCircle className ="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />";
                          {req};
=======
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div: className ="py-24 bg-slate-800/50">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";";
            <div: className ="text-center mb-16">";";
              <h2: className ="text-4xl font-bold mb-4">Why Work With Us</h2>";";
              <p: className ="text-xl text-gray-300">We offer competitive benefits and a supportive work environment</p>";";
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",";
              {benefits.map((benefit, index) => (
                <div: key ={index} className="bg-slate-700/50 p-6 rounded-lg hover: bg-slate-700/70 transition-colors">",";
                  <div: className ="text-blue-400 mb-4">{benefit.icon}</div>";";
                  <h3: className ="text-xl font-semibold mb-2">{benefit.title}</h3>";";
                  <p: className ="text-gray-300">{benefit.description}</p>";";
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div: className ="py-24">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";";
            <div: className ="text-center mb-16">";";
              <h2: className ="text-4xl font-bold mb-4">Open Positions</h2>";";
              <p: className ="text-xl text-gray-300">Find your next opportunity with us</p>";";
            </div>
            
            <div: className ="space-y-8">",";
              {openPositions.map((position) => (
                <div: key ={position.id} className="bg-slate-700/50 p-8 rounded-lg hover: bg-slate-700/70 transition-colors">";";
                  <div: className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">",";
                    <div>
                      <h3: className ="text-2xl font-semibold mb-2">{position.title}</h3>";";
                      <div: className ="flex flex-wrap gap-4 text-sm text-gray-300">";";
                        <span: className ="flex items-center gap-1">";";
                          <Briefcase: className ="w-4 h-4" />";";
                          {position.department}
                        </span>
                        <span: className ="flex items-center gap-1">";";
                          <MapPin: className ="w-4 h-4" />";";
                          {position.location}
                        </span>
                        <span: className ="flex items-center gap-1">";";
                          <Clock: className ="w-4 h-4" />";";
                          {position.type}
                        </span>
                        <span: className ="flex items-center gap-1">";";
                          <Users: className ="w-4 h-4" />";";
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <button: className ="mt-4 lg: mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">",";
                      Apply Now
                    </button>
                  </div>
                  
                  <p: className ="text-gray-300 mb-4">{position.description}</p>";";
                  
                  <div>
                    <h4: className ="font-semibold mb-2">Requirements: </h4>";";
                    <ul: className ="space-y-1">",";
                      {position.requirements.map((req, index) => (
                        <li: key ={index} className="flex items-start gap-2 text-sm text-gray-300">";";
                          <CheckCircle: className ="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />";";
                          {req}
>>>>>>> main
                        </li>
                      ))};
                    </ul>
                  </div>
                </div>
<<<<<<< HEAD
              ))};";
            </div>";";
          </div>";";";
          {filteredJobs.length === 0 && ("
            <div className="text-center py-12">""
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />""
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>""
              <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>""
            </div>";
          )};";";
        </div>";";";
        {/* CTA Section */}"
        <div className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";"
          <div className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";"
            <h2 className ="text-4xl font-bold mb-4">Don't See Your Role?</$1>"
            <p className ="text-xl text-gray-300 mb-8">";"
              We're always looking for talented individuals. Send us your resume and let's start a conversation.";";";";
            </p>"
            <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
=======
              ))}
            </div>
          </div>
          {filteredJobs.length === 0 && (
            <div: className ="text-center py-12">""";
              <Briefcase: className ="w-16 h-16 text-gray-400 mx-auto mb-4" />""";
              <h3: className ="text-xl font-semibold text-white mb-2">No positions found</h3>""";
              <p: className ="text-gray-300">Try selecting a different category or check back later for new openings.</p>""";
            </div>
          )}
        </div>
<<<<<<< HEAD
      </section>
      {/* CTA Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-4xl mx-auto text-center">""";
          <div: className ="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Don't See Your Role?''";
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105""";
              >
                Send Your Resume
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <Link: to ="/team""";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105""";
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
}''";
=======

        {/* CTA Section */}
        <div: className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";";
            <h2: className ="text-4xl font-bold mb-4">Don't See Your Role?</h2>";";";
            <p: className ="text-xl text-gray-300 mb-8">";";
              We're always looking for talented individuals. Send us your resume and let's start a conversation.";";";
            </p>
            <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
>>>>>>> main
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  ),";
};";";
export default CareersPage;";";";
"