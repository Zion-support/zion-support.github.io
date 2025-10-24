'use client';
import React from 'react';
<<<<<<< HEAD
export default function RootLayout({
children
}: {
children: "React.ReactNode)
",}) {
return(<html lang = "en">
      <body className={inter.className,;} >
        {children;}
      </body>
    </html>)
  )
;};
;
=======

interface rootlayoutProps {
  className?: string;
};

const rootlayout: React.FC<rootlayoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>rootlayout</h2>
      <p>rootlayout component for enhanced functionality.</p>
    </div>
  );
};

export default rootlayout;
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
