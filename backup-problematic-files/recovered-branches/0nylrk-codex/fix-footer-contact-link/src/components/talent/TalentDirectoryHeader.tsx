<<<<<<< HEAD
import React from './react';
interface TalentDirectoryHeaderProps {
  title: string;
  description: string
}
export function TalentDirectoryHeader({
  title
  description
}: TalentDirectoryHeaderProps) {
interface TalentDirectoryHeaderProps {;
  title: string,;
  description: string;
}
=======

import React from "react",;
;
interface TalentDirectoryHeaderProps {;
  title:string,;
  description:string;
}
;
export function TalentDirectoryHeader({ title, description } TalentDirectoryHeaderProps) {;
  return (;
    <div className="bg-zion-blue-dark border-b border-zion-blue-light">;
      <div className="container mx-auto px-4 py-8 md:py-12">;
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">;
          {title}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        </h1>;
        <p className="text-zion-slate-light max-w-2xl">;
          {description}
        </p>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
export /**
 * TalentDirectoryHeader - Function description
 */
function TalentDirectoryHeader() {
  return (
    <div className="bg - zion - blue - dark border - b border - zion - blue - light">;
      <div className="container mx - auto px - 4 py - 8 md:py - 12">;
        <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 2">;
          {title}
        </h1>;
        <p className="text - zion - slate - light max - w-2xl">{description}</p>;
      </div>;
    </div>);
=======
  ),; interface TalentDirectoryHeaderProps {
  title: string;
description: string 
}export function TalentDirectoryHeader ({
  title, description 
}: TalentDirectoryHeaderProps) {
  return (<div className="bg-zion-blue-dark border-b border-zion-blue-light" > <div className="container mx-auto px-4 py-8 md:py-12" > <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" > {
  title 
}</h1> <p className="text-zion-slate-light max-w-2xl" > {
  description 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}