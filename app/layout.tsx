<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
  description: "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
  keywords: "AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description: "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group — AI, Micro SaaS, and IT Services",
    description: "Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.",
  },
};
=======
import './globals.css';
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        {children}
      </body>
=======
      <body>{children}</body>
>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
    </html>
  );
}