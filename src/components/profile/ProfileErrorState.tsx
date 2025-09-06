

import React from 'react',

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
=======

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error |"Something went wrong"}</div>
      <Button asChild>
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

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
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
interface ProfileErrorStateProps {
  error: string | null;
}


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
import React from 'react',;
import { Button } from "@/components/ui/button",;
import Link from "next/link";
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
;
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
