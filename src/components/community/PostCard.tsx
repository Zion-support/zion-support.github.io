<<<<<<< HEAD
  logInfo('PostCardComponent rendering with post:', { data: post ? post.id : 'NO POST' }),
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md";
<<<<<<< HEAD

export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';

export default PostCard;
