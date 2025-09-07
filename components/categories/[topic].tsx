<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


;
import type { GetServerSideProps, NextPage } from 'next';







=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import type { GetServerSideProps, NextPage } from 'next';

>>>>>>> merged-prs-20250907-203621
const TopicPage: NextPage<Props> = ({
  topic, posts 
}) => {
  return (<div> <Head> <title> {
  topic 
}- Zion Blog</title> <PageShareButtons title= {
  `$ {
  topic 
}- Zion Blog` 
}url= {
  typeof window === 'undefined' ? `https://zion.app/categories/$ {
  encodeURIComponent (topic) 
}` : window.location.href 
}description= {
  `Articles about $ {
  topic 
}` 
}onShare= {
  (network) => fetch ('/api/analytics/share', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
}, body: JSON.stringify ({
  url: window.location.href, title: `$ {
  topic 
}- Zion Blog`, network, utm: 'utm source=' + network + '&utm medium=share&utm campaign=category' 
}) 
}) .catch ( () => {
  
}) 
}/> </div>) ) 
}</div> <div className="mt-6" ><Link href="/blog" className="underline" >Back to Blog</a></div> </div> </div>) 
}
export default TopicPage
<<<<<<< HEAD
=======
=======
import type { GetServerSideProps, NextPage } from 'next';

>>>>>>> origin/chore/fix-lint-and-merge
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost  } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';

import BlogCard from '@/components/blog/BlogCard';

<<<<<<< HEAD
import type { GetServerSideProps, NextPage } from 'next;


<<<<<<< HEAD

import Head from next / head';
import Link from 'next / link;
import { BlogPost } from @/utils / types / blog';
import PageShareButtons from '@/components / blog / PageShareButtons;
import { listPublishedPosts } from @/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard;type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },const TopicPage: NextPage < Props> = ({ topic, posts }) => {return (const TopicPage: NextPage<Props> = ({ topic, posts }) => {type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },const TopicPage: NextPage<Props> = ({ topic, posts }) => {return (<div>;
import {listPublishedPosts} from @/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next / head';
import Link from 'next / link';
import {BlogPost} from '@/utils / types / blog';
import PageShareButtons from '@/components / blog / PageShareButtons';
import {listPublishedPosts} from '@/utils / data / blog_store';
import BlogCard from '@/components / blog / BlogCard';
;
>>>>>>> origin/chore/fix-lint-and-merge
type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },
const TopicPage: NextPage < Props> = ({ topic, posts }) => {
  return (

<<<<<<< HEAD
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
type Props = { topic: string; posts: BlogPost[] };type Props = { topic: string, posts: BlogPost[] },;
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div>;
      <Head>;
<<<<<<< HEAD
        <title>{topic} - Zion Blog</title>;
<<<<<<< HEAD
        <meta name=description' content={`Articles about ${topic}`} />;
        <meta property='og:title content={`${topic} - Zion Blog`} />;
        <meta property=og:description' content={`Articles about ${topic}`} />;
=======
        <meta name='description' content={`Articles about ${topic}`} />;
        <meta property='og:title' content={`${topic} - Zion Blog`} />;
        <meta property='og:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
        <meta property='og:image' content='/images / og / topic - default.jpg' />;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


        <meta property='og:image content=/images / og / topic - default.jpg' />;

        <meta property='og:image content=/images / og / topic - default.jpg' />;

        <meta property='og:image content=/images / og / topic - default.jpg' />;




        <meta property='og:image content=/images / og / topic - default.jpg' />;


        <meta property='og:type content=website' />;
        <meta name='twitter:card content=summary_large_image' />;
        <meta name='twitter:title content={`${topic} - Zion Blog`} />;
        <meta name=twitter:description' content={`Articles about ${topic}`} />;
=======
        <title>{topic} - Zion Blog</title>;'
        <meta name='description' content={`Articles about ${topic}`} />;'`
        <meta property='og:title' content={`${topic} - Zion Blog`} />;'`
        <meta property='og:description' content={`Articles about ${topic}`} />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <meta property='og:type' content='website' />;
        <meta name='twitter:card' content='summary_large_image' />;
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;
        <meta name='twitter:description' content={`Articles about ${topic}`} />;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

pr-12243
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            onShare={network =>;
<<<<<<< HEAD
              fetch('/api/analytics/share, {
                method: POST',
                headers: { 'Content-Type: application/json' },
                body: JSON && JSON.stringify({
                  url: window && window.location.href,
                  title: `${topic} - Zion Blog`,
                  network,
                  utm:;
                    'utm_source= +;
                    network +;
                    &utm_medium=share&utm_campaign=category'})}).catch(() => {});
=======
              fetch('/api/analytics/share', {;
                method: 'POST',;

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
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }
          />;
<<<<<<< HEAD
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6>;
          {posts && posts.map(p => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
        </div>;
<<<<<<< HEAD
        <div className=mt-6'>;
        <meta name='twitter:image content=/images / og / topic - default.jpg' />;
=======
        <div className='mt-6'>;
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </Head>;
      <div className='mx - auto max - w-6xl>;
        <h1 className=text - 4xl font - bold mb - 3'>{topic}</h1>;
        <div className='mb - 6>;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={
              typeof window === undefined';
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
                ? `https://zion.app / categories/${encodeURIComponent (topic)}`;
                : window.location.href;
            }`
            description={`Articles about ${topic}`}
<<<<<<< HEAD
            on_share={network =>;
              fetch ('/api / analytics / share, {
                method: POST',
                headers: { 'Content - Type: application / json' },
                body: JSON.stringify ({
                  url: window.location.href,
                  title: `${topic} - Zion Blog`,
                  network,
                  utm:;
                    'utm_source= +;
                    network +;
                    &utm_medium = share & utm_campaign = category'})}).catch (() => {});
            }
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6>;
          {posts.map (p => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className=mt - 6'>;
          <Link href='/blog className=underline'>;
            Back to Blog;
          </Link>;
        </div>;
  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
      <div className="mx-auto max-w-6xl>
        <h1 className=text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6>
      </div>;const posts = listPublishedPosts().filter(p => p.topics.includes(topic))return { props: { topic, posts } }
}
=======
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
<<<<<<< HEAD
        </div>;'
        <div className='mt - 6'>;'
=======
        </div>;
        <div className='mt - 6'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <Link href='/blog' className='underline'>;
            Back to Blog;
          </Link>;
        </div>;
>>>>>>> origin/chore/fix-lint-and-merge
      </div>;
<<<<<<< HEAD
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
=======

    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
        <meta name=description" content={`Articles about ${topic}`} />
        <meta property="og:title content={`${topic} - Zion Blog`} />
        <meta property=og:description" content={`Articles about ${topic}`} />
        <meta property="og:image content=/images/og/topic-default.jpg" />
        <meta property="og:type content=website" />
        <meta name="twitter:card content=summary_large_image" />
        <meta name="twitter:title content={`${topic} - Zion Blog`} />
        <meta name=twitter:description" content={`Articles about ${topic}`} />
        <meta name="twitter:image content=/images/og/topic-default.jpg" />
      </Head>
<<<<<<< HEAD
      <div className="mx-auto max-w-6xl>
        <h1 className=text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6>
=======

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>
        <div className="mb-6">
>>>>>>> origin/chore/fix-lint-and-merge

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

}

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String(ctx && ctx.params?.topic || ');
=======
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {;'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
export const getServerSideProps: GetServerSideProps = async ctx => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const topic = String(ctx && ctx.params?.topic || '');
>>>>>>> origin/chore/fix-lint-and-merge
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
<<<<<<< HEAD
  return { props: { topic, posts } }
}

<<<<<<< HEAD
export default TopicPage;      </Head>;
      <div className=mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3>{topic}</h1>;
        <div className=mb-6">;






      <div className="mx-auto max-w-6xl>;
        <h1 className=text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6>;
    <div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name=description" content={`Articles about ${topic}`} />;
        <meta property="og:title content={`${topic} - Zion Blog`} />;
        <meta property=og:description" content={`Articles about ${topic}`} />;
        <meta property="og:image content=/images/og/topic-default.jpg" />;
        <meta property="og:type content=website" />;
        <meta name="twitter:card content=summary_large_image" />;
        <meta name="twitter:title content={`${topic} - Zion Blog`} />;
        <meta name=twitter:description" content={`Articles about ${topic}`} />;
        <meta name="twitter:image content=/images/og/topic-default.jpg" />;
      </Head>;
      <div className="mx-auto max-w-6xl>;
        <h1 className=text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6>;
}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx && ctx.params?.topic || ')const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic))return { props: { topic, posts } }}export default TopicPage;      </Head>;
      <div className=mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3>{topic}</h1>;
        <div className=mb-6">;<PageShareButtons;
=======
  return { props: { topic, posts } };
};
export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl">;
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <PageShareButtons
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx.params?.topic |')}export const getServerSideProps: GetServerSideProps = async (ctx) => {export const getServerSideProps: GetServerSideProps = async (ctx) => {onShare={(network) => fetch('/api/analytics/share, { method: POST', headers: { 'Content-Type: application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source= + network + &utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6>;
          {posts && posts.map((p) => (<BlogCard key={p && p.id} post={p} />;
          ))}</div>;
        <div className=mt-6"><Link href="/blog className=underline">Back to Blog</Link></div>;
      </div>;
    </div>;
  )}export const getServerSideProps: GetServerSideProps = async (ctx) => {const topic = String(ctx && ctx.params?.topic || ')const posts  = listPublishedPosts().filter((p) => p && p.topics.includes(topic))}const topic  = String(ctx.params?.topic || ')const posts = listPublishedPosts().filter((p) => p.topics.includes(topic))return { props: { topic, posts } }
}
export default TopicPage;return { props: { topic, posts } }
}
export default TopicPage;
    </div>)}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String (ctx.params?.topic || ')const posts = listPublishedPosts ().filter (p => p.topics.includes (topic))return { props: { topic, posts } }
}export default TopicPage;      </Head>;






          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}
            description={`Articles about ${topic}`}
            onShare={(network) => fetch('/api/analytics/share, { method: POST', headers: { 'Content-Type: application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source= + network + &utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6>;
=======
export default TopicPage;      </Head>;"
      <div className="mx-auto max-w-6xl">;"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;"
        <div className="mb-6">;

            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}
          />;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
>>>>>>> origin/chore/fix-lint-and-merge
          {posts && posts.map((p) => (;
            <BlogCard key={p && p.id} post={p} />;
          ))}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic |');
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
export const getServerSideProps: GetServerSideProps = async (ctx) => {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
        <div className=mt-6"><Link href="/blog className=underline">Back to Blog</Link></div>;
=======
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;
>>>>>>> origin/chore/fix-lint-and-merge
      </div>;
    </div>;
  );

<<<<<<< HEAD

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));


}


  const topic = String(ctx.params?.topic || ');
=======
};
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async (ctx) => {;'
=======
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter((p) => p && p.topics.includes(topic));

};

'
  const topic = String(ctx.params?.topic || '');
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

<<<<<<< HEAD
=======


<<<<<<< HEAD
  return { props: { topic, posts } }
}
export default TopicPage;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>);
}
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {
  const topic = String (ctx.params?.topic || ');
  const posts = listPublishedPosts ().filter (p => p.topics.includes (topic));
  return { props: { topic, posts } }
}
export default TopicPage;      </Head>;
      <div className="mx - auto max - w-6xl>;
        <h1 className=text - 4xl font - bold mb - 3">{topic}</h1>;
        <div className="mb - 6>;
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined ? `https://zion.app / categories/${encodeURIComponent (topic)}` : window.location.href}
            description={`Articles about ${topic}`}
            on_share={(network) => fetch (/api / analytics / share', { method: 'POST, headers: { Content - Type': 'application / json }, body: JSON.stringify ({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: utm_source=' + network + '&utm_medium = share & utm_campaign = category }) }).catch (() => {})}
          />;
        </div>;
        <div className=grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          {posts.map ((p) => (
            <BlogCard key={p.id} post={p} />))}
        </div>;
        <div className="mt - 6><Link href=/blog" className="underline>Back to Blog</Link></div>;
      </div>;
    </div>);
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
  const posts = listPublishedPosts ().filter ((p) => p.topics.includes (topic));
  return { props: { topic, posts } }
}
export default TopicPage;
<<<<<<< HEAD

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
<<<<<<< HEAD
          <PageShareButtons
            title={_`${topic} - Zion Blog`}
            url={_typeof window === 'undefined ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={_`Articles about ${topic}`}
            onShare={_(_network) => fetch(/api/analytics/share', _{ method: 'POST, _headers: { Content-Type': 'application/json}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: utm_source=' + network + '&utm_medium=share&utm_campaign=category }) }).catch__(() => {})}
          />;
        </div>;
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>;
import type { GetServerSideProps, NextPage } from next',type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] }type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] }
type Props = any;const TopicPage: NextPage<Props> = ({ topic, posts }) => {return (<div>;
      <Head>;
        <title>{topic} - Zion Blog</title>;
        <meta name='description content={`Articles about ${topic}`} />;
<meta name=description' content={`Articles about ${topic}`} />;
        <meta property='og:title content={`${topic} - Zion Blog`} />;
        <meta property=og:description' content={`Articles about ${topic}`} />;
        <meta property='og:image content=/images/og/topic-default.jpg' />;
        <meta property='og:type content=website' />;
        <meta name='twitter:card content=summary_large_image' />;
        <meta name='twitter:title content={`${topic} - Zion Blog`} />;
        <meta name=twitter:description' content={`Articles about ${topic}`} />;
        <meta name='twitter:image content=/images/og/topic-default.jpg' />;
      </Head>;
      <div className='mx-auto max-w-6xl>;
        <h1 className=text-4xl font-bold mb-3'>{topic}</h1>;
        <div className='mb-6>;
          <PageShareButtons;
          />
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
import type { GetServerSideProps, NextPage } from next',
import { BlogPost  } from '@/utils/types/blog;
import { listPublishedPosts } from @/utils/data/blogStore';
=======
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
>>>>>>> origin/chore/fix-lint-and-merge

type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] }

<<<<<<< HEAD
type Props = any;

=======
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
>>>>>>> origin/chore/fix-lint-and-merge
  return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
<<<<<<< HEAD
        <meta name='description content={`Articles about ${topic}`} />
        <meta property=og:title' content={`${topic} - Zion Blog`} />
        <meta property='og:description content={`Articles about ${topic}`} />
        <meta property=og:image' content='/images/og/topic-default.jpg />
        <meta property=og:type' content='website />
        <meta name=twitter:card' content='summary_large_image />
        <meta name=twitter:title' content={`${topic} - Zion Blog`} />
        <meta name='twitter:description content={`Articles about ${topic}`} />
        <meta name=twitter:image' content='/images/og/topic-default.jpg />
      </Head>
      <div className=mx-auto max-w-6xl'>
        <h1 className='text-4xl font-bold mb-3>{topic}</h1>
        <div className=mb-6'>
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined;
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`;
=======
        <meta name='description' content={`Articles about ${topic}`} />
        <meta property='og:title' content={`${topic} - Zion Blog`} />
        <meta property='og:description' content={`Articles about ${topic}`} />
        <meta property='og:image' content='/images/og/topic-default.jpg' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />
        <meta name='twitter:description' content={`Articles about ${topic}`} />

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
>>>>>>> origin/chore/fix-lint-and-merge
                : window.location.href;
            }`
            description={`Articles about ${topic}`}
<<<<<<< HEAD
            onShare={network =>;
              fetch(/api/analytics/share', {method: 'POST;
                headers: { Content-Type': 'application/json }
                body: JSON.stringify({url: window.location.href;
                  title: `${topic} - Zion Blog`;
                  network;
                  utm:;
                    utm_source=' +;
                    network +;
                    '&utm_medium=share&utm_campaign=category;
                })}).catch(() => {})}
          />;
        </div>;
        <div className=grid grid-cols-1 md:grid-cols-3 gap-6'>;
          {posts.map(p => (<BlogCard key={p.id} post={p} />;
          ))}
        </div>;
        <div className='mt-6>;
          <Link href=/blog' className='underline>;
            Back to Blog;
          </Link>;
        </div>;
      </div>;
    </div>;
  )}
export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx.params?.topic |')}export const getServerSideProps: GetServerSideProps = async ctx => {const topic = String(ctx.params?.topic || ')const posts = listPublishedPosts().filter(p => p.topics.includes(topic))const posts = listPublishedPosts().filter(p => p.topics.includes(topic))return { props: { topic, posts } }
}
export const getServerSideProps: GetServerSideProps = async ctx => {
}

export const getServerSideProps: GetServerSideProps = async ctx => {


  return { props: { topic, posts } }
}
export default TopicPage;      </Head>
      <div className=mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3>{topic}</h1>
        <div className=mb-6">
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  return { props: { topic, posts } }
}

export default TopicPage;      </Head>;
      <div className="mx-auto max-w-6xl>;
        <h1 className=text-4xl font-bold mb-3">{topic}</h1>;
        <div className="mb-6">;
          <PageShareButtons
            title={`${topic} - Zion Blog`}
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={`Articles about ${topic}`}
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source = $2;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String($2);
  const posts = $2;
  return { props: { topic, posts } }
},



  return { props: { topic, posts } };
};

export default TopicPage;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
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

  const posts = listPublishedPosts().filter(p => p.topics.includes(topic));

export const getServerSideProps: GetServerSideProps = async ctx => {;'
  const topic = String(ctx && ctx.params?.topic || '');
  const posts = listPublishedPosts().filter(p => p && p.topics.includes(topic));
  return { props: { topic, posts } };
};
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
<<<<<<< HEAD


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
  const topic = String(ctx.params?.topic |'');
};

export const getServerSideProps: GetServerSideProps = async ctx => {;
  const topic = String(ctx.params?.topic || '');
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
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic));
  return { props: { topic, posts } }
}
export default TopicPage;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
