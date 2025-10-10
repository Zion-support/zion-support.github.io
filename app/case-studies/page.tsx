'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, User, Building, Target, CheckCircle, Star } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  team: string;
  image: string;
  featured: boolean;
  date: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Automation',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'The client was struggling with high customer service costs and inconsistent response times across their 500+ stores worldwide.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing capabilities that could handle 80% of customer inquiries automatically.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time from 24 hours to 2 minutes',
        'Increased customer satisfaction scores by 45%',
        'Handled 2M+ customer interactions monthly'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'Node.js'],
      duration: '6 months',
      team: '8 developers',
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true,
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'A regional bank needed to migrate their legacy systems to the cloud while maintaining compliance and security standards.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing security best practices and compliance frameworks.',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system reliability to 99.9% uptime',
        'Enhanced security posture with zero breaches',
        'Reduced deployment time from weeks to hours'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'PostgreSQL'],
      duration: '8 months',
      team: '12 developers',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true,
      date: '2024-01-10'
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare',
      client: 'Hospital Network',
      industry: 'Healthcare',
      challenge: 'A hospital network faced increasing cyber threats and needed to strengthen their security posture while maintaining HIPAA compliance.',
      solution: 'We implemented a comprehensive cybersecurity framework including threat detection, incident response, and staff training programs.',
      results: [
        'Prevented 100% of attempted cyber attacks',
        'Achieved full HIPAA compliance certification',
        'Reduced security incident response time by 75%',
        'Trained 500+ staff members on security best practices'
      ],
      technologies: ['SIEM', 'Firewall', 'EDR', 'Penetration Testing', 'Security Training'],
      duration: '4 months',
      team: '6 security specialists',
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      featured: false,
      date: '2024-01-05'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'A manufacturing company wanted to implement IoT sensors to monitor equipment performance and predict maintenance needs.',
      solution: 'We developed a comprehensive IoT platform that collects real-time data from sensors and uses machine learning to predict equipment failures.',
      results: [
        'Reduced unplanned downtime by 70%',
        'Increased equipment efficiency by 25%',
        'Saved $2M annually in maintenance costs',
        'Improved product quality by 15%'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Azure IoT', 'Power BI', 'Python'],
      duration: '10 months',
      team: '10 developers',
      image: '/images/case-studies/iot-manufacturing.jpg',
      featured: false,
      date: '2023-12-20'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'Online Retailer',
      industry: 'E-commerce',
      challenge: 'An e-commerce company needed better insights into customer behavior and sales performance to optimize their business strategy.',
      solution: 'We built a comprehensive analytics dashboard that provides real-time insights into customer behavior, sales trends, and inventory management.',
      results: [
        'Increased conversion rates by 30%',
        'Reduced cart abandonment by 40%',
        'Improved inventory turnover by 35%',
        'Generated $5M additional revenue'
      ],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      duration: '5 months',
      team: '7 developers',
      image: '/images/case-studies/ecommerce-analytics.jpg',
      featured: true,
      date: '2023-12-15'
    },
    {
      id: '6',
      title: 'Mobile App for Field Service Management',
      client: 'Service Company',
      industry: 'Field Services',
      challenge: 'A field service company needed a mobile solution to manage technicians, track work orders, and improve customer communication.',
      solution: 'We developed a comprehensive mobile app with offline capabilities, GPS tracking, and real-time communication features.',
      results: [
        'Improved technician productivity by 50%',
        'Reduced travel time by 30%',
        'Increased customer satisfaction by 60%',
        'Eliminated paper-based processes'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'GPS Integration'],
      duration: '7 months',
      team: '9 developers',
      image: '/images/case-studies/mobile-field-service.jpg',
      featured: false,
      date: '2023-12-10'
    }
  ];

  const industries = ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, technology solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful projects that showcase the power of technology to drive business success
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(study.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{study.client}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{study.team}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600">
              Browse our complete portfolio of successful projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <div className="flex items-center text-yellow-600">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{study.title}</h3>
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{study.client}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{study.team}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              The numbers speak for themselves
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;