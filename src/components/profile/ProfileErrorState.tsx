
import React from 'react',
import { Button } from "@/components/ui/button",
import Link from "next/link",import { ArrowLeft } from 'lucide-react'

interface ProfileErrorStateProps {
  error: string | null
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4&quot;>
      <div className=&quot;text-red-400 mb-4 text-xl&quot;>{error || &quot;Something went wrong&quot;}</div>
import Link from "next/link";

interface ProfileErrorStateProps {_error: string | null;}

export function ProfileErrorState(_{_error}: ProfileErrorStateProps) {_return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
        <Link href="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />          Back to Talent Directory
        </Link>
      </Button>
    </div>
  )
}
