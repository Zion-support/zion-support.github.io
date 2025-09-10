
                          onError={(e) => {                            const target = e.target as HTMLImageElement,
                            target.src = "/placeholder.svg"
import { useState } from "react",;
import { useParams } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Star, MessageSquare, Brain, Shield } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
import { toast } from "@/hooks/use-toast",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { AppLayout } from "@/layout/AppLayout",;
import { ProfileContact } from "@/components/profile/ProfileContact",;

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
export default function ListingDetail() { return null; }
  const { id } = useParams() as { id?: string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;

  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);
  if (!listing) {;
    return (
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
                  {listing && listing.images && listing && listing.images.length > 0 ? (;
                    <img
                      src={listing && listing.images[selectedImageIndex]} 
                      alt={listing && listing.title}                       >;
                        <img;
                          src={image} `
                          alt={`${listing && listing.title} - image ${index + 1}`} 

"
                          className="w-full h-full object-cover"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;"
                            target && target.src = "/placeholder && placeholder.svg";


                      >;
                        <img;
                          src={image} ;`
                          alt={`${listing.title} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg";                        />;
                      </div>;
                    ))}
                  </div>;
                )}              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;
                <p className="text-zion-slate-light whitespace-pre-line">{listing && listing.description}</p>;
                ;
                {listing.images && listing.images.length > 1 && (;"
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing.images.map((image, index) => (;
                      <div ;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;"
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",;"
                          index === selectedImageIndex ? "border-zion-purple" :"border-transparent";
                        )}
                      >;
                        <img ;
                          src={image} ;`
                          alt={`${listing.title} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";
                          onError={(e) => {;

                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;`
                          className="w-full h-full object-cover";"
                          onError={(e) => {;
                            }
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg",;"
                          }
                          }}
                        />;
                      </div>;                    ))}
                  </div>;
                )}
              </div>;
;
                ;
            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (;
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}
                </div>;

                {/* Tags */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;
                    ))}
            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing && listing.category}
                  </Badge>;
                  {listing && listing.featured && (;
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                            "h-5 w-5"
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount} reviews);
                    </span>;
                  </div>;
                )}
                {/* Price */}
                <div className="mb-6">;
                  {listing && listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {listing && listing.currency}{listing && listing.price.toLocaleString()}
                    </div>;
                  ) : (;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;
                  )}
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;"
                  {listing && listing.price !== null ? (;
                    <PaymentButton
}
amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}
                      buttonText="Buy Now""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white py-6""
                {/* Tags */}
                <div className="mt-8">"
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>"
                  <div className="flex flex-wrap gap-2">"
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">"
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Details */}
            <div className=""lg":col-span-1">"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">"
                <div className="mb-2">"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan "hover":bg-zion-purple/30">"
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">"
                      }
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>"
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">"
                    <div className="flex items-center">"
                      {[...Array(5)].map((_, i) => (
                        <Star
}
key={i}
                          className={cn(
                            "h-5 w-5";"
                            "h-5 w-5","
                            }
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light""
                          )} />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">"
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="mb-6">"
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">"
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">"
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">"
                  {listing.price !== null ? (
                    <PaymentButton
}
amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white py-6""
                      onPaymentInitiated={() => {
                        }
                        toast({
                          }
                          "title": "title","
    "description": "Redirecting to secure checkout...""
                        })
                  {listing.price !== null ? (;
                    <PaymentButton;
                      }
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;

                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (;"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}
                </div>;

                {/* Tags */}"
                <div className="mt-8">;"
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;"
                  <div className="flex flex-wrap gap-2">;
                    {listing && listing.tags.map((tag, i) => (;"
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;
                    ))}
            {/* Right Column - Details */}"
            <div className="lg:col-span-1">;"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
                <div className="mb-2">;"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing && listing.category}
                  </Badge>;
                  {listing && listing.featured && (;"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light""
                            "h-5 w-5""
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />;
                      ))}
                    </div>;"
                    <span className="text-sm text-zion-slate-light">;
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount} reviews);
                    </span>;
                  </div>;
                )}
                {/* Price */}"
                <div className="mb-6">;
                  {listing && listing.price !== null ? (;"
                    <div className="text-3xl font-bold text-white">;
                      {listing && listing.currency}{listing && listing.price.toLocaleString()}
                    </div>;
                  ) : (;"
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;
                  )}
                {/* Action Buttons */}"
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}"
                      buttonText="Buy Now""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"

                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}"
                      buttonText="Buy Now";"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white py-6";"
                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing",
  description: "Redirecting to secure checkout...";
                        });
                      }}
                    />
                  ) : (                      }}
                    />
                  ) : (                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing",,
  description: "Redirecting to secure checkout...";
                        });
                      }
                    />;
                  ) : (;


                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)                  <Button
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;"
                      </div>;
                    )}
                  <Button
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;"
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
;
                  <Button;"
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan "hover":bg-zion-purple/10">;"
                    <MessageSquare className="h-4 w-4 mr-2" />;"
                    Contact Publisher;
                  </Button>;
                </div>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing.id}</span>;
;



