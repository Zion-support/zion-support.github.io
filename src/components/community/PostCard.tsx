import React from 'react';
<<<<<<< HEAD
import { ForumPost } from '@/types/community';

interface PostCardProps {
  post: ForumPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zion-cyan mb-2">{post.title}</h3>
          <p className="text-zion-slate-light mb-3 line-clamp-3">{post.content}</p>
          <div className="flex items-center justify-between text-sm text-zion-slate-light">
            <span>By {post.author.name}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-sm text-zion-slate-light">
            <span>{post.replies.length} replies</span>
            <span>{post.likes} likes</span>
            <span>{post.views} views</span>
          </div>
=======

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
      <p className="text-zion-slate-light mb-4 line-clamp-3">{post.content}</p>
      <div className="flex justify-between items-center text-sm text-zion-slate-light">
        <span>By {post.authorName}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <div className="flex items-center space-x-4">
          <span>{post.likes} likes</span>
          <span>{post.replies} replies</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default PostCard;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
