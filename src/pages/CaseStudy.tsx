import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: number;
  technologies: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
  publishedAt: string;
  author: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered E-commerce Platform Transformation',
    slug: 'ai-ecommerce-platform-transformation',
    excerpt: 'How we helped a major retailer increase conversion rates by 40% using AI-driven personalization.',
    content: '# AI-Powered E-commerce Platform Transformation\n\n## The Challenge\n\nOur client, a major retail chain, was struggling with low conversion rates and high cart abandonment. Their existing e-commerce platform lacked personalization and real-time recommendations.\n\n## The Solution\n\nWe implemented a comprehensive AI-powered personalization engine that:\n\n- Analyzes user behavior in real-time\n- Provides personalized product recommendations\n- Optimizes pricing dynamically\n- Implements intelligent search functionality\n\n## Results\n\n- 40% increase in conversion rates\n- 25% reduction in cart abandonment\n- 60% improvement in average order value\n- 35% increase in customer retention',
    client: 'RetailCorp',
    industry: 'E-commerce',
    duration: '6 months',
    teamSize: 8,
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB'],
    results: [
      {
        metric: 'Conversion Rate',
        value: '+40%',
        description: 'Increase in overall conversion rates'
      },
      {
        metric: 'Cart Abandonment',
        value: '-25%',
        description: 'Reduction in cart abandonment rate'
      },
      {
        metric: 'AOV',
        value: '+60%',
        description: 'Increase in average order value'
      }
    ],
    image: '/api/placeholder/800/600',
    publishedAt: '2024-01-15',
    author: 'Sarah Johnson'
  }
];

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{study.title} | Zion Tech Group</title>
        <meta name="description" content={study.excerpt} />
        <meta property="og:title" content={study.title} />
        <meta property="og:description" content={study.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={study.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={study.title} />
        <meta name="twitter:description" content={study.excerpt} />
        <meta name="twitter:image" content={study.image} />
        <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-white">{study.title}</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 mb-6"
                asChild
              >
                <Link href="/case-studies">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{study.excerpt}</p>
              
              <div className="grid md:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  <span>{study.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{study.duration}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{study.teamSize} team members</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  <span>{study.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <div className="whitespace-pre-wrap">{study.content}</div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Key Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                    <div className="font-semibold mb-2">{result.metric}</div>
                    <div className="text-gray-600 text-sm">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help transform your business with cutting-edge technology.
              </p>
              <Button asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}