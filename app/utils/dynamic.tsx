"use client"

import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string}

const Component: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={className}></div>
      {children}
    </div>
  )};

export default Component;
