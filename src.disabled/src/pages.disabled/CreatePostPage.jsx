
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
import { Link,useNavigate,useSearchParams } from \'react-router-dom\';\''\'; import SEO from \'@/components/SEO\';\''\'; import PostForm from \'@/components/community/PostForm\';\''\'; import { useToast } from \'@/hooks/use-toast\'; export {}; return null} const navigate = useNavigate(); const { toast } = useToast(); const [searchParams] = useSearchParams(); const initialValues = {} \'; \''; \''\'; \"categoryId\": initialCategory || \'project-help\'}; const handleSubmit = async values => {} try {} \'; \''; \''\'; const tagsArray = values && values.tags.split(\').map(tag => tag && tag.trim(); toast({} \'; \''; \''\'; \"title\": \'Post created\',\''\'; \"description\": \'Your post has been published successfully\'}); router(`/community/category/