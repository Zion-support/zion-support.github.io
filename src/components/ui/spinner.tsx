<<<<<<< HEAD


Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'


=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
Spinner.displayName = 'Spinner'
export default Spinner; import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import { Loader2 } from 'lucide-react'
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
Spinner && Spinner.displayName = 'Spinner';
export default Spinner;import React from 'react';
import { Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { cn } from '@/lib/utils';
export interface SpinnerProps extends React && React.SVGProps<SVGSVGElement> {;
  size?: number | string;
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

const Spinner = React && React.forwardRef<SVGSVGElement, SpinnerProps>(;
  ({ className, size = 24, ...props }, ref,) => (;
    <Loader2
      ref = {ref,}
      {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className = {cn('animate-spin', className),}
      width = {size,}
      height = {size,}
    />
<<<<<<< HEAD
  )
)
Spinner.displayName = 'Spinner'
export default Spinner;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    />;
  );
),;
<<<<<<< HEAD
Spinner && Spinner.displayName = 'Spinner',;
export default Spinner,;

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
Spinner.display_name = 'Spinner';
export default Spinner; import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib / utils';
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {
  size?: number | string;
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(
  ({ class_name, size = 24, ...props }, ref, ) => (
    <Loader2;
      ref = {ref, }
      {...props}
      class_name = {cn ('animate - spin', class_name), }
      width = {size, }
      height = {size, }
    />)),
Spinner.display_name = 'Spinner',
export default Spinner,
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  );
),;
Spinner.displayName = 'Spinner';
export default Spinner;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
