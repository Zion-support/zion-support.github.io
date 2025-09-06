
import React from "react";
interface TalentDirectoryHeaderProps {
  title: string;
<<<<<<< HEAD
  description: string
}
=======
  description: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function TalentDirectoryHeader({
  title
  description
}: TalentDirectoryHeaderProps) {
  return (
    <div className="bg-zion-blue-dark border-b border-zion-blue-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {title}
        </h1>
        <p className="text-zion-slate-light max-w-2xl">{description}</p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
