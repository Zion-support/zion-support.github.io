
  title: string,
  body: string;
}

  {
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    id: 1,
    author: 'Anna Zhou',
    time: '2h ago',
    title: 'What AI trends are you most excited for in 2025?',
    body: "Let's spark some ideas! I'm excited to see multi - modal models and open - source AI tools grow. What are you watching?",
  },
    id: 2,

export const CommunityDiscussion: React.FC = () => {;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [posts, setPosts] = useState(initialPosts);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');

    setShowNew(false)
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className='w - full max - w-2xl mx - auto mt - 8 p - 6 bg - zion - blue - light rounded - 2xl shadow - xl animate - fade - in'>;
      <div className='flex items - center gap - 3 mb - 4'>;
        <MessageCircle size={28} className='text - zion - cyan' />;
        <span className='font - bold text - 2xl text - white tracking - tight'>;
          Community Discussion;
        </span>;
        <span className='ml - auto text - xs text - zion - slate - light bg - zion - purple / 20 rounded - full px - 2 py - 0.5'>;
          {posts.length} posts;
        </span>;
      </div>;
      <Separator className='mb - 6' />;
      <div className='mb - 4 flex justify - end'>;
        <Button;
          className='bg - zion - purple text - white hover:bg - zion - purple - light transition hover - scale';
          size='sm';
          on_click={() => setShowNew (v => !v)}        >;
          {show_new ? 'Cancel' : 'New Post'}
        </Button>;
      </div>;
      {show_new && (
        <Card className='mb - 6 animate - scale - in'>;
          <CardContent className='py - 5'>;
            <Input;
              placeholder='Title (e.g., Share an AI tool, Ask for help...)';
              className='mb - 3 bg - zion - blue - light text - black placeholder:text - zion - slate';
              value={new_title}
              on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                setNewTitle (e.target.value);
              }              max_length={80}
            />;
            <Textarea;
              placeholder="What's on your mind?";
              className='mb - 4 bg - zion - blue - light text - black placeholder:text - zion - slate min - h-[70px]'        title: new_title,
        body: new_body},
      ...posts]);
    setNewTitle ("");
    setNewBody ("");
    setShowNew (false);
  }

  return (

    id: 1,

  const handleAddPost = () => {

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle size={28} className="text-zion-cyan" />
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

        </Button>
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      </div>
      {showNew && (
        <Card className="mb-6 animate-scale-in">
          <CardContent className="py-5">
            <Input

              placeholder="Title (e.g., Share an AI tool, Ask for help...)"
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
              maxLength={80}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

          onClick={() => setShowNew((v) => !v)}
        >;
          {showNew ? "Cancel" : "New Post"}
        </Button>;
      </div>;
      {showNew && (;
        <Card className="mb-6 animate-scale-in">;
          <CardContent className="py-5">;
            <Input
              placeholder="Title (e && e.g., Share an AI tool, Ask for help...)"
              className="mb-3 bg-zion-blue-light text-black placeholder:text-zion-slate"
              value={newTitle}

              >
                Cancel
              </Button>
              <Button
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

                className="bg-zion-cyan text-zion-blue hover:bg-zion-cyan-light hover-scale"
                onClick={handleAddPost}

                disabled={!newTitle && newTitle.trim() || !newBody && newBody.trim()}
                onClick = {handleAddPost,}

      </div>;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>;
        🚀 Stay engaged! Top contributors are regularly featured on the;
        homepage.;
      </div>;
    </div>;
  )
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
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) 
};
'"      <div className="mt-8 text-xs text-zion-slate-dark text-center">;
        🚀 Stay engaged! Top contributors are regularly featured on the homepage.;
      </div>;
    </div>;
  )
};

        </Card>)}
      <div className='flex flex - col gap - 6'>;
        {posts.map (post => (
          <Card;
            key={post.id}
            className='bg - zion - blue border - zion - slate - dark shadow - lg';
          >;
            <CardContent className='py - 4 flex gap - 4'>;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (' ');
                    .map (string => s[0]);
                    .join ('')                    .toUpperCase ()      <div className="flex flex - col gap-6">;
        {posts.map ((post, ) => (
          <Card key={post.id} className="bg - zion - blue border - zion - slate - dark shadow-lg">;
            <CardContent className="py - 4 flex gap-4">;
              <Avatar>;
                <AvatarFallback>;
                  {post.author;
                    .split (" ");
                    .map ((s, ) => s[0]);
                    .join ("");
                    .slice (0, 2)}
                </AvatarFallback>;
              </Avatar>;
              <div>;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
