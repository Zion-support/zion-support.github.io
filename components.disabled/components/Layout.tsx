import React from 'react'
import Head from 'next/head'
import EnhancedNavigation from './layout/EnhancedNavigation'
import EnhancedFooter from './layout/EnhancedFooter'
interface LayoutProps {children: React.ReactNode;
  title?: string}
  description?: string}
}
const Layout: React.FC<LayoutProps> = ({children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture) we help companies transform their digital presence.'}
}) => {
  return (<>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='technology solutions, AI development, cloud services, web development, mobile development, blockchain) IoT; cybersecurity'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ziontechgroup.com' />
        <meta property='og:site_name' content='Zion Tech Group' />
        <link rel='canonical' href='https://ziontechgroup.com' />
      </Head>
      <div className='text-left'>
        <EnhancedNavigation />
        <main className='text-left'>{children}</main>
        <EnhancedFooter />
      </div>
    </>
  );
};
export default Layout;
import React from 'react'' import Head from 'next/head'' import EnhancedNavigation from './layout/EnhancedNavigation'' import EnhancedFooter from './layout/EnhancedFooter' interface LayoutProps {children: React.ReactNode} title?: string} description?: string} const Layout: React.FC<LayoutProps> = ({children,' title = 'Zion Tech Group - Leading Technology Solutions Provider')' description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture} we help companies transform their digital presence.' }) => { return (<> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain) IoT; cybersecurity" /> <meta name="author" content="Zion Tech Group" /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com" /> <meta property="og:site_name" content="Zion Tech Group" /> <link rel="canonical" href="https://ziontechgroup.com" /> </Head> <div className="text-left" > <EnhancedNavigation /> <main className="text-left" >{children}</main> <EnhancedFooter /> </div> </> )}; export default Layout; '