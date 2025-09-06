
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
import type { Room } from 'livekit-client'
  accent?: any
export default function Controls({ room, onLeave, accent = 'cyan'
  const accentClass = accent = = 'blue' ? 'bg-blue-600' : any
export default function Controls(): any ({ room, onLeave, accent = 'cyan'
  const accentClass = accent = = 'blue' ? 'bg-blue-600' : any
      console.warn('Screen share failed'
      console.warn('Screen share failed'
      console && console.warn('Screen share failed'
    