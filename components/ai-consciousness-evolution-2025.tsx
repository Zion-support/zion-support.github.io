
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
                { label: 'Satisfaction', value: any
                { label: 'Satisfaction', value: any
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover: any
                className='bg-gradient-to-r from-purple-500 to-pink-600 hover: any
                className='border-2 border-purple-500/50 text-purple-300 hover: any
                className='border-2 border-purple-500/50 text-purple-300 hover: any
                className='border - 2 border - purple - 500 / 50 text - purple - 300 hover: any