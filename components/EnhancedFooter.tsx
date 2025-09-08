



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







        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}


            {/* Social Links */}

            <div className='flex items-center space-x-4'>;
              {socialLinks && socialLinks.map(social => (        <div className="pt-8 border-t border-white/10">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            {/* Copyright */}

            <div className="text-white/60 text-sm">;
            </div>;


            {/* Social Links */}

};export default EnhancedFooter;  );

          <div className="flex flex - col md: flex - row justify - between items - center">";
            <div className="text - gray - 400 text - sm mb - 4 md:mb - 0">,© {current_year} Zion Tech Group. All rights reserved.;
            </div>";
            <div className="flex items - center space - x-6">";
              <div className="flex items - center space - x-4">;
                {social_links.map (social => (";
                  <a key="{social.name}
                    href="{social.href}
                    target="_blank;
                    rel="noopener noreferrer;
                    className="text - gray - 400 hover: text - white transition - colors"">;
                    aria - label="{social.name}">";
                    <social.icon className="w - 5 h - 5" />;

                  </a>))}
              </div>;



  );
};export default EnhancedFooter;  )

};







