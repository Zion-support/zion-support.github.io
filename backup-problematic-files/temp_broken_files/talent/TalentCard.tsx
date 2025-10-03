







    ;





      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple";"
      onClick={handleViewProfile}
      tabIndex={0}
    >;




                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}"
                  className="w-full h-full object-cover";""
                  loading="lazy";"
                />;
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>)
              </div>;            )}
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>;""
              <FavoriteButton itemId={talent.id} className="-mt-1" />;"
            <p className="text-white font-medium">{talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;"
                  <span>{talent.location}</span>;
                  <Clock className="h-4 w-4 mr-1" />;"
                  <span>{talent.availability_type}</span>;
                </div>;              )}
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;"
                <span ;
                  key={index}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light";"
                >;                  {skill}
</span>
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
                </span>;              )}







//Also call the onViewProfile callback if provided </div>) ;
}</div> <span >{;
}</span> </div>) ;
}</div> </div> </div> <span key= {;
  index ;"
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" >{;"
}$ {;
  talent.hourly rate ";
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";
}</div> <Button size="sm" variant="secondary" onClick={;
  handleRequestHire ";

}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";
}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;
};
"