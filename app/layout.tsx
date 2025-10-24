import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zion Tech Group - Advanced AI & IT Solutions",
  description: "Leading provider of AI-powered solutions, cybersecurity, and digital transformation services."
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (<html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
