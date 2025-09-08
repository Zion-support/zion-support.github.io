
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



interface ContentCardProps {;
import Link from 'next / link';
interface ContentCardProps {
interface ContentCardProps {;
import React from 'react';
import Link from 'next/link';
interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;category?: string;
}const ContentCard: React.FC<ContentCardProps    /> = ({title;}
}


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


    >;
      {/* Background Glow */}
      <div className='pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100' />;
      {/* Header */}


          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}          <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20">
            {category}
          </span>
        )}

      </div>;


            {category}
          </span>;
        )}
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

          </span>
        )}
      </div>


      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}
      {/* Footer */}
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
      {/* Footer */}

      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →



          </span>



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      <div className='flex items-center justify-between'>;
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>;
          Read More;
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>;
            →;
          </span>      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">;
        {title}
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        
        {date && (

=======
          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}

      </div>
      </div>;

      {/* Hover Effects */}

      </div>;


      {/* Hover Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );

      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );
};

export default ContentCard;    </Link>;
  );

};

export default ContentCard;
export default ContentCard;
      <div className='flex items - start justify - between mb - 6'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div;
          className={`w - 12 h - 12 bg - gradient - to - br ${color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
            />;
          <span className='text - 2xl'    />{icon}</span>;
        </div>;
        {category && (
          <span className='px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text - white / 60 border border - white / 20'>            {category}          <span className="px - 3 py - 1 bg - white / 10 backdrop - blur - xl rounded - full text - xs text-white / 60 border border-white / 20">;
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
          </span>      <h3 className="text - xl font - bold text - white mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300 line-clamp-2">;
        {title}
      </h3>;
      <p className="text - white / 70 leading - relaxed mb - 6 line-clamp-3">;
      </p>;
      {/* Footer */}
      <div className='flex items - center justify - between'    />;
        <div className='inline - flex items - center text - cyan - 400 font - semibold group - hover:text - cyan - 300 transition - colors duration - 300'    />;
          Read More;
          <span className="ml - 2 group - hover:translate - x-1 transition-transform duration-300">→</span>;
        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'    />{date}</span>        </div>;
        {date && (<span className='text - xs text - white / 50 font - mono'    />{date}</span>        )}
      </div>;
      {/* Hover Effects */}
      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />          <span className="text - xs text-white / 50 font-mono">;
            {date}
          </span>)}
      </div>;
      {/* Hover Effects */}
<<<<<<< HEAD

      <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 600 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500' />;
    </Link>);
}
;
export default ContentCard;    </Link>);
}
;
export default ContentCard;
;





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
