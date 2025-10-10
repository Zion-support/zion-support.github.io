'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, CheckCircle, Star, Users, TrendingUp, Clock, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  duration: string;
  teamSize: string;
  technologies: string[];
  featured: boolean;
  image: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'The client was struggling with high customer service costs and long response times, handling over 100,000 customer inquiries monthly with only 20% being resolved on first contact.',
      solution: 'We implemented an AI-powered customer service platform with natural language processing, automated ticket routing, and intelligent response suggestions. The system included a chatbot for common queries and escalation to human agents for complex issues.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved first-contact resolution rate to 85%',
        'Decreased average response time from 4 hours to 15 minutes',
        'Increased customer satisfaction score from 3.2 to 4.7/5'
      ],
      metrics: [
        { label: 'Cost Reduction', value: '60%', improvement: '+40%' },
        { label: 'Response Time', value: '15 min', improvement: '-93%' },
        { label: 'Resolution Rate', value: '85%', improvement: '+65%' },
        { label: 'Customer Satisfaction', value: '4.7/5', improvement: '+47%' }
      ],
      duration: '6 months',
      teamSize: '8 developers',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker', 'Kubernetes'],
      featured: true,
      image: '/images/case-studies/ai-customer-service.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Financial Services Company',
      industry: 'Financial Services',
      challenge: 'A traditional financial services company needed to migrate their legacy on-premises infrastructure to the cloud while maintaining 99.99% uptime and ensuring compliance with strict financial regulations.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture, automated CI/CD pipelines, and robust monitoring systems. The migration included data migration, security hardening, and compliance validation.',
      results: [
        'Successfully migrated 100% of applications to AWS',
        'Achieved 99.99% uptime during and after migration',
        'Reduced infrastructure costs by 40%',
        'Improved deployment frequency from monthly to daily',
        'Passed all compliance audits with zero findings'
      ],
      metrics: [
        { label: 'Migration Success', value: '100%', improvement: 'Complete' },
        { label: 'Uptime', value: '99.99%', improvement: 'Maintained' },
        { label: 'Cost Reduction', value: '40%', improvement: '+40%' },
        { label: 'Deployment Frequency', value: 'Daily', improvement: '+3000%' }
      ],
      duration: '8 months',
      teamSize: '12 engineers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      featured: true,
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Threat Detection',
      client: 'Healthcare Organization',
      industry: 'Healthcare',
      challenge: 'A large healthcare organization needed to strengthen their cybersecurity posture to protect sensitive patient data and comply with HIPAA regulations while detecting and preventing advanced persistent threats.',
      solution: 'We implemented a comprehensive cybersecurity framework including advanced threat detection systems, security information and event management (SIEM), endpoint protection, and staff training programs. The solution included 24/7 security monitoring and incident response capabilities.',
      results: [
        'Reduced security incidents by 90%',
        'Achieved 100% HIPAA compliance',
        'Detected and prevented 15 advanced threats',
        'Improved security awareness among staff by 85%',
        'Reduced mean time to detection from 30 days to 2 hours'
      ],
      metrics: [
        { label: 'Security Incidents', value: '90%', improvement: '-90%' },
        { label: 'HIPAA Compliance', value: '100%', improvement: 'Achieved' },
        { label: 'Threat Detection', value: '15', improvement: 'Prevented' },
        { label: 'Detection Time', value: '2 hours', improvement: '-99%' }
      ],
      duration: '4 months',
      teamSize: '6 security experts',
      technologies: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Okta', 'AWS Security', 'Python'],
      featured: false,
      image: '/images/case-studies/cybersecurity.jpg'
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'A manufacturing company needed to modernize their data analytics capabilities to gain real-time insights into production processes, supply chain optimization, and predictive maintenance.',
      solution: 'We built a comprehensive data analytics platform that integrated data from multiple sources including IoT sensors, ERP systems, and external APIs. The solution included real-time dashboards, predictive analytics models, and automated reporting systems.',
      results: [
        'Reduced production downtime by 35%',
        'Improved supply chain efficiency by 25%',
        'Achieved 95% accuracy in predictive maintenance',
        'Reduced data processing time from 8 hours to 15 minutes',
        'Generated $2M in cost savings annually'
      ],
      metrics: [
        { label: 'Downtime Reduction', value: '35%', improvement: '+35%' },
        { label: 'Supply Chain Efficiency', value: '25%', improvement: '+25%' },
        { label: 'Predictive Accuracy', value: '95%', improvement: 'High' },
        { label: 'Processing Time', value: '15 min', improvement: '-97%' }
      ],
      duration: '5 months',
      teamSize: '10 data scientists',
      technologies: ['Python', 'Apache Spark', 'Kafka', 'PostgreSQL', 'Grafana', 'TensorFlow'],
      featured: false,
      image: '/images/case-studies/data-analytics.jpg'
    },
    {
      id: '5',
      title: 'DevOps Transformation & CI/CD Implementation',
      client: 'Software Development Company',
      industry: 'Software Development',
      challenge: 'A software development company was struggling with slow release cycles, frequent deployment failures, and manual processes that were hindering their ability to deliver features quickly and reliably.',
      solution: 'We implemented a complete DevOps transformation including automated CI/CD pipelines, infrastructure as code, containerization, and comprehensive monitoring. The solution included automated testing, security scanning, and deployment rollback capabilities.',
      results: [
        'Reduced deployment time from 4 hours to 15 minutes',
        'Achieved 99.9% deployment success rate',
        'Increased release frequency from monthly to weekly',
        'Reduced mean time to recovery from 4 hours to 30 minutes',
        'Improved developer productivity by 50%'
      ],
      metrics: [
        { label: 'Deployment Time', value: '15 min', improvement: '-94%' },
        { label: 'Success Rate', value: '99.9%', improvement: '+95%' },
        { label: 'Release Frequency', value: 'Weekly', improvement: '+400%' },
        { label: 'Recovery Time', value: '30 min', improvement: '-88%' }
      ],
      duration: '3 months',
      teamSize: '5 DevOps engineers',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'GitLab'],
      featured: false,
      image: '/images/case-studies/devops.jpg'
    },
    {
      id: '6',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Equipment Manufacturer',
      industry: 'Manufacturing',
      challenge: 'An industrial equipment manufacturer needed to implement IoT sensors and analytics to monitor equipment performance, predict failures, and optimize maintenance schedules across multiple manufacturing facilities.',
      solution: 'We developed a comprehensive IoT platform that connected thousands of sensors across multiple facilities, implemented real-time data processing, and created predictive maintenance algorithms. The solution included mobile apps for technicians and management dashboards.',
      results: [
        'Reduced unplanned downtime by 45%',
        'Improved equipment efficiency by 20%',
        'Reduced maintenance costs by 30%',
        'Achieved 90% accuracy in failure prediction',
        'Connected 5,000+ IoT devices across 12 facilities'
      ],
      metrics: [
        { label: 'Downtime Reduction', value: '45%', improvement: '+45%' },
        { label: 'Equipment Efficiency', value: '20%', improvement: '+20%' },
        { label: 'Maintenance Cost', value: '30%', improvement: '-30%' },
        { label: 'Prediction Accuracy', value: '90%', improvement: 'High' }
      ],
      duration: '7 months',
      teamSize: '15 engineers',
      technologies: ['AWS IoT', 'Python', 'React Native', 'InfluxDB', 'Grafana', 'Machine Learning'],
      featured: false,
      image: '/images/case-studies/iot-manufacturing.jpg'
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful technology implementations and client results. See how we've helped businesses transform their operations with AI, cloud, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                50+ Successful Projects
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                $50M+ Cost Savings
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                100+ Happy Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">{study.client.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{study.metrics[0].value}</div>
                        <div className="text-sm text-gray-600">{study.metrics[0].label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.metrics[1].value}</div>
                        <div className="text-sm text-gray-600">{study.metrics[1].label}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors duration-200">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Case Studies</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {otherStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">{study.client.charAt(0)}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{study.industry}</span>
                    <span className="text-sm text-gray-500">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your business with our proven technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;