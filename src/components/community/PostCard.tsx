import React from 'react'
import {formatDistanceToNow} from "date-fns"
import Link from "next/link"
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'

import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ForumPost } from "@/types/community"
import { logInfo } from '@/utils/productionLogger'
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';
export default PostCard;
}
}
      "transition-shadow hover: shadow-md",
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;


export default PostCard;
