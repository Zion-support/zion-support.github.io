import React from 'react'
import Link from 'next/link'
export default function NotFound() {
  return (<div className='text-left'>
      <div className='text-left'>
        <div className='text-left'>
          <div className='text-left'>
            <svg
              className='text-left'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.636M15 6.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          <h1 className='text-left'>404</h1>
          <h2 className='text-left'>Page Not Found</h2>
          <p className='text-left'>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos)s get you back on track.
          </p>
        </div>
        <div className='text-left'>
          <Link href='/' className='text-left'>
            Go Home
          </Link>
          <Link href='/services' className='text-left'>
            Explore Services
          </Link>
        </div>
        <div className='text-left'>
          <p>
            Need help?{' '}
            <Link href='/contact' className='text-left'>
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react'' import Link from 'next/link' export default function NotFound() { return (<div className="text-left" > <div className="text-left" > <div className="text-left" > <div className="text-left" > <svg className="text-left" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.636M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> </div> <h1 className="text-left" >404</h1> <h2 className="text-left" >Page Not Found</h2> <p className="text-left" > The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos)s get you back on track. </p> </div> <div className="text-left" > <Link href="/" className="text-left" > Go Home </Link> <Link href="/<services" className="text-left" > Explore Services </Link> </div> <div className="text-left" > <p>' Need help?{' '} <Link href="/<contact" className="text-left" > Contact us </Link> </p> </div> </div> </div> ); } '