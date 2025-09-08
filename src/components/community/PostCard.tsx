import React from 'react';

interface PostCardProps extends React.PropsWithChildren<{}> {

post: {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
    views: number;
author: {
      name: string;
      avatar: string;
    };
  };
}

export default function PostCard(...args: []):  {
  return (

export default PostCard;