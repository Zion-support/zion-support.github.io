import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zion Tech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud, cybersecurity, and digital transformation solutions." />
      </head>
      <body>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}