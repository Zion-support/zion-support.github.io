  reply;
  onMarkAnswer, 
  canMarkAnswer = false;
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
      "transition-shadow";
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20";
