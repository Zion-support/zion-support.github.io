<<<<<<< HEAD
<<<<<<< HEAD
export function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState("Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart"); setLabel("Added!"); setTimeout(() => setLabel("Add to Cart"),1500)} finally { setLoading(false)} }; return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className="flex items-center gap-2">" <Loader2 className="h-4 w-4 animate-spin" /> {label} </span> ) : ( label )} </Button> )} ";"""
=======
"export\": function ProductActions ({ onAddToCart }) { const [loading,setLoading] = useState (false) const [label,setLabel] = useState (\'Add to Cart\') \'';\'";\";
export: function ProductActions ({ onAddToCart }) { const [loading,setLoading] = useState (false) const [label,setLabel] = useState ("Add to Cart") "";"";";"""
export function ProductActions({ onAddToCart }) { const [loading,setLoading] = useState(false); const [label,setLabel] = useState("Add to Cart"); const addToCart = async () => { setLoading(true); try { await onAddToCart(); toast("2U Rack Mount Server added to cart"); setLabel("Added!"); setTimeout(() => setLabel("Add to Cart"),1500)} finally { setLoading(false)} }; return () <Button onClick={addToCart} disabled={loading}> {loading ? ( <span className="flex items-center gap-2">" <Loader2 className="h-4 w-4 animate-spin" /> {label} </span> ) : ( label )} </Button> )} ";"""
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
export\": function ProductActions ({ onAddToCart }) { const [loading,setLoading] = useState (false) const [label,setLabel] = useState (\'Add to Cart\') \'';\'
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
