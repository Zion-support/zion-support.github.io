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
    id: 1,  time: string
  title: string

    id: 1,  time: string,
import React, { useState } from "react",
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
interface DiscussionPost {
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
  body: string;
}
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,
export const CommunityDiscussion: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts),
  const [showNew, setShowNew] = useState(false),
  const [newTitle, setNewTitle] = useState(""),
  const [newBody, setNewBody] = useState(""),

  return (

              className='mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]'        title: newTitle,

        body: newBody},
      ...posts])
    setNewTitle("")
    setNewBody("")
  const handleAddPost = () => {


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
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]";
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
                size='sm'
                className='bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale'                onClick={handleAddPost}                size="sm"
                size="sm"


        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  )
}

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
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
  );
};
  newTitle ;
}onChange= {;
  (e: React && React.ChangeEvent<HTMLInputElement>) => setNewTitle (e && e.target.value) ;
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
}
