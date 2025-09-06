<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

<<<<<<< HEAD
=======
=======
import React, { useState } from "react";
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
<<<<<<< HEAD
  time: string;
  title: string;
  body: string;
const initialPosts: DiscussionPost[] = [
  {
    id: 1,
=======
<<<<<<< HEAD
  time: string;
  title: string;
  body: string;
=======
import React, { useState } from "react";
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface DiscussionPost {
  id: number,
  author: string,
  avatar?: string;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  time: string,
  title: string,
  body: string
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const initialPosts: DiscussionPost[] = [
  {
    id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",
  },
<<<<<<< HEAD
=======
=======
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
=======
<<<<<<< HEAD
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
=======
    author: "Anna Zhou",
    time: "2h ago",
    title: "What AI trends are you most excited for in 2025?",
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {
    id: 2,
    author: "David Kim",
    time: "50m ago",
    title: "Quick tip: How to rank your Zion listing higher",
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}];

export const CommunityDiscussion: React.FC = () => {

  const [ posts, setPosts ] = useState(initialPosts),
  const [ showNew, setShowNew ] = useState(false),
  const [ newTitle, setNewTitle ] = useState(""),
  const [ newBody, setNewBody ] = useState(""),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        id: Date.now(),
<<<<<<< HEAD
        author: 'You',
        time: 'Now',
=======
<<<<<<< HEAD
<<<<<<< HEAD
        author: 'You',
        time: 'Now',
=======
        author: "You",
        time: "Now",
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        title: newTitle,
        body: newBody,
      },
      ...posts,
    ]);
    setNewTitle('');
    setNewBody('');
    setShowNew(false);
  };

  return (
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
          onClick={() => setShowNew(v => !v)}
        >
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
<<<<<<< HEAD
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'
=======
<<<<<<< HEAD
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }
=======
        author: "You",
        time: "Now",
        title: newTitle,
        body: newBody},
      ...posts]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false)
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
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'
=======
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewBody(e.target.value)
              }
              maxLength={400}
              rows={3}
            />
            <div className='flex gap-3 justify-end'>
              <Button
<<<<<<< HEAD
                variant='secondary'
                size='sm'
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'                onClick={() => setShowNew(false)}
=======
<<<<<<< HEAD
                variant='secondary'
                size='sm'
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'
=======
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]"
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                onClick={() => setShowNew(false)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                Cancel
              </Button>
              <Button
<<<<<<< HEAD
                size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'                onClick={handleAddPost}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'
=======
                size="sm"
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                size="sm"
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                onClick={handleAddPost}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                disabled={!newTitle.trim() || !newBody.trim()}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                    .join('')                    .toUpperCase()
=======
                    .join('')
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    .toUpperCase()
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                </p>              </div>
=======
                </p>
=======
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">{post.author}</span>
                  <span className="text-xs text-zion-slate-light">{post.time}</span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">{post.author}</span>
                  <span className="text-xs text-zion-slate-light">{post.time}</span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
  );
};
  newTitle ;
}onChange= {;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;
}maxLength= {;
  80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;
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
<<<<<<< HEAD
'"
=======
'"
=======
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )
};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
