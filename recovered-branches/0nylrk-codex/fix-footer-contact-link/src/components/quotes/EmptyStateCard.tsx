import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";
type EmptyStateCardProps = {
  type: "active" | "archived";
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";

=======
=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";
type EmptyStateCardProps = {
  type: "active" | "archived";
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
  
  return (

    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? ("
            <MessageSquare className="h-8 w-8 text-white" />
          ) : ("
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}


<<<<<<< HEAD
        </div>
        <h3 className="text-xl font-medium text-white mb-2">

          {isActive ? "No hire requests yet" : "No archived requests"}
        </h3>"
        <p className="text-zion-slate-light max-w-md mx-auto">
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."


>>>>>>> origin/cursor/delete-old-data-records-6bba
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>

<<<<<<< HEAD
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );

>>>>>>> origin/cursor/delete-old-data-records-6bba

};
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';

import { MessageSquare, ArchiveIcon  } from './lucide-react';
type EmptyStateCardProps = {"
  type: "active" | "archived";
}
;
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {";
  const is_active = type === "active";
;
  return ("
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

=======

  ),;
},; type EmptyStateCardProps = {

  type: 'active' | 'archived' 
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({};
  type;
}) => {'
  const isActive = type === 'active';"
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {"

  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) 
}</div> </p> </CardContent> </Card>) 
};
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
