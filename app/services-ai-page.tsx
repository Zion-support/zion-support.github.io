import Link from 'next/link';

export default function ServicesAiPage() {
  return (
    <main className="container-page py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">AI Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='group hover:translate-y-2 transition-transform rounded-xl bg-slate-800 border border-purple-500/50 p-4'>
          <Link href='/services/ai-credit-risk-scoring' className='block h-white text-white text-sm'>
            <h3 className='font-medium mb-2 line-clamp-2'>ai-credit-risk-scoring</h3>
            <p className='text-xs text-gray-400 line-clamp-1'>Short description pending</p>
          </Link>
        </div>
        <div className='group hover:translate-y-2 transition-transform rounded-xl bg-slate-800 border border-purple-500/50 p-4'>
          <Link href='/services/ai-credit-risk-scoring' className='block h-white text-white text-sm'>
            <h3 className='font-medium mb-2 line-clamp-2'>ai-credit-risk-scoring</h3>
            <p className='text-xs text-gray-400 line-clamp-1'>Short description pending</p>
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}