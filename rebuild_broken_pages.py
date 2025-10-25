#!/usr/bin/env python3
"""
Script to rebuild broken page files with proper JSX structure
"""

import os
import re

def rebuild_page_file(file_path, page_name, page_title, page_description, features_data):
    """Rebuild a page file with proper structure"""
    
    # Import statements
    imports = '''import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
'''

    # Component definition
    component_def = f'''const {page_name}Page: React.FC = () => {{
  const features = {features_data};
'''

    # JSX return
    jsx_return = '''  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>''' + page_title + ''' - Zion Tech Group</title>
        <meta name="description" content="''' + page_description + '''" />
        <meta name="keywords" content="''' + page_name.lower().replace(' ', ', ') + ''', services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ''' + page_title + '''
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ''' + page_description + '''
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ''' + page_name + '''Page;'''

    # Combine all parts
    full_content = imports + '\n' + component_def + '\n' + jsx_return
    
    # Write to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(full_content)

def main():
    """Rebuild all broken page files"""
    
    # Define page configurations
    pages = [
        {
            'file': 'app/ai-api-management/page.tsx',
            'name': 'AIApiManagement',
            'title': 'AI API Management',
            'description': 'Professional AI API management solutions for modern businesses.',
            'features': [
                {
                    'title': 'API Gateway Management',
                    'description': 'Centralized API gateway for seamless integration and management.',
                    'benefits': ['Traffic Control', 'Rate Limiting', 'Authentication', 'Monitoring']
                },
                {
                    'title': 'AI Model Integration',
                    'description': 'Easy integration with various AI models and services.',
                    'benefits': ['Model Versioning', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling']
                },
                {
                    'title': 'Global Distribution',
                    'description': 'Worldwide API distribution with edge computing capabilities.',
                    'benefits': ['Low Latency', 'High Availability', 'Global CDN', 'Edge Computing']
                }
            ]
        },
        {
            'file': 'app/ai-api-manager/page.tsx',
            'name': 'AIApiManager',
            'title': 'AI API Manager',
            'description': 'Advanced AI API management platform for enterprise solutions.',
            'features': [
                {
                    'title': 'Enterprise API Management',
                    'description': 'Comprehensive API management for large-scale enterprises.',
                    'benefits': ['Scalability', 'Security', 'Monitoring', 'Analytics']
                },
                {
                    'title': 'AI Integration',
                    'description': 'Seamless integration with AI services and models.',
                    'benefits': ['Model Management', 'Performance Optimization', 'Cost Control', 'Quality Assurance']
                },
                {
                    'title': 'Developer Tools',
                    'description': 'Powerful tools for developers and API consumers.',
                    'benefits': ['Documentation', 'Testing', 'SDKs', 'Support']
                }
            ]
        },
        {
            'file': 'app/ai-content-writer/page.tsx',
            'name': 'AIContentWriter',
            'title': 'AI Content Writer',
            'description': 'Professional AI-powered content writing services for businesses.',
            'features': [
                {
                    'title': 'Content Generation',
                    'description': 'AI-powered content creation for various platforms and formats.',
                    'benefits': ['Blog Posts', 'Articles', 'Social Media', 'Marketing Copy']
                },
                {
                    'title': 'SEO Optimization',
                    'description': 'Content optimized for search engines and user engagement.',
                    'benefits': ['Keyword Research', 'Content Strategy', 'Performance Tracking', 'ROI Analysis']
                },
                {
                    'title': 'Brand Voice',
                    'description': 'Consistent brand voice and tone across all content.',
                    'benefits': ['Style Guidelines', 'Tone Matching', 'Brand Consistency', 'Quality Control']
                }
            ]
        },
        {
            'file': 'app/careers/page.tsx',
            'name': 'Careers',
            'title': 'Careers',
            'description': 'Join our team and build the future of technology with Zion Tech Group.',
            'features': [
                {
                    'title': 'Open Positions',
                    'description': 'Explore exciting career opportunities in technology and innovation.',
                    'benefits': ['Software Engineering', 'AI/ML Roles', 'Product Management', 'Design']
                },
                {
                    'title': 'Company Culture',
                    'description': 'Work in a collaborative and innovative environment.',
                    'benefits': ['Remote Work', 'Flexible Hours', 'Learning Opportunities', 'Team Events']
                },
                {
                    'title': 'Benefits & Perks',
                    'description': 'Comprehensive benefits package and exciting perks.',
                    'benefits': ['Health Insurance', 'Stock Options', 'Professional Development', 'Wellness Programs']
                }
            ]
        },
        {
            'file': 'app/case-studies/page.tsx',
            'name': 'CaseStudies',
            'title': 'Case Studies',
            'description': 'Explore our successful projects and client success stories.',
            'features': [
                {
                    'title': 'Success Stories',
                    'description': 'Real-world examples of our solutions in action.',
                    'benefits': ['Client Testimonials', 'Project Details', 'Results Achieved', 'Technologies Used']
                },
                {
                    'title': 'Industry Solutions',
                    'description': 'Specialized solutions for different industries and sectors.',
                    'benefits': ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing']
                },
                {
                    'title': 'Technical Expertise',
                    'description': 'Showcase of our technical capabilities and innovations.',
                    'benefits': ['AI/ML Solutions', 'Cloud Architecture', 'Data Analytics', 'Security']
                }
            ]
        },
        {
            'file': 'app/cloud-services/page.tsx',
            'name': 'CloudServices',
            'title': 'Cloud Services',
            'description': 'Comprehensive cloud solutions for modern businesses.',
            'features': [
                {
                    'title': 'Cloud Migration',
                    'description': 'Seamless migration to cloud infrastructure.',
                    'benefits': ['Assessment', 'Planning', 'Migration', 'Optimization']
                },
                {
                    'title': 'Cloud Management',
                    'description': 'Ongoing management and optimization of cloud resources.',
                    'benefits': ['Monitoring', 'Cost Optimization', 'Security', 'Performance']
                },
                {
                    'title': 'Multi-Cloud Solutions',
                    'description': 'Solutions that work across multiple cloud providers.',
                    'benefits': ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud']
                }
            ]
        },
        {
            'file': 'app/consultation/page.tsx',
            'name': 'Consultation',
            'title': 'Consultation',
            'description': 'Expert technology consultation services for your business needs.',
            'features': [
                {
                    'title': 'Technology Strategy',
                    'description': 'Strategic planning for technology adoption and implementation.',
                    'benefits': ['Assessment', 'Roadmap', 'Implementation', 'Monitoring']
                },
                {
                    'title': 'Digital Transformation',
                    'description': 'Complete digital transformation solutions for businesses.',
                    'benefits': ['Process Automation', 'Data Analytics', 'AI Integration', 'Cloud Migration']
                },
                {
                    'title': 'Expert Guidance',
                    'description': 'Access to industry experts and best practices.',
                    'benefits': ['Technical Expertise', 'Industry Knowledge', 'Best Practices', 'Ongoing Support']
                }
            ]
        }
    ]
    
    # Rebuild each page
    for page in pages:
        try:
            rebuild_page_file(
                page['file'],
                page['name'],
                page['title'],
                page['description'],
                page['features']
            )
            print(f"Rebuilt: {page['file']}")
        except Exception as e:
            print(f"Error rebuilding {page['file']}: {e}")

if __name__ == "__main__":
    main()