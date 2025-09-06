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
