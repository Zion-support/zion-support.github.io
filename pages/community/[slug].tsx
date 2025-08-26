import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  return (
    <>
      <Head>
        <title>{`${category} Community – Zion Tech Group`}</title>
        <meta name="description" content={`Join the ${category} community discussions`} />
      </Head>
      <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{category} Community</h1>
            <p className="text-xl text-gray-600">Join discussions and connect with other professionals in this field.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Community Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're building an amazing community platform for {category} professionals. 
                Stay tuned for discussions, networking, and knowledge sharing.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Get in Touch</h3>
              <p className="text-blue-700 mb-4">
                Have questions about {category}? Want to discuss potential collaborations?
              </p>
              <div className="space-y-2 text-sm text-blue-600 mb-4">
                <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ params }: { params?: { slug?: string } }) => {
  const category = params?.slug as string || 'General';
  
  return {
    props: {
      category: category.charAt(0).toUpperCase() + category.slice(1)
    }
  };
};

export default CategoryPage;
