import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';
type Props = { topic: string, posts: BlogPost[] },
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={`Articles about ${topic}`}
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>
      </div>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
};

export default TopicPage;
