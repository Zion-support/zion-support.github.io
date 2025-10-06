import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarClockUser } from 'lucide-react';

import Calendar from 'lucide-react/dist/esm/icons/calendar';
import User from 'lucide-react/dist/esm/icons/user';
import Clock from 'lucide-react/dist/esm/icons/clock';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';

export default function GenerativeDesignSystemsBlueprintPage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>
                🎨 GENERATIVE DESIGN SYSTEMS
              </span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              AI 2025: Generative Design Systems Blueprint
            </h1>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed'>
              A comprehensive blueprint to architectdeployand govern
              enterprise-grade generative design systems.
            </p>
            <div className='flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-200 mb-8'>
              <div className='flex items-center'>
                <Calendar /> September 30, 2025
              </div>
              <div className='flex items-center'>
                <User /> Zion Tech Group
              </div>
              <div className='flex items-center'>
                <Clock /> 9 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl text-gray-600 leading-relaxed mb-8'>
            Generative design systems bring together multimodal modelsdata
            pipelinesand governance to accelerate product development while
            maintaining brand coherence and safety.
          </p>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Reference Architecture
          </h2>
          <ul className='space-y-4 text-gray-700'>
            <li>Model orchestration across text, image, and code generation</li>
            <li>Human-in-the-loop approvals with audit trails</li>
            <li>Guardrails for biasIP leakageand safety constraints</li>
            <li>Design token pipelines integrated with CI/CD</li>
          </ul>

          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Rollout Strategy
          </h2>
          <p className='text-gray-700 mb-6'>
            Start with low-risk workflowsmeasure ROIthen scale to core
            product surfaces.
          </p>
        </div>

        <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center mt-12'>
          <h3 className='text-2xl font-bold mb-3'>
            Build Your Design Accelerator
          </h3>
          <p className='opacity-90 mb-6'>
            We help enterprises ship safe, on-brand generative experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/services'
              className='bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Explore Services
            </Link>
            <Link
              to='/contact'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors'
            >
              Talk to Experts
            </Link>
          </div>
        </div>
      </article>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Link
          to='/'
          className='inline-flex items-center text-pink-600 hover:text-pink-800 font-medium'
        >
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
}
