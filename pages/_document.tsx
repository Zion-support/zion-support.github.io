import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

  // Detect blank screen after hydration
  const blankScreenDetectScript = `window.addEventListener('load', function () {
    setTimeout(function () {
      var root = document.getElementById('__next');
      if (root) {
        var hasVisible = Array.from(root.children || []).some(function (el) {
          return ['SCRIPT','STYLE','LINK'].indexOf(el.tagName) === -1;
        });
        var isBlank = !hasVisible && root.innerText.trim() === '';
        if (isBlank) {
          console.error("Blank screen detected - replacing content");
          root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;">\
            <h2>Application failed to load.</h2>\
            <p>Please refresh the page.</p>\
            <p>If the issue persists, run <code>./setup.sh npm</code> and <code>npm run fix:loading</code>.</p>\
            <p>Check <code>next_dev_server.log</code> for errors. If you do not have internet access, install dependencies when connectivity is restored.</p>\
          </div>';
          setTimeout(function(){ window.location.href = '/offline.html'; }, 1000);
        }
      }
      
      BufferPolyfill.from = function(input, encoding) {
        return new BufferPolyfill(input, encoding);
      };
      
      BufferPolyfill.alloc = function(size, fill, encoding) {
        const buffer = new BufferPolyfill(size);
        if (fill !== undefined) {
          if (typeof fill === 'string') {
            const encoder = new TextEncoder();
            const fillBytes = encoder.encode(fill);
            buffer.set(fillBytes, 0);
          } else {
            buffer.fill(fill);
          }
        }
        return buffer;
      };
      
      BufferPolyfill.allocUnsafe = function(size) {
        return new BufferPolyfill(size);
      };
      
      BufferPolyfill.isBuffer = function(obj) {
        return obj instanceof Uint8Array;
      };
      
      // Add toString method to Uint8Array prototype for Buffer compatibility
      if (!Uint8Array.prototype.toString) {
        Uint8Array.prototype.toString = function(encoding, start, end) {
          const decoder = new TextDecoder(encoding || 'utf8');
          const slice = this.slice(start, end);
          return decoder.decode(slice);
        };
      }
      
      // Add toJSON method to Uint8Array prototype for Buffer compatibility
      if (!Uint8Array.prototype.toJSON) {
        Uint8Array.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.from(this)
          };
        };
      }
      
      // Define Buffer in global scope
      if (typeof globalThis !== 'undefined') globalThis.Buffer = BufferPolyfill;
      if (typeof global !== 'undefined') global.Buffer = BufferPolyfill;
      if (typeof window !== 'undefined') window.Buffer = BufferPolyfill;
      if (typeof self !== 'undefined') self.Buffer = BufferPolyfill;
      if (typeof this !== 'undefined') this.Buffer = BufferPolyfill;
      if (typeof module !== 'undefined' && module.exports) module.exports.Buffer = BufferPolyfill;
    }
  })();`;

  const themeScript = `(() => {
    try {
      const theme = localStorage.getItem('theme');
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      const className = isDark ? 'dark' : 'light';
      const root = document.documentElement;
      root.classList.add(className);
      root.setAttribute('data-theme', className);
    } catch(e) {}
  })();`;
  
  // Simple loader timeout without complex error handling
  const loaderTimeoutScript = `setTimeout(function(){
    const el = document.getElementById('initial-loader');
    if (el) el.style.display = 'none';
  }, 10000);`;

  // Detect blank screen after hydration
  const blankScreenDetectScript = `(function(){
    function showFallback(){
      var root=document.getElementById('__next');
      if(!root)return;
      var first=root.firstElementChild;
      if(root.innerText.trim()===''||root.children.length===0||!first||['SCRIPT','STYLE','LINK'].indexOf(first.tagName)!==-1){
        console.error('Blank screen detected - showing fallback');
        root.innerHTML='<div style="padding:2rem;text-align:center;font-family:sans-serif;"><h2>Application failed to load.</h2><p>Please refresh the page.</p><p>If the issue persists, run <code>./setup.sh npm</code> and <code>npm run fix:loading</code>.</p></div>';
      }
    }
    window.addEventListener('load',function(){setTimeout(showFallback,3000);});
  })();`;
  const globalErrorScript = `['error','unhandledrejection'].forEach(function(evt){
    window.addEventListener(evt, function(){
      var root = document.getElementById('__next');
      if (root && root.innerText.trim() === '') {
        var first = root.firstElementChild;
        if (!first || ['SCRIPT','STYLE','LINK'].indexOf(first.tagName) !== -1) {
          root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;'><h2>Application failed to load.</h2><p>Check the browser console for errors.</p><p>If dependencies are missing, run <code>./setup.sh npm</code>.</p></div>';
        }
      });
      
      // Suppress extension-related errors in the global scope
      if (typeof window !== 'undefined') {
        window.addEventListener('error', function(event) {
          if (event.filename && event.filename.includes('chrome-extension')) {
            event.preventDefault();
            return;
          }
        });
      }
    })();
  `;

  const cspContent = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com https://*.sentry.io https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://*.cloudinary.com; connect-src 'self' https://*.supabase.co https://*.sentry.io https://*.stripe.com";
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={cspContent} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
      </Head>
      <body>
        <div
          id="preload-message"
          style={{
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          <h2 style={{ marginBottom: '0.5rem' }}>Zion Tech Marketplace</h2>
          <p style={{ marginBottom: '0.25rem' }}>Loading...</p>
          <p style={{ fontSize: '0.9rem' }}>
            If the app stays blank, run <code>./setup.sh npm</code> then
            <code> npm run build && npm run dev</code>.
          </p>
        </div>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.getElementById('preload-message')?.remove();",
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: blankScreenDetectScript }} />
        <script dangerouslySetInnerHTML={{ __html: messageChannelErrorScript }} />
      </body>
    </Html>
  );
}
