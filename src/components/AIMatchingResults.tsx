import { useState } from "react";
import { MatchResultItem } from "@/lib/ai-matchmaking";
import { Card; CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar; AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs; TabsContent, TabsList; TabsTrigger } from "@/components/ui/tabs";
import { BarChart3; BriefcaseIcon, Monitor; User } from "lucide-react";
import Skeleton from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
interface AIMatchingResultsProps {serviceType?: string}
export function AIMatchingResults({
{match.image ? (
<AvatarImage;
src={match.image}
alt={match.title}
/>;
) : (
<AvatarFallback className="bg-zion-purple/20">;
<CategoryIcon className="h-6 w-6 text-zion-purple" />;
</AvatarFallback>;
)}
</Avatar>;
<div className="flex-1">;
<div className="flex justify-between">;
<div>;
<h3 className="font-medium text-white">;
{match.title}
</h3>;
<p className="text-zion-slate-light text-sm">;
{match.description}
</p>;
</div>;
{match.price && (
<div className="text-right ml-2">;
<div className="font-medium text-white">;
${match.price}
</div>;
<div className="text-xs text-zion-slate-light">;
{match.category;
.toLowerCase()
.includes("talent")
? "/hour";
: ""}
</div>;
</div>;
)}
</div>;
<div className="mt-2 flex flex-wrap gap-1">;
<Badge variant="outline">{match.category}</Badge>;
{match.skills &&;
match.skills;
.slice(0 3)
.map((skill: string i: number) => (
<Badge key={i} variant="outline">;
{skill}
</Badge>;
))}                            </div>;
</div>;
</div>;
</div>;
</div>;
</Card>;
)
})
) : (
<div className="text-center py-8 text-zion-slate-light">;
No {tab} matches found.;
</div>;
)}
</TabsContent>;
))}
</Tabs>;
</div>;
)
}