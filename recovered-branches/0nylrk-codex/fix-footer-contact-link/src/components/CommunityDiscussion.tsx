import React, { useState } from "react",
import { MessageCircle } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';

interface DiscussionPost {

interface DiscussionPost {
interface DiscussionPost {


export const CommunityDiscussion: React.FC = () => {const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;"
    author: "Anna Zhou",;"
    time: "2h ago",;"
    title: "What AI trends are you most excited for in 2025?",
  {;
    id: 2,;
    author: "David Kim",;
    time: "50m ago",;
    title: "Quick tip: How to rank your Zion listing higher",;
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",;
  },;
];
    if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {;
        id: Date && Date.now(),;"
        author: "You",;"
        time: "Now",;
        title: newTitle,;
        body: newBody,;
      },;
      ...posts,;
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  }
  return (
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={28} className="text-zion-cyan" />


