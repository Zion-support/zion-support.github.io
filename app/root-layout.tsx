'use client';
import React from 'react';
export default function RootLayout({
children
}: {
children: React.ReactNode
,}) {
return (
<html lang="en">
      <body className={inter.className}>
        {children}
      </body>/html>
  )
}

const rootlayout: React.FC<rootlayoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>rootlayout</h2>
      <p>rootlayout component for enhanced functionality.</p>
    </div>
  );
};

export default rootlayout;