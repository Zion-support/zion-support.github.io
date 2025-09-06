import React, { useState } from "react",
import { MessageCircle } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string
}

const initialPosts: DiscussionPost[] = [
  {
    id: 1;
    author: "Anna Zhou";
    time: "2h ago";
    title: "What AI trends are you most excited for in 2025?";
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2;
    author: "David Kim";
    time: "50m ago";
    title: "Quick tip: How to rank your Zion listing higher";
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],

export const CommunityDiscussion: React.FC;
