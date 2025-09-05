
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useParams } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
import { Star, MessageSquare, Brain, Shield } from "lucide-react",
import { cn } from "@/lib/utils",
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { AppLayout } from "@/layout/AppLayout",
import { ProfileContact } from "@/components/profile/ProfileContact",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
=======
import { useState } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Star, MessageSquare, Brain, Shield } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { MARKETPLACE_LISTINGS } from &quot;@/data/marketplaceData&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { PaymentButton } from &quot;@/components/transactions/PaymentButton&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { ProfileContact } from &quot;@/components/profile/ProfileContact&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

  if (!listing) {
    return (
      <AppLayout>
        <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            <div className=&quot;text-center py-20&quot;>
              <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Listing Not Found</h1>
              <p className=&quot;text-zion-slate-light mb-8&quot;>The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark&quot;>
                <a href=&quot;/marketplace&quot;>Back to Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    )
  }

  const handleContact = () => {
    setIsContactDialogOpen(true)
  },

  return (
    <AppLayout>
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {/* Left Column - Images */}
            <div className=&quot;lg:col-span-2&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light&quot;>
                <div className=&quot;aspect-[16/9] w-full relative&quot;>
                  {listing.images && listing.images.length > 0 ? (
                    <img 
                      src={listing.images[selectedImageIndex]} 
                      alt={listing.title} 
                      className=&quot;w-full h-full object-cover&quot;
                      onError={(e) => {
<<<<<<< HEAD
                        const target = e.target as HTMLImageElement,
                        target.src = "/placeholder.svg"
=======
                        const target = e.target as HTMLImageElement;
                        target.src = &quot;/placeholder.svg&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      }}
                    />
                  ) : (
                    <div className=&quot;w-full h-full flex items-center justify-center bg-zion-blue-light/20&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>No image available</span>
                    </div>
                  )}
                </div>
                
                {listing.images && listing.images.length > 1 && (
                  <div className=&quot;flex p-4 gap-2 overflow-x-auto&quot;>
                    {listing.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          &quot;w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2&quot;,
                          index === selectedImageIndex ? &quot;border-zion-purple&quot; : &quot;border-transparent&quot;
                        )}
                      >
                        <img 
                          src={image} 
                          alt={`${listing.title} - image ${index + 1}`} 
                          className=&quot;w-full h-full object-cover&quot;
                          onError={(e) => {
<<<<<<< HEAD
                            const target = e.target as HTMLImageElement,
                            target.src = "/placeholder.svg"
=======
                            const target = e.target as HTMLImageElement;
                            target.src = &quot;/placeholder.svg&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?: string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),;
  if (!listing) {;
    return (;
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>;
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">;
                <a href="/marketplace">Back to Marketplace</a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </AppLayout>;
    );
  }
;
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  },;
  return (;
    <AppLayout>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
                  {listing.images && listing.images.length > 0 ? (;
                    <img;
                      src={listing.images[selectedImageIndex]} ;
                      alt={listing.title} ;
                      className="w-full h-full object-cover";
                      onError={(e) => {;
                        const target = e.target as HTMLImageElement,;
                        target.src = "/placeholder.svg";
                      }}
                    />;
                  ) : (;
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">;
                      <span className="text-zion-slate-light">No image available</span>;
                    </div>;
                  )}
                </div>;
                {listing.images && listing.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing.images.map((image, index) => (;
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        )}
                      >;
                        <img;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          }}
                        />;
                      </div>;
                    ))}
                  </div>;
                )}
              </div>;
              {/* Description Section */}
<<<<<<< HEAD
              <div className=&quot;mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light&quot;>
                <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Description</h2>
                <p className=&quot;text-zion-slate-light whitespace-pre-line&quot;>{listing.description}</p>
                
                {/* Features */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Key Features</h3>
                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                    <div className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;p-2 rounded-full bg-zion-purple/20&quot;>
                        <Brain className=&quot;h-5 w-5 text-zion-purple&quot; />
                      </div>
                      <div>
                        <h4 className=&quot;font-medium text-white&quot;>Advanced AI</h4>
                        <p className=&quot;text-sm text-zion-slate-light&quot;>State-of-the-art machine learning techniques</p>
                      </div>
                    </div>
                    <div className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;p-2 rounded-full bg-zion-cyan/20&quot;>
                        <Shield className=&quot;h-5 w-5 text-zion-cyan&quot; />
                      </div>
                      <div>
                        <h4 className=&quot;font-medium text-white&quot;>Enterprise Security</h4>
                        <p className=&quot;text-sm text-zion-slate-light&quot;>Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Tags</h3>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light py-1 px-3&quot;>
=======
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>;
                {/* Features */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-purple/20">;
                        <Brain className="h-5 w-5 text-zion-purple" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Advanced AI</h4>;
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-cyan/20">;
                        <Shield className="h-5 w-5 text-zion-cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Enterprise Security</h4>;
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
                {/* Tags */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        {tag}
                      </Badge>;
                    ))}
                  </div>;
                </div>;
              </div>;
            </div>;
            {/* Right Column - Details */}
<<<<<<< HEAD
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6&quot;>
                <div className=&quot;mb-2&quot;>
                  <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className=&quot;ml-2 bg-zion-cyan/20 text-zion-cyan&quot;>
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>{listing.title}</h1>
                
                {listing.rating && (
                  <div className=&quot;flex items-center gap-2 mb-6&quot;>
                    <div className=&quot;flex items-center&quot;>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            &quot;h-5 w-5&quot;,
                            i < Math.floor(listing.rating!) ? &quot;text-zion-cyan fill-zion-cyan&quot; : &quot;text-zion-slate-light&quot;
=======
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
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>;
                {listing.rating && (;
                  <div className="flex items-center gap-2 mb-6">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star;
                          key={i}
                          className={cn(;
                            "h-5 w-5",;
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          )}
                        />;
                      ))}
<<<<<<< HEAD
                    </div>
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
=======
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews);
                    </span>;
                  </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                )}
;
                {/* Price */}
<<<<<<< HEAD
                <div className=&quot;mb-6&quot;>
                  {listing.price !== null ? (
                    <div className=&quot;text-3xl font-bold text-white&quot;>
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className=&quot;text-2xl font-bold text-white&quot;>
                      Custom Pricing
                    </div>
=======
                <div className="mb-6">;
                  {listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>;
                  ) : (;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  )}
                </div>;
                {/* Action Buttons */}
<<<<<<< HEAD
                <div className=&quot;space-y-3 mb-8&quot;>
                  {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText=&quot;Buy Now&quot;
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                      onPaymentInitiated={() => {
                        toast({
<<<<<<< HEAD
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
=======
                          title: &quot;Payment Processing&quot;,
                          description: &quot;Redirecting to secure checkout...&quot;
                        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                <div className="space-y-3 mb-8">;
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing";
                          description: "Redirecting to secure checkout...";
                        });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      }}
                    />;
                  ) : (;
                    <Button;
                      onClick={handleContact}
                      disabled={isLoading}
<<<<<<< HEAD
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                    >
                      {isLoading ? &quot;Processing...&quot; : &quot;Request Quote&quot;}
                    </Button>
                  )}
                  
                  <Button 
                    variant=&quot;outline&quot; 
                    onClick={handleContact}
                    disabled={isLoading}
                    className=&quot;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                  >
                    <MessageSquare className=&quot;h-4 w-4 mr-2&quot; />
                    Contact Publisher
                  </Button>
                </div>
                
                {/* Publisher Info */}
                <div className=&quot;border-t border-zion-blue-light pt-6&quot;>
                  <h3 className=&quot;text-lg font-bold text-white mb-3&quot;>Publisher</h3>
                  <div className=&quot;flex items-center gap-3&quot;>
                    {listing.author.avatarUrl ? (
                      <img 
                        src={listing.author.avatarUrl} 
                        alt={listing.author.name} 
                        className=&quot;h-12 w-12 rounded-full&quot;
                        onError={(e) => {
<<<<<<< HEAD
                          const target = e.target as HTMLImageElement,
                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
=======
                          const target = e.target as HTMLImageElement;
                          target.src = &quot;https://ui-avatars.com/api/?name=&quot; + encodeURIComponent(listing.author.name);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        }}
                      />
                    ) : (
                      <div className=&quot;h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center&quot;>
                        <span className=&quot;text-lg font-medium text-zion-purple&quot;>{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className=&quot;font-medium text-white&quot;>{listing.author.name}</p>
                      <p className=&quot;text-xs text-zion-slate-light&quot;>Member since 2022</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className=&quot;border-t border-zion-blue-light mt-6 pt-6&quot;>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Listed on</span>
                    <span className=&quot;text-white&quot;>{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>ID</span>
                    <span className=&quot;text-white&quot;>{listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className=&quot;bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md&quot;>
          <DialogHeader>
            <DialogTitle className=&quot;text-xl font-bold text-white&quot;>Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType=&quot;service&quot;
          />
        </DialogContent>
      </Dialog>
    </AppLayout>
  )
=======
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
;
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <img;
                        src={listing.author.avatarUrl} ;
                        alt={listing.author.name} ;
                        className="h-12 w-12 rounded-full";
                        onError={(e) => {;
                          const target = e.target as HTMLImageElement;
                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing.id}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;
          <DialogHeader>;
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profileName={listing.author.name}
            profileType="service";
          />;
        </DialogContent>;
      </Dialog>;
    </AppLayout>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;