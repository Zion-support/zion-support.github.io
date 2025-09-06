import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function TechnologyInsightsPage() {
  const technologyTrends = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing in 2025',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Exploring the latest developments in quantum computing and their implications for AI and automation.',
=======
      description: 'Exploring the latest developments in quantum computing and their implications for AI and automation.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'Emerging Tech',
      readTime: '15 min read',
      featured: true
    };
    {
      id: 'edge-ai',
      title: 'Edge AI Revolution',
      description: 'How edge computing is transforming AI deployment and enabling real-time intelligent applications.',
      category: 'AI/ML',
      readTime: '12 min read',
      featured: false
    };
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicle Technology',
      description: 'The current state and future of autonomous vehicle technology and its broader applications.',
      category: 'Autonomy',
      readTime: '18 min read',
<<<<<<< HEAD
      featured: false,
    },
=======
      description: 'Exploring the latest developments in quantum computing and their implications for AI and automation.',
      category: 'Emerging Tech',
      readTime: '15 min read',
      featured: true
    };
    {
      id: 'edge-ai',
      title: 'Edge AI Revolution',
      description: 'How edge computing is transforming AI deployment and enabling real-time intelligent applications.',
      category: 'AI/ML',
      readTime: '12 min read',
      featured: false
    };
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicle Technology',
      description: 'The current state and future of autonomous vehicle technology and its broader applications.',
      category: 'Autonomy',
      readTime: '18 min read',
      featured: false
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      featured: false
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const researchAreas = [
    {
      title: 'Autonomous Systems Research',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      description:
        'Pioneering research in building truly autonomous systems that can operate independently.',
      focus: [
        'Decision Making',
        'Self-Learning',
        'Adaptive Behavior',
        'System Integration',
      ],
      icon: '🔬',
    },
<<<<<<< HEAD
=======
=======
      description: 'Pioneering research in building truly autonomous systems that can operate independently.',
      focus: ['Decision MakingSelf-LearningAdaptive BehaviorSystem Integration'],
      icon: '🔬'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      title: 'AI Ethics & Governance',
      description:
        'Research into responsible AI development and ethical considerations for autonomous systems.',
      focus: ['Ethical AI', 'Bias Detection', 'Transparency', 'Accountability'],
      icon: '⚖️',
    },
    {
      title: 'Human-AI Collaboration',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      description:
        'Exploring how humans and AI can work together effectively and safely.',
      focus: [
        'Human-AI Interface',
        'Collaborative Decision Making',
        'Safety Protocols',
        'Trust Building',
      ],
      icon: '🤝',
<<<<<<< HEAD
    },  ];
=======
    },
=======
      description: 'Pioneering research in building truly autonomous systems that can operate independently.',
      focus: ['Decision MakingSelf-LearningAdaptive BehaviorSystem Integration'],
      icon: '🔬'
    };
    {
      title: 'AI Ethics & Governance',
      description: 'Research into responsible AI development and ethical considerations for autonomous systems.',
      focus: ['Ethical AIBias DetectionTransparencyAccountability'],
      icon: '⚖️'
    };
    {
      title: 'Human-AI Collaboration',
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      description: 'Exploring how humans and AI can work together effectively and safely.',
      focus: ['Human-AI InterfaceCollaborative Decision MakingSafety ProtocolsTrust Building'],
      icon: '🤝'
    }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const whitepapers = [
    {
      id: 'autonomous-systems-whitepaper',
      title: 'The Future of Autonomous Systems',
<<<<<<< HEAD
      description:
        'A comprehensive analysis of autonomous technology trends and implementation strategies.',
      pages: '45',
      category: 'Technology',
      downloadUrl: '/whitepapers/autonomous-systems-future.pdf',
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'A comprehensive analysis of autonomous technology trends and implementation strategies.',
=======
      description: 'A comprehensive analysis of autonomous technology trends and implementation strategies.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      pages: '45',
      category: 'Technology',
      downloadUrl: '/whitepapers/autonomous-systems-future.pdf'
    };
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
      pages: '32',
      category: 'Ethics',
      downloadUrl: '/whitepapers/ai-ethics-framework.pdf'
    };
    {
      id: 'automation-roi-guide',
      title: 'Automation ROI Guide',
      description: 'How to calculate and maximize return on investment for automation initiatives.',
      pages: '28',
      category: 'Business',
<<<<<<< HEAD
      downloadUrl: '/whitepapers/automation-roi-guide.pdf',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description:
        'Establishing ethical guidelines for AI implementation in enterprise environments.',
      pages: '32',
      category: 'Ethics',
      downloadUrl: '/whitepapers/ai-ethics-framework.pdf',
    },
    {
      id: 'automation-roi-guide',
      title: 'Automation ROI Guide',
      description:
        'How to calculate and maximize return on investment for automation initiatives.',
      pages: '28',
      category: 'Business',
<<<<<<< HEAD
      downloadUrl: '/whitepapers/automation-roi-guide.pdf',
    },  ];
=======
      downloadUrl: '/whitepapers/automation-roi-guide.pdf'
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      downloadUrl: '/whitepapers/automation-roi-guide.pdf'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <>
      <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <title>
          Technology Insights | Zion Tech Group - Research & Innovation
        </title>
        <meta
          name='description'
          content="Explore Zion Tech Group's technology insights, research, and thought leadership in AI, automation, and emerging technologies."
        />
        <meta
          property='og:title'
          content='Technology Insights | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Research insights, technology trends, and thought leadership in AI and automation.'
        />
        <meta name='twitter:card' content='summary_large_image' />
<<<<<<< HEAD
=======
=======
        <title>Technology Insights | Zion Tech Group - Research & Innovation</title>
        <meta name="description" content="Explore Zion Tech Group's technology insights, research, and thought leadership in AI, automation, and emerging technologies." />
        <meta property="og:title" content="Technology Insights | Zion Tech Group" />
        <meta property="og:description" content="Research insights, technology trends, and thought leadership in AI and automation." />
        <meta name="twitter:card" content="summary_large_image" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <section className='text-center mb-16'>
            <h1 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'>
              Technology Insights
            </h1>
            <p className='text-xl text-white/80 max-w-3xl mx-auto'>
              Research insights, technology trends, and thought leadership in
              AI, automation, and emerging technologies
            </p>
          </section>

          <section className='mx-auto max-w-7xl'>
            {/* Technology Trends */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-center text-cyan-400'>
                Latest Technology Trends
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {technologyTrends.map((trend, index) => (
                  <div
                    key={index}
                    className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <span className='px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full'>
                        {trend.category}
                      </span>
                      <span className='text-white/60 text-sm'>
                        {trend.readTime}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {trend.title}
                    </h3>
                    <p className='text-white/70 mb-4'>{trend.description}</p>
                    <Link
                      href={`/blog/${trend.id}`}
                      className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors'
                    >
<<<<<<< HEAD
                      Read More <span className='ml-1'>→</span>                    </Link>
=======
<<<<<<< HEAD
                      Read More <span className='ml-1'>→</span>
=======
        <title>Technology Insights | Zion Tech Group - Research & Innovation</title>
        <meta name="description" content="Explore Zion Tech Group's technology insights, research, and thought leadership in AI, automation, and emerging technologies." />
        <meta property="og:title" content="Technology Insights | Zion Tech Group" />
        <meta property="og:description" content="Research insights, technology trends, and thought leadership in AI and automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technology Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Research insights, technology trends, and thought leadership in AI, automation, and emerging technologies
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Technology Trends */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Latest Technology Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologyTrends.map((trend, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full">{trend.category}</span>
                      <span className="text-white/60 text-sm">{trend.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{trend.title}</h3>
                    <p className="text-white/70 mb-4">{trend.description}</p>
                    <Link 
                      href={`/blog/${trend.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More <span className="ml-1">→</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      Read More <span className="ml-1">→</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                ))}
              </div>
            </div>

            {/* Research Areas */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-center text-fuchsia-400'>
                Research Focus Areas
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
<<<<<<< HEAD
=======
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Research Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {researchAreas.map((area, index) => (
                  <div
                    key={index}
                    className='bg-white/10 backdrop-blur-xl rounded-2xl p-6'
                  >
                    <div className='text-4xl mb-4'>{area.icon}</div>
                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {area.title}
                    </h3>
                    <p className='text-white/70 mb-4'>{area.description}</p>
                    <ul className='space-y-2'>
                      {area.focus.map((focus, focusIndex) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        <li
                          key={focusIndex}
                          className='text-sm text-white/60 flex items-center'
                        >
<<<<<<< HEAD
                          <span className='text-cyan-400 mr-2'>•</span>                          {focus}
=======
                          <span className='text-cyan-400 mr-2'>•</span>
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Research Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                    <p className="text-white/70 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.focus.map((focus, focusIndex) => (
                        <li key={focusIndex} className="text-sm text-white/60 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <li key={focusIndex} className="text-sm text-white/60 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          {focus}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Whitepapers */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-center text-green-400'>
                Research Whitepapers
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
<<<<<<< HEAD
=======
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Research Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {whitepapers.map((paper, index) => (
                  <div
                    key={index}
                    className='bg-white/10 backdrop-blur-xl rounded-2xl p-6'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <span className='px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full'>
                        {paper.category}
                      </span>
                      <span className='text-white/60 text-sm'>
                        {paper.pages} pages
                      </span>
                    </div>
                    <h3 className='text-xl font-bold mb-3 text-white'>
                      {paper.title}
                    </h3>
                    <p className='text-white/70 mb-4'>{paper.description}</p>
                    <Link
                      href={paper.downloadUrl}
                      className='inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors'
                    >
<<<<<<< HEAD
                      Download PDF <span className='ml-1'>→</span>                    </Link>
=======
<<<<<<< HEAD
                      Download PDF <span className='ml-1'>→</span>
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Research Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whitepapers.map((paper, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">{paper.category}</span>
                      <span className="text-white/60 text-sm">{paper.pages} pages</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{paper.title}</h3>
                    <p className="text-white/70 mb-4">{paper.description}</p>
                    <Link 
                      href={paper.downloadUrl}
                      className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      Download PDF <span className="ml-1">→</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      Download PDF <span className="ml-1">→</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Lab */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8 text-center text-blue-400'>
                Innovation Lab
              </h2>
              <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
<<<<<<< HEAD
=======
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Innovation Lab</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div>
                    <h3 className='text-2xl font-bold mb-4 text-cyan-400'>
                      Cutting-Edge Research
                    </h3>
                    <p className='text-white/80 mb-6'>
                      Our innovation lab is dedicated to exploring the frontiers
                      of technology, conducting research in autonomous systems,
                      AI ethics, and human-AI collaboration. We work with
                      leading institutions and industry partners to advance the
                      state of the art.
                    </p>
<<<<<<< HEAD
                    <ul className='space-y-2 text-white/70'>                      <li>• Advanced AI research and development</li>
=======
<<<<<<< HEAD
                    <ul className='space-y-2 text-white/70'>
=======
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Innovation Lab</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cutting-Edge Research</h3>
                    <p className="text-white/80 mb-6">
                      Our innovation lab is dedicated to exploring the frontiers of technology, conducting research in autonomous systems, AI ethics, and human-AI collaboration. We work with leading institutions and industry partners to advance the state of the art.
                    </p>
                    <ul className="space-y-2 text-white/70">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <ul className="space-y-2 text-white/70">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <li>• Advanced AI research and development</li>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <li>• Autonomous system prototyping</li>
                      <li>• Ethical AI framework development</li>
                      <li>• Industry collaboration and partnerships</li>
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div className='text-center'>
                    <div className='text-6xl mb-4'>🧪</div>
                    <p className='text-white/60 text-sm'>Innovation Lab</p>                  </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='text-center'>
                    <div className='text-6xl mb-4'>🧪</div>
                    <p className='text-white/60 text-sm'>Innovation Lab</p>
=======
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧪</div>
                    <p className="text-white/60 text-sm">Innovation Lab</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧪</div>
                    <p className="text-white/60 text-sm">Innovation Lab</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            </div>

            {/* Call to Action */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center'>
              <h2 className='text-3xl font-bold mb-4 text-white'>
                Join the Innovation Journey
              </h2>
              <p className='text-xl text-white/80 mb-6'>
                Stay updated with the latest technology insights and research
                from Zion Tech Group
<<<<<<< HEAD
=======
=======
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Join the Innovation Journey</h2>
              <p className="text-xl text-white/80 mb-6">
                Stay updated with the latest technology insights and research from Zion Tech Group
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105'
                >
                  Get in Touch
                </Link>
<<<<<<< HEAD
                <Link
                  href='/blog'
                  className='px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200'                >
=======
<<<<<<< HEAD
                <Link
                  href='/blog'
                  className='px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200'
=======
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Join the Innovation Journey</h2>
              <p className="text-xl text-white/80 mb-6">
                Stay updated with the latest technology insights and research from Zion Tech Group
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover: from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/blog"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link 
                  href="/blog"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Read Our Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
