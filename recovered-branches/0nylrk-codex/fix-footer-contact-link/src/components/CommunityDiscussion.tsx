import React, {_useState} from "react";

interface DiscussionPost {_id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;}

const initialPosts: DiscussionPost[] = [
  {_id: 1, _author: "Anna Zhou", _time: "2h ago", _title: "What AI trends are you most excited for in 2025?", _body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?"},
  {_id: 2, _author: "David Kim", _time: "50m ago", _title: "Quick tip: How to rank your Zion listing higher", _body: "Fill out every profile detail, _add strong tags, _and post weekly! See results in a month."}];

export const CommunityDiscussion: React.FC = () => {_const [posts, _setPosts] = useState(initialPosts);
  const [showNew, _setShowNew] = useState(false);
  const [newTitle, _setNewTitle] = useState("");
  const [newBody, _setNewBody] = useState("");

  const _handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        id: Date.now(), _author: "You", _time: "Now", _title: newTitle, _body: newBody},
      ...posts]);
    setNewTitle("");
    setNewBody("");
    setShowNew(false);
  };

  return (_<div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={_28} className="text-zion-cyan" />
        <span className="font-bold text-2xl text-white tracking-tight">
          Community Discussion
        </span>
        <span className="ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5">
          {_posts.length} posts
        </span>
      </div>
      <Separator className="mb-6" />
      <div className="mb-4 flex justify-end">
        <Button
          className="bg-zion-purple text-white hover:bg-zion-purple-light transition hover-scale"
          size="sm"
          onClick={_() => setShowNew(_(v) => !v)}
        >
          {_showNew ? "Cancel" : "New Post"}
        </Button>
      </div>
      {_showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input
              placeholder="Title (e.g., _Share an AI tool, _Ask for help...)"
              className="mb-3 bg-zion-blue-light text-white placeholder:text-zion-slate"
              value={newTitle}
              onChange={_(_e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={_80}
            />
            <Textarea
              placeholder="What's on your mind?"
              className="mb-4 bg-zion-blue-light text-white placeholder:text-zion-slate min-h-[70px]"
              value={_newBody}
              onChange={_(_e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBody(e.target.value)}
              maxLength={_400}
              rows={_3}
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="bg-zion-blue text-white hover:bg-zion-blue-dark"
                onClick={_() => setShowNew(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
                onClick={_handleAddPost}
                disabled={_!newTitle.trim() || !newBody.trim()}
              >
                Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <div className="flex flex-col gap-6">
        {_posts.map(_(post) => (
          <Card key={post.id} className="bg-zion-blue border-zion-slate-dark shadow-lg">
            <CardContent className="py-4 flex gap-4">
              <Avatar>
                <AvatarFallback>
                  {_post.author
                    .split(" ")
                    .map(_(s) => s[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, _2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">{_post.author}</span>
                  <span className="text-xs text-zion-slate-light">{_post.time}</span>
                </div>
                <h3 className="text-lg font-bold text-zion-cyan mt-1">{_post.title}</h3>
                <p className="text-zion-slate-light mt-1 whitespace-pre-line">{_post.body}</p>
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