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
  

interface ContentCardProps {;  category?: string;
      {/* Content */}
      <h3 className='text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2'>;
        {title}

      </h3>;

      <p className='text-white/70 leading-relaxed mb-6 line-clamp-3'>        {description}
      </p>;


      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
      {/* Footer */}

      <div className='flex items-center justify-between'>
        <div className='inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
          Read More
          <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
            →


          </span>
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
          <span className="text-xs text-white/50 font-mono">
            {date}
          </span>
        )}


      {/* Hover Effects */}
      </div>      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />;
    </Link>;
  );

};
export default ContentCard;    </Link>;
  );

};
export default ContentCard;=======


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


