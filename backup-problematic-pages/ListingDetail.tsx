      <ChatWidget
roomId = {listing.id}
        recipientId = {listing.author.id}
        isOpen = {isChatOpen}
        onClose = {() => setIsChatOpen(false)}
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
email={listing.author.email} // TypeScript now knows this might be undefined profileName={listing.author.name}
            profileType='service'          />            profileType="service"
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact
email={listing.author.email} // TypeScript now knows this might be undefined profileName={listing.author.name}
            profileType="service"
          />
        </DialogContent>
      </Dialog>
</>
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
}'"}
