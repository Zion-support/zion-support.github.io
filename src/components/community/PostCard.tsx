
import React from 'react';
import Link from "next/link";


interface PostCardProps {_post: ForumPost;
  compact?: boolean;}

const _PostCardComponent = (_{_post, _compact = false}: PostCardProps) => {_logInfo('PostCardComponent rendering with post:', _{ data: post ? post.id : 'NO POST'});
  const _timeAgo = formatDistanceToNow(new Date(post.createdAt), {_addSuffix: true});

  return (
    <Card data-testid="post-card" className={_cn(
      "transition-shadow hover:shadow-md", _post.isPinned && "border-zion-purple/50", _post.isFeatured && "bg-zion-purple/5"
    )}>
      <p>DEBUG: PostCard ID: {_post?.id}</p>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={_post.authorAvatar} alt={_post.authorName} />
          <AvatarFallback>{_post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={_`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {_post.title}
            </Link>
            {_post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
            )}
            {_post.isPinned && (
              <Pin className="h-4 w-4 text-amber-500 ml-2" />
            )}
            {_post.isLocked && (
              <Lock className="h-4 w-4 text-red-500 ml-2" />
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {_post.authorName} {_timeAgo}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {_post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                {_tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      {_!compact && (
        <CardContent>
          <div className="line-clamp-3">{post.content}</div>
        </CardContent>
      )}

      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{_post.upvotes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{_post.downvotes}</span>
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{_post.replyCount} replies</span>
          </div>
        </div>
        
        {_post.isFeatured && (
          <div>
            <Badge className="bg-zion-purple">Featured</Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export const _PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';

export default PostCard;
