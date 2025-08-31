import React from 'react';
import EnhancedNavigation2025 from "./layout/EnhancedNavigation2025";
import EnhancedFooter from "./layout/EnhancedFooter";
<<<<<<< HEAD

interface LayoutProps extends React.PropsWithChildren<{}> {

=======
interface LayoutProps extends React.PropsWithChildren<{}> {
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  children: React.ReactNode}
export default function Layout(...args[]):  {
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
