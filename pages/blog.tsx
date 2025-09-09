import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainLayout = dynamic(() => import('../components/layout/MainLayout'), { ssr: false });
const Link = dynamic(() => import('next/link'), { ssr: false });

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are transforming businesses and how you can leverage them for growth.',
      date: '2024-01-15',
      author: 'Zion Tech Team',
      category: 'AI & Technology',
      slug: 'ai-business-trends-2024'
    },
    {
      id: 2,
      title: 'Blockchain Revolution: How Decentralized Technology is Changing Industries',
      excerpt: 'Discover how blockchain technology is revolutionizing various industries and creating new opportunities.',
      date: '2024-01-10',
      author: 'Zion Tech Team',
      category: 'Blockchain',
      slug: 'blockchain-revolution-industries'
    },
    {
      id: 3,
      title: 'Cloud-Native Development: Building Scalable Applications for the Modern Era',
      excerpt: 'Learn the best practices for developing cloud-native applications that can scale with your business.',
      date: '2024-01-05',
      author: 'Zion Tech Team',
      category: 'Cloud Computing',
      slug: 'cloud-native-development'
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team." 
        />
      </Head>
      
      <MainLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and innovations in technology from our expert team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Blog;