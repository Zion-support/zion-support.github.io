<<<<<<< HEAD
import React from 'react'
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
interface TalentCardSaveButtonProps {
profileId: string;,
profileName: string;,
isSaved: boolean;
onToggleSave?: (id: string isSaved: boolean) => void;,
isAuthenticated: boolean,
export function TalentCardSaveButton({
</button>
)
}variant: "default";
=======
import React from 'react';
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";,
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
interface TalentCardSaveButtonProps {
  profileId: string;
profileName: string;
  isSaved: boolean;
  onToggleSave?: (id: string isSaved: boolean) => void;
isAuthenticated: boolean,
export function TalentCardSaveButton({
    </button>
}
  )}
}variant: "default"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
})
}
}/> </button>)
}";
}