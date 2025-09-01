import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-success',
      title: 'AI-Powered Automation Success Story',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual processes were consuming 40+ hours per week and causing delays in customer service.',
      solution: 'Implemented intelligent automation workflows using AI and machine learning algorithms.',
      results: [
        'Reduced manual processing time by 85%',
        'Improved customer response time from 24 hours to 2 hours',
        'Increased team productivity by 60%',
        'ROI of 300% within 6 months'
      ],
      technologies: ['AI/ML', 'RPA', 'Workflow Automation', 'API Integration'],
      duration: '4 months',
      teamSize: '8 developers + 2 business analysts',
      featured: true
    },
    {
      id: 'digital-transformation',
      title: 'Complete Digital Transformation Journey',
      company: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Legacy systems were preventing growth and causing operational inefficiencies across 12 locations.',
      solution: 'End-to-end digital transformation including cloud migration, process automation, and data analytics.',
      results: [
        'Unified operations across all locations',
        'Reduced operational costs by 35%',
        'Improved supply chain visibility by 90%',
        'Enhanced decision-making with real-time analytics'
      ],
      technologies: ['Cloud Computing', 'IoT', 'Data Analytics', 'Process Automation'],
      duration: '18 months',
      teamSize: '15 developers + 5 architects + 10 business users',
      featured: false
    },
    {
      id: 'startup-scaling',
      title: 'Startup Scaling from 0 to 100K Users',
      company: 'InnovateStart',
      industry: 'SaaS',
      challenge: 'Rapid user growth was overwhelming manual processes and causing system crashes.',
      solution: 'Built scalable infrastructure and automated user onboarding, support, and analytics systems.',
      results: [
        'Successfully handled 100K+ concurrent users',
        'Automated 95% of user onboarding',
        'Reduced support tickets by 70%',
        'Achieved 99.9% uptime'
      ],
      technologies: ['Microservices', 'Auto-scaling', 'CI/CD', 'Monitoring'],
      duration: '6 months',
      teamSize: '6 developers + 2 DevOps engineers',
      featured: false
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization with AI',
      company: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Inefficient inventory management, stockouts, and high logistics costs',
      solution: 'Implemented AI-powered demand forecasting and automated inventory management systems',
      results: [
        '45% reduction in stockouts',
        '30% decrease in inventory carrying costs',
        '25% improvement in delivery times',
        '20% increase in profit margins'
      ],
      technologies: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Real-time Tracking'],
      duration: '7 months',
      teamSize: '6 engineers + 3 supply chain specialists',
      featured: false
    },
    {
      id: 'quality-control-automation',
      title: 'Automated Quality Control System',
      company: 'Automotive Manufacturer',
      industry: 'Automotive',
      challenge: 'Manual quality inspection processes causing delays and inconsistent results',
      solution: 'Deployed computer vision and AI systems for automated quality inspection and defect detection',
      results: [
        '95% accuracy in defect detection',
        '70% reduction in inspection time',
        'Zero false positives in critical components',
        '24/7 automated quality monitoring'
      ],
      technologies: ['Computer Vision', 'Deep Learning', 'IoT Sensors', 'Real-time Monitoring'],
      duration: '9 months',
      teamSize: '7 engineers + 2 quality specialists',
      featured: false
    },
    {
      id: 'energy-efficiency-optimization',
      title: 'Energy Efficiency Optimization',
      company: 'Commercial Building Operator',
      industry: 'Real Estate',
      challenge: 'High energy costs and inefficient building management systems',
      solution: 'Implemented AI-powered building management system with predictive energy optimization',
      results: [
        '35% reduction in energy consumption',
        '40% decrease in utility costs',
        'Improved occupant comfort',
        'Predictive maintenance for HVAC systems'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Predictive Analytics', 'Building Automation'],
      duration: '6 months',
      teamSize: '5 engineers + 2 facility managers',
      featured: false
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Zion Tech Group's AI automation and technology solutions." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and case studies." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how our AI automation and technology solutions transform businesses
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      {study.industry}
                    </span>
                    <span className="text-white/60 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-white/70 mb-4">{study.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-lg border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-3">✓</span>
                          <span className="text-white/80 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                    >
                      View Full Case Study →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Proven Results</h3>
                  <p className="text-white/70">Track record of delivering measurable business value and ROI</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Rapid Implementation</h3>
                  <p className="text-white/70">Quick deployment and time-to-value for your business</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">AI-First Approach</h3>
                  <p className="text-white/70">Cutting-edge AI technology driving innovation and efficiency</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-cyan-300">Ready to Start Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI automation and technology solutions can transform your business 
                  and deliver measurable results like the ones you see above.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Get Started Today
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-200"
                  >
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}