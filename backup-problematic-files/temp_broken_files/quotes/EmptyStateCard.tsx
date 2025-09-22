
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
import { MessageSquare, ArchiveIcon } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/EmptyStateCard.tsx
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";

          }
=======
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type ;}) => {;

    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;"

      <CardContent>;
"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;"
</div>"
            <MessageSquare className="h-8 w-8 text-white" />;"
            <ArchiveIcon className="h-8 w-8 text-white" />;"

        </div>;"
        <h3 className="text-xl font-medium text-white mb-2">;"
</h3>
        </h3>;"
        <p className="text-zion-slate-light max-w-md mx-auto">;"
</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
pr-12325
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/quotes/EmptyStateCard.tsx
