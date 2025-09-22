import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts } from '@/utils/data/blogStore';

interface Props {
  posts: BlogPost[];
  topic: string;
}

const TopicPage: NextPage<Props> = ({ posts, topic }) => {
  return (
    <>
      <Head>
        <title>{topic} | Zion Tech Group</title>
        <meta name="description" content={`Latest posts about ${topic}`} />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{topic}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}>
                  <a className="hover:text-blue-600">{post.title}</a>
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
        <PageShareButtons />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const topic = params?.topic as string;
  const posts = await listPublishedPosts();
  const filteredPosts = posts.filter(post => 
    post.tags?.some(tag => tag.toLowerCase() === topic.toLowerCase())
  );

  return {
    props: {
      posts: filteredPosts,
      topic,
    },
  };
};

export default TopicPage;