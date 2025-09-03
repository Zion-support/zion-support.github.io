import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { 
  Brain, 
  Mail, 
  Headphones, 
  Calendar, 
  FolderKanban, 
  Workflow,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Automated content generation using advanced AI models for blogs, social media, and marketing materials.',
      href: '/solutions/ai-content-creation',
      features: ['Blog Post Generation', 'Social Media Content', 'SEO Optimization', 'Multi-language Support'],
      pricing: 'Starting at $299/month'
    }, {
      icon: Mail,
      title: 'Email Automation',
      description: 'Intelligent email marketing automation with personalized campaigns and advanced analytics.',
      href: '/solutions/email-automation',
      features: ['Drip Campaigns', 'Personalization', 'A/B Testing', 'Analytics Dashboard'],
      pricing: 'Starting at $199/month'
    }, {
      icon: Headphones,
      title: 'Customer Support Platform',
      description: 'AI-powered customer support system with chatbots, ticket management, and knowledge base.',
      href: '/solutions/customer-support',
      features: ['AI Chatbots', 'Ticket Management', 'Knowledge Base', 'Multi-channel Support'],
      pricing: 'Starting at $399/month'
    }, {
      icon: Calendar,
      title: 'Event Management',
      description: 'Comprehensive event management platform with registration, ticketing, and attendee management.',
      href: '/solutions/event-management',
      features: ['Event Registration', 'Ticketing System', 'Attendee Management', 'Analytics'],
      pricing: 'Starting at $149/month'
    }, {
      icon: FolderKanban,
      title: 'Project Management',
      description: 'Advanced project management tools with team collaboration, task tracking, and reporting.',
      href: '/solutions/project-management',
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Reporting'],
      pricing: 'Starting at $99/month'
    }, {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline business processes with custom workflow automation and integration capabilities.',
      href: '/solutions/workflow-automation',
      features: ['Process Automation', 'Integration APIs', 'Custom Workflows', 'Monitoring'],
      pricing: 'Starting at $249/month'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get your solution up and running in minutes, not months.'
    }, {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee.'
    }, {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team.'
    }, {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with confidence as your business expands.'
    }
  ];

  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for modern businesses. AI-powered tools, automation platforms, and custom software solutions."
        keywords="solutions, AI tools, automation, software, business solutions, technology"
      />
      <Head>
        <title>Solutions - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">

            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology solutions designed to address 
              your specific business needs and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <solution.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{solution.pricing}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={solution.href}>
                  <Button className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through innovative technology, expert support, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}

            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}