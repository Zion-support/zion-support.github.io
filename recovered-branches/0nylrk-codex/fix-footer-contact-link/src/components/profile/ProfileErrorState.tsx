
<<<<<<< HEAD
import React from 'react',
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { ArrowLeft } from "lucide-react",
=======
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ArrowLeft } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProfileErrorStateProps {
  error: string | null
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4&quot;>
      <div className=&quot;text-red-400 mb-4 text-xl&quot;>{error || &quot;Something went wrong&quot;}</div>
      <Button asChild>
<<<<<<< HEAD
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
=======
        <Link to=&quot;/talents&quot; className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;>
          <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  )
}
