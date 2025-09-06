<<<<<<< HEAD
return (
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react''
    <div className='min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4'>;
      <div className='text - red - 400 mb - 4 text - xl'>;
        {error || 'Something went wrong'}'
      </div>;
      <Button as_child>;
        <Link ;
          href='/talents';
          className='bg - zion - purple hover:bg - zion - purple - dark';' />;
          <ArrowLeft className='mr - 2 h - 4 w - 4' />          Back to Talent Directory;
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple - dark" />;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
import { Button  } from '@/components / ui / button';
import Link from './next / link';
interface ProfileErrorStateProps {
  error: string | null
}
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark" />"
          <ArrowLeft className="mr-2 h-4 w-4" />"
=======

import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'

interface ProfileErrorStateProps {
  error: string | null
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          Back to Talent Directory
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
interface ProfileErrorStateProps {;
  error: string | null;,
export function ProfileErrorState(): any ({ error }:,  ProfileErrorStateProps) {;
  return (
    <div className='min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4'>;
      <div className='text-red-400 mb-4 text-xl'>;
        {error || 'Something went wrong'}'
      </div>;
      <Button asChild>;
        <Link href='/talents''
          className='bg-zion-purple hover:bg-zion-purple-dark' />;
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory;
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark" />;
          <ArrowLeft className="mr-2 h-4 w-4" />;
import React from 'react';
import { Button } from "@/components/ui/button";
=======
  )
import React from 'react',;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
interface ProfileErrorStateProps {;
  error: string | null;
}
;
<<<<<<< HEAD
export function ProfileErrorState({ error }:,  ProfileErrorStateProps) {;
=======
export function ProfileErrorState({ error }: ProfileErrorStateProps) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  return (;
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
<<<<<<< HEAD
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark" />;
=======
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}
<<<<<<< HEAD
  );
}
export /**
 * ProfileErrorState - Function description
 */
function ProfileErrorState() {
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4">;
      <div className="text - red - 400 mb - 4 text - xl">{error || "Something went wrong"}</div>;
      <Button as_child>;
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple - dark" />;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
}
})
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
