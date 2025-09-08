=
import { Heart  } from 'lucide-react;
import { cn  } from @/lib/utils';
import { useToast  } from '@/hooks/use-toast;
import { useRouter  } from next/router';
interface TalentCardSaveButtonProps  {profileId: string;
  profileName: string;
  isSaved: boolean;
  onToggleSave?: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
export function TalentCardSaveButton() {const { toast } = useToast()const router = null;
          localIsSaved ? "fill-red-500 text-red-500 : text-zion-slate";
        )}/>;
    </button>;
  )}variant: "default;
})}
}/> </button>)};
>

import React from "react";
import { Heart } from 'lucide-react
import { cn } from @/lib/utils;
import { useToast } from "@/hooks/use-toast";
import { useRouter } from next/router';

