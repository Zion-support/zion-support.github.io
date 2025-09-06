<<<<<<< HEAD


interface PostCardProps {
  post: ForumPost
  compact?: boolean
}

=======
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
>>>>>>> interface PostCardProps {
  post: ForumPost
  compact?: boolean
}
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent)
PostCard.displayName = 'PostCard'
export default PostCard

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';
export default PostCard;
}
}
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
interface PostCardProps {
  post: ForumPost
  compact?: boolean
}






      "transition-shadow hover: shadow-md",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import React from 'react';
import { formatDistanceToNow } from './date - fns';
import Link from './next / link';
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react';
import { formatDistanceToNow  } from './date - fns';
import { Card, CardContent, CardFooter, CardHeader  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import { cn  } from '@/lib / utils';
import { ForumPost  } from '@/types / community';
import { log_info } from '@/utils / production_logger';
interface PostCardProps {
  post: ForumPost,
  compact?: boolean;
}
const PostCardComponent = ({ post, compact = false }: PostCardProps) =>: any {
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),
  return (
    <Card data - testid="post - card" className={cn (
      "transition - shadow hover:shadow - md";
export const PostCard = React.memo (PostCardComponent);
PostCard.display_name = 'PostCard';
export default PostCard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
onst PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;

export default PostCard;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
