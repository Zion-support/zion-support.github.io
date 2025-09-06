<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx

import React from "react",

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
  return (
=======

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
          ) : (;
=======
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react",
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";

type EmptyStateCardProps = {
  type: "active" | "archived";
}
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

<<<<<<< HEAD
<<<<<<< HEAD
=======

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',

  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? (
            <MessageSquare className="h-8 w-8 text-white" />
          ) : (
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          {isActive ? "No hire requests yet" : "No archived requests"}
        </h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
<<<<<<< HEAD

<<<<<<< HEAD
=======
{isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."

            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
},;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
  return (;
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
<<<<<<< HEAD
          {isActive ? 'No hire requests yet' : 'No archived requests'}
=======
          {isActive ? 'No hire requests yet' :'No archived requests'}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
<<<<<<< HEAD
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
=======
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        </p>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD

};

=======
=======

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
=======
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."


};
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { MessageSquare, ArchiveIcon  } from './lucide-react';
type EmptyStateCardProps = {
  type: "active" | "archived";
}
;
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {
  const is_active = type === "active";
;
  return (
    <Card className="bg - zion - blue - dark border border - zion - blue - light text - center py - 12">;
      <CardContent>;
        <div className="mx - auto w - 16 h - 16 bg - zion - blue - light opacity - 60 rounded - full flex items - center justify - center mb - 4">;
          {is_active ? (
            <MessageSquare className="h - 8 w - 8 text - white" />) : (
            <ArchiveIcon className="h - 8 w - 8 text - white" />)}
        </div>;
        <h3 className="text - xl font - medium text - white mb - 2">;
          {is_active ? "No hire requests yet" : "No archived requests"}
        </h3>;
        <p className="text - zion - slate - light max - w-md mx - auto">;
          {is_active;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>;
      </CardContent>;
    </Card>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; type EmptyStateCardProps = {
  type: 'active' | 'archived' 
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
  type 
}) => {
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {
  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) 
}</div> </p> </CardContent> </Card>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
=======
  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
