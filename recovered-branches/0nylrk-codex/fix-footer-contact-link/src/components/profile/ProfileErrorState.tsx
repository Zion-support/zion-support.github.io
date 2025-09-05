
import React from 'react';

interface ProfileErrorStateProps {_error: string | null;}

export function ProfileErrorState(_{_error}: ProfileErrorStateProps) {_return (
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>
      <Button asChild>
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Talent Directory
        </Link>
      </Button>
    </div>
  );
}
