onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}


<<<<<<< HEAD
import {formatDistanceToNow} from "date-fns";
import {ThumbsUp, ThumbsDown, CheckCircle} from "@/components/icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ForumReply} from "@/types/community";
import {cn} from "@/lib/utils";
interface ReplyCardProps {;
  reply: ForumReply,;
import { formatDistanceToNow } from "date-fns",
import { ThumbsUp, ThumbsDown, CheckCircle } from "@/components/icons",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";
interface ReplyCardProps {}
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}
  className
}: ReplyCardProps) => {

  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })
  return (
    <Card className={cn(      className    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;

        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply.authorAvatar} />;
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    )}>;

      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;

        <Avatar className="h-8 w-8">;
          <AvatarImage src={reply && reply.authorAvatar} />;
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;

<<<<<<< HEAD

=======
        </Avatar>;"
        <div className="flex-1">;"
          <div className="flex items-center">;"
            <span className="font-medium">;"

              <Badge variant="outline" className="ml-2 text-xs">;
                {reply.authorRole}
              </Badge>
            )}
            {reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
        <div>{reply && reply.content}</div>;
      </CardContent>;

<<<<<<< HEAD
      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="sm" className="px-2">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <ThumbsUp className="h-4 w-4 mr-1" />;
            <span>{reply && reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px-2">;"
            <ThumbsDown className="h-4 w-4 mr-1" />;
            <span>{reply && reply.downvotes}</span>;
          </Button>;
        </div>;
<<<<<<< HEAD

        {canMarkAnswer && !reply && reply.isAnswer && (;
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;

=======


        {canMarkAnswer && !reply && reply.isAnswer && (;"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <CheckCircle className="h-4 w-4 mr-1" />;
            Mark as Answer;
          </Button>;
        )}

      </CardFooter>
    </Card>
  )
}
export default ReplyCard;
>>>>>>> origin/cursor/delete-old-data-records-6bba


      </CardFooter>;
    </Card>;
  )
};

              </Badge>;
            )}
            {reply && reply.isAnswer && (;
              <Badge className="ml-2 bg-green-500 text-white">;
                <CheckCircle className="h-3 w-3 mr-1" />;
                Answer;
              </Badge>;
            )}
      </CardFooter>;
    </Card>;
  )
};

export default ReplyCard;
export default ReplyCard;
export default ReplyCard;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df