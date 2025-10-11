#!/usr/bin/env python3
"""
Script to fix the remaining 4 malformed files.
"""

import os

def fix_file(file_path, page_name, page_title, page_description):
    """Fix a malformed file with proper content."""
    content = f"""'use client';
import React from 'react';
import {{ CheckCircle, Building, Users, BarChart, Shield }} from 'lucide-react';

const {page_name}: React.FC = () => {{
  const features = [
    {{
      icon: Building,
      title: 'Professional Services',
      description: 'Expert solutions delivered by experienced professionals',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    }},
    {{
      icon: Users,
      title: 'Team Expertise',
      description: 'Skilled professionals with industry experience',
      benefits: ['Expert knowledge', 'Best practices', 'Proven methodologies', 'Continuous learning']
    }},
    {{
      icon: BarChart,
      title: 'Performance Metrics',
      description: 'Data-driven approach to deliver measurable results',
      benefits: ['Real-time tracking', 'Performance analytics', 'ROI measurement', 'Continuous improvement']
    }},
    {{
      icon: Shield,
      title: 'Reliability & Security',
      description: 'Secure and reliable solutions for your business',
      benefits: ['Data protection', 'System reliability', 'Compliance', 'Risk mitigation']
    }}
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {page_description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {{features.map((feature, index) => (
              <div key={{index}} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{{feature.title}}</h3>
                <p className="text-gray-300 mb-4">{{feature.description}}</p>
                <ul className="space-y-2">
                  {{feature.benefits.map((benefit, benefitIndex) => (
                    <li key={{benefitIndex}} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {{benefit}}
                    </li>
                  ))}}
                </ul>
              </div>
            ))}}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {{benefits.map((benefit, index) => (
                <div key={{index}} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <p className="text-white">{{benefit}}</p>
                  </div>
                </div>
              ))}}
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our {page_title.lower()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}};

export default {page_name};"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to fix the remaining files."""
    files_to_fix = [
        {
            'path': '/workspace/app/it-infrastructure-design/page.tsx',
            'name': 'ItInfrastructureDesignPage',
            'title': 'IT Infrastructure Design',
            'description': 'Professional IT infrastructure design services to optimize your technology foundation.'
        },
        {
            'path': '/workspace/app/it-project-management/page.tsx',
            'name': 'ItProjectManagementPage',
            'title': 'IT Project Management',
            'description': 'Expert IT project management services to ensure successful project delivery.'
        },
        {
            'path': '/workspace/app/mobile-app-development/page.tsx',
            'name': 'MobileAppDevelopmentPage',
            'title': 'Mobile App Development',
            'description': 'Custom mobile app development services for iOS and Android platforms.'
        },
        {
            'path': '/workspace/app/system-administration/page.tsx',
            'name': 'SystemAdministrationPage',
            'title': 'System Administration',
            'description': 'Comprehensive system administration services to keep your infrastructure running smoothly.'
        }
    ]
    
    for file_info in files_to_fix:
        fix_file(
            file_info['path'],
            file_info['name'],
            file_info['title'],
            file_info['description']
        )
        print(f"Fixed: {file_info['path']}")
    
    print(f"\nSummary: Fixed {len(files_to_fix)} files")

if __name__ == "__main__":
    main()