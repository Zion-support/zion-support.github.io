
<<<<<<< HEAD
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react",;
;
export function BackToDirectoryButton() {;
  return (;
    <div className="container mx-auto px-4 md:px-6 mb-12">;
      <Button variant="outline" asChild className="my-8">;
        <Link to="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}
=======
import React from 'react',
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { ArrowLeft } from "lucide-react",
export function BackToDirectoryButton() {
  return (
    <div className="container mx-auto px-4 md: px-6 mb-12">      <Button variant="outline" asChild className="my-8">
        <Link to="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ArrowLeft } from &quot;lucide-react&quot;;

export function BackToDirectoryButton() {
  return (
    <div className=&quot;container mx-auto px-4 md:px-6 mb-12&quot;>
      <Button variant=&quot;outline&quot; asChild className=&quot;my-8&quot;>
        <Link to=&quot;/talents&quot; className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;>
          <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  )
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
