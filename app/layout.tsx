import type { Metadata } from 'next';
// import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, web development, mobile applications, cloud services, and digital transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}