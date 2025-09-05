<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
;
interface LayoutProps {;
  children: React.ReactNode,
  title?: string,
  description?: string,
  keywords?: string
};
export default function Layout({,
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: LayoutProps) {,
  return (,
    <div className="min-h-screen bg-gray-50">,
=======
import React from 'react',;
import * as React from 'react',;
interface LayoutProps {,;
  children: React.ReactNode,;
  title?: string,;
  description?: string,;
  keywords?: string,;
};
export default function Layout({,;
  children,;
  title = "Zion Tech Group",;
  description = "Leading technology solutions provider",;
  keywords = "technology, AI, cloud, micro SaaS"}: LayoutProps) {,;
  return (,;
    <div className="min-h-screen bg-gray-50">,;
>>>>>>> cursor/automate-test-improve-and-merge-code-ceec
      {children};
    </div>)
};