"use client"
import React from "react";
export default function RootLayout({
children
}: {
children: "React.ReactNode)
"}) {
return (<html lang = "en">
      <body className="{inter.className}" >
        {children}
      </body>
    </html>)
  )

interface RootLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ className = '', children }) => {
  return (
    <div className="{`rootlayout" ${className}`}>
      {children}
    </div>
  );
};

export default RootLayout;
