import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    href: '/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat',
    title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
    description: 'How AI transforms marketplaces with personalization, trust, and operational efficiency.'
  },
  {
    href: '/blog/cloud-native-architecture-best-practices-chat',
    title: 'Cloud-Native Architecture: Best Practices',
    description: 'Practical guidance for building resilient, scalable, and cost-efficient cloud-native systems.'
  }
];

const BlogIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Latest insights and industry news" />
      </Head>
      
      <main>
        <h1>Latest Articles</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.href}>
              <h3>
                <Link href={post.href}>{post.title}</Link>
              </h3>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogIndex;