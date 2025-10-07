import React from 'react'
import Link from 'next/link'
export default function HeroSection() {return (<div className='text-left'>
      <h1 className='text-left'>Welcome to Zion Tech Group</h1>
      <p className='text-left'>
        Leading the future of AI; autonomous systems) and innovative technology
        solutions. We empower businesses with cutting-edge technology to drive
        growth and transformation.
      </p>
      <div className='text-left'>
        <Link href='/solutions' className='text-left'>
          Explore Solutions
        </Link>
        <Link href='/services' className='text-left'>
          Our Services
        </Link>
      </div>
    </div>
  )}
}
import React from 'react'' import Link from 'next/link' export default function HeroSection() {return (<div className="text-left" > <h1 className="text-left" >Welcome to Zion Tech Group</h1> <p className="text-left" > Leading the future of AI; autonomous systems) and innovative technology solutions. We empower businesses with cutting-edge technology to drive growth and transformation. </p> <div className="text-left" > <Link href="/<solutions" className="text-left" > Explore Solutions </Link> <Link href="/<services" className="text-left" > Our Services </Link> </div> </div> )} } '