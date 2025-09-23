<<<<<<< HEAD
import type { GetServerSideProps, NextPage } from 'next';
=======
import type { GetServerSidePropsNextPage } from 'next';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';

type Props = { topic: string; posts: BlogPost[] };

<<<<<<< HEAD
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
=======
const TopicPage: NextPage<Props> = ({ topicposts }) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
        <meta name="description" content={`Articles about ${topic}`} />
        <meta property="og:title" content={`${topic} - Zion Blog`} />
        <meta property="og:description" content={`Articles about ${topic}`} />
        <meta property="og:image" content="/images/og/topic-default.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${topic} - Zion Blog`} />
        <meta name="twitter:description" content={`Articles about ${topic}`} />
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />
      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={`Articles about ${topic}`}
<<<<<<< HEAD
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
=======
            onShare={(network) => fetch('/api/analytics/share'{ method: ''POST', 'headers: { 'Content-Type': 'application/json' }body: JSON.stringify({ url: window.location.hreftitle: `${topic} - Zion Blog`networkutm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
<<<<<<< HEAD
  const topic = String(ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } };
=======
  const topic = String(ctx.params?.topic || ', ');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topicposts } };
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
};

export default TopicPage;