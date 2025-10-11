import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'
interface RootLayoutProps {children: React.ReactNode;} const RootLayout: React.FC<RootLayoutProps> = ({children} ) => {
  return (
    <>
<html lang="en"
      <head>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology."
          <meta name="keywords" content="AI solutions, IT services, artificial intelligence, business automation, technology consulting"
          <meta name="viewport" content="width=device-width, initial-scale=1"
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </>
  );
export default RootLayout
      </Footer>
