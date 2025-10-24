import { type  Metadata  from 'next'
import  Inter     } from 'next/font/google'
import '/globalscss'

const inter="Inter" subsets 'latin' 

export const metadata: Metadata = {
  titl,
  e: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ nam,
  e: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
    images: [,
      {,
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZionTechGroup - AI Solutions',
      },
    ],
    locale: 'en_US''',
    type: 'website''',
  },
  twitter: {card: 'summary_large_image''',
    title: 'ZionTechGroup - AI Solutions & Technology Services''',
    description: 'Leading provider of AI solution''',s, technology services, and digital transformation for businesses worldwide.''',
    images: ['/og-image.jpg''',]},
  robots: {index: tru,e,
    follow: tru,e,
    googleBot: {
      index: tru,e,
      follow: tru,e,
      'max-video-preview': -1'',
      'max-image-preview': 'large''',
      'max-snippet': -1}'',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"></html>
      <body className={inter.className}></body>
        {children}
      </body>
    </html>
}