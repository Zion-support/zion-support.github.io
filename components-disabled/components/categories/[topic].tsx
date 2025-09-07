

import type { GetServerSideProps, NextPage } from 'next';''
import Head from 'next/head';''
import Link from 'next/link';''
import { BlogPost  } from '@/utils/types/blog';''
import PageShareButtons from '@/components/blog/PageShareButtons';''
import { listPublishedPosts } from '@/utils/data/blogStore';''
import BlogCard from '@/components/blog/BlogCard';''
import Head from 'next / head';''
import Link from 'next / link';''
import {BlogPost} from '@/utils / types / blog';''
import PageShareButtons from '@/components / blog / PageShareButtons';''
import {listPublishedPosts} from '@/utils / data / blog_store';''
import BlogCard from '@/components / blog / BlogCard';'
;
type Props = { topic: string; posts: BlogPost[] }type Props = { topic: string, posts: BlogPost[] },
const TopicPage: NextPage < Props> = ({ topic, posts }) => {
  return (
)
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
</Props>
const TopicPage: NextPage<Props> = ({ topic, posts }) => {;
</Props>
    <div>;
</div>
      <Head>;
</Head>
        <title>{topic} - Zion Blog</title>;'
        <meta name='description' content={`Articles about ${topic}`} />;'
</meta>'
        <meta property='og:title' content={`${topic} - Zion Blog`} />;'
</meta>'
        <meta property='og:description' content={`Articles about ${topic}`} />;'
</meta>'
        <meta property='og:image' content='/images / og / topic - default.jpg' />;'
</meta>'
        <meta property='og:type' content='website' />;'
</meta>'
        <meta name='twitter:card' content='summary_large_image' />;'
</meta>'
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />;'
</meta>'
        <meta name='twitter:description' content={`Articles about ${topic}`} />;'
</meta>
        </div>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;'
</div>
            <BlogCard key={p && p.id} post={p} />;
</BlogCard>
        </div>;'
        <div className='mt-6'>;'
</div>'
        <meta name='twitter:image' content='/images / og / topic - default.jpg' />;'
</meta>
      </Head>;'
      <div className='mx - auto max - w-6xl'>;'
</div>'
        <h1 className='text - 4xl font - bold mb - 3'>{topic}</h1>;''
        <div className='mb - 6'>;'
</div>
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={'
              typeof window === 'undefined';'
                ? `https://zion.app / categories/${encodeURIComponent (topic)}`;
                : window.location.href;

            description={`Articles about ${topic}`}
            on_share={network =>;
</PageShareButtons>
        </div>;'
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;'
</div>
            <BlogCard key={p.id} post={p} />))}
</BlogCard>
        </div>;'
        <div className='mt - 6'>;'
</div>'
          <Link href='/blog' className='underline'>;'
</Link>
          </Link>;
        </div>;
      </div>;'
      <div className="mx-auto max-w-6xl">"
</div>"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>""
        <div className="mb-6">"
</div>
    <div>
</div>
      <Head>
</Head>
        <title>{topic} - Zion Blog</title>"
        <meta name="description" content={`Articles about ${topic}`} />"
</meta>"
        <meta property="og:title" content={`${topic} - Zion Blog`} />"
</meta>"
        <meta property="og:description" content={`Articles about ${topic}`} />"
</meta>"
        <meta property="og:image" content="/images/og/topic-default.jpg" />"
</meta>"
        <meta property="og:type" content="website" />"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />"
</meta>"
        <meta name="twitter:title" content={`${topic} - Zion Blog`} />"
</meta>"
        <meta name="twitter:description" content={`Articles about ${topic}`} />"
</meta>"
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />"
</meta>
      </Head>"
      <div className="mx-auto max-w-6xl">"
</div>"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>""
        <div className="mb-6">"
</div>
export default TopicPage;      </Head>;"
      <div className="mx-auto max-w-6xl">;"
</div>"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;""
        <div className="mb-6">;"
</div>
          <PageShareButtons;
            title={`${topic} - Zion Blog`}"
            url={typeof window === 'undefined' ? `https://zion && zion.app/categories/${encodeURIComponent(topic)}` : window && window.location.href}'
            description={`Articles about ${topic}`}'
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON && JSON.stringify({ url: window && window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch(() => {})}'
</PageShareButtons>
        </div>;'
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
</div>
            <BlogCard key={p && p.id} post={p} />;
</BlogCard>
        </div>;"
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>;"
      </div>;
    </div>;
    </div>);
export default TopicPage;      </Head>;"
      <div className="mx - auto max - w-6xl">;"
</div>"
        <h1 className="text - 4xl font - bold mb - 3">{topic}</h1>;""
        <div className="mb - 6">;"
</div>
          <PageShareButtons;
            title={`${topic} - Zion Blog`}"
            url={typeof window === 'undefined' ? `https://zion.app / categories/${encodeURIComponent (topic)}` : window.location.href}'
            description={`Articles about ${topic}`}'
            on_share={(network) => fetch ('/api / analytics / share', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ url: window.location.href, title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium = share & utm_campaign = category' }) }).catch (() => {})}'
</PageShareButtons>
        </div>;'
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;"
</div>
            <BlogCard key={p.id} post={p} />))}
</BlogCard>
        </div>;"
        <div className="mt - 6"><Link href="/blog" className="underline">Back to Blog</Link></div>;"
      </div>;
    </div>);
const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (
</Props>
    <div>
</div>
      <Head>
</Head>
        <title>{topic} - Zion Blog</title>
        <meta name=&quot;description&quot; content={`Articles about ${topic}`} />
</meta>
        <meta property=&quot;og:title&quot; content={`${topic} - Zion Blog`} />
</meta>
        <meta property=&quot;og:description&quot; content={`Articles about ${topic}`} />
</meta>
        <meta property=&quot;og:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
</meta>
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
</meta>
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
</meta>
        <meta name=&quot;twitter:title&quot; content={`${topic} - Zion Blog`} />
</meta>
        <meta name=&quot;twitter:description&quot; content={`Articles about ${topic}`} />
</meta>
        <meta name=&quot;twitter:image&quot; content=&quot;/images/og/topic-default.jpg&quot; />
</meta>
      </Head>
      <div className=&quot;mx-auto max-w-6xl&quot;>
</div>
        <h1 className=&quot;text-4xl font-bold mb-3&quot;>{topic}</h1>
        <div className=&quot;mb-6&quot;>
</div>
          <PageShareButtons;
            title={_`${topic} - Zion Blog`})"
            url={_typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}'
            description={_`Articles about ${topic}`}'
            onShare={_(_network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch__(() => {})}'
</PageShareButtons>
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
</div>
const TopicPage: NextPage<Props> = ({ topic, posts }) => {
</Props>
    <div>
</div>
      <Head>
</Head>
        <title>{topic} - Zion Blog</title>'
        <meta name='description' content={`Articles about ${topic}`} />'
</meta>'
        <meta property='og:title' content={`${topic} - Zion Blog`} />'
</meta>'
        <meta property='og:description' content={`Articles about ${topic}`} />'
</meta>'
        <meta property='og:image' content='/images/og/topic-default.jpg' />'
</meta>'
        <meta property='og:type' content='website' />'
</meta>'
        <meta name='twitter:card' content='summary_large_image' />'
</meta>'
        <meta name='twitter:title' content={`${topic} - Zion Blog`} />'
</meta>'
        <meta name='twitter:description' content={`Articles about ${topic}`} />'
</meta>'
        <meta name='twitter:image' content='/images/og/topic-default.jpg' />'
</meta>
      </Head>'
      <div className='mx-auto max-w-6xl'>'
</div>'
        <h1 className='text-4xl font-bold mb-3'>{topic}</h1>''
        <div className='mb-6'>'
</div>
          <PageShareButtons;
            title={`${topic} - Zion Blog`}
            url={'
              typeof window === 'undefined''
                ? `https://zion.app/categories/${encodeURIComponent(topic)}`
                : window.location.href;
            description={`Articles about ${topic}`}
            onShare={network =>
</PageShareButtons>
        </div>'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>'
</div>
            <BlogCard key={p.id} post={p} />
</BlogCard>
        </div>'
        <div className='mt-6'>'
</div>'
          <Link href='/blog' className='underline'>'
</Link>
          </Link>
        </div>
      </div>
    </div>
export default TopicPage;      </Head>'
      <div className="mx-auto max-w-6xl">"
</div>"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>""
        <div className="mb-6">"
</div>
export default TopicPage;      </Head>;"
      <div className="mx-auto max-w-6xl">;"
</div>"
        <h1 className="text-4xl font-bold mb-3">{topic}</h1>;""
        <div className="mb-6">;"
</div>
          <PageShareButtons;
            title={`${topic} - Zion Blog`}"
            url={typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}'
            description={`Articles about ${topic}`}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
</PageShareButtons>'