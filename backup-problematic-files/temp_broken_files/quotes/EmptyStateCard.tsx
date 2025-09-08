<<<<<<< HEAD

import { MessageSquare, ArchiveIcon } from 'lucide-react';


=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
<<<<<<< HEAD



=======
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD



=======
          ) :(;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
<<<<<<< HEAD



=======
          {isActive ? 'No hire requests yet' :'No archived requests'}
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
<<<<<<< HEAD



=======
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



=======
  type: 'active' | 'archived' ;
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;
  type ;
}) => {';
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">{";"  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) ;
}</div> </p> </CardContent> </Card>) ;
};"'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
