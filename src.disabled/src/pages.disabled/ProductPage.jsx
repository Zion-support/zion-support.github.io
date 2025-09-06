
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
import { useParams } from \'react-router-dom\';\''\'; import { useState } from \'react\';\''\'; import { Button } from \'@/components/ui/button\';\''\'; import { NEW_PRODUCTS } from \'@/data/newProductsData\';\''\'; import { useCart } from \'@/context/CartContext\';\''\'; import { toast } from \'@/hooks/use-toast\'; export {}; return null} const { id } = useParams(); const product = NEW_PRODUCTS && NEW_PRODUCTS.find(p => p && p.id = = id); const { dispatch } = useCart(); const [adding,setAdding] = useState(false); if (!product) {} return <div className=\"p-6 text-white\">Product not found</div>;} const handleAdd = () => {} return <div>Component>