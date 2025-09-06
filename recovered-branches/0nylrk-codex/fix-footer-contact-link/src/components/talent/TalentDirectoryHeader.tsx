
<<<<<<< HEAD
import React from "react";
=======
import React from "react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface TalentDirectoryHeaderProps {
  title: string;
  description: string
}
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
<<<<<<< HEAD
        <p className="text-zion-slate-light max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
=======
        <p className="text-zion-slate-light max-w-2xl">
import React from "react",;
interface TalentDirectoryHeaderProps {;
  title: string;
  description: string;
}
;
export function TalentDirectoryHeader({ title, description }: TalentDirectoryHeaderProps) {;
  return (;
    <div className="bg-zion-blue-dark border-b border-zion-blue-light">;
      <div className="container mx-auto px-4 py-8 md:py-12">;
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">;
          {title}
        </h1>
        <p className="text-zion-slate-light max-w-2xl">
          {description}
        </p>;
      </div>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
