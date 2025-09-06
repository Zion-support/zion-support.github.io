<<<<<<< HEAD
import type { GetServerSideProps, NextPage } from 'next',
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';
<<<<<<< HEAD

<<<<<<< HEAD
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] }
=======
type Props = { topic: string, posts: BlogPost[] },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
=======
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
=======
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next / head';
import Link from 'next / link';
import {BlogPost} from '@/utils / types / blog';
import PageShareButtons from '@/components / blog / PageShareButtons';
import {listPublishedPosts} from '@/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard';
;
type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },
const TopicPage: NextPage < Props> = ({ topic, posts }) => {
  return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name='description' content={`Articles about ${topic}`} />;
        <meta property='og:title' content={`${topic} - Zion Blog`} />;
        <meta property='og:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
        <meta property='og:image' content='/images/og/topic-default && default.jpg' />;
=======
        <meta property='og:image' content='/images / og / topic - default.jpg' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
        <meta name='twitter:image' content='/images/og/topic-default && default.jpg' />;
      </Head>;
      <div className='mx-auto max-w-6xl'>;
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>;
        <div className='mb-6'>;
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={
              typeof window === 'undefined'
                ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}`
                : window && window.location.href
            }
            description={`Articles about ${topic}`}
<<<<<<< HEAD
            onShare={network =>
              fetch('/api/analytics/share', {
                method: 'POST'
                headers: { 'Content-Type': 'application/json' }
                body: JSON.stringify({
                  url: window.location.href
                  title: `${topic} - Zion Blog`
                  network
                  utm:
                    'utm_source=' +
                    network +
                    '&utm_medium=share&utm_campaign=category'
                })
              }).catch(() => {})
=======
            onShare={network =>;
              fetch('/api/analytics/share', {;
                method: 'POST',;
                headers: { 'Content-Type': 'application/json' },;
                body: JSON && JSON.stringify({;
                  url: window && window.location.href,;
                  title: `${topic} - Zion Blog`,;
                  network,;
                  utm:;
                    'utm_source=' +;
                    network +;
                    '&utm_medium=share&utm_campaign=category',;
                }),;
              }).catch(() => {});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }
          />;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts && posts.map(p => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
        </div>;
        <div className='mt-6'>;
=======
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;
      </Head>;
      <div className='mx - auto max - w-6xl'>;
        <h1 className='text - 4xl font - bold mb - 3'>{topic}</h1>;
        <div className='mb - 6'>;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={
              typeof window === 'undefined';
                ? `https://zion.app / categories/${encodeURIComponent (topic)}`;
                : window.location.href;
            }
            description={`Articles about ${topic}`}
            on_share={network =>;
              fetch ('/api / analytics / share', {
                method: 'POST',
                headers: { 'Content - Type': 'application / json' },
                body: JSON.stringify ({
                  url: window.location.href,
                  title: `${topic} - Zion Blog`,
                  network,
                  utm:;
                    'utm_source=' +;
                    network +;
                    '&utm_medium = share & utm_campaign = category',
                }),
              }).catch (() => {});
            }
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
          {posts.map (p => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className='mt - 6'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
<<<<<<< HEAD
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String(ctx.params?.topic |'');
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
=======
};

export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
  return { props: { topic, posts } };
};

export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {posts && posts.map((p) => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
<<<<<<< HEAD
        </div>
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic |'');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
=======
        </div>;
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return { props: { topic, posts } }
}
export default TopicPage;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </div>);
}
;
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String (ctx.params?.topic || '');
  const posts = listPublishedPosts ().filter (p => p.topics.includes (topic));
  return { props: { topic, posts } }
}
;
export default TopicPage;      </Head>;
      <div className="mx - auto max - w-6xl">;
        <h1 className="text - 4xl font - bold mb - 3">{topic}</h1>;
        <div className="mb - 6">;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app / categories/${encodeURIComponent (topic)}` : window.location.href}
            description={`Articles about ${topic}`}
            on_share={(network) => fetch ('/api / analytics / share', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium = share & utm_campaign = category' }) }).catch (() => {})}
          />;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          {posts.map ((p) => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className="mt - 6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>);
}
;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String (ctx.params?.topic || '');
  const posts = listPublishedPosts ().filter ((p) => p.topics.includes (topic));
  return { props: { topic, posts } }
}
;
export default TopicPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
