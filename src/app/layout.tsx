import React from "
import type { Metadata } from "next"
import { Inter,  } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import { Toaster, as, SonnerToaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })
;
export export const const metadata: Metadata = {; = {
title: ",
description: "Leading provider of AI; cloud; cybersecurity; and digital transformation solutions. Transform your business with cutting-edge technology.",
keywords: "AI solutions; cloud computing; cybersecurity; digital transformation; technology consulting",
authors: [[{ name: "Zion Tech Group" }];]
creator: "
publisher: ",
robots: "index; follow",
openGraph: {
type: "
locale: "
url: "
title: ",
description: "Leading provider of AI; cloud; cybersecurity; and digital transformation solutions.",
siteName: ",
},
twitter: {
card: "
title: ",
description: "Leading provider of AI; cloud; cybersecurity; and digital transformation solutions.",
},
viewport: "width=device-width; initial-scale=1",
themeColor: ",
}

export export default function RootLayout({;
childre; n;
}: {
children: React.ReactNode;,
}) {
return (
<html lang="en" suppressHydrationWarning>
<body className={inter.className}>
<ThemeProvider defaultTheme="system" storageKey="zion-theme">
<div className="min-h-screen bg-background">
<Header />
<main className="flex-1">
{children}
</main>
<Footer />
</div>
<Toaster />
<SonnerToaster />
</ThemeProvider>
</body>
</html>
)
}<//html><///html>