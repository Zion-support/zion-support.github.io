<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react' "export": default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth() const { isWishlisted,toggle } = useWishlist() const [imageError,setImageError] = useState(false) const router = useRouter() const enqueueSnackbar = useEnqueueSnackbar() if() !product ||' typeof product.id !== 'string' ||' typeof product.title !== 'string' ||' product.title.trim() === ' ) { captureException(' new Error('Invalid product data received by ProductCard'),{ "extra": { product}} ) return() <"div": className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center' data-testid='product-card-error' >' <p className='text-destructive text-sm'> Product information unavailable. </p> {}' {} </div> ) } const active = isWishlisted(product.id) const dispatch = useDispatch()'';';
=======
import React from\';react\' \"export\": default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth() const { isWishlisted,toggle } = useWishlist() const [imageError,setImageError] = useState(false) const router = useRouter() const enqueueSnackbar = useEnqueueSnackbar() if() !product ||\' typeof product.id !== \'string\' ||\' typeof product.title !== \'string\' ||\' product.title.trim() === \' ) { captureException(\' new Error(\'Invalid product data received by ProductCard\'),{ \"extra\": { product}} ) return() <\"div\": className=\'relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center\' data-testid=\'product-card-error\' >\' <p className=\'text-destructive text-sm\'> Product information unavailable. </p> {}\' {} </div> ) } const active = isWishlisted(product.id) const dispatch = useDispatch()\'';\';
const React from";react" export: default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth() const { isWishlisted,toggle } = useWishlist() const [imageError,setImageError] = useState(false) const router = useRouter() const enqueueSnackbar = useEnqueueSnackbar() if() !product |" typeof product.id !== "string" |" typeof product.title !== "string" |" product.title.trim() === " ) { captureException(" new Error("Invalid product data received by ProductCard"),{ extra: { product}} ) return() <div: className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error" >" <p className="text-destructive text-sm"> Product information unavailable. </p> {}" {} </div> ) } const active = isWishlisted(product.id) const dispatch = useDispatch()"";";'"'"
import _React from';react' "export": default function ProductCard({ product,onBuy,buyDisabled = false }) { const { isAuthenticated } = useAuth() const { isWishlisted,toggle } = useWishlist() const [imageError,setImageError] = useState(false) const router = useRouter() const enqueueSnackbar = useEnqueueSnackbar() if() !product ||' typeof product.id !== 'string' ||' typeof product.title !== 'string' ||' product.title.trim() === ' ) { captureException(' new Error('Invalid product data received by ProductCard'),{ "extra": { product}} ) return() <"div": className='relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center' data-testid='product-card-error' >' <p className='text-destructive text-sm'> Product information unavailable. </p> {}' {} </div> ) } const active = isWishlisted(product.id) const dispatch = useDispatch()'';';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const ProductCard.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ProductCard.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
