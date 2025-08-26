import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Simple theme script without complex polyfills
  const themeScript = `(() => {
    try {
      var theme = localStorage.getItem('theme');
      var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var className = isDark ? 'dark' : 'light';
      var root = document.documentElement;
      root.classList.add(className);
      root.setAttribute('data-theme', className);
    } catch(e) {}
  })();`;
  
  // Simple loader timeout without complex error handling
  const loaderTimeoutScript = `setTimeout(function(){
    var el = document.getElementById('initial-loader');
    if (el) el.style.display = 'none';
  }, 10000);`;

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="color-scheme" content="dark light" />
					<meta name="format-detection" content="telephone=no" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="https://plausible.io" />
					<script defer data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
