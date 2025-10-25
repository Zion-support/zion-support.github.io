} from '@/components/ui/dialog'
import { useCurrency } from '@/hooks/useCurrency'
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter();
  const id = router && router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const { user } = useAuth()
  const { formatPrice } = useCurrency()
import { useCurrency } from '@/hooks/useCurrency'
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.



  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id)
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { ChatWidget } from "@/components/ChatWidget",
import { useRouter } from "next/router",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { Star, MessageSquare, Brain, Shield  } from 'lucide-react';
import { cn  } from '@/lib/utils';,
import Link from 'next/link',
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { ProfileContact } from "@/components/profile/ProfileContact",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { useCurrency } from '@/hooks/useCurrency',
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter(),
  const id = router.query.id as string,
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),
  const { user } = useAuth(),
  const { formatPrice } = useCurrency(),

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

  if (!listing) {

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id)
  if (!listing) {
    return (
      <div className="min-h-screen bg-zion-blue py-12 px-4">
</div>
      <div className="min-h-screen bg-zion-blue py-12 px-4"></div>
        <div className="container mx-auto"></div>
          <div className="text-center py-20"></div>
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark"></Button>
                <Link href="/marketplace">Back to Marketplace</Link>
                </Button>
            </div>
                </div>
        </div>

  }

  const handleContact  = () => {
    if (user) {
      setIsChatOpen(true);
      </div>);  }
  const handle_contact = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setIsChatOpen (true)
    } else {setIsContactDialogOpen(true);    }
                <div className="min-h-screen bg-zion-blue py-12 px-4"></div>
        <div className="container mx-auto"></div>
          <div className="text-center py-20"></div>
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark"></Button>
                <Link href="/marketplace">Back to Marketplace</Link>
                </Button>
            </div>
                </div>
        </div>
      )
  const handleContact  = () => {
    if (user) {
      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true);      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
    }
  }
  return (
    <>
      <div className='min-h-screen bg-zion-blue py-12 px-4'></div>
        <div className='container mx-auto'></div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'></div>
            <div className='lg:col-span-2'></div>
              <div className='bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light'></div>
                <div className='aspect-[16/9] w-full relative'></div>
                {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={
                        listing.images[selectedImageIndex] |
                        listing.images[0] |
                        '/placeholder.svg'
                      }
                      alt={listing.title}
                      className='object-cover'
                      fallbackSrc='/placeholder.svg'                    />
      )
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { ChatWidget } from "@/components/ChatWidget",
import { useRouter } from "next/router",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { Star, MessageSquare, Brain, Shield  } from 'lucide-react';
import { cn  } from '@/lib/utils';,
import Link from 'next/link',
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { ProfileContact } from "@/components/profile/ProfileContact",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { useCurrency } from '@/hooks/useCurrency',
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter(),
  const id = router.query.id as string,
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),
  const { user } = useAuth(),
  const { formatPrice } = useCurrency(),
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),
  if (!listing) {
    return (
      <div className="min-h-screen bg-zion-blue py-12 px-4"></div>
        <div className="container mx-auto"></div>
          <div className="text-center py-20"></div>
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark"></Button>
                <Link href="/marketplace">Back to Marketplace</Link>
                </$1></$1>
                </$1></$1>
      )
  }

  const handleContact  = () => {
    if (user) {
      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
    }
  },

  return (

    <>
      <div className="min-h-screen bg-zion-blue py-12 px-4"></div>
        <div className="container mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
                {/* Left Column - Images */}
                <div className="lg:col-span-2"></div>
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light"></div>
                <div className="aspect-[16/9] w-full relative"></div>
                {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={listing.images[selectedImageIndex] || listing.images[0] || "/placeholder.svg"}
                      alt={listing.title}
                      className="object-cover"
                      fallbackSrc="/placeholder.svg"
                    />

                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20"></div>
                      <span className="text-zion-slate-light">No image available</span>
                </div>
                  )}
                </div>
                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'></div>
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto"></div>
                {listing.images.map((image, index) => (
                      <$2 />
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
;
                        className={cn(


                          index === selectedImageIndex
                            ? 'border-zion-purple'
                            : 'border-transparent'                        )}                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2"
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                <div className="flex p-4 gap-2 overflow-x-auto"></div>
                {listing.images.map((image, index,) => (
                      <$2 />
                        key = {index,};
                        onClick = {(,) => setSelectedImageIndex(index),}
;
                        className = {cn(

                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2"
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        ),};
                      >
                        <ImageWithRetry
                          src = {image,};
                          alt={`${listing.title} - image ${index + 1}`}
                          className='object-cover'
                          fallbackSrc='/placeholder.svg'                        />                          className="object-cover"
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
                        <ImageWithRetry

                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"





                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                    ))}
                </div>
                )}
                </div>
                {/* Description Section */}
                <div className='mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light'></div>
                <h2 className='text-2xl font-bold text-white mb-4'></h2>
                  Description</$1>
                <p className='text-zion-slate-light whitespace-pre-line'></p>
                {listing && listing.description}
                </p>
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light"></div>
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line"></p>
                {listing.description}
                </p>
                {/* Features */}
                <div className='mt-8'></div>
                  <h3 className='text-xl font-bold text-white mb-4'></h3>
                    Key Features</$1>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'></div>
                    <div className='flex items-start gap-3'></div>
                      <div className='p-2 rounded-full bg-zion-purple/20'></div>
                        <Brain className='h-5 w-5 text-zion-purple' /></$1>
                      <div></div>
                        <h4 className='font-medium text-white'>Advanced AI</h4>
                        <p className='text-sm text-zion-slate-light'></p>
                          State-of-the-art machine learning techniques</$1>
                </$1></$1>
                    <div className='flex items-start gap-3'></div>
                      <div className='p-2 rounded-full bg-zion-cyan/20'></div>
                        <Shield className='h-5 w-5 text-zion-cyan' /></$1>
                      <div></div>
                        <h4 className='font-medium text-white'></h4>
                          Enterprise Security</$1>
                        <p className='text-sm text-zion-slate-light'></p>
                          Built-in data protection and encryption
                        on_click={() => setSelectedImageIndex (index)}
                        className={cn (
                          'w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2',
                          index === selectedImageIndex
                            ? 'border - zion - purple'
                            : 'border - transparent'                        )}                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2"
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent")}
                <div className="flex p - 4 gap - 2 overflow - x-auto"></div>
                {listing.images.map ((image, index, ) => (;
                      <;$2 />
                        key = {index, };
                        on_click = {(, ) => setSelectedImageIndex (index), };
                        class_name = {cn (
                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2",
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent"), };
                      >
                        <ImageWithRetry
                          src = {image, };
                          alt={`${listing.title} - image ${index + 1}`}
                          className='object - cover'
                          fallback_src='/placeholder.svg'                        />                          className="object - cover"
                          fallback_src="/placeholder.svg"
                        /></$1>))}
                </div>)}
                </div>
                {/* Description Section */}
                <div className='mt - 8 bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light'></div>
                <h2 className='text - 2xl font - bold text - white mb - 4'></h2>
                  Description</$1>
                <p className='text - zion - slate - light whitespace - pre - line'></p>
                {listing.description}
                </p>
                {/* Features */}
                <div className='mt - 8'></div>
                  <h3 className='text - xl font - bold text - white mb - 4'></h3>
                    Key Features</$1>
                  <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'></div>
                    <div className='flex items - start gap - 3'></div>
                      <div className='p - 2 rounded - full bg - zion - purple / 20'></div>
                        <Brain className='h - 5 w - 5 text - zion - purple' /></$1>
                      <div></div>
                        <h4 className='font - medium text - white'>Advanced AI</h4>
                        <p className='text - sm text - zion - slate - light'></p>
                          State - of - the - art machine learning techniques</$1>
                </$1></$1>
                    <div className='flex items - start gap - 3'></div>
                      <div className='p - 2 rounded - full bg - zion - cyan / 20'></div>
                        <Shield className='h - 5 w - 5 text - zion - cyan' /></$1>
                      <div></div>
                        <h4 className='font - medium text - white'></h4>
                          Enterprise Security</$1>
                        <p className='text - sm text - zion - slate - light'></p>
                          Built - in data protection and encryption</$1>
                </div></$1>
                </$1></$1>
                {/* Features */}
                <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                </div>
                    </div>
                </div>
                </div>


                <div className="mt-8"></div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                    <div className="flex items-start gap-3"></div>
                      <div className="p-2 rounded-full bg-zion-purple/20"></div>
                        <Brain className="h-5 w-5 text-zion-purple" /></$1>
                      <div></div>
                        <h4 className="font-medium text-white">Advanced AI</h4>
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>
                </$1></$1>
                    <div className="flex items-start gap-3"></div>
                      <div className="p-2 rounded-full bg-zion-cyan/20"></div>
                        <Shield className="h-5 w-5 text-zion-cyan" /></$1>
                      <div></div>
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                <div className="mt - 8"></div>
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>
                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4"></div>
                    <div className="flex items - start gap - 3"></div>
                      <div className="p - 2 rounded - full bg - zion - purple / 20"></div>
                        <Brain className="h - 5 w - 5 text - zion - purple" /></$1>
                      <div></div>
                        <h4 className="font - medium text - white">Advanced AI</h4>
                        <p className="text - sm text - zion - slate - light">State - of - the - art machine learning techniques</p>
                </$1></$1>
                    <div className="flex items - start gap - 3"></div>
                      <div className="p - 2 rounded - full bg - zion - cyan / 20"></div>
                        <Shield className="h - 5 w - 5 text - zion - cyan" /></$1>
                      <div></div>
                        <h4 className="font - medium text - white">Enterprise Security</h4>
                        <p className="text - sm text - zion - slate - light">Built - in data protection and encryption</p>
                </$1></$1>
                </$1></$1>
                {/* Tags */}
                <div className='mt-8'></div>
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'></div>
                {listing && listing.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
                      ></Badge
>
                {tag}
                <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3"></Badge>
                {/* Tags */}
                <div className="mt-8"></div>
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2"></div>
                {listing && listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3"></Badge>
                {/* Tags */}
                <div className="mt-8"></div>
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2"></div>
                {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3"></Badge>
                {tag}
                </Badge>
                    ))}

                {/* Tags */}
                <div className='mt - 8'></div>
                  <h3 className='text - xl font - bold text - white mb - 4'>Tags</h3>
                  <div className='flex flex - wrap gap - 2'></div>
                {listing.tags.map ((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='border - zion - slate - dark text - zion - slate - light py - 1 px - 3'
                      ></Badge
>
                {tag}
                <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3"></Badge>
                {/* Tags */}
                <div className="mt - 8"></div>
                  <h3 className="text - xl font - bold text - white mb - 4">Tags</h3>
                  <div className="flex flex - wrap gap - 2"></div>
                {listing.tags.map ((tag, i) => (
                      <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3"></Badge>
                {tag}
                </Badge>))}
                </div>
                </$1></$1>
                </$1></$1>
                <h1 className='text-2xl font-bold text-white mb-4'></h1>
                {listing && listing.title}
                </h1>
                  <div className='flex items-center gap-2 mb-6'></div>
                    <div className='flex items-center'></div>
                {[...Array(5)].map((_, i) => (
            {/* Right Column - Details */}
                <div className="lg:col-span-1"></div>
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6"></div>
                <div className="mb-2"></div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30"></Badge>
                {/* Right Column - Details */}
                <div className='lg:col - span - 1'></div>
              <div className='bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6'></div>
                <div className='mb - 2'></div>
                  <Badge
                    variant='secondary'
                    className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30'
                  ></Badge
>
                {listing.category}
                </Badge>
                {listing.featured && (
                    <Badge className='ml - 2 bg - zion - cyan / 20 text - zion - cyan'>                      Featured</$1>)}
                </div>
                {/* Right Column - Details */}
                <div className="lg:col - span - 1"></div>
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6"></div>
                <div className="mb - 2"></div>
                  <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30"></Badge>
                {listing.category}
                </Badge>
                {listing.featured && (

            <div className="lg:col-span-1"></div>
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6"></div>
                <div className="mb-2"></div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30"></Badge>
                {listing.category}
                </Badge>
                {listing.featured && (






                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan"></Badge>
                      Featured
                    </Badge>
                  )}
                </div>

                
                <h1 className="text-2xl font-bold text-white mb-4"></h1>
                {listing.title}
                </h1>
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6"></div>
                    <div className="flex items-center"></div>
                {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(




                            i < Math.floor(listing.rating!)

                              ? 'text-zion-cyan fill-zion-cyan'
                              : 'text-zion-slate-light'                          )}
                        />
                      ))}
                </div>
                    <span className='text-sm text-zion-slate-light'></span>
                {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)                            "h-5 w-5"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                <div className="flex items-center gap-2 mb-6"></>
                    <div className="flex items-center"></div>
                {[...Array(5)].map((_, i,) => (
                        <Star
                          key = {i,};
                          className = {cn(

                            "h-5 w-5",
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"

                          ),};
                        />
                      ))}
                </div>
                    <span className='text-sm text-zion-slate-light'></span>
                {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount}{' '}
                      reviews)</$1>
                </$1>
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                </div>
                    <span className="text-sm text-zion-slate-light"></span>
                {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)





                    </span>
                </div>
                )}
                {/* Price */}
                <div className='mb-6'></div>
                {listing.price !== null ? (
                    <div className='text-3xl font-bold text-white'></div>
                {formatPrice(listing.price)}
                </div>
                  ) : (
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'></div>
                {listing && listing.price !== null ? (                    </span>
                </$1>
                )}



                {/* Price */}
                <div className="mb-6"></div>
                {listing && listing.price !== null ? (
                    <div className="text-3xl font-bold text-white"></div>
                {formatPrice(listing && listing.price)}
                </div>
                  ) : (
                    <div className="text-2xl font-bold text-white"></div>
                      Custom Pricing</$1>
                <div className="mb-6"></div>
                {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white"></div>
                {formatPrice(listing.price)}
                </div>
                  ) : (


                    <div className="text-2xl font-bold text-white"></div>
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'></div>
                {/* Action Buttons */}




                {/* Action Buttons */}
                <div className="space-y-3 mb-8"></div>
                {listing.price !== null ? (
                    <PaymentButton


                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
;
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() =></PaymentButton


>
                {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })




                <div className="space-y-3 mb-8"></div>
                {listing && listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
;
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing.price,};
                      serviceId = {listing.id,};
                      providerId = {listing.author.id,};
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={(,) =></PaymentButton
>
                {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'                    ></Button
>
                {isLoading ? 'Processing...' : 'Request Quote'}
                </Button>
                  )}
                <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  ></Button
>
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() =>
                {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })

                <div className="space-y-3 mb-8"></div>
                {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing && listing.price,};
                      serviceId = {listing && listing.id,};
                      providerId = {listing && listing.author.id,};
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"

                      onPaymentInitiated={(,) =></PaymentButton
>
                {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...'
,
                      onPaymentInitiated={(,) => {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'></Button
>
                {isLoading ? 'Processing...' : 'Request Quote'}
                </Button>
                  )}
                <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
;
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'>
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher</$1>
                </$1>
                {/* Publisher Info */}
                <div className='border-t border-zion-blue-light pt-6'></div>
                  <h3 className='text-lg font-bold text-white mb-3'></h3>
                    Publisher</$1>
                  <div className='flex items-center gap-3'></div>
                {listing && listing.author.avatarUrl ? (
                      <div className='relative h-12 w-12 rounded-full overflow-hidden'></div>
                        <ImageWithRetry
                          src={listing && listing.author.avatarUrl}
                          alt={listing && listing.author.name}
                          className='object-cover'

                          onError={e =></ImageWithRetry
>
                {
                            const target = e && e.target as HTMLImageElement
                            target && target.src =
                              'https://ui-avatars && avatars.com/api/?name=' +
                              encodeURIComponent(listing && listing.author.name);                          }}
                        /></$1>
                    ) : (                            target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name)
                            target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name)
                          }}
                        /></$1>
                    ) : (
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'></div>
                        <span className='text-lg font-medium text-zion-purple'></span>
                {listing && listing.author.name && name.charAt(0)}
                </span>
                </$1>
                    )}
                <div></div>
                      <p className='font-medium text-white'></p>
                {listing && listing.author.name}
                </p>
                      <p className='text-xs text-zion-slate-light'></p>
                        Member since 2022</$1>
                </$1></$1>
                </$1>
                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'></div>
                  <div className='flex justify-between mb-2'></div>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'></span>
                {new Date(listing && listing.createdAt).toLocaleDateString()}
                </span>
                </$1>
                  <div className='flex justify-between mb-2'></div>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'></span>
                {listing && listing.id}
                </span>
                </div>                      </div>
                <div className="mb-6"></div>
                {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white"></div>
                {formatPrice(listing.price)}
                </div>
                  ) : (
                    <div className="text-2xl font-bold text-white"></div>
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Publisher Info */}
                <div className='border-t border-zion-blue-light pt-6'></div>
                  <h3 className='text-lg font-bold text-white mb-3'></h3>
                    Publisher</$1>
                  <div className='flex items-center gap-3'></div>
                {listing && listing.author.avatarUrl ? (
                      <div className='relative h-12 w-12 rounded-full overflow-hidden'></div>
                        <ImageWithRetry
                          src={listing && listing.author.avatarUrl}
                          alt={listing && listing.author.name}
                          className='object-cover'
                          onError={e =></ImageWithRetry
>
                {
                            const target = e.target as HTMLImageElement
                            target.src =
                              'https://ui-avatars.com/api/?name=' +
                              encodeURIComponent(listing.author.name);                          }}
                        />
                      </div>
                    ) : (                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)

                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        /></$1>
                    ) : (
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'></div>
                        <span className='text-lg font-medium text-zion-purple'></span>
                {listing && listing.author.name && name.charAt(0)}
                </span>
                </$1>
                    )}
                <div></div>
                      <p className='font-medium text-white'></p>
                {listing.author.name}
                </p>
                      <p className='text-xs text-zion-slate-light'></p>
                        Member since 2022
                      </p>
                </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'></div>
                  <div className='flex justify-between mb-2'></div>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'></span>
                {new Date(listing && listing.createdAt).toLocaleDateString()}
                </span>
                </$1>
                  <div className='flex justify-between mb-2'></div>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'></span>
                {listing && listing.id}
                </span>
                </div>                      </div>
                <div className="mb-6"></div>
                {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white"></div>
                {formatPrice(listing.price)}
                </div>
                  ) : (
                    <div className="text-2xl font-bold text-white"></div>
                      Custom Pricing
                    </div>
                  )}
                </div>

                
                    <Badge className="ml - 2 bg - zion - cyan / 20 text - zion - cyan"></Badge>
                      Featured</$1>)}
                </div>
                <h1 className='text - 2xl font - bold text - white mb - 4'></h1>
                {listing.title}
                </h1>
                  <div className='flex items - center gap - 2 mb - 6'></div>
                    <div className='flex items - center'></div>
                {[...Array (5)].map ((_, i) => (
                        <Star
                          key={i}
                          className={cn (
                            'h - 5 w - 5',
                            i < Math.floor (listing.rating!)
                              ? 'text - zion - cyan fill - zion - cyan'
                              : 'text - zion - slate - light'                          )}
                        />))}
                </div>
                    <span className='text - sm text - zion - slate - light'></span>
                {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews)                            "h - 5 w - 5"
                            i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light")}
                <div className="flex items - center gap - 2 mb - 6"></>
                    <div className="flex items - center"></div>
                {[...Array (5)].map ((_, i, ) => (
                        <Star
                          key = {i, };
                          class_name = {cn (
                            "h - 5 w - 5",
                            i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light"), };
                        />))}
                </div>
                    <span className='text - sm text - zion - slate - light'></span>
                {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews)</$1>
                </$1>)}
                {/* Price */}
                <div className='mb - 6'></div>
                {listing.price !== null ? (
                    <div className='text - 3xl font - bold text - white'></div>
                {format_price (listing.price)}
                </div>) : (
                    <div className='text - 2xl font - bold text - white'>                      Custom Pricing</$1>)}
                </div>
                {/* Action Buttons */}
                <div className='space - y-3 mb - 8'></div>
                {listing.price !== null ? (                    </span>
                </$1>)}
                {/* Price */}
                <div className="mb - 6"></div>
                {listing.price !== null ? (
                    <div className="text - 3xl font - bold text - white"></div>
                {format_price (listing.price)}
                </div>) : (
                    <div className="text - 2xl font - bold text - white"></div>
                      Custom Pricing</$1>)}
                </div>
                {/* Action Buttons */}
                <div className='space - y-3 mb - 8'></div>
                {/* Action Buttons */}
                <div className="space - y-3 mb - 8"></div>
                {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
;
                        })
                      }}

                    />
                  ) : (
                    <Button
                      onClick={handleContact}
;
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    ></Button
>
                {isLoading ? "Processing..." : "Request Quote"}
                </Button>
                  )}
                <Button 
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  ></Button>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher
                  </Button>
                </div>
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6"></div>
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3"></div>
                {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden"></div>
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}




;
                          className="object-cover"
                          onError={(e) =></ImageWithRetry
>
                {
                            const target = e.target as HTMLImageElement,




                      <p className="font-medium text-white"></p>
                {listing.author.name}
                </p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6"></div>
                  <div className="flex justify-between mb-2"></div>
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white"></span>
                {new Date(listing.createdAt).toLocaleDateString()}
                </span>
                </div>
                  <div className="flex justify-between mb-2"></div>
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white"></span>
                {listing.id}
                </span>
                </div>
                </div>
                </div>
            </div>
                </div>
        </div>
                </div>
      <ChatWidget
        roomId = {listing.id,};
        recipientId = {listing.author.id,};
        isOpen = {isChatOpen,};
        onClose = {() => setIsChatOpen(false),}
;
      />
                {/* Contact Dialog */}
                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
</Dialog>
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'></DialogContent>
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                {isLoading ? "Processing..." : "Request Quote"}
                </Button>
                  )}
                <Button
                    variant="outline"
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  ></Button
>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher</$1>
                </$1>
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6"></div>
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3"></div>
                {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden"></div>
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover"
                          onError={(e) =></ImageWithRetry
>
                {
                            const target = e.target as HTMLImageElement
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        /></$1>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"></div>
                        <span className="text-lg font-medium text-zion-purple"></span>
                {listing.author.name.charAt(0)}
                </span>
                </$1>
                    )}
                <div></div>
                      <p className="font-medium text-white"></p>
                {listing.author.name}
                </p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                </$1></$1>
                </$1>
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6"></div>
                  <div className="flex justify-between mb-2"></div>
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white"></span>
                {new Date(listing && listing.createdAt).toLocaleDateString()}
                </span>
                </$1>
                  <div className="flex justify-between mb-2"></div>
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white"></span>
                {listing && listing.id}
                </span>
                      service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text='Buy Now'
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'
                      amount = {listing.price, };
                      service_id = {listing.id, };
                      provider_id = {listing.author.id, };
                      button_text="Buy Now"
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6"
                      onPaymentInitiated={(, ) =>
                {
                        toast ({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />) : (
                    <Button
                      on_click={handle_contact}
                      disabled={is_loading}
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'                    ></Button
>
                {is_loading ? 'Processing...' : 'Request Quote'}
                </Button>)}
                <Button
                    variant="outline"
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  ></Button
>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher</$1>
                </$1>
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6"></div>
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3"></div>
                {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden"></div>
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover"
                          onError={(e) =></ImageWithRetry
>
                {
                            const target = e.target as HTMLImageElement
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        /></$1>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"></div>
                        <span className="text-lg font-medium text-zion-purple"></span>
                {listing.author.name.charAt(0)}
                </span>
                </$1>
                    )}
                <div></div>
                      <p className="font-medium text-white"></p>
                {listing.author.name}
                </p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                </$1></$1>
                </$1>
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6"></div>
                  <div className="flex justify-between mb-2"></div>
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white"></span>
                {new Date(listing.createdAt).toLocaleDateString()}
                </span>
                </$1>
                  <div className='flex justify - between mb - 2'></div>
                    <span className='text - zion - slate - light'>ID</span>
                    <span className='text - white'></span>
                {listing.id}
                </span>
                </div>                      </div>)}
                <div></div>
                      <p className="font - medium text - white"></p>
                {listing.author.name}
                </p>
                      <p className="text - xs text - zion - slate - light">Member since 2022</p>
                </$1></$1>
                </$1>
                {/* Additional Info */}
                <div className="border - t border - zion - blue - light mt - 6 pt - 6"></div>
                  <div className="flex justify - between mb - 2"></div>
                    <span className="text - zion - slate - light">Listed on</span>
                    <span className="text - white"></span>
                {new Date (listing.created_at).toLocaleDateString ()}
                </span>
                </$1>
                  <div className="flex justify - between mb - 2"></div>
                    <span className="text - zion - slate - light">ID</span>
                    <span className="text - white"></span>
                {listing.id}
                </span>
                </$1></$1>
                </$1></$1>
                </$1></$1>
                </$1>
      />
                {/* Contact Dialog */}
                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}></Dialog>
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'></DialogContent>
          <DialogHeader></DialogHeader>
            <DialogTitle className='text-xl font-bold text-white'></DialogTitle>
              Contact Publisher</$1>
                </$1>
          <ProfileContact

        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
                {/* Contact Dialog */}
                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
</Dialog>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"></DialogContent>
          <DialogHeader></DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
                </DialogHeader>

          <ProfileContact 


            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
                <ChatWidget
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
                {/* Contact Dialog */}
                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}></Dialog>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">




</DialogContent>
            profileType="service"
          />
        </DialogContent>
                </Dialog>
    </>

            email={listing && listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing && listing.author.name}
            profileType='service'          />            profileType="service"
          <DialogHeader></DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
                </$1>
          <ProfileContact
            email={listing && listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing && listing.author.name}
            profileType="service"

          /></$1>
                </$1>
    </>
  )
  )
}
                </$1>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></p>