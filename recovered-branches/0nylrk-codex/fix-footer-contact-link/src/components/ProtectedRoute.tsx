
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
import { Navigate  } from 'react-router-dom'
import { useAuth  } from '@/hooks/
import { useTenantAdminStatus  } from '@/hooks/
import { useWhitelabel } from '@/context/
import {useAuth} from '@/hooks/
import {useTenantAdminStatus} from '@/hooks/
import {useWhitelabel} from '@/context/