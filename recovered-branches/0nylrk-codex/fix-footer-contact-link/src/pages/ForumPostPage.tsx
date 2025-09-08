<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle} from "lucide-react";
import {formatDistanceToNow, format} from "date-fns";
import {ForumPost, ForumReply} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
import {useToast} from "@/hooks/use-toast";


import { useState } from "react",
import { useParams, Link } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from "lucide-react",
import { formatDistanceToNow, format } from "date-fns",
import { ForumPost, ForumReply } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
import ReplyCard from "@/components/community/ReplyCard",
<<<<<<< HEAD
=======

import ReplyForm from "@/components/community/ReplyForm";
import { useToast } from "@/hooks/use-toast";
// Mock data for a forum post
import ReplyForm from "@/components/community/ReplyForm",
>>>>>>> origin/cursor/delete-old-data-records-6bba


// Mock data for a forum post
const mockPost: ForumPost = {
  id: "1",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: "Best practices for AI model fine-tuning",
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?",
  authorId: "user1",
  authorName: "Alex Johnson",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  authorAvatar: "https://i.pravatar.cc/150?img=3",
  authorRole: "Verified Talent",
  categoryId: "ai-tools",
  tags: ["machine-learning", "fine-tuning", "gpt"],
  createdAt: "2025-04-01T12:00:00Z",

  updatedAt: "2025-04-01T12:00:00Z",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  upvotes: 48,
  downvotes: 2,
  replyCount: 4,
  isAnswered: true,


<<<<<<< HEAD


const mockPost: ForumPost = {



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  {
    id: "reply2",
    postId: "1",
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good window.window.window.performance.",
    authorId: "user3",
    authorName: "Michael Wong",
    authorRole: "AI Engineer",
    createdAt: "2025-04-01T16:15:00Z",
    updatedAt: "2025-04-01T16:15:00Z",
    upvotes: 8,
    downvotes: 0
  },
  {
    id: "reply3",
    postId: "1",
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.",
    authorId: "user4",
    authorName: "Emma Davis",
    authorRole: "ML Research Lead",
    createdAt: "2025-04-02T09:45:00Z",
    updatedAt: "2025-04-02T09:45:00Z",
    upvotes: 15,
    downvotes: 0,
    isAnswer: true
  },
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "reply4"
    postId: "1"
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?"
    authorId: "user5"
    authorName: "David Lin"
    createdAt: "2025-04-02T11:20:00Z"
    updatedAt: "2025-04-02T11:20:00Z"
    upvotes: 4
    downvotes: 0
  }


<<<<<<< HEAD
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
import {useParams, Link} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle} from "lucide-react";
import {formatDistanceToNow, format} from "date-fns";
import {ForumPost, ForumReply} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
import {useToast} from "@/hooks/use-toast";
// Mock data for a forum post;
const mockPost: ForumPost = {;
  id: "1",;
  title: "Best practices for AI model fine-tuning",
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
}
// Mock data for replies;
const mockReplies: ForumReply[] = []
  {"
    id: "reply1""
    postId: "1"'"
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.""
    authorId: "user2""
    authorName: "Sarah Chen""
    authorAvatar: "https://i.pravatar.cc/150?img=5""
    createdAt: "2025-04-01T14:30:00Z""
    updatedAt: "2025-04-01T14:30:00Z"
    upvotes: 12;
    downvotes: 0;
  {"
    id: "reply2""
    postId: "1"'"
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.""
    authorId: "user3""
    authorName: "Michael Wong""
    authorRole: "AI Engineer""
    createdAt: "2025-04-01T16:15:00Z""
    updatedAt: "2025-04-01T16:15:00Z"
    upvotes: 8;
    downvotes: 0;
  }
  {"
    id: "reply3""
    postId: "1"'"
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";"
    authorId: "user4""
    authorName: "Emma Davis""
    authorRole: "ML Research Lead""
    createdAt: "2025-04-02T09:45:00Z""
    updatedAt: "2025-04-02T09:45:00Z"
    upvotes: 15;
    downvotes: 0;
    isAnswer: true;
  {"
    id: "reply4""
    postId: "1""
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?""
    authorId: "user5""
    authorName: "David Lin""
    createdAt: "2025-04-02T11:20:00Z""
    updatedAt: "2025-04-02T11:20:00Z"
    upvotes: 4;
    downvotes: 0;
  }


=======
import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from "lucide-react",;
import { formatDistanceToNow, format } from "date-fns",;
import { ForumPost, ForumReply } from "@/types/community",;
import { useAuth } from "@/hooks/useAuth",;
import ReplyCard from "@/components/community/ReplyCard",;
import ReplyForm from "@/components/community/ReplyForm",;
import { useToast } from "@/hooks/use-toast",;
;
// Mock data for a forum post;
const mockPost:ForumPost = {;
  id:"1",;
  title:"Best practices for AI model fine-tuning",;
  content:"I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?",;
  authorId:"user1",;
  authorName:"Alex Johnson",;
  authorAvatar:"https://i.pravatar.cc/150?img=3",;
  authorRole:"Verified Talent",;
  categoryId:"ai-tools",;
  tags:["machine-learning", "fine-tuning", "gpt"],;
  createdAt:"2025-04-01T12:00:00Z",;
  updatedAt:"2025-04-01T12:00:00Z",;
  upvotes:48,;
  downvotes:2,;
  replyCount:4,;
  isAnswered:true,;
  isFeatured:true;
},;
;
// Mock data for replies;
const mockReplies:ForumReply[] = [;
  {;
    id:"reply1",;
    postId:"1",;
    content:"Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.",;
    authorId:"user2",;
    authorName:"Sarah Chen",;
    authorAvatar:"https://i.pravatar.cc/150?img=5",;
    createdAt:"2025-04-01T14:30:00Z",;
    updatedAt:"2025-04-01T14:30:00Z",;
    upvotes:12,;
    downvotes:0;
  },;
  {;
    id:"reply2",;
    postId:"1",;
    content:"Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good window.window.window.performance.",;
    authorId:"user3",;
    authorName:"Michael Wong",;
    authorRole:"AI Engineer",;
    createdAt:"2025-04-01T16:15:00Z",;
    updatedAt:"2025-04-01T16:15:00Z",;
    upvotes:8,;
    downvotes:0;
  },;
  {;
    id:"reply3",;
    postId:"1",;
    content:"A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.",;
    authorId:"user4",;
    authorName:"Emma Davis",;
    authorRole:"ML Research Lead",;
    createdAt:"2025-04-02T09:45:00Z",;
    updatedAt:"2025-04-02T09:45:00Z",;
    upvotes:15,;
    downvotes:0,;
    isAnswer:true;
  },;
  {;
    id:"reply4",;
    postId:"1",;
    content:"Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",;
    authorId:"user5",;
    authorName:"David Lin",;
    createdAt:"2025-04-02T11:20:00Z",;
    updatedAt:"2025-04-02T11:20:00Z",;
    upvotes:4,;
    downvotes:0;
  }
],;
;
export default function ForumPostPage() {;
  // Using `useParams` without type arguments avoids issues when TypeScript;
  // can't determine the generic type for the helper from React Router.;
  // Cast the result instead to provide the expected shape.;
];
],

export default function ForumPostPage() {
  // Using `useParams` without type arguments avoids issues when TypeScript
  // can't determine the generic type for the helper from React Router.

export default function ForumPostPage() { return null; }

  const { user } = useAuth();
  const { toast } = useToast();
  const [post, setPost] = useState(mockPost);
  const [replies, setReplies] = useState(mockReplies);


>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Cast the result instead to provide the expected shape.
  const { postId } = useParams() as { postId?: string }
  const { user } = useAuth();
  const { toast } = useToast();
  const [post, setPost] = useState(mockPost);

  const isAdminOrMod = user?.userType === 'admin' |user?.role === 'admin';
  const { postId } = useParams() as { postId?: string },
  const { user } = useAuth(),
  const { toast } = useToast(),
  const [post, setPost] = useState(mockPost),
  const [replies, setReplies] = useState(mockReplies),


<<<<<<< HEAD
  // For this demo, we'll assume the post is found
  if (!post) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Check if this is the user's own post;
  const isAuthor = user?.id === post?.authorId;
  // Check if user is admin/mod;
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
  // For this demo, we'll assume the post is found;
  if (!post) {;

<<<<<<< HEAD
    return (
  const { postId } = useParams() as { postId?:string },;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [post, setPost] = useState(mockPost),;
  const [replies, setReplies] = useState(mockReplies),;
  ;
  // Check if this is the user's own post;
  const isAuthor = user?.id === post?.authorId,;
  ;
  // Check if user is admin/mod;
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin',;
  ;
  // For this demo, we'll assume the post is found;
  if (!post) {;
    return (;
      <AppLayout>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="container py-8">;
          <h1>Post not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD

  }
  },


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
        description: "Please sign in to vote on posts"})
      return;
    }
    setPost({ ...post, downvotes: post.downvotes + 1 })

      description: "You downvoted this post"})

<<<<<<< HEAD


  },




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSubmitReply = async (content: string) => {
    if (!user) {
      toast({
        title: "Authentication required"

        description: "Please sign in to reply"})
      return;
    }

<<<<<<< HEAD


      id: `reply${Date.now()}`,

=======

      downvotes: 0

    }
    setReplies([...replies, newReply]);
    setPost({ ...post, replyCount: post.replyCount + 1 })

      id: `reply${Date.now()}`,
>>>>>>> origin/cursor/delete-old-data-records-6bba
      postId: post.id,
      content,
      authorId: user.id || 'unknown',
      authorName: user.displayName || 'Anonymous',
      authorAvatar: user.avatarUrl,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0
    },
    
    setReplies([...replies, newReply]),
    setPost({ ...post, replyCount: post.replyCount + 1 }),

<<<<<<< HEAD
=======

    toast({
      title: "Reply posted"
      description: "Your reply has been added to the discussion"})

  },

    toast({
      title: "Reply posted"
      description: "Your reply has been added to the discussion"})

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleMarkAsAnswer = (replyId: string) => {
    // Only post author or admin can mark an answer
    if (!isAuthor && !isAdminOrMod) {
      toast({
        title: "Permission denied"
        description: "Only the original poster or moderators can mark answers"
        variant: "destructive"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleUpvote = () => {;
    if (!user) {;
      toast({;"
        title: "Authentication required","

        description: "Please sign in to vote on posts"}),;
      return;
    }

    setPost({ ...post, upvotes: post && post.upvotes + 1 }),;

      description: "You upvoted this post"});
  };

  const handleDownvote = () => {;
    if (!user) {;

        description: "Please sign in to vote on posts"}),;
      return;
    }

    setPost({ ...post, downvotes: post && post.downvotes + 1 }),;

      description: "You downvoted this post"});
  };

  const handleSubmitReply = async (content: string) => {;
    if (!user) {;

        description: "Please sign in to reply"}),;
      return;
    }

    // Create a new reply;

      authorName: user && user.displayName || 'Anonymous',;
      authorAvatar: user && user.avatarUrl,;
      createdAt: new Date().toISOString(),;
      updatedAt: new Date().toISOString(),;
      upvotes: 0,;
      downvotes: 0;
    };

    setReplies([...replies, newReply]);
    setPost({ ...post, replyCount: post && post.replyCount + 1 }),;

<<<<<<< HEAD
    toast({;
      title: "Reply posted",;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      description: "Your reply has been added to the discussion"});
  };
  const handleMarkAsAnswer = (replyId: string) => {;
    // Only post author or admin can mark an answer;
    if (!isAuthor && !isAdminOrMod) {;

<<<<<<< HEAD
      toast({;
        title: "Permission denied",;
        description: "Only the original poster or moderators can mark answers",;
        variant: "destructive";
      });
      return;
    }
      }),
      return
    }
    // Update the replies
    const updatedReplies = replies.map(reply => ({
      ...reply,
      isAnswer: reply.id === replyId
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    })),

    setReplies(updatedReplies),
    setPost({ ...post, isAnswered: true }),
<<<<<<< HEAD

    

=======


      description: "The reply has been marked as the accepted answer"})

  },


    toast({
      title: "Answer marked"
      description: "The reply has been marked as the accepted answer"})

      title: "Answer marked"
      description: "The reply has been marked as the accepted answer"})

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleReportPost = () => {
    if (!user) {
      toast({
        title: "Authentication required"

        description: "Please sign in to report content"})
      return;
    }

      description: "A moderator will review this content"})

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const handlePinPost = () => {}

    if (!isAdminOrMod) return,
    
    setPost({ ...post, isPinned: !post.isPinned }),
<<<<<<< HEAD

    
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  const handleLockPost = () => {
    if (!isAdminOrMod) return,
    
    setPost({ ...post, isLocked: !post.isLocked }),

<<<<<<< HEAD
    

=======

    toast({
      title: post.isLocked ? "Post unlocked" : "Post locked"

    toast({

      title: post.isLocked ? "Post unlocked" : "Post locked"
      description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"})

  }
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },
  
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a"),
<<<<<<< HEAD

  

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <AppLayout>
      <SEO;`
        title={`${post.title} | Community Forum | Zion AI Marketplace`}
        description={post.content.substring(0, 160)}`
        keywords={`community, forum, discussion, ${post.tags.join()}`}
      />"
      <div className="container py-8">"
        <div className="flex items-center gap-3 mb-6">"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum;
          </Link>"
          <span className="text-muted-foreground">/</span>"`
          <Link to={`/community/category/${post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">'
            {post.categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>"
          <span className="text-muted-foreground">/</span>"
          <span className="text-sm font-medium truncate max-w-[200px]">{post.title}</span>
        </div>
        <Card>"
          <CardContent className="p-6">"
            <div className="flex justify-between items-start mb-6">"
              <div className="flex items-center gap-4">"

                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.authorAvatar} />
                  <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
<<<<<<< HEAD

                <div>
                  <div className="font-medium text-lg">{post.authorName}</div>
                  {post.authorRole && (
                    <Badge variant="outline" className="mt-1">
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from "lucide-react",;
import { formatDistanceToNow, format } from "date-fns",;
import { ForumPost, ForumReply } from "@/types/community",;
import { useAuth } from "@/hooks/useAuth",;
import ReplyCard from "@/components/community/ReplyCard",;
import ReplyForm from "@/components/community/ReplyForm",;

import { useToast } from "@/hooks/use-toast",;
// Mock data for a forum post;
const mockPost: ForumPost = {;"
  id: "1",;"
  title: "Best practices for AI model fine-tuning",'"
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?",;"
  authorId: "user1",;"
  authorName: "Alex Johnson",;"
  authorAvatar: "https://i.pravatar.cc/150?img=3",;"
  authorRole: "Verified Talent",;"
  categoryId: "ai-tools",;"
  tags: ["machine-learning", "fine-tuning", "gpt"],;"
  createdAt: "2025-04-01T12:00:00Z",;"

  updatedAt: "2025-04-01T12:00:00Z",;
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 4,;
  isAnswered: true,;
  isFeatured: true;
},;
// Mock data for replies;
const mockReplies: ForumReply[] = [;

    updatedAt: "2025-04-01T14:30:00Z",;
    upvotes: 12,;
    downvotes: 0;
  },;

    updatedAt: "2025-04-01T16:15:00Z",;
    upvotes: 8,;
    downvotes: 0;
  },;

    updatedAt: "2025-04-02T09:45:00Z",;
    upvotes: 15,;
    downvotes: 0,;
    isAnswer: true;
  },;

    updatedAt: "2025-04-02T11:20:00Z",;
    upvotes: 4,;
    downvotes: 0;
  }
],;

  const { postId } = useParams() as { postId?: string },;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [post, setPost] = useState(mockPost),;

            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
;
  const handleUpvote = () => {;
    if (!user) {;

        description: "Please sign in to vote on posts"}),;
      return;
    }
;
    setPost({ ...post, upvotes: post.upvotes + 1 }),;

      description: "You upvoted this post"});
  },;
  const handleDownvote = () => {;
    if (!user) {;

        description: "Please sign in to vote on posts"}),;
      return;
    }
;
    setPost({ ...post, downvotes: post.downvotes + 1 }),;

      description: "You downvoted this post"});
  },;
  const handleSubmitReply = async (content: string) => {;
    if (!user) {;

        description: "Please sign in to reply"}),;
      return;
    }
;
    // Create a new reply;

      authorName: user.displayName || 'Anonymous',;
      authorAvatar: user.avatarUrl,;
      createdAt: new Date().toISOString(),;
      updatedAt: new Date().toISOString(),;
      upvotes: 0,;
      downvotes: 0;
    },;
    setReplies([...replies, newReply]),;
    setPost({ ...post, replyCount: post.replyCount + 1 }),;

      description: "Your reply has been added to the discussion"});
  },;
  const handleMarkAsAnswer = (replyId: string) => {;
    // Only post author or admin can mark an answer;
    if (!isAuthor && !isAdminOrMod) {;

        variant: "destructive";
      }),;
      return;
    }
;
    // Update the replies;
    const updatedReplies = replies.map(reply => ({;
      ...reply,;
      isAnswer: reply.id === replyId;
    })),;
    setReplies(updatedReplies),;
    setPost({ ...post, isAnswered: true }),;

      description: "The reply has been marked as the accepted answer"});
  },;
  const handleReportPost = () => {;
    if (!user) {;

        description: "Please sign in to report content"}),;
      return;
    }
;

      description: "A moderator will review this content"});
  },;
  const handlePinPost = () => {;
    if (!isAdminOrMod) return,;
    setPost({ ...post, isPinned: !post.isPinned }),;

      description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top"});
  },;
  const handleLockPost = () => {;
    if (!isAdminOrMod) return,;
    setPost({ ...post, isLocked: !post.isLocked }),;

                <Avatar className="h-12 w-12">;
                  <AvatarImage src={post.authorAvatar} />;
                  <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>;
                </Avatar>;
<<<<<<< HEAD

                <div>;
                  <div className="font-medium text-lg">{post.authorName}</div>;
                  {post.authorRole && (;
                    <Badge variant="outline" className="mt-1">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


                      {post.authorRole}

                    </Badge>
                  )}
                </div>
              </div>"
              <div className="flex items-center text-sm text-muted-foreground">"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.createdAt} title={formattedDate}>
                  {timeAgo}
                </time>
              </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>"
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>"
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => ("
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
<<<<<<< HEAD

=======


    setReplies(updatedReplies);
    setPost({ ...post, isAnswered: true }),;

    toast({;"
      title: "Answer marked","


    setReplies(updatedReplies);
    setPost({ ...post, isAnswered: true }),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    toast({;
      title: "Answer marked",

      description: "The reply has been marked as the accepted answer"});
  };
<<<<<<< HEAD


        <Card>;

          <CardContent className="p-6">;
            <div className="flex justify-between items-start mb-6">;
              <div className="flex items-center gap-4">;
                <Avatar className="h-12 w-12">;


                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpvote}



                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownvote}


                      <Edit className="h-4 w-4 mr-1" />;
                      Edit;
                    </Link>;
                  </Button>;
                )}


                {isAdminOrMod && (;
                  <>;


                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePinPost}>;
                      <Pin className="h-4 w-4 mr-1" />;
                      {post && post.isPinned ? "Unpin" : "Pin"}
                    </Button>;
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLockPost}>;
                      <Lock className="h-4 w-4 mr-1" />;
                      {post && post.isLocked ? "Unlock" : "Lock"}
                    </Button>;
                  </>;
                )}


          {!post.isLocked && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Your Response</h3>
              {user ? (
                <ReplyForm onSubmit={handleSubmitReply} />
              ) : (
                <Alert>
                  <AlertDescription>
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.
                  </AlertDescription>
                </Alert>



          {!post && post.isLocked && (;
        ;
        <div className="mt-8">;
          <h2 className="text-xl font-bold mb-6">Responses ({post.replyCount})</h2>;
          ;
          {post.isAnswered && (;
            <div className="mb-6">;
              <h3 className="flex items-center text-green-600 font-medium mb-2">;
                <CheckCircle className="h-4 w-4 mr-2" />;
                Accepted Answer;
              </h3>;
              {replies.filter(reply => reply.isAnswer).map(reply => (;
                <ReplyCard key={reply.id} reply={reply} className="border-green-500" />;
              ))}
            </div>;
          )}
          ;
          {!post.isLocked && (;
            <div className="mb-8">;
              <h3 className="text-lg font-medium mb-4">Your Response</h3>;
              {user ? (;
                <ReplyForm onSubmit={handleSubmitReply} />;

              ) :(;

                <Alert>;
                  <AlertDescription>;
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;

              )}
            </div>
          )}
          

          {post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">



=======

  const handleReportPost = () => {;
    if (!user) {;

      description: post && post.isLocked ? "Comments are now allowed" : "Comments are now disabled"});
  };
  return (
    <AppLayout>;


                  <Flag className="h-4 w-4 mr-1" />;
'
import { useState } from './react';'
import { use_params, Link } from './react-router-dom';'
import { AppLayout } from '@/layout / AppLayout';'
import { SEO } from '@/components / SEO';'
import { Button } from '@/components / ui / button';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Badge } from '@/components / ui / badge';'
import { Card, CardContent } from '@/components / ui / card';'
import { Separator } from '@/components / ui / separator';'
import { Alert, AlertDescription } from '@/components / ui / alert';'
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from './lucide-react';'
import { formatDistanceToNow, format } from './date - fns';'
import { ForumPost, ForumReply } from '@/types / community';'
import { use_auth } from '@/hooks / use_auth';"
import ReplyCard from "@/components / community / ReplyCard";"
import ReplyForm from "@/components / community / ReplyForm";'
import { use_toast } from '@/hooks / use - toast';
// Mock data for a forum post;
const mock_post: ForumPost = {"
  id: "1","
  title: "Best practices for AI model fine - tuning",'"
  content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\n_first, it's important to carefully prepare your training data. Clean, well - structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine - tuning process.\n\n_second, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm - up period tends to yield more stable results.\n\n_third, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\n_finally, evaluating your fine - tuned model requires looking beyond standard metrics. I always test with diverse real - world examples to ensure the model generalizes well.\n\n_what has been your experience with fine - tuning? Any techniques you've found particularly effective?";"
  author_id: "user1","
  author_name: "Alex Johnson","
  author_avatar: "https://i.pravatar.cc / 150?img = 3","
  author_role: "Verified Talent","
  category_id: "ai - tools","
  tags: ["machine - learning", "fine - tuning", "gpt"];"
  created_at: "2025 - 04 - 01T12:00:00Z","
  updated_at: "2025 - 04 - 01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  reply_count: 4,
  is_answered: true,
  is_featured: true;
}
;
// Mock data for replies;
const mock_replies: ForumReply[] = [;
  {"
    id: "reply1","
    post_id: "1",'"
    content: "Great post! I've had similar experiences with data preparation being the key to successful fine - tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.","
    author_id: "user2","
    author_name: "Sarah Chen","
    author_avatar: "https://i.pravatar.cc / 150?img = 5","
    created_at: "2025 - 04 - 01T14:30:00Z","
    updated_at: "2025 - 04 - 01T14:30:00Z",
    upvotes: 12,
    downvotes: 0;
  }
  {"
    id: "reply2","
    post_id: "1",'"
    content: "Have you tried using LoRA or QLoRA for efficient fine - tuning? I've found them to be much more resource - friendly while maintaining good performance.","
    author_id: "user3","
    author_name: "Michael Wong","
    author_role: "AI Engineer","
    created_at: "2025 - 04 - 01T16:15:00Z","
    updated_at: "2025 - 04 - 01T16:15:00Z",
    upvotes: 8,
    downvotes: 0;
  }
  {"
    id: "reply3","
    post_id: "1",'"
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine - tuning process.\n\n_also, when fine - tuning language models, I've found that carefully crafting your prompts / templates for training can make a huge difference in the quality of the outputs.";"
    author_id: "user4","
    author_name: "Emma Davis","
    author_role: "ML Research Lead","
    created_at: "2025 - 04 - 02T09:45:00Z","
    updated_at: "2025 - 04 - 02T09:45:00Z",
    upvotes: 15,
    downvotes: 0,
    is_answer: true;
  }
  {"
    id: "reply4","
    post_id: "1","
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?","
    author_id: "user5","
    author_name: "David Lin","
    created_at: "2025 - 04 - 02T11:20:00Z","
    updated_at: "2025 - 04 - 02T11:20:00Z",
    upvotes: 4,
    downvotes: 0;
  }
];
;
export default /**;
 * ForumPostPage - Function description;
 */
function ForumPostPage() {}`
  // Using `use_params` without type arguments avoids issues when TypeScript;'
  // can't determine the generic type for the helper from React Router.;
  // Cast the result instead to provide the expected shape.;
  const { post_id } = use_params () as { post_id?: string }
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [post, set_post] = useState (mock_post);
  const [replies, set_replies] = useState (mock_replies);
;'
  // Check if this is the user's own post;
  const is_author = user?.id === post?.author_id;
;
  // Check if user is admin / mod;'
  const isAdminOrMod = user?.user_type === 'admin' || user?.role === 'admin';
;'
  // For this demo, we'll assume the post is found;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <AppLayout>;"
        <div className="container py - 8">;
          <h1 > Post not found</h1>;"
          <Button as_child className="mt - 4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  const handle_upvote = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to vote on posts"}),
      return;
    }
    set_post ({ ...post, upvotes: post.upvotes + 1 }),
    toast ({"
      title: "Vote recorded","
      description: "You upvoted this post"});
  }
;
  const handle_downvote = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to vote on posts"}),
      return;
    }
    set_post ({ ...post, downvotes: post.downvotes + 1 }),
    toast ({"
      title: "Vote recorded","
      description: "You downvoted this post"});
  }
;
  const handleSubmitReply = async (content: string) => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to reply"}),
      return;
    }
    // Create a new reply;
    const new_reply: ForumReply = {}`
      id: `reply${Date.now ()}`,
      post_id: post.id,
      content;'
      author_id: user.id || 'unknown','
      author_name: user.display_name || 'Anonymous',
      author_avatar: user.avatar_url,
      created_at: new Date ().toISOString (),
      updated_at: new Date ().toISOString (),
      upvotes: 0,
      downvotes: 0;
    }
;
    set_replies ([...replies, new_reply]);
    set_post ({ ...post, reply_count: post.reply_count + 1 }),
    toast ({"
      title: "Reply posted","
      description: "Your reply has been added to the discussion"});
  }
;
  const handleMarkAsAnswer = (reply_id: string) =>: any {}
    // Only post author or admin can mark an answer;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Permission denied","
        description: "Only the original poster or moderators can mark answers","
        variant: "destructive";
      });
      return;
    }
    // Update the replies;
    const updated_replies = replies.map (reply => ({}
      ...reply;
      is_answer: reply.id === reply_id;
    }));
;
    set_replies (updated_replies);
    set_post ({ ...post, is_answered: true }),
    toast ({"
      title: "Answer marked","
      description: "The reply has been marked as the accepted answer"});
  }
;
  const handleReportPost = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to report content"}),
      return;
    }
    toast ({"
      title: "Report submitted","
      description: "A moderator will review this content"});
  }
;
  const handlePinPost = () =>: any {}
    // Check condition;
if (return) {}
  $2;
}
    set_post ({ ...post, is_pinned: !post.is_pinned }),
    toast ({"
      title: post.is_pinned ? "Post unpinned" : "Post pinned","
      description: post.is_pinned ? "The post has been unpinned" : "The post has been pinned to the top"});
  }
;
  const handleLockPost = () =>: any {}
    // Check condition;
if (return) {}
  $2;
}
    set_post ({ ...post, is_locked: !post.is_locked }),
    toast ({"
      title: post.is_locked ? "Post unlocked" : "Post locked","
      description: post.is_locked ? "Comments are now allowed" : "Comments are now disabled"});
  }
;
  const time_ago = formatDistanceToNow (new Date (post.created_at), { add_suffix: true }),'"
  const formatted_date = format (new Date (post.created_at), "MMMM d, yyyy 'at' h: mm a"),
  return (
    <AppLayout>;
      <SEO;`
        title={`${post.title} | Community Forum | Zion AI Marketplace`}
        description={post.content.substring (0, 160)}`
        keywords={`community, forum, discussion, ${post.tags.join ()}`}
      />;"
      <div className="container py - 8">;"
        <div className="flex items - center gap - 3 mb - 6">;"
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;
            Forum;
          </Link>;"
          <span className="text - muted - foreground">/</span>;"`
          <Link to={`/community / category/${post.category_id}`} className="text - sm text - muted - foreground hover:text - foreground">;'
            {post.category_id.split ('-').map (word => word.char_at (0).toUpperCase () + word.slice (1)).join (' ')}
          </Link>;"
          <span className="text - muted - foreground">/</span>;"
          <span className="text - sm font - medium truncate max - w-[200px]">{post.title}</span>;
        </div>;
        <Card>;"
          <CardContent className="p - 6">;"
            <div className="flex justify - between items - start mb - 6">;"
              <div className="flex items - center gap - 4">;"
                <Avatar className="h - 12 w - 12">;
                  <AvatarImage src={post.author_avatar} />;
                  <AvatarFallback>{post.author_name.char_at (0)}</AvatarFallback>;
                </Avatar>;
                <div>;"
                  <div className="font - medium text - lg">{post.author_name}</div>;
                  {post.author_role && ("
                    <Badge variant="outline" className="mt - 1">;
                      {post.author_role}
                    </Badge>)}
                </div>;
              </div>;"
              <div className="flex items - center text - sm text - muted - foreground">;"
                <Calendar className="h - 4 w - 4 mr - 1" />;
                <time date_time={post.created_at} title={formatted_date}>;
                  {time_ago}
                </time>;
              </div>;
            </div>;"
            <h1 className="text - 2xl font - bold mb - 2">{post.title}</h1>;"
            <div className="flex flex - wrap gap - 2 mb - 6">;
              {post.tags.map (tag => ("
                <Badge key={tag} variant="outline" className="bg - zion - purple / 10 hover:bg - zion - purple / 20">;
                  {tag}
                </Badge>))}
            </div>;"
            <div className="prose dark:prose - invert max - w-none mb - 6">;'
              {post.content.split ('\n\n').map ((paragraph, i) => (
                <p key={i}>{paragraph}</p>))}
            </div>;"
            <div className="flex flex - wrap items - center justify - between gap - 4 mt - 6">;"
              <div className="flex items - center gap - 4">;
                <Button;"
                  variant="outline";"
                  size="sm";
                  on_click={handle_upvote}"
                  className="flex items - center gap - 2";
                >;"
                  <ThumbsUp className="h - 4 w - 4" />;
                  <span>{post.upvotes}</span>;
                </Button>;
                <Button;"
                  variant="outline";"
                  size="sm";
                  on_click={handle_downvote}"
                  className="flex items - center gap - 2";
                >;"
                  <ThumbsDown className="h - 4 w - 4" />;
                  <span>{post.downvotes}</span>;
                </Button>;
              </div>;"
              <div className="flex items - center gap - 2">;
                {(is_author || isAdminOrMod) && ("
                  <Button variant="ghost" size="sm" as_child>;`
                    <Link to={`/community / edit/${post.id}`}>;"
                      <Edit className="h - 4 w - 4 mr - 1" />;
                      Edit;
                    </Link>;
                  </Button>)}
                {isAdminOrMod && (
                  <>;
                    <Button;"
                      variant="ghost";"
                      size="sm";
                      on_click={handlePinPost}
                    >;"
                      <Pin className="h - 4 w - 4 mr - 1" />;"
                      {post.is_pinned ? "Unpin" : "Pin"}
                    </Button>;
                    <Button;"
                      variant="ghost";"
                      size="sm";
                      on_click={handleLockPost}
                    >;"
                      <Lock className="h - 4 w - 4 mr - 1" />;"
                      {post.is_locked ? "Unlock" : "Lock"}
                    </Button>;
                  </>)}
                <Button;"
                  variant="ghost";"
                  size="sm";
                  on_click={handleReportPost}
                >;"
                  <Flag className="h - 4 w - 4 mr - 1" />;

                  Report;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;

          {!post.isLocked && (
            <div className="mb-8">

              <h3 className="text-lg font-medium mb-4">Your Response</h3>
              {user ? (
                <ReplyForm onSubmit={handleSubmitReply} />
              ) : (
                <Alert>
                  <AlertDescription>"
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.
                  </AlertDescription>
                </Alert>
"
            <div className="mb-8">;"
              <h3 className="text-lg font-medium mb-4">Your Response</h3>;
              {user ? (;
                <ReplyForm onSubmit={handleSubmitReply} />;

                <Alert>;
                  <AlertDescription>;"
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;

              )}
            </div>
          )}

          {post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Lock className="h-4 w-4 mr-2" />
                This thread has been locked and is no longer open for responses.
              </AlertDescription>
            </Alert>
<<<<<<< HEAD

          )}"
          <div className="space-y-6">
            {replies;

              .filter(reply => !reply.isAnswer)
              .map(reply => (


                <ReplyCard


                  onMarkAnswer={() => handleMarkAsAnswer(reply && reply.id)}
                  canMarkAnswer={!post && post.isAnswered && (isAuthor || isAdminOrMod)}
                />;

=======
          )}
          <div className="space-y-6">
            {replies
              .filter(reply => !reply.isAnswer)
              .map(reply => (

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}

                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />


<<<<<<< HEAD

=======
canMarkAnswer={!post.isAnswered && (isAuthor |isAdminOrMod)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                />
              ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />
<<<<<<< HEAD


=======

                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />

>>>>>>> origin/cursor/delete-old-data-records-6bba
              ))}
          </div>;
        </div>;
      </div>;
    </AppLayout>;
  );
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="mt - 8">;
          <h2 className="text - xl font - bold mb - 6">Responses ({post.reply_count})</h2>;
          {post.is_answered && (
            <div className="mb - 6">;
              <h3 className="flex items - center text - green - 600 font - medium mb - 2">;
                <CheckCircle className="h - 4 w - 4 mr - 2" />;
                Accepted Answer;
              </h3>;
              {replies.filter (reply => reply.is_answer).map (reply => (
                <ReplyCard key={reply.id} reply={reply} className="border - green - 500" />))}
            </div>)}
          {!post.is_locked && (
            <div className="mb - 8">;

              <h3 className="text - lg font - medium mb - 4">Your Response</h3>;
              {user ? (
                />;                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}

                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />
                ;              )}
            <Alert className="mb-8">;"
              <AlertDescription className="flex items-center">;"
                <Lock className="h-4 w-4 mr-2" />;"

          <div className="space-y-6">;"
                  key={reply && reply.id}

                  onMarkAnswer={() => handleMarkAsAnswer(reply && reply.id)}

</ReplyCard>
          </div>;
        </div>;
      </div>;
    </AppLayout>;"
        <div className="mt - 8">;"
          <h2 className="text - xl font - bold mb - 6">Responses ({post.reply_count})</h2>;""
            <div className="mb - 6">;"
              <h3 className="flex items - center text - green - 600 font - medium mb - 2">;"
</h3>"
                <CheckCircle className="h - 4 w - 4 mr - 2" />;"

              </h3>;"
                <ReplyCard key={reply.id} reply={reply} className="border - green - 500" />))}"

            </div>)}"
            <div className="mb - 8">;"
              <h3 className="text - lg font - medium mb - 4">Your Response</h3>;"
                <ReplyForm on_submit={handleSubmitReply} />) : (

                    Please <Link to="/login" className="font - medium text - zion - purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;
                </Alert>)}
            </div>)}

          <div className="space - y-6">;
            {replies;
              .filter (reply => !reply.is_answer);
              .map (reply => (
                <ReplyCard;
                  key={reply.id}
                  reply={reply}

                  onMarkAnswer={() => handleMarkAsAnswer (reply.id)}
                  canMarkAnswer={!post.is_answered && (is_author || isAdminOrMod)}
                />))}
          </div>;
        </div>;
      </div>;
    </AppLayout>);

<<<<<<< HEAD
          ;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className="space-y-6">;
            {replies;
              .filter(reply => !reply.isAnswer);
              .map(reply => (;
                <ReplyCard;
                  key={reply.id}
                  reply={reply}
                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}
                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />;
              ))}
          </div>;
        </div>;
      </div>;
    </AppLayout>;

<<<<<<< HEAD
  ),; downvotes: 0 
};
{
  id: "reply3";
postId: "1";
content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";
authorId: "user4";
authorName: "Emma Davis";
authorRole: "ML Research Lead";
createdAt: "2025-04-02T09:45:00Z";
updatedAt: "2025-04-02T09:45:00Z";
upvotes: 15;
downvotes: 0;
isAnswer: true 
};
{
  id: "reply4";
postId: "1";
content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?";
authorId: "user5";
authorName: "David Lin";
createdAt: "2025-04-02T11:20:00Z";
updatedAt: "2025-04-02T11:20:00Z";
upvotes: 4;
downvotes: 0 
}];
//Using `useParams` without type arguments avoids issues when TypeScript //can't determine the generic type for the helper from React Router. //Cast the result instead to provide the expected shape. //For this demo, we'll assume the post is found if (!post) {
  return (<AppLayout> <div className="container py-8" > <h1>Post not found</h1> <Button asChild className="mt-4" > <Link to="/community" >Back to Community</Link> </Button> </div> </AppLayout> const handleUpvote = () => {
  if (!user) {
  toast ({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return;
}
;

<<<<<<< HEAD



=======

};

authorName: user.displayName || 'Anonymous';
authorAvatar: user.avatarUrl;
createdAt: new Date () .toISOString ();
updatedAt: new Date () .toISOString ();
upvotes: 0;


  !post.isAnswered && (isAuthor || isAdminOrMod) 
}/>) ) 
}</div> </div> </div> </AppLayout>) 
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
