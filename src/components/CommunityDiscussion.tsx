impor, t, Reac, t, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avata, r, AvatarFallback } from "@/components/ui/avatar";
import { Car, d, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface DiscussionPost {
  i, d: number;
  autho, r: string;
  avatar?: string;
  tim, e: string;
  titl, e: string;
  bod, y: string;
}

const initialPost, s: DiscussionPost[] = [
  {
    i, d: 1,
    auth, o, r: "Ann, a Zho, u",
    ti, m, e: "2, h ag, o",
    tit, l, e: "Wha, t A, I trend, s ar, e yo, u mos, t excite, d fo, r i, n 202, 5?",
    bo, d, y: "Le, t's spar, k som, e idea, s! I'm excite, d t, o se, e mult, i-moda, l model, s an, d ope, n-sourc, e A, I tool, s gro, w. Wha, t ar, e yo, u watchin, g?",
  },
  {
    i, d: 2,
    auth, o, r: "Davi, d Ki, m",
    ti, m, e: "50, m ag, o",
    tit, l, e: "Quic, k t, i, p: Ho, w t, o ran, k you, r Zio, n listin, g highe, r",
    bo, d, y: "Fil, l ou, t ever, y profi, l, e, deta, i, l, ad, d stro, n, g, ta, g, s, an, d pos, t weekl, y! Se, e result, s i, n a mont, h.",
  },
];

export const CommunityDiscussio, n: React.FC = () => {
  const [pos,  t, s, setPos, t, s] = useState(initialPosts);
  const [showN, e, w, setShowN, e, w] = useState(false);
  const [newTit,  l, e, setNewTit, l, e] = useState("");
  const [newBo, d, y, setNewBo, d, y] = useState("");

  const handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        i,  d: Dat, e.no, w(),
    auth, o, r: "Yo, u",
        ti, m, e: "No, w",
    tit, l, e: newTit, l, e,
        bo, d, y: newBo, d, y,
      },
      ...pos, t, s,
    ]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle aria-hidden="true" size={28} className="text-zion-cyan" />
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
          className="bg-zion-purple text-white hove,  r:bg-zion-purple-light transition hover-scale"
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
              placeholder="Title (e.g.,  Share an A, I, too, l, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-black placeholde, r:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-black placeholde,  r:text-zion-slate min-h-[70, p, x]"
              value={newBody}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={400}
              rows={3}
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hove,  r:bg-zion-blue-dark"
                onClick={() => setShowNew(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-zion-cyan text-zion-blue hove,  r:bg-zion-cyan-light hover-scale"
                onClick={handleAddPost}
                disabled={!newTitle.trim() || !newBody.trim()}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
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
                    .slice(0,  2)}
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
          </Card>
        ))}
      </div>
      <div className="mt-8 text-xs text-zion-slate-dark text-center">
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.
      </div>
    </div>
  );
};