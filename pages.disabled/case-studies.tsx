<<<<<<< HEAD
import React from \'react\'; import Head from \'next/head\'; export default function CaseStudiesPage() {; const caseStudies = [; {; \"title\": \'Global E-commerce Platform Automation\',; \"company\": \'TechRetail Inc.\',; \"industry\": \'E-commerce\',; \"challenge\": \'Managing 10,000+ daily orders across multiple regions with manual processes\',; \"solution\": \'Implemented autonomous order processing,inventory management,and customer service automation\',; \"results\": [; \'99.9% order accuracy\',; \'60% reduction in processing time\',; \'40% cost savings\',; \'24/7 automated operations\'; ],; \"technologies\": [\'AI Order Processing\',\'Inventory Automation\',\'Customer Service Bots\',\'Real-time Analytics\'];},; {; \"title\": \'Financial Services Compliance Automation\',; \"company\": \'SecureBank Ltd.\',; \"industry\": \'Financial Services\',; \"challenge\": \'Complex regulatory compliance requiring constant monitoring and reporting\',; \"solution\": \'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting\',; \"results\": [; \'100% compliance rate maintained\',; \'90% faster regulatory reporting\',; \'Real-time risk detection\',; \'Automated audit trails\'; ],; \"technologies\": [\'Compliance Monitoring\',\'Risk Assessment AI\',\'Automated Reporting\',\'Audit Automation\'];},; {; \"title\": \'Healthcare Data Processing Automation\',; \"company\": \'MediTech Solutions\',; \"industry\": \'Healthcare\',; \"challenge\": \'Processing millions of patient records while maintaining HIPAA compliance\',; \"solution\": \'Developed secure,autonomous data processing pipeline with privacy-preserving AI\',; \"results\": [; \'10x faster data processing\',; \'Zero HIPAA violations\',; \'99.99% data accuracy\',; \'Automated quality checks\'; ],; \"technologies\": [\'HIPAA-Compliant AI\',\'Data Pipeline Automation\',\'Privacy-Preserving ML\',\'Quality Assurance\'];},; {; \"title\": \'Manufacturing Quality Control\',; \"company\": \'Precision Manufacturing Co.\',; \"industry\": \'Manufacturing\',; \"challenge\": \'Manual quality inspection causing delays and inconsistent results\',; \"solution\": \'Implemented computer vision and AI-powered quality control automation\',; \"results\": [; \'95% defect detection rate\',; \'80% faster inspection process\',; \'Zero production delays\',; \'Continuous quality improvement\'; ],; \"technologies\": [\'Computer Vision AI\',\'Quality Control Automation\',\'Predictive Maintenance\',\'Real-time Monitoring\'];} ]; const industries = [\'All\',\'E-commerce\',\'Financial Services\',\'Healthcare\',\'Manufacturing\',\'Technology\',\'Education\']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name=\"description\" content=\"Explore real-world case studies showcasing how Zion Tech Group\'s autonomous automation solutions have transformed businesses across industries.\" /> <meta property=\""og\": title\" content=\"Case Studies - Zion Tech Group\" /> <meta property=\"og:description\" content=\"Success stories and automation results from real businesses.\" /> <meta name=\"twitter:card\" content=\"summary_large_image\" /> ></div> <div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\"> <main className=\"container mx-auto px-6 py-12\"> <nav className=\"mb-8\"> <a href=\"/\" className=\"text-cyan-400 hover:text-cyan-300 transition-colors\"> ← Back to Home; ></div> ></div> <header className=\"text-center mb-16\"> <h1 className=\"text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent\"> Success Stories; ></div> <p className=\"text-xl text-white/80 max-w-3xl mx-auto\"> Discover how Zion Tech Group\'s autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className=\"mb-12\"> <div className=\"flex flex-wrap gap-3 justify-center\"> {industries.map(industry => (; <button; key={industry} className=\"px-4 py-2 rounded-lg border border-white/20 text-white/80 \"hover\": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300\"> {industry} ></div> ))} ></div> ></div> {} <section className=\"mb-20\"> <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-8\"> {caseStudies.map((study,index) => (; <div key={index} className=\"bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 \"hover\": border-cyan-400/30 transition-all duration-300\"> <div className=\"flex items-center gap-3 mb-4\"> <span className=\"px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30\"> {study.industry} ></div> <span className=\"text-white/60 text-sm\">{study.company}></div> ></div> <h3 className=\"text-2xl font-bold mb-4 text-white\">{study.title}></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-fuchsia-400 mb-2\">The Challenge></div> <p className=\"text-white/80 text-sm\">{study.challenge}></div> ></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-green-400 mb-2\">Our Solution></div> <p className=\"text-white/80 text-sm\">{study.solution}></div> ></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-blue-400 mb-2\">Results></div> <ul className=\"space-y-1\"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className=\"text-white/80 text-sm\">• {result}></div> ))} ></div> ></div> <div> <h4 className=\"font-semibold text-purple-400 mb-2\">Technologies Used></div> <div className=\"flex flex-wrap gap-2\"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className=\"px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20\"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className=\"mb-20\"> <h2 className=\"text-3xl font-bold mb-12 text-center text-white\">Collective Impact></div> <div className=\"grid grid-cols-1 \"md\": grid-cols-4 gap-8\"> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-cyan-400 mb-2\">500+></div> <div className=\"text-white/70 text-sm\">Automation Projects></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-fuchsia-400 mb-2\">$50M+></div> <div className=\"text-white/70 text-sm\">Cost Savings Generated></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-green-400 mb-2\">99.9%></div> <div className=\"text-white/70 text-sm\">Average Success Rate></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-blue-400 mb-2\">24/7></div> <div className=\"text-white/70 text-sm\">Automated Operations></div> ></div> ></div> ></div> {} <section className=\"text-center\"> <div className=\"bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20\"> <h2 className=\"text-3xl font-bold mb-6 text-white\">Ready to Write Your Success Story?></div> <p className=\"text-white/80 mb-8 max-w-2xl mx-auto\"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group\'s autonomous automation solutions.; ></div> <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\"> <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300\"> Start Your Project; ></div> <a href=\"/services\" className=\"px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300\"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}
import _React from 'react'; import Head from 'next/head'; export default function CaseStudiesPage() {; const caseStudies = [; {; "title": 'Global E-commerce Platform Automation',; "company": 'TechRetail Inc.',; "industry": 'E-commerce',; "challenge": 'Managing 10,000+ daily orders across multiple regions with manual processes',; "solution": 'Implemented autonomous order processing,inventory management,and customer service automation',; "results": [; '99.9% order accuracy',; '60% reduction in processing time',; '40% cost savings',; '24/7 automated operations'; ],; "technologies": ['AI Order Processing','Inventory Automation','Customer Service Bots','Real-time Analytics'];},; {; "title": 'Financial Services Compliance Automation',; "company": 'SecureBank Ltd.',; "industry": 'Financial Services',; "challenge": 'Complex regulatory compliance requiring constant monitoring and reporting',; "solution": 'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting',; "results": [; '100% compliance rate maintained',; '90% faster regulatory reporting',; 'Real-time risk detection',; 'Automated audit trails'; ],; "technologies": ['Compliance Monitoring','Risk Assessment AI','Automated Reporting','Audit Automation'];},; {; "title": 'Healthcare Data Processing Automation',; "company": 'MediTech Solutions',; "industry": 'Healthcare',; "challenge": 'Processing millions of patient records while maintaining HIPAA compliance',; "solution": 'Developed secure,autonomous data processing pipeline with privacy-preserving AI',; "results": [; '10x faster data processing',; 'Zero HIPAA violations',; '99.99% data accuracy',; 'Automated quality checks'; ],; "technologies": ['HIPAA-Compliant AI','Data Pipeline Automation','Privacy-Preserving ML','Quality Assurance'];},; {; "title": 'Manufacturing Quality Control',; "company": 'Precision Manufacturing Co.',; "industry": 'Manufacturing',; "challenge": 'Manual quality inspection causing delays and inconsistent results',; "solution": 'Implemented computer vision and AI-powered quality control automation',; "results": [; '95% defect detection rate',; '80% faster inspection process',; 'Zero production delays',; 'Continuous quality improvement'; ],; "technologies": ['Computer Vision AI','Quality Control Automation','Predictive Maintenance','Real-time Monitoring'];} ]; const industries = ['All','E-commerce','Financial Services','Healthcare','Manufacturing','Technology','Education']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." /> <meta property=""og": title" content="Case Studies - Zion Tech Group" /> <meta property="og:description" content="Success stories and automation results from real businesses." /> <meta name="twitter:card" content="summary_large_image" /> ></div> <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white"> <main className="container mx-auto px-6 py-12"> <nav className="mb-8"> <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors"> ← Back to Home; ></div> ></div> <header className="text-center mb-16"> <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"> Success Stories; ></div> <p className="text-xl text-white/80 max-w-3xl mx-auto"> Discover how Zion Tech Group's autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className="mb-12"> <div className="flex flex-wrap gap-3 justify-center"> {industries.map(industry => (; <button; key={industry} className="px-4 py-2 rounded-lg border border-white/20 text-white/80 "hover": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"> {industry} ></div> ))} ></div> ></div> {} <section className="mb-20"> <div className="grid grid-cols-1 "lg": grid-cols-2 gap-8"> {caseStudies.map((study,index) => (; <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 "hover": border-cyan-400/30 transition-all duration-300"> <div className="flex items-center gap-3 mb-4"> <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"> {study.industry} ></div> <span className="text-white/60 text-sm">{study.company}></div> ></div> <h3 className="text-2xl font-bold mb-4 text-white">{study.title}></div> <div className="mb-6"> <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge></div> <p className="text-white/80 text-sm">{study.challenge}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-green-400 mb-2">Our Solution></div> <p className="text-white/80 text-sm">{study.solution}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-blue-400 mb-2">Results></div> <ul className="space-y-1"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className="text-white/80 text-sm">• {result}></div> ))} ></div> ></div> <div> <h4 className="font-semibold text-purple-400 mb-2">Technologies Used></div> <div className="flex flex-wrap gap-2"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className="mb-20"> <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact></div> <div className="grid grid-cols-1 "md": grid-cols-4 gap-8"> <div className="text-center"> <div className="text-4xl font-bold text-cyan-400 mb-2">500+></div> <div className="text-white/70 text-sm">Automation Projects></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+></div> <div className="text-white/70 text-sm">Cost Savings Generated></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-green-400 mb-2">99.9%></div> <div className="text-white/70 text-sm">Average Success Rate></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-blue-400 mb-2">24/7></div> <div className="text-white/70 text-sm">Automated Operations></div> ></div> ></div> ></div> {} <section className="text-center"> <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20"> <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?></div> <p className="text-white/80 mb-8 max-w-2xl mx-auto"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group's autonomous automation solutions.; ></div> <div className="flex flex-col "sm": flex-row gap-4 justify-center"> <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"> Start Your Project; ></div> <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}
=======
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, Award, Building } from 'lucide-react';


const CaseStudies: NextPage = () => {
  const caseStudies = [;
    {
      id: 1,;
      title: 'Healthcare AI Platform Transformation',;
      client: 'MedTech Solutions',;
      industry: 'Healthcare',;
      challenge: 'Legacy system modernization and AI integration for patient data management',;
      solution: 'Implemented cloud-native AI platform with real-time analytics and predictive modeling',;
      results: [;
        '40% reduction in patient data processing time',;
        '60% improvement in diagnostic accuracy',;
        '99.9% system uptime achieved',;
        '$2M annual cost savings';
      ],;
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'Security'],;
      duration: '6 months',;
      teamSize: '12 developers',;
      image: '/case-studies/healthcare-ai.jpg'},;
    {
      id: 2,;
      title: 'Financial Services Digital Transformation',;
      client: 'FinSecure Bank',;
      industry: 'Financial Services',;
      challenge: 'Digital banking platform modernization and fraud detection enhancement',;
      solution: 'Built comprehensive digital banking platform with advanced AI-powered fraud detection',;
      results: [;
        '50% increase in mobile banking adoption',;
        '85% reduction in fraudulent transactions',;
        '3x faster loan processing',;
        '99.95% system reliability';
      ],;
      technologies: ['Blockchain', 'AI/ML', 'Mobile Development', 'Security'],;
      duration: '8 months',;
      teamSize: '15 developers',;
      image: '/case-studies/financial-services.jpg'},;
    {
      id: 3,;
      title: 'Manufacturing IoT Integration',;
      client: 'AutoParts Manufacturing',;
      industry: 'Manufacturing',;
      challenge: 'Smart factory implementation with IoT sensors and predictive maintenance',;
      solution: 'Deployed comprehensive IoT platform with real-time monitoring and predictive analytics',;
      results: [;
        '30% reduction in equipment downtime',;
        '25% increase in production efficiency',;
        '50% decrease in maintenance costs',;
        'Real-time quality monitoring';
      ],;
      technologies: ['IoT', 'Data Analytics', 'Cloud Computing', 'AI/ML'],;
      duration: '10 months',;
      teamSize: '18 developers',;
      image: '/case-studies/manufacturing-iot.jpg'},;
    {
      id: 4,;
      title: 'E-commerce Platform Scaling',;
      client: 'RetailMax',;
      industry: 'Retail',;
      challenge: 'High-traffic e-commerce platform scaling and performance optimization',;
      solution: 'Implemented microservices architecture with auto-scaling and CDN optimization',;
      results: [;
        '10x increase in concurrent users',;
        '90% reduction in page load times',;
        '99.9% uptime during peak seasons',;
        '300% increase in conversion rates';
      ],;
      technologies: ['Microservices', 'Cloud Computing', 'CDN', 'Performance Optimization'],;
      duration: '4 months',;
      teamSize: '10 developers',;
      image: '/case-studies/ecommerce-scaling.jpg'},;
    {
      id: 5,;
      title: 'Government Data Analytics Platform',;
      client: 'CitySmart Government',;
      industry: 'Government',;
      challenge: 'Citizen data management and analytics for smart city initiatives',;
      solution: 'Built secure data analytics platform with citizen engagement features',;
      results: [;
        '70% improvement in data processing speed',;
        '95% citizen satisfaction rating',;
        '40% reduction in service response time',;
        'Complete data security compliance';
      ],;
      technologies: ['Data Analytics', 'Security', 'Cloud Computing', 'AI/ML'],;
      duration: '12 months',;
      teamSize: '20 developers',;
      image: '/case-studies/government-analytics.jpg'},;
    {
      id: 6,;
      title: 'EdTech Learning Platform',;
      client: 'EduTech Innovations',;
      industry: 'Education',;
      challenge: 'Scalable online learning platform with AI-powered personalization',;
      solution: 'Developed comprehensive learning management system with AI tutoring and analytics',;
      results: [;
        '80% improvement in student engagement',;
        '45% increase in course completion rates',;
        '60% reduction in administrative overhead',;
        'Personalized learning paths for 50K+ students';
      ],;
      technologies: ['AI/ML', 'Cloud Computing', 'Mobile Development', 'Analytics'],;
      duration: '9 months',;
      teamSize: '14 developers',;
      image: '/case-studies/edtech-platform.jpg'}
  ];

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Healthcare':;
        return '🏥';
      case 'Financial Services':;
        return '🏦';
      case 'Manufacturing':;
        return '🏭';
      case 'Retail':;
        return '🛒';
      case 'Government':;
        return '🏛️';
      case 'Education':;
        return '🎓';
      default:;
        return '🏢'}
  }
  ];

  return (;
    <MainLayout;
      title="Case Studies - Zion Tech Group";
      description="Explore real-world success stories and case studies of Zion Tech Group's technology solutions across various industries.";
      keywords="case studies, success stories, client projects, technology solutions, digital transformation, AI implementation">;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <Award className="w-16 h-16 mx-auto mb-6 text-blue-400" />;
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>;
              <p className="text-xl text-gray-200 mb-8">;
                Discover how we've helped businesses across industries transform their operations ;
                with cutting-edge technology solutions.;
              </p>;
            </div>;
          </div>;
        </section>;

        {/* Case Studies Grid */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="max-w-7xl mx-auto">;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                {caseStudies.map((study) => (;
                  <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">;
                    {/* Header */}
                    <div className="p-8 border-b border-gray-200">;
                      <div className="flex items-center mb-4">;
                        <span className="text-3xl mr-3">{getIndustryIcon(study.industry)}</span>;
                        <div>;
                          <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>;
                          <div className="flex items-center space-x-4 text-sm text-gray-600">;
                            <div className="flex items-center">;
                              <Building className="w-4 h-4 mr-1" />;
                              {study.client}
                            </div>;
                            <span>•</span>;
                            <span>{study.industry}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    {/* Content */}
                    <div className="p-8">;
                      {/* Challenge & Solution */}
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>;
                        <p className="text-gray-600 mb-4">{study.challenge}</p>;
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>;
                        <p className="text-gray-600">{study.solution}</p>;
                      </div>;

                      {/* Results */}
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>;
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">;
                          {study.results.map((result, index) => (;
                            <div key={index} className="flex items-center">;
                              <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                              <span className="text-sm text-gray-600">{result}</span>;
                            </div>;
                          ))}
                        </div>;
                      </div>;

                      {/* Technologies */}
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>;
                        <div className="flex flex-wrap gap-2">;
                          {study.technologies.map((tech, index) => (;
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">;
                              {tech}
                            </span>;
                          ))}
                        </div>;
                      </div>;

                      {/* Project Details */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">;
                        <div className="flex items-center">;
                          <Clock className="w-4 h-4 mr-1" />;
                          {study.duration}
                        </div>;
                        <div className="flex items-center">;
                          <Users className="w-4 h-4 mr-1" />;
                          {study.teamSize}
                        </div>;
                      </div>;

                      {/* Read More Button */}
                      <Link;
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">;
                        Read Full Case Study;
                        <ArrowRight className="w-4 h-4 ml-1" />;
                      </Link>;
                    </div>;
                  </div>;
                ))}
              </div>;
        </div>;
      </section>;

      {/* Stats Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="grid md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <div key={index} className="text-center">;
                <div className="text-zion-cyan mb-4 flex justify-center">;
                  {stat.icon}
                </div>;
                <div className="text-4xl font-bold mb-2">{stat.number}</div>;
                <div className="text-gray-600">{stat.label}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Real projects, real results, real impact on businesses across industries;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {caseStudies.map((study, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">;
                <div className="bg-gray-200 h-48 flex items-center justify-center">;
                  <div className="text-center text-gray-500">;
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />;
                    <p className="text-sm">Case Study Image</p>;
                  </div>;
                </div>;

                <div className="p-6">;
                  <div className="flex items-center gap-2 mb-3">;
                    <span className="bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">;
                      {study.industry}
                    </span>;
                    <span className="text-gray-500 text-sm">{study.duration}</span>;
                  </div>;

                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>;
                  <p className="text-gray-600 text-sm mb-4">{study.client}</p>;

                  <div className="mb-4">;
                    <h4 className="font-semibold text-sm mb-1">Challenge:</h4>;
                    <p className="text-gray-600 text-sm">{study.challenge}</p>;
                  </div>;

                  <div className="mb-4">;
                    <h4 className="font-semibold text-sm mb-1">Solution:</h4>;
                    <p className="text-gray-600 text-sm">{study.solution}</p>;
                  </div>;

                  <div className="mb-4">;
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>;
                    <ul className="space-y-1">;
                      {study.results.slice(0, 2).map((result, resultIndex) => (;
                        <li key={resultIndex} className="flex items-center text-sm">;
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                          <span className="text-gray-700">{result}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;

                  <Link ;
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors">;
                    Read Full Case Study;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </div>;
              </div>;
            ))}
            </div>;
          </div>;
        </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Let us help you achieve similar results for your business. Contact us today to discuss your project.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
              Start Your Project;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Our Services;
            </Link>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto text-center text-white">;
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>;
              <p className="text-xl mb-8 text-blue-100">;
                Let's discuss how we can help transform your business with innovative technology solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  href="/contact";
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Start Your Project;
                </Link>;
                <Link;
                  href="/services";
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
                  Explore Services;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
                  </div>;
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>;
                  <div className="text-gray-600">{stat.label}</div>;
                </div>;

                <div className="p-8">;
                  <div className="flex items-center justify-between mb-4">;
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">;
                      {study.industry}
                    </span>;
                    <div className="text-sm text-gray-500">;
                      {study.duration} • {study.team}
                    </div>;
                  </div>;

                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">;
                    {study.title}
                  </h2>;

                  <div className="mb-4">;
                    <h3 className="font-semibold text-gray-700 mb-2">Client:</h3>;
                    <p className="text-gray-600">{study.client}</p>;
                  </div>;

                  <div className="mb-4">;
                    <h3 className="font-semibold text-gray-700 mb-2">Challenge:</h3>;
                    <p className="text-gray-600 text-sm">{study.challenge}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h3 className="font-semibold text-gray-700 mb-2">Solution:</h3>;
                    <p className="text-gray-600 text-sm">{study.solution}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h3 className="font-semibold text-gray-700 mb-3">Key Results:</h3>;
                    <ul className="space-y-2">;
                      {study.results.map((result, idx) => (;
                        <li key={idx} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                          {result}
                        </li>;
                      ))}
                    </ul>;
                  </div>;

                  <div className="mb-6">;
                    <h3 className="font-semibold text-gray-700 mb-2">Technologies Used:</h3>;
                    <div className="flex flex-wrap gap-2">;
                      {study.technologies.map((tech) => (;
                        <span;
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">;
                          {tech}
                        </span>;
                      ))}
                    </div>;
                  </div>;

                  <Link;
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">;
                    Read Full Case Study;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </div>;
              </motion.article>;
            ))}
          </div>;
        </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion.h2 ;
            className="text-3xl md:text-4xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Ready to Start Your Success Story?;
          </motion.h2>;
          <motion.p ;
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Let's discuss how we can help transform your business with innovative technology solutions.;
          </motion.p>;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <Link;
              href="/contact";
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
              Get Started Today;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
          </motion.div>;
        </div>;
      </section>;
    </MainLayout>;
  );
};
export default CaseStudiesPage;
>>>>>>> origin/automation-fixes
