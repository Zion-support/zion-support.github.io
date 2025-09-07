
import React from "react";""
import { Badge } from "@/components/ui/badge";""
import { Award } from "lucide-react";"
interface TalentCardBadgesProps {
  // TODO: Implement
}
  featured: boolean | undefined;

}
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null;


  return ("
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">"
</div>"
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">"
</Badge>"
        <Award className="h-3 w-3" />"
</Award>
        <span>Featured</span>
      </Badge>
    </div>"
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;"
</div>"
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;"
</Badge>"
        <Award className="h-3 w-3" />;"
</Award>
        <span>Featured</span>;
      </Badge>;
    </div>;"
    <div className="absolute top - 0 left - 0 bg - gradient - to - r from - zion - purple to - zion - cyan p - 2 rounded - tl - lg rounded - br - lg z - 10">;"
</div>"
      <Badge className="bg - transparent border - 0 flex items - center gap - 1 text - white px - 0">;"
</Badge>"
        <Award className="h - 3 w - 3" />;"
</Award>
        <span > Featured</span>;
      </Badge>;)
    </div>);"

