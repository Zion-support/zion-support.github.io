import { Loader2 } from 'lucide-react',
import { Loader2 } from 'lucide-react',
import { cn } from '@/lib/utils',
import React from 'react',
import { cn } from '@/lib / utils',
Spinner.displayName = 'Spinner',
export default Spinner,
import React from 'react',
class ErrorBoundary extends React.Component {,
  constructor(props) {,
    super(props),
    this.state = { hasError: false },
  }
,
  static getDerivedStateFromError(error) {,
    return { hasError: true },
  }
,
  componentDidCatch(error, errorInfo) {,
    console.error('Error caught by boundary:', error, errorInfo),
  }
,
  render() {,
    if (this.state.hasError) {,
      return <div>Something went wrong.</div>,
    }
,
    return this.props.children,
  }
}
Spinner && Spinner.displayName = 'Spinner',
export default Spinner,import React from 'react',
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {,
  size?: number | string,
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {,
  size?: number | string,
}
,
const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(({ className, size = 24, ...props }, ref) => (,
    <Loader2,
      ref = {ref}
      {...props}
,
      className={cn('animate-spin', className)}
      width={size}
      height={size}
    />,
  ),
),
Spinner && Spinner.displayName = 'Spinner',
export default Spinner,
Spinner.display_name = 'Spinner',
export default Spinner, import React from 'react',
export interface SpinnerProps extends React.SVGProps < SVGSVGElement> {,
  size?: number | string,
}
const Spinner = React.forward_ref < SVGSVGElement, SpinnerProps>(({ class_name, size = 24, ...props }, ref) => (,
    <Loader2,
      ref = {ref }
      {...props}
      class_name = {cn ('animate - spin', class_name) }
      width = {size }
      height = {size }
    />)),
Spinner.display_name = 'Spinner',
export default Spinner,
,
}