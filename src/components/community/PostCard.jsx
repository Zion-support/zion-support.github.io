';&apos;&apos;export {} function }';&apos;&apos;export default function PostCard({ post }) ;{ return()} <div className=&apos;bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4&apos;>'&apos;&apos; <div className=&apos;flex items-start space-x-4&apos;>'&apos;&apos; <img&apos; src={post.author.avatar} alt={post.author.name}&apos; className=&apos;w-10 h-10 rounded-full&apos; / / / />&apos;&apos;' <div className=&apos;flex-1&apos;>'&apos;&apos; <h3 className=&apos;text-lg font-semibold text-zion-cyan mb-2&apos;>&apos; {post.title}&apos;&apos;' </h3>&apos;&apos;' <p className=&apos;text-zion-slate-light mb-3 line-clamp-3&apos;>&apos; {post.content}&apos;&apos;' </p>&apos;&apos;' <div className=&apos;flex items-center justify-between text-sm text-zion-slate-light&apos;>'&apos;&apos; <span>By {post.author.name}</span>&apos;&apos;' <span>{new Date(post.createdAt).toLocaleDateString()}</span> </div>&apos;&apos;' <div className=&apos;flex items-center space-x-4 mt-2 text-sm text-zion-slate-light&apos;>'&apos;&apos; <span>{post.replies.length} replies</span>&apos;&apos;' <span>{post.likes} likes</span> &apos;';&apos;&apos;';&apos;&apos;export default function PostCard({ post }) ;{}
  return()
    <div className=&apos;bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4&apos;>'&apos;&apos;'&apos;&apos;
      <div className=&apos;flex items-start space-x-4&apos;>&apos;'
        <img;
          src={post.author.avatar}&apos;&apos;';
          alt={post.author.name}&apos;&apos;'';
          className=&apos;w-10 h-10 rounded-full&apos;&apos;'&apos;/>&apos;&apos;'&apos;&apos;'
        <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
          <h3 className=&apos;text-lg font-semibold text-zion-cyan mb-2&apos;>
            {post.title}&apos;&apos;'&apos;&apos;
          </h3>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-zion-slate-light mb-3 line-clamp-3&apos;>
            {post.content}&apos;&apos;'&apos;&apos;
          </p>&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center justify-between text-sm text-zion-slate-light&apos;>&apos;'
            <span>By {post.author.name}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center space-x-4 mt-2 text-sm text-zion-slate-light&apos;>&apos;'
            <span>{post.replies.length} replies</span>
            <span>{post.likes} likes</span>
            <span>{post.views} views</span>
          </div>
        </div>
      </div>
    </div>)}
export { PostCard }
;
export { PostCard }
;
export { PostCard }
;
export { PostCard }
;
export { PostCard }
