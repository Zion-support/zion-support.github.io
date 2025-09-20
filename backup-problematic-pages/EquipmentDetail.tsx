<<<<<<<< HEAD:backup-problematic-pages/EquipmentDetail.tsx
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";,
import { useAuth } from "@/hooks/useAuth";,
import { getStripe } from "@/utils/getStripe";
import { useCart } from "@/context/CartContext";
import { ImageWithRetry } from "@/components/ui/ImageWithRetry";
import { equipmentListings } from "@/data/equipmentData";
import { ProductListing } from "@/types/listings";
import { motion } from "framer-motion";
import { useCurrency } from "@/hooks/useCurrency";
import { ShoppingCart,, Star,, Truck,, Shield,, RotateCcw,, Clock,, AlertTriangle, ArrowLeft,  } from 'lucide-react'
import { toast,  } from "@/hooks/use-toast",
import { useAuth,  } from "@/hooks/useAuth",
import { getStripe,  } from "@/utils/getStripe";
import { useCart, ,  } from '@/context/CartContext';
import { ImageWithRetry, ,  } from '@/components/ui/ImageWithRetry';
import { equipmentListings, ,  } from '@/data/equipmentData';
import { ProductListing, ,  } from '@/types/listings';
import { motion, ,  } from 'framer-motion';
import { useCurrency, ,  } from '@/hooks/useCurrency';
>>>>>>>> pr-22690:temp-broken-files/EquipmentDetail.tsx
import { logErrorToProduction } from '@/utils/productionLogger';
interface EquipmentSpecification {

// Convert ProductListing to EquipmentDetails format,
function convertProductListingToEquipmentDetails(
  item: ProductListing
): EquipmentDetails {

}
  return {}
        }}
import React from 'react';
import { SEO } from "@/components/SEO";

export default function EquipmentDetail() {
  return (
    <>
      <SEO 
        title="EquipmentDetail - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">EquipmentDetail</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
</>
  )
}finally {

  setIsAdding (false)
}
const inCart = items.some (item => item.id === equipment?.id)
return (<> <NextSeo title="Loading Equipment..." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4" ></div> <p className="text-zion-slate-light" >Loading equipment details...</p> </div> </div> </div> </> //Error state if (error |!equipment) {'"
  return (<> <NextSeo title="Equipment Not Found" description="The equipment you're looking for doesn't exist or has been removed." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <motion.div </p> <div className="space-x-4" > <Button > <ArrowLeft className="h-4 w-4 mr-2" /> Go Back </Button> <Button
}return (<> <NextSeo title= {`$ {
  equipment.name}- Zion Marketplace`
}description= {equipment.description}openGraph= {{
  title: `$ {
  equipment.name}- Zion Marketplace`, description: equipment.description images: equipment.images.length > 0 && equipment.images[0] ? [ {,
url: equipment.images[0]
}] : undefined
}/> key= {index}onClick={
  () => setSelectedImageIndex (index)
}className={
  `aspect-square rounded-md overflow-hidden border-2 transition-all $ {'
  selectedImageIndex === index ? 'border-zion-cyan' : 'border-transparent hover:border-zion-slate-light'
}`
}> <ImageWithRetry /> </button>) )
}</div>)
}</motion.div> {
  /* Product Details */
}<motion.div <Star key= {i}className={
  `h-4 w-4 $ {'
  i < Math.floor (equipment.rating!) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
}`
}/>) )
}</div> </span> </div>)
}</div> </span> </div> </div> </div>) )
}</div> </div>) "
}> + </Button> </div> </div> <Button <div> <p className="text-white text-sm font-medium" >Free Shipping</p> <p className="text-xs" >For orders over $100 within the US</p> </div> </div> <div> <p className="text-white text-sm font-medium" >Warranty</p> <p className="text-xs" > {equipment.warranty}</p> </div> </div>) "
import React from 'react';

export default function EquipmentDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">EquipmentDetail</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
    </>
  );
}
