<<<<<<< HEAD
<<<<<<< HEAD
const ContentCard: React.FC<ContentCardProps> = ({
  title, description, href, icon, color, glow, date, category 
}) => {
  return (<Link href= {
  href 
}className= {
  `group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift $ {
  glow 
}` 
}> {
  category 
}</span>) 
}</div> Read More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300" >→</span> </div> {
  date 
}</span>) 
}</div> </Link>) 
}
  title;
=======
  static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div    />Something went wrong.</div>;}
  static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div    />Something went wrong.</div>;}
    }return this.props.children;
  }
}
import React from 'react';
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
import Link from 'next / link';
interface ContentCardProps {
interface ContentCardProps {;
import React from 'react';
import Link from 'next/link';
interface ContentCardProps {
=======



interface ContentCardProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;category?: string;
}const ContentCard: React.FC<ContentCardProps    /> = ({title;}
}

<<<<<<< HEAD
const ContentCard: React.FC<ContentCardProps    /> = ({ title;
>>>>>>> origin/chore/fix-lint-and-merge
  description;
  href;
  icon;
  color;
  glow;
<<<<<<< HEAD
  date;
  category
=======
  category?: string;
<<<<<<< HEAD
const ContentCard: React.FC<ContentCardProps> = ({
  title
  description
  href
  icon
  color
  glow
  date
  category
}) => {
    >
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      {/* Header */}
      <div className='flex items-start justify-between mb-6'>
        <div
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <span className='text-2xl'>{icon}</span>
        </div>
        {category && (
=======
;
const ContentCard: React.FC < ContentCardProps> = ({
  title,
  description,
  href,
  icon,
  color,
  glow,
  date,
  category,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}) => {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover-lift ${glow}`}
    >
      {/* Background Glow */}
<<<<<<< HEAD
      <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        
        {category && (
          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
  category
}) => {
=======
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      {/* Header */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const ContentCard: React.FC<ContentCardProps> = ({;
  title,;
  description,;
  href,;
  icon,;
  color,;
  glow,;
  date,;
  category,;
}) => {;


    >;
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
      {/* Header */}


<<<<<<< HEAD
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {category}
          </span>
        )}

<<<<<<< HEAD
      </div>
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

      </div>
=======
      </div>;


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            {category}
          </span>
        )}
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>
      {/* Footer */}
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
      </p>
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Footer */}

      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
<<<<<<< HEAD
=======
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </span>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        
        {date && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <span className='text-xs text-white/50 font-mono'>{date}</span>        </div>
        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>        )}
      </div>
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}
<<<<<<< HEAD
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />
    </Link>
  )
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
      </div>;
      {/* Hover Effects */}
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );
};
export default ContentCard;    </Link>;
  );
};
export default ContentCard;
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />
    </Link>
  )
};
export default ContentCard;
=======

      </div>;


      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );

};
export default ContentCard;    </Link>;
  );

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
export default ContentCard;
=======
<<<<<<< HEAD
  date;}
  category;}
}) => {return (<Link;}
   }) =    /> {


return (<Link;}
      href;}
      {/* Header */}
      <div className='flex items-start justify-between mb-6'    />;
        <div;
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            />;
          <span className='text-2xl'    />{icon}</span>;
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover: scale-110 transition-transform duration-300`}>

          <span className='text-2xl'    />{ico,}
}</span>;
        </div>;
        {category && (<span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'    />;}
            {category}
          </span>;
        )}
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'    />            {category}{category}</span>;
        )}
      </div>;
      {/* Content */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'    />;
        {title}
      {/* Footer */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'    />;
        {title}
      </h3>;
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'    />;
        {description}</p>;
      {/* Footer */}
<div className='flex items-center justify-between'    />;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'    />;
          Read More;
          </span>;
        {description}
      </p>;
      {/* Footer */}
      <div className=\"flex items-center justify-between\"    />;
        <div className=\"inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300\"    />;
      <div className='flex items-center justify-between'    />;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'    />;
          Read More;
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'    />;
            →;
          </span>      <h3 className=\"text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2\"    />;
        {title}
          Read More;
          <span className=\"ml-2 group-hover:translate-x-1 transition-transform duration-300\"    />→</span>;
        </div>;
        {date && (<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'    />;
    </Link>;<span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'    />;
            →;
          </span>;}
        </div>;}
        {date && (<span className='text-xs text-white/50 font-mono'    />{date}</span>;
        )}
      </div>;
      {/* Hover Effects */}
<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'    />;
    </Link>;
  )}export default ContentCard;<div className='flex items - start justify - between mb - 6'    />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='flex items - start justify - between mb - 6'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div;
          className={`w - 12 h - 12 bg - gradient - to - br ${color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
            />;
          <span className='text - 2xl'    />{icon}</span>;
        </div>;
        </div>;
        {date && (<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'    />;
    </Link>;<span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'    />;
            →;
          </span>;}
        </div>;}
        {date && (<span className='text-xs text-white/50 font-mono'    />{date}</span>;
        )}
      </div>;
      {/* Hover Effects */}
<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'    />;
    </Link>;
  )}

export default ContentCard;<div className='flex items - start justify - between mb - 6'    />;
        <div;
          className={`w - 12 h - 12 bg - gradient - to - br ${color} rounded - xl flex items - center justify - center group - hover: scale - 110 transition - transform duration - 300`}    />

          <span className='text - 2xl'    />{ico,}
}</span>;
        </div>;
        {category && (<span className='px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20'    />            {category}          <span className=\"px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20\"    />;
            {category}
          </span>)}
      </div>;
      {/* Content */}
      <h3 className='text - xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300 line - clamp - 2'    />;
        {title}
      </h3>;
      <p className='text - white / 70 leading - relaxed mb - 6 line - clamp - 3'    />        {description}
      </p>;
      {/* Footer */}
      <div className='flex items - center justify - between'    />;
        <div className='inline - flex items - center text - cyan - 400 font - semibold group - hover:text - cyan - 300 transition - colors duration - 300'    />;
          Read More;
          <span className='ml - 2 group - hover:translate - x-1 transition - transform duration - 300'    />;
            →;
          </span>      <h3 className=\"text - xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300 line - clamp - 2\"    />;
        {title}
      </h3>;
      <p className=\"text - white / 70 leading - relaxed mb - 6 line - clamp - 3\"    />;
      </p>;
      {/* Footer */}
      <div className='flex items - center justify - between'    />;
        <div className='inline - flex items - center text - cyan - 400 font - semibold group - hover:text - cyan - 300 transition - colors duration - 300'    />;
          Read More;
          <span className=\"ml - 2 group - hover:translate - x-1 transition - transform duration - 300\"    />→</span>;
        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'    />{date}</span>        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'    />{date}</span>        )}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500'    />          <span className=\"text - xs text - white / 50 font - mono\"    />;
            {date}
          </span>)}
      </div>;
      {/* Hover Effects */}
<<<<<<< HEAD
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500'    />;
    </Link>)}export default ContentCard;    </Link>)}export default ContentCard;{description}
    </Link>)}
=======
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />;
    </Link>);
}
;
export default ContentCard;    </Link>);
}
;
export default ContentCard;
;
<<<<<<< HEAD



export default ContentCard

      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </Link>
  );
}
export default ContentCard;    </Link>
  )
}
export default ContentCard;

          </span>

        {description}
      </p>

      {/* Footer */}

        )}
      </div>

      {/* Hover Effects */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default ContentCard;    </Link>)}

<<<<<<< HEAD
export default ContentCard;{description}
      </p>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
