return (

<<<<<<< HEAD
<<<<<<< HEAD
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
interface ProfileErrorStateProps {
  error: string | null

import React from 'react',
xport function ProfileErrorState({ error }: ProfileErrorStateProps) {
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
interface ProfileErrorStateProps {
  error: string | null

import React from 'react',
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
=======

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
  error: string | null
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className='min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4'>
      <div className='text-red-400 mb-4 text-xl'>
        {error |'Something went wrong'}
      </div>
      <Button asChild>
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
<<<<<<< HEAD
interface ProfileErrorStateProps {
  error: string | null
}

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
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { ArrowLeft } from 'lucide-react'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ProfileErrorStateProps {
  error: string | null
}

<<<<<<< HEAD
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface ProfileErrorStateProps {
  error: string | null;
}




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
};
}
}
}
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    </div>


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
};
}
}
    </div>
  )
}
import React from 'react',;
import { Button } from "@/components/ui/button",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
interface ProfileErrorStateProps {;
  error: string | null;
}
;
export function ProfileErrorState({ error }: ProfileErrorStateProps) {;
  return (;
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
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <Link href="/talents" className="bg - zion - purple hover: bg - zion - purple - dark">;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;
          Back to Talent Directory;
        </Link>;
      </Button>;
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
