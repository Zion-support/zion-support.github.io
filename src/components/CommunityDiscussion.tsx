import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
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
  id: number
  author: string
  avatar?: string
  time: string
  title: string
  body: string
const initialPosts: DiscussionPost[] = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'JD',
    time: '2 hours ago',
    title: 'Best practices for React performance optimization',
    body: 'I've been working on optimizing a large React application and wanted to share some techniques that have worked well for me...'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'JS',
    time: '4 hours ago',
    title: 'TypeScript vs JavaScript for large projects',
    body: 'What are your thoughts on using TypeScript for large-scale applications? I'm considering migrating our codebase...'
  },
  {
    id: 3,
    author: 'Mike Johnson',
    avatar: 'MJ',
    time: '1 day ago',
    title: 'Database design patterns for microservices',
    body: 'I'm architecting a microservices system and would love to hear about database design patterns that work well...'
  }
        author: 'You',
        time: 'Now',
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
          className='bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale'
          size='sm'
          onClick={() => setShowNew(v => !v)}        >
          {showNew ? 'Cancel' : 'New Post'}
        </Button>
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input
              placeholder='Title (e.g., Share an AI tool, Ask for help...)'
              className='mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate'
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTitle(e.target.value)
              }              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'        title: newTitle
        body: newBody}
      ...posts])
    setNewTitle("")
    setNewBody("")
    setShowNew(false)
  }
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
              maxLength={80}
            />
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
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'                onClick={() => setShowNew(false)}
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
                onClick = {() => setShowNew(false),}
              >
                Cancel
              </Button>
              <Button
                size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'                onClick={handleAddPost}                size="sm"
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
                onClick={handleAddPost}
                disabled={!newTitle.trim() |!newBody.trim()}
                onClick = {handleAddPost,}
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
                    .join('')                    .toUpperCase()      <div className="flex flex-col gap-6">
        {posts.map((post,) => (
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((s,) => s[0])
                    .join("")
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
                </p>              </div>                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">{post.author}</span>
                  <span className="text-xs text-zion-slate-light">{post.time}</span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{post.title}</h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{post.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
  )
}
  newTitle
}onChange= {
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value)
}maxLength= {
  80 "
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) "
}.join ("") .toUpperCase () .slice (0, 2) "
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {
  post.author "
}</span> <span className="text-xs text-zion-slate-light"> {
  post.time "
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {
  post.title "
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {
  post.body
}</p> </div> </CardContent> </Card>) ) "
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>)
}
'"      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )
}