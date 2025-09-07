<<<<<<< HEAD
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
=======
import { MessageSquare, ArchiveIcon } from 'lucide-react';

>>>>>>> merged-prs-20250907-203621
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
<<<<<<< HEAD
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
=======

>>>>>>> merged-prs-20250907-203621
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
          ) :(;
=======

>>>>>>> merged-prs-20250907-203621
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
<<<<<<< HEAD
          {isActive ? 'No hire requests yet' :'No archived requests'}
=======

>>>>>>> merged-prs-20250907-203621
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
<<<<<<< HEAD
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
=======

>>>>>>> merged-prs-20250907-203621
          }

        </p>;
      </CardContent>;
    </Card>;

  ),;
},; import {;
  {;
  {;
  MessageSquare, ArchiveIcon ;
}from 'lucide-react' type EmptyStateCardProps = {';
<<<<<<< HEAD
  type: 'active' | 'archived' ;
};
=======
<<<<<<< HEAD

};
pr-12325
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;
=======
  type: 'active' | 'archived' ;
};
>>>>>>> merged-prs-20250907-203621
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;
  type ;
}) => {';
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">{";"  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) ;
}</div> </p> </CardContent> </Card>) ;
<<<<<<< HEAD
};"'"
=======
<<<<<<< HEAD
:temp_broken_files/quotes/EmptyStateCard.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/quotes/EmptyStateCard.tsx
=======

};
'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
