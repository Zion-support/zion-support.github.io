import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children}: {
  children: React.ReactNode}) {
  return (
    <html lang="en">
      <Head>
        <title>Zion Tech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud, cybersecurity, and digital transformation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="font-sans">
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}