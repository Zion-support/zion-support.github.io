<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react",
import { MessageCircle } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
interface DiscussionPost {
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface DiscussionPost {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface DiscussionPost {
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
<<<<<<< HEAD
<<<<<<< HEAD
  body: string
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  body: string
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  body: string
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
<<<<<<< HEAD
<<<<<<< HEAD

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    id: 2
    author: "David Kim"
    time: "50m ago"
    title: "Quick tip: How to rank your Zion listing higher"
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."
  }
];
<<<<<<< HEAD
=======
export const CommunityDiscussion: React.FC = () => {
=======

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
const [posts, setPosts] = useState(initialPosts);
export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const handleAddPost = () => {
    if (!newTitle.trim() |!newBody.trim()) return;
    setPosts([
      {
        id: Date.now()
        author: "You"
        time: "Now"
        title: newTitle
        body: newBody
      }
      ...posts
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  }
<<<<<<< HEAD

  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2,
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { MessageCircle } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
<<<<<<< HEAD
<<<<<<< HEAD
;
interface DiscussionPost {;
  id:number,;
  author:string,;
  avatar?:string,;
  time:string,;
  title:string,;
  body:string;
}
;
const initialPosts:DiscussionPost[] = [;
  {;
    id:1,;
    author:"Anna Zhou",;
    time:"2h ago",;
    title:"What AI trends are you most excited for in 2025?",;
    body:"Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},;
  {;
    id:2,;
    author:"David Kim",;
    time:"50m ago",;
    title:"Quick tip:How to rank your Zion listing higher",;
    body:"Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],;
;
export const CommunityDiscussion:React.FC = () => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface DiscussionPost {;
  id: number,;
  author: string,;
  avatar?: string,;
  time: string,;
  title: string,;
  body: string;
}
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;
  const [newTitle, setNewTitle] = useState(""),;
  const [newBody, setNewBody] = useState(""),;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAddPost = () => {;
    if (!newTitle.trim() || !newBody.trim()) return,;
    setPosts([;
      {;
<<<<<<< HEAD
<<<<<<< HEAD
        id:Date.now(),;
        author:"You",;
        time:"Now",;
        title:newTitle,;
        body:newBody},;
      ...posts]),;
    setNewTitle(""),;
    setNewBody(""),;
    setShowNew(false),;
  },;
;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;
<<<<<<< HEAD
<<<<<<< HEAD
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;
          {posts.length} posts;
=======
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;
          {posts && posts.length} posts;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;
          {posts && posts.length} posts;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </span>;
      </div>;
      <Separator className="mb-6" />;
      <div className="mb-4 flex justify-end">;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button;
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";
          size="sm";
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" :"New Post"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              rows={3}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;


                disabled={!newTitle.trim() || !newBody.trim()}


<<<<<<< HEAD
disabled={!newTitle.trim() |!newBody.trim()}
                disabled={!newTitle.trim() |!newBody.trim()}
                disabled={!newTitle.trim() || !newBody.trim()}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                disabled={!newTitle.trim() |!newBody.trim()}
                disabled={!newTitle.trim() || !newBody.trim()}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
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
              className="mb - 4 bg - zion - blue - light text - white placeholder:text - zion - slate min - h-[70px]";
              value={new_body}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
                setNewBody (e.target.value);
              }
              max_length={400}
              rows={3}
            />;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
=======
=======
                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex gap - 3 justify - end">;
              <Button;
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click={() => setShowNew (false)}
<<<<<<< HEAD
            <Input;
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate";
              value={newTitle}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]";              value={newBody}
              onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
            />;
            <div className="flex gap-3 justify-end">;
              <Button;
                variant="secondary";
                size="sm";
                className="bg-zion-blue text-white hover:bg-zion-blue-dark";
                onClick={() => setShowNew(false)}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                Cancel;
              </Button>;
              <Button;
                size="sm";
<<<<<<< HEAD
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale";
                onClick={handleAddPost}
                disabled={!newTitle.trim() || !newBody.trim()}
              >;
=======
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}
              >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Post;
              </Button>;
            </div>;
          </CardContent>;

<<<<<<< HEAD
=======

);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </AvatarFallback>;
              </Avatar>;
              <div>;
                <div className="flex gap-2 items-center">;
                  <span className="font-semibold text-white">;
                    {post && post.author}
                  </span>;
                  <span className="text-xs text-zion-slate-light">;
                    {post && post.time}
                  </span>;
                </div>;
                <h3 className="text-lg font-bold text-zion-cyan mt-1">;
                  {post && post.title}
                </h3>;
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">;
                  {post && post.body}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
  );

<<<<<<< HEAD


};
        </Card>;
      )}
      <div className="flex flex-col gap-6">;
        {posts.map((post) => (;
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">;
            <CardContent className="py-4 flex gap-4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split(" ");
                    .map((s) => s[0]);
                    .join("");
                    .toUpperCase();                    .slice(0, 2)}
                </AvatarFallback>;
              </Avatar>;
              <div>;
                <div className="flex gap-2 items-center">;
                  <span className="font-semibold text-white">{post.author}</span>;
                  <span className="text-xs text-zion-slate-light">{post.time}</span>;
                </div>;
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>;
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  ),;},
 interface DiscussionPost {
  id: number;
author: string;
avatar?: string;
time: string;
title: string;
body: string 
}const initialPosts: DiscussionPost[] = [ {
  id: 1;
author: "Anna Zhou";
time: "2h ago";
title: "What AI trends are you most excited for in 2025?";
body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?" 
};
{
  id: 2;
const handleAddPost = () => {
  if (!newTitle.trim () || !newBody.trim () ) return;
setPosts ([ {
  id: Date.now ();
author: "You";
time: "Now";
title: newTitle;
body: newBody 
};
...posts]);
setNewTitle ("");
setNewBody ("");
setShowNew (false);
};
  newTitle 
}onChange= {
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) 
}maxLength= {
  80 
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) 
}.join ("") .toUpperCase () .slice (0, 2) 
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {
  post.author 
}</span> <span className="text-xs text-zion-slate-light"> {
  post.time 
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {
  post.title 
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {
  post.body 
}</p> </div> </CardContent> </Card>) ) 
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) 
};
</AvatarFallback>
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
  );
}

);
                </AvatarFallback>;
              </Avatar>;
              <div>;
                <div className="flex gap-2 items-center">;
                  <span className="font-semibold text-white">{post.author}</span>;
                  <span className="text-xs text-zion-slate-light">{post.time}</span>;
                </div>;
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>;
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
}
;

=======


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
