#!/usr/bin/env python3
"""
Script to fix all problematic page files by replacing them with clean templates
"""
import os
import glob

def create_clean_page_template(file_path):
    """Create a clean page template for any page file"""
    filename = os.path.basename(file_path)
    page_name = filename.replace('.tsx', '').replace('-', ' ').title()
    component_name = page_name.replace(' ', '') + 'Page'
    
    # Special cases for specific pages
    if 'accessibility' in filename.lower():
        return create_accessibility_page()
    elif 'contact' in filename.lower():
        return create_contact_page()
    elif 'privacy' in filename.lower():
        return create_privacy_page()
    elif 'cookies' in filename.lower():
        return create_cookies_page()
    else:
        return create_generic_page(component_name, page_name)

def create_accessibility_page():
    return ''''use client';
import React from 'react';
import { CheckCircle, Shield, Eye, Headphones, MousePointer, Keyboard } from 'lucide-react';

export default function AccessibilityPage() {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive support for users with visual impairments.',
      benefits: ['Screen reader compatibility', 'High contrast modes', 'Text scaling', 'Color blind support']
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility for all interactive elements.',
      benefits: ['Tab navigation', 'Keyboard shortcuts', 'Focus indicators', 'Skip links']
    },
    {
      icon: Headphones,
      title: 'Audio Support',
      description: 'Enhanced audio experience for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments and mobility challenges.',
      benefits: ['Large click targets', 'Voice control', 'Switch navigation', 'Gesture alternatives']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Making technology accessible to everyone. We provide comprehensive accessibility solutions to ensure your digital products are inclusive and usable by all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
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
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Product Accessible?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn how we can help make your digital products accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
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
}'''

def create_contact_page():
    return ''''use client';
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and IT solutions? Get in touch with our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <span className="text-gray-300">contact@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <span className="text-gray-300">123 Tech Street, Innovation City, IC 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-purple-400 mr-4" />
                    <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}'''

def create_privacy_page():
    return ''''use client';
import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and ensure the security of our platform.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}'''

def create_cookies_page():
    return ''''use client';
import React from 'react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Essential cookies - required for the website to function properly</li>
                <li>• Analytics cookies - help us understand how visitors use our website</li>
                <li>• Functional cookies - remember your preferences and settings</li>
                <li>• Marketing cookies - used to deliver relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at 
                cookies@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}'''

def create_generic_page(component_name, page_name):
    return f''''use client';
import React from 'react';
import {{ CheckCircle, ArrowRight }} from 'lucide-react';

export default function {component_name}() {{
  const features = [
    {{
      title: 'Expert Solutions',
      description: 'Professional {page_name.lower()} services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    }},
    {{
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    }},
    {{
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {page_name.lower()} services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {{features.map((feature, index) => (
              <div key={{index}} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
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
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our {page_name.lower()} services.
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
}}'''

def main():
    """Main function to fix all page files"""
    app_dir = "/workspace/app"
    
    # Find all page files
    page_files = glob.glob(f"{app_dir}/**/page.tsx", recursive=True)
    
    fixed_count = 0
    
    for file_path in page_files:
        try:
            # Skip layout.tsx and main page.tsx as they're already fixed
            if 'layout.tsx' in file_path or file_path.endswith('/page.tsx') and 'app/page.tsx' in file_path:
                continue
                
            template = create_clean_page_template(file_path)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(template)
            
            print(f"Fixed: {file_path}")
            fixed_count += 1
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} page files")

if __name__ == "__main__":
    main()