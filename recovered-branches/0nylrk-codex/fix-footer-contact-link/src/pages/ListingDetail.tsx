    return (
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
  return (
    <AppLayout>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
                      className="w-full h-full object-cover"
                      onError={(e) => {;
                        const target = e && e.target as HTMLImageElement;
                        target && target.src = "/placeholder && placeholder.svg";
                      }}
                    />;
                  ) : (;
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">;
                      <span className="text-zion-slate-light">No image available</span>;
                    </div>;
                  )}
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        )}
                          className="w-full h-full object-cover"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;
                            target && target.src = "/placeholder && placeholder.svg";
                          }}
                        />;
                      </div>;
                    ))}
                  </div>;
                )}
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
                        <Star
                          key={i}
                          className={cn(
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
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;
                      </div>;
                    )}
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
=======
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md">;
          <DialogHeader>;
            <DialogTitle className="text - xl font - bold text - white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profile_name={listing.author.name}
            profile_type="service";
          />;
        </DialogContent>;
      </Dialog>;
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
