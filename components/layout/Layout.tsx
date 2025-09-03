React from
  'react'
<<<<<<< HEAD
import Header from 'react'
  './Header';import Footer from 'react'
  './Footer'
=======
import Header  from 'react./Header';import Footer  from 'react./Footer
>>>>>>> main

<<<<<<< HEAD
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
=======
type LayoutProps = {children: React.ReactNode
>>>>>>> main
}
<<<<<<< HEAD
'
=======
export default function Layout({ children }: LayoutProps) {
  return (
<div className='min-h-screen flex flex-col'>'      <Header />'      <main className='flex-1 pt-16'>'        {children}'      </main><Footer />
    </div>
  )
}
>>>>>>> main
