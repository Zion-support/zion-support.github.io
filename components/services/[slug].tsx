<<<<<<< HEAD
<<<<<<< HEAD

 
 
}function getAllServices () : Service[] {
  return enhancedRealMicroSaasServices .concat (extraServices as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[])
}return {
  paths: Array.from (slugs) .map ( (slug) => ({
  params: {
  slug
}) );
fallback: false
}export default function ServiceDetailPage ({
  service
}: {
  service: Service
}) {
  return (<Layout> <Head> <title> {
  service.name
}| Zion Tech Group</title>
}
null;
2)
}/> </Head> </li>) )
}</ul> </div>) )
}</ul> </div> <div>) )
2) 
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}function getAllServices () : Service[] {


2) 
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  service.name 
}| Zion Tech Group</title> ;
};
null;
<<<<<<< HEAD
2)
2) 
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}/> </Head> </li>) ) 
}</ul> </div>) ) 
}</ul> </div> <div>) ) 
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
<<<<<<< HEAD
  service.marketPosition
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  service.marketPosition 
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi 
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}</p>
}{
  service.competitors?.length ? () : null
}<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a> return (<EnhancedLayout> <Head> <title>Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {
  service.name
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>

}
export default ServiceDetail
export default ServiceDetail
}
  service.name 
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
};
export default ServiceDetail 
export default ServiceDetail
<<<<<<< HEAD
};
;
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
}<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a> return (<EnhancedLayout> <Head> <title>Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {;
  service && service.name ;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link> ;
};
export default ServiceDetail ;
export default ServiceDetail;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
  return enhancedRealMicroSaasServices .concat (extra_services as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[]);
}return {
  paths: Array.from (slugs) .map ( (slug) => ({
  params: {
  slug;
}) );
fallback: false;
}export default /**
 * ServiceDetailPage - Function description
 */
function ServiceDetailPage() {
  return (<Layout> <Head> <title> {
  service.name;
}| Zion Tech Group</title>;
}
null;
2);
}/> </Head> </li>) );
}</ul> </div>) );
}</ul> </div> <div>) );
}</div> </div> </div> </div> </div> </div> </div> <div className="p - 6 bg - black / 40 border border - gray - 700 / 50 rounded - lg" > <h3 className="text - white font - semibold mb - 3" >Contact</h3> <div className="space - y-3 text - sm" > <div className="flex items - center gap - 2 text - cyan - 400" ><Phone className="w - 4 h - 4" /><a href= {
  `tel:$ {
  contact_info.mobile.replace (/[^+\\d]/g, '');
}`;
}className="hover:underline" > {
  contact_info.mobile;
}</a></div> <div className="flex items - center gap - 2 text - purple - 400" ><Mail className="w - 4 h - 4" /><a href= {
  `mailto:$ {
  contact_info.email;
}`;
}className="hover:underline" > {
  contact_info.email;
}</a></div> <div className="flex items - center gap - 2 text - green - 400" ><MapPin className="w - 4 h - 4" /><a href= {
  `https://maps.google.com/?q=$ {
  encodeURIComponent (contact_info.address);
}`;
}target="blank" rel="noopener noreferrer" className="hover:underline" > {
  contact_info.address;
}</a></div> </div> </div> {
  /* Market Position & ROI */;
}<div className="p - 6 bg - black / 40 border border - gray - 700 / 50 rounded - lg" > <h3 className="text - white font - semibold mb - 3" >Market & ROI</h3> <div className="space - y-3 text - sm text - gray - 300" > {
  service.market_position && <p className="leading - relaxed" ><span className="text - gray - 400" >Position:</span> {
  service.market_position;
}</p>;
}{
  service.roi && <p className="leading - relaxed" ><span className="text - gray - 400" >ROI:</span> {
  service.roi;
}</p>;
}{
  service.competitors?.length ? () : null;
}<a href="/market - pricing" className="inline - block mt - 2 text - cyan - 300 hover: text - cyan - 200">See average market prices →</a> return (<EnhancedLayout> <Head> <title > Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {
  service.name;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text - sm text - blue - 600 hover:underline">Back to Services</a></Link>;
}
export default ServiceDetail;
export default ServiceDetail;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
