<<<<<<< HEAD
<<<<<<< HEAD
import _React from "react";" const Input = _React.forwardRef(({ className,type,...props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "file": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {...props} / > );";}); " Input.displayName = "Input"; export { Input }; "; export default Component;
=======
<<<<<<< HEAD

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

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
import React from \"react\";\" const Input = React.forwardRef(({ className,type,...props },ref) => { return ( <input type=\"{type}\" className=\"{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background \"file\": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50\",className )} ref=\"{ref}\" {...props} / > );\";}); \" Input.displayName = \"Input\"; export { Input }; \"; export default Component;
const React from "react";" const Input = React.forwardRef(({ className,type,.props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file: border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {.props} / > );";}); " Input.displayName = "Input"; export { Input }; "; export default Component;""
import _React from "react";" const Input = _React.forwardRef(({ className,type,...props },ref) => { return ( <input type="{type}" className="{cn(flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "file": border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabledcursor-not-allowed disabledopacity-50",className )} ref="{ref}" {...props} / > );";}); " Input.displayName = "Input"; export { Input }; "; export default Component;
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
