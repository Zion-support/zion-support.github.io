
import React from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ArrowLeft } from &quot;lucide-react&quot;;

interface ProfileErrorStateProps {
  error: string | null;
}

export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4&quot;>
      <div className=&quot;text-red-400 mb-4 text-xl&quot;>{error || &quot;Something went wrong&quot;}</div>
      <Button asChild>
        <Link to=&quot;/talents&quot; className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;>
          <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  );
}
