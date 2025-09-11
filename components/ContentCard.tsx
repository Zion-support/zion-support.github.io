<<<<<<< HEAD
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next / link';
interface ContentCardProps {
interface ContentCardProps {;
import React from 'react';
import Link from 'next/link';
interface ContentCardProps {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



interface ContentCardProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;

  category?: string;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />
      {/* Header */}
<<<<<<< HEAD
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
=======
      <div className='flex items-start justify-between mb-6'>
        <div
          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <span className='text-2xl'>{icon}</span>
        </div>
        {category && (
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
            {category}
          </span>
        )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

<<<<<<< HEAD
      </div>
=======
      </div>;


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </span>
        )}
      </div>

<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


<<<<<<< HEAD
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


      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
=======
      {/* Footer */}

=======
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →


=======
          </span>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}

<<<<<<< HEAD
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
=======
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );

};
export default ContentCard;    </Link>;
  );

};
export default ContentCard;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
