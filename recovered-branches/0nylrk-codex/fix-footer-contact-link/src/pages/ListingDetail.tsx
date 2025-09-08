

  },






                        <img;
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}"
                          className="w-full h-full object-cover"



      <AppLayout>;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;"
          <div className="container mx-auto">;"
            <div className="text-center py-20">;"
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>;"
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>;'
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">;"
                <a href="/marketplace">Back to Marketplace</a>;"

              </Button>;
            </div>;
          </div>;
        </div>;

      </AppLayout>;
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  };
  return (
    ),;
  }
;
  const handleContact = () => {;
    setIsContactDialogOpen(true),;
  },;
;
  return (;
    );
  }

        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}






                      <div










                











                          key={i}
                          className={cn(
                            "h-5 w-5";
                            "h-5 w-5",

                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                    </div>

                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing"
                          description: "Redirecting to secure checkout..."
                        })



                        });
                      }}
                    <Button




                {/* Publisher Info */}"
                <div className="border-t border-zion-blue-light pt-6">;"
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;"
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <img;
                        src={listing.author.avatarUrl} ;
                        alt={listing.author.name} ;"
                        className="h-12 w-12 rounded-full";
                        onError={(e) => {;
                          const target = e.target as HTMLImageElement;"
                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                        }}
                      />;
                    ) : (;"
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}




                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">ID</span>;
                    <span className="text - white">{listing.id}</span>;

