import { type  Metadata  from 'next'
import  Inter     } from 'next/font/google'
import '/globalscss'

const inter="Inter" subsets 'latin' 

export const metadata: Metadata = {
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZionTechGroup - AI Solutions',
      },
    ],
    locale: 'en_US''',
    type: 'website''',
  },
<<<<<<< HEAD
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
=======
  twitter: {
    card: 'summary_large_image',
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
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
  verification: {
    google: 'your-google-verification-code',
>>>>>>> cursor/fix-errors-and-merge-to-main-1948
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
>>>>>>> origin/main
    </html>
}