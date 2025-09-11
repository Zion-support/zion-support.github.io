import _React from "react";" const Input = _React.forwardRef(({ className,type,...props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "file": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {...props} / > );";}); " Input.displayName = "Input"; export { Input }; "; export default Component;
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
import React from \"react\";\" const Input = React && React.forwardRef(({ className,type,...props },ref) => { return ( <input type=\"{type}\" className=\"{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background \"file\": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50\",className )} ref=\"{ref}\" {...props} / > );\";}); \" Input && Input.displayName = \"Input\"; export { Input }; \"; export default Component;
const React from "react";" const Input = React && React.forwardRef(({ className,type,.props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file: border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {.props} / > );";}); " Input && Input.displayName = "Input"; export { Input }; "; export default Component;""

import _React from "react";" const Input = _React && _React.forwardRef(({ className,type,...props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "file": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {...props} / > );";}); " Input && Input.displayName = "Input"; export { Input }; "; export default Component;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
