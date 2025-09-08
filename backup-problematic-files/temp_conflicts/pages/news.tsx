


import Link from 'next/link';
export default function News() {;

    }
  const latestNews = [;

      id: 3;,;
      title: 'Enterprise AI Adoption:Trends and Best Practices for 2024';,;
      excerpt: 'Discover the key trends driving AI adoption in enterprise environments and learn best practices for successful implementation.';,;
      category: 'enterprise';,;
      author: 'Jennifer Kim';,;
      date: '2024-01-10';,;
      readTime: '4 min read';,;
      image: '/images/news/enterprise-ai-trends.jpg';,;']
      tags: ['Enterprise AIBest Practices';, '2024 Trends'];
      id: 4;,;
      title: 'The Future of Autonomous Business Systems';,;
      excerpt: 'Exploring how autonomous systems are reshaping business operations and what this means for the future of work.';,;
      category: 'research';,;
      author: 'Dr. Alex Thompson';,;
      date: '2024-01-08';,;
      image: '/images/news/autonomous-systems.jpg';,;
      tags: ['Autonomous SystemsFuture of Work';, 'Innovation'];
      id: 5;,;
      title: 'Cybersecurity in the Age of AI:New Threats and Solutions';,;
      excerpt: 'How artificial intelligence is both creating new cybersecurity challenges and providing innovative solutions to protect digital assets.';,;
      author: 'Marcus Johnson';,;
      date: '2024-01-05';,;
      image: '/images/news/ai-cybersecurity.jpg';,;
      tags: ['CybersecurityAI Security';, 'Digital Protection'];
      id: 6;,;
      title: 'Quantum Machine Learning:Bridging Two Revolutionary Technologies';,;
      excerpt: 'Our research team explores the intersection of quantum computing and machine learning;, revealing exciting possibilities for the future.',;
      author: 'Dr. Elena Petrova';,;
      date: '2024-01-03';,;
      readTime: '8 min read';,;
      image: '/images/news/quantum-ml.jpg';,;
      tags: ['Quantum MLResearch';, 'Technology Convergence'];
  const industryInsights = [;
      id: 7;,;
      title: 'The Rise of Conscious AI:Ethical Considerations and Business Impact';,;
      excerpt: 'Examining the ethical implications of AI consciousness and how businesses can navigate this new frontier responsibly.';,;
      category: 'industry';,;
      author: 'Dr. Robert Chang';,;
      date: '2024-01-01';,;
      readTime: '6 min read';,;']
      tags: ['AI EthicsBusiness Impact';, 'Consciousness'];
      id: 8;,;
      title: 'Micro-SaaS Revolution:How Small Teams Are Building Big Solutions';,;
      excerpt: 'Exploring the growing trend of micro-SaaS companies and how they are disrupting traditional software markets.';,;
      author: 'Lisa Wang';,;
      date: '2023-12-28';,;
      tags: ['Micro-SaaSStartups';, 'Software Industry'];
  const upcomingEvents = [;


      registration:'https://ziontechgroup.com/events/ai-consciousness-summit-2024';
    },;
    {;
      id:2,;
      title:'Quantum Computing Workshop',;
      type:'Workshop',;
      date:'2024-02-22',;
      time:'1:00 PM - 5:00 PM',;


      registration:'https://ziontechgroup.com/events/quantum-workshop';
    }]
  const filteredNews = [...featuredNews, ...latestNews, ...industryInsights].filter(article => {;
    <div className="min-h-screen bg-black text-white">;"
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto text-center">;"
          <motion.h1 ;
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6";"
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12";"

          </motion.p>;
          {/* Search and Filter */}

            transition={{ duration: 0.8;, delay: 0.4 ;}}"
            className="max-w-4xl mx-auto";"
            <div className="relative mb-8">;"
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;"

              <input;"
                type="text";""
                placeholder="Search news and insights...";"
                value={searchTerm})
                onChange={(e) => setSearchTerm(e.target.value)}
</input>
            <div className="flex flex-wrap gap-3 justify-center">;"
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}

          <motion.div ;
















                      <span>By {article.author}</span>;

                      <span>{article.readTime}</span>;


        </main>;
    </>;

  );
}

