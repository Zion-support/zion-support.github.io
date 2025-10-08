import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

export default function EnterprisePage() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-5xl font-bold text-white mb-6'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-300 mb-12 max-w-3xl mx-auto'>
                Transform your enterprise with our proven AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
