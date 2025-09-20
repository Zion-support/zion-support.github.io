import React from 'react';

      acc[item.id] = convertProductListingToEquipmentDetails (item);
      return acc;
    },

    {} as { [key: string]: EquipmentDetails }
  );
export default /**
 * EquipmentDetail - Function description
 */
function EquipmentDetail() {
  const router = use_router ();
  const { id } = router.query as { id?: string }
  const { isAuthenticated, user } = useAuth()
  const { items, dispatch } = useCart()
  const { formatPrice } = useCurrency()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>()
  useEffect((,) => {
    async function loadEquipment() {
      if (!id) {
        setLoading(false)
        setError('No equipment ID provided')
        return;
      }
      try {
        setLoading(true)
        setError(null)
        // Try to find in static data first
        const equipmentFromSample = SAMPLE_EQUIPMENT[id]
        if (equipmentFromSample) {
          setEquipment(equipmentFromSample)
          setLoading(false)
          return;
        }

        // Try to get from session_storage (for dynamically generated equipment);
        // Check condition
if ( {) {
  $2
}

          try {
            const stored = sessionStorage.getItem(`equipment:${id}`)
            if (stored) {
              const storedData = JSON.parse(stored)
              // Check if it's already in EquipmentDetails format or needs conversion
              let equipmentData: EquipmentDetails
              if (storedData.name) {
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {;
  ShoppingCart,;
  Star,;
  Truck,;
  Shield,;
  RotateCcw,;
  Clock,;
  AlertTriangle,;
  ArrowLeft,;
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { getStripe } from '@/utils/getStripe';import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { useCart } from '@/context/CartContext';
import { ImageWithRetry } from '@/components/ui/ImageWithRetry';
import { equipmentListings } from '@/data/equipmentData';
import { ProductListing } from '@/types/listings';
import { motion } from 'framer-motion';
import { useCurrency } from '@/hooks/useCurrency';
import { logErrorToProduction } from '@/utils/productionLogger';
interface EquipmentSpecification {;
  name: string;
value: string ;
}interface EquipmentDetails {;
  id: string;
name: string;
description: string;
brand: string;
category: string;
subcategory?: string;
images: string[];
price: number;
currency: string;
rating?: number;
reviewCount?: number;
inStock: boolean;
expectedShipping?: string;
specifications: EquipmentSpecification[];
features: string[];
warranty?: string;
returnPolicy?: string ;
}return {;
  id: item && item.id, name: item && item.title, description: item && item.description, brand: item && item.brand || 'Unknown', category: item && item.category, subcategory: item && item.subcategory, images: item && item.images || ['https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item && item.price || 0, currency: item && item.currency || '$', rating: item && item.rating, reviewCount: item && item.reviewCount, inStock: item && item.availability === 'In Stock' || !item && item.availability, expectedShipping: item && item.availability || 'In Stock',  specifications: (item && item.specifications || []) .map ( (spec) => ({';
  name: spec, value: '' ;
}) );
features: item && item.tags || [];';
warranty: '1 Year Manufacturer Warranty';';
returnPolicy: '30-day return policy' ;

// Convert ProductListing to EquipmentDetails format;
function convertProductListingToEquipmentDetails(): any (;
  item: ProductListing;
): EquipmentDetails {;
  return {;
    id: item && item.id,;
    name: item && item.title,;
    description: item && item.description,;
    brand: item && item.brand || 'Unknown',;
    category: item && item.category,;
    subcategory: item && item.subcategory,;
    images: item && item.images || [;
      'https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500',;
    ],;
    price: item && item.price || 0,;
    currency: item && item.currency || '$',;
    rating: item && item.rating,;
    reviewCount: item && item.reviewCount,;
    inStock: item && item.availability === 'In Stock' || !item && item.availability,;
    expectedShipping: item && item.availability || 'In Stock',;
    specifications: (item && item.specifications || []).map(spec => ({;
      name: spec,;
      value: '',    })),;
    features: item && item.tags || [],;
    warranty: '1 Year Manufacturer Warranty',;
    returnPolicy: '30-day return policy',;
  };

// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipmentListings && equipmentListings.reduce(;
    (acc, item) => {;
      acc[item && item.id] = convertProductListingToEquipmentDetails(item);
      return acc;
    },;
    {} as { [key: string]: EquipmentDetails }
  );
export default function EquipmentDetail() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const { isAuthenticated, user } = useAuth();
  const { items, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>();

  useEffect((,) => {;
    async function loadEquipment() {;
      if (!id) {;
        setLoading(false);
        setError('No equipment ID provided');
        return;
      }

      try {;
        setLoading(true);
        setError(null);

        // Try to find in static data first;
        const equipmentFromSample = SAMPLE_EQUIPMENT[id];
        if (equipmentFromSample) {;
          setEquipment(equipmentFromSample);
          setLoading(false);
          return;
        }

        // Try to get from sessionStorage (for dynamically generated equipment);
        if (typeof window !== 'undefined') {;
          try {;
            const stored = sessionStorage && sessionStorage.getItem(`equipment:${id}`);
            if (stored) {;
              const storedData = JSON && JSON.parse(stored);

              // Check if it's already in EquipmentDetails format or needs conversion;
              let equipmentData: EquipmentDetails;
              if (storedData && storedData.name) {;
                // Already in EquipmentDetails format;
                equipmentData = storedData;
              } else {;
                // It's a ProductListing, convert it;
                equipmentData = convertProductListingToEquipmentDetails(;
                  storedData as ProductListing;
                );
              }
              setEquipment(equipmentData)
              setLoading(false)
              return;
            }


                // It's a ProductListing, convert it;
                equipment_data = convertProductListingToEquipmentDetails (
                  stored_data as ProductListing);
              }
              set_equipment (equipment_data);
              set_loading (false);
              return;
            }
          } catch (storage_error) {
            logErrorToProduction ('Error reading from session_storage:', {
              data: storage_error,
            });
          }
        }
        // If not found anywhere, set error;
        set_error ('Equipment not found');
        set_loading (false);

      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error })
        setError('Failed to load equipment details')
        setLoading(false)
      }
    }





import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { NextSeo } from '@/components/NextSeo',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { getStripe } from "@/utils/getStripe",
import { useCart } from '@/context/CartContext',
import { ImageWithRetry } from '@/components/ui/ImageWithRetry',
import { equipmentListings } from '@/data/equipmentData',
import { ProductListing } from '@/types/listings',
import { motion } from 'framer-motion',
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
interface EquipmentSpecification {
  name: string,
  value: string
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { NextSeo } from '@/components/NextSeo',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { getStripe } from "@/utils/getStripe",;
import { useCart } from '@/context/CartContext',;
import { ImageWithRetry } from '@/components/ui/ImageWithRetry',;
import { equipmentListings } from '@/data/equipmentData',;
import { ProductListing } from '@/types/listings',;
import { motion } from 'framer-motion',;
import { useCurrency } from '@/hooks/useCurrency',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface EquipmentSpecification {;
  name: string,;
  value: string;
}
;
interface EquipmentDetails {;
  id: string,;
  name: string,;
  description: string,;
  brand: string,;
  category: string,;
  subcategory?: string,;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number,;
  reviewCount?: number,;
  inStock: boolean,;
  expectedShipping?: string,;
  specifications: EquipmentSpecification[],;
  features: string[],;
  warranty?: string,;
  returnPolicy?: string;
}
;
// Convert ProductListing to EquipmentDetails format;
function convertProductListingToEquipmentDetails(item: ProductListing): EquipmentDetails {;
  return {;
    id: item.id,;
    name: item.title,;
    description: item.description,;
    brand: item.brand || 'Unknown',;
    category: item.category,;
    subcategory: item.subcategory,;
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],;
    price: item.price || 0,;
    currency: item.currency || '$',;
    rating: item.rating,;
    reviewCount: item.reviewCount,;
    inStock: item.availability === 'In Stock' || !item.availability,;
    expectedShipping: item.availability || 'In Stock',;
    specifications: (item.specifications || []).map((spec) => ({;
      name: spec,;
      value: '';
    })),;
    features: item.tags || [],;
    warranty: '1 Year Manufacturer Warranty',;
    returnPolicy: '30-day return policy';
  }
}
;
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipmentListings.reduce((acc, item) => {;
    acc[item.id] = convertProductListingToEquipmentDetails(item),;
    return acc;
  }, {} as { [key: string]: EquipmentDetails }),;
export default function EquipmentDetail() {;
  const router = useRouter(),;
  const { id } = router.query as { id?: string },;
  const { isAuthenticated, user } = useAuth(),;
  const { items, dispatch } = useCart(),;
  const { formatPrice } = useCurrency(),;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [quantity, setQuantity] = useState(1),;
  const [isAdding, setIsAdding] = useState(false),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>(),;
  useEffect(() => {;
    async function loadEquipment() {;
      if (!id) {;
        setLoading(false),;
        setError('No equipment ID provided'),;
        return;
      }
;
      try {;
        setLoading(true),;
        setError(null),;
        // Try to find in static data first;
        const equipmentFromSample = SAMPLE_EQUIPMENT[id],;
        if (equipmentFromSample) {;
          setEquipment(equipmentFromSample),;
          setLoading(false),;
          return;
        }
;
        // Try to get from sessionStorage (for dynamically generated equipment);
        if (typeof window !== 'undefined') {;
          try {;
            const stored = sessionStorage.getItem(`equipment:${id}`),;
            if (stored) {;
              const storedData = JSON.parse(stored),;
              // Check if it's already in EquipmentDetails format or needs conversion;
              let equipmentData: EquipmentDetails,;
              if (storedData.name) {;
                // Already in EquipmentDetails format;
                equipmentData = storedData;
              } else {;

                // It's a ProductListing, convert it;
                equipment_data = convertProductListingToEquipmentDetails (
                  stored_data as ProductListing);
              }
              set_equipment (equipment_data);
              set_loading (false);
              return;
            }
          } catch (storage_error) {
            logErrorToProduction ('Error reading from session_storage:', {
              data: storage_error,
            });
          }
        }
        // If not found anywhere, set error;
        set_error ('Equipment not found');
        set_loading (false);

      } catch (error) {
        logErrorToProduction ('Error loading equipment:', { data: error });
        set_error ('Failed to load equipment details');
        set_loading (false);
      }
    }


    loadEquipment()
  }, [id]),






  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({

        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',


      })
      return;
    }


    setIsAdding(true),







          quantity}}),


      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
    } finally {
      setIsAdding(false)
    }
  },

  const inCart = items.some(item => item.id === equipment?.id),






          quantity}}),






  // Loading state
  if (loading) {
    return (
      <>
        <NextSeo title="Loading Equipment..." />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
              <p className="text-zion-slate-light">Loading equipment details...</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  const in_cart = items.some (item => item.id === equipment?.id);
  // Loading state;
  // Check condition
if ( {) {
  $2
}

    return (
      <>;
        <NextSeo title='Loading Equipment...' />;
        <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
          <div className='container mx - auto'>;
            <div className='text - center py - 20'>;
              <div className='animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - cyan mx - auto mb - 4'></div>;
              <p className='text - zion - slate - light'>;
                Loading equipment details...;
              </p>;
            </div>;
          </div>;
        </div>;
      </>);
  }

          } catch (storageError) {;
            logErrorToProduction('Error reading from sessionStorage:', {;
              data: storageError,;
            });
          }
        }

        // If not found anywhere, set error;
        setError('Equipment not found');
        setLoading(false);
      } catch (error) {;
        logErrorToProduction('Error loading equipment:', { data: error });
        setError('Failed to load equipment details');
        setLoading(false);
      }
    }

    loadEquipment();
  }, [id]);

  const handleAddToCart = async () => {;
    if (!equipment || !isAuthenticated) {;
      toast({;
        title: 'Authentication Required',;
        description: 'Please log in to add items to cart',;
        variant: 'destructive',;
      });
      return;
    }

    setIsAdding(true);
    try {;
      dispatch({;
        type: 'ADD_ITEM',;
        payload: {;
          id: equipment && equipment.id,;
          name: equipment && equipment.name,;
          price: equipment && equipment.price,;
          quantity,;
        },;
      });

      toast({;
        title: 'Added to Cart',;
        description: `${equipment && equipment.name} has been added to your cart.`,;
      });
    } catch (error) {;
      toast({;
        title: 'Error',;
        description: 'Failed to add item to cart. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsAdding(false);
    }
  };

  const inCart = items && items.some(item => item && item.id === equipment?.id);

  // Loading state;
  if (loading) {;
    return (
      <>;
        <NextSeo title='Loading Equipment...' />;

        <div className='min-h-screen bg-zion-blue py-12 px-4'>;
          <div className='container mx-auto'>;
            <div className='text-center py-20'>;
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4'></div>;
              <p className='text-zion-slate-light'>;
                Loading equipment details...;
              </p>;
            </div>;
          </div>;
        </div>;
      </>;
    );
  }

  // Error state;
  if (error || !equipment) {;

    return (
      <>;
        <NextSeo
          title="Equipment Not Found"
          description="The equipment you're looking for doesn't exist or has been removed."
        />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}

              </h1>;
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>;
                {error === 'Equipment not found';

                  ? 'Equipment Not Found';
                  : 'Something went wrong'}
              </h1>
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>
                {error === 'Equipment not found'
                  ? "The equipment you're looking for doesn't exist or has been removed."
                  : error |

                    "We couldn't load the equipment details. Please try again."}
              </p>;
              <div className='space-x-4'>;
                <Button
                  onClick={() => router && router.back()}
                  variant='outline';
                  className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue'                >;
                  <ArrowLeft className='h-4 w-4 mr-2' />;
                  Go Back;
                </Button>;
                <Button

              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>

              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>
                {error === 'Equipment not found'
                  ? "The equipment you're looking for doesn't exist or has been removed."
                  : error |
                    "We couldn't load the equipment details. Please try again."}
              </p>
              <div className='space-x-4'>
                <Button
                  onClick={() => router && router.back()}
                  variant='outline';
                  className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue'                >;
                  <ArrowLeft className='h-4 w-4 mr-2' />;
                  Go Back;
                </Button>;
                <Button
                  onClick={() => router.push('/equipment')}
                  className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'                >
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
                {error === 'Equipment not found' 
                  ? "The equipment you're looking for doesn't exist or has been removed." 
                  : error || "We couldn't load the equipment details. Please try again."
                }
              </p>
              <div className="space-x-4">
                <Button 
                  onClick={() => router.back()} 
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
                <Button 
                  onClick={() => router.push('/equipment')}
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
                >

                  Browse Equipment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EquipmentDetail</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default EquipmentDetail;