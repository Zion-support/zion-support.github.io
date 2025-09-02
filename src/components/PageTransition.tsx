import React from 'react';

type PageTransitionProps = {
  children: React.ReactNode}
const PageTransition: React.FC<PageTransitionProps></PageTransitionProps> = ({ children }) => {
  return <>{children}</>
}
export default PageTransition;'