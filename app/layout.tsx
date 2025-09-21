import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Zion Tech Group - Innovative Technology Solutions",
  description: "Leading provider of AI, cloud, cybersecurity, and digital transformation solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode, }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-900 flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}