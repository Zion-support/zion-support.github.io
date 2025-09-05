
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",
=======
import React from 'react';
<<<<<<< HEAD
import { Button } from &quot;@/components/ui/button&quot;;
import Link from &quot;next/link&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { ArrowLeft } from 'lucide-react'

export function BackToDirectoryButton() {
  return (
<<<<<<< HEAD
    <div className="container mx-auto px-4 md: px-6 mb-12">
=======
import Link from "next/link";

export function BackToDirectoryButton() {_return (
    <div className="container mx-auto px-4 md:px-6 mb-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Button variant="outline" asChild className="my-8">
        <Link href="/talents" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
=======
    <div className=&quot;container mx-auto px-4 md:px-6 mb-12&quot;>
      <Button variant=&quot;outline&quot; asChild className=&quot;my-8&quot;>
        <Link href=&quot;/talents&quot; className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;>
          <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          Back to Talent Directory
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
