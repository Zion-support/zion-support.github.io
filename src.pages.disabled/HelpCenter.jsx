
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
interface HelpCenterProps {
  // Add props here as needed

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export default function HelpCenter({ }: HelpCenterProps) {
  return (
    <div>
      <h1>HelpCenter</h1>
      <p>This component is currently under development.</p>
    </div>
  );

<<<<<<< HEAD


}

=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
:src.pages.disabled/HelpCenter.jsx
}
}
}
}
}
:temp_exclude/src.pages.disabled/HelpCenter.jsx
<<<<<<< HEAD
}






:src.pages.disabled/HelpCenter.jsx
}
}
}
}
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
