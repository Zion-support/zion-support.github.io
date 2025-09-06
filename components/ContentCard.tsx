
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
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';



interface ContentCardProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;

            {category}
            {category}
          </span>
        )}

      </div>;


          </span>
        )}
      </div>

            {category}

      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>
        {title}
      </h3>
      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>
      {/* Footer */}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


      {/* Footer */}

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →
=======


          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        {date && (

          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}

      </div>
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

      </div>;


      {/* Hover Effects */}
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
