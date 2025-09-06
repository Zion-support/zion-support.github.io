<<<<<<< HEAD
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import React from 'react',
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
interface ProfileErrorStateProps {
<<<<<<< HEAD
  error: string | null
=======
  error: string | null;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
          <ArrowLeft className='mr-2 h-4 w-4' />          Back to Talent Directory
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface ProfileErrorStateProps {
  error: string | null
}
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error |"Something went wrong"}</div>
      <Button asChild>
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
=======
          <ArrowLeft className='mr-2 h-4 w-4' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          Back to Talent Directory
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
