
<<<<<<< HEAD
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { ForumPost } from "@/types/community";
import { ProfileBadge } from "@/components/profile/ProfileBadge";
interface PostCardProps {

  post: ForumPost
  compact?: boolean
}
export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card className={cn(
      "transition-shadow hover: shadow-md";
      post.isPinned && "border-zion-purple/50"
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <Link to={`/community/post/${post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">
              {post.title}
            </Link>
            {post.isAnswered && (
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
=======
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ForumPost} from "@/types/community";
import {ProfileBadge} from "@/components/profile/ProfileBadge";
interface PostCardProps {;
  post: ForumPost,;
  compact?: boolean;
}

export const PostCard = ({ post, compact = false }: PostCardProps) => {;
  const timeAgo = formatDistanceToNow(new Date(post && post.createdAt), { addSuffix: true }),;

  return (
    <CardclassName={cn(
      "transition-shadow hover: shadow-md"
      post && post.isPinned && "border-zion-purple/50",
      post && post.isFeatured && "bg-zion-purple/5"
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;
        <Avatar className="h-10 w-10">;
          <AvatarImage src={post && post.authorAvatar} />;
          <AvatarFallback>{post && post.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;
        <div className="flex-1">;
          <div className="flex items-center">;
            <Link to={`/community/post/${post && post.id}`} className="font-semibold text-lg hover:text-zion-purple transition-colors">;
              {post && post.title}
            </Link>;
            {post && post.isAnswered && (;
              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            )}
            {post && post.isPinned && (;
              <Pin className="h-4 w-4 text-amber-500 ml-2" />;
            )}
            {post && post.isLocked && (;
              <Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
<<<<<<< HEAD
          </div>
          <div className="text-sm text-muted-foreground">
            Posted by {post.authorName} {timeAgo}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      {!compact && (
        <CardContent>
          <div className="line-clamp-3">{post.content}</div>
        </CardContent>
      )}
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{post.upvotes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{post.downvotes}</span>
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{post.replyCount} replies</span>
          </div>
        </div>
        {post.isFeatured && (
          <div>
            <Badge className="bg-zion-purple">Featured</Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
=======
          </div>;
          <div className="text-sm text-muted-foreground">;
            Posted by {post && post.authorName} {timeAgo}
          </div>;

          <div className="flex flex-wrap gap-2 mt-2">;
            {post && post.tags?.map(tag => (;
              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;

      {!compact && (;
        <CardContent>;
          <div className="line-clamp-3">{post && post.content}</div>;
        </CardContent>;
      )}

      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-4">;
          <div className="flex items-center gap-1">;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsUp className="h-4 w-4 mr-1" />;
              <span>{post && post.upvotes}</span>;
            </Button>;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsDown className="h-4 w-4 mr-1" />;
              <span>{post && post.downvotes}</span>;
            </Button>;
          </div>;
          <div className="flex items-center gap-1">;
            <MessageSquare className="h-4 w-4" />;
            <span className="text-sm">{post && post.replyCount} replies</span>;
          </div>;
        </div>;

        {post && post.isFeatured && (;
          <div>;
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}
      </CardFooter>;
    </Card>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default PostCard;

