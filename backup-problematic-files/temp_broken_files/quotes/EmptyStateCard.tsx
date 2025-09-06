
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx

=======
          ) :(;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx

=======
          {isActive ? 'No hire requests yet' :'No archived requests'}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
=======
          {isActive ? 'No hire requests yet' :'No archived requests'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx

=======
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
=======
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          }
        </p>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;
},; import {;
  {;
  {;
  MessageSquare, ArchiveIcon ;
}from 'lucide-react' type EmptyStateCardProps = {';
<<<<<<< HEAD
  type: 'active' | 'archived' ;
=======
  type: 'active' | 'archived' 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;
  type ;
}) => {';
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">{";"  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) ;
}</div> </p> </CardContent> </Card>) ;
:temp_broken_files/quotes/EmptyStateCard.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/quotes/EmptyStateCard.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
