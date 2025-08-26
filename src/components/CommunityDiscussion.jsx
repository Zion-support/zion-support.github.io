import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

// Simple Button component to avoid import issues
const Button = ({ children, variant = 'default', size = 'sm', onClick, disabled = false, className = '' }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        default: 'bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light focus:ring-zion-cyan',
        secondary: 'bg-zion-blue text-white hover:bg-zion-blue-dark focus:ring-zion-blue'
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

// Simple Input component to avoid import issues
const Input = ({ placeholder, className = '', value, onChange, maxLength }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    );
};

// Simple Textarea component to avoid import issues
const Textarea = ({ placeholder, className = '', value, onChange, maxLength, rows = 3 }) => {
    return (
        <textarea
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            rows={rows}
        />
    );
};

// Simple Avatar component to avoid import issues
const Avatar = ({ children, className = '' }) => {
    return (
        <div className={`w-10 h-10 rounded-full bg-zion-cyan flex items-center justify-center text-zion-blue font-semibold ${className}`}>
            {children}
        </div>
    );
};

const AvatarFallback = ({ children }) => {
    return <span className="text-sm">{children}</span>;
};

// Simple Card component to avoid import issues
const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md border ${className}`}>
            {children}
        </div>
    );
};

const CardContent = ({ children, className = '' }) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};

// Simple Separator component to avoid import issues
const Separator = ({ className = '' }) => {
    return (
        <div className={`border-t border-gray-200 ${className}`}>
        </div>
    );
};
const initialPosts = [
    {
        id: 1,
        author: "Anna Zhou",
        time: "2h ago",
        title: "What AI trends are you most excited for in 2025?",
        body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?",
    },
    {
        id: 2,
        author: "David Kim",
        time: "50m ago",
        title: "Quick tip: How to rank your Zion listing higher",
        body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",
    },
];
export const CommunityDiscussion = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [showNew, setShowNew] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const handleAddPost = () => {
        if (!newTitle.trim() || !newBody.trim())
            return;
        setPosts([
            {
                id: Date.now(),
                author: "You",
                time: "Now",
                title: newTitle,
                body: newBody,
            },
            ...posts,
        ]);
        setNewTitle("");
        setNewBody("");
        setShowNew(false);
    };
    return (<div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle aria-hidden="true" size={28} className="text-zion-cyan"/>
        <span className="font-bold text-2xl text-white tracking-tight">
          Community Discussion
        </span>
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">
          {posts.length} posts
        </span>
      </div>
      <Separator className="mb-6"/>
      <div className="mb-4 flex justify-end">
        <Button className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale" size="sm" onClick={() => setShowNew((v) => !v)}>
          {showNew ? "Cancel" : "New Post"}
        </Button>
      </div>
      {showNew && (<Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input placeholder="Title (e.g., Share an AI tool, Ask for help...)" className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} maxLength={80}/>
            <Textarea placeholder="What's on your mind?" className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]" value={newBody} onChange={(e) => setNewBody(e.target.value)} maxLength={400} rows={3}/>
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" size="sm" className="bg-zion-blue text-white hover:bg-zion-blue-dark" onClick={() => setShowNew(false)}>
                Cancel
              </Button>
              <Button size="sm" className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale" onClick={handleAddPost} disabled={!newTitle.trim() || !newBody.trim()}>
                Post
              </Button>
            </div>
          </CardContent>
        </Card>)}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (<Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                .split(" ")
                .map((s) => s[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
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
          </Card>))}
      </div>
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>);
};
