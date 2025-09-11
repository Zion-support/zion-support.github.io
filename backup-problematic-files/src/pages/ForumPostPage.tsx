import { useState } from './react';
import Link from './next / link';
import { use_router  } from './next / router';
import { SEO  } from '@/components / SEO';
import { Button  } from '@/components / ui / button';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components / ui / avatar';
import { Badge  } from '@/components / ui / badge';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
import { Alert, AlertDescription  } from '@/components / ui / alert';
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from 'lucide-react'import { formatDistanceToNow, format  } from './date - fns';
import { ForumPost, ForumReply  } from '@/types / community';
import { use_auth  } from '@/hooks / use_auth';
import ReplyCard from "@/components / community / ReplyCard";
import ReplyForm from "@/components / community / ReplyForm";
import { use_toast } from '@/hooks / use - toast';
// Mock data for a forum post;
const mock_post: ForumPost = {
  id: "1",
  title: "Best practices for AI model fine - tuning",
  content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\n_first, it's important to carefully prepare your training data. Clean, well - structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine - tuning process.\n\n_second, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm - up period tends to yield more stable results.\n\n_third, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\n_finally, evaluating your fine - tuned model requires looking beyond standard metrics. I always test with diverse real - world examples to ensure the model generalizes well.\n\n_what has been your experience with fine - tuning? Any techniques you've found particularly effective?";
  author_id: "user1",
  author_name: "Alex Johnson",
  author_avatar: "https://i.pravatar.cc / 150?img = 3",
  author_role: "Verified Talent",
  category_id: "ai - tools",
  tags: ["machine - learning", "fine - tuning", "gpt"];
  created_at: "2025 - 04 - 01T12:00:00Z",
  updated_at: "2025 - 04 - 01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  reply_count: 4,
  is_answered: true,
  is_featured: true;
}
// Mock data for replies;
const mock_replies: ForumReply[] = [;
  {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from 'lucide-react'import { formatDistanceToNow, format } from "date-fns";
import { ForumPost, ForumReply } from "@/types/community";
import { useAuth } from "@/hooks/useAuth";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
import {useToast} from "@/hooks/use-toast";
// Mock data for a forum post;
const mockPost: ForumPost = {;
  id: "1",;
  title: "Best practices for AI model fine-tuning",;
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?";
  authorId: "user1",;
  authorName: "Alex Johnson",;
  authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
  authorRole: "Verified Talent",;
  categoryId: "ai-tools",;
  tags: ["machine-learning", "fine-tuning", "gpt"];
  createdAt: "2025-04-01T12:00:00Z",;
  updatedAt: "2025-04-01T12:00:00Z",;
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 4,;
  isAnswered: true,;
  isFeatured: true;
};
// Mock data for replies;
const mockReplies: ForumReply[] = [;
  {;
    id: "reply1",;
    postId: "1",;
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.",;
    authorId: "user2",;
    authorName: "Sarah Chen",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=5",;
    createdAt: "2025-04-01T14:30:00Z",;
    updatedAt: "2025-04-01T14:30:00Z",;
    upvotes: 12,;
    downvotes: 0;
  };
  {;
    id: "reply2",;
    postId: "1",;
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.",;
    authorId: "user3",;
    authorName: "Michael Wong",;
    authorRole: "AI Engineer",;
    createdAt: "2025-04-01T16:15:00Z",;
    updatedAt: "2025-04-01T16:15:00Z",;
    upvotes: 8,;
    downvotes: 0;
  };
  {;
    id: "reply3",;
    postId: "1",;
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";
    authorId: "user4",;
    authorName: "Emma Davis",;
    authorRole: "ML Research Lead",;
    createdAt: "2025-04-02T09:45:00Z",;
    updatedAt: "2025-04-02T09:45:00Z",;
    upvotes: 15,;
    downvotes: 0,;
    isAnswer: true;
  };
  {;
    id: "reply4",;
    postId: "1",;
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",;
    authorId: "user5",;
    authorName: "David Lin",;
    createdAt: "2025-04-02T11:20:00Z",;
    updatedAt: "2025-04-02T11:20:00Z",;
    upvotes: 4,;
    downvotes: 0;
  }
];
export default function ForumPostPage() {;
  // Using `useParams` without type arguments avoids issues when TypeScript;
  // can't determine the generic type for the helper from React Router.;
  // Cast the result instead to provide the expected shape.;
  const router = useRouter();
  const postId = router && router.query.postId as string;
  const { user } = useAuth();
  const { toast } = useToast();
  const [post, setPost] = useState(mockPost);
  const [replies, setReplies] = useState(mockReplies);
  // Check if this is the user's own post;
  const isAuthor = user?.id === post?.authorId;
  // Check if user is admin/mod;
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
      return;
    }
  const handlePinPost = () => {;
    if (!isAdminOrMod) return;
    setPost({ ...post, isPinned: !post && post.isPinned }),;
  const handleLockPost = () => {;
    if (!isAdminOrMod) return;
    setPost({ ...post, isLocked: !post && post.isLocked }),;
  const timeAgo = formatDistanceToNow(new Date(post && post.createdAt), { addSuffix: true }),;
  const formattedDate = format(new Date(post && post.createdAt), "MMMM d, yyyy 'at' h: mm a"),;
}
  );
}
  )
}
    id: "reply1",
    post_id: "1",
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine - tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.",
    author_id: "user2",
    author_name: "Sarah Chen",
    author_avatar: "https://i.pravatar.cc / 150?img = 5",
    created_at: "2025 - 04 - 01T14:30:00Z",
    updated_at: "2025 - 04 - 01T14:30:00Z",
    upvotes: 12,
    downvotes: 0;
  }
  {
    id: "reply2",
    post_id: "1",
    content: "Have you tried using LoRA or QLoRA for efficient fine - tuning? I've found them to be much more resource - friendly while maintaining good performance.",
    author_id: "user3",
    author_name: "Michael Wong",
    author_role: "AI Engineer",
    created_at: "2025 - 04 - 01T16:15:00Z",
    updated_at: "2025 - 04 - 01T16:15:00Z",
    upvotes: 8,
    downvotes: 0;
  }
  {
    id: "reply3",
    post_id: "1",
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine - tuning process.\n\n_also, when fine - tuning language models, I've found that carefully crafting your prompts / templates for training can make a huge difference in the quality of the outputs.";
    author_id: "user4",
    author_name: "Emma Davis",
    author_role: "ML Research Lead",
    created_at: "2025 - 04 - 02T09:45:00Z",
    updated_at: "2025 - 04 - 02T09:45:00Z",
    upvotes: 15,
    downvotes: 0,
    is_answer: true;
  }
  {
    id: "reply4",
    post_id: "1",
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",
    author_id: "user5",
    author_name: "David Lin",
    created_at: "2025 - 04 - 02T11:20:00Z",
    updated_at: "2025 - 04 - 02T11:20:00Z",
    upvotes: 4,
    downvotes: 0;
  }
];
export default /**
 * ForumPostPage - Function description
 */
function ForumPostPage() {
  // Using `use_params` without type arguments avoids issues when TypeScript;
  // can't determine the generic type for the helper from React Router.;
  // Cast the result instead to provide the expected shape.;
  const router = use_router ();
  const post_id = router.query.post_id as string;
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [post, set_post] = useState (mock_post);
  const [replies, set_replies] = useState (mock_replies);
  // Check if this is the user's own post;
  const is_author = user?.id === post?.author_id;
  // Check if user is admin / mod;
  const isAdminOrMod = user?.user_type === 'admin' || user?.role === 'admin';
      return;
    }
  const handlePinPost = () =>: any {
    // Check condition
if (return) {
  $2
}
    set_post ({ ...post, is_pinned: !post.is_pinned }),
  const handleLockPost = () =>: any {
    // Check condition
if (return) {
  $2
}
    set_post ({ ...post, is_locked: !post.is_locked }),
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),
  const formatted_date = format (new Date (post.created_at), "MMMM d, yyyy 'at' h: mm a"),
}
  );
}