<<<<<<< HEAD
=======

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
>>>>>>> origin/cursor/delete-old-data-records-6bba


import React, { useState } from "react",
import { MessageCircle } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Avatar, AvatarFallback } from "@/components/ui/avatar",


import React, { useState } from './react';

import { MessageCircle  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';

interface DiscussionPost {

interface DiscussionPost {
<<<<<<< HEAD



=======
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface DiscussionPost {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
import { Card, CardContent } from "@/components/ui/card","
import { Separator } from "@/components/ui/separator",

interface DiscussionPost {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,

<<<<<<< HEAD

  body: string
}



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
const initial_posts: DiscussionPost[] = [;
  {}
    id: 1,"
    author: "Anna Zhou","
    time: "2h ago","
    title: "What AI trends are you most excited for in 2025?",


<<<<<<< HEAD
  {
    id: 2
    author: "David Kim"
    time: "50m ago"
    title: "Quick tip: How to rank your Zion listing higher"
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."
  }
];


=======
  {;
    id: 1,;"
    author: "Anna Zhou",;"
    time: "2h ago",;"
    title: "What AI trends are you most excited for in 2025?",
  {;
    id: 2,;"
    author: "David Kim",;"
    time: "50m ago",;"
    title: "Quick tip: How to rank your Zion listing higher",


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  }
<<<<<<< HEAD

    setNewTitle(""),
    setNewBody(""),
    setShowNew(false)
  },

=======
  return (
        author: "You",
        time: "Now",
        title: newTitle,
        body: newBody},
      ...posts]),
    setNewTitle($2);
    setNewBody($2);
    setShowNew(false)
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={28} className="text-zion-cyan" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />
<<<<<<< HEAD


              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"

=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from "react",;
import { MessageCircle } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;
<<<<<<< HEAD

import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;

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

        <Button
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}

        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;

=======


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


    setNewBody(""),;
    setShowNew(false),;
  },;
;
  return (;


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

              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
>>>>>>> origin/cursor/delete-old-data-records-6bba


                disabled={!newTitle.trim() |!newBody.trim()}
                disabled={!newTitle.trim() || !newBody.trim()}


<<<<<<< HEAD


              >
                Post

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </Button>
            </div>
          </CardContent>
        </Card>

<<<<<<< HEAD

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}>;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              >;
                Cancel;
              </Button>;
              <Button;"
                size="sm";

<<<<<<< HEAD
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale";
                onClick={handleAddPost}
                disabled={!newTitle.trim() || !newBody.trim()}
              >;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
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




=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
