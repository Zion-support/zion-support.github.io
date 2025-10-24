'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '/components/Footer'

export default function HelpPage() {
  return (<>
      <Head>
        <title>Help - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group" />
      </Head>
      <><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div></div>
        <div className="max-w-7xl mx-auto px-4 sm px-6 lgpx-8 py-16 text-center">
          </div>
          <h1Help</h1>
          <pProfessional help services coming soon</p>
          </p><Link href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover from-cyan-600 hoverto-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us  <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div></>
      </div>
      <Footer />
    </>
}