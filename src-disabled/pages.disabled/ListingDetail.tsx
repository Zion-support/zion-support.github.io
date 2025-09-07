const router = useRouter();
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { ChatWidget } from "@/components/ChatWidget",;
import { useRouter } from "next/router",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import Skeleton from "@/components/ui/skeleton",;
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { Star, MessageSquare, Brain, Shield } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { use_currency } from '@/hooks / use_currency';
export default /**
 * ListingDetail - Function description
 */
function ListingDetail() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = use_router ();,
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState (0);  const [is_loading, setIsLoading] = useState (false);,
  const [isContactDialogOpen, setIsContactDialogOpen] = useState (false);,
  const [isChatOpen, setIsChatOpen] = useState (false);
  const { user } = use_auth ();
  const { format_price } = use_currency ();
;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find (item => item.id ===,  id);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
        <div className='container mx - auto'>;
          <div className='text - center py - 20'>;
            <h1 className='text - 3xl font - bold text - white mb - 4'>;
              Listing Not Found;
            </h1>;
            <p className='text - zion - slate - light mb - 8'>;
              The listing you're looking for doesn't exist or has been removed.;
            </p>;
            <Button;
              as_child;
              className='bg - gradient - to - r from - zion - purple to - zion - purple - dark';
            >;
              <Link href='/marketplace' />Back to Marketplace</Link>;
            </Button>;
          </div>;
        </div>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center py-20">"
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>"
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>'
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">"
                <Link href="/marketplace" />Back to Marketplace</Link>"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        />
                      </div>
                    ) : (

<div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </div>
                    )}

                    <div>

                      <p className='font-medium text-white'>
                        {listing.author.name}
                      </p>
                      <p className='text-xs text-zion-slate-light'>
                        Member since 2022
                      </p>
                    </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">"
                  <div className="flex justify-between mb-2">"
                    <span className="text-zion-slate-light">Listed on</span>"
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>"
                  </div>
                  <div className="flex justify-between mb-2">"
                    <span className="text-zion-slate-light">ID</span>"
                    <span className="text-white">{listing.id}</span>"
                <div className='border-t border-zion-blue-light mt-6 pt-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'>
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing.id}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;
                      service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text='Buy Now';
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';',
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';
                      amount = {listing.price, }
                      service_id = {listing.id, }
                      provider_id = {listing.author.id, }
                      button_text="Buy Now";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";",
                      onPaymentInitiated={(, ) => {
                        toast ({
                          title: 'Payment Processing','
                          description: 'Redirecting to secure checkout...','
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                      onPaymentInitiated={(, ) => {
                        toast ({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        });
                      }}
                    />) : (
                    <Button;
                      on_click={handle_contact}
                      disabled={is_loading}
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'                    >;
                      {is_loading ? 'Processing...' : 'Request Quote'}'
                    </Button>)}
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                      {is_loading ? 'Processing...' : 'Request Quote'}
                    </Button>)}
                  <Button;
                    variant='outline';
                    on_click={handle_contact}
                    disabled={is_loading}
                    className='w - full border - zion - purple text - zion - cyan hover:bg - zion - purple / 10'                  >;
                    <MessageSquare className='h - 4 w - 4 mr - 2' />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">;
                        <ImageWithRetry;
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                          }}
                        />;
                      </div>;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                <div className='border - t border - zion - blue - light pt - 6'>;
                  <h3 className='text - lg font - bold text - white mb - 3'>;
                    Publisher;
                  </h3>;
                  <div className='flex items - center gap - 3'>;
                    {listing.author.avatar_url ? (
                      <div className='relative h - 12 w - 12 rounded - full overflow - hidden'>;
                        <ImageWithRetry;
                          src={listing.author.avatar_url}
                          alt={listing.author.name}
                          className='object - cover';
                          on_error={e => {
                            const target = e.target as HTMLImageElement;
                            target.src =;
                              'https://ui - avatars.com / api/?name=' +;
                              encodeURIComponent (listing.author.name);                          }}
                        />;
                      </div>) : (                            target.src = "https: //ui - avatars.com / api/?name=" + encodeURIComponent (listing.author.name);
                            target.src = "https: //ui - avatars.com / api/?name=" + encodeURIComponent (listing.author.name);
                          }}
                        />;
                      </div>) : (
                      <div className='h - 12 w - 12 rounded - full bg - zion - purple / 20 flex items - center justify - center'>;
                        <span className='text - lg font - medium text - zion - purple'>;
                          {listing.author.name.char_at (0)}
                        </span>;
                      </div>)}
                    <div>;
                      <p className='font - medium text - white'>;
                        {listing.author.name}
                      </p>;
                      <p className='text - xs text - zion - slate - light'>;
                        Member since 2022;
                      </p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>ID</span>;
                    <span className='text - white'>{listing.id}</span>                  </div>                      </div>)}'
                <div className='border - t border - zion - blue - light mt - 6 pt - 6'>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>Listed on</span>;
                    <span className='text - white'>;
                      {new Date (listing.created_at).toLocaleDateString ()}
                    </span>;
                  </div>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>ID</span>;
                    <span className='text - white'>{listing.id}</span>                  </div>                      </div>)}
                    <div>;
                      <p className="font - medium text - white">{listing.author.name}</p>;
                      <p className="text - xs text - zion - slate - light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border - t border - zion - blue - light mt - 6 pt - 6">;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">Listed on</span>;
                    <span className="text - white">{new Date (listing.created_at).toLocaleDateString ()}</span>;
                  </div>;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">ID</span>;
                    <span className="text - white">{listing.id}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      />;

      <ChatWidget
        roomId = {listing && listing.id,}
        recipientId = {listing && listing.author.id,}
        isOpen = {isChatOpen,}
        onClose = {() => setIsChatOpen(false),}
      />
      {/* Contact Dialog */}

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
<DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold text-white'>
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          <ProfileContact
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType='service'
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
;
  );
}/>) : (<Button </Button>) ";
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> ;
}";
}/> </div>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {listing.author.name.charAt (0) ;
}</span> </div>) ";
}<div> <p className=" font-medium text-white"> {listing.author.name ";
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> listing.id ;
}recipientId= {listing.author.id ;
}isOpen= {isChatOpen ;
}onClose= {() => setIsChatOpen (false) ";
}/> <DialogHeader> <DialogTitle className=" text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533