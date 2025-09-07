
import {useState} from "react";""
import {useParams} from "react-router-dom";""
import {Badge} from "@/components/ui/badge";""
import {Button} from "@/components/ui/button";""
import {Skeleton} from "@/components/ui/skeleton";""
import {Star, MessageSquare, Brain, Shield} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {MARKETPLACE_LISTINGS} from "@/data/marketplaceData";""
import {toast} from "@/hooks/use-toast";""
import {PaymentButton} from "@/components/transactions/PaymentButton";""
import {AppLayout} from "@/layout/AppLayout";""
import {ProfileContact} from "@/components/profile/ProfileContact";""
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";"
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
"
import { useState } from "react",""
import { useParams } from "react-router-dom",""
import { Badge } from "@/components/ui/badge",""
import { Button } from "@/components/ui/button",""
import { Skeleton } from "@/components/ui/skeleton",""
import { Star, MessageSquare, Brain, Shield } from "lucide-react",""
import { cn } from "@/lib/utils",""
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",""
import { toast } from "@/hooks/use-toast",""
import { PaymentButton } from "@/components/transactions/PaymentButton",""
import { AppLayout } from "@/layout/AppLayout",""
import { ProfileContact } from "@/components/profile/ProfileContact",""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";"
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  // Find the listing from our shared data source - now also checking equipment listings;"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog","
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),

  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
  if (!listing) {
    return (
      <AppLayout>
</AppLayout>"
        <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
          <div className="container mx-auto">"
</div>"
            <div className="text-center py-20">"
</div>"
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>""
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>''
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">"
</Button>"
                <a href="/marketplace">Back to Marketplace</Link>"
</a>

              </Button>
            </div>
          </div>
        </div>

      </AppLayout>
    <AppLayout>
</AppLayout>"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
        <div className="container mx-auto">"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>"
            <div className="lg:col-span-2">"
</div>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">"
</div>"
                <div className="aspect-[16/9] w-full relative">"
</div>
                    <img;
                      src={listing.images[selectedImageIndex]}
                      alt={listing.title}"
                      className="w-full h-full object-cover"")
                      onError={(e) => {
</img>"
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">"
</div>"
                      <span className="text-zion-slate-light">No image available</span>"
                    </div>
                </div>"
                  <div className="flex p-4 gap-2 overflow-x-auto">"
</div>
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img;
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}"
                          className="w-full h-full object-cover""
                          onError={(e) => {
</img>
      <AppLayout>;
</AppLayout>"
        <div className="min-h-screen bg-zion-blue py-12 px-4">;"
</div>"
          <div className="container mx-auto">;"
</div>"
            <div className="text-center py-20">;"
</div>"
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>;""
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>;''
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">;"
</Button>"
                <a href="/marketplace">Back to Marketplace</a>;"

              </Button>;
            </div>;
          </div>;
        </div>;

      </AppLayout>;
    <AppLayout>;
</AppLayout>"
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
</div>"
        <div className="container mx-auto">;"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
            <div className="lg:col-span-2">;"
</div>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;"
</div>"
                <div className="aspect-[16/9] w-full relative">;"
</div>
                    <img;
                      src={listing && listing.images[selectedImageIndex]} 
                      alt={listing && listing.title} 
"
                      className="w-full h-full object-cover""
                      onError={(e) => {;
</img>
                    <img ;"
            <div className="lg:col-span-2">;"
</img>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;"
</div>"
                <div className="aspect-[16/9] w-full relative">;"
</div>
                    <img;
                      src={listing.images[selectedImageIndex]} ;
                      alt={listing.title} ;"
                      className="w-full h-full object-cover";"
                      onError={(e) => {;
</img>"
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">;"
</div>"
                      <span className="text-zion-slate-light">No image available</span>;"
                    </div>;
                </div>;"
                  <div className="flex p-4 gap-2 overflow-x-auto">;"
</div>
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img;
                          src={image} 
                          alt={`${listing && listing.title} - image ${index + 1}`} 
"
                          className="w-full h-full object-cover""
                          onError={(e) => {;
</img>
                        <img;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";"
                          onError={(e) => {;
</img>
                      </div>;
                  </div>;"
                <div className="mt-8">"
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>""
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>"
                    <div className="flex items-start gap-3">"
</div>"
                      <div className="p-2 rounded-full bg-zion-purple/20">"
</div>"
                        <Brain className="h-5 w-5 text-zion-purple" />"
</Brain>
                      </div>
                      <div>
</div>"
                        <h4 className="font-medium text-white">Advanced AI</h4>""
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>"
                      </div>
                    </div>"
                    <div className="flex items-start gap-3">"
</div>"
                      <div className="p-2 rounded-full bg-zion-cyan/20">"
</div>"
                        <Shield className="h-5 w-5 text-zion-cyan" />"
</Shield>
                      </div>
                      <div>
</div>"
                        <h4 className="font-medium text-white">Enterprise Security</h4>""
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>"
                      </div>
                    </div>
                  </div>
                </div>
              </div>;"
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;"
</div>"
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;""
                <p className="text-zion-slate-light whitespace-pre-line">{listing && listing.description}</p>;""
                  <div className="flex p-4 gap-2 overflow-x-auto">;"
</div>
                      <div ;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img ;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";"
                          onError={(e) => {;
</img>
                      </div>;                    ))}
                  </div>;
              </div>;"
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;"
</div>"
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;""
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>;""
                <div className="mt-8">;"
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>;""
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>"
                    <div className="flex items-start gap-3">;"
</div>"
                      <div className="p-2 rounded-full bg-zion-purple/20">;"
</div>"
                        <Brain className="h-5 w-5 text-zion-purple" />;"
</Brain>
                      </div>;
                      <div>;
</div>"
                        <h4 className="font-medium text-white">Advanced AI</h4>;""
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>;"
                      </div>;
                    </div>;"
                    <div className="flex items-start gap-3">;"
</div>"
                      <div className="p-2 rounded-full bg-zion-cyan/20">;"
</div>"
                        <Shield className="h-5 w-5 text-zion-cyan" />;"
</Shield>
                      </div>;
                      <div>;
</div>"
                        <h4 className="font-medium text-white">Enterprise Security</h4>;""
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>;"
                      </div>;
                    </div>;
                  </div>;
                </div>;"
                <div className="mt-8">;"
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;""
                  <div className="flex flex-wrap gap-2">;"
</div>"
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;"
</Badge>
                      </Badge>;"
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;"
</Badge>
                      </Badge>;                    ))}
                  </div>;
                </div>;
              </div>;
            </div>;"
            <div className="lg:col-span-1">;"
</div>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
</div>"
                <div className="mb-2">;"
</div>"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;"
</Badge>
                  </Badge>;"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;"
</Badge>
                    </Badge>;
                </div>;"
                <h1 className="text-2xl font-bold text-white mb-4">{listing && listing.title}</h1>;""
                  <div className="flex items-center gap-2 mb-6">;"
</div>"
                    <div className="flex items-center">;"
</div>
                        <Star;
                          key={i}
                          className={cn(

"
                            "h-5 w-5",")"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light""
                          )}
                        />;
</Star>
                    </div>;"
                    <span className="text-sm text-zion-slate-light">;"
</span>
                    </span>;
                  </div>;"
                <div className="mb-6">;"
</div>"
                    <div className="text-3xl font-bold text-white">;"
</div>
                    </div>;"
                    <div className="text-2xl font-bold text-white">;"
</div>
                    </div>;
                </div>;"
                <div className="space-y-3 mb-8">;"
</div>
                    <PaymentButton;
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}"
                      buttonText="Buy Now"""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6""
            ;
            {/* Right Column - Details */}"
            <div className="lg:col-span-1">;"
</PaymentButton>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
</div>"
                <div className="mb-2">;"
</div>"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;"
</Badge>
                  </Badge>;"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;"
</Badge>
                    </Badge>;
                </div>;"
                <div className="mt-8">;"
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;""
                  <div className="flex flex-wrap gap-2">;"
</div>"
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;"
</Badge>
                      </Badge>;"
            <div className="lg:col-span-1">;"
</div>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
</div>"
                <div className="mb-2">;"
</div>"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;"
</Badge>
                  </Badge>;"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;"
</Badge>
                    </Badge>;"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"""
                            "h-5 w-5"""
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light""
                          )}
                        />;
                      ))}
                    </div>;"
                    <span className="text-sm text-zion-slate-light">;"
</span>
                    </span>;
                  </div>;"
                <div className="mb-6">;"
</div>"
                    <div className="text-3xl font-bold text-white">;"
</div>
                    </div>;"
                    <div className="text-2xl font-bold text-white">;"
</div>
                    </div>;"
                <div className="space-y-3 mb-8">;"
</div>
                    <PaymentButton;
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}"
                      buttonText="Buy Now"""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6""
                {/* Tags */}"
                <div className="mt-8">"
</PaymentButton>"
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>""
                  <div className="flex flex-wrap gap-2">"
</div>"
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">"
</Badge>

                      </Badge>
                  </div>
                </div>
              </div>

            </div>"
            <div className="lg:col-span-1">"
</div>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">"
</div>"
                <div className="mb-2">"
</div>"
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">"
</Badge>
                  </Badge>"
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">"
</Badge>
                    </Badge>
                </div>"
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>""
                  <div className="flex items-center gap-2 mb-6">"
</div>"
                    <div className="flex items-center">"
</div>
                        <Star;
                          key={i}
                          className={cn("
                            "h-5 w-5";""
                            "h-5 w-5",")"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light""
                          )}
                        />
</Star>
                    </div>"
                    <span className="text-sm text-zion-slate-light">"
</span>
                    </span>
                  </div>"
                <div className="mb-6">"
</div>"
                    <div className="text-3xl font-bold text-white">"
</div>
                    </div>"
                    <div className="text-2xl font-bold text-white">"
</div>
                    </div>
                </div>"
                <div className="space-y-3 mb-8">"
</div>
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}"
                      buttonText="Buy Now"""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6""
                      onPaymentInitiated={() => {
</PaymentButton>"
                <div className="space-y-3 mb-8">;"
</div>
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}"
                      buttonText="Buy Now";""
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";"
                      onPaymentInitiated={() => {;
</PaymentButton>
                    <Button;
                      onClick={handleContact}
                      disabled={isLoading}"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;"
</Button>
                    </Button>;
                  <Button;"
                    variant="outline""
                    onClick={handleContact}
                    disabled={isLoading}"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"
</Button>"
                    <MessageSquare className="h-4 w-4 mr-2" />;"
</MessageSquare>
                  </Button>;
                </div>;"
                <div className="border-t border-zion-blue-light pt-6">;"
</div>"
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;""
                  <div className="flex items-center gap-3">;"
</div>
                      <img;
                        src={listing.author.avatarUrl}
                        alt={listing.author.name}"
                        className="h-12 w-12 rounded-full""
                        onError={(e) => {
</img>"
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">"
</div>"
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>"
                      </div>
                    <div>
</div>"
                      <p className="font-medium text-white">{listing.author.name}</p>""
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>"
                    </div>
                  </div>
                </div>"
                <div className="border-t border-zion-blue-light mt-6 pt-6">"
</div>"
                  <div className="flex justify-between mb-2">"
</div>"
                    <span className="text-zion-slate-light">Listed on</span>""
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>"
                  </div>"
                  <div className="flex justify-between mb-2">"
</div>"
                    <span className="text-zion-slate-light">ID</span>""
                    <span className="text-white">{listing.id}</span>"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
</Dialog>"
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">"
</DialogContent>
          <DialogHeader>
</DialogHeader>"
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>"
          </DialogHeader>
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profileName={listing.author.name}"
            profileType="service""
          />
</ProfileContact>
        </DialogContent>
      </Dialog>
    </AppLayout>"
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
</div>"
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;"
                      </div>;
                  <Button;"
                    variant="outline""
                    onClick={handleContact}
                    disabled={isLoading}"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"
</Button>"
                    <MessageSquare className="h-4 w-4 mr-2" />;"
</MessageSquare>
                  </Button>;
                </div>;"
                <div className="border-t border-zion-blue-light pt-6">;"
</div>"
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;""
                  <div className="flex items-center gap-3">;"
</div>
                      <img;
                        src={listing && listing.author.avatarUrl} 
                        alt={listing && listing.author.name} "
                        className="h-12 w-12 rounded-full""
                        }}
                      />;
</img>"
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
</div>"
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;"
                      </div>;
                    </Button>;
                  <Button;"
                    variant="outline";"
                    onClick={handleContact}
                    disabled={isLoading}"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";"
                  >;
</Button>"
                    <MessageSquare className="h-4 w-4 mr-2" />;"
</MessageSquare>
                  </Button>;
                </div>;"
                <div className="border-t border-zion-blue-light pt-6">;"
</div>"
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;""
                  <div className="flex items-center gap-3">;"
</div>
                      <img;
                        src={listing.author.avatarUrl} ;
                        alt={listing.author.name} ;"
                        className="h-12 w-12 rounded-full";"
                        onError={(e) => {;
</img>"
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
</div>"
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;"
                      </div>;
                    <div>;
</div>"
                      <p className="font-medium text-white">{listing && listing.author.name}</p>;""
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;"
                    </div>;
                  </div>;
                </div>;"
                <div className="border-t border-zion-blue-light mt-6 pt-6">;"
</div>"
                  <div className="flex justify-between mb-2">;"
</div>"
                    <span className="text-zion-slate-light">Listed on</span>;""
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;"
                  </div>;"
                  <div className="flex justify-between mb-2">;"
</div>"
                    <span className="text-zion-slate-light">ID</span>;""
                    <span className="text-white">{listing && listing.id}</span>;""
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;"
                  </div>;"
                  <div className="flex justify-between mb-2">;"
</div>"
                    <span className="text-zion-slate-light">ID</span>;""
                    <span className="text-white">{listing.id}</span>;"
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
</Dialog>"
        <DialogContent className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md">;"
</DialogContent>
          <DialogHeader>;
</DialogHeader>"
            <DialogTitle className="text - xl font - bold text - white">Contact Publisher</DialogTitle>;"
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profile_name={listing.author.name}"
            profile_type="service";"
          />;
</ProfileContact>
        </DialogContent>;
      </Dialog>;
    </AppLayout>);
    </AppLayout>);
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
</Dialog>"
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;"
</DialogContent>
          <DialogHeader>;
</DialogHeader>"
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;"
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profileName={listing.author.name}"
            profileType="service";"

          />;
</ProfileContact>
        </DialogContent>;
      </Dialog>;

    </AppLayout>;"
}w-full h-full flex items-center justify-center bg-zion-blue-light/20"> <span className=" text-zion-slate-light">No image available</span> </div>)"
}</div> 
}</div>) "
}</div> </div> <div> <h4 className=" font-medium text-white">Advanced AI</h4> <p className=" text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p> </div> </div> <div className=" flex items-start gap-3"> <div className=" p-2 rounded-full bg-zion-cyan/20"> <Shield className=" h-5 w-5 text-zion-cyan"/> </div> <div> <h4 className=" font-medium text-white">Enterprise Security</h4> <p className=" text-sm text-zion-slate-light">Built-in data protection and encryption</p> </div> </div> </div> </div> </Badge>) )"
}</div> </div> </div> </div> Featured </Badge>) 
}</div>) 
}</div> </span> </div>) "
}</div>) : (<div className=" text-2xl font-bold text-white"> Custom Pricing </div>)"
}</div> 
}/>) : (<Button </Button>) "
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div>""
}/>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {"
</div>)
}</span> </div>) "
}<div> <p className=" font-medium text-white"> {"
</div>"
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </AppLayout>)"
    </AppLayout>);"

