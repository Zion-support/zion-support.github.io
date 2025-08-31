<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React from 'react.ts';
import EnhancedNavigation2025 from "./layout/EnhancedNavigation2025";
import EnhancedFooter from "./layout/EnhancedFooter";
=======
import React from 'react.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import EnhancedNavigation2025 from "./layout/EnhancedNavigation2025";
import EnhancedFooter from "./layout/EnhancedFooter";

<<<<<<< HEAD
interface LayoutProps extends React.PropsWithChildren<{}> {
=======
<<<<<<< HEAD
interface LayoutProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
=======
interface LayoutProps extends React.PropsWithChildren<{
}> {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  children: React.ReactNode}

export default function Layout(...args[]: any):  {
  return (
    <div className = "min-h-screen flex flex-col">
      <EnhancedNavigation2025 />
      <main className="flex-grow">;
        {children};
      </main>;
      <EnhancedFooter />;
    </div>;
  );
}
