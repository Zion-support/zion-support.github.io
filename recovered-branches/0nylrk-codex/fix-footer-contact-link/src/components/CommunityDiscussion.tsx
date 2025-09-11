>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from './react';
import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
interface DiscussionPost {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;

import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
=======
=======

interface DiscussionPost {
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  body: string
}
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
  body: string
}
const initialPosts: DiscussionPost[] = [
  {

id: 1
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2,
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],

    id: 1
    author: "Anna Zhou"
    time: "2h ago"
    title: "What AI trends are you most excited for in 2025?"
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"
  }
=======
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?",
  },
  {
    id: 2
    author: "David Kim"
    time: "50m ago"
    title: "Quick tip: How to rank your Zion listing higher"
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."
  }
];
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;
    author: "Anna Zhou",;
    time: "2h ago",;
    title: "What AI trends are you most excited for in 2025?",;
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",;
  },;
  {;
    id: 2,;
    author: "David Kim",;
    time: "50m ago",;
    title: "Quick tip: How to rank your Zion listing higher",;
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",;
  },;
];

  const handleAddPost = () => {;
    if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {;
        id: Date && Date.now(),;
        author: "You",;
        time: "Now",;
        title: newTitle,;
        body: newBody,;
      },;
      ...posts,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  }
  const handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return,
    setPosts([
      {
        id: Date.now(),
        author: "You",
        time: "Now",
        title: newTitle,
        body: newBody},
      ...posts]),
    setNewTitle(""),
    setNewBody(""),
    setShowNew(false)
  },
=======
  return (
=======

    id: 1,
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
=======    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2,
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],



  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={28} className="text-zion-cyan" />
        <span className="font-bold text-2xl text-white tracking-tight">
          Community Discussion
        </span>
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">
          {posts.length} posts
        </span>
      </div>
      <Separator className="mb-6" />
      <div className="mb-4 flex justify-end">
        <Button
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >
          {showNew ? "Cancel" : "New Post"}
        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
