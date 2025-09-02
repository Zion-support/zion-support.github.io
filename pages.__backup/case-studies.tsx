import type { NextPage } from
  'next';
import Head from
  'next/head';
import Link from
  'next/link';
import { useState } from
  'react';
import Navigation from
  '../components/layout/Navigation';
import Footer from
  '../components/Footer';
const CaseStudies: NextPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(,
  All');
  const [selectedService, setSelectedService] = useState(
  'All');

  const caseStudies = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1
      },
      image: '🛡️,
      featured: true,
ursor/automate-test-fix-improve-and-merge-code-99d1
      },
      image: '🏥,
      featured: true,
ursor/automate-test-fix-improve-and-merge-code-99d1
      },
      image: '☁️,
      featured: false,
ursor/automate-test-fix-improve-and-merge-code-99d1
      },
      image: '🏭,
      featured: false,
ursor/automate-test-fix-improve-and-merge-code-99d1
      },
      image: '🚀,
      featured: false,
ursor/automate-test-fix-improve-and-merge-code-99d1
    return matchesIndustry && matchesService;  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>
          Case Studies - Zion Tech Group | Success Stories & Client Results
        </title>
        <meta
          name="description"
          content="Explore our successful client implementations and transformative technology solutions. See how we've helped businesses across industries achieve remarkable results with AI, cloud computing, and digital transformation."
        />
        <meta
          name="keywords"
          content="case studies, client success stories, AI implementation, cloud migration, digital transformation results, technology solutions"
        />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how we&apos;ve helped businesses across industries achieve
            remarkable results through innovative technology solutions. From
            AI-powered systems to cloud transformations, see the real impact of
            our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📊 Proven Results</span>
            <span>🏆 Award-Winning Projects</span>
            <span>💼 Industry Leaders</span>
            <span>🎯 Measurable Impact</span>
          </div>
        </div>

        {/* Featured Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Success Stories
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredCaseStudies.map(study => (
              <div
                key={study.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{study.image}</div>
                      <div>
                        <div className="text-sm text-blue-600 font-medium">
                          {study.service}
                        </div>
                        <div className="text-xs text-gray-500">
                          {study.industry}
                        </div>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-4">
                    {study.company}
                  </p>
                  <p className="text-gray-600 mb-6">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-blue-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          {metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 italic mb-3">
                      &quot;{study.testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {study.testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {study.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>⏱️ {study.duration}</span>
                      <span>👥 {study.teamSize}</span>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={e => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Service
                </label>
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
ursor/automate-test-fix-improve-and-merge-code-99d1
          </p>        </div>

        {/* All Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Case Studies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map(study => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{study.image}</div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        {study.industry}
                      </div>
                      <div className="text-xs text-blue-600 font-medium">
                        {study.service}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {study.company}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Top 2 Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.metrics.slice(0, 2).map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 bg-gray-50 rounded"
                      >
                        <div className="text-lg font-bold text-blue-600">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {study.duration} • {study.teamSize}
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                These numbers represent real results achieved for our clients
                across various industries and project types.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-lg opacity-90">
                  Client Savings Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg opacity-90">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results
              with innovative technology solutions tailored to your specific
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
export default CaseStudies;
