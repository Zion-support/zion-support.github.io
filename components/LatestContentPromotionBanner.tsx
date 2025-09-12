import React from 'react';
import Link from 'next/link';

export default function LatestContentPromotionBanner() {
  return (
    <section className='py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden'>
      <div className='absolute inset-0 bg-black opacity-10'></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
            <span className='text-sm font-medium'>🚀 JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-6'>
            🎯 Latest AI Breakthroughs & Expert Insights
          </h2>
          <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Fresh this week: AI Workforce Transformation, Data Privacy Compliance, Green AI Sustainability, 
            and comprehensive implementation guides. Expert insights to accelerate your success in 2025.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href='/blog'
              className='bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg'
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href='/resources'
              className='border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg' 
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Link href='/blog/ai-2025-workforce-transformation' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>👥</div>
              <h3 className='text-lg font-semibold mb-2'>AI Workforce Transformation 2025</h3>
              <p className='text-sm opacity-90 mb-3'>Complete reskilling strategies for the AI era with 340% ROI</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>18 min read</span>
                <span className='mx-2'>•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href='/blog/ai-data-privacy-compliance-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔒</div>
              <h3 className='text-lg font-semibold mb-2'>AI Data Privacy & Compliance 2025</h3>
              <p className='text-sm opacity-90 mb-3'>Complete guide to AI privacy regulations and implementation</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>22 min read</span>
                <span className='mx-2'>•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href='/case-studies/ai-sustainability-transformation-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌱</div>
              <h3 className='text-lg font-semibold mb-2'>AI Sustainability Success Story</h3>
              <p className='text-sm opacity-90 mb-3'>60% energy reduction and carbon neutrality achieved</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>Case Study</span>
                <span className='mx-2'>•</span>
                <span>New</span>
              </div>
            </div>
          </Link>

          <Link href='/resources/ai-workforce-transformation-playbook-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
              <h3 className='text-lg font-semibold mb-2'>AI Workforce Playbook</h3>
              <p className='text-sm opacity-90 mb-3'>150+ pages of templates, checklists, and strategies</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>Free Download</span>
                <span className='mx-2'>•</span>
                <span>150+ pages</span>
              </div>
            </div>
          </Link>
          
          <Link href='/resources/green-ai-implementation-guide-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🌍</div>
              <h3 className='text-lg font-semibold mb-2'>Green AI Implementation Guide</h3>
              <p className='text-sm opacity-90 mb-3'>Build sustainable AI systems with 60% energy reduction</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>Free Download</span>
                <span className='mx-2'>•</span>
                <span>120+ pages</span>
              </div>
            </div>
          </Link>
          
          <Link href='/blog/ai-customer-support-automation-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🎧</div>
              <h3 className='text-lg font-semibold mb-2'>AI Support Automation 2025</h3>
              <p className='text-sm opacity-90 mb-3'>Resolve faster, cut costs, improve satisfaction</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>9 min read</span>
                <span className='mx-2'>•</span>
                <span>New</span>
              </div>
            </div>
          </Link>

          <Link href='/blog/llm-guardrails-in-production-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🛡️</div>
              <h3 className='text-lg font-semibold mb-2'>LLM Guardrails in Production</h3>
              <p className='text-sm opacity-90 mb-3'>Safety without blocking delivery</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>8 min read</span>
                <span className='mx-2'>•</span>
                <span>Trending</span>
              </div>
            </div>
          </Link>
          
          <Link href='/blog/edge-ai-privacy-by-design-2025' className='group'>
            <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔐</div>
              <h3 className='text-lg font-semibold mb-2'>Edge AI: Privacy by Design</h3>
              <p className='text-sm opacity-90 mb-3'>On-device intelligence for instant, compliant CX</p>
              <div className='flex items-center text-xs opacity-75'>
                <span>7 min read</span>
                <span className='mx-2'>•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
        </div>

        <div className='text-center mt-12'>
          <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold mb-4'>🎁 Bonus: Free Implementation Toolkit</h3>
            <p className='text-lg opacity-90 mb-6'>
              Get instant access to our complete AI implementation toolkit including checklists, 
              templates, ROI calculators, and expert frameworks.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/resources'
                className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block'
              >
                Download All Resources
              </Link>
              <Link
                href='/contact'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block'
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}