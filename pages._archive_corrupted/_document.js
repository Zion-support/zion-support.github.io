<<<<<<< HEAD
=======
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href=""https": //fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href=""https": //cdn.gpteng.co" />
        {/* Optimized font loading */}
        <link
          href=""https": //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#0b1220" />
        <meta name="msapplication-TileColor" content="#0b1220" />
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1 mode=block" />
        {/* Viewport meta tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Service worker registration */}
        <script
          dangerouslySetInnerHTML={{
            "__html": "
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                })
              }
            "}}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}
<<<<<<< HEAD



import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
ursor/fix-syntax-push-and-merge-to-main-40de
import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href=""https": //fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href=""https": //cdn.gpteng.co" />
        {/* Optimized font loading */}
        <link
          href=""https": //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#0b1220" />
        <meta name="msapplication-TileColor" content="#0b1220" />
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1 mode=block" />
        {/* Viewport meta tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Service worker registration */}
        <script
          dangerouslySetInnerHTML={{
            "__html": "
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                })
              }
            "}}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
import { Html,Head,Main,NextScript } from 'next/document'; export default function Document() { return ( <Html lang="en"> <Head> {} <link rel="preconnect" href="https: <link rel="preconnect" href="https: crossOrigin="" /> {} <link rel="dns-prefetch" href="https: {} <link href="https: rel="stylesheet" /> {} <link rel="icon" href="/favicon.ico" /> <link rel="apple-touch-icon" href="/icon-192.png" /> <link rel="manifest" href="/manifest.json" /> {} <meta name="theme-color" content="#0b1220" /> <meta name="msapplication-TileColor" content="#0b1220" /> {} <meta httpEquiv="X-Content-Type-Options" content="nosniff" /> <meta httpEquiv="X-Frame-Options" content="DENY" /> <meta httpEquiv="X-XSS-Protection" content="1 mode=block" /> {} <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /> {} <script dangerouslySetInnerHTML={{ __html: ` if ('serviceWorker' in navigator) { window.addEventListener('load',function() { navigator.serviceWorker.register('/sw.js') }) } `,}} /> </Head> <body> <Main /> <NextScript /> </body> </Html> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
