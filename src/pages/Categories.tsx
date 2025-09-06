import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Shield, Code, Database, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryType {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  serviceCount: number;
}

const CATEGORIES: CategoryType[] = [
  {
    id: '1',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'AI solutions for automation, machine learning, and intelligent systems',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    serviceCount: 12
  },
  {
    id: '2',
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Scalable cloud infrastructure and migration services',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    serviceCount: 8
  },
  {
    id: '3',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Advanced security solutions and threat protection',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    serviceCount: 15
  },
  {
    id: '4',
    name: 'Software Development',
    slug: 'software-development',
    description: 'Custom software solutions and application development',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    serviceCount: 20
  },
  {
    id: '5',
    name: 'Data Analytics',
    slug: 'data-analytics',
    description: 'Data processing, analysis, and business intelligence',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    serviceCount: 10
  },
  {
    id: '6',
    name: 'Network Solutions',
    slug: 'network-solutions',
    description: 'Network infrastructure and connectivity solutions',
    icon: Network,
    color: 'from-yellow-500 to-orange-500',
    serviceCount: 6
  }
];

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>Service Categories | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services across AI, cloud computing, cybersecurity, and more." />
        <meta property="og:title" content="Service Categories | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive range of technology services across AI, cloud computing, cybersecurity, and more." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Categories</h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover our comprehensive range of technology services designed to transform your business
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.serviceCount} services
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/services/${category.slug}`}>
                          Explore Services
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
              <p className="text-gray-600 mb-8">
                Can't find what you're looking for? Our team can create custom solutions tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}