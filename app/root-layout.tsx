import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading provider of AI and IT solutions" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;