import React from 'react';''
import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';'
export default function Custom404() {
  return ('
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">"
</div>
      <Head>
</Head>
        <title>404 - Page Not Found | Zion Tech Group</title>"
        <meta name="description" content="The page you&apos;re looking for doesn&apos;t exist. Return to our homepage or explore our services." />"
</meta>
      </Head>
"
      <div className="max-w-4xl mx-auto px-4 text-center">"
</div>
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
</motion>"
          <div className="mb-8">"
</div>
            <motion.div;"
              className="text-9xl font-bold text-blue-600 mb-4""
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,"
                repeatType: "reverse""
              }}
            >
</motion>
            </motion.div>"
            <h1 className="text-4xl font-bold text-gray-900 mb-4">"
</h1>
            </h1>"
            <p className="text-xl text-gray-600 mb-8">"
</p>
            </p>
          </div>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">"
</div>
            <Link;"
              href="/"""
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors""
            >
</Link>"
              <Home className="w-5 h-5" />"
</Home>
            </Link>
            <button;)
              onClick={() => window.history.back()}
</button>"
              <ArrowLeft className="w-5 h-5" />"
</ArrowLeft>
            </button>
          </div>"
          <div className="bg-white rounded-lg shadow-lg p-8">"
</div>"
            <h2 className="text-2xl font-bold text-gray-900 mb-6">"
</h2>
            </h2>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>
              <Link;"
                href="/services"""
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group""
              >
</Link>"
                <div className="text-center">"
</div>"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">"
</div>"
                    <Search className="w-6 h-6 text-blue-600" />"
</Search>
                  </div>"
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  </h3>"
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>

              <Link;"
                href="/about"""
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group""
              >
</Link>"
                <div className="text-center">"
</div>"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">"
</div>"
                    <HelpCircle className="w-6 h-6 text-blue-600" />"
</HelpCircle>
                  </div>"
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  </h3>"
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>

              <Link;"
                href="/contact"""
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group""
              >
</Link>"
                <div className="text-center">"
</div>"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">"
</div>"
                    <HelpCircle className="w-6 h-6 text-blue-600" />"
</HelpCircle>
                  </div>"
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  </h3>"
                  <p className="text-sm text-gray-600">"
</p>
                  </p>
                </div>
              </Link>
            </div>
          </div>"
          <div className="mt-8 text-center">"
</div>"
            <p className="text-gray-600">"
</p>"
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">"
</Link>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>"