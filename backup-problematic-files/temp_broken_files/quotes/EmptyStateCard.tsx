
import React from "react",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { MessageSquare, ArchiveIcon } from 'lucide-react';'
;
type EmptyStateCardProps = {;'
  type:'active' | 'archived';'
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
</EmptyStateCardProps>'
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;"
</Card>
      <CardContent>;
</CardContent>"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;"
</div>"
            <MessageSquare className="h-8 w-8 text-white" />;"
</MessageSquare>"
            <ArchiveIcon className="h-8 w-8 text-white" />;"
</ArchiveIcon>
        </div>;"
        <h3 className="text-xl font-medium text-white mb-2">;"
</h3>
        </h3>;"
        <p className="text-zion-slate-light max-w-md mx-auto">;"
</p>
        </p>;
      </CardContent>;
    </Card>;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({;
</EmptyStateCardProps>)"
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">{";"  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) ;"
</CardContent>
}</div> </p> </CardContent> </Card>) ;"