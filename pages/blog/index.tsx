<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      slug: "ai-powered-marketplaces-the-future-of-digital-commerce-chat",
      excerpt: "Explore how AI is revolutionizing digital marketplaces with personalized experiences, intelligent recommendations, and automated operations.",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "E-commerce", "Digital Transformation"],
      featured: true
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      slug: "blockchain-technology-in-modern-business-solutions-chat",
      excerpt: "Discover how blockchain technology is transforming modern business operations with secure transactions, smart contracts, and decentralized solutions.",
      date: "December 14, 2024",
      readTime: "10 min read",
      tags: ["Blockchain", "Business Solutions", "Digital Innovation"]
    },
    {
      title: "5G Technology and Its Impact on IoT",
      slug: "5g-technology-and-its-impact-on-iot-chat",
      excerpt: "Understanding how 5G networks are revolutionizing IoT applications and enabling new possibilities for connected devices.",
      date: "December 13, 2024",
      readTime: "7 min read",
      tags: ["5G", "IoT", "Connectivity"]
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      slug: "cybersecurity-trends-for-2024-and-beyond-chat",
      excerpt: "Stay ahead of emerging cybersecurity threats and learn about the latest trends and technologies protecting digital assets.",
      date: "December 12, 2024",
      readTime: "9 min read",
      tags: ["Cybersecurity", "Security", "Technology Trends"]
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      slug: "cloud-native-architecture-best-practices-chat",
      excerpt: "Learn the essential best practices for building scalable, resilient cloud-native applications that can adapt to changing demands.",
      date: "December 11, 2024",
      readTime: "6 min read",
      tags: ["Cloud Computing", "Architecture", "Best Practices"]
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      slug: "machine-learning-applications-in-enterprise-software-chat",
      excerpt: "Discover how machine learning is being integrated into enterprise software to drive efficiency and innovation.",
      date: "December 10, 2024",
      readTime: "8 min read",
      tags: ["Machine Learning", "Enterprise", "Software Development"]
    }
  ];
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground'

const posts = [
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' },
  // New content
  { slug: 'agentic-product-playbooks', title: 'Agentic Product Playbooks', excerpt: 'Practical blueprints for shipping agentic workflows into production.' },
  { slug: 'evals-and-guardrails', title: 'Evals, Guardrails, and Safety', excerpt: 'Build trustworthy AI systems with evaluations and safety baselines.' },
  { slug: 'cloud-cost-optimization-2025', title: 'Cloud Cost Optimization 2025', excerpt: 'Modern FinOps patterns for resilient, cost-efficient platforms.' }
]
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/feature/blog-promos
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7

export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-black/40 border border-gray-700/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">AI Revolution</h3>
                    <p className="text-blue-100">Transforming Digital Commerce</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/feature/blog-promos
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> origin/feature/blog-promos
=======
  )
}
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7

