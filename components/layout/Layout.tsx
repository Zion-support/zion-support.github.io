<<<<<<< HEAD
const React from "react";interface LayoutProps { children: React.ReactNode;}module.exports = default function Layout({ children }: LayoutProps) { return ( <div className="min-h-screen bg-gray-50"> {children} </div> );}'"'"
=======
import React from 'react';
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
=======
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
>>>>>>> main
    </div>
  );
}
>>>>>>> main
