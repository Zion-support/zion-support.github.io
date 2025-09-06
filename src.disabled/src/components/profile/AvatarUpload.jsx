import _React,{ useState } from 'react'; import { useState } from 'react'; export default function Page() {}; return null} )} {}; <CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}> Upload Avatar; ></div> ) : ("; <p className="text-sm text-gray-500"> Image upload feature is currently unavailable.></div> )} ></div> );} '"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import React,{ useState } from \'react\'; import { useState } from \'react\'; export default function Page() {}; return null} )} {}; <CldUploadButton uploadPreset=\"avatar_preset\" onUpload={handleUpload}> Upload Avatar; ></div> ) : (\"; <p className=\"text-sm text-gray-500\"> Image upload feature is currently unavailable.></div> )} ></div> );} \'"
const React,{ useState } from "react"; import { useState } from "react"; export default function Page() { return; }; return null} )} {}; <CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}> Upload Avatar; ></div> ) : ("; <p className="text-sm text-gray-500"> Image upload feature is currently unavailable.></div> )} ></div> );} """""
import _React,{ useState } from 'react'; import { useState } from 'react'; export default function Page() {}; return null} )} {}; <CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}> Upload Avatar; ></div> ) : ("; <p className="text-sm text-gray-500"> Image upload feature is currently unavailable.></div> )} ></div> );} '"
