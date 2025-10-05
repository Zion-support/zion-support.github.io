import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {title: 'Index | Zion Tech Group',
  description: 'Discover the latest AI breakthroughs and enterprise automation solutions from Zion Tech Group.',
  keywords: 'AI, automation, enterprise, breakthrough, technology',
  openGraph: {
    title: 'Index',
    description: 'Discover the latest AI breakthroughs and enterprise automation solutions.',
    type: 'article'}
  },
};
export default function index() {return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Index</h1>
            <p className='text-xl text-gray-600 mb-6'>
              Revolutionary AI Breakthrough
            </p>
            <div className='flex justify-center space-x-4'>
              <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                BREAKTHROUGH
              </span>
              <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                AI
              </span>
              <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium'>
                ENTERPRISE
              </span>
            </div>
          </div>
          <div className='prose max-w-none'>
            <p className='text-lg text-gray-700 mb-6'>
              This page is currently under development. Please check back soon
              for the complete content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )}
}
import React from 'react'' import { Metadata } from 'next' export const metadata: Metadata = {' title: 'Index | Zion Tech Group',' description: 'Discover the latest AI breakthroughs and enterprise automation solutions from Zion Tech Group.',' keywords: 'AI, automation, enterprise, breakthrough, technology', openGraph: {' title: 'Index',' description: 'Discover the latest AI breakthroughs and enterprise automation solutions.',' type: 'article'} }, }; export default function index() {return ( <div className="min-h-screen bg-gray-50" > <div className="max-w-4xl mx-auto px-4 py-8" > <div className="bg-white rounded-lg shadow-lg p-8" > <div className="text-center mb-8" > <h1 className="text-4xl font-bold text-gray-900 mb-4" >Index</h1> <p className="text-xl text-gray-600 mb-6" >Revolutionary AI Breakthrough</p> <div className="flex justify-center space-x-4" > <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" >BREAKTHROUGH</span> <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium" >AI</span> <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium" >ENTERPRISE</span> </div> </div> <div className="prose max-w-none" > <p className="text-lg text-gray-700 mb-6" > This page is currently under development. Please check back soon for the complete content. </p> </div> </div> </div> </div> )} }'