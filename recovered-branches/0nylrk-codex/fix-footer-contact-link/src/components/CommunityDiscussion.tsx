<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { MessageCircle } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import React, { useState } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface DiscussionPost {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
=======


  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;


import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface DiscussionPost {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

import React, { useState } from "react","
import { MessageCircle } from "lucide-react","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
;
import React, { useState } from './react';'
import { MessageCircle  } from './lucide-react';'
import { Button  } from '@/components / ui / button';'
import { Input  } from '@/components / ui / input';'
import { Textarea  } from '@/components / ui / textarea';'
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';'
import { Card, CardContent  } from '@/components / ui / card';'
import { Separator  } from '@/components / ui / separator';
interface DiscussionPost {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import { Card, CardContent } from "@/components/ui/card","
import { Separator } from "@/components/ui/separator",
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface DiscussionPost {
=======


interface DiscussionPost {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
<<<<<<< HEAD
  body: string
}

  body: string
}
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const initial_posts: DiscussionPost[] = [;
  {}
    id: 1,"
    author: "Anna Zhou","
    time: "2h ago","
    title: "What AI trends are you most excited for in 2025?",
<<<<<<< HEAD
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?",
  },

  body: string
}
  {
    id: 2
    author: "David Kim"
    time: "50m ago"
    title: "Quick tip: How to rank your Zion listing higher"
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."
  }
];
<<<<<<< HEAD
export const CommunityDiscussion: React.FC = () => {const initialPosts: DiscussionPost[] = [;
=======


  body: string;
}

  {}
    id: 2"
    author: "David Kim""
    time: "50m ago""
    title: "Quick tip: How to rank your Zion listing higher""
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."
  }
];

const initialPosts: DiscussionPost[] = [;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const CommunityDiscussion: React.FC = () => {
const initialPosts: DiscussionPost[] = [;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  {;
    id: 1,;"
    author: "Anna Zhou",;"
    time: "2h ago",;"
    title: "What AI trends are you most excited for in 2025?",;
  {;
    id: 2,;"
    author: "David Kim",;"
    time: "50m ago",;"
    title: "Quick tip: How to rank your Zion listing higher",;
<<<<<<< HEAD
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",;
  },;
];
<<<<<<< HEAD
=======

  const handleAddPost = () => {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


  const handleAddPost = () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

    ]);"
    setNewTitle("");"
    setNewBody("");
    setShowNew(false);
  }


  return ("
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">"
      <div className="flex items-center gap-3 mb-4">"
        <MessageCircle size={28} className="text-zion-cyan" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <span className="font-bold text-2xl text-white tracking-tight">
          Community Discussion;
        </span>"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">
          {posts.length} posts;
        </span>
      </div>"
      <Separator className="mb-6" />"
      <div className="mb-4 flex justify-end">
        <Button"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale""
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >"
          {showNew ? "Cancel" : "New Post"}
        </Button>
      </div>
      {showNew && ("
        <Card className="mb-6 animate-scale-in">"
          <CardContent className="py-5">
            <Input"
              placeholder="Title (e.g., Share an AI tool, Ask for help...)""
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />
<<<<<<< HEAD
            <Textarea
              placeholder="What's on your mind?"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Textarea'"
              placeholder="What's on your mind?""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
"
import React, { useState } from "react",;"
import { MessageCircle } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Separator } from "@/components/ui/separator",;



  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;"
  const [newTitle, setNewTitle] = useState(""),;"
  const [newBody, setNewBody] = useState(""),;


;

=======
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import React, { useState } from "react",;
import { MessageCircle } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;


import React, { useState } from "react",""
import { MessageCircle } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea",""
import { Avatar, AvatarFallback } from "@/components/ui/avatar",""
import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";""
import React, { useState } from './react';
pr-12325
import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';

interface DiscussionPost {

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface DiscussionPost {
  id: number;
interface DiscussionPost {
  // TODO: Implement
}
<<<<<<< HEAD
;
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;
    author: "Anna Zhou",;
    time: "2h ago",;
    title: "What AI trends are you most excited for in 2025?",;
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},;
  {;
    id: 2,;
    author: "David Kim",;
    time: "50m ago",;
    title: "Quick tip: How to rank your Zion listing higher",;
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],;
export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;
  const [newTitle, setNewTitle] = useState(""),;
  const [newBody, setNewBody] = useState(""),;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAddPost = () => {;
    if (!newTitle.trim() || !newBody.trim()) return,;
    setPosts([;
      {;
<<<<<<< HEAD

        id:Date.now(),;"
        author:"You",;"
        time:"Now",;
        title:newTitle,;
        body:newBody},;
      ...posts]),;"
    setNewTitle(""),;"
=======
        id: Date.now(),;
        author: "You",;
        time: "Now",;
        title: newTitle,;
        body: newBody},;
      ...posts]),;
    setNewTitle(""),;
    setNewBody(""),;
    setShowNew(false);
  };
  return (;
        id:Date.now(),;
        author:"You",;
        time:"Now",;
        title:newTitle,;
        body:newBody},;
      ...posts]),;
    setNewTitle(""),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setNewBody(""),;
    setShowNew(false),;
  },;
;
  return (;
<<<<<<< HEAD
"
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;"
      <div className="flex items-center gap-3 mb-4">;"
        <MessageCircle size={28} className="text-zion-cyan" />;"
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;

"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;
          {posts.length} posts;

        </span>;
      </div>;"
      <Separator className="mb-6" />;"
      <div className="mb-4 flex justify-end">;

        <Button;"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";"
          size="sm";
          onClick={() => setShowNew((v) => !v)}
        >;"
          {showNew ? "Cancel" :"New Post"}

        </Button>;
      </div>;
      {showNew && (;"
        <Card className="mb-6 animate-scale-in">;"
          <CardContent className="py-5">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",;
  },;
];
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  }
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;
          {posts && posts.length} posts;
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb-6" />;
      <div className="mb-4 flex justify-end">;
        <Button
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
        <Button;
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";
          size="sm";
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" :"New Post"}
        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Input
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
                setNewTitle(e && e.target.value);
              }
              maxLength={80}
            />;
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
              value={newBody}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;
                setNewBody(e && e.target.value);
<<<<<<< HEAD
=======
;
export const CommunityDiscussion: React.FC = () => {
  const [posts, set_posts] = useState (initial_posts);
  const [show_new, setShowNew] = useState (false);
  const [new_title, setNewTitle] = useState ("");
  const [new_body, setNewBody] = useState ("");
;
  const handleAddPost = () =>: any {
    if (|| !new_body.trim ()) return) {
  $2
}
    set_posts ([;
      {
        id: Date.now (),
        author: "You",
        time: "Now",
        title: new_title,
        body: new_body,
      },
      ...posts,
    ]);
    setNewTitle ("");
    setNewBody ("");
    setShowNew (false);
  }
;
  return (
    <div className="w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in">;
      <div className="flex items - center gap - 3 mb - 4">;
        <MessageCircle size={28} className="text - zion - cyan" />;
        <span className="font - bold text - 2xl text - white tracking - tight">;
          Community Discussion;
        </span>;
        <span className="ml - auto text - xs text - zion - slate - light bg - zion - purple / 20 rounded - full px - 2 py - 0.5">;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb - 6" />;
      <div className="mb - 4 flex justify - end">;
        <Button;
          className="bg - zion - purple text - white hover:bg - zion - purple - light transition hover - scale";
          size="sm";
          on_click={() => setShowNew ((v) => !v)}
        >;
          {show_new ? "Cancel" : "New Post"}
        </Button>;
      </div>;
      {show_new && (
        <Card className="mb - 6 animate - scale - in">;
          <CardContent className="py - 5">;
            <Input;
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";
              className="mb - 3 bg - zion - blue - light text - white placeholder:text - zion - slate";
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                setNewTitle (e.target.value);
              }
              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";

              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]";
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
<<<<<<< HEAD

            />"
            <div className="flex gap-3 justify-end">
              <Button"
                variant="secondary""
                size="sm""
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
                onClick={() => setShowNew(false)}
              >
                Cancel;
              </Button>
              <Button"
                size="sm""
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
                onClick={handleAddPost}
=======
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
            />;


                disabled={!newTitle.trim() || !newBody.trim()}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


                disabled={!newTitle.trim() |!newBody.trim()}
                disabled={!newTitle.trim() || !newBody.trim()}
<<<<<<< HEAD

              >
                Post;
=======
              >
                Post
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Button>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                    .slice(0, 2)}
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">
                    {post.author}
                  </span>
                  <span className="text-xs text-zion-slate-light">
                    {post.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">
                  {post.title}
                </h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">
                  {post.body}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
            <div className="flex gap - 3 justify - end">;
=======
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
            <div className="flex gap - 3 justify-end">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
            <div className="flex gap - 3 justify-end">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
            <div className="flex gap - 3 justify - end">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Button;
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click={() => setShowNew (false)}
=======




                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;"
            <div className="flex gap - 3 justify - end">;
              <Button;"
                variant="secondary";"
                size="sm";"
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click={() => setShowNew (false)}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >;
                Cancel;
              </Button>;
              <Button;"
                size="sm";
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover-scale";
=======
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}
=======

"
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >;
              }
              max_length={400}
              rows={3}
            />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Post;
              </Button>;
            </div>;
          </CardContent>;

                </AvatarFallback>;
              </Avatar>;
              <div>;"
                <div className="flex gap-2 items-center">;"
                  <span className="font-semibold text-white">;
                    {post && post.author}
                  </span>;"
                  <span className="text-xs text-zion-slate-light">;
                    {post && post.time}
                  </span>;
                </div>;"
                <h3 className="text-lg font-bold text-zion-cyan mt-1">;
                  {post && post.title}
                </h3>;"
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">;
                  {post && post.body}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;"
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        </Card>)}
      <div className="flex flex - col gap - 6">;
        {posts.map ((post) => (
          <Card;
            key={post.id}
            className="bg - zion - blue border - zion - slate - dark shadow - lg";
          >;
            <CardContent className="py - 4 flex gap - 4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (" ");
                    .map ((s) => s[0]);
                    .join ("");
                    .toUpperCase ();
                    .slice (0, 2)}
                </AvatarFallback>;
              </Avatar>;
              <div>;
                <div className="flex gap - 2 items - center">;
                  <span className="font - semibold text - white">;
                    {post.author}
                  </span>;
                  <span className="text - xs text - zion - slate - light">;
                    {post.time}
                  </span>;
                </div>;
                <h3 className="text - lg font - bold text - zion - cyan mt - 1">;
                  {post.title}
                </h3>;
                <p className="text - zion - slate - light mt - 1 whitespace - pre - line">;
                  {post.body}
                </p>;
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
      <div className="mt - 8 text - xs text - zion - slate - dark text - center">;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>);
=======
  id: number;,
  author: string;
  avatar?: string;
  time: string;,
  title: string;



import { Card, CardContent } from "@/components/ui/card",""
import { Separator } from "@/components/ui/separator","
  // TODO: Implement
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
  body: string
}  body: string

}

body: string
  body: string
}
const initial_posts: DiscussionPost[] = [;
  {

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
};}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
};}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

};







  );
};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
};
  );
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
