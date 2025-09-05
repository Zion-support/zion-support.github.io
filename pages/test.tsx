import Head from 'next/head'
import Layout from '../components/Layout'

export default function Test() {
  return(<Layout>
      <Head>
        <title>Test Page - Zion Tech Group</title>
        <meta name="description" content="Test page for development purposes."  />
      </Head>
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                Test Page
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                This is a test page for development purposes.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Content</h2>
                <p className="text-gray-600 mb-4">
                  This page is used for testing purposes during development.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Test Information:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page loads successfully</li>
                    <li>• Layout component works</li>
                    <li>• Styling is applied correctly</li>
                    <li>• No console errors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>) }