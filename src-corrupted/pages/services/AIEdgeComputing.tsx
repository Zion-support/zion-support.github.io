import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIEdgeComputing = (props: any) => {
  return (
    <>
      <Head>
        <title>Edge Computing - AI Services</title>
        <meta name="description" content="Professional Edge Computing services powered by AI"    />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Edge Computing
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Edge Computing services powered by artificial intelligence
            </p>
            <div className="grid md: gri d-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover: b g-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}

export default AIEdgeComputing
</div>
</div>
</div>
</div>