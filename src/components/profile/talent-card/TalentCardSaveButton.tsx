import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';

export function TalentCardSaveButton({
  profileId,
  profileName,
  isSaved,
  onToggleSave,
  isAuthenticated,
}: TalentCardSaveButtonProps) {
  const { toast } = useToast();
  const router = useRouter();
  // Using router.asPath for current path
  const [localIsSaved, setLocalIsSaved] = React.useState(isSaved);

  // Handle save toggle

    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to save talents to your favorites',
        variant: 'destructive',
      });
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

      />
    </button>
  );

}variant: "default" ;
}) ;
};
}/> </button>) ;
}"

}