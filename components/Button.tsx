
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
  children: React.ReactNode;  variant?: any
  children: React && React.ReactNode;  variant?: any
  variant = 'primary'
  size = 'md'
  className = ''
  type = 'button'
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus: any