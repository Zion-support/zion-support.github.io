<<<<<<< HEAD
import React{ useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { AvatarFallback } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
=======
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Separator } from "@/components/ui/separator";

interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
}

const initialPosts: DiscussionPost[] = [
  {
    id: 1,
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
<<<<<<< HEAD
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
=======
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",
  },
>>>>>>> origin/auto/autonomy-17186719616
  {
    id: 2,
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
<<<<<<< HEAD
    body: "Fill out every profile detailadd strong tagsand post weekly! See results in a month."}];

export const CommunityDiscussion: React.FC = () => {
  const [postsetPosts] = useState(initialPosts);
  const [showNewsetShowNew] = useState(false);
  const [newTitlesetNewTitle] = useState("");
  const [newBodysetNewBody] = useState("");
=======
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",
  },
];

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
>>>>>>> origin/auto/autonomy-17186719616

  const handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: "You",
        time: "Now",
        title: newTitle,
<<<<<<< HEAD
        body: newBody},
      ...posts]);
=======
        body: newBody,
      },
      ...posts,
    ]);
>>>>>>> origin/auto/autonomy-17186719616
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  };

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
<<<<<<< HEAD
              placeholder="Title (e.g.Share an AI toolAsk for help...)"
=======
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
>>>>>>> origin/auto/autonomy-17186719616
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
                onClick={() => setShowNew(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
                onClick={handleAddPost}
                disabled={!newTitle.trim() || !newBody.trim()}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .toUpperCase()
<<<<<<< HEAD
                    .slice(02)}
=======
                    .slice(0, 2)}
>>>>>>> origin/auto/autonomy-17186719616
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">{post.author}</span>
                  <span className="text-xs text-zion-slate-light">{post.time}</span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  );
};