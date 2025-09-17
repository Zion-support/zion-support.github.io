=======
const { useParams } from "react-router-dom";"""; import { useState } from "react";"""; import { Button } from "@/components/ui/button";"""; import { NEW_PRODUCTS } from "@/data/newProductsData";"""; import { useCart } from "@/context/CartContext";"""; import { toast } from "@/hooks/use-toast"; export {}; return null} const { id } = useParams(); const product = NEW_PRODUCTS && NEW_PRODUCTS.find(p => p && p.id === id); const { dispatch } = useCart(); const [adding,setAdding] = useState(false); if (!product) {} return <div className="p-6 text-white">Product not found</div>;} const handleAdd = () => {} return <div>Component></div> }; setAdding(true); dispatch({} "; ""; """; type: "ADD_ITEM",; payload: {} id: "product && product.id",; name: "product && product.title",; price: "product && product.price ? 0",; quantity: "1"}});"; toast({ title: "Added to cart",variant: "success" }); setTimeout(() => setAdding(false),500);};"; return ( <div className="min-h-screen bg-zion-blue p-6 text-white"> <h1 className="text-2xl font-bold mb-4">{product && product.title}</h1> <p className="mb-6">{product && product.description}></div> <Button onClick={handleAdd} disabled={adding}>"; {adding ? "Adding." : "Add to Cart"} ></div> </div>)} ; export { ProductPage }; export { ProductPage }; export { ProductPage }; export { ProductPage }; export { ProductPage };"""
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
