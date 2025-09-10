>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
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

import _React from 'react'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||" typeof product.id !== "string" ||" typeof product.title !== "string" ||" product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ "extra": { product }} ); return() <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product.id); const dispatch = useDispatch()}
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React from \'react\'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||\" typeof product.id !== \"string\" ||\" typeof product.title !== \"string\" ||\" product.title.trim() === \" ) { captureException(\" new Error(\"Invalid product data received by ProductCard\"),{ \"extra\": { product }} ); return() <div className=\"relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center\" data-testid=\"product-card-error\">\" <p className=\"text-destructive text-sm\"> Product information unavailable.</p> {}\" {} </div> )} const active = isWishlisted(product.id); const dispatch = useDispatch()}
const React from "react"; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product |" typeof product.id !== "string" |" typeof product.title !== "string" |" product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ extra: { product }} ); return() <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product.id); const dispatch = useDispatch()}'"'"
import _React from 'react'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||" typeof product.id !== "string" ||" typeof product.title !== "string" ||" product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ "extra": { product }} ); return() <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product.id); const dispatch = useDispatch()}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import _React from 'react'; export default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth(); const { isWishlisted,toggle } = useWishlist(); const [imageError,setImageError] = useState(false); const router = useRouter(); const enqueueSnackbar = useEnqueueSnackbar(); if() !product ||" typeof product && product.id !== "string" ||" typeof product && product.title !== "string" ||" product && product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ "extra": { product }} ); return () <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">" <p className="text-destructive text-sm"> Product information unavailable.</p> {}" {} </div> )} const active = isWishlisted(product && product.id); const dispatch = useDispatch()}
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/ProductCard.js.jsx
