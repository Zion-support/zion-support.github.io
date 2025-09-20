<<<<<<< HEAD: src.broken/components/profile/ProfileErrorState.tsx

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
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  )
}
=======
import React from 'react',
import { Button } from '@/components/ui/Button',
import { AlertTriangle } from 'lucide-react',

interface ProfileErrorStateProps {
  error: string,
  onRetry?: () => void
}

export const ProfileErrorState: React.FC<ProfileErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Not Found</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        {onRetry && (
          <Button onClick={onRetry} className="bg-zion-blue hover:bg-zion-blue-dark text-white">
            Try Again
          </Button>
        )}
      </div>
    </div>
  ),
},
>>>>>>> origin/zion-enhancements-v6:src/components/profile/ProfileErrorState.tsx
