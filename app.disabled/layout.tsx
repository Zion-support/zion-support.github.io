<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './globals.css'
=======
=======
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
// global styles are optional; keeping layout minimal

export const metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Expert consulting and implementation services.',
  keywords: ['AI', 'machine learning', 'cloud computing', 'cybersecurity', 'web development', 'data solutions'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
=======
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
