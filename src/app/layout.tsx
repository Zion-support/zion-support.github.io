import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zion Holdings - AI-Powered Solutions",
  description: "Leading provider of AI-powered business solutions and innovative technology services",
  keywords: "AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting",
  authors: [{ name: "Zion Holdings" }],
  creator: "Zion Holdings",
  publisher: "Zion Holdings",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zion.app",
    title: "Zion Holdings - AI-Powered Solutions",
    description: "Leading provider of AI-powered business solutions and innovative technology services",
    siteName: "Zion Holdings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Holdings - AI-Powered Solutions",
    description: "Leading provider of AI-powered business solutions and innovative technology services",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0ea5e9",
}

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
=======
return (
<html lang="en" suppressHydrationWarning>;
<body className={inter.className}>;
<ThemeProvider defaultTheme="system" storageKey="zion-theme">;
<div className="min-h-screen bg-background">;
<Header />;
<main className="flex-1">;
{children}
</main>;
<Footer />;
</div>;
<Toaster />;
<SonnerToaster />;
</ThemeProvider>;
</body>;
</html>;
)
}<//html><///html>;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-1975
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26
