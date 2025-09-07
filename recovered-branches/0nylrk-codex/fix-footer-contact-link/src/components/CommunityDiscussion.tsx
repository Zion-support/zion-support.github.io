
import React, { useState } from "react",""
import { MessageCircle } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea",""
import { Avatar, AvatarFallback } from "@/components/ui/avatar",""
import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";""
import React, { useState } from './react';''
import { MessageCircle  } from './lucide-react';''
import { Button  } from '@/components / ui / button';''
import { Input  } from '@/components / ui / input';''
import { Textarea  } from '@/components / ui / textarea';''
import { Avatar, AvatarFallback  } from '@/components / ui / avatar';''
import { Card, CardContent  } from '@/components / ui / card';''
import { Separator  } from '@/components / ui / separator';'
interface DiscussionPost {
  // TODO: Implement
}
  id: number;,
  author: string;
  avatar?: string;
  time: string;,
  title: string;

'
import { Card, CardContent } from "@/components/ui/card",""
import { Separator } from "@/components/ui/separator","
interface DiscussionPost {
  // TODO: Implement
}
  id: number,
  author: string,
  avatar?: string,
  time: string,
  title: string,
  body: string;
}

  body: string;
}
const initial_posts: DiscussionPost[] = [;
  {
    id: 1,"
    author: "Anna Zhou",""
    time: "2h ago",""
    title: "What AI trends are you most excited for in 2025?",""
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?","
  },

  body: string;
}
  {
    id: 2;,"
  author: "David Kim"""
    time: "50m ago"","
  title: "Quick tip: How to rank your Zion listing higher"","
  body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.""
  }]
];
export const CommunityDiscussion: React.FC = () => {
const initialPosts: DiscussionPost[] = [;
  {;
    id: 1,;"
    author: "Anna Zhou",;""
    time: "2h ago",;""
    title: "What AI trends are you most excited for in 2025?",;"
  {;
    id: 2,;"
    author: "David Kim",;""
    time: "50m ago",;""
    title: "Quick tip: How to rank your Zion listing higher",;""
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month.",;"
  },;]
];


  const handleAddPost = () => {;
    if (!newTitle && newTitle.trim() || !newBody && newBody.trim()) return;
    setPosts([;
      {;)
        id: Date && Date.now(),;"
        author: "You",;""
        time: "Now",;"
        title: newTitle,;
        body: newBody,;
      },;
      ...posts,;
]
    ]);"
    setNewTitle("");""
    setNewBody("");"
    setShowNew(false);
  }
  return (

  return ("
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">"
</div>"
      <div className="flex items-center gap-3 mb-4">"
</div>"
        <MessageCircle size={28} className="text-zion-cyan" />"
</MessageCircle>"
        <span className="font-bold text-2xl text-white tracking-tight">"
</span>
        </span>"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">"
</span>
        </span>
      </div>"
      <Separator className="mb-6" />"
</Separator>"
      <div className="mb-4 flex justify-end">"
</div>
        <Button;"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"""
          size="sm"")
          onClick={() => setShowNew((v) => !v)}
</Button>
        </Button>
      </div>"
        <Card className="mb-6 animate-scale-in">"
</Card>"
          <CardContent className="py-5">"
</CardContent>
            <Input;"
              placeholder="Title (e.g., Share an AI tool, Ask for help...)"""
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate""
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
</Input>
            <Textarea;"
              placeholder="What's on your mind?"""
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"""
import React, { useState } from "react",;""
import { MessageCircle } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Avatar, AvatarFallback } from "@/components/ui/avatar",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Separator } from "@/components/ui/separator",;"
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
    id: 1,;"
    author: "Anna Zhou",;""
    time: "2h ago",;""
    title: "What AI trends are you most excited for in 2025?",;""
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},;"
  {;
    id: 2,;"
    author: "David Kim",;""
    time: "50m ago",;""
    title: "Quick tip: How to rank your Zion listing higher",;"]"
    body: "Fill out every profile detail, add strong tags, and post weekly! See results in a month."}],;"
export const CommunityDiscussion: React.FC = () => {;
</Textarea>"
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;"
</div>"
      <div className="flex items-center gap-3 mb-4">;"
</div>"
        <MessageCircle size={28} className="text-zion-cyan" />;"
</MessageCircle>"
        <span className="font-bold text-2xl text-white tracking-tight">;"
</span>
        </span>;"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0 && 0.5">;"
</span>"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;"
</span>
        </span>;
      </div>;"
      <Separator className="mb-6" />;"
</Separator>"
      <div className="mb-4 flex justify-end">;"
</div>
        <Button;"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"""
          size="sm""
          onClick={() => setShowNew((v) => !v)}
</Button>
        <Button;"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";""
          size="sm";"
          onClick={() => setShowNew((v) => !v)}
</Button>
        </Button>;
      </div>;"
        <Card className="mb-6 animate-scale-in">;"
</Card>"
          <CardContent className="py-5">;"
</CardContent>
            <Input;"
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)"""
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate""
              value={newTitle}
              onChange={(e: React && React.ChangeEvent<HTMLInputElement>) =>;
</Input>
            <Textarea;"
              placeholder="What's on your mind?"""
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]""
              value={newBody}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;
</Textarea>
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
</HTMLTextAreaElement>"
            <div className="flex gap-3 justify-end">"
</div>
              <Button;"
                variant="secondary"""
                size="sm"""
                className="bg-zion-blue text-white hover:bg-zion-blue-dark""
                onClick={() => setShowNew(false)}
</Button>
              </Button>
              <Button;"
                size="sm"""
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale""
                onClick={handleAddPost}
            />;
</Button>
              </Button>
            </div>
          </CardContent>
        </Card>
                </AvatarFallback>
              </Avatar>
              <div>
</div>"
                <div className="flex gap-2 items-center">"
</div>"
                  <span className="font-semibold text-white">"
</span>
                  </span>"
                  <span className="text-xs text-zion-slate-light">"
</span>
                  </span>
                </div>"
                <h3 className="text-lg font-bold text-zion-cyan mt-1">"
</h3>
                </h3>"
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">"
</p>
                </p>
              </div>
            </CardContent>
          </Card>
      </div>"
      <div className="mt-8 text-xs text-zion-slate-dark text-center">"
</div>
      </div>
    </div>"
            <div className="flex gap - 3 justify - end">;"
</div>
              <Button;"
                variant="secondary";""
                size="sm";""
                className="bg - zion - blue text - white hover:bg - zion - blue - dark";"
                on_click={() => setShowNew (false)}
</Button>
              </Button>;
              <Button;"
                size="sm";""
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";"
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}"
                className="bg - zion - cyan text - zion - blue hover:bg - zion - cyan - light hover - scale";"
                on_click={handleAddPost}
                disabled={!new_title.trim () || !new_body.trim ()}
              >;
</Button>
              </Button>;
            </div>;
          </CardContent>;
                </AvatarFallback>;
              </Avatar>;
              <div>;
</div>"
                <div className="flex gap-2 items-center">;"
</div>"
                  <span className="font-semibold text-white">;"
</span>
                  </span>;"
                  <span className="text-xs text-zion-slate-light">;"
</span>
                  </span>;
                </div>;"
                <h3 className="text-lg font-bold text-zion-cyan mt-1">;"
</h3>
                </h3>;"
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">;"
</p>
                </p>;
              </div>;
            </CardContent>;
          </Card>;
      </div>;"
      <div className="mt-8 text-xs text-zion-slate-dark text-center">;"
</div>
      </div>;
    </div>;
        </Card>)}"
      <div className="flex flex - col gap - 6">;"
</div>
          <Card;
            key={post.id}"
            className="bg - zion - blue border - zion - slate - dark shadow - lg";"
          >;
</Card>"
            <CardContent className="py - 4 flex gap - 4">;"
</CardContent>
              <Avatar>;
</Avatar>
                <AvatarFallback>;
</AvatarFallback>
                </AvatarFallback>;
              </Avatar>;
              <div>;
</div>"
                <div className="flex gap - 2 items - center">;"
</div>"
                  <span className="font - semibold text - white">;"
</span>
                  </span>;"
                  <span className="text - xs text - zion - slate - light">;"
</span>
                  </span>;
                </div>;"
                <h3 className="text - lg font - bold text - zion - cyan mt - 1">;"
</h3>
                </h3>;"
                <p className="text - zion - slate - light mt - 1 whitespace - pre - line">;"
</p>
                </p>;
              </div>;
            </CardContent>;
          </Card>))}
      </div>;"
      <div className="mt - 8 text - xs text - zion - slate - dark text - center">;"
</div>
      </div>;
    </div>);"