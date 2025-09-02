import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Map as Sitemap, ExternalLink } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'About Zion Tech Group' },
        {
          name: 'Contact',
          href: '/contact',
          description: 'Contact information and form',
        },
        {
          name: 'Blog',
          href: '/blog',
          description: 'Latest news and insights',
        },
        {
          name: 'Help',
          href: '/help',
          description: 'Support and documentation',
        },
      ],
    },
    {
      title: 'Services',
      links: [
        {
          name: 'All Services',
          href: '/services',
          description: 'Overview of all services',
        },
        {
          name: 'AI Services',
          href: '/ai-services',
          description: 'Artificial Intelligence solutions',
        },
        {
          name: 'IT Services',
          href: '/it-services',
          description: 'Information Technology services',
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          description: 'Micro Software as a Service',
        },
        {
          name: 'AI Development',
          href: '/services/ai-development',
          description: 'Custom AI development',
        },
        {
          name: 'Cloud Services',
          href: '/services/cloud-services',
          description: 'Cloud computing solutions',
        },
        {
          name: 'Web Development',
          href: '/services/web-development',
          description: 'Web application development',
        },
      ],
    },
    {
      title: 'Solutions',
      links: [
        {
          name: 'All Solutions',
          href: '/solutions',
          description: 'Overview of all solutions',
        },
        {
          name: 'AI Content Creation',
          href: '/solutions/ai-content-creation',
          description: 'Automated content generation',
        },
        {
          name: 'Email Automation',
          href: '/solutions/email-automation',
          description: 'Email marketing automation',
        },
        {
          name: 'Customer Support',
          href: '/solutions/customer-support',
          description: 'AI-powered support platform',
        },
        {
          name: 'Event Management',
          href: '/solutions/event-management',
          description: 'Event planning and management',
        },
        {
          name: 'Project Management',
          href: '/solutions/project-management',
          description: 'Project collaboration tools',
        },
        {
          name: 'Workflow Automation',
          href: '/solutions/workflow-automation',
          description: 'Business process automation',
        },
      ],
    },
    {
      title: 'Business',
      links: [
        {
          name: 'Pricing',
          href: '/pricing',
          description: 'Service pricing and plans',
        },
        {
          name: 'Partners',
          href: '/partners',
          description: 'Partnership opportunities',
        },
        {
          name: 'Careers',
          href: '/careers',
          description: 'Job opportunities and culture',
        },
      ],
    },
    {
      title: 'Legal & Policies',
      links: [
        {
          name: 'Privacy Policy',
          href: '/privacy',
          description: 'Privacy and data protection',
        },
        {
          name: 'Terms of Service',
          href: '/terms',
          description: 'Terms and conditions',
        },
        {
          name: 'Cookie Policy',
          href: '/cookies',
          description: 'Cookie usage and preferences',
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place."
        keywords="sitemap, navigation, website structure, pages, links"
      />
      <Head>
        <title>Sitemap - Zion Tech Group</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <Sitemap className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
            </div>
            <p className="text-gray-600">
              Complete overview of all pages and sections on the Zion Tech Group
              website.
            </p>
          </div>

          {/* Sitemap Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <Card key={index} className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Sitemap className="h-5 w-5 mr-2 text-blue-600" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group flex items-start justify-between text-blue-600 hover: text-blue-800 transition-colors"
                      >
                        <div className="flex-1">
                          <span className="font-medium group-hover:underline">
                            {link.name}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="mt-8 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About This Sitemap
            </h2>
            <div className="prose text-gray-600">
              <p>
                This sitemap provides a comprehensive overview of all pages and
                sections available on the Zion Tech Group website. Our site is
                organized into several main categories:{' '}
              </p>
              <ul>
                <li>
                  <strong>Main Pages:</strong> Core pages including home, about,
                  contact, and blog
                </li>
                <li>
                  <strong>Services: </strong> Detailed information about our
                  technology services and solutions
                </li>
                <li>
                  <strong>Solutions:</strong> Specific product offerings and
                  platforms we provide
                </li>
                <li>
                  <strong>Business:</strong> Information about pricing,
                  partnerships, and career opportunities
                </li>
                <li>
                  <strong>Legal & Policies: </strong> Important legal documents
                  and privacy information
                </li>
              </ul>
              <p>
                If you can&apos;t find what you&apos;re looking for, please
                don&apos;t hesitate to{' '}
                <Link
                  href="/contact"
                  className="text-blue-600 hover: underline"
                >
                  contact us
                </Link>{' '}
                for assistance.'
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
