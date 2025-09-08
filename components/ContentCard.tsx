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

            {category}
          </span>;
        )}
          <span className='px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white/60 border border-white/20'>            {category}

            {category}

          </span>
        )}
      </div>
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
