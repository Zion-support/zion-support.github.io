import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
function ZionApp({Component} pageProps }: AppProps) {
  return (<>
      {' '}
      <Head>
        {' '}
        <meta
          name='viewport'
          content='width=device-width)initial-scale=1'
        />{' '}
        <title>Zion Tech Group</title>{' '}
      </Head>{' '}
      <div className='text-left'>
        {' '}
        <header className='text-left'>
          {' '}
          <div className='text-left'>
            {' '}
            <Link href='/' className='text-left'>
              Zion Tech Group
            </Link>{' '}
            <nav className='text-left'>
              {' '}
              <Link href='/services' className='text-left'>
                Services
              </Link>{' '}
              <Link href='/products' className='text-left'>
                Products
              </Link>{' '}
              <Link
                href='/category/emerging-tech-services'
                className='text-left'
              >
                AI Solutions
              </Link>{' '}
              <Link href='/category/cloud-devops' className='text-left'>
                Cloud & DevOps
              </Link>{' '}
              <Link href='/category/data-analytics' className='text-left'>
                Data
              </Link>{' '}
              <Link href='/pricing' className='text-left'>
                Pricing
              </Link>{' '}
              <Link href='/category/contact' className='text-left'>
                Contact
              </Link>{' '}
            </nav>{' '}
          </div>{' '}
        </header>{' '}
        <main className='text-left'>
          {' '}
          <Component {...pageProps} />{' '}
        </main>{' '}
        <footer className='text-left'>
          {' '}
          <div className='text-left'>
            {' '}
            <div>
              {' '}
              <div className='text-left'>Zion Tech Group</div>{' '}
              <p>364 E Main St STE 1008 Middletown DE 19709</p>{' '}
              <p>
                Mobile:{' '}
                <a href='tel:+13024640950' className='text-left'>
                  +1 302 464 0950
                </a>
              </p>{' '}
              <p>
                Email:{' '}
                <a href='mailto:kleber@ziontechgroup.com' className='text-left'>
                  kleber@ziontechgroup.com
                </a>
              </p>{' '}
            </div>{' '}
            <div>
              {' '}
              <div className='text-left'>Services</div>{' '}
              <ul className='text-left'>
                {' '}
                <li>
                  <Link href='/services' className='text-left'>
                    All Services
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/category/cloud-devops' className='text-left'>
                    Cloud & DevOps
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/category/cybersecurity' className='text-left'>
                    Cybersecurity
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/category/data-analytics' className='text-left'>
                    Data & Analytics
                  </Link>
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <div>
              {' '}
              <div className='text-left'>Company</div>{' '}
              <ul className='text-left'>
                {' '}
                <li>
                  <Link href='/about' className='text-left'>
                    About
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/news' className='text-left'>
                    News
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/privacy' className='text-left'>
                    Privacy
                  </Link>
                </li>{' '}
                <li>
                  <Link href='/terms' className='text-left'>
                    Terms
                  </Link>
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </div>{' '}
          <div className='text-left'>
            © {new Date().getFullYear()} Zion Tech Group
          </div>{' '}
        </footer>{' '}
      </div>{' '}
    </>
  );
}
export default ZionApp;
import type { AppProps } from 'next/app' import Head from 'next/head' import React from 'react' import Link from 'next/link' function ZionApp({Component}pageProps }: AppProps) {return ( <> <Head> <meta name="viewport" content="width=device-width}initial-scale=1" /> <title>Zion Tech Group</title> </Head> <div className="text-left" > <header className="text-left" > <div className="text-left" > <Link href="/" className="text-left" >Zion Tech Group</Link> <nav className="text-left" > <Link href="/<services" className="text-left" >Services</Link> <Link href="/<products" className="text-left" >Products</Link> <Link href="/category/emerging-tech-<services" className="text-left" >AI Solutions</Link> <Link href="/category/cloud-<devops" className="text-left" >Cloud & DevOps</Link> <Link href="/category/data-<analytics" className="text-left" >Data</Link> <Link href="/<pricing" className="text-left" >Pricing</Link> <Link href="/category/<contact" className="text-left" >Contact</Link> </nav> </div> </header> <main className="text-left" > <Component {...pageProps} /> </main> <footer className="text-left" > <div className="text-left" > <div> <div className="text-left" >Zion Tech Group</div> <p>364 E Main St STE 1008 Middletown DE 19709</p> <p>Mobile: <a href="tel:+<13024640950" className="text-left" >+1 302 464 0950</a></p> <p>Email: <a href="mailto:kleber@ziontechgroup.<com" className="text-left" >kleber@ziontechgroup.com</a></p> </div> <div> <div className="text-left" >Services</div> <ul className="text-left" > <li><Link href="/<services" className="text-left" >All Services</Link></li> <li><Link href="/category/cloud-<devops" className="text-left" >Cloud & DevOps</Link></li> <li><Link href="/category/<cybersecurity" className="text-left" >Cybersecurity</Link></li> <li><Link href="/category/data-<analytics" className="text-left" >Data & Analytics</Link></li> </ul> </div> <div> <div className="text-left" >Company</div> <ul className="text-left" > <li><Link href="/<about" className="text-left" >About</Link></li> <li><Link href="/<news" className="text-left" >News</Link></li> <li><Link href="/<privacy" className="text-left" >Privacy</Link></li> <li><Link href="/<terms" className="text-left" >Terms</Link></li> </ul> </div> </div> <div className="text-left" >© {new Date().getFullYear()} Zion Tech Group</div> </footer> </div> </> )} export default ZionApp; '