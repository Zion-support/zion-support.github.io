

interface DiscussionPost {
  body: string;

const initialPosts: DiscussionPost[] = [
  {
    id: 1,
author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: 'Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?',
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
const initial_posts: DiscussionPost[] = [;,
const initialPosts: DiscussionPost[] = [
  {
    author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: 'Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?'},
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,
    author: 'Anna Zhou','
    time: '2h ago','
    title: 'What AI trends are you most excited for in 2025?','
    body: 'Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?','
  },
    id: 2,
    author: 'David Kim','
    time: '50m ago','
    title: 'Quick tip: How to rank your Zion listing higher','
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.','
export const CommunityDiscussion: React.FC = () => {
    author: 'David Kim',
    time: '50m ago',
    title: 'Quick tip: How to rank your Zion listing higher',
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.',
  },
];
export const CommunityDiscussion: React.FC = () => {,
  const [posts, set_posts] = useState (initial_posts);,
  const [show_new, setShowNew] = useState (false);,
  const [new_title, setNewTitle] = useState ('');,
  const [new_body, setNewBody] = useState ('');  const [new_title, setNewTitle] = useState ('');,
  const [new_body, setNewBody] = useState ('');
  const handleAddPost = () =>: any {
    if (|| !new_body.trim ()) return) {
  $2
},
    set_posts ([;
      {
        id: Date.now (),
        author: 'You','
        time: 'Now','
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
  id: number;,
  author: string;,
  avatar?: string;

    id: 1;
    author: 'Anna Zhou';
    time: '2h ago';
    title: 'What AI trends are you most excited for in 2025?';
    body: 'Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?'},
  {
    id: 2;
    author: 'David Kim';
    time: '50m ago';
    title: 'Quick tip: How to rank your Zion listing higher';
    body: 'Fill out every profile detail, add strong tags, and post weekly! See results in a month.'}],

export const CommunityDiscussion: React.FC;

