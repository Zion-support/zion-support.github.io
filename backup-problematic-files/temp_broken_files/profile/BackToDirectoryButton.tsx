
<<<<<<< HEAD
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { ArrowLeft } from "lucide-react",;
=======
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { ArrowLeft } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export function BackToDirectoryButton() {;
  return (;
    <div className="container mx-auto px-4 md:px-6 mb-12">;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <Button variant="outline" asChild className="my-8">;
        <Link to="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
=======
      <Button variant="outline" asChild className="my-8">;
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
} import {;
  {;
  {;
  ArrowLeft ;
}from 'lucide-react' export function BackToDirectoryButton () {;
  return (<Button variant="outline" asChild className="my-8"> <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"> <ArrowLeft className="mr-2 h-4 w-4" /> '"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
