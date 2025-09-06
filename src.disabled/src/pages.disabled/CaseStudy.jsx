
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
import { Link } from \'react-router-dom\';\''\'; import { useNavigate } from \'react-router-dom\';\''\'; import { CASE_STUDIES } from \'@/data/case-studies\';\''\'; import SEO from \'@/components/SEO\';\''\'; import { Button } from \'@/components/ui/