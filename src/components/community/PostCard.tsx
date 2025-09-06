<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> main
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForumPost } from "@/types/community";
import { logInfo } from '@/utils/productionLogger';
interface PostCardProps {
  post: ForumPost,
  compact?: boolean
}

import React from 'react',
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { ThumbsUp, ThumbsDown, MessageSquare, Pin, Lock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { ForumPost } from "@/types/community",
import { logInfo } from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
interface PostCardProps {
  post: ForumPost
  compact?: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
<<<<<<< HEAD
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent)
PostCard.displayName = 'PostCard'
export default PostCard

=======

const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),

  return (
    <Card data-testid="post-card" className={cn(
      "transition-shadow hover:shadow-md"
export const PostCard = React.memo(PostCardComponent);
PostCard.displayName = 'PostCard';
export default PostCard;
}
}
=======
export default PostCard;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======







      "transition-shadow hover: shadow-md",
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
const PostCardComponent = ({ post, compact = false }: PostCardProps) => {
export default PostCard;


export default PostCard;
>>>>>>> main
