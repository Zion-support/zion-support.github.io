<<<<<<< HEAD
import type { GetServerSideProps, NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
import { BlogPost } from '@/utils/types/blog',
import PageShareButtons from '@/components/blog/PageShareButtons',
import { listPublishedPosts } from '@/utils/data/blogStore',
import BlogCard from '@/components/blog/BlogCard',
type Props = { topic: string, posts: BlogPost[] },
=======
import type {_GetServerSideProps, _NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageShareButtons from '@/components/blog/PageShareButtons';
import BlogCard from '@/components/blog/BlogCard';

type Props = {_topic: string; posts: BlogPost[]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content={`Articles about ${topic}`} />
        <meta property=&quot;og:title&quot; content={`${topic} - Zion Blog`} />
        <meta property=&quot;og:description&quot; content={`Articles about ${topic}`} />
        <meta property=&quot;og:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content={`${topic} - Zion Blog`} />
        <meta name=&quot;twitter:description&quot; content={`Articles about ${topic}`} />
        <meta name=&quot;twitter:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
      </Head>
      <div className=&quot;mx-auto max-w-6xl&quot;>
        <h1 className=&quot;text-4xl font-bold mb-3&quot;>{topic}</h1>
        <div className=&quot;mb-6&quot;>
=======
        <meta name="description" content={_`Articles about ${topic}`} />
        <meta property="og:title" content={_`${topic} - Zion Blog`} />
        <meta property="og:description" content={_`Articles about ${topic}`} />
        <meta property="og:image" content="/images/og/topic-default.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={_`${topic} - Zion Blog`} />
        <meta name="twitter:description" content={_`Articles about ${topic}`} />
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />
      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{_topic}</h1>
        <div className="mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <PageShareButtons
            title={_`${topic} - Zion Blog`}
            url={_typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={_`Articles about ${topic}`}
            onShare={_(_network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch__(() => {})}
          />
        </div>
<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {_posts.map(_(p) => (
            <BlogCard key={p.id} post={_p} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ))}
        </div>
        <div className=&quot;mt-6&quot;><Link href=&quot;/blog&quot; className=&quot;underline&quot;>Back to Blog</a></div>
      </div>
    </div>
  )
},

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic || ''),
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic)),
  return { props: { topic, posts } }
},
=======
export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const _topic = String(ctx.params?.topic || '');
  const _posts = listPublishedPosts().filter(_(p) => p.topics.includes(topic));
  return { props: { topic, _posts} };
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default TopicPage,