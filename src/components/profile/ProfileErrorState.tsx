import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
interface ProfileErrorStateProps {
  error: string | null
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react',
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
interface ProfileErrorStateProps {
  error: string | null
>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

interface ProfileErrorStateProps {
  error: string | null
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
    </div>;
  );
};
}
}
    </div>
  )
}
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react',;
import { Button } from "@/components/ui/button",;
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
;
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
