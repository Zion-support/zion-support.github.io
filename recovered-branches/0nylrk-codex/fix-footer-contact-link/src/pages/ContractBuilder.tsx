
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
import { SEO  } from '@/components/
import { AppHeader  } from '@/layout/
import { Footer  } from '@/components/
import { ProtectedRoute  } from '@/components/
import { ContractBuilderContent } from '@/components/contracts/page/