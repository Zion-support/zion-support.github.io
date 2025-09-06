
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
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next / link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface ContentCardProps {
=======

interface ContentCardProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;
<<<<<<< HEAD

<<<<<<< HEAD
  category?: string;
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
=======
  category?: string;
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
}) => {
    >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Background Glow */}
      <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - cyan - 500 / 0 via - cyan - 400 / 10 to - cyan - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100' />;
      {/* Header */}
<<<<<<< HEAD
      <div className='flex items-start justify-between mb-6'>
        <div
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <span className='text-2xl'>{icon}</span>
        </div>
        {category && (
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
=======
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
=======
interface ContentCardProps {
  title: string,
  description: string,
  href: string,
  icon: string,
  color: string,
  glow: string,
  date?: string;
  category?: string;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    >;
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
      {/* Header */}
<<<<<<< HEAD
      <div className='flex items-start justify-between mb-6'>;
        <div
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>;
          <span className='text-2xl'>{icon}</span>;
        </div>;

        {category && (;
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        
        {category && (
          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {category}
          </span>;
        )}
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
=======
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
<<<<<<< HEAD
      </h3>
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>
=======
      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Footer */}
      <div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>;
            →;
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;
        {title}
<<<<<<< HEAD
      </h3>
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
      </p>
      {/* Footer */}
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (
<<<<<<< HEAD
          <span className='text-xs text-white/50 font-mono'>{date}</span>        </div>
        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>        )}
=======
          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      </div>
=======
      </h3>;

      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">;
      </p>;

      {/* Footer */}
      <div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>;
        </div>;

        {date && (;
          <span className='text-xs text-white/50 font-mono'>{date}</span>        </div>;

        {date && (;
          <span className='text-xs text-white/50 font-mono'>{date}</span>        )}
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Hover Effects */}
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />          <span className="text-xs text-white/50 font-mono">;
            {date}
          </span>;
        )}
<<<<<<< HEAD
      </div>
=======
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );
<<<<<<< HEAD
}
export default ContentCard;    </Link>
  )
}
=======
};

export default ContentCard;    </Link>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ContentCard;

=======
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />
    </Link>
  )
};

export default ContentCard;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      <div className='flex items - start justify - between mb - 6'>;
        <div;
          className={`w - 12 h - 12 bg - gradient - to - br ${color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
        >;
          <span className='text - 2xl'>{icon}</span>;
        </div>;
        {category && (
          <span className='px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20'>            {category}          <span className="px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20">;
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
        {date && (
          <span className='text - xs text - white / 50 font - mono'>{date}</span>        </div>;
        {date && (
          <span className='text - xs text - white / 50 font - mono'>{date}</span>        )}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />          <span className="text - xs text - white / 50 font - mono">;
            {date}
          </span>)}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />;
    </Link>);
}
;
export default ContentCard;    </Link>);
}
;
export default ContentCard;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
