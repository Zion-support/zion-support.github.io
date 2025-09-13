import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';


  componentDidCatch(error, errorInfo) {

import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";







interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Solutions',
  description = 'Leading technology solutions for modern businesses'
}) => {
  return (
      <Head>
      </Head>
      <Navigation />

export default Layout;
      <Head>;



import React, { ReactNode } from "react";
      </Head>
      <Header />
      <Footer />
import React, { ReactNode } from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {





export default Layout;
      </Head>;
      <Header />;
      <Footer />;

const Layout: React.FC<LayoutProps> = ({ children }) => {



export default Layout;
