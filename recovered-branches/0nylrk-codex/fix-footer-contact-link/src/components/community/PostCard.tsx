
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForumPost } from "@/types/community";
import { ProfileBadge } from "@/components/profile/ProfileBadge";
interface PostCardProps {
  post: ForumPost,
  compact?: boolean
}

export const PostCard = ({ post, compact = false }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true}),

  return (
    <Card className = $2;
      post.isPinned && "border-zion-purple/50",
      post.isFeatured && "bg-zion-purple/5"
    )}>
      <CardHeader className = $2;
export default PostCard,
