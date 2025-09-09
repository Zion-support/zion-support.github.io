import React from "react";
import Head from 'next/head'
import Link from 'next/link'
export default function Custom404() {},
  {
  return (')
    <div className="min-h-screen bg-gray-50">
</div>
      <Head>
</Head>
        <title>404 - Page Not Found | Zion Tech Group
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />"
</meta>
      </Head>
"
      <div className="min-h-screen bg-gray-50">
</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }},
  {
          animate={{ opacity: 1, y: 0 }},
  {
          transition={{ duration: 0.6 }},
  {
        >

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              className="text-9xl font-bold text-blue-600 mb-4"
              animate={{ },
  {
                scale: ["1", "1.1", "1"],
                rotate: ["0", "5", "-5", "0"]
  }},
  {
              transition={{ },
  {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }},
  {
            >
</motion>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">"
</h1>
            
            <p className="text-xl text-gray-600 mb-8">"
</p>
            </p>
          
          <div className="min-h-screen bg-gray-50">
</div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >

              <Home className="w-5 h-5" />"
</Home>
            </Link>
            <button);
              onClick={() => window.history.back()},
  {

              <ArrowLeft className="w-5 h-5" />"
</ArrowLeft>
            </button>
          
          <div className="min-h-screen bg-gray-50">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">"
</h2>
            
            <div className="min-h-screen bg-gray-50">
</div>
              <Link
                href="/services"
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >

                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <Search className="w-6 h-6 text-blue-600" />"
</Search>
                  
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>

              <Link
                href="/about"
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >

                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <HelpCircle className="w-6 h-6 text-blue-600" />"
</HelpCircle>
                  
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >

                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <HelpCircle className="w-6 h-6 text-blue-600" />"
</HelpCircle>
                  
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>
            </div>
          
          <div className="min-h-screen bg-gray-50">

            <p className="text-gray-600">"

              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">"
</Link>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );