
import React from 'react',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
