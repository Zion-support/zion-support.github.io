import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";""
import { Avatar, AvatarFallback } from "@/components/ui/avatar";""
import { Card, CardContent } from "@/components/ui/card";""
import { Separator } from "@/components/ui/separator";"
;
interface DiscussionPost {;
  id: number;,;
  author: string;,;
  avatar?:string,;
  time: string;,;
  title: string;,;
  body:string;
}
const initialPosts:DiscussionPost[] = [;
  {;
    id: 1;,;"
    author: "Anna Zhou";,;""
    time: "2h ago";,;""
    title: "What AI trends are you most excited for in 2025?";,;""
    body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?";},;"
    id: 2;,;"
    author: "David Kim";,;""
    time: "50m ago";,;""
    title: "Quick tip:How to rank your Zion listing higher";,;"]"
    body: "Fill out every profile detail;, add strong tags, and post weekly! See results in a month."}],;"
export const CommunityDiscussion:React.FC = () => {;
  const [posts, setPosts] = useState(initialPosts),;
  const [showNew, setShowNew] = useState(false),;"
  const [newTitle, setNewTitle] = useState(""),;""
  const [newBody, setNewBody] = useState(""),;"
  const handleAddPost = () => {;
    if (!newTitle.trim() || !newBody.trim()) return,;
    setPosts([;
      {;)
        id: Date.now();,;"
        author: "You";,;""
        time: "Now";,;"
        title: newTitle;,;
        body: newBody;},;]
      ...posts]),;"
    setNewTitle(""),;""
    setNewBody(""),;"
    setShowNew(false),;
  },;
  return (;"
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">;"
</div>"
      <div className="flex items-center gap-3 mb-4">;"
        <MessageCircle size={28} className="text-zion-cyan" />;"
"
        <span className="font-bold text-2xl text-white tracking-tight">;"
</span>
        </span>;"
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">;"
        </span>;
      </div>;"
      <Separator className="mb-6" />;"
      <div className="mb-4 flex justify-end">;"
</div>
        <Button;"
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale";""
          size="sm";")
          onClick={() => setShowNew((v) => !v)}

        <Card className="mb-6 animate-scale-in">;"
          <CardContent className="py-5">;"
            <Input;"
              placeholder="Title (e.g., Share an AI tool, Ask for help...)";""
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate";"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value);}

            <Textarea;"
              placeholder="What's on your mind?";""
              className="mb-4 bg-zion-blue-light text-black placeholder:text-zion-slate min-h-[70px]";              value={newBody}"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value);}
            <div className="flex gap-3 justify-end">;"
                variant="secondary";""
                size="sm";""
                className="bg-zion-blue text-white hover:bg-zion-blue-dark";"
                onClick={() => setShowNew(false)}

                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale";"
                onClick={handleAddPost}
                disabled={!newTitle.trim() || !newBody.trim()}

              >;

            </div>;

              <Avatar>;

                <AvatarFallback>;

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
         Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  ),;},
 interface DiscussionPost {;
  id: number;
author: string;
avatar?: string;
time: string;
title: string;
body: string ;
}const initialPosts: DiscussionPost[] = [ {;
  id: 1;
author: "Anna Zhou";";
time: "2h ago";";
title: "What AI trends are you most excited for in 2025?";";
body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?" ;
};
{;

  id: 2;
const handleAddPost = () => {;

  if (!newTitle.trim () || !newBody.trim () ) return;
setPosts ([ {;
  id: Date.now ();";
author: "You";";
time: "Now";
title: newTitle;
body: newBody ;
};
...posts]);";
setNewTitle ("");";
setNewBody ("");
setShowNew (false)
};";
  newTitle ;
}onChange= {;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;

}maxLength= {;
  80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;