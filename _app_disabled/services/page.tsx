import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata: Metadata = {title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, and more.',
  keywords: 'AI services, micro SaaS, technology solutions, software development'}
};
export default function ServicesPage() {return (
    <div className='text-left'>
      <div className='text-left'>
        <div className='text-left'>
          <h1 className='text-left'>Our Services</h1>
          <p className='text-left'>
            Comprehensive technology services to transform your business.
          </p>
        </div>
        <div className='text-left'>
          <div className='text-left'>
            <h3 className='text-left'>AI Solutions</h3>
            <p className='text-left'>
              Advanced AI and machine learning solutions.
            </p>
            <Link href='/services/ai-services' className='text-left'>
              Learn More →
            </Link>
          </div>
          <div className='text-left'>
            <h3 className='text-left'>Micro SaaS</h3>
            <p className='text-left'>Scalable micro SaaS solutions.</p>
            <Link href='/services/micro-saas' className='text-left'>
              Learn More →
            </Link>
          </div>
          <div className='text-left'>
            <h3 className='text-left'>Web Development</h3>
            <p className='text-left'>Professional web development services.</p>
            <Link href='/services/web-development' className='text-left'>
              Learn More →
            </Link>
          </div>
        </div>
        <div className='text-left'>
          <h2 className='text-left'>Ready to Get Started?</h2>
          <p className='text-left'>
            Contact us today to learn how our services can transform your
            business.
          </p>
          <Link href='/contact' className='text-left'>
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  )}
}
import React from 'react'' import Link from 'next/link'' import { Metadata } from 'next' export const metadata: Metadata = {' title: 'Services | Zion Tech Group',' description: 'Comprehensive technology services including AI development, micro SaaS solutions, and more.',' keywords: 'AI services, micro SaaS, technology solutions, software development'} }; export default function ServicesPage() {return ( <div className="text-left" > <div className="text-left" > <div className="text-left" > <h1 className="text-left" >Our Services</h1> <p className="text-left" > Comprehensive technology services to transform your business. </p> </div> <div className="text-left" > <div className="text-left" > <h3 className="text-left" >AI Solutions</h3> <p className="text-left" >Advanced AI and machine learning solutions.</p> <Link href="/services/ai-services" className="text-left" > Learn More → </Link> </div> <div className="text-left" > <h3 className="text-left" >Micro SaaS</h3> <p className="text-left" >Scalable micro SaaS solutions.</p> <Link href="/services/micro-saas" className="text-left" > Learn More → </Link> </div> <div className="text-left" > <h3 className="text-left" >Web Development</h3> <p className="text-left" >Professional web development services.</p> <Link href="/services/web-development" className="text-left" > Learn More → </Link> </div> </div> <div className="text-left" > <h2 className="text-left" >Ready to Get Started?</h2> <p className="text-left" > Contact us today to learn how our services can transform your business. </p> <Link href="/contact" className="text-left" > Contact Sales </Link> </div> </div> </div> )} } '