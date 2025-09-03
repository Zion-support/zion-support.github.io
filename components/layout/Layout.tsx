import React from 'react';

type LayoutProps = {

<<<<<<< HEAD
  children: React.ReactNode};

export: default function Layout({ children }: LayoutProps) {

  return: <div>{children}</div>;
React from
  'react'
import Header from 'react'
  './Header';import Footer from 'react'
  './Footer'
import Header  from 'react./Header';import Footer  from 'react./Footer


export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
  return <div>{children}</div>;
type LayoutProps = {children: React.ReactNode
}
'
  return (
<div className='min-h-screen flex flex-col'>'      <Header />'      <main className='flex-1 pt-16'>'        {children}'      </main><Footer />
    </div>
  )
=======
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return <div>{children}</div>;
}
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
