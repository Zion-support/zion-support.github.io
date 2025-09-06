<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
=======
import React from 'react';
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { ArrowLeft } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface ProfileErrorStateProps {
  error: string | null;
export /**
 * ProfileErrorState - Function description
 */
function ProfileErrorState() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4'>
      <div className='text-red-400 mb-4 text-xl'>
        {error |'Something went wrong'}
      </div>
      <Button asChild>
        <Link
          href='/talents'
          className='bg-zion-purple hover:bg-zion-purple-dark'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
import { Button } from "@/components/ui/button"
import Link from "next/link"
=======

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    <div className='min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4'>;
      <div className='text - red - 400 mb - 4 text - xl'>;
        {error || 'Something went wrong'}
      </div>;
      <Button as_child>;
        <Link;
          href='/talents';
          className='bg - zion - purple hover:bg - zion - purple - dark';
        >;
          <ArrowLeft className='mr - 2 h - 4 w - 4' />          Back to Talent Directory;
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple - dark">;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
import { Button  } from '@/components / ui / button';
import Link from './next / link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface ProfileErrorStateProps {
  error: string | null;
}
<<<<<<< HEAD
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error |"Something went wrong"}</div>
      <Button asChild>
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  )
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
interface ProfileErrorStateProps {;
  error: string | null;

export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
    <div className='min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4'>;
      <div className='text-red-400 mb-4 text-xl'>;
        {error || 'Something went wrong'}
      </div>;
      <Button asChild>;
        <Link
          href='/talents'
          className='bg-zion-purple hover:bg-zion-purple-dark'>;
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory;
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

interface ProfileErrorStateProps {;
  error: string | null;
}

export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;
      <Button asChild>;
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;
          <ArrowLeft className="mr-2 h-4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export /**
 * ProfileErrorState - Function description
 */
function ProfileErrorState() {
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4">;
      <div className="text - red - 400 mb - 4 text - xl">{error || "Something went wrong"}</div>;
      <Button as_child>;
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple - dark">;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
