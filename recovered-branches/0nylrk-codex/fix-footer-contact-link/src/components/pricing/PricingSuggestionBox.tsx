
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}
==============
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({;
  suggestion;
  isLoading;
export const PricingSuggestionBox: React.FC<PricingSuggestionBoxProps> = ({
  suggestion;
  isLoading;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import {Button} from "@/components/ui/button";
import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Loader2, Info, ThumbsUp} from "lucide-react";
import {PricingSuggestion} from "@/services/pricingSuggestionService";
  suggestion: PricingSuggestion | null
  isLoading: boolean
  onApplySuggestion: () => void

  rateType: "hourly" | "fixed"
}


  onApplySuggestion
  suggestion,
  isLoading,
  onApplySuggestion,=======import React from "react",;
import { Button } from "@/components/ui/button",;
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip",;
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, Info, ThumbsUp } from "lucide-react",;
import { PricingSuggestion } from "@/services/pricingSuggestionService",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface PricingSuggestionBoxProps {;
  suggestion: PricingSuggestion | null,;
  isLoading: boolean,;
  onApplySuggestion: () => void,;
  rateType: "hourly" | "fixed";
}

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!suggestion) {;
    return null;
  }

};

},
;

      </Card>;
    ),;
  }
;
  if (!suggestion) {;
    return null,;
  }
;
  const confidenceColor = {;
    High:"bg-green-100 text-green-800",;
    Medium:"bg-yellow-100 text-yellow-800",;
    Low:"bg-red-100 text-red-800"}[suggestion.confidence],;
;
  return (;
}

};
},
;
  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion.confidence];
  return (;
=======
==============

};

=======
},
;

  const confidenceColor = {;
    High: "bg-green-100 text-green-800",;
    Medium: "bg-yellow-100 text-yellow-800",;
    Low: "bg-red-100 text-red-800"}[suggestion && suggestion.confidence],;

  return (
        <div className="bg-muted/50 rounded-md p-3 text-center">;
          <span className="text-2xl font-bold">;
            ${suggestion && suggestion.minRate.toFixed(0)} - ${suggestion && suggestion.maxRate.toFixed(0)}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
