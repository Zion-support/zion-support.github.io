<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
;
interface ContentCardProps {;
  title:string,;
  description:string,;
  href:string,;
  icon:string,;
  color:string,;
  glow:string,;
  date?:string,;
  category?:string;
}
;
const ContentCard:React.FC<ContentCardProps> = ({;
  title,;
  description,;
  href,;
  icon,;
  color,;
  glow,;
  date,;
  category;
}) => {;
  return (;
    <Link;
      href={href}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift ${glow}`}
    >;
      {/* Background Glow */}
      <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />;
      ;
      {/* Header */}
      <div className="flex items-start justify-between mb-6">;
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>;
          <span className="text-2xl">{icon}</span>;
        </div>;
        ;
        {category && (;
          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">;
            {category}
          </span>;
=======
import React from 'react',
import Link from 'next/link',
interface ContentCardProps {
  title: string,
  description: string,
  href: string,
  icon: string,
  color: string,
  glow: string,
  date?: string,
  category?: string
}
const ContentCard: React.FC<ContentCardProps> = (_{_title, _description, _href, _icon, _color, _glow, _date, _category}) => {_return (
    <Link
      href={href}
      className={_`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift ${glow}`}
    >
      {/* Background Glow */}
      <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
      
      {/* Header */}
      <div className=&quot;flex items-start justify-between mb-6&quot;>
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <span className=&quot;text-2xl&quot;>{icon}</span>
        </div>
        
        {category && (
          <span className=&quot;px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20&quot;>            {category}
          </span>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Content */}
<<<<<<< HEAD
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;
        {title}
      </h3>;
      ;
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">;
=======
      <h3 className=&quot;text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2&quot;>
        {title}
      </h3>
      
      <p className=&quot;text-white/70 leading-relaxed mb-6 line-clamp-3&quot;>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        {description}
      </p>;
;
      {/* Footer */}
<<<<<<< HEAD
      <div className="flex items-center justify-between">;
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">;
          Read More;
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>;
        </div>;
        ;
        {date && (;
          <span className="text-xs text-white/50 font-mono">;
            {date}
          </span>;
=======
      <div className=&quot;flex items-center justify-between&quot;>
        <div className=&quot;inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300&quot;>          Read More
          <span className=&quot;ml-2 group-hover:translate-x-1 transition-transform duration-300&quot;>→</span>
        </div>
        
        {date && (
          <span className=&quot;text-xs text-white/50 font-mono&quot;>            {date}
          </span>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      </div>;
;
      {/* Hover Effects */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />;
    </Link>;
  );
},;
;
=======
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />    </Link>
  )
},
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot; />
    </a>
  );
};

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default ContentCard,