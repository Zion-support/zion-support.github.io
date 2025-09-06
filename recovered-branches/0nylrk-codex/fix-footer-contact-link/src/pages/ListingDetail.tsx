 //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. if (!listing) {
  return (<AppLayout> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <h1 className="text-3xl font-bold text-white mb-4" >Listing Not Found</h1> <p className="text-zion-slate-light mb-8" >The listing you're looking for doesn't exist or has been removed.</p> <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark" > <a href="/marketplace" >Back to Marketplace</Link> </Button> </div> </div> </div> </AppLayout> 
}
}w-full h-full flex items-center justify-center bg-zion-blue-light/20"> <span className=" text-zion-slate-light">No image available</span> </div>) 
}</div> 
}
}
}</div>) 
}</div> </div> <div> <h4 className=" font-medium text-white">Advanced AI</h4> <p className=" text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p> </div> </div> <div className=" flex items-start gap-3"> <div className=" p-2 rounded-full bg-zion-cyan/20"> <Shield className=" h-5 w-5 text-zion-cyan"/> </div> <div> <h4 className=" font-medium text-white">Enterprise Security</h4> <p className=" text-sm text-zion-slate-light">Built-in data protection and encryption</p> </div> </div> </div> </div> </Badge>) ) 
}</div> </div> </div> </div> Featured </Badge>) 
}</div>) 
}/>) ) 
}</div> </span> </div>) 
}</div>) : (<div className=" text-2xl font-bold text-white"> Custom Pricing </div>) 
}</div> 
}
}/>) : (<Button </Button>) 
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> 
}
}/>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {
  listing.author.name.charAt (0) 
}</span> </div>) 
}<div> <p className=" font-medium text-white"> {
  listing.author.name 
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </AppLayout>) 
}