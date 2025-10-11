import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'
interface RootLayoutProps {children: React.ReactNode;}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <>
<html lang="en">
      <head>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology." />
          <meta name="keywords" content="AI solutions, IT services, artificial intelligence, business automation, technology consulting" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </>
  );
export default RootLayout