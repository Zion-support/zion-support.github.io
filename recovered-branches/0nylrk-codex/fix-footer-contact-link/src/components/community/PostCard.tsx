
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { ForumPost } from "@/types/community",
import { ProfileBadge } from "@/components/profile/ProfileBadge",
=======
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from &quot;lucide-react&quot;;
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { ForumPost } from &quot;@/types/community&quot;;
import { ProfileBadge } from &quot;@/components/profile/ProfileBadge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PostCardProps {
  post: ForumPost,
  compact?: boolean
}

export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card className={cn(
      &quot;transition-shadow hover:shadow-md&quot;,
      post.isPinned && &quot;border-zion-purple/50&quot;,
      post.isFeatured && &quot;bg-zion-purple/5&quot;
    )}>
      <CardHeader className=&quot;flex flex-row items-start gap-4 space-y-0&quot;>
        <Avatar className=&quot;h-10 w-10&quot;>
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className=&quot;flex-1&quot;>
          <div className=&quot;flex items-center&quot;>
            <Link to={`/community/post/${post.id}`} className=&quot;font-semibold text-lg hover:text-zion-purple transition-colors&quot;>
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className=&quot;h-4 w-4 text-green-500 ml-2&quot; />
            )}
            {post.isPinned && (
              <Pin className=&quot;h-4 w-4 text-amber-500 ml-2&quot; />
            )}
            {post.isLocked && (
              <Lock className=&quot;h-4 w-4 text-red-500 ml-2&quot; />
            )}
          </div>
          <div className=&quot;text-sm text-muted-foreground&quot;>
            Posted by {post.authorName} {timeAgo}
          </div>
          
          <div className=&quot;flex flex-wrap gap-2 mt-2&quot;>
            {post.tags?.map(tag => (
              <Badge key={tag} variant=&quot;outline&quot; className=&quot;bg-zion-purple/10 hover:bg-zion-purple/20&quot;>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      {!compact && (
        <CardContent>
          <div className=&quot;line-clamp-3&quot;>{post.content}</div>
        </CardContent>
      )}

      <CardFooter className=&quot;flex justify-between&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;flex items-center gap-1&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
              <ThumbsUp className=&quot;h-4 w-4 mr-1&quot; />
              <span>{post.upvotes}</span>
            </Button>
            <Button variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;px-2&quot;>
              <ThumbsDown className=&quot;h-4 w-4 mr-1&quot; />
              <span>{post.downvotes}</span>
            </Button>
          </div>
          <div className=&quot;flex items-center gap-1&quot;>
            <MessageSquare className=&quot;h-4 w-4&quot; />
            <span className=&quot;text-sm&quot;>{post.replyCount} replies</span>
          </div>
        </div>
        
        {post.isFeatured && (
          <div>
            <Badge className=&quot;bg-zion-purple&quot;>Featured</Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  )
},

export default PostCard,
