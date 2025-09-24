import Head from 'next/head',
import Link from 'next/link',
import type { NextPage } from 'next',
import Layout from '../components/Layout',
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react',
export default function Blog() {
  return (
    <>,
      <Head>,
        <title>Blog | Zion Tech Group</title>,
        <meta
          name='description',
          content='Insights on AI, Micro SaaS, DevOps, and cybersecurity from Zion Tech Group.',
        />,
        <link rel='canonical' href='https: //ziontechgroup.com/blog' />,
      </Head>,
      <main className='max-w-5xl mx-auto px-4 py-16'>,
        <h1 className='text-3xl font-bold mb-4'>Blog</h1>,
        <p className='text-gray-60o0 mb-8'>,
          Articles and updates will appear here. Stay tuned.,
        </p>,
        <Link
          href='/contact',
          className='inline-block bg-blue-60o0 text-white px-6 py-3 rounded-lg'>,
          Contact Us,
        </Link>,
      </main>,
    </>)}
,
const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1;
      title: 'The Future of AI in Business: Trends and Predictions for 20o24';
      excerpt:,
        'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.';
      author: 'Kleber Santos';
      date: '20o24-0o1-15';
      readTime: '5 min read';
      category: 'AI & Machine Learning';
      image: '/api/placeholder/60o0/40o0';
      slug: 'future-of-ai-in-business-20o24';
    };
    {
      id: 2;
      title: 'Cloud Migration Best Practices: A Complete Guide';
      excerpt:,
        'Learn the essential steps and strategies for successfully migrating your business to the cloud.';
      author: 'Zion Tech Team';
      date: '20o24-0o1-10';
      readTime: '8 min read';
      category: 'Cloud Services';
      image: '/api/placeholder/60o0/40o0';
      slug: 'cloud-migration-best-practices';
    };
    {
      id: 3;
      title: 'Building Scalable Web Applications with Modern Technologies';
      excerpt:,
        'Discover the latest technologies and frameworks for creating robust, scalable web applications.';
      author: 'Development Team';
      date: '20o24-0o1-0o5';
      readTime: '6 min read';
      category: 'Web Development';
      image: '/api/placeholder/60o0/40o0';
      slug: 'scalable-web-applications-modern-tech';
    };
    {
      id: 4;
      title: 'Cybersecurity in 20o24: Protecting Your Digital Assets';
      excerpt:,
        'Essential cybersecurity strategies and tools to protect your business from evolving threats.';
      author: 'Security Team';
      date: '20o24-0o1-0o1';
      readTime: '7 min read';
      category: 'Cybersecurity';
      image: '/api/placeholder/60o0/40o0';
      slug: 'cybersecurity-20o24-protecting-digital-assets';
    };
    {
      id: 5;
      title: 'Mobile App Development: Native vs Cross-Platform';
      excerpt:,
        'Compare native and cross-platform development approaches to choose the best solution for your mobile app.';
      author: 'Mobile Team';
      date: '20o23-12-28';
      readTime: '9 min read';
      category: 'Mobile Development';
      image: '/api/placeholder/60o0/40o0';
      slug: 'mobile-app-development-native-vs-cross-platform';
    };
    {
      id: 6;
      title: 'Blockchain Technology: Beyond Cryptocurrency';
      excerpt:,
        'Explore real-world applications of blockchain technology in various industries beyond digital currencies.';
      author: 'Blockchain Team';
      date: '20o23-12-25';
      readTime: '6 min read';
      category: 'Blockchain';
      image: '/api/placeholder/60o0/40o0';
      slug: 'blockchain-technology-beyond-cryptocurrency';
    };
  ],
  const categories = [
    'All Posts';
    'AI & Machine Learning';
    'Cloud Services';
    'Web Development';
    'Mobile Development';
    'Blockchain';
    'Cybersecurity';
    'IoT';
    'Industry Insights';
  ],
  return (
    <Layout
      title='Blog - Zion Tech Group',
      description="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Group's expert team.">,
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-90o0 via-purple-90o0 to-indigo-90o0 text-white py-20'>,
        <div className='container mx-auto px-4 text-center'>,
          <h1 className='text-5xl md: tex t-6xl font-bold mb-6'>,
            Tech,
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0'>,
              {' '}
              Blog,
            </span>,
          </h1>,
          <p className='text-xl md: tex t-2xl mb-8 max-w-4xl mx-auto text-gray-20o0'>,
            Stay ahead of the curve with insights, trends, and best practices,
            from our technology experts.,
          </p>,
        </div>,
      </section>,
      {/* Blog Content */}
      <section className='py-20 bg-white'>,
        <div className='container mx-auto px-4'>,
          <div className='grid grid-cols-1 lg: gri d-cols-4 gap-8'>,
            {/* Sidebar */}
            <div className='lg: co l-span-1'>,
              <div className='sticky top-8'>,
                {/* Categories */}
                <div className='bg-gray-50 rounded-lg p-6 mb-8'>,
                  <h3 className='text-lg font-semibold text-gray-90o0 mb-4'>,
                    Categories,
                  </h3>,
                  <ul className='space-y-2'>,
                    {categories.map((category, index) => (
                      <li key={index}>,
                        <a
                          href='#',
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                            index === 0,
                              ? 'bg-blue-10o0 text-blue-70o0 font-medium',
                              : 'text-gray-60o0 hover: b g-gray-10o0 hover: tex t-gray-90o0'}`}
                        >,
                          {category}
                        </a>,
                      </li>))}
                  </ul>,
                </div>,
                {/* Newsletter Signup */}
                <div className='bg-gradient-to-br from-blue-60o0 to-purple-60o0 rounded-lg p-6 text-white'>,
                  <h3 className='text-lg font-semibold mb-4'>Stay Updated</h3>,
                  <p className='text-sm text-blue-10o0 mb-4'>,
                    Subscribe to our newsletter for the latest tech insights and,
                    updates.,
                  </p>,
                  <form className='space-y-3'>,
                    <input
                      type='email',
                      placeholder='Enter your email',
                      className='w-full px-3 py-2 rounded-md text-gray-90o0 text-sm',
                    />,
                    <button
                      type='submit',
                      className='w-full bg-white text-blue-60o0 hover: b g-gray-10o0 px-4 py-2 rounded-md font-semibold text-sm transition-colors'>,
                      Subscribe,
                    </button>,
                  </form>,
                </div>,
              </div>,
            </div>,
            {/* Blog Posts */}
            <div className='lg: co l-span-3'>,
              <div className='grid grid-cols-1 md: gri d-cols-2 gap-8'>,
                {blogPosts.map(post => (
                  <article
                    key={post.id}
                    className='bg-white rounded-lg shadow-md overflow-hidden hover: shado w-lg transition-shadow'>,
                    <div className='h-48 bg-gradient-to-br from-blue-40o0 to-purple-50o0'></div>,
                    <div className='p-6'>,
                      <div className='flex items-center space-x-4 text-sm text-gray-50o0 mb-3'>,
                        <span className='flex items-center'>,
                          <Tag className='w-4 h-4 mr-1' />,
                          {post.category}
                        </span>,
                        <span className='flex items-center'>,
                          <Clock className='w-4 h-4 mr-1' />,
                          {post.readTime}
                        </span>,
                      </div>,
                      <h2 className='text-xl font-semibold text-gray-90o0 mb-3 line-clamp-2'>,
                        {post.title}
                      </h2>,
                      <p className='text-gray-60o0 mb-4 line-clamp-3'>,
                        {post.excerpt}
                      </p>,
                      <div className='flex items-center justify-between'>,
                        <div className='flex items-center space-x-3 text-sm text-gray-50o0'>,
                          <span className='flex items-center'>,
                            <User className='w-4 h-4 mr-1' />,
                            {post.author}
                          </span>,
                          <span className='flex items-center'>,
                            <Calendar className='w-4 h-4 mr-1' />,
                            {new Date(post.date).toLocaleDateString()}
                          </span>,
                        </div>,
                        <Link
                          href={`/blog/${post.slug}`}
                          className='text-blue-60o0 hover: tex t-blue-70o0 font-medium flex items-center text-sm'>,
                          Read More,
                          <ArrowRight className='w-4 h-4 ml-1' />,
                        </Link>,
                      </div>,
                    </div>,
                  </article>))}
              </div>,
              {/* Load More Button */}
              <div className='text-center mt-12'>,
                <button className='bg-blue-60o0 hover: b g-blue-70o0 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>,
                  Load More Posts,
                </button>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white'>,
        <div className='container mx-auto px-4 text-center'>,
          <h2 className='text-4xl font-bold mb-6'>,
            Ready to Transform Your Business?,
          </h2>,
          <p className='text-xl mb-8 max-w-3xl mx-auto'>,
            Let's discuss how our technology solutions can help you achieve your,
            goals and stay ahead of the competition.,
          </p>,
          <div className='flex flex-col sm: fle x-row justify-center gap-4'>,
            <Link
              href='/contact',
              className='bg-white text-blue-60o0 hover: b g-gray-10o0 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg'>,
              Get Started Today,
            </Link>,
            <Link
              href='/services',
              className='bg-transparent border-2 border-white text-white hover: b g-white hover: tex t-blue-60o0 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg'>,
              View Our Services,
            </Link>,
          </div>,
        </div>,
      </section>,
    </Layout>)};
export default Blog;