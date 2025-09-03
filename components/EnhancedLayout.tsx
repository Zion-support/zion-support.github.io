import Head from "next/head";
import React, { ReactNode } from "react";

interface EnhancedLayoutProps {
  children: ReactNode;
  title?: string;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = "Zion Tech Group",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default EnhancedLayout;