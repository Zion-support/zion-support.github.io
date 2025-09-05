
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { MessageSquare, ArchiveIcon } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
=======
import React from "react";

type EmptyStateCardProps = {_type: 'active' | 'archived';};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = (_{_type}) => {_const _isActive = type === 'active';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
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
<<<<<<< HEAD
        <h3 className=&quot;text-xl font-medium text-white mb-2&quot;>
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className=&quot;text-zion-slate-light max-w-md mx-auto&quot;>
          {isActive 
            ? &quot;You haven't received any hire requests yet. Promote your profile and services to attract potential clients.&quot;
            : &quot;You haven't archived any hire requests yet. Archive requests to keep your active list organized.&quot;
          }
=======
        <h3 className="text-xl font-medium text-white mb-2">
          {_isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
          {_isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </p>
      </CardContent>
    </Card>
  )
},
