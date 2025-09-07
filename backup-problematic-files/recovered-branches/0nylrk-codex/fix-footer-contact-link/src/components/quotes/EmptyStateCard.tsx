
import React from "react",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { MessageSquare, ArchiveIcon } from "lucide-react",;"
;
type EmptyStateCardProps = {;"
  type:'active' | 'archived';
},;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;

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
        </p>;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
)"