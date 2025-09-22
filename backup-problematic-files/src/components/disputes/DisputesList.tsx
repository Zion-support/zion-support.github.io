
=======
import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD

              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;

          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;
        <Button;
          variant={statusFilter === "open" ? "default" :"outline"}
          onClick={() => setStatusFilter("open")}

                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}
