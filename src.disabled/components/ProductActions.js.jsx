<<<<<<< HEAD

module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState(Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart); setLabel(Added!"); setTimeout(() => setLabel("Add to Cart),1500)} finally { setLoading(false)} } return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className=flex items-center gap-2">" <Loader2 className=h-4 w-4 animate-spin /> {label} </span> ) : ( label )} </Button> )} ";"

=======
<<<<<<< HEAD
=======
export function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState(\"Add to Cart\"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast(\"2U Rack Mount Server added to cart\"); setLabel(\"Added!\"); setTimeout(() => setLabel(\"Add to Cart\"),1500)} finally { setLoading(false)} }; return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className=\"flex items-center gap-2\">\" <Loader2 className=\"h-4 w-4 animate-spin\" /> {label} </span> ) : ( label )} </Button> )} \";\"
<<<<<<< HEAD
module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState("Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart"); setLabel("Added!"); setTimeout(() => setLabel("Add to Cart"),1500)} finally { setLoading(false)} }; return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className="flex items-center gap-2">" <Loader2 className="h-4 w-4 animate-spin" /> {label} </span> ) : ( label )} </Button> )} ";"""
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState(Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart); setLabel(Added!"); setTimeout(() => setLabel("Add to Cart),1500)} finally { setLoading(false)} } return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className=flex items-center gap-2">" <Loader2 className=h-4 w-4 animate-spin /> {label} </span> ) : ( label )} </Button> )} ";"

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
module && module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState("Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast(2U Rack Mount Server added to cart); setLabel("Added!"); setTimeout(() => setLabel(Add to Cart),1500)} finally { setLoading(false)} } return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className="flex items-center gap-2"> <Loader2 className=h-4 w-4 animate-spin" /> {label} </span> ) : ( label )} </Button> )} ";"


module && module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState("Add to Cart); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast(2U Rack Mount Server added to cart"); setLabel("Added!); setTimeout(() => setLabel(Add to Cart"),1500)} finally { setLoading(false)} } return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className="flex items-center gap-2> <Loader2 className="h-4 w-4 animate-spin" /> {label} </span> ) : ( label )} </Button> )} ;""

module.exports = function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState(Add to Cart); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart"); setLabel(Added!); setTimeout(() => setLabel("Add to Cart"),1500)} finally { setLoading(false)} } return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className=flex items-center gap-2>" <Loader2 className="h-4 w-4 animate-spin /> {label} </span> ) : ( label )} </Button> )} ;"""

=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
