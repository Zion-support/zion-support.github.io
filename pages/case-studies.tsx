import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { TrendingUp, Users, Clock, ArrowRight, Star, Award, Building, Zap } from 'lucide-react';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Supply Chain Transformation",
      client: "TechCorp Manufacturing",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain visibility and tracking across 15 countries",
      solution: "Implemented blockchain-based supply chain platform with real-time tracking",
      results: [
        "99.9% reduction in traceability time",
        "40% reduction in supply chain costs",
        "100% compliance with international standards",
        "Real-time visibility across all operations"
      ],
      image: "supply-chain",
      duration: "6 months",
      team: "8 experts",
      rating: 5
    },
    {
      id: 2,
      title: "AI-Powered Customer Analytics Platform",
      client: "RetailMax Corporation",
      industry: "Retail",
      challenge: "Lack of customer insights and personalized experiences",
      solution: "Developed comprehensive AI analytics platform with machine learning models",
      results: [
        "35% increase in customer engagement",
        "25% boost in conversion rates",
        "60% improvement in customer satisfaction",
        "Real-time personalized recommendations"
      ],
      image: "ai-analytics",
      duration: "4 months",
      team: "6 experts",
      rating: 5
    },
    {
      id: 3,
      title: "Cloud-Native Application Migration",
      client: "FinanceFlow Inc.",
      industry: "Financial Services",
      challenge: "Legacy system limitations and scalability issues",
      solution: "Complete migration to cloud-native architecture with microservices",
      results: [
        "300% improvement in application performance",
        "50% reduction in infrastructure costs",
        "99.99% uptime achieved",
        "Seamless scalability for peak loads"
      ],
      image: "cloud-migration",
      duration: "8 months",
      team: "12 experts",
      rating: 5
    },
    {
      id: 4,
      title: "IoT Device Management Solution",
      client: "SmartCity Solutions",
      industry: "Smart Cities",
      challenge: "Managing 50,000+ IoT devices across the city",
      solution: "Comprehensive IoT management platform with real-time monitoring",
      results: [
        "90% reduction in device downtime",
        "Real-time monitoring of all devices",
        "Predictive maintenance capabilities",
        "Centralized management dashboard"
      ],
      image: "iot-management",
      duration: "5 months",
      team: "10 experts",
      rating: 5
    },
    {
      id: 5,
      title: "Cybersecurity Defense Implementation",
      client: "HealthTech Partners",
      industry: "Healthcare",
      challenge: "Increasing cybersecurity threats and compliance requirements",
      solution: "Comprehensive cybersecurity platform with 24/7 monitoring",
      results: [
        "Zero security breaches since implementation",
        "100% compliance with healthcare regulations",
        "Real-time threat detection and response",
        "Comprehensive security training program"
      ],
      image: "cybersecurity",
      duration: "3 months",
      team: "7 experts",
      rating: 5
    },
    {
      id: 6,
      title: "Digital Transformation Consulting",
      client: "TraditionalCorp Ltd.",
      industry: "Traditional Manufacturing",
      challenge: "Digital transformation and modernization of legacy processes",
      solution: "End-to-end digital transformation strategy and implementation",
      results: [
        "Complete digital transformation achieved",
        "50% increase in operational efficiency",
        "Modern cloud-based infrastructure",
        "Employee training and change management"
      ],
      image: "digital-transformation",
      duration: "12 months",
      team: "15 experts",
      rating: 5
    }
  ];

  const industries = ['All', 'Manufacturing', 'Retail', 'Financial Services', 'Smart Cities', 'Healthcare', 'Technology'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Solutions</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, technology solutions, digital transformation, AI implementation, cloud migration" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories & Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results with our technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Start Your Success Story
              </Link>
              <Link href="/products" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
                View Our Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Success Story</h2>
            <p className="mt-6 text-lg text-gray-600">
              How we transformed TechCorp's supply chain with blockchain technology
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-500">{caseStudies[0].industry}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h3>
                <p className="text-gray-600 mb-6">{caseStudies[0].challenge}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {caseStudies[0].duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {caseStudies[0].team}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                <div className="space-y-3">
                  {caseStudies[0].results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">More Success Stories</h2>
            <p className="mt-6 text-lg text-gray-600">
              Explore how we've helped businesses across different industries achieve their goals
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.slice(1).map((study) => (
              <div key={study.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: study.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {study.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {study.team}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Track Record</h2>
            <p className="mt-6 text-lg text-gray-600">
              Consistent results across all our client engagements
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <p className="mt-6 text-lg text-gray-600">
              How we deliver consistent results for our clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your current state and identify opportunities for improvement.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive plan tailored to your specific needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Our expert team executes the solution with precision and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize to ensure maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Write Your Success Story?</h2>
            <p className="mt-6 text-lg text-blue-100">
              Let's discuss how our expertise can help your business achieve similar results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;