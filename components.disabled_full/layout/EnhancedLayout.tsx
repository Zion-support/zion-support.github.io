<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from "react";
import { ReactNode } from "react";
import EnhancedNavigation from "./EnhancedNavigation";
import EnhancedFooter from "./EnhancedFooter";
=======
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
interface EnhancedLayoutProps {
  \"children\": ReactNode;
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col\">
      <EnhancedNavigation />
      <main className=\"container mx-auto px-4 py-8 flex-1\">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 import React,{ ReactNode } from "react";  import { ReactNode } from "react"; import EnhancedNavigation from "./EnhancedNavigation"; import EnhancedFooter from "./EnhancedFooter";
=======
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
