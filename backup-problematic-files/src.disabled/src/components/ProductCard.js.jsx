class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from \'react\'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||\" typeof product && product.id !== \"string\" ||\" typeof product && product.title !== \"string\" ||\" product && product.title.trim() === \" ) { captureException(\" new Error(\"Invalid product data received by ProductCard\"),{ \"extra\": { product }} ); return () <div className=\"relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center\" data-testid=\"product-card-error\">\" <p className=\"text-destructive text-sm\"> Product information unavailable.</p> {}\" {} </div> )} const active = isWishlisted(product && product.id); const dispatch = useDispatch()}
const React from "react"; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product |" typeof product && product.id !== "string" |" typeof product && product.title !== "string" |" product && product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ extra: { product }} ); return () <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product && product.id); const dispatch = useDispatch()}'"'"
import _React from 'react'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||" typeof product && product.id !== "string" ||" typeof product && product.title !== "string" ||" product && product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ "extra": { product }} ); return () <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product && product.id); const dispatch = useDispatch()}