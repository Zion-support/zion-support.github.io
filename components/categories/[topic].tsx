<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


;
import type { GetServerSideProps, NextPage } from 'next';


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost   } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts  } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';
<<<<<<< HEAD


<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
import type { GetServerSideProps, NextPage } from 'next';
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import Head from 'next / head';
import Link from 'next / link';
import { BlogPost } from '@/utils / types / blog';
import PageShareButtons from '@/components / blog / PageShareButtons';
import { listPublishedPosts } from '@/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard';type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },const TopicPage: NextPage < Props> = ({ topic, posts }) => {return (const TopicPage: NextPage<Props> = ({ topic, posts }) => {type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },const TopicPage: NextPage<Props> = ({ topic, posts }) => {return (<div>;
import {listPublishedPosts} from '@/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard';
;
type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },
const TopicPage: NextPage < Props> = ({ topic, posts }) => {
  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name='description' content={`Articles about ${topic}`} />;
        <meta property='og:title' content={`${topic} - Zion Blog`} />;
        <meta property='og:description' content={`Articles about ${topic}`} />;<meta property='og:image' content='/images / og / topic - default.jpg' />;<meta property='og:image' content='/images / og / topic - default.jpg' />;<meta property='og:image' content='/images / og / topic - default.jpg' />;
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;onShare={network =>;
              fetch('/api/analytics/share', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON && JSON.stringify({url: window && window.location.href,title: `${topic} - Zion Blog`,network,utm:;
                    'utm_source=' +;
                    network +;
                    '&utm_medium=share&utm_campaign=category'})}).catch(() => {})}
        <meta property='og:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

        <meta property='og:image' content='/images / og / topic - default.jpg' />;

=======
        <meta property='og:image' content='/images / og / topic - default.jpg' />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

        <meta property='og:image' content='/images / og / topic - default.jpg' />;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        <meta property='og:image' content='/images / og / topic - default.jpg' />;



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

        <meta property='og:image' content='/images / og / topic - default.jpg' />;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            }
          />;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts && posts.map(p => (<BlogCard key={p && p.id} post={p} />;
          ))}
        </div>;
        <div className='mt-6'>;
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;
      </Head>;
      <div className='mx - auto max - w-6xl'>;
        <h1 className='text - 4xl font - bold mb - 3'>{topic}</h1>;
        <div className='mb - 6'>;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined';
                ? `https://zion.app / categories/${encodeURIComponent (topic)}`;
                : window.location.href;
            }
            description={`Articles about ${topic}`}
            on_share={network =>;
              fetch ('/api / analytics / share', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify ({url: window.location.href,title: `${topic} - Zion Blog`,network,utm:;
                    'utm_source=' +;
                    network +;
                    '&utm_medium = share & utm_campaign = category';
                })'&utm_medium = share & utm_campaign = category';
                })'&utm_medium = share & utm_campaign = category';
                })}).catch (() => {})}
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
          {posts.map (p => (<BlogCard key={p.id} post={p} />))}
        </div>;
        <div className='mt - 6'>;
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
<<<<<<< HEAD
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
      </div>;const posts = listPublishedPosts().filter(p => p.topics.includes(topic))return { props: { topic, posts } }
}
      </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name="description" content={`Articles about ${topic}`} />;
        <meta property="og:title" content={`${topic} - Zion Blog`} />;
        <meta property="og:description" content={`Articles about ${topic}`} />;
        <meta property="og:image" content="/images/og/topic-default.jpg" />;
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={`${topic} - Zion Blog`} />;
        <meta name="twitter:description" content={`Articles about ${topic}`} />;
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />;
      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx && ctx.params?.topic || '')const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic))return { props: { topic, posts } }}export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;<PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx.params?.topic |'')}export const getServerSideProps: GetServerSideProps = async (ctx) => {export const getServerSideProps: GetServerSideProps = async (ctx) => {onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {posts && posts.map((p) => (<BlogCard key={p && p.id} post={p} />;
          ))}</div>;
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  )}export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx && ctx.params?.topic || '')const posts  = listPublishedPosts().filter((p) => p && p.topics.includes(topic))}const topic  = String(ctx.params?.topic || '')const posts = listPublishedPosts().filter((p) => p.topics.includes(topic))return { props: { topic, posts } }
}
export default TopicPage;return { props: { topic, posts } }
}
export default TopicPage;
    </div>)}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String (ctx.params?.topic || '')const posts = listPublishedPosts ().filter (p => p.topics.includes (topic))return { props: { topic, posts } }
}export default TopicPage;      </Head>;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

        </div>;
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));

};


  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

<<<<<<< HEAD


<<<<<<< HEAD
=======
  return { props: { topic, posts } }
}
export default TopicPage;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
          {posts.map ((p) => (<BlogCard key={p.id} post={p} />))}
        </div>;
        <div className="mt - 6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>)}export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String (ctx.params?.topic || '')const posts = listPublishedPosts ().filter ((p) => p.topics.includes (topic))return { props: { topic, posts } }
}export default TopicPage;ursor/fix-website-loading-errors-and-merge-6662;
const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (<div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name=&quot;description&quot; content={`Articles about ${topic}`} />;
        <meta property=&quot;og:title&quot; content={`${topic} - Zion Blog`} />;
        <meta property=&quot;og:description&quot; content={`Articles about ${topic}`} />;
        <meta property=&quot;og:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />;
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />;
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />;
        <meta name=&quot;twitter:title&quot; content={`${topic} - Zion Blog`} />;
        <meta name=&quot;twitter:description&quot; content={`Articles about ${topic}`} />;
        <meta name=&quot;twitter:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />;
      </Head>;
      <div className=&quot;mx-auto max-w-6xl&quot;>;
        <h1 className=&quot;text-4xl font-bold mb-3&quot;>{topic}</h1>;
        <div className=&quot;mb-6&quot;>;
          <PageShareButtons;
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
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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
          />;
        </div>;
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>;
import type { GetServerSideProps, NextPage } from 'next',type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] }type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] }
type Props = any;const TopicPage: NextPage<Props> = ({ topic, posts }) => {return (<div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name='description' content={`Articles about ${topic}`} />;
<meta name='description' content={`Articles about ${topic}`} />;
        <meta property='og:title' content={`${topic} - Zion Blog`} />;
        <meta property='og:description' content={`Articles about ${topic}`} />;
        <meta property='og:image' content='/images/og/topic-default.jpg' />;
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
        <meta name='twitter:image' content='/images/og/topic-default.jpg' />;
      </Head>;
      <div className='mx-auto max-w-6xl'>;
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>;
        <div className='mb-6'>;
          <PageShareButtons;
          />
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
import type { GetServerSideProps, NextPage } from 'next',
import { BlogPost  } from '@/utils/types/blog';
import { listPublishedPosts } from '@/utils/data/blogStore';

type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] }
<<<<<<< HEAD
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
            url={typeof window === 'undefined';
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`;
                : window.location.href;
            }
            description={`Articles about ${topic}`}
            onShare={network =>;
              fetch('/api/analytics/share', {method: 'POST';
                headers: { 'Content-Type': 'application/json' }
                body: JSON.stringify({url: window.location.href;
                  title: `${topic} - Zion Blog`;
                  network;
                  utm:;
                    'utm_source=' +;
                    network +;
                    '&utm_medium=share&utm_campaign=category';
                })}).catch(() => {})}
          />;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts.map(p => (<BlogCard key={p.id} post={p} />;
          ))}
        </div>;
        <div className='mt-6'>;
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
      </div>;
    </div>;
  )}
export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx.params?.topic |'')}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx.params?.topic || '')const posts = listPublishedPosts().filter(p => p.topics.includes(topic))const posts = listPublishedPosts().filter(p => p.topics.includes(topic))return { props: { topic, posts } }
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String(ctx.params?.topic |'');
};

export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));


<<<<<<< HEAD
export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx && ctx.params?.topic || '')const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic))return { props: { topic, posts } }}export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx.params?.topic |'')}export const getServerSideProps: GetServerSideProps = async (ctx) => {export const getServerSideProps: GetServerSideProps = async (ctx) => {}export const getServerSideProps: GetServerSideProps = async (ctx) => {}export const getServerSideProps: GetServerSideProps  = async (ctx) => {}export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx && ctx.params?.topic || '')const posts  = listPublishedPosts().filter((p) => p && p.topics.includes(topic))const topic = String(ctx.params?.topic || '')const posts = listPublishedPosts().filter((p) => p.topics.includes(topic))return { props: { topic, posts } }
}
export default TopicPage;return { props: { topic, posts } }}export default TopicPage;
export default TopicPage;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return { props: { topic, posts } };
};

export default TopicPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
