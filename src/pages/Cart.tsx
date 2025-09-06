 ;
}
};
toast ({;
  title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist', description: wasWishlisted ? `$ {;
  name ';
}has been removed from your wishlist` //Only add shipping for physical items const hasPhysicalItems = items.some (item => !item.type || item.type === 'physical' //Default to physical if type not specified > <div className="mb-8" > <ShoppingCart className="mx-auto h-24 w-24 text-zion-slate-light mb-4" /> <h1 className="text-3xl font-bold text-white mb-4" >Your Cart is Empty</h1> <p className="text-zion-slate-light text-lg" > Ready to start shopping? Browse our equipment and add items to your cart. </p> </div> Browse Equipment </Link> </Button> <div className="grid md:grid-cols-2 gap-4 mt-8" > <Card className="bg-zion-blue-light/50 border-zion-cyan/20" > <CardContent className="p-6 text-center" > <Shield className="mx-auto h-8 w-8 text-zion-cyan mb-2" /> <h3 className="text-white font-medium mb-1" >Secure Payments</h3> <p className="text-zion-slate-light text-sm" >All transactions are encrypted and secure</p> </CardContent> </Card> <Card className="bg-zion-blue-light/50 border-zion-cyan/20" > <CardContent className="p-6 text-center" > <Package className="mx-auto h-8 w-8 text-zion-cyan mb-2" /> <h3 className="text-white font-medium mb-1" >Fast Shipping</h3> <p className="text-zion-slate-light text-sm" >Free shipping on orders over $100</p> </CardContent> </Card> </div> </div> </motion.div> </div> </div>) ;
}> {;
  items.map ( (item, index) => (<motion.div key= {;
  item.id ;
}initial= {;
  {;
  opacity: 0, y: 20 ;
}
}animate= {;
  {;
  opacity: 1, y: 0 ;
}
}transition= {;
  {;
  delay: index * 0.1 ;
}";
}> </div> <div className="flex items-center gap-4" > <div className="flex items-center gap-2" > <Button > + </Button> </div> </p> <div className="flex flex-col items-end gap-1" > <Button > Remove </Button> <Button > Add to Wishlist </Button> </div> </div> </div> </div> </CardContent> </Card> </motion.div>) ) ;
}</motion.div> {;
  /* Order Summary */ ";
}<motion.div > <Card className="bg-zion-blue-light/80 border-zion-cyan/20 sticky top-8" > <CardHeader> <CardTitle className="text-white flex items-center gap-2" > <CreditCard className="h-5 w-5 text-zion-cyan" /> Order Summary </CardTitle> </CardHeader> </div> <div className="flex justify-between text-zion-slate-light" > <span>Estimated Tax</span> <span>$ {;
  tax.toFixed (2) ";
}</span> </div> <div className="flex justify-between text-zion-slate-light" > <span>Shipping</span> <span> {';
  shipping === 0 ? 'Free' : `$$ {;
  shipping.toFixed (2) ;
}` ;
}</span> </div> Free Shipping Applied! </Badge> </div>) ";
}<div className="border-t border-zion-cyan/20 pt-2" > <div className="flex justify-between text-white font-bold text-lg" > <span>Total</span> <span>$ {;
  total.toFixed (2) ;
}</span> </div> </div> </div> </div>) ;
}<Button > {'";
  loading ? ('Processing...') : (<> Proceed to Checkout <ArrowRight className="h-4 w-4 ml-2" /> </>) ;
}</Button> {;
  /* Login link removed to streamline guest checkout experience */ ";
}</div> <span>SSL Encrypted Checkout</span> </div> <div className="flex items-center gap-2 text-zion-slate-light text-sm" > <Package className="h-4 w-4 text-blue-400" /> <span>30-Day Return Policy</span> </div> </div> </CardContent> </Card> </motion.div> </div> {;
  /* Guest Checkout Modal */ ;
}<GuestCheckoutModal open= {;
  guestOpen ;
}onOpenChange= {;
  setGuestOpen ;
}onSubmit= {;
  (details) => handleCheckout (details) ;
}/> </div> </div>) ;
}'"