
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
import { useRouter  } from 'next/
import { useCurrentUser } from '../../hooks/
    if (!loading && !user) router.replace('/
import {useRouter} from 'next/
import {useCurrentUser} from '../../hooks/
    if (!loading && !user) router && router.replace('/
      const mime = file.type |'application/
    const res = await fetch('/api/messages/
      headers: { 'Content-Type': any
      const mime = file && file.type || 'application/
    const res = await fetch('/api/messages/
      headers: { 'Content-Type': any