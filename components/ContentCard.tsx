<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD



interface ContentCardProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;

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

=======
import Link from 'next / link';
interface ContentCardProps {
interface ContentCardProps {;
=======
import React from 'react';
import Link from 'next/link';
interface ContentCardProps {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;
<<<<<<< HEAD
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
      {/* Background Glow */}
      <div className='pointer - events - none absolute -inset - px -z - 10 bg - gradient - to - r from - cyan - 500 / 0 via - cyan - 400 / 10 to - cyan - 500 / 0 opacity - 0 blur - 2xl transition - opacity group - hover:opacity - 100' />;
      {/* Header */}
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
    >;
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        {category && (
          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
            {category}
          </span>;
        )}
      </div>;
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      </h3>;
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;
      {/* Footer */}
      <div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>;
            →;
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;
        {title}
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
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (
          <span className="text-xs text-white/50 font-mono">

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
          <span className=&quot;px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20&quot;>
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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


    >;
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
      {/* Header */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {category}
          </span>
        )}
<<<<<<< HEAD

      </div>;


=======

          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

=======
      </div>
<<<<<<< HEAD
=======
=======
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

            {category}

<<<<<<< HEAD
      {/* Footer */}
      <div className=&quot;flex items-center justify-between&quot;>
        <div className=&quot;inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300&quot;>
          Read More
          <span className=&quot;ml-2 group-hover:translate-x-1 transition-transform duration-300&quot;>→</span>
        </div>
        
        {date && (
          <span className=&quot;text-xs text-white/50 font-mono&quot;>

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </span>
        )}
      </div>

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
      </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Footer */}

=======
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
<<<<<<< HEAD
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →

<<<<<<< HEAD
          </span>

=======

=======
          </span>


      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (
<<<<<<< HEAD

          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}

=======
          <span className='text-xs text-white/50 font-mono'>{date}</span>        </div>
        {date && (
          <span className='text-xs text-white/50 font-mono'>{date}</span>        )}
      </div>
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />          <span className="text-xs text-white/50 font-mono">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {date}
          </span>
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
<<<<<<< HEAD
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
      {/* Hover Effects */}
<<<<<<< HEAD

      </div>;


=======
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Hover Effects */}
<<<<<<< HEAD

=======
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default ContentCard;    </Link>;
  );
<<<<<<< HEAD

=======
};
export default ContentCard;
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover: opacity-100 transition-opacity duration-500" />
    </Link>
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default ContentCard;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

export default ContentCard

=======
      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </Link>
  );
}
export default ContentCard;    </Link>
  )
}
export default ContentCard;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </span>

        {description}
      </p>

      {/* Footer */}

        )}
      </div>

      {/* Hover Effects */}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
