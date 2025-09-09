import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap 
} from 'lucide-react';

const Layout = dynamic(() => import('../components/Layout'), { ssr: false });

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Needed to improve customer experience and increase conversion rates',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: '40% increase in conversion rates, 60% reduction in support tickets',
      icon: Building2
    },
    {
      id: 2,
      title: 'Blockchain Supply Chain Management',
      client: 'Global Logistics Inc',
      industry: 'Logistics',
      challenge: 'Required transparent and secure supply chain tracking',
      solution: 'Developed blockchain-based tracking system with smart contracts',
      results: '99.9% accuracy in tracking, 30% reduction in disputes',
      icon: Globe
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices Platform',
      client: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Legacy system couldn\'t scale with growing user base',
      solution: 'Migrated to cloud-native microservices architecture',
      results: '300% improvement in performance, 50% reduction in costs',
      icon: Zap
    }
  ];

  const industries = ['All', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];

  return (;
    <>;
      <Head>;
        <title>Case Studies | Zion Tech Group - Success Stories & Automation Results</title>;
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." />;
        <meta property="og:title" content="Case Studies - Zion Tech Group" />;
        <meta property="og:description" content="Success stories and automation results from real businesses." />;
        <meta name="twitter:card" content="summary_large_image" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">;
        <main className="container mx-auto px-6 py-12">;
          <nav className="mb-8">;
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
              ← Back to Home;
            </a>;
          </nav>;

          <header className="text-center mb-16">;
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">;
              Success Stories;
            </h1>;
            <p className="text-xl text-white/80 max-w-3xl mx-auto">;
              Discover how Zion Tech Group's autonomous automation solutions have transformed ;
              businesses across industries, delivering measurable results and competitive advantages.;
            </p>;
          </header>;

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Explore our successful case studies and see how we've helped businesses transform with cutting-edge technology solutions." 
        />
      </Head>
      
      <Layout 
        title="Case Studies"
        description="Explore our successful case studies and see how we've helped businesses transform with cutting-edge technology solutions"
      >
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform with cutting-edge technology solutions
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <study.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-gray-600">{study.client}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>;
                    <span className="text-white/60 text-sm">{study.company}</span>;
                  </div>;

                  <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge</h4>;
                    <p className="text-white/80 text-sm">{study.challenge}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-green-400 mb-2">Our Solution</h4>;
                    <p className="text-white/80 text-sm">{study.solution}</p>;
                  </div>;

                  <div className="mb-6">;
                    <h4 className="font-semibold text-blue-400 mb-2">Results</h4>;
                    <ul className="space-y-1">;
                      {};
                        <li key={resultIndex} className="text-white/80 text-sm">• {result}</li>;
                      ))}
                    </ul>;
                  </div>;

                  <div>;
                    <h4 className="font-semibold text-purple-400 mb-2">Technologies Used</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {};
                        <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20">;
                          {tech}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </section>;

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

          {/* Call to Action */}
          <section className="text-center">;
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20">;
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?</h2>;
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">;
                Join the hundreds of companies that have transformed their operations with ;
                Zion Tech Group's autonomous automation solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">;
                  Start Your Project;
                </a>;
                <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300">;
                  Explore Services;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </div>;
    </>;
  )}