






  subcategory?: string;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number;



    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";

    specifications: [





      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [




    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";





  if (!equipment) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>





    

  },






export default function EquipmentDetail() {;

  if (!equipment) {;
    return (



  const handleAddToCart = () => {;
    setIsAdding(true);




  const handleBuyNow = () => {;
    setIsAdding(true);




            {/* Left Column - Images */}



                  <TabsContent value="description" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                  <TabsContent value="specifications" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                        {equipment && equipment.specifications.map((spec, index) => (;
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;
                            <div className="flex justify-between">;
                              <span className="text-zion-slate-light">{spec && spec.name}</span>;

                  <TabsContent value="features" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <ul className="space-y-2">;
                        {equipment && equipment.features.map((feature, index) => (;
                          <li key={index} className="flex items-start gap-2">;
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;
                            <span className="text-zion-slate-light">{feature}</span>;
                          </li>;
                        ))}
      </>);
  }
  const handleAddToCart = () =>: any {
    setIsAdding (true);
;
    // Simulate API call;
    set_timeout (() => {
      setIsAdding (false);
      toast ({
        title: "Added to cart",
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  }
;
  const handleBuyNow = () =>: any {
    setIsAdding (true);
;
    // Simulate API call;
    set_timeout (() => {
      setIsAdding (false);
      toast ({
        title: "Proceeding to checkout",
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  }
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {/* Left Column - Images */}
            <div className="lg:col - span - 2">;
              <div className="bg - zion - blue - dark rounded - lg overflow - hidden border border - zion - blue - light">;
                {/* Main Image */}
                <div className="aspect - video w - full relative">;
                  <img;
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}
                    className="w - full h - full object - contain bg - zion - blue - light / 10 p - 4";
                  />;
                </div>;
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className="flex p - 4 gap - 2 overflow - x-auto">;
                    {equipment.images.map ((image, index) => (
                      <div;
                        key={index}
                        on_click={() => setSelectedImageIndex (index)}
                        className={`w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2 ${
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent";
                        }`}
                      >;
                        <img;
                          src={image}
                          alt={`${equipment.name} - image ${index + 1}`}
                          className="w - full h - full object - cover";
                        />;
                      </div>))}
                  </div>)}
              </div>;
              {/* Product Details Tabs */}
              <div className="mt - 8">;
                <Tabs default_value="description" className="w - full">;
                  <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 3 h - auto">;
                    <TabsTrigger value="description" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Description;
                    </TabsTrigger>;
                    <TabsTrigger value="specifications" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Specifications;
                    </TabsTrigger>;
                    <TabsTrigger value="features" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Features;
                    </TabsTrigger>;
                  </TabsList>;
                  <TabsContent value="description" className="mt - 4">;
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
                      <p className="text - zion - slate - light whitespace - pre - line">;
                  <img ;
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">;
                  <img;
                    src={equipment.images[selectedImageIndex]} ;
                    alt={equipment.name} ;
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4";
                  />;
                </div>;
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {equipment.images.map((image, index) => (;
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        }`}
                      >;
                        <img;
                          src={image} ;
                          alt={`${equipment.name} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                        />;

                  ;
                  <TabsContent value="specifications" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                        {equipment.specifications.map((spec, index) => (;
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;
                            <div className="flex justify-between">;
                              <span className="text-zion-slate-light">{spec.name}</span>;
                              <span className="text-white font-medium">{spec.value}</span>;

                            </div>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </TabsContent>;













                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">

                    onClick={handleBuyNow}
                    disabled={isAdding |!equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                  >"
                    {isAdding ? "Processing..." : "Buy Now"}
                  </Button>



                    onClick={handleAddToCart}
                    disabled={isAdding |!equipment.inStock}"
                    variant="outline""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >"
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart;
                  </Button>
                </div>


                  ;
                  {/* Warranty */}
                  {equipment.warranty && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Warranty</p>;
                  {/* Return Policy */}
                  {equipment && equipment.returnPolicy && (;
                        <p className="text-xs">{equipment.warranty}</p>;
                      </div>;
                    </div>;                  )}
                  ;
                  {/* Return Policy */}
                  {equipment.returnPolicy && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Returns</p>;
            {/* Right Column - Purchase Info */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {/* Shipping */}

                  <div className="flex gap-3 text-zion-slate-light">
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>




