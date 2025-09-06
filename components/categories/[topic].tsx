import type { GetServerSideProps, NextPage } from 'next',
import Head from 'next/head'
import Link from 'next/link'
import { BlogPost } from '@/utils/types/blog'
import PageShareButtons from '@/components/blog/PageShareButtons'
import { listPublishedPosts } from '@/utils/data/blogStore'
import BlogCard from '@/components/blog/BlogCard'
type Props = { topic: string, posts: BlogPost[] },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

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
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className=&quot;mt-6&quot;><Link href=&quot;/blog&quot; className=&quot;underline&quot;>Back to Blog</a></div>
      </div>
    </div>
  )
},

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const topic = String(ctx.params?.topic || '')
  const posts = listPublishedPosts().filter((p) => p.topics.includes(topic))
  return { props: { topic, posts } }
},

export default TopicPage