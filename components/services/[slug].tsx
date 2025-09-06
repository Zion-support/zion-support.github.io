  service.name 
}| Zion Tech Group</title> ;
};
null;

}</div> </div> </div> </div> </div> </div> </div> <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Contact</h3> <div className="space-y-3 text-sm" > <div className="flex items-center gap-2 text-cyan-400" ><Phone className="w-4 h-4" /><a href= {
  `tel:$ {
  contactInfo.mobile.replace (/[^+\\d]/g, '')
}`
}className="hover:underline" > {
  contactInfo.mobile
}</a></div> <div className="flex items-center gap-2 text-purple-400" ><Mail className="w-4 h-4" /><a href= {
  `mailto:$ {
  contactInfo.email
}`
}className="hover:underline" > {
  contactInfo.email
}</a></div> <div className="flex items-center gap-2 text-green-400" ><MapPin className="w-4 h-4" /><a href= {
  `https://maps.google.com/?q=$ {
  encodeURIComponent (contactInfo.address)
}`
}target="blank" rel="noopener noreferrer" className="hover:underline" > {
  contactInfo.address
}</a></div> </div> </div> {
  /* Market Position & ROI */
}<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Market & ROI</h3> <div className="space-y-3 text-sm text-gray-300" > {
  service.marketPosition && <p className="leading-relaxed" ><span className="text-gray-400" >Position:</span> {
  service.marketPosition 
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi 


}export default function ServiceDetailPage(): any ({;
  service ;
}: {;
  service: Service ;
}) {;
  return (<Layout> <Head> <title> {;
  service && service.name ;
}| Zion Tech Group</title> ;
};
null;
2) ;

}/> </Head> </li>) ) ;
}</ul> </div>) ) ;
}</ul> </div> <div>) ) ;
}</div> </div> </div> </div> </div> </div> </div> <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Contact</h3> <div className="space-y-3 text-sm" > <div className="flex items-center gap-2 text-cyan-400" ><Phone className="w-4 h-4" /><ahref= {
  `tel:$ {
  contactInfo && contactInfo.mobile.replace (/[^+\\d]/g, '') 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.mobile ;
}</a></div> <div className="flex items-center gap-2 text-purple-400" ><Mail className="w-4 h-4" /><ahref= {
  `mailto:$ {
  contactInfo && contactInfo.email 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.email ;
}</a></div> <div className="flex items-center gap-2 text-green-400" ><MapPin className="w-4 h-4" /><ahref= {
  `https://maps && maps.google.com/?q=$ {
  encodeURIComponent (contactInfo && contactInfo.address) 
}` 
}target="blank" rel="noopener noreferrer" className="hover:underline"> {;
  contactInfo && contactInfo.address ;
}</a></div> </div> </div> {;
  /* Market Position & ROI */ ;
}<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Market & ROI</h3> <div className="space-y-3 text-sm text-gray-300" > {;
  service && service.marketPosition && <p className="leading-relaxed" ><span className="text-gray-400" >Position:</span> {;
  service && service.marketPosition ;
}</p> ;
}{;
  service && service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {;
  service && service.roi ;
}</p> ;
}{;
  service && service.competitors?.length ? () : null ;
  service && service.name ;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link> ;
};
export default ServiceDetail ;
export default ServiceDetail;
  service.name 
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
};
export default ServiceDetail 
export default ServiceDetail
