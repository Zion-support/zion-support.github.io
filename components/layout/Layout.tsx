React from
  'react';
import Header from
  './Header';
import Footer from'
  './Footer';''type LayoutProps = {children: React.ReactNode;};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children};
    </div>)
};