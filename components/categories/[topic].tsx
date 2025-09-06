<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { GetServerSideProps, NextPage } from 'next',
import type { GetServerSideProps, NextPage } from 'next';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

import type { GetServerSideProps, NextPage } from 'next';

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] }
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
        <meta name='description' content={`Articles about ${topic}`} />
        <meta property='og:title' content={`${topic} - Zion Blog`} />
        <meta property='og:description' content={`Articles about ${topic}`} />
        <meta property='og:image' content='/images/og/topic-default.jpg' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />
        <meta name='twitter:description' content={`Articles about ${topic}`} />
        <meta name='twitter:image' content='/images/og/topic-default.jpg' />
      </Head>
      <div className='mx-auto max-w-6xl'>
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>
        <div className='mb-6'>
          <PageShareButtons
=======


<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name='description' content={`Articles about ${topic}`} />;
        <meta property='og:title' content={`${topic} - Zion Blog`} />;
        <meta property='og:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
<<<<<<< HEAD
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
<<<<<<< HEAD
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        <meta property='og:image' content='/images / og / topic - default.jpg' />;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508

        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            }
          />;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts && posts.map(p => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
        </div>;
        <div className='mt-6'>;
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;
      </Head>;
      <div className='mx - auto max - w-6xl'>;
        <h1 className='text - 4xl font - bold mb - 3'>{topic}</h1>;
        <div className='mb - 6'>;
          <PageShareButtons;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            title={`${topic} - Zion Blog`}
            url={
              typeof window === 'undefined'
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`
                : window.location.href
            }
            description={`Articles about ${topic}`}
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
            }
<<<<<<< HEAD
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {posts.map(p => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className='mt-6'>
          <Link href='/blog' className='underline'>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
          {posts.map (p => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className='mt - 6'>;
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx.params?.topic || '');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
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

  const topic = String(ctx.params?.topic || '');

  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;
=======
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {posts && posts.map((p) => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic |'');
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic || '');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

        </div>;
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <meta name='twitter:description' content={`Articles about ${topic}`} />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const topic = String(ctx && ctx.params?.topic || '');
<<<<<<< HEAD
<<<<<<< HEAD
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic))
=======
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
};

  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD
=======
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
  return { props: { topic, posts } }
}
export default TopicPage;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


  return { props: { topic, posts } }
}
export default TopicPage;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    </div>);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
;
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String (ctx.params?.topic || '');
  const posts = listPublishedPosts ().filter (p => p.topics.includes (topic));
  return { props: { topic, posts } }
}
;
export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text - 4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app / categories/${encodeURIComponent (topic)}` : window.location.href}
            description={`Articles about ${topic}`}
            on_share={(network) => fetch ('/api / analytics / share', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium = share & utm_campaign = category' }) }).catch (() => {})}
          />;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols-3 gap-6">;
          {posts.map ((p) => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
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
          <PageShareButtons
            title={_`${topic} - Zion Blog`}
            url={_typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={_`Articles about ${topic}`}
            onShare={_(_network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch__(() => {})}
          />
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
import type { GetServerSideProps, NextPage } from 'next',
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';

type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] }
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
<meta name='description' content={`Articles about ${topic}`} />
        <meta property='og:title' content={`${topic} - Zion Blog`} />
        <meta property='og:description' content={`Articles about ${topic}`} />
        <meta property='og:image' content='/images/og/topic-default.jpg' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />
        <meta name='twitter:description' content={`Articles about ${topic}`} />
        <meta name='twitter:image' content='/images/og/topic-default.jpg' />
      </Head>
      <div className='mx-auto max-w-6xl'>
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>
        <div className='mb-6'>
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={
              typeof window === 'undefined'
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`
                : window.location.href
            }
            description={`Articles about ${topic}`}
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
            }
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {posts.map(p => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className='mt-6'>
          <Link href='/blog' className='underline'>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String(ctx.params?.topic |'')
};

export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
  return { props: { topic, posts } }
};

export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic |'')
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));

  const topic = String(ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return { props: { topic, posts } };
};

export default TopicPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
