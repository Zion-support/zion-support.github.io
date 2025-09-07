import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}