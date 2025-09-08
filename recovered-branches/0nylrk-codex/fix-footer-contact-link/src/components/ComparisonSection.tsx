
import {







                  {
                    service: "IT Equipment"
                    traditional: "Full Purchase"
                    zion: "Flexible Rental"
                    savings: "60%"
                  }
                  {


                    service: "24 / 7 Support",
                    traditional: "$2, 500 / mo",
                    zion: "$950 / mo",
                    savings: "62%",
                  },
                  {
                    service: "Storage Solutions",
                    traditional: "$800 / mo",
                    zion: "$350 / mo",
                    savings: "56%",
                  },
                  {
                    service: "Marketplace Listings",
                    traditional: "$99 / mo",
                    zion: "Free",
                    savings: "100%",
                  },
                ].map ((item, index) => (
                  <TableRow key={index} className="border - b border - zion - blue">;
                    <TableCell className="font - medium text - white">;
                      {item.service}

                    </TableCell>;
                    <TableCell className="text - center text - zion - slate-light">;

                      {item.traditional}
                    </TableCell>;
                    <TableCell className="text - center text - zion - cyan font-semibold">;
                      {item.zion}
                    </TableCell>;

                      {item.savings}

            
      </div>
  TableRow,;
} from "./ui/table";
export function ComparisonSection() {;
  return (

                  <TableHead className="text-white text-center">;
                    Traditional Providers;
                  </TableHead>;
                  <TableHead className="text-white text-center">;
                    With Zion;
                  </TableHead>;
                  <TableHead className="text-white text-center">;
                    Savings;
                  </TableHead>;


                  {;
                    service: "Server Hosting",;
                    traditional: "$1,200/mo",;
                    zion: "$650/mo",;
                    savings: "45%",;
                  },;
                  {;
                    service: "IT Equipment",;
                    traditional: "Full Purchase",;
                    zion: "Flexible Rental",;
                    savings: "60%",;
                  },;
                  {;
                    service: "24/7 Support",;
                    traditional: "$2,500/mo",;
                    zion: "$950/mo",;
                    savings: "62%",;
                  },;
                  {;
                    service: "Storage Solutions",;
                    traditional: "$800/mo",;
                    zion: "$350/mo",;
                    savings: "56%",;
                  },;
                  {;
                    service: "Marketplace Listings",;
                    traditional: "$99/mo",;
                    zion: "Free",;
                    savings: "100%",;
                  },;
                ].map((item, index) => (;
                  <TableRow key={index} className="border-b border-zion-blue">;
                    <TableCell className="font-medium text-white">;
                      {item && item.service}
                    </TableCell>;
                    <TableCell className="text-center text-zion-slate-light">;
                      {item && item.traditional}
                    </TableCell>;
                    <TableCell className="text-center text-zion-cyan font-semibold">;
                      {item && item.zion}
                    </TableCell>;
                    <TableCell className="text-center text-green-400 font-bold">;
                      {item && item.savings}
                    </TableCell>;










    </section>);



