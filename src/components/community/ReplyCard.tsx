

interface ReplyCardProps {_reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;}

export const _ReplyCard = (_{_reply, _onMarkAnswer, _canMarkAnswer = false, _className}: ReplyCardProps) => {_const _timeAgo = formatDistanceToNow(new Date(reply.createdAt), _{ addSuffix: true});

  return (
    <Card className={_cn(
      "transition-shadow", _reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20", _className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={_reply.authorAvatar} alt={_reply.authorName} />
          <AvatarFallback>{_reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium">
              {_reply.authorName}
            </span>
            {_reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">
                {reply.authorRole}
              </Badge>
            )}
            {_reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            {_timeAgo}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div>{_reply.content}</div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{_reply.upvotes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsDown className="h-4 w-4 mr-1" />
            <span>{_reply.downvotes}</span>
          </Button>
        </div>
        
        {_canMarkAnswer && !reply.isAnswer && (
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            Mark as Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReplyCard;
