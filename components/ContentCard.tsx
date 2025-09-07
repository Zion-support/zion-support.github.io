  static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
<<<<<<< HEAD
<<<<<<< HEAD
  date?: string;
  category?: string
}

const ContentCard: React.FC<ContentCardProps> = ({
  title;
=======
  date?: string;category?: string;
}const ContentCard: React.FC<ContentCardProps> = ({title;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
  date?: string;category?: string;
}const ContentCard: React.FC<ContentCardProps> = ({title;
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
  description;
  href;
  icon;
  color;
  glow;
  date;
  category;
}) => {return (<Link;
      href;
      {/* Header */}
      <div className='flex items-start justify-between mb-6'>;
        <div;
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
<<<<<<< HEAD
<<<<<<< HEAD
        >
          <span className='text-2xl'>{icon}</span>
        </div>

        {category && (
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
        >;
          <span className='text-2xl'>{icon}</span>;
        </div>;
        {category && (<span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
            {category}
          </span>;
        )}
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}{category}</span>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>

      {/* Content */}
<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>
        {description}
origin/cursor/automate-test-improve-and-merge-code-2533
      </p>
      {/* Footer */}
<div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →
          </span>
        </div>

        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>
=======
      </div>;
      {/* Content */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      {/* Footer */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      </h3>;
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>;
        {description}</p>;
      {/* Footer */}
=======
      </div>;
      {/* Content */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      {/* Footer */}<h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      </h3>;
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>;
        {description}</p>;
      {/* Footer */}
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
<div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          </span>;
        {description}
      </p>;
      {/* Footer */}
      <div className="flex items-center justify-between">;
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">;
      <div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>;
            →;
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;
        {title}
          Read More;
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>;
        </div>;
        {date && (<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;<span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>;
            →;
          </span>;
        </div>;
        {date && (<span className='text-xs text-white/50 font-mono'>{date}</span>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        )}
      </div>;
      {/* Hover Effects */}
<<<<<<< HEAD
<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
};

export default ContentCard;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
        )}
      </div>;
      {/* Hover Effects */}
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
<div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  )}export default ContentCard;<div className='flex items - start justify - between mb - 6'>;
        <div;
          className={`w - 12 h - 12 bg - gradient - to - br ${color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
        >;
          <span className='text - 2xl'>{icon}</span>;
        </div>;
        {category && (<span className='px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20'>            {category}          <span className="px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20">;
            {category}
          </span>)}
      </div>;
      {/* Content */}
      <h3 className='text - xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300 line - clamp - 2'>;
        {title}
      </h3>;
      <p className='text - white / 70 leading - relaxed mb - 6 line - clamp - 3'>        {description}
      </p>;
      {/* Footer */}
      <div className='flex items - center justify - between'>;
        <div className='inline - flex items - center text - cyan - 400 font - semibold group - hover:text - cyan - 300 transition - colors duration - 300'>;
          Read More;
          <span className='ml - 2 group - hover:translate - x-1 transition - transform duration - 300'>;
            →;
          </span>      <h3 className="text - xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300 line - clamp - 2">;
        {title}
      </h3>;
      <p className="text - white / 70 leading - relaxed mb - 6 line - clamp - 3">;
      </p>;
      {/* Footer */}
      <div className='flex items - center justify - between'>;
        <div className='inline - flex items - center text - cyan - 400 font - semibold group - hover:text - cyan - 300 transition - colors duration - 300'>;
          Read More;
          <span className="ml - 2 group - hover:translate - x-1 transition - transform duration - 300">→</span>;
        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'>{date}</span>        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'>{date}</span>        )}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />          <span className="text - xs text - white / 50 font - mono">;
            {date}
          </span>)}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />;
    </Link>)}export default ContentCard;    </Link>)}export default ContentCard;{description}
<<<<<<< HEAD
      </p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
      </p>;
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
