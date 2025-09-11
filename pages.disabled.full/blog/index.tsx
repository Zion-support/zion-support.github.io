import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
const Blog: NextPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise Applications',
      excerpt:
        'Discover how artificial intelligence is transforming enterprise software and what businesses need to know to stay competitive.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-enterprise.jpg',
      slug: 'ai-enterprise-applications',
    },
    {
      title: 'Cloud Migration Strategies for 2024',
      excerpt:
        'A comprehensive guide to migrating your infrastructure to the cloud with best practices and common pitfalls to avoid.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg',
      slug: 'cloud-migration-strategies-2024',
    },
    {
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt:
        'Learn about the latest web development frameworks and how to build applications that scale with your business growth.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/blog/web-frameworks.jpg',
      slug: 'scalable-web-applications',
    },
    {
      title: 'Cybersecurity Trends for 2024 and Beyond',
      excerpt:
        'Stay ahead of emerging cybersecurity threats with insights into the latest trends and protection strategies.',
      author: 'Emily Rodriguez',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-trends.jpg',
      slug: 'cybersecurity-trends-2024',
    },
    {
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt:
        'Explore how edge computing is revolutionizing IoT deployments and enabling real-time data processing.',
      author: 'Alex Thompson',
      date: '2023-12-20',
      readTime: '4 min read',
      category: 'IoT & Edge Computing',
      image: '/blog/edge-computing.jpg',
      slug: 'edge-computing-iot',
    },
    {
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt:
        'Understanding how blockchain is being integrated into business processes beyond cryptocurrency.',
      author: 'Lisa Wang',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Blockchain',
      image: '/blog/blockchain-business.jpg',
      slug: 'blockchain-business-solutions',
    },
  ];
  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    'Web Development',
    'Mobile Development',
    'Cybersecurity',
    'IoT & Edge Computing',
    'Blockchain',
    'Data Analytics',
  ];
  const featuredPost = blogPosts[0];
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <MainLayout
      title='Blog - Zion Tech Group'
      description='Insights,trends,and expert perspectives on technology,AI,cloud computing,and digital transformation from Zion Tech Group.'
    >
      {' '}
      {}{' '}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20'>
        {' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {' '}
          <div className='text-center'>
            {' '}
            <h1 className='text-5xl font-bold mb-6'>Our Blog</h1>{' '}
            <p className='text-xl max-w-3xl mx-auto'>
              {' '}
              Insights,trends,and expert perspectives on technology,AI,cloud
              computing,and digital transformation to help you stay ahead of the
              curve.{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
      {}{' '}
      <section className='py-12 bg-gray-50'>
        {' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {' '}
          <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
            {' '}
            <div className='relative flex-1 max-w-md'>
              {' '}
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />{' '}
              <input
                type='text'
                placeholder='Search articles...'
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />{' '}
            </div>{' '}
            <div className='flex flex-wrap gap-2'>
              {' '}
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === 'All Posts' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'}`}
                >
                  {' '}
                  {category}{' '}
                </button>
              ))}{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
      {}{' '}
      <section className='py-20'>
        {' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {' '}
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Featured Article
          </h2>{' '}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            {' '}
            <div className='md:flex'>
              {' '}
              <div className='md:w-1/2'>
                {' '}
                <div className='h-64 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center'>
                  {' '}
                  <div className='text-6xl'>📱</div>{' '}
                </div>{' '}
              </div>{' '}
              <div className='md:w-1/2 p-8'>
                {' '}
                <div className='flex items-center text-sm text-gray-500 mb-4'>
                  {' '}
                  <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium'>
                    {' '}
                    {featuredPost.category}{' '}
                  </span>{' '}
                </div>{' '}
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {' '}
                  {featuredPost.title}{' '}
                </h3>{' '}
                <p className='text-gray-600 mb-6'> {featuredPost.excerpt} </p>{' '}
                <div className='flex items-center text-sm text-gray-500 mb-6'>
                  {' '}
                  <User className='h-4 w-4 mr-1' />{' '}
                  <span className='mr-4'>{featuredPost.author}</span>{' '}
                  <Calendar className='h-4 w-4 mr-1' />{' '}
                  <span className='mr-4'>{formatDate(featuredPost.date)}</span>{' '}
                  <Clock className='h-4 w-4 mr-1' />{' '}
                  <span>{featuredPost.readTime}</span>{' '}
                </div>{' '}
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                >
                  {' '}
                  Read Full Article <ArrowRight className='ml-1 h-4 w-4' />{' '}
                </Link>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
      {}{' '}
      <section className='py-20 bg-gray-50'>
        {' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {' '}
          <h2 className='text-3xl font-bold text-gray-900 mb-12'>
            Latest Articles
          </h2>{' '}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {' '}
            {blogPosts.slice(1).map(post => (
              <article
                key={post.slug}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                {' '}
                <div className='h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                  {' '}
                  <div className='text-4xl'>📄</div>{' '}
                </div>{' '}
                <div className='p-6'>
                  {' '}
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    {' '}
                    <span className='bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium'>
                      {' '}
                      {post.category}{' '}
                    </span>{' '}
                  </div>{' '}
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 line-clamp-2'>
                    {' '}
                    {post.title}{' '}
                  </h3>{' '}
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {' '}
                    {post.excerpt}{' '}
                  </p>{' '}
                  <div className='flex items-center text-sm text-gray-500 mb-4'>
                    {' '}
                    <User className='h-4 w-4 mr-1' />{' '}
                    <span className='mr-3'>{post.author}</span>{' '}
                    <Calendar className='h-4 w-4 mr-1' />{' '}
                    <span className='mr-3'>{formatDate(post.date)}</span>{' '}
                    <Clock className='h-4 w-4 mr-1' />{' '}
                    <span>{post.readTime}</span>{' '}
                  </div>{' '}
                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                  >
                    {' '}
                    Read More <ArrowRight className='ml-1 h-4 w-4' />{' '}
                  </Link>{' '}
                </div>{' '}
              </article>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
      {}{' '}
      <section className='py-20 bg-blue-600 text-white'>
        {' '}
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          {' '}
          <h2 className='text-3xl font-bold mb-4'>
            {' '}
            Stay Updated with Our Latest Insights{' '}
          </h2>{' '}
          <p className='text-xl mb-8'>
            {' '}
            Subscribe to our newsletter to receive the latest technology
            trends,industry insights,and expert tips delivered to your
            inbox.{' '}
          </p>{' '}
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            {' '}
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none'
            />{' '}
            <button className='bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors'>
              {' '}
              Subscribe{' '}
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
      {}{' '}
      <section className='py-20'>
        {' '}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {' '}
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Popular Topics
          </h2>{' '}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {' '}
            {[
              {
                name: 'Artificial Intelligence',
                count: '15 articles',
                icon: '🤖',
              },
              { name: 'Cloud Computing', count: '12 articles', icon: '☁️' },
              { name: 'Web Development', count: '18 articles', icon: '🌐' },
              { name: 'Cybersecurity', count: '10 articles', icon: '🔒' },
              { name: 'Mobile Development', count: '8 articles', icon: '📱' },
              { name: 'Blockchain', count: '6 articles', icon: '⛓️' },
              { name: 'IoT & Edge Computing', count: '9 articles', icon: '💻' },
              { name: 'Data Analytics', count: '11 articles', icon: '📊' },
            ].map(topic => (
              <Link
                key={topic.name}
                href={`/blog/category/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow'
              >
                {' '}
                <div className='text-3xl mb-3'>{topic.icon}</div>{' '}
                <h3 className='font-semibold text-gray-900 mb-1'>
                  {topic.name}
                </h3>{' '}
                <p className='text-sm text-gray-600'>{topic.count}</p>{' '}
              </Link>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
    </MainLayout>
  );
};
export default Blog;
