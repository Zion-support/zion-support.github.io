import Link from 'next/link';
export default function JobSuccessPage() {
  return (
    <Layout>
      <Head>
        <title>Success - Zion Tech Group</title>
        <meta name="description" content="Success solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Success</h1>
          <p className="text-lg text-gray-600">
            Professional success solutions tailored to your business needs.
          </p>
        </div>
      <h1 className="text-xl font-semibold mb-2">Job posted successfully</h1>
      <p className="text-sm opacity-80 mb-6">We are matching your job with top talent. You will be notified as applications come in.</p>
      <div className="flex gap-2 justify-center">
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go to Dashboard</a></Link>
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</a></Link>
      </div>
  )
}