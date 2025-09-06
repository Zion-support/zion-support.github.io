interface DiscussionPost {
  id: number;
  author: string;
  avatar?: string;
  time: string;
  title: string;
  body: string;
const initialPosts: DiscussionPost[] = [
  {
    id: 1,
  time: string,
  title: string,
  body: string
}

const initialPosts: DiscussionPost[] = [
  {
    id: 1,

  const handleAddPost = () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: 'You',
        time: 'Now',

        title: newTitle,
        body: newBody,
      },
      ...posts,
    ]);
    setNewTitle('');
    setNewBody('');
    setShowNew(false);
  };

  return (
    <div className='w-full max-w-2xl mx-auto mt-8 p-6 bg-zion-blue-light rounded-2xl shadow-xl animate-fade-in'>
      <div className='flex items-center gap-3 mb-4'>
        <MessageCircle size={28} className='text-zion-cyan' />
        <span className='font-bold text-2xl text-white tracking-tight'>
          Community Discussion
        </span>
        <span className='ml-auto text-xs text-zion-slate-light bg-zion-purple/20 rounded-full px-2 py-0.5'>
          {posts.length} posts
        </span>
      </div>
      <Separator className='mb-6' />
      <div className='mb-4 flex justify-end'>
        <Button

        >
          {showNew ? 'Cancel' : 'New Post'}
        </Button>
      </div>
      {showNew && (
        <Card className='mb-6 animate-scale-in'>
          <CardContent className='py-5'>
            <Input

              maxLength={80}
            />
            <Textarea
              placeholder="What's on your mind?"

            />
            <div className='flex gap-3 justify-end'>
              <Button
                variant='secondary'
                size='sm'
                className='bg-zion-blue text-white hover:bg-zion-blue-dark'                onClick={() => setShowNew(false)}

                    .toUpperCase()

                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className='flex gap-2 items-center'>
                  <span className='font-semibold text-white'>
                    {post.author}
                  </span>
                  <span className='text-xs text-zion-slate-light'>
                    {post.time}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-zion-cyan mt-1'>
                  {post.title}
                </h3>
                <p className='text-zion-slate-light mt-1 whitespace-pre-line'>
                  {post.body}
                </p>              </div>

              </div>

            </CardContent>
          </Card>
        ))}
      </div>
      <div className='mt-8 text-xs text-zion-slate-dark text-center'>
        🚀 Stay engaged! Top contributors are regularly featured on the
        homepage.
      </div>
    </div>
  );
};
  newTitle ;
}onChange= {;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;
}maxLength= {;
  80 ";
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";
}.join ("") .toUpperCase () .slice (0, 2) ";
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;
  post.author ";
}</span> <span className="text-xs text-zion-slate-light"> {;
  post.time ";
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;
  post.title ";
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;
  post.body ;
}</p> </div> </CardContent> </Card>) ) ";
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;
};
'"