<<<<<<< HEAD
<<<<<<< HEAD
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
  return (

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

type EmptyStateCardProps = {;
  type: 'active' | 'archived';
};

<<<<<<< HEAD
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';


  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
          ) :(;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
import React from "react",
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";
import React from "react",
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type EmptyStateCardProps = {
  type: "active" | "archived";
}
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from "lucide-react",
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

<<<<<<< HEAD

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',

  

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
  
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          {isActive ? "No hire requests yet" : "No archived requests"}
        </h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
{isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."

          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
}

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
          }
        </p>
      </CardContent>
    </Card>
  )
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
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' :'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
          {isActive;
=======
          {isActive ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {isActive ;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."


};
<<<<<<< HEAD
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
<<<<<<< HEAD
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
  );

};

};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
