
<<<<<<< HEAD
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) :(;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' :'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
    </Card>;
  ),;
},;
=======
import React from "react",
import { Card, CardContent } from "@/components/ui/card",import { MessageSquare, ArchiveIcon } from 'lucide-react'

type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
import React from "react";

type EmptyStateCardProps = {_type: 'active' | 'archived';};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = (_{_type}) => {_const _isActive = type === 'active';
  
  return (
    <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light text-center py-12&quot;>
      <CardContent>
        <div className=&quot;mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4&quot;>
          {isActive ? (
            <MessageSquare className=&quot;h-8 w-8 text-white&quot; />
          ) : (
            <ArchiveIcon className=&quot;h-8 w-8 text-white&quot; />
          )}
        </div>
        <h3 className=&quot;text-xl font-medium text-white mb-2&quot;>
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className=&quot;text-zion-slate-light max-w-md mx-auto&quot;>
          {isActive 
            ? &quot;You haven't received any hire requests yet. Promote your profile and services to attract potential clients.&quot;
            : &quot;You haven't archived any hire requests yet. Archive requests to keep your active list organized.&quot;
          }        </p>
      </CardContent>
    </Card>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
