
<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import type { GetServerSideProps, NextPage } from 'next';


<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';
=======

'
import Head from 'next/head';'
import Link from 'next/link';'
import { BlogPost  } from '@/utils/types/blog';'
import PageShareButtons from '@/components/blog/PageShareButtons';'
import { listPublishedPosts } from '@/utils/data/blogStore';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import BlogCard from '@/components/blog/BlogCard';


<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
pr-12243
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
  return (
<<<<<<< HEAD
pr-12243
=======


const TopicPage: NextPage<Props> = ({ topic, posts }) => {}
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
  return (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;'
        <meta name='description' content={`Articles about ${topic}`} />;'`
        <meta property='og:title' content={`${topic} - Zion Blog`} />;'`
        <meta property='og:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
        <meta property='og:image' content='/images / og / topic - default.jpg' />;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
        <meta property='og:image' content='/images / og / topic - default.jpg' />;
pr-12243
=======

=======

        <meta property='og:image' content='/images / og / topic - default.jpg' />;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;

pr-12243
            onShare={network =>;
              fetch('/api/analytics/share', {;
                method: 'POST',;
=======
'
        <meta property='og:type' content='website' />;'
        <meta name='twitter:card' content='summary_large_image' />;'`
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;'`
        <meta name='twitter:description' content={`Articles about ${topic}`} />;

            onShare={network =>;'
              fetch('/api/analytics/share', {;'
                method: 'POST',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                headers: { 'Content-Type': 'application/json' },;
                body: JSON && JSON.stringify({;
                  url: window && window.location.href,;`
                  title: `${topic} - Zion Blog`,;
                  network,;
                  utm:;'
                    'utm_source=' +;
                    network +;'
                    '&utm_medium=share&utm_campaign=category',;
                }),;
              }).catch(() => {});

<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            }
          />;
        </div>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts && posts.map(p => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
        </div>;'
        <div className='mt-6'>;'
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;
      </Head>;'
      <div className='mx - auto max - w-6xl'>;'
        <h1 className='text - 4xl font - bold mb - 3'>{topic}</h1>;'
        <div className='mb - 6'>;
          <PageShareButtons;`
            title={`${topic} - Zion Blog`}
            url={'
              typeof window === 'undefined';`
                ? `https://zion.app / categories/${encodeURIComponent (topic)}`;
                : window.location.href;
            }`
            description={`Articles about ${topic}`}
            on_share={network =>;'
              fetch ('/api / analytics / share', {'
                method: 'POST','
                headers: { 'Content - Type': 'application / json' },
                body: JSON.stringify ({}
                  url: window.location.href,`
                  title: `${topic} - Zion Blog`,
                  network,
                  utm:;'
                    'utm_source=' +;
                    network +;'
                    '&utm_medium = share & utm_campaign = category',
                }),
              }).catch (() => {});
            }
          />;
        </div>;'
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
          {posts.map (p => (
            <BlogCard key={p.id} post={p} />))}
        </div>;'
        <div className='mt - 6'>;'
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
=======

<<<<<<< HEAD
=======

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
<<<<<<< HEAD


<<<<<<< HEAD
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>`
        <meta name="description" content={`Articles about ${topic}`} />"`
        <meta property="og:title" content={`${topic} - Zion Blog`} />"`
        <meta property="og:description" content={`Articles about ${topic}`} />"
        <meta property="og:image" content="/images/og/topic-default.jpg" />"
        <meta property="og:type" content="website" />"
        <meta name="twitter:card" content="summary_large_image" />"`
        <meta name="twitter:title" content={`${topic} - Zion Blog`} />"`
        <meta name="twitter:description" content={`Articles about ${topic}`} />"
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />
      </Head>"
      <div className="mx-auto max-w-6xl">"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>"
        <div className="mb-6">
<<<<<<< HEAD
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export const getServerSideProps: GetServerSideProps = async ctx => {;'
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
  return { props: { topic, posts } };
};

export default TopicPage;      </Head>;"
      <div className="mx-auto max-w-6xl">;"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;"
        <div className="mb-6">;

<<<<<<< HEAD

pr-12243
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic |'');
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
=======
          <PageShareButtons;`
            title={`${topic} - Zion Blog`}'`
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}`
            description={`Articles about ${topic}`}'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {posts && posts.map((p) => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
<<<<<<< HEAD
        </div>;
=======

        </div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;'
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));

};

'
  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;



<<<<<<< HEAD
  return { props: { topic, posts } }
}
export default TopicPage;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>);
}
;
export const getServerSideProps: GetServerSideProps = async ctx => {';
  const topic = String (ctx.params?.topic || '');
  const posts = listPublishedPosts ().filter (p => p.topics.includes (topic));
  return { props: { topic, posts } }
}
;
export default TopicPage;      </Head>;"
      <div className="mx - auto max - w-6xl">;"
        <h1 className="text - 4xl font - bold mb - 3">{topic}</h1>;"
        <div className="mb - 6">;
          <PageShareButtons;`
            title={`${topic} - Zion Blog`}'`
            url={typeof window === 'undefined' ? `https://zion.app / categories/${encodeURIComponent (topic)}` : window.location.href}`
            description={`Articles about ${topic}`}'`
            on_share={(network) => fetch ('/api / analytics / share', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium = share & utm_campaign = category' }) }).catch (() => {})}
          />;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          {posts.map ((p) => (
            <BlogCard key={p.id} post={p} />))}
        </div>;"
        <div className="mt - 6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
      </div>;
    </div>);
}
;
export const getServerSideProps: GetServerSideProps = async (ctx) => {';
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>`
        <meta name=&quot;description&quot; content={`Articles about ${topic}`} />`
        <meta property=&quot;og:title&quot; content={`${topic} - Zion Blog`} />`
        <meta property=&quot;og:description&quot; content={`Articles about ${topic}`} />
        <meta property=&quot;og:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />`
        <meta name=&quot;twitter:title&quot; content={`${topic} - Zion Blog`} />`
        <meta name=&quot;twitter:description&quot; content={`Articles about ${topic}`} />
        <meta name=&quot;twitter:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
      </Head>
      <div className=&quot;mx-auto max-w-6xl&quot;>
        <h1 className=&quot;text-4xl font-bold mb-3&quot;>{topic}</h1>
        <div className=&quot;mb-6&quot;>
          <PageShareButtons;`
            title={_`${topic} - Zion Blog`}'`
            url={_typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}`
            description={_`Articles about ${topic}`}'`
            onShare={_(_network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch__(() => {})}
          />
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>'
import type { GetServerSideProps, NextPage } from 'next',';
import type { GetServerSideProps, NextPage } from 'next';'
import Head from 'next/head';'
import Link from 'next/link';'
import { BlogPost  } from '@/utils/types/blog';'
import PageShareButtons from '@/components/blog/PageShareButtons';'
import { listPublishedPosts } from '@/utils/data/blogStore';'
import BlogCard from '@/components/blog/BlogCard';

type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] }
<<<<<<< HEAD
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
=======
const TopicPage: NextPage<Props> = ({ topic, posts }) => {}
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>'`
        <meta name='description' content={`Articles about ${topic}`} />'`
        <meta property='og:title' content={`${topic} - Zion Blog`} />'`
        <meta property='og:description' content={`Articles about ${topic}`} />'
        <meta property='og:image' content='/images/og/topic-default.jpg' />'
        <meta property='og:type' content='website' />'
        <meta name='twitter:card' content='summary_large_image' />'`
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />'`
        <meta name='twitter:description' content={`Articles about ${topic}`} />'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <meta name='twitter:image' content='/images/og/topic-default.jpg' />
      </Head>'
      <div className='mx-auto max-w-6xl'>'
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>'
        <div className='mb-6'>
          <PageShareButtons;`
            title={`${topic} - Zion Blog`}
            url={'
              typeof window === 'undefined'`
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`
                : window.location.href;
            }`
            description={`Articles about ${topic}`}
            onShare={network =>'
              fetch('/api/analytics/share', {'
                method: 'POST''
                headers: { 'Content-Type': 'application/json' }
                body: JSON.stringify({}
                  url: window.location.href;`
                  title: `${topic} - Zion Blog`
                  network;
                  utm:'
                    'utm_source=' +
                    network +'
                    '&utm_medium=share&utm_campaign=category'
                })
              }).catch(() => {})
            }
          />
        </div>'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {posts.map(p => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>'
        <div className='mt-6'>'
          <Link href='/blog' className='underline'>
            Back to Blog;
          </Link>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async ctx => {';
  const topic = String(ctx.params?.topic |'');
};

export const getServerSideProps: GetServerSideProps = async ctx => {;'
  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
<<<<<<< HEAD
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>"
      <div className="mx-auto max-w-6xl">"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>"
        <div className="mb-6">
};
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const getServerSideProps: GetServerSideProps = async ctx => {;'
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
  return { props: { topic, posts } };
};

<<<<<<< HEAD
export default TopicPage;      </Head>;"
      <div className="mx-auto max-w-6xl">;"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;"
        <div className="mb-6">;
          <PageShareButtons;`
            title={`${topic} - Zion Blog`}'`
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}`
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {';
  const topic = String(ctx.params?.topic |'');
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
export const getServerSideProps: GetServerSideProps = async (ctx) => {};
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {;'
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));
'
  const topic = String(ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
  return { props: { topic, posts } };
};

export default TopicPage;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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
  const topic = String(ctx.params?.topic |'');
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

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
