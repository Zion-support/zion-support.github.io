import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
interface SaveTalentButtonProps {
  talentId: string;
  onSave: (talentId: string) => void;
  isSaved: boolean;
}

export function SaveTalentButton({
  talentId,
  onSave,
  isSaved,
}: SaveTalentButtonProps) {
  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      size="sm"
      className={
        isSaved
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
    >
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
}
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      size="sm"
      className={
        isSaved
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"
      }
    >
<<<<<<< HEAD
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' : ''} mr-1`} />
      {isSaved ? 'Saved' : 'Save'}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <Star className={`h-4 w-4 ${isSaved ? "fill-current" : ""} mr-1`} />
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
