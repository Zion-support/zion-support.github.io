<<<<<<< HEAD

import React, { useState } from "react",
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
=======
  id: number,
  author: string,
  avatar?: string,
  time: string,
body: string
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Avatar, AvatarFallback } from '@/components / ui / avatar';
import { Card, CardContent } from '@/components / ui / card';
import { Separator } from '@/components / ui / separator';
interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,  time: string,
  title: string,
  body: string;
pr-12325
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
>>>>>>> origin/main

interface DiscussionPost {
  body: string;

const initialPosts: DiscussionPost[] = [
  {
    id: 1,
author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",
  },
  {
    id: 2,
    author: 'David Kim',
    time: '50m ago',
    title: 'Quick tip: How to rank your Zion listing higher',
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',
  },
];

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  body: string
origin/cursor/automate-test-improve-and-merge-code-2533
}
const initialPosts: DiscussionPost[] = [
  {
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
const initial_posts: DiscussionPost[] = [;
  {

    id: 1,
    author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?",
  },
    id: 2,
export const CommunityDiscussion: React.FC = () => {
    author: 'David Kim',
    time: '50m ago',
    title: 'Quick tip: How to rank your Zion listing higher',
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',
  },
];
export const CommunityDiscussion: React.FC = () => {
  const [posts, set_posts] = useState (initial_posts);
  const [show_new, setShowNew] = useState (false);
  const [new_title, setNewTitle] = useState ('');
  const [new_body, setNewBody] = useState ('');  const [new_title, setNewTitle] = useState ("");
  const [new_body, setNewBody] = useState ("");
  const handleAddPost = () =>: any {
    if (|| !new_body.trim ()) return) {
  $2
}
    set_posts ([;
      {
        id: Date.now (),
        author: 'You',
        time: 'Now',
        title: new_title,
        body: new_body,
      },
      ...posts,
    ]);
    setNewTitle ('');
    setNewBody ('');
    setShowNew (false);

  }
import React, { useState, useMemo } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface DiscussionPost {;
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
<<<<<<< HEAD


  body: string
}
const initialPosts: DiscussionPost[] = [
  {

=======
  body: string;
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,  time: string,;
  title: string,;
  body: string;
}
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;
    author: 'Anna Zhou',;
    time: '2h ago',;
    title: 'What AI trends are you most excited for in 2025?',;
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",;
  },;
    id: 2,;
    author: 'David Kim',;
    time: '50m ago',;
    title: 'Quick tip: How to rank your Zion listing higher',;
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',;
  },;
];

export const CommunityDiscussion: React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');

export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),
  const handleAddPost = () => {
  const [newBody, setNewBody] = useState('');  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleAddPost = () => {;
    if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {;
        id: Date && Date.now(),;
        author: 'You',;
        time: 'Now',;
        title: newTitle,;
        body: newBody,;
      },;
      ...posts,;
    ]);
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
  const handleAddPost = () => {
    if (!newTitle.trim() |!newBody.trim()) return
    setPosts([
      {
        id: Date.now(),
author: 'You',
        time: 'Now',
        title: newTitle,
        body: newBody,
      },
      ...posts,
    ]);
origin/cursor/automate-test-improve-and-merge-code-2533
    setNewTitle('');
    setNewBody('');
    setShowNew(false);
  };

  return (

              className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'        title: newTitle,

        body: newBody},
      ...posts])
    setNewTitle("")
    setNewBody("")
    setShowNew(false)
    <div className='w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in'>;
      <div className='flex items - center gap - 3 mb - 4'>;
        <MessageCircle size={28} className='text - zion - cyan' />;
        <span className='font - bold text - 2xl text - white tracking - tight'>;
          Community Discussion;
        </span>;
        <span className='ml - auto text - xs text - zion - slate - light bg - zion - purple / 20 rounded - full px - 2 py - 0.5'>;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className='mb - 6' />;
      <div className='mb - 4 flex justify - end'>;
        <Button;
          className='bg - zion - purple text - white hover:bg - zion - purple - light transition hover - scale';
          size='sm';
          on_click={() => setShowNew (v => !v)}        >;
          {show_new ? 'Cancel' : 'New Post'}
        </Button>;
      </div>;
      {show_new && (
        <Card className='mb - 6 animate - scale - in'>;
          <CardContent className='py - 5'>;
            <Input;
              placeholder='Title (e.g., Share an AI tool, Ask for help...)';
              className='mb - 3 bg - zion - blue - light text - black placeholder:text - zion - slate';
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                setNewTitle (e.target.value);
              }              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,
        body: new_body},
      ...posts]);
    setNewTitle ("");
    setNewBody ("");
    setShowNew (false);
  }



  return (


    id: 1,





  const handleAddPost = () => {

    if (!newTitle.trim() || !newBody.trim()) return,
    setPosts([
      {
        id: Date.now(),

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
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
    <div className='w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in'>
      <div className='flex items-center gap-3 mb-4'>
        <MessageCircle size={28} className='text-zion-cyan' />
        <span className='font-bold text-2xl text-white tracking-tight'>
          Community Discussion
        </span>
        <span className='ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5'>
          {posts.length} posts
        </span>
      </div>
      <Separator className='mb-6' />
      <div className='mb-4 flex justify-end'>
        <Button
          className='bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale'
          size='sm'
          onClick={() => setShowNew(v => !v)}        >
          {showNew ? 'Cancel' : 'New Post'}
        </Button>
      </div>
      {showNew && (
        <Card className='mb-6 animate-scale-in'>
          <CardContent className='py-5'>
            <Input
              placeholder='Title (e.g., Share an AI tool, Ask for help...)'
              className='mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate'
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }
origin/cursor/automate-test-improve-and-merge-code-2533
              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]"
import React, { useState } from "react",;
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
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
  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;
  const [newTitle, setNewTitle] = useState(""),;
  const [newBody, setNewBody] = useState(""),;
  const handleAddPost = () => {;
    if (!newTitle.trim() || !newBody.trim()) return,;
    setPosts([;
      {;
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
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;
      <div className="flex items-center gap-3 mb-4">;
        <MessageCircle size={28} className="text-zion-cyan" />;
        <span className="font-bold text-2xl text-white tracking-tight">;
          Community Discussion;
        </span>;
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;
          {posts && posts.length} posts;
        </span>;
      </div>;
      <Separator className="mb-6" />;
      <div className="mb-4 flex justify-end">;

        <Button;
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";
          size="sm";


          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
            <Input
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}


              maxLength={80}
            />;
            <Textarea
              placeholder="What's on your mind?"


className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewBody(e.target.value)
              }
              maxLength={400}
              rows={3}            />
            <div className='flex gap-3 justify-end'>
              <Button
                variant='secondary'
                size='sm'
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'
                onClick={() => setShowNew(false)}
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Cancel
              </Button>
              <Button


                size="sm"


                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'
origin/cursor/automate-test-improve-and-merge-code-2533
                onClick={handleAddPost}

                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}
                onClick = {handleAddPost,}
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
                disabled = {!newTitle && newTitle.trim() || !newBody && newBody.trim(),}>;
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
              className="mb - 3 bg - zion - blue - light text - black placeholder:text - zion - slate";
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) => setNewTitle (e.target.value)}
              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]';
              value={new_body}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
                setNewBody (e.target.value);
              }
              max_length={400}
              rows={3}            />;
            <div className='flex gap - 3 justify - end'>;
              <Button;
                variant='secondary';
                size='sm';
                className='bg - zion - blue text - white hover:bg - zion - blue - dark'                on_click={() => setShowNew (false)}
                variant="secondary";
                size="sm";
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";
                on_click = {() => setShowNew (false), }
              >;
                Cancel;
              </Button>;
              <Button;
                size='sm';
                className='bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale'                on_click={handleAddPost}                size="sm";
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}
                on_click = {handleAddPost, }
                disabled = {!new_title.trim () || !new_body.trim (), }
              >;

                Post;
              </Button>;
            </div>;
          </CardContent>;


        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )

      </div>;
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
                disabled = {!newTitle.trim() |!newBody.trim(),}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
<div className='flex flex-col gap-6'>
        {posts.map(post => (
          <Card
            key={post.id}
            className='bg-zion-blue border-zion-slate-dark shadow-lg'
          >
            <CardContent className='py-4 flex gap-4'>
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(' ')
                    .map(s => s[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
<div className='flex gap-2 items-center'>
                  <span className='font-semibold text-white'>
                    {post.author}
                  </span>
                  <span className='text-xs text-zion-slate-light'>
                    {post.time}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-zion-cyan mt-1'>
                  {post.title}
                </h3>
                <p className='text-zion-slate-light mt-1 whitespace-pre-line'>
                  {post.body}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<div className='mt-8 text-xs text-zion-slate-dark text-center'>
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
};
  newTitle ;
}onChange= {;
  (e: React && React.ChangeEvent<HTMLInputElement>) => setNewTitle (e && e.target.value) ;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;
origin/cursor/automate-test-improve-and-merge-code-2533
}maxLength= {;
  80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;
  post && post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post && post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post && post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post && post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
'"      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  );
};

        </Card>)}
      <div className='flex flex - col gap - 6'>;
        {posts.map (post => (
          <Card;
            key={post.id}
            className='bg - zion - blue border - zion - slate - dark shadow - lg';
          >;
            <CardContent className='py - 4 flex gap - 4'>;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (' ');
                    .map (string => s[0]);
                    .join ('')                    .toUpperCase ()      <div className="flex flex - col gap - 6">;
        {posts.map ((post, ) => (
          <Card key={post.id} className="bg - zion - blue border - zion - slate - dark shadow - lg">;
            <CardContent className="py - 4 flex gap - 4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (" ");
                    .map ((s, ) => s[0]);
                    .join ("");
                    .slice (0, 2)}
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
                <div className='flex gap - 2 items - center'>;
                  <span className='font - semibold text - white'>;
                    {post.author}
                  </span>;
                  <span className='text - xs text - zion - slate - light'>;
                    {post.time}
                  </span>;
                </div>;
                <h3 className='text - lg font - bold text - zion - cyan mt - 1'>;
                  {post.title}
                </h3>;
                <p className='text - zion - slate - light mt - 1 whitespace - pre - line'>;
                  {post.body}
                </p>              </div>                <div className="flex gap - 2 items - center">;
                  <span className="font - semibold text - white">{post.author}</span>;
                  <span className="text - xs text - zion - slate - light">{post.time}</span>;
                </div>;
                <h3 className="text - lg font - bold text - zion - cyan mt - 1">{post.title}</h3>;
                <p className="text - zion - slate - light mt - 1 whitespace - pre - line">{post.body}</p>;
            </CardContent>;
          </Card>))}
      </div>;
      <div className='mt - 8 text - xs text - zion - slate - dark text - center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>);
}
  new_title;
}on_change= {
  (e: React.ChangeEvent < HTMLInputElement>) => setNewTitle (e.target.value);
}max_length= {
  80 ";
}/> <Textarea /> <div className=" flex gap - 3 justify - end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap - 2 items - center"> <span className="font - semibold text - white"> {
  post.author ";
}</span> <span className="text - xs text - zion - slate - light"> {
  post.time ";
}</span> </div> <h3 className="text - lg font - bold text - zion - cyan mt - 1"> {
  post.title ";
}</h3> <p className="text - zion - slate - light mt - 1 whitespace - pre - line"> {
  post.body;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt - 8 text - xs text - zion - slate - dark text - center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>);
}
'"      <div className="mt - 8 text - xs text - zion - slate - dark text - center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>);
}
  post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
'"
origin/cursor/automate-test-improve-and-merge-code-2533
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
}

const initial_posts: DiscussionPost[] = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'JD',
    time: '2 hours ago',
    title: 'Best practices for React performance optimization',
    body: 'I\'ve been working on optimizing a large React application and wanted to share some techniques that have worked well for me...
  },
    id: 2,
    author: 'Jane Smith',
    avatar: 'JS',
    time: '4 hours ago',
    title: 'TypeScript vs JavaScript for large projects',
    body: 'What are your thoughts on using TypeScript for large-scale applications? I\'m considering migrating our codebase...
    id: 3,
    author: 'Mike Johnson',
    avatar: 'MJ',
    time: '1 day ago',
    title: 'Database design patterns for microservices',
    body: 'I\'m architecting a microservices system and would love to hear about database design patterns that work well...
];

const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState<DiscussionPost[]>(initial_posts);
  const [newPost, setNewPost] = useState({ title: , body:  });
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.body.trim()) {
      const post: DiscussionPost = {
        id: Date.now(),
        author: 'You',
        avatar: 'Y',
        time: 'Just now',
        title: newPost.title,
        body: newPost.body
      };
      setPosts([post, ...posts]);
      setNewPost({ title: , body:  });
      setIsCreatingPost(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Community Discussion</h2>
      </div>

      {/* Create New Post */}
      <Card className="mb-6">
        <CardContent className="p-6">
          {!isCreatingPost ? (
            <Button 
              onClick={() => setIsCreatingPost(true)}
              className="w-full"
            >
              Start a new discussion
            
          ) : (
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Input
                placeholder="Discussion title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
              <Textarea
                placeholder="What would you like to discuss?"
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                rows={4}
              <div className="flex space-x-2">
                <Button type="submit">Post Discussion
                  type="button" 
                  variant="outline"
                  onClick={() => {
                  }}
                  Cancel
                
            </form>
          )}
        
      

      {/* Discussion Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>{post.avatar}
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.body}</p>
              <Separator className="my-4" />
              <div className="flex space-x-4 text-sm text-gray-500">
                <button className="hover:text-blue-600">Reply</button>
                <button className="hover:text-blue-600">Like</button>
                <button className="hover:text-blue-600">Share</button>
            
          
        ))}
  );

export default CommunityDiscussion;
pr-12325
>>>>>>> origin/main
