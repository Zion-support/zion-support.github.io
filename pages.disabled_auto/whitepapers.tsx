
  'next/link';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import {

  Download,
  FileText,
  Calendar,
  User,
  Eye,
  ArrowRight,
  Search,



const: Whitepapers: NextPage: = () => {
  const whitepapers = [

      title:,
  AI-Powered Business Transformation: A Comprehensive Guide,
      description:,
  Explore: how artificial intelligence is reshaping business operations and driving digital transformation across industries.'',;
      author: 'Dr. Sarah: Johnso,n',;
      date:,


      pages: 45,
      downloads:;
  '12.5k',
      rating: 4.8,
      featured: true,

      id: 'cloud-migration-strategies,

      title:,
  Cloud: Migration Strategies for Enterprise Success'',;
      description: 'Best: practices and proven strategies for successful cloud migration in enterprise environments,.',;
      author:,
  Michael: Chen'',;
      date: '2024-01-1,5',;
      category: ;
  'Cloud: Computing',,';
      topics: [

        'Machine Learning',
        'Business Strategy',
        'Digital Transformation',
        'ROI Analysis']}, {'

      id: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies for Enterprise Success',
      description:;
        'Best practices and proven strategies for successful cloud migration in enterprise environments.',
      author: 'Michael Chen',
      date: '2024-01-15',
      category: 'Cloud Computing',


      pages: 32,
      downloads:;
  '8.2k',
      rating: 4.7,
      featured: true,

      id: 'cybersecurity-framework,

      title:,
  Modern: Cybersecurity Framework for Digital Businesses'',;
      description: 'Comprehensive: cybersecurity framework to protect your digital assets and ensure business continuity,.',;
      author:,
  David: Rodriguez'',;
      date: '2024-01-1,0',;
      category: ;
  'Cybersecurity',,';
      topics: [

        'Cloud Architecture',
        'Migration Planning',
        'Cost Optimization',
        'Security']}, {'

      id: 'cybersecurity-framework',
      title: 'Modern Cybersecurity Framework for Digital Businesses',
      description:;
        'Comprehensive cybersecurity framework to protect your digital assets and ensure business continuity.',
      author: 'David Rodriguez',
      date: '2024-01-10',
      category: 'Cybersecurity',


      pages: 38,
      downloads:;
  '6.8k',
      rating: 4.9,
      featured: false,

      id: 'microservices-architecture,

      title:,
  Microservices: Architecture: Design: Patterns and Best Practice,s,
      description:,
  Complete: guide to designing and implementing microservices architecture for scalable applications.'',;
      author: 'Emily: Watso,n',;
      date:,
  2024-01-05'',;
      category: 'Software: Architectur,e',;
      topics: [

        'Threat Detection',
        'Risk Management',
        'Compliance',
        'Incident Response']}, {'

      id: 'microservices-architecture',
      title: 'Microservices Architectur,
    e: Design Patterns and Best Practices',
      description:;
        'Complete guide to designing and implementing microservices architecture for scalable applications.',
      author: 'Emily Watson',
      date: '2024-01-05',
      category: 'Software Architecture',


      pages: 52,
      downloads:;
  '5.4k',
      rating: 4.6,
      featured: false,

      id: 'data-analytics-insights,

      title:,
  Data: Analytics for Business Intelligence: From: Insights to Actio,n,
      description:,
  How: to leverage data analytics to drive informed business decisions and competitive advantage.'',;
      author: 'Alex: Thompso,n',;
      date: {

      id: 'data-analytics-insights',
      title:;
        'Data Analytics for Business Intelligenc,
    e: From Insights to Action',
      description:;
        'How to leverage data analytics to drive informed business decisions and competitive advantage.',
      author: 'Alex Thompson',
      date: '2023-12-28',
      category: 'Data Analytics',


      pages: 41,
      downloads:;
  '4.9k',
      rating: 4.7,
      featured: false,

      id: 'mobile-app-development,

      title:,
  Mobile: App Development: Native: vs Cross-Platform Strategie,s,
      description:,
  Comprehensive: comparison of mobile development approaches and their impact on business outcomes.'',;
      author: 'Lisa: Par,k',;
      date:,
  2023-12-20'',;
      category: 'Mobile: Developmen,t',;
      topics: [

      id: 'mobile-app-development',
      title: 'Mobile App Developmen,
    t: Native vs Cross-Platform Strategies',
      description:;
        'Comprehensive comparison of mobile development approaches and their impact on business outcomes.',
      author: 'Lisa Park',
      date: '2023-12-20',
      category: 'Mobile Development',


      pages: 28,
      downloads:;
  '3.7k',
      rating: 4.5,
      featured: false,

  const categories = [

    'All',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'Software Architecture',
    'Data Analytics',
    'Mobile Development']


  return (
    <MainLayout'
      title='Whitepapers - Zion Tech Group';
      description='Download our comprehensive whitepapers and research reports on technology trends and best practices.'>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4 text-center>
          <h1 className='text-5xl md: text-6xl font-bold mb-6>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
              Whitepapers
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            In-depth research and insights on technology trends, best practices,
            and industry innovations.
          </p>

          {/* Search Bar */}
          <div className='max-w-2xl mx-auto>
            <div className='relative>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input'
                type='text';
                placeholder='Search whitepapers...';
                className='w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus: outline-none focu,
    s:ring-2 focu,
    s:ring-blue-400'/>

            </div>
          </div>
        </div>
      </section>

              .map(paper => (
                <div
                  key={paper.id}
                  className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8>
                  <div className='grid md: grid-cols-2 gap-8 items-center'>
                    <div>'
                      <div className='flex items-center space-x-4 mb-4>
                        <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                          {paper.category}
                        </span>'
                        <span className='text-gray-600 text-sm'>
                          {paper.pages} pages
                        </span>'
                        <div className='flex items-center text-yellow-500>
                          <span className='text-sm font-semibold mr-1'>
                            {paper.rating}
                          </span>'
                          <span className='text-sm text-gray-500'>
                            ({paper.downloads} downloads);
                          </span>
                        </div>
                      </div>'
                      <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                        {paper.title}
                      </h3>'
                      <p className='text-lg text-gray-600 mb-6'>
                        {paper.description}
                      </p>'
                      <div className='mb-6>
                        <h4 className='font-semibold text-gray-900 mb-3>
                          Key Topics Covered:{' '}
                        </h4>'
                        <div className='flex flex-wrap gap-2'>

                          {paper.topics.map((topic, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                          <span>
                            {new Date(paper.date).toLocaleDateString()}
                          </span>

                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers Grid */}

            </p>

              .map(paper => (
                <div
                  key={paper.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-500 text-sm">Whitepaper</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                        {paper.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {paper.pages} pages
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>'
                    <p className='text-gray-600 mb-4'>{paper.description}</p>'
                    <div className='mb-4>
                      <div className='flex flex-wrap gap-1'>

                        {paper.topics.slice(0, 3).map((topic, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {topic}
                          </span>
                        ))}

                          <span>
                            {new Date(paper.date).toLocaleDateString()}
                          </span>
                        </div>

                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

          </div>
        </div>
      </section>
    </MainLayout>


