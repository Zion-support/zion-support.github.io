import React from 'react';
import { Helmet } from 'react-helmet-async';
const Layout: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>Layout | Zion Tech Group</title>,
        <meta name="description" content="Layout - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">Layout</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default Layout;