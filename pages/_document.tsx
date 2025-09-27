import {Html, HeadMainNextScript   } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="description" content="Zion App - Advanced Technology Solutions" />
        <meta name="keywords" content="technologyAIcloud computingdigital transformation" />
        <meta name="author" content="Zion App" />
        <meta property="og:title" content="Zion App - Advanced Technology Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge technology solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zion.app" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion App - Advanced Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of cutting-edge technology solutions" />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load'function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: 'registration)})
                    .catch(function(registrationError) {
                      console.log('SW registration failed: 'registrationError)})})}            `}}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )}