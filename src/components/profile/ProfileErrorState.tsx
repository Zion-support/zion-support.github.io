<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'
=======
<<<<<<< HEAD
return (
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple-dark">;
          <ArrowLeft className="mr - 2 h - 4 w-4" />;
import { Button  } from '@/components / ui / button';
import Link from './next / link';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProfileErrorStateProps {
  error: string | null
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
=======
interface ProfileErrorStateProps {
  error: string | null
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className='min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4'>
      <div className='text-red-400 mb-4 text-xl'>
        {error |'Something went wrong'}
      </div>
      <Button asChild>
        <Link
          href='/talents'
          className='bg-zion-purple hover:bg-zion-purple-dark'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          Back to Talent Directory
        </Link>
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    </div>
=======

    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
interface ProfileErrorStateProps {;
  error: string | null;
}

<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileErrorState(): any ({ error }: ProfileErrorStateProps) {;
  return (    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
;
=======
  );
}
export /**
 * ProfileErrorState - Function description
 */
function ProfileErrorState() {
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p-4">;
      <div className="text - red - 400 mb - 4 text-xl">{error || "Something went wrong"}</div>;
      <Button as_child>;
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple-dark">;
          <ArrowLeft className="mr - 2 h - 4 w-4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
