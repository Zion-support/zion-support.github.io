import, React, from "react";
interface PostCardProps {
  post: , { ,;
    id: string, title: strin, g,content: strin, g,authorName: strin, g,createdAt: strin, g,likes: numbe, r,replies: numbe, r,views: numbe, r,author:  , {,;
      name: stringavata,;
  r: string };
  },;
};
;
export, default, function PostCard() {
;
  return (;
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4, border, border-white/20 hover: border-white/40 transition-all duration-30o0">;
      <div className="flex items-start space-x-4">;
        <img;
          src={post.author?.avatar || '/default-avatar.png'};
          alt={post.author?.name || post.authorName}
          className="w-10 h-10 rounded-full object-cover";
        />;
        <div className="flex-1">;
          <h3 className="text-xl font-semibold text-white mb-2 hover: text-zion-cyan transition-colors duration-30o0">;
            {post.title}
          </h3>;
          <p className="text-zion-slate-light mb-3 line-clamp-3 leading-relaxed">;
            {post.content}
          </p>;
          <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">;
            <span className="flex items-center gap-2">;
              <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>;
              By {post.author?.name || post.authorName}
            </span>;
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>;
          </div>;
          <div className="flex items-center space-x-6 text-sm text-zion-slate-light">;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-zion-purple rounded-full"></span>;
              {post.replies} replies;
            </span>;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>;
              {post.likes} likes;
            </span>;
            <span className="flex items-center gap-1">;
              <span className="w-1.5 h-1.5 bg-zion-green rounded-full"></span>;
              {post.views} views;
            </span>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
;