import React from 'react';
import Head from 'next/head';
import SEO from '../components/SEO';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Map, 
  ArrowRight,
  ExternalLink, 
  Home,
  Users, 
  Briefcase,
  Phone, 
  DollarSign,
  FileText, 
  BookOpen,
  Award, 
  Shield,
  Globe, 
  Search,
  Mail,
  Calendar,
  Code,
  Database,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { name: 'Home', url: '/', icon: Home, description: 'Main landing page' },
    { name: 'Services', url: '/services', icon: Briefcase, description: 'Our technology services' },
    { name: 'About', url: '/about', icon: Users, description: 'About our company' },
    { name: 'Contact', url: '/contact', icon: Phone, description: 'Get in touch with us' },
    { name: 'Pricing', url: '/pricing', icon: DollarSign, description: 'Service pricing information' }
  ];

  const servicePages = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },
    { name: 'Cloud Solutions', url: '/cloud-solutions', icon: Cloud, description: 'Cloud architecture and deployment' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security and compliance services' },
    { name: 'Data Analytics', url: '/data-analytics', icon: Database, description: 'Data insights and analytics' },
    { name: 'DevOps', url: '/devops', icon: Zap, description: 'Development and operations' },
    { name: 'Custom Development', url: '/custom-development', icon: Code, description: 'Tailored software solutions' }
  ];

  const resourcePages = [
    { name: 'Blog', url: '/blog', icon: BookOpen, description: 'Technology insights and updates' },
    { name: 'Case Studies', url: '/case-studies', icon: FileText, description: 'Client success stories' },
    { name: 'White Papers', url: '/white-papers', icon: FileText, description: 'Technical documentation' },
    { name: 'Webinars', url: '/webinars', icon: Calendar, description: 'Educational webinars' },
    { name: 'Team', url: '/team', icon: Award, description: 'Meet our experts' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy', icon: Shield, description: 'Privacy and data protection' },
    { name: 'Terms of Service', url: '/terms', icon: FileText, description: 'Terms and conditions' },
    { name: 'Cookie Policy', url: '/cookies', icon: FileText, description: 'Cookie usage information' }
  ];

  const externalLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink, description: 'Follow us on LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: ExternalLink, description: 'Follow us on Twitter' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: ExternalLink, description: 'View our open source projects' }
  ];

  return (
    <>
      <SEO
        title='Sitemap - Zion Tech Group'
        description='Navigate through all pages and sections of the Zion Tech Group website. Find information about our services, resources, and company.'
        keywords='sitemap, navigation, website structure, Zion Tech Group'
      />
      
      <main className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              <Map className='inline-block w-10 h-10 mr-3 text-blue-400' />
              Site Map
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Navigate through all pages and sections of our website to find the information you need.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            {/* Main Pages */}
            <Card className='bg-slate-800 border-slate-700'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <Home className='w-5 h-5 mr-2 text-blue-400' />
                  Main Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {mainPages.map((page) => (
                    <div key={page.name} className='flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors'>
                      <div className='flex items-center'>
                        <page.icon className='w-5 h-5 mr-3 text-blue-400' />
                        <div>
                          <div className='text-white font-medium'>{page.name}</div>
                          <div className='text-sm text-gray-400'>{page.description}</div>
                        </div>
                      </div>
                      <ArrowRight className='w-4 h-4 text-gray-400' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Pages */}
            <Card className='bg-slate-800 border-slate-700'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <Briefcase className='w-5 h-5 mr-2 text-green-400' />
                  Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {servicePages.map((page) => (
                    <div key={page.name} className='flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors'>
                      <div className='flex items-center'>
                        <page.icon className='w-5 h-5 mr-3 text-green-400' />
                        <div>
                          <div className='text-white font-medium'>{page.name}</div>
                          <div className='text-sm text-gray-400'>{page.description}</div>
                        </div>
                      </div>
                      <ArrowRight className='w-4 h-4 text-gray-400' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resource Pages */}
            <Card className='bg-slate-800 border-slate-700'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <BookOpen className='w-5 h-5 mr-2 text-purple-400' />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {resourcePages.map((page) => (
                    <div key={page.name} className='flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors'>
                      <div className='flex items-center'>
                        <page.icon className='w-5 h-5 mr-3 text-purple-400' />
                        <div>
                          <div className='text-white font-medium'>{page.name}</div>
                          <div className='text-sm text-gray-400'>{page.description}</div>
                        </div>
                      </div>
                      <ArrowRight className='w-4 h-4 text-gray-400' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legal Pages */}
            <Card className='bg-slate-800 border-slate-700'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <Shield className='w-5 h-5 mr-2 text-red-400' />
                  Legal & Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {legalPages.map((page) => (
                    <div key={page.name} className='flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors'>
                      <div className='flex items-center'>
                        <page.icon className='w-5 h-5 mr-3 text-red-400' />
                        <div>
                          <div className='text-white font-medium'>{page.name}</div>
                          <div className='text-sm text-gray-400'>{page.description}</div>
                        </div>
                      </div>
                      <ArrowRight className='w-4 h-4 text-gray-400' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* External Links */}
          <Card className='mt-8 bg-slate-800 border-slate-700'>
            <CardHeader>
              <CardTitle className='text-white flex items-center'>
                <Globe className='w-5 h-5 mr-2 text-cyan-400' />
                External Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 md:grid-cols-3'>
                {externalLinks.map((link) => (
                  <div key={link.name} className='flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors'>
                    <div className='flex items-center'>
                      <link.icon className='w-5 h-5 mr-3 text-cyan-400' />
                      <div>
                        <div className='text-white font-medium'>{link.name}</div>
                        <div className='text-sm text-gray-400'>{link.description}</div>
                      </div>
                    </div>
                    <ExternalLink className='w-4 h-4 text-gray-400' />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search Section */}
          <Card className='mt-8 bg-slate-800 border-slate-700'>
            <CardHeader>
              <CardTitle className='text-white flex items-center'>
                <Search className='w-5 h-5 mr-2 text-yellow-400' />
                Can't Find What You're Looking For?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-300 mb-4'>
                Use our search functionality or contact us directly for assistance.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center'>
                  <Search className='w-4 h-4 mr-2' />
                  Search Site
                </button>
                <button className='px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center'>
                  <Mail className='w-4 h-4 mr-2' />
                  Contact Support
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}